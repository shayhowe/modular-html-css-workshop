var RdioService = function(){
  this.playbackToken = null;
  this.getPlaybackToken(window.location.hostname);
};

RdioService.prototype = {
  getPlaybackToken: function(domain){
    if(Settings.RDIO_SERVICE_LIVE_DATA_MODE){
      var self = this;

      $.post(Settings.RDIO_SERVICE_HOST + "/playback_tokens", {domain: domain}, function(response) {
        self.playbackToken = response.token;
        $('#js-player').rdio(self.playbackToken);
        $('#js-player').bind('ready.rdio');
      });
    }
  },

  getPlaylistData: function(playlistId, callback){
    if(Settings.RDIO_SERVICE_LIVE_DATA_MODE){
      $.get(Settings.RDIO_SERVICE_HOST + "/playlists/" + playlistId, function(response) {
        callback(response.data);
      });
    } else {
      callback(PLAYLIST_DATA.data);
    }
  },

  playSong: function(songId){
    if(Settings.RDIO_SERVICE_LIVE_DATA_MODE){
      $('#js-player').rdio().play(songId);
    }
  }
};
