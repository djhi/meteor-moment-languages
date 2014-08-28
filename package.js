Package.describe({
  name: "moment-languages",
  summary: "Languages files for Moment.js, a JavaScript date library for dates, packaged for Meteor. See http://momentjs.com.",
  version: "2.8.1",
  git: "https://github.com/djhi/meteor-moment-languages.git",
});

Package.on_use(function (api, where) {
  where = where || ['client', 'server'];
  
  api.use(['mrt:moment'], where);
  api.add_files('lib/moment/min/locales.js', 'client');
});

if (Package.on_test) {
  Package.on_test(function (api) {
    if (Package.onTest) {
      api.use(['mrt:moment', 'tinytest', 'test-helpers'], ['client', 'server']);
    } else {
      api.use(['moment', 'tinytest', 'test-helpers'], ['client', 'server']);
    }
  });
}
