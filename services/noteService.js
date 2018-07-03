app.factory('noteService', function($http) {

  function updateNote(note) {
    var req = {
      method: "PUT",
      url: "http://localhost:8080/note",
      headers: {
        'Content-Type': "application/json",
        'userToken': localStorage.getItem('token')
      },
      data: angular.toJson(note)
    };
    console.log(angular.toJson(note));
    $http(req).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    })
  };

  function getAllNotes() {
    var req = {
      method: "GET",
      url: "http://localhost:8080/note",
      headers: {
        'Content-Type': "application/json",
        'userToken': localStorage.getItem('token')
      }
    };
    console.log(req);
    var data = $http(req).then(function successCallback(response) {
      return response.data;
    }, function errorCallback(response) {
      console.log(response);
    });
    return data;
  };

  function createNote(note) {
    var req = {
      method: "POST",
      url: "http://localhost:8080/note",
      headers: {
        'Content-Type': "application/json",
        'userToken': localStorage.getItem('token')
      },
      data: angular.toJson(note)
    };
    $http(req).then(function successCallback(response) {
      console.log(response);
    }, function errorCallback(response) {
      console.log(response);
    })
  };

  function deleteNote(note,noteId) {
    var req = {
      method: "DELETE",
      url: "http://localhost:8080/note/"+noteId,
      headers: {
        'Content-Type': "application/json",
        'userToken': localStorage.getItem('token')
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
    createNote: createNote,
    updateNote: updateNote,
    deleteNote: deleteNote,
    getAllNotes: getAllNotes
  };
});
