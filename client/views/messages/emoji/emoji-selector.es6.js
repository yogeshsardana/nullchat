Template.emojiSelector.onRendered(function () {
    this.$(".menu .item").tab();
    this.$('.emoji.button').popup({
        on: 'click',
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {show: 100, hide: 300}
    });
});

Template.emojiSelector.helpers({
    emojisForCategory(category) {
        check(category, String);
        return Emojis.find({category: category}, {sort: {category_order: 1}});
    }
});

Template.emojiSelector.events({
    'click .emojione'(event, target) {
        // TODO: Less Hacky jQuery
        Client.addTextToInput($(event.target).parent().data('emoji'));
    }
});
