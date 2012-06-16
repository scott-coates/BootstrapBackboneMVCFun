var CliqFlip = (function(cliqFlip) {

    cliqFlip.Mvc.App.Views.ContentPartView = Backbone.Marionette.ItemView.extend({
        template: "home-contentPart",
        className: "row"
    });

    return cliqFlip;
}(CliqFlip));