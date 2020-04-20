

exports.__esModule = true;
exports.Activity = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Activity = function Activity(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 20 20",
    a11yTitle: "Activity", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-483.000000, -345.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(483.000000, 345.000000)"
  }, _react.default.createElement("path", {
    d: "M0,11.5 C0,11.223858 0.223858,11 0.5,11 L1.5,11 C1.776142,11 2,11.223858 2,11.5 L2,19.5 C2,19.776142 1.776142,20 1.5,20 L0.5,20 C0.223858,20 0,19.776142 0,19.5 L0,11.5 Z"
  }), _react.default.createElement("path", {
    d: "M6,3.5 C6,3.223858 6.223858,3 6.5,3 L7.5,3 C7.776142,3 8,3.223858 8,3.5 L8,19.5 C8,19.776142 7.776142,20 7.5,20 L6.5,20 C6.223858,20 6,19.776142 6,19.5 L6,3.5 Z"
  }), _react.default.createElement("path", {
    d: "M12,0.5 C12,0.223858 12.223858,0 12.5,0 L13.5,0 C13.776142,0 14,0.223858 14,0.5 L14,19.5 C14,19.776142 13.776142,20 13.5,20 L12.5,20 C12.223858,20 12,19.776142 12,19.5 L12,0.5 Z"
  }), _react.default.createElement("path", {
    d: "M18,7.166664 C18,6.890521 18.223858,6.666664 18.5,6.666664 L19.5,6.666664 C19.776142,6.666664 20,6.890522 20,7.166664 L20,19.499998 C20,19.776141 19.776142,19.999998 19.5,19.999998 L18.5,19.999998 C18.223858,19.999998 18,19.77614 18,19.499998 L18,7.166664 Z"
  })))));
};

exports.Activity = Activity;