Package.describe({
  name: "gildaspk:moment-languages",
  summary: "Languages files for Moment.js. See http://momentjs.com.",
  version: "2.8.5",
  git: "https://github.com/djhi/meteor-moment-languages.git",
});

Package.on_use(function (api, where) {
  api.add_files('lib/locales.js', ['client', 'server']);
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use([ 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['tinytest', 'test-helpers'], ['client', 'server']);
    }
  });
}
