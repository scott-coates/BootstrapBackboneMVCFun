var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc.App.Views.FeedListView = Backbone.Marionette.CompositeView.extend({
        template: "feed-feedList",
        className: 'feed-list',
        itemView: cliqFlip.Mvc.App.Views.FeedItemView
    });

    return cliqFlip;
}(CliqFlip));