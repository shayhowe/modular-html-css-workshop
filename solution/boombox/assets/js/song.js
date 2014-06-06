var Song = function(data){
  this.id = data.id;
  this.title = data.name;
  this.artist = data.artist;
  this.artwork = data.icon400;
};

Song.prototype = {
  render: function(){
    $('[data-song-title]').html(this.title);
    $('[data-song-artist]').html(this.artist);
    $('[data-song-artwork]').css('background-image','url(' + this.artwork + ')');
  },

  play: function(){
    this.render();
    App.RdioService.playSong(this.id);
  }
};
