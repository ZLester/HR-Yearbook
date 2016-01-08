// http://backbonejs.org/#Router
var Router = Backbone.Router.extend({

  routes: {
    '': 'renderLanding'
  },

  renderLanding: function() {
    console.log('Hit landing route');
  }

});