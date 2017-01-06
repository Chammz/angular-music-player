(function() {
  function AlbumCtrl(Fixtures) {
    this.albumData = Fixtures.getAlbum();
  }

  angular
    .module('BlocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
