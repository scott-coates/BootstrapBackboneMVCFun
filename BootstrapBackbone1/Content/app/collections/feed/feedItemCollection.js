// @reference ~/Content/app/main.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc.App.Collections.FeedItemCollection = Backbone.Collection.extend(
        {
            model: cliqFlip.Mvc.App.Views.FeedItem
        });

    return cliqFlip;
} (CliqFlip));