'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));

var buttonStyle = {
  padding: '10px 20px'
};

var Button = function Button(_ref) {
  var label = _ref.label,
      onHandleCLick = _ref.onHandleCLick;
  return React.createElement("button", {
    className: "btn btn-default",
    style: buttonStyle,
    onClick: function onClick() {
      return onHandleCLick;
    }
  }, label);
};

// see: https://github.com/storybookjs/storybook/issues/9556

/**
 * A custom Thing component. Neat!
 */

var Thing = function Thing(_ref) {
  var children = _ref.children;
  return React.createElement("div", null, children || React.createElement(Button, {
    label: "Clic over things"
  }));
};

exports.Thing = Thing;
//# sourceMappingURL=snow-lib.cjs.development.js.map
