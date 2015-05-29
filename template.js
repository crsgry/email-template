exports.description = "Sets up DRC Email Shell"
exports.template = function(grunt, init, done) {
    init.process({}, [
        init.prompt("name","Job Number")
    ], function(err, props) {
        var files = init.filesToCopy(props);
        init.copyAndProcess(files, props);
        init.writePackageJSON("package.json", {
            name: props.name,
            devDependencies: {
                "grunt": "^0.4.5",
                "grunt-execute": "^0.2.2",
                "grunt-middleman": "^0.1.2",
                "grunt-prettify": "^0.4.0",
                "grunt-special-html": "0.0.2",
                "grunt-phantomjs-screenshot": "^0.1.2"
            }
        });
        done();
    });
};