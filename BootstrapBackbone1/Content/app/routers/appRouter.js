//https: //github.com/derickbailey/backbone.marionette/blob/master/docs/marionette.approuter.md

var CliqFlip = (function(cliqFlip) {
    var appController = {
        index: function() {
            cliqFlip.Mvc.App.topPart.show(new cliqFlip.Mvc.App.Views.TopPartView());
            cliqFlip.Mvc.App.contentPart.show(new cliqFlip.Mvc.App.Views.ContentPartView());
        },
        feed: function() {
            var feedList = new cliqFlip.Mvc.App.Collections.FeedList();

            feedList.fetch({
                success: function() {
                    cliqFlip.Mvc.App.contentPart.show(new cliqFlip.Mvc.App.Views.FeedListView({ collection: feedList }));
                }
            });
        }
    };

    cliqFlip.Mvc.App.Routers.AppRouter = Backbone.Marionette.AppRouter.extend({
        appRoutes: {
            "": "index",
            "feed": "feed"
        },
        controller: appController
    });

    return cliqFlip;
} (CliqFlip));