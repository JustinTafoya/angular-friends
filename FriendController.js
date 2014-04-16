angular.module('angular-friends').controller('friendController', function ($scope){
$scope.test = 'Hello World';
	$.getJSON('https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json', function(myJsonDataFromServer){
    	$scope.$apply(function(){
    		$scope.friends = myJsonDataFromServer.results;
    	});
    });

});

// Object.keys{.friends[1].location[]}




