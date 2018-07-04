
angular.module('MainApp',[]);

function controladorPrincipal($scope,$http){
    $scope.partidos = {};
   $scope.newPartido = {};
   
    $http.get('/api/partidos').success(function(data){
        $scope.partidos = data;
        console.log(data);
    }).error(function(data){
        console.log('Error: '+data);
    });
 
    $scope.registrarPartido =  function(){
        $http.post('/api/partido',$scope.newPartido)
            .success(function(data){
                $scope.newPartido = {};
                $scope.partidos = data;
            })
            .error(function(data){
                console.log('Error: '+data);
            });
    };

    $scope.selectPartido = function(partido){
        $scope.newPartido = partido;
        $scope.selected = true;
        console.log($scope.newPartido , $scope.selected);
    };

    $scope.modificarPartido = function( newPartido ){

        console.log($scope.newPartido._id);
        $http.put('/api/partido/'+$scope.newPartido._id, $scope.newPartido)
            .success(function(data){
                $scope.newPartido = {};
                $scope.partidos = data;
                $scope.selected = false;
            })
            .error (function(data){
                console.log('Error No funciona: ' + data);
            });
    };

    $scope.borrarPartido = function( newPartido ){
        $http.delete('/api/partido/'+$scope.newPartido._id)
        .success(function(data){
            $scope.newPartido = {};
            $scope.partidos = data;
            $scope.selected = false;
        })
        .error(function(data){
            console.log('Error: '+data);
        });
    };

 }

function mostrarPaises($scope,$http){
    $scope.paises = {};
    $http.get('/api/paises').success(function(data){
        $scope.paises = data;
    }).error(function(data){
        console.log('Error: '+data);
    });
}

function noticiasController($scope,$http){
        $scope.noticias = {};
    $scope.newNoticia = {};
        $http.get('/api/noticias').success(function(data){
        $scope.noticias= data;
    }).error(function(data){
        console.log('Error: '+data);
    });

    $scope.registrarNoticia =  function(){
        $http.post('/api/noticia',$scope.newNoticia)
            .success(function(data){
                $scope.newNoticia = {};
                $scope.noticias = data;
                  console.log($scope.newNoticias);
            })
            .error(function(data){
                console.log('Error: '+data);
            });
    };

    $scope.selectNoticia= function(noticia){
        $scope.newNoticia = noticia;
        $scope.selected = true;
        console.log($scope.newNoticia , $scope.selected);
    };

    $scope.modificarNoticia = function( newNoticia ){

        console.log($scope.newNoticia._id);
        $http.put('/api/noticia/'+$scope.newNoticia._id, $scope.newNoticia)
            .success(function(data){
                $scope.newNoticia = {};
                $scope.noticias = data;
                $scope.selected = false;
            })
            .error (function(data){
                console.log('Error No funciona: ' + data);
            });
    };

    $scope.borrarNoticia = function( newNoticia ){
        $http.delete('/api/noticia/'+$scope.newNoticia._id)
        .success(function(data){
            $scope.newNoticia = {};
            $scope.noticias = data;
            $scope.selected = false;
        })
        .error(function(data){
            console.log('Error: '+data);
        });
    };
}

