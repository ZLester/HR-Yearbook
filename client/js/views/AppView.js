var AppView = Backbone.View.extend({

  el: '#app-container',

  initialize: function(options) {

    options.router.on('route:landing', function() {
      console.log('Hit landing Route')
    }.bind(this));

  },

  renderCohort: function(cohort) {
  },

  renderLanding: function() {
    $('#page-content-container').html(new LandingView().render());   
  }
})