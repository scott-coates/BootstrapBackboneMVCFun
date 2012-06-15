var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc.App.Views.TopPartView = Backbone.Marionette.ItemView.extend({
        template: "home-topPart",
        events: {
            "click .btn": "showFeed"
        },

        showFeed: function () {
            alert('this is a feed');
        }
    });

    return cliqFlip;
} (CliqFlip));