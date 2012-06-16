// @reference ~/Content/app/views/feed/feedItemView.js

var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc.App.Views.FeedListView = Backbone.Marionette.CompositeView.extend({
        template: "feed-feedList",
        className: 'feed-list',
        itemView: cliqFlip.Mvc.App.Views.FeedItemView,
        onShow: function() {
            this.$el.masonry({
                itemSelector: "." + this.itemView.prototype.className,
                columnWidth: 100
            });
        }
    });

    return cliqFlip;
}(CliqFlip));