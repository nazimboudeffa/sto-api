var http = require('http');

var options = {
  host: 'launcher.startrekonline.com',
  port: 80,
  path: '/launcher_server_status'
};

var status = 'unknown';

var request = http.request(options, function(res){
  var data = '';
  res.on('data', function(chunk){
    data += chunk;
  });
  res.on('end', function () {
    status = data;
    console.log(status);
  });
});

request.on("error", function(e){
  console.log("Got error : " + e.message);
});

request.end();

module.exports = function(){
  return status;
};
