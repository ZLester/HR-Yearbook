var app = new AppView({
  router: new AppRouter(),
  navbar: new NavBarView(),
});

// http://backbonejs.org/#History
Backbone.history.start()
