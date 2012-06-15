// @reference ~/Content/assets/js/marionette/backbone.marionette.js

var CliqFlip = (function (cliqFlip) {

    cliqFlip.Mvc = {};
    cliqFlip.Mvc.App = new Backbone.Marionette.Application();

    cliqFlip.Mvc.App.addInitializer(function () {
        alert('init');
    });

    return cliqFlip;
} (CliqFlip || {}));

$(function() {
    CliqFlip.Mvc.App.start();
});