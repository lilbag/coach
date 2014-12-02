// public/js/services/NerdService.js
angular.module('EntrainementService', []).factory('Entrainement', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/entrainements');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(EntrainementData) {
            return $http.post('/api/entrainements', EntrainementData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/entrainements/' + id);
        }
    }       

}]);
