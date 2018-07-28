 /// <binding ProjectOpened='Watch - Development' />
/*DO NOT MODIFY*/
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const DEVELOPMENT = require('./webpack.dev.js');
const PRODUCTION = require('./webpack.prod.js');

var BUILD = null;

if (process.env.NODE_ENV == 'production') {
    console.log(`Running in Production`)
    BUILD = merge(common, PRODUCTION);
} else if(process.env.NODE_ENV == 'development') {
    console.log(`Running in Development`)
    BUILD = merge(common, DEVELOPMENT);
}else{
    console.log(`webpack fallback build`)
    BUILD = merge(common, PRODUCTION);
}

module.exports = BUILD;