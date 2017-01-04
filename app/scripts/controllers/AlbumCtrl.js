(function() {
  function AlbumCtrl() {
    this.albumData = albumPicasso;
  }

  angular
    .module('BlocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
