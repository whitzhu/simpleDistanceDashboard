var searchDistance = function (options, callback) {
  console.log('searchDistance options', options);
  $.ajax({
    url: 'http://127.0.0.1:3000/distance',
    type: 'POST',
    contentType: 'application/json',
    data: JSON.stringify(options),
    success: function(data) {
      console.log('success post request');
      callback(data);
    },
    error: function(data) {
      console.error('Failed to post');
    }
  });
}

module.exports = searchDistance;
