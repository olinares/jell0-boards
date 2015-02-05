TrelloClone.Views.ListForm = Backbone.LinkFormView.extend({
  formTemplate: JST['lists/form'],
  linkTemplate: JST['lists/form_link'],
  className: 'col-md-3',

  create: function (event) {
    event.preventDefault();
    this.collection.create({
      board_id: this.collection.board.id,
      ord: this.collection.length,
      title: this.$('textarea').val()
    }, { wait: true });
    this.$('textarea').val('');
    this.$('textarea').focus();
  }
});
