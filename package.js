Package.describe({
  summary: "Minimal AngularJS"
});

Package.on_use(function (api) {
  api.add_files('client/angular.js', 'client');
  api.add_files('client/app.js', 'client');
  api.add_files('client/client.js', 'client');

  api.add_files('public/angular.html', 'public');
  api.add_files('public/angular.css', 'public');

  api.add_files('server/server.js', 'server');

});
