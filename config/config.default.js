'use strict';

module.exports = appInfo => {

    const config = exports = {};

    // use for cookie sign key, should change to your own and keep security
    config.keys = appInfo.name + '_1516633535480_1545';

    // add your config here
    config.middleware = [];

    config.view = {
        defaultViewEngine: 'nunjucks',
        mapping: {
            '.njk': 'nunjucks',
        },
        cache: true
    };

    config.static = {
        dynamic: true,
        preload: false,
        buffer: false
    };


    config.api = "http://121.42.244.237:9090/api";

    config.alinode = {
        appid: '1548',
        secret: '908b784bbf1873476a0e651788fcd63ae703a025',
    };


    return config;
};
