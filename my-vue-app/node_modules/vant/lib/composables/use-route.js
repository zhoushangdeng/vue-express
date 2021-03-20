"use strict";

exports.__esModule = true;
exports.route = route;
exports.useRoute = useRoute;
exports.routeProps = void 0;

var _vue = require("vue");

/**
 * Vue Router support
 */
var routeProps = {
  to: [String, Object],
  url: String,
  replace: Boolean
};
exports.routeProps = routeProps;

function route(vm) {
  var router = vm.$router;
  var {
    to,
    url,
    replace
  } = vm;

  if (to && router) {
    router[replace ? 'replace' : 'push'](to);
  } else if (url) {
    replace ? location.replace(url) : location.href = url;
  }
}

function useRoute() {
  var vm = (0, _vue.getCurrentInstance)().proxy;
  return () => {
    route(vm);
  };
}