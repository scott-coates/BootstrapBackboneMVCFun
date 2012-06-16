//https://github.com/derickbailey/backbone.marionette/wiki/Using-jst-templates-with-marionette
Backbone.Marionette.Renderer.render = function(template, data) {
    if (!window.JST[template]) throw "Template '" + template + "' not found!";
    return window.JST[template].render(data);
};

Backbone.Marionette.Region.prototype.open = function (view) {
    this.$el.hide();
    this.$el.html(view.el);
    this.$el.slideDown("slow");
};