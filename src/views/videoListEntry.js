var VideoListEntryView = Backbone.View.extend({
  
  el: '.video-list',

  initialize: function() {
    
    console.log('this.mode');
    //this.on('click', this.select, $('.video-list-entry-title'));
    this.render();
  },


  render: function() {
    this.$el.children().html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

// AppView.onRender(VideoListEntryView.render);
