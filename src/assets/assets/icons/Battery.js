

exports.__esModule = true;
exports.Battery = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Battery = function Battery(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 24 12",
    a11yTitle: "Battery", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-689.000000, -187.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(689.000000, 187.000000)"
  }, _react.default.createElement("path", {
    d: "M3.891892,3 C3.175415,3 2.594595,3.671573 2.594595,4.5 L2.594595,7.5 C2.594595,8.328428 3.175414,9 3.891892,9 L16.864866,9 C17.581345,9 18.162163,8.328428 18.162163,7.5 L18.162163,4.5 C18.162163,3.671573 17.581345,3 16.864866,3 L3.891892,3 Z"
  }), _react.default.createElement("path", {
    d: "M2.594595,0 C1.16164,0 0,1.343145 0,3 L0,9 C0,10.656856 1.16164,12 2.594595,12 L18.162163,12 C19.595118,12 20.756758,10.656856 20.756758,9 L20.756758,3 C20.756758,1.343145 19.595118,0 18.162163,0 L2.594595,0 Z M2.918919,1.5 C2.023322,1.5 1.297297,2.339466 1.297297,3.375 L1.297297,8.625001 C1.297297,9.660535 2.023323,10.5 2.918919,10.5 L17.837839,10.5 C18.733437,10.5 19.459461,9.660536 19.459461,8.625001 L19.459461,3.375 C19.459461,2.339466 18.733435,1.5 17.837839,1.5 L2.918919,1.5 Z"
  }), _react.default.createElement("path", {
    d: "M22.054054,3.75 C23.128771,3.75 24,4.75736 24,6 C24,7.242641 23.128771,8.25 22.054054,8.25 L22.054054,3.75 Z"
  })))));
};

exports.Battery = Battery;