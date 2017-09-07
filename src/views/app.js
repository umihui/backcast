var AppView = Backbone.View.extend({

  el: '#app',


  initialize: function() {
    //console.log('window:' + window.exampleVideoData);
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    //console.log(this.videos);
    return this;
    // new videoList({
    //   el: this.$('#list'),
    //   collection: this.collection
    // }).render();
  },

  template: templateURL('src/templates/app.html')

});
