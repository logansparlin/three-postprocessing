Package.describe({
  name: 'logansparlin:three-postprocessing',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'Postprocessing script extensions for the 3D library three.js',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/logansparlin/three-postprocessing.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md',
  dependencies: 'three.js'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0.4.2');
  api.addFiles('three-postprocessing.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('logansparlin:three-postprocessing');
  api.addFiles('three-postprocessing-tests.js');
});
