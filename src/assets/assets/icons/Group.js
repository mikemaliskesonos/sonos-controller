

exports.__esModule = true;
exports.Group = void 0;

const _react = _interopRequireDefault(require("react"));

const _StyledIcon = require("../StyledIcon");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (let i = 1; i < arguments.length; i++) { const source = arguments[i]; for (const key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Group = function Group(props) {
  return _react.default.createElement(_StyledIcon.StyledIcon, {viewBox: "0 0 18 18",
    a11yTitle: "Group", ...props}, _react.default.createElement("g", {
    stroke: "none",
    strokeWidth: "1",
    fill: "none",
    fillRule: "evenodd"
  }, _react.default.createElement("g", {
    transform: "translate(-407.000000, -222.000000)",
    fill: "#FFFFFF"
  }, _react.default.createElement("g", {
    transform: "translate(407.000000, 222.000000)"
  }, _react.default.createElement("path", {
    d: "M2.87,15.8 L2.17,16.5 C1.983,16.69 1.679,16.699001 1.481,16.52 C0.535,15.592001 0.002,14.324 0,13 L0,5 C0,2.239 2.239,-3.55271368e-15 5,-3.55271368e-15 L13,-3.55271368e-15 C15.762,-3.55271368e-15 18,2.239 18,5 L18,13 C17.990999,14.319 17.454,15.579 16.511,16.5 C16.316999,16.684 16.014,16.684 15.82,16.5 L15.12,15.8 C14.931,15.609 14.931,15.301 15.12,15.11 C15.681,14.549999 15.997,13.792 16,13 L16,5 C16,3.343 14.657,2 13,2 L5,2 C3.344,2 2,3.343 2,5 L2,13 C2.001,13.791 2.314,14.549 2.87,15.11 C3.06,15.301 3.06,15.609 2.87,15.8 Z"
  }), _react.default.createElement("path", {
    d: "M13.3011,18.0000141 L4.7101,18.0000141 C4.5781,18.000999 4.4511,17.948999 4.3571,17.856998 C4.1601,17.663999 4.1571,17.347 4.3511,17.149999 L8.6411,12.849999 L8.6441,12.846999 C8.8391,12.653 9.156099,12.653999 9.3511,12.849999 L13.6501,17.149999 C13.7401,17.242 13.7921,17.365 13.7931535,17.493 C13.7971,17.768999 13.576099,17.995998 13.3011,18.0000141 Z"
  })))));
};

exports.Group = Group;