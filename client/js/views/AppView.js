var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function() {
    this.collection = new Students(),
    this.router = new Router(),
    this.navbar = new NavBarView(),
    this.infoWindow = new InfoWindowView()
  }

});