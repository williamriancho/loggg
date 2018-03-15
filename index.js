var colors = require('colors/safe');

var _log = console.log;
var _error = console.error;
var _warn = console.warn;
var _trace = console.trace;

function getSource() {
  try {
    throw new Error();
  } catch (err) {
    return err.stack.split('\n')[3].trim().split(' ').pop();
  }
}

console.warn = function() {
  let source = getSource();
  process.stderr.write(colors.yellow(source + ': '));
  _warn.apply(console, arguments);
};

console.error = function() {
  let source = getSource();
  process.stderr.write(colors.red(source + ': '));
  _error.apply(console, arguments);
};

console.log = function() {
  let source = getSource();
  process.stdout.write(colors.blue(source + ': '));
  _log.apply(console, arguments);
};

console.trace = function() {
  let source = getSource();
  process.stderr.write(colors.green(source + ': '));
  _trace.apply(console, arguments);
};
