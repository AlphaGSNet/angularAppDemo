angular
  .module('app')
  .controller('SearchController', SearchController);

SearchController.$inject = ['$state', 'searchData'];
function SearchController($state, searchData) {
  var vm = this;

  vm.dataType = null;
  vm.placeholder = {
    people: 'e.g. Chewbacca, Yoda, Boba Fett',
    movie: 'e.g. Empire Strikes Back, The Force Awakens'
  };
  vm.searchKey = null;
  vm.results = [];
  vm.searching = false;
  vm.getResults = getResults;
  vm.gotoDetail = gotoDetail;

  function getResults() {
    if (vm.searchKey) {
      var searchKey = vm.searchKey.trim();
      if (searchKey) {
        if (vm.dataType === 'people') {
          vm.filteredBy = 'people';
          vm.searching = true;
          searchData.searchPeoples(searchKey)
            .then(function (ret) {
              vm.results = ret.results;
              vm.searching = false;
            }, function () {
              vm.searching = false;
            });
        } else {
          vm.filteredBy = 'movie';
          vm.searching = true;
          searchData.searchMovies(searchKey)
            .then(function (ret) {
              vm.results = ret.results;
              vm.searching = false;
            }, function () {
              vm.searching = false;
            });
        }
      }
    }
  }

  function gotoDetail(result, type) {
    result.type = type;
    $state.go('detail', {result: result});
  }
}
