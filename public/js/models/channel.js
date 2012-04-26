Person = Backbone.Model.extend({
  defaults: {
    empty: 'empty'
  },
  initialize: function() {
    alert("Person model loaded");
  },
});
