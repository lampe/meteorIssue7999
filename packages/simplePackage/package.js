Package.describe({
    name: 'simple:package',
    version: '0.0.2',
});

Package.onUse(function (api) {
    api.versionsFrom('1.4.2');
    api.use('ecmascript');

    api.use([
        'random',
        'underscore'
    ], [ 'client', 'server' ]);

    api.use([
        'jquery'
    ], 'client');
});

Package.onTest(function (api) {
    api.versionsFrom('1.4.2');
    api.use('ecmascript');

    api.use([
        'practicalmeteor:mocha',
        'practicalmeteor:chai',
        'practicalmeteor:sinon'
    ]);

    api.addFiles('simplePackage.js');

    api.use([
        'mongo',
        'random',
        'underscore'
    ]);

    Npm.depends({
      'cheerio': '0.22.0'
    })
});
