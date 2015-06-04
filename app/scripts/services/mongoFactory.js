angular.module('generatorMeanstackApp')
  .factory('mongoFactory', function ($q, $http) {
    return {
      getMongoStuff: function () {
        var deferred = $q.defer(),
          httpPromise = $http.get('/api/users');
 
        httpPromise.success(function (users) {
          deferred.resolve(users);
        })
          .error(function (error) {
            console.error('Error: ' + error);
          });
 
        return deferred.promise;
      }
    };
  })