var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc.App.Views.TopPartView = Backbone.Marionette.ItemView.extend({
        template: "home-topPart",
        events: {
            "click .btn": "showFeed"
        },

        showFeed: function () {
            cliqFlip.Mvc.App.vent.trigger("feed:showList");
        }
    });

    return cliqFlip;
} (CliqFlip));