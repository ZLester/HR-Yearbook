var generateNickname = function() {
  var names = ['Danger', 'No, it\'s not the same as Java', 'L337', 'Zero Cool'];
  var index = Math.floor((Math.random() * names.length));
  return names[index];
}