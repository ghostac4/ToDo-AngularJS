app.controller('noteController', function($scope, $mdSidenav, $state,noteService) {
  $state.go('home.notes');
  $scope.toggle = buildToggler('left');
  $scope.takeNoteStatus = false;
  $scope.initialNote ={
    title:"",
    body:"",
    color:"white",
    isArchived:false,
    isPinned:false,
    isTrashed:false
  };
  $scope.isNotePinned = false;

  $scope.notes =[];
  noteService.getAllNotes().then(function(data){
    $scope.notes = data;
    checkIsPinned($scope.notes);
  });

  $scope.colors = [
    ["white","#f88980","#f9d180","#fbff8d"],
    ["#ccff90","#a7ffeb","#7fd8ff","#81b1ff"],
    ["#b388ff","#f8bbd0","#d7ccc8","#d0d8dc"]
  ];

  function buildToggler(componentId) {
    return function() {
      $mdSidenav(componentId).toggle();
      var isOpen = $mdSidenav(componentId).isOpen();
      if (isOpen) {
        document.getElementById('dashboard').style.marginLeft = '320px';
      } else {
        document.getElementById('dashboard').style.marginLeft = '0px';
      }
    };
  }

  $scope.changeTakeNoteStatus = function(value) {
    if(value && !$scope.takeNoteStatus){
        $scope.takeNoteStatus = true;
    }else{
      if(!value){
        $scope.takeNoteStatus = false;
      }
    }
  };

  $scope.takeNote = function() {
    $scope.changeTakeNoteStatus(false);
    console.log($scope.title+" "+$scope.description);
    $scope.initialNote.title = "";
    $scope.initialNote.body = "";

  };

  $scope.showIcons = function(ev, show, id) {
    // console.log(document.getElementById(id+""));
    document.getElementById(id).style.height = document.getElementById("note"+id).clientHeight + "px";
    if (show) {
      document.getElementById(id).style.visibility = 'visible';
    } else {
      document.getElementById(id).style.visibility = 'hidden';
    }
  };

  function checkIsPinned(notes){
    for(var i=0;i<notes.length;i++){
      //console.log(notes[i].pinned);
      if(notes[i].pinned){
        $scope.isNotePinned = true;
        break;
      }
    }
  }

  $scope.selectColor = function(color,note){
    if(note !== undefined){
      note.color = color;
      noteService.updateNote(note);
    }else{
      $scope.initialNote.color = color;
    }
  };

  $scope.selectPinned = function(ev){
    if($scope.initialNote.isPinned){
      $scope.initialNote.isPinned=true;
    }else{
      $scope.initialNote.isPinned=false;
    }
  }
})
