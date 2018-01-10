var status = require('./status');

module.exports = function(world) {
  if(world == 'status') {
    return status();
  } else {
    console.log('Got error');
  }
}
