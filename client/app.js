


var myApp = angular.module('meteorapp', []);

var myModule = angular.module('myModule', ['ui']);
myModule.value('ui.config', {
    select2: {
        allowClear: true
    }
});

