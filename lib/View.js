(function (Controller, Deps, Handlebars) {
    "use strict";

    Controller.View = function (defaultLayout, defaultView) {

        var self = this,
            currentLayout = defaultLayout,
            currentView = defaultView,
            dependants = new Deps.Dependency();

        Handlebars.registerHelper('currentLayout', function () {
            return new Handlebars.SafeString(self.getLayout()());
        });
        Handlebars.registerHelper('currentView', function () {
            return new Handlebars.SafeString(self.getView()());
        });

        self.getLayout = function () {
            dependants.depend();
            return currentLayout;
        };

        self.setLayout = function (layout) {
            currentLayout = layout;
            dependants.changed();
        };

        self.getView = function () {
            dependants.depend();
            return currentView;
        };

        self.setView = function (view) {
            currentView = view;
            dependants.changed();
        };

        self.set = function (layout, view) {
            currentLayout = layout;
            currentView = view;
            dependants.changed();
        };
    };
}(Controller, Deps, Handlebars));
