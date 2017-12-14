import React from 'react';
import queryString from 'query-string'; // URL 쿼리를 개체로

const About = ({location, match}) => {
    /*console.log('About Match :', match);
    console.log('About Match.isExact :', match.isExact);
    console.log('About Match.params :', match.params);
    console.log('About Match.path :', match.path);
    console.log('About Match.url :', match.url);*/

    const query = queryString.parse(location.search);

    const detail = query.detail === 'true';

    return(
        <div className="about">
            <h2>About {match.params.name}</h2>
            { detail && <p>'detail : blahblah'</p> }
        </div>
    );
};

export default About;