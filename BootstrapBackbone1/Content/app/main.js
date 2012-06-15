// @reference ~/Content/assets/js/marionette/backbone.marionette.js
// @reference ~/Content/app/config.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc = {};
    cliqFlip.Mvc.App = new Backbone.Marionette.Application();
    cliqFlip.Mvc.App.Models = {};
    cliqFlip.Mvc.App.Views = {};
    cliqFlip.Mvc.App.Collections = {};

    cliqFlip.Mvc.App.addRegions({
        mainRegion: "#main-content"
    });

    cliqFlip.Mvc.App.addInitializer(function (options) {
        var feedList = new cliqFlip.Mvc.App.Views.FeedListView({
            collection: options.feedList
        });

        this.mainRegion.show(feedList);
    });

    return cliqFlip;
} (CliqFlip || {}));