module.exports = {
    // 站点相关，项目名
    name: 'Pro-demo-build',
    // 子模块名称
    subMoudle: '/',
    // webpack: js 模块化相关
    webpack: {
        entry: {
             index: './src/js/index/demo.js',
             "com-alert-dialog" : './src/components/AlertDialog/com-alert-dialog.js'
/*            component: './src/js/component.js',
            zepto: './src/js/qmv/zepto.js',
            jquery: './src/js/qmv/jquery.min.js'*/
        },
        output: {
            filename: '[name].js'
        }
    },
    // alloykit 离线相关
    zipBlacklist: [],
    // 使用 alloydist 发布离线包
    offline: {},
    distId: '',
    token: 'ASdxseRTSXfiGUIxnuRisTU'
};
