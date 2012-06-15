// @reference ~/Content/app/main.js
// @reference ~/Content/app/models/feed/feedItem.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc.App.Collections.FeedList = Backbone.Collection.extend(
        {
            model: cliqFlip.Mvc.App.Views.FeedItem
        });

    return cliqFlip;
} (CliqFlip));