angular
  .module('app.services', ['ngResource'])
  .constant('CONFIG', {
    API_BASE_URL: "http://swapi.co/api"
  })
  .factory('searchData', searchData);

function searchData($http, $q, $log, CONFIG) {
  var service = {
    get: get,
    searchPeoples: searchPeoples,
    searchMovies: searchMovies
  };
  return service;

  function get(url) {
    var def = $q.defer();
    $http.get(url)
      .success(function (data) {
        def.resolve(data);
      })
      .error(function () {
        def.reject("Failed");
      });
    return def.promise;
  }

  function searchPeoples(search) {
    var def = $q.defer();
    $http.get(CONFIG.API_BASE_URL + "/people/?search=" + search)
      .success(function (data) {
        def.resolve(data);
      })
      .error(function () {
        def.reject("Failed");
      });
    return def.promise;
  }

  function searchMovies(search) {
    var def = $q.defer();
    $http.get(CONFIG.API_BASE_URL + "/films/?search=" + search)
      .success(function (data) {
        def.resolve(data);
      })
      .error(function () {
        def.reject("Failed");
      });
    return def.promise;
  }
}
