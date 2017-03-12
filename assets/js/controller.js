angular.module('contactsMgr', ['ngRoute'])
config(function($routeProvider){
$routeProvider.when('/add', {
controller: 'indexCtl',
templateUrl: 'assets/partials/add.html'
})
.when('/add-contact', {
controller: 'addCtl',
templateUrl: 'assets/partials/add.html'
});