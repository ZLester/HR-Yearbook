var Students = Backbone.Collection.extend({

  model: Student,
  
  initialize: function () {
    this.url = 'https://hr-yearbook.herokuapp.com/api/students';
  }
  
});