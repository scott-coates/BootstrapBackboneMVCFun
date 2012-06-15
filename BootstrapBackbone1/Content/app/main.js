// @reference ~/Content/assets/js/marionette/backbone.marionette.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc = {};
    cliqFlip.Mvc.App = new Backbone.Marionette.Application();
    cliqFlip.Mvc.App.Models = { };
    cliqFlip.Mvc.App.Views = { };
    cliqFlip.Mvc.App.Collections = { };

    cliqFlip.Mvc.App.addInitializer(function () {
        alert('init');
    });

    return cliqFlip;
} (CliqFlip || {}));