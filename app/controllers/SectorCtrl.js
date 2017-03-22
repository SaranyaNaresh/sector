
(function () {
    var accountSectorApp = angular.module("accountSectorApp");

    var SectorCtrl = function ($scope, $http)
    {
    	$scope.working = 'Angular is Working';
        //common error function
    	var onError = function (error) {
            $scope.error = error.data;
        };
        //end error function

        //get all persone
    	var onSectorGetCompleted = function(response){
    		$scope.sectors = response.data;
            console.log($scope.sectors);
    	}
    	

        var refresh = function(){
        	$http.get('/sectors')
        		.then(onSectorGetCompleted, onError);
        	console.log('Response received...');
        }

        refresh();
    	//end get all persons

        //get persons by Id
        var onGetByIdCompleted = function(response){
            $scope.sector = response.data;
            console.log(response.data);
        };

        $scope.searchSector = function(id){
            $http.get('/sector/' + id)
                    .then(onGetByIdCompleted, onError);
            console.log(id);
        };
        //end get person by Id

        //add new person
        var onAddPersonCompleted = function(response){
            $scope.sector = response.data;
            console.log(response.data);
            refresh();
        };
        $scope.addSector = function(sector){
            $http.post('/addSector', sector)
                    .then(onAddSectorCompleted, onError);
            console.log(sector);
        };
        //end add new person

        //delete person
        $scope.deleteSector = function(id){
            $http.delete('/deleteSector/' + id)
                .then(onSectorDeleteCompleted,  onError);
            console.log(id);
        };

        var onSectorDeleteCompleted = function(response){
            $scope.sector = response.data;
            console.log(response.data);
            refresh();
        };
        //end delete person

        //update person
        $scope.updateSector = function(sector){
            $http.put("/updateSector", sector)
                .then(onUpdateSectorCompleted, onError);
                    console.log(sector);
        };

        var onUpdateSectorCompleted = function(response){
            $scope.sector = null;//response.data;
            console.log(response.data);
            refresh();
        };
        //end update person
    }
    accountSectorApp.controller('SectorCtrl', SectorCtrl);
}());