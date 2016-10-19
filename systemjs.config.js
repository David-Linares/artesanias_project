/**
 * Created by david on 7/10/16.
 */
/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function (global) {

    var pathMappings = {
        '@rxjs': 'node_modules/@rxjs',
    };

    var packages = [

        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/forms',
        '@angular/testing',
        'rxjs',
        'built',
    ];

    var packagesConfig = {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        }
    };
    
    packages.forEach(function (packageName) {
        packagesConfig[packageName] = {
            main: './index.js',
            defaultExtension: 'js'
        };
    });

    System.config({
        map: pathMappings,
        packages: packagesConfig,
    });

})(this);
