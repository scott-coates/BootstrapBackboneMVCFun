// @reference ~/Content/app/views/feed/feedItemView.js

var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc.App.Views.FeedListView = Backbone.Marionette.CompositeView.extend({
        template: "feed-feedList",
        className: 'feed-list',
        itemView: cliqFlip.Mvc.App.Views.FeedItemView,
        onRender: function() {
            var that = this;
            setTimeout(function() {
                that.$el.masonry({
                    itemSelector: "." + that.itemView.prototype.className,
                    columnWidth: 100
                });
            }, 1000);
        }
    });

    return cliqFlip;
}(CliqFlip));