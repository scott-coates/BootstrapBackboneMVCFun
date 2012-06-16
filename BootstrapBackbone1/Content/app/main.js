// @reference ~/Content/assets/js/marionette/backbone.marionette.js
// @reference ~/Content/app/config.js

var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc = { };
    cliqFlip.Mvc.App = new Backbone.Marionette.Application();
    cliqFlip.Mvc.App.Models = { };
    cliqFlip.Mvc.App.Views = { };
    cliqFlip.Mvc.App.Collections = { };
    cliqFlip.Mvc.App.Routers = { };

    cliqFlip.Mvc.App.addRegions({
        topPart: ".hero-unit",
        contentPart: "#contentPart"
    });

    cliqFlip.Mvc.App.addInitializer(function() {
        cliqFlip.Mvc.App.appRouter = new cliqFlip.Mvc.App.Routers.AppRouter();
        Backbone.history.start({ pushState: true });
    });

    cliqFlip.Mvc.App.addInitializer(function() {
        var that = this;
        this.vent.on("feed:showList", function() {
            var feedList = new cliqFlip.Mvc.App.Collections.FeedList();

            feedList.fetch({
                success: function() {
                    that.contentPart.show(new cliqFlip.Mvc.App.Views.FeedListView({ collection: feedList }));
                }
            });

        });
    });

    return cliqFlip;
}(CliqFlip || { }));