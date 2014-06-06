var Playlist = function(data){
  this.data = data;
  this.songs = [];
  this.currentSong = {};

  this.initialize();
};

Playlist.prototype = {
  initialize: function(){
    this.data.songs.forEach(function(songData){
      this.songs.push(new Song(songData));
    }, this);

    this.skipTo(0);
  },

  skipTo: function(index){
    this.currentSong = this.songs[index];
    this.songs = this.songs.concat(this.songs.splice(0, index + 1));
    this.render();
  },

  next: function(){
    this.skipTo(0);
  },

  prev: function(){
    this.songs.unshift(this.songs.pop());
    this.currentSong = this.songs[this.songs.length - 1];
    this.render();
  },

  render: function(){
    $('[data-playlist]').empty();

    upcomingSongs = this.songs.slice(0, 5);
    upcomingSongs.forEach(function(song){
      $(App.Templates.playlistSong(song)).appendTo($('[data-playlist]'));
    });

    this.currentSong.play();
  }
};
