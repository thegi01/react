import React from 'react';
import $ from 'jquery';

import Accordion  from '~/component/Common/Accordion';

import {logger, request} from '~/script/util/utility';
import _GA from '~/script/util/GoogleAnalytics';

export default class Faq extends React.Component {

	constructor(props){
		super(props);

		this.state ={
			categories: [],
			items : [],
			title : '',
			category: 'all'
		};

		this.handleClick = this.handleClick.bind(this);
	}

	componentDidMount(){

		_GA.sendScreen('자주 묻는 질문');

		let self = this;
		let _query = "VIC";

		this.request = request({
			server: 'api',
			api: '/hybridapp/renew/common/code/list',
			data: {'cd_divn_id': 'FAQ_CAT_CD'},
			success: function(response) {
				let all = [{'mst_cd': 'all', 'mst_nm': '전체'}];
				self.setState({
					categories: all.concat(response['cd_list']),
					category: _query || self.state.category
				}, function() {
					// self.handleClick();
				});
			},
			complete: function() {
				this.request = null;
			}
		});
	}

	componentWillUnmount() {
		this.requestRelease();
	}

	/*initNav(){
		let self = this;
		let _cates = self.state.categories;
		self.state.categories.map(function(item, index) {
		    if( item.mst_cd === self.state.category ){
		    	item.selected = true;
		    }
		    console.log(item);
		});
	}*/

	requestRelease() {
//		if (this.request) this.request.abort();
	}

	// 카테고리 선택
	handleClick( item ) {

		this.setState({
			category : item.mst_cd
		})

		let self = this;

		// let _element = event && event.target ? event.target : this.categoryContainer.firstChild;
		
		// if (_element) {
			// let _category = _element.dataset.key;
			// $(_element).siblings().removeClass('is--selected').end().addClass('is--selected');
			this.dataOptions = {
				server: 'api',
				api: '/hybridapp/renew/common/faq/list',
				data: {
					'rows': 10,
					'page': 1,
					'faq_cat_cd': self.state.category
				}
			};
			this.requestRelease();
			this.loadData();	
		// }
	}

	handleToggle(event) {
		if (!event || typeof event != 'object') return false;
		
		let $target = $(event.target).parents('.lst-item');
    	$target.children(':eq(1)').slideToggle('normal', function() {
    		$target.toggleClass('is--expanded');
    	});
    	
    	let gaOption ={
	               eventAction: '개별 질문 내역 클릭'
	           }
	       
	       try{_GA.sendEvent(gaOption);}catch(e){}
		
	}

	loadData() {
		var self = this;
		if (self.request && self.request['readyState'] == 1) return false;

		self.request = request(
			Object.assign(self.dataOptions, {
			success: function(data) {
				//logger.debug(arguments);
				// append
				if (self.dataOptions.data.page > 1) {

				}
				// exchange
				else {
					self.setState({items: data['faq_list']});
				}
			}
		}));
	}

	render() {
		return(
			<div>
				<div className="breadcrumb breadcrumb--faq">
		            <div className="breadcrumb-col--left">
		                <h2 className="breadcrumb-tit">
		                    <span className="breadcrumb-tit__txt">자주 묻는 질문</span>
		                </h2>
		            </div>
		        </div>
				<section className="faq">
					<h3 className="blind">카테고리</h3>
					<nav className="faq-nav">
						<div className="faq-nav-lst row" ref={(ref) => this.categoryContainer = ref}>
						{
							this.state.categories.map((item, i) => {
								let _selected;
								if(item.mst_cd === this.state.category){
									_selected = true;
								}
								return <div role="button" className="faq-nav__lnk col s4 ga-event" data-ga-action='메뉴 클릭' data-ga-label={item['mst_nm']} key={i} data-key={item['mst_cd']} data-selected={_selected} onClick={(e) => this.handleClick(item)}>{item['mst_nm']}</div>
							})
						}
						</div>
					</nav>
				<h3 className="blind">목록</h3>
				
					<ul className="lst-brd">
						{this.state.items.length > 0 ?
							this.state.items.map((item, i) => {
								return (
									<li className="lst-item" key={item['noticbd_id'] + item['no']}>
										<div className="lst-cnts" onClick={(e) => this.handleToggle(e)}>
										    <h4 className="lst__sjt">{item.title}</h4>
										    <span className="ico ico-arr ico-upDown--ty7"></span>    
										</div>
										<div className="lst-panel" style={{display:'none'}}>
										    <article className="lst-panel-article">
										        <h5 className="blind">상세</h5>
										        <FagContents content={item.content}/>
										    </article>    
										</div>
									</li>
								);
							})
							: <li className="lst-item">
								<div className="lst-cnts">등록된 데이터가 없습니다.</div>
							</li>
						}
					</ul>
				</section>
			</div>
		);
	}
}

class FagContents extends React.Component {
	
	componentDidMount() {
		if(this.props.content)
		this.content.innerHTML = this.props.content.replace(/\n/g, "<br/>");
		
	}
	render(){
		return(
			<p className="article-txt" ref = {(ref) => this.content = ref}></p>
		);
	}
}
