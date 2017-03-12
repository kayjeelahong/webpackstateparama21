

// create the module and name it scotchApp
	// create the module and name it scotchApp
	var scotchApp = angular.module('scotchApp', ['ngFileUpload','ngImgCrop','ui.router',  'uiRouterSample.contacts',
  'uiRouterSample.contacts.service',
  'uiRouterSample.utils.service',
  'ngAnimate']);
 
scotchApp.run(
  [          '$rootScope', '$state', '$stateParams',
    function ($rootScope,   $state,   $stateParams) {

    // It's very handy to add references to $state and $stateParams to the $rootScope
    // so that you can access them from any scope within your applications.For example,
    // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
    // to active whenever 'contacts.list' or one of its decendents is active.
    $rootScope.$state = $state;
    $rootScope.$stateParams = $stateParams;
    }
  ]
);
   scotchApp.config(['$stateProvider','$urlRouterProvider', function($stateProvider,$urlRouterProvider){
      $urlRouterProvider




        // set up all states
        $stateProvider
                .state('/home', {
                    url: '/home',
                    templateUrl : 'pages/home.html',
                    controller : 'mainController'
                })
                .state('/about', {
                    url: '/about',
                    templateUrl : 'pages/about.html',
                    controller : 'aboutController'

                })
				.state('/contact', {
                    url: '/contact',
                    templateUrl : 'pages/contact.html',
                    controller : 'contactController'

                })
				.state('/list', {
                    url: '/list',
               templateUrl : 'pages/phoneList.html',
				controller  : 'albumsController'
                })
					.state('User', {
                    url: '/say/:name',
               templateUrl : 'pages/phoneList.html',
				controller  : 'albumsController',
				reslove:{
				gistData : function(User){
				var UserData= User.query();
				return GistsData.$promise;
				}
				}
                });
				
    }]);


		
// create the controller and inject Angular's $scope
	scotchApp.controller('mainController', function($scope) {
		// create a message to display in our view
		$scope.message = 'Everyone come and see how good I look!';
	});

	scotchApp.controller('aboutController', function($scope) {
		$scope.message = 'Look! I am an about page.';
	});

	scotchApp.controller('contactController', function($scope) {
		$scope.message = 'Contact us! JK. This is just a demo.';
	});
/*
	angular.module('Goats')
.service('GoatsService', ['$http', function($http) {
    this.saveGoat = function(goat) {
        return $http.post('/goats', goat);
    };

    this.searchGoats = function(name) {
        return $http.get('/goats/search/' + name);
    };
    
    this.getGoats = function() {
        return $http.get('/goats');
    };
    
    this.getGoat = function(name) {
        return $http.get('/say/' + name);
    };
}]);
	*/
	

	
		
    scotchApp.service('markersService', function () {
      this.markers = [];
      this.getMarkerByTodoId = function (todoId) {
        var marker, i;
        for (i = this.markers.length - 1; i >= 0; i--) {
          marker = this.markers[i];
          if (marker.get("id") === todoId) {
            return marker;
          }
        }
        return false;
      };
    });

	
	
	
	
scotchApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;
            
            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

scotchApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileAndFieldsToUrl = function(filee, fields, fields2,fields3,fields4,fields5,fields6, fields7, fields8,uploadUrltocloud,uploadUrl){
        var fd = new FormData();

         for(var i = 0; i < fields.length; i++){
            fd.append(fields[i].name, fields[i].data)
		
        }
		 for(var i1 = 0; i1 < fields2.length; i1++){
            fd.append(fields2[i1].name, fields2[i1].data)
		
        }
		    for(var i1 = 0; i1 < fields3.length; i1++){
            fd.append(fields3[i1].name, fields3[i1].data)
		
        }
		 for(var i1 = 0; i1 < fields4.length; i1++){
            fd.append(fields4[i1].name, fields4[i1].data)
		
        } 
		for(var i1 = 0; i1 < fields5.length; i1++){
            fd.append(fields5[i1].name, fields5[i1].data)
		
        }
		for(var i1 = 0; i1 < fields6.length; i1++){
            fd.append(fields6[i1].name, fields6[i1].data)
		
        }
		 for(var i1 = 0; i1 < fields7.length; i1++){
            fd.append(fields7[i1].name, fields7[i1].data)
		
        }
		 for(var i1 = 0; i1 < fields8.length; i1++){
            fd.append(fields8[i1].name, fields8[i1].data)
		
        }
		   fd.append('tags', filee);
		  

		  fd.append('path', filee);
			  fd.append('file', filee);
			   fd.append('upload_preset', 'sample_14dd082975d7aaf1247b277fc48c2e3092ad4456');
        $http.post(uploadUrl, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
	
        })
        .error(function(){
        });
		
		
		  $http.post(uploadUrltocloud, fd, {
            transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
        })
        .success(function(){
		window.location.href = 'http://localhost:8080/#/list'
        })
        .error(function(){
        });
    }
}]);



scotchApp.controller('myCtrl', ['$scope', 'Upload', '$timeout','fileUpload', function ($scope, Upload, $timeout,fileUpload) {
    $scope.upload = function (dataUrl, name) {
    
		 var file =   $scope.picFile;
        console.log('file is ' + JSON.stringify(file));
        var uploadUrl = "/groups";
		var uploadUrltocloud = "https://api.cloudinary.com/v1_1/chameleon-techie/upload";
		
          
        var fields = [{"name": "email", "data": $scope.email}]; 
              var fields2 = [{"name": "name", "data": $scope.name}];     
			     var fields3 = [{"name": "surname", "data": $scope.surname}]; 
				    var fields4 = [{"name": "password", "data": $scope.password}]; 
					   var fields5 = [{"name": "address", "data": $scope.address}]; 
					      var fields6 = [{"name": "lat", "data": $scope.lat}];
						     var fields7 = [{"name": "lng", "data": $scope.lng}]; 
							 						     var fields8 = [{"name": "tags", "data": "propic"}]; 
        fileUpload.uploadFileAndFieldsToUrl(file, fields, fields2,fields3,fields4,fields5,fields6,fields7,fields8,uploadUrltocloud,uploadUrl);
		
    }
	
}]);



 scotchApp.factory('albumService', [
        '$http', '$q',
        function albumService($http, $q) {
            console.log('album service fired');

            // interface
            var service = {
                albums: [],                   
                getAlbums: getAlbums,
                getAlbumsSimple: getAlbumsSimple
            };
            return service;


            // implementation
            function getAlbums() {
                var def = $q.defer();

                $http.get("/Groups")
                    .success(function (data) {
                        service.albums = data;
                        def.resolve(data);
                        console.log('albums (simple) returned to controller.', data);
                    })
                    .error(function () {
                        def.reject("Failed to get albums");
                    });
                return def.promise;
            }

            // implementation
            function getAlbumsSimple() {
                return $http.get("/Groups")
                    .success(function (albums) {
                        service.albums = albums;
                    });
            }

     
        }
    ]);


scotchApp.controller('albumsController', [
        '$scope', 'albumService',
        function albumsController($scope, albumService) {
            console.log('albumscontroller fired');
            var vm = this;
            vm.albums = [];
            vm.simpleMode = true;

            vm.getAlbums = function () {
                albumService.getAlbums()
                    .then(function (albums) {                        
                        for (var i = 0; i < albums.length; i++) {
                            albums[i].albumName += " (promise)";
                        }
                        vm.albums = albums;
                        console.log('albums (promises) returned to controller.', albums);
                    },
                    function () {
                        console.log('albums retrieval failed.');
                    });
            };

            vm.getAlbumsSimple = function () {
                albumService.getAlbumsSimple()
                    .success(function (albums) {                        
                        for (var i = 0; i < albums.length; i++) {
                            albums[i].albumName += " (simple)";
                        }
                        vm.albums = albums;
                        console.log('albums returned to controller.', vm.albums);
                    })
                    .error(function (http, status, fnc, httpObj) {
                        console.log('albums retrieval failed.', http, status, httpObj);
                    });
            };

            vm.toggleSimpleMode = function(mode) {                
                vm.simpleMode = mode;
                if (vm.simpleMode)
                    vm.getAlbumsSimple();
                else
                    vm.getAlbums();
            }

            if (vm.simpleMode)
                vm.getAlbumsSimple();
            else
                vm.getAlbums();
        }
    ]);

	

	
