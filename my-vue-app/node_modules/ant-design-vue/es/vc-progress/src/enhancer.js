function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function enhancer(Component) {
  return _extends(_extends({}, Component), {
    updated: function updated() {
      var _this = this;

      var now = Date.now();
      var updated = false;
      Object.keys(this.paths).forEach(function (key) {
        var path = _this.paths[key];

        if (!path) {
          return;
        }

        updated = true;
        var pathStyle = path.style;
        pathStyle.transitionDuration = '.3s, .3s, .3s, .06s';

        if (_this.prevTimeStamp && now - _this.prevTimeStamp < 100) {
          pathStyle.transitionDuration = '0s, 0s';
        }
      });

      if (updated) {
        this.prevTimeStamp = Date.now();
      }
    }
  });
}

export default enhancer;