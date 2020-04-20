

exports.__esModule = true;
exports.Repeat = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Repeat = function Repeat(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 23 18",
    a11yTitle: "Repeat", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-398.000000, -341.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(398.000000, 341.000000)"
  }, _react.default.createElement("path", {
    d: "M15.968768,5.592728 L15.968768,4.065522 L6.674445,4.065522 C4.237882,4.065522 2.082744,5.884236 1.909489,8.315298 C1.842571,9.257656 2.062577,10.145929 2.491588,10.901282 C2.594257,11.083703 2.57409,11.307375 2.426503,11.455879 L1.757319,12.125063 C1.54373,12.338652 1.194471,12.287318 1.035884,12.031561 C0.36395,10.9572 2.4e-05,9.673834 0.074276,8.296965 C0.260364,4.85296 3.268941,2.232142 6.71753,2.232142 L15.979768,2.232142 L15.968768,0.61235 C15.968768,0.204423 16.462866,1e-06 16.750705,0.288759 L19.241352,2.778489 C19.420107,2.958161 19.420107,3.247834 19.241352,3.426589 L16.750705,5.917237 C16.462866,6.205994 15.968768,6.001572 15.968768,5.592728 Z"
  }), _react.default.createElement("path", {
    d: "M19.704647,5.842984 L20.372913,5.174716 C20.585586,4.962045 20.935762,5.013379 21.095268,5.269136 C21.765367,6.34258 22.130209,7.625946 22.055042,9.002815 C21.868953,12.445903 18.860376,15.065805 15.411787,15.065805 L6.163299,15.065805 L6.162382,16.685596 C6.162382,17.093522 5.669203,17.297946 5.380445,17.009189 L2.890715,14.519457 C2.711043,14.340702 2.711043,14.050112 2.890715,13.871357 L5.380445,11.381627 C5.669203,11.092869 6.162382,11.29729 6.162382,11.705218 L6.162382,13.232424 L15.453038,13.232424 C17.8896,13.232424 20.045656,11.414627 20.219825,8.983565 C20.286745,8.042124 20.066742,7.154767 19.639564,6.399414 C19.535978,6.216993 19.555227,5.991487 19.704647,5.842984 Z"
  })))));
};

exports.Repeat = Repeat;