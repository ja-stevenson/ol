var axios = require('axios');

const url = 'http://ec2-54-84-251-148.compute-1.amazonaws.com/businesses/';

module.exports = function (busId, callback) {
  axios.get(url + busId)
    .then(function(response) {
      console.log(response);
      callback(response);
    })
    .catch(function(error) {
      console.error(error);
    });
};
