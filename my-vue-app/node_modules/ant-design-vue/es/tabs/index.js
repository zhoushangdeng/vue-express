function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import Tabs from './tabs';
import TabPane from '../vc-tabs/src/TabPane';
import TabContent from '../vc-tabs/src/TabContent';
Tabs.TabPane = _extends(_extends({}, TabPane), {
  name: 'ATabPane',
  __ANT_TAB_PANE: true
});
Tabs.TabContent = _extends(_extends({}, TabContent), {
  name: 'ATabContent'
});
/* istanbul ignore next */

Tabs.install = function (app) {
  app.component(Tabs.name, Tabs);
  app.component(Tabs.TabPane.name, Tabs.TabPane);
  app.component(Tabs.TabContent.name, Tabs.TabContent);
  return app;
};

export default Tabs;
export { TabPane, TabContent };