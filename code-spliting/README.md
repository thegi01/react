# Install
    $ npm add react-router-dom
    $ npm add cross-env --dev   ---> ???
    $ npm add query-string
    $ npm run eject
    $ npm add react-hot-loader@next


# Sample Components and Router
    folder : react-router-tutorial


# config/webpack.config.dev.js
    entry: {
       dev: 'react-error-overlay',
       vendor: [
         require.resolve('./polyfills'),
         'react',
         'react-dom',
         'react-router-dom'
       ],
       app: ['react-dev-utils/webpackHotDevClient', paths.appIndexJs]
     }

    ## output
        filename: 'static/js/[name].[hash].js',
        chunkFilename: 'static/js/[name].[chunkhash].chunk.js',


# package json
    "scripts": {
      "start": "cross-env NODE_PATH=src node scripts/start.js",
      "build": "cross-env NODE_PATH=src node scripts/build.js",
      "test": "cross-env NODE_PATH=src node scripts/test.js --env=jsdom"
    }


# Sample url
    https://velopert.com/3421
    ## asyncComponent
        https://gist.github.com/acdlite/a68433004f9d6b4cbc83b5cc3990c194
