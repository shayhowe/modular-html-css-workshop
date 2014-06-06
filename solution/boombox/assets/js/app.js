App = {
  Templates: {
    playlistSong: Handlebars.compile($('[data-template-song]').html())
  },
  Player: {},
  Playlist: {},
  RdioService: new RdioService(),
  initialize: function(){
    App.Player = new Player('p8056088');

    $('body').on('click', '[data-playlist-song]', function(event) {
      event.preventDefault();
      $target = $(event.target);
      if (!$target.hasClass('control-fav') && !$target.hasClass('control-share')) {
        App.Playlist.skipTo($(this).index());
      }
    });

    $('body').on('click', '[data-control-next]', function(event) {
      event.preventDefault();
      App.Player.playNext();
    });

    $('body').on('click', '[data-control-prev]', function(event) {
      event.preventDefault();
      App.Player.playPrevious();
    });
  }
};

$(document).ready(function() {
  App.initialize();
});
