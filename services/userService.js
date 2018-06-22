app.factory('userService', function($http) {

  function register(userData) {
    var req = {
      method: "POST",
      url: "http://localhost:8080/register",
      headers: {
        'Content-Type': "application/json",
      },
      data: angular.toJson(userData)
    };
    $http(req).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    })
  };
  return {
    register: register
  };
});
