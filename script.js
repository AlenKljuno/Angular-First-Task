var modul = angular.module('app',[]);
modul.controller('main',function($scope){
    $scope.poruka = 'Welcome';
    $scope.user = {
        firstName : 'Alen',
        lastName : 'Kljuno'
    }
$scope.tabela = [
{ime : ' JS', like : 0, dislike : 0},
{ime : ' PHP', like : 0, dislike : 0},
{ime : ' C++', like : 0, dislike : 0},
{ime : ' C#', like : 0, dislike : 0},
{ime : ' JS', like : 0, dislike : 0},
{ime : ' PHP', like : 0, dislike : 0},
{ime : ' C++', like : 0, dislike : 0},
{ime : ' C#', like : 0, dislike : 0},
]
$scope.cars =[{mark : 'Audi', model : ['S6, A6,D6']},
{mark : 'BMW',model : ['S6, A6,D6']},
{mark : 'Toyota',model : ['S6, A6,D6']},
{mark : 'VolksWagen',model : ['S6, A6,D6']}] 




$scope.like = function(x){
    console.log('like');

x.like++
}
$scope.dislike = function(x){
console.log('dislike');
    
x.dislike++
}
})