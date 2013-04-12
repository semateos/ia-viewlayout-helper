(function (Package) {
    "use strict";

    Package.describe({
        summary: 'Utility class for managing layouts and views'
    });

    Package.on_use(function (api, where) {
        api.use(['deps', 'templating'], 'client');

        api.add_files([
            'lib/namespace.js',
            'lib/View.js'
        ], 'client');
    });
}(Package));
