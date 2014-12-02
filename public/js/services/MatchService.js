// public/js/services/NerdService.js
angular.module('MatchService', []).factory('Match', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/matchs');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new nerd
        create : function(nerdData) {
            return $http.post('/api/matchs', MatchData);
        },

        // call to DELETE a nerd
        delete : function(id) {
            return $http.delete('/api/matchs/' + id);
        }
    }       

}]);
