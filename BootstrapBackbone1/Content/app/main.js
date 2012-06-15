// @reference ~/Content/assets/js/marionette/backbone.marionette.js
// @reference ~/Content/app/config.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc = {};
    cliqFlip.Mvc.App = new Backbone.Marionette.Application();
    cliqFlip.Mvc.App.Models = {};
    cliqFlip.Mvc.App.Views = {};
    cliqFlip.Mvc.App.Collections = {};

    cliqFlip.Mvc.App.addRegions({
        topPart: ".hero-unit",
        contentPart: ".row"
    });

    cliqFlip.Mvc.App.addInitializer(function () {
        this.topPart.show(new cliqFlip.Mvc.App.Views.TopPartView());
        this.contentPart.show(new cliqFlip.Mvc.App.Views.ContentPartView());
    });

    return cliqFlip;
} (CliqFlip || {}));