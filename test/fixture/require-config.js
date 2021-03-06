var config = {
  default: {
    "baseUrl": "",
    "paths": {
      "app": "scripts/app",
      "bootstrap": "scripts/bootstrap",
      "config": "scripts/config",
      "angular": "bower_components/angular/angular",
      "angular-resource": "bower_components/angular-resource/angular-resource",
      "angularAMD": "bower_components/angularAMD/angularAMD",
      "angular-mocks": "bower_components/angular-mocks/angular-mocks",
      "ngload": "bower_components/angularAMD/ngload",
      "text": "bower_components/requirejs-text/text",
      "domReady": "bower_components/requirejs-domready/domReady"
    },
    "packages": [
      {
        "name": "myCourseWidget",
        "location": "bower_components/myCourseWidget/dist/component/src",
        "main": "js/component"
      },
      {
        "name": "myCourseButtonWidget",
        "location": "bower_components/myCourseButtonWidget/dist/component/src",
        "main": "js/component"
      }
    ],
    "shim": {
      "angularAMD": ["angular"],
      "angular-mocks": ["angular"],
      "angular-resource": ["angular"],
      "bootstrap-tpl": ["angular"]
    },
    "priority": ["angular", "angularAMD"],

    "deps": ["/scripts/bootstrap.js"]
  },
  "extend": {
    "baseUrl": "/base/",
    "paths": {
      "xApi": "scripts/services/xApi",
      "xApiResource": "scripts/services/xApiResource",
      "modalView": "views/NextStepWidget/modal.html"
    }
  },
  prefix: {
    "url_prefix": "app/"
  },
  postfix: {
    "url_postfix": "test"
  },
  prefix_exclude: {
    "url_prefix": "app/",
    "url_prefix_exclude": ["bower_components"]
  },
  postfix_exclude: {
    "url_postfix": "test",
    "url_postfix_exclude": ["bower_components"]
  },
  dist: {
    "baseUrl": "/base/",
    "url_prefix": "dist/"
  },
  callback: {
    "callback": function() {
      console.log('cos');
    }
  }
};

module.exports = config;