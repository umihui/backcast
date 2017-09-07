var VideoPlayerView = Backbone.View.extend({
  
  el: '.player',

  initialize: function() {
    console.log('player');
    this.render();
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});


// AppView.onRender(VideoPlayerView.render);
//'<div class="loading">Please wait...</div>'