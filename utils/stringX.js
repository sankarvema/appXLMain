
var stringX = {};

stringX.format = format;

module.exports = stringX;

function format(str) {
  var args = [].slice.call(arguments, 1),
      i = 0;

  return str.replace(/%s/g, function() {
      return args[i++];
  });
};
