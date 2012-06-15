var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc.App.Views.FeedItemView = Backbone.Marionette.ItemView.extend({
        template: "feed-feedItem",
        className: 'feed-item'
    });

    return cliqFlip;
}(CliqFlip));