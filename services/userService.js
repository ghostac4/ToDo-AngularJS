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
      console.log(response.data.message);
    }, function errorCallback(response) {
      console.log(response);
    })
  };

  function login(loginData){
    var req = {
      method: "POST",
      url: "http://localhost:8080/login",
      headers: {
        'Content-Type': "application/json",
      },
      data: angular.toJson(loginData)
    };
    $http(req).then(function successCallback(response){
      localStorage.setItem("token",response.data.message);
    },function errorCallback(response){
      console.log(response);
    })
  };

  return {
    register: register,
    login: login
  };
});
