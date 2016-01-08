// spin.js http://fgnass.github.io/spin.js/
var spinner = {
  options: {
     lines: 20,
     length: 40,
     width: 4, 
     radius: 10,
     corners: 1,
     rotate: 0,
     color: '#000',
     speed: 1,
     trail: 60,
     shadow: false,
     hwaccel: false,
     className: 'spinner',
     zIndex: 2e9,
     top: '50%',
     left: '50%',
     visibility: true
  },

  start: function() {
    $('#page-content-container').prepend('<div id="loading-image"></div>');
    var spinner = new Spinner(this.options).spin(document.getElementById('loading-image'));
  }, 

  stop: function() {
    $('#loading-image').remove();
  }

};