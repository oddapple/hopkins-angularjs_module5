(function(){
  "use strict";

    angular.module('public')
    .controller('ItemsinListController',ItemsinListController);

    ItemsinListController.$inject = ['itemsinList','SignUpService'];
    function ItemsinListController(itemsinList,SignUpService){
    var itemsctrl = this;

    itemsctrl.itemsinList = itemsinList;
  }
})();
