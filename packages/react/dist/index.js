"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.tsx
var src_exports = {};
__export(src_exports, {
  App: () => App
});
module.exports = __toCommonJS(src_exports);

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#F2F4F7",
  gray200: "#E4E7EC",
  gray300: "#D0D5DD",
  gray400: "#98A2B3",
  gray500: "#667085",
  gray600: "#475467",
  gray700: "#344054",
  gray800: "#1D2939",
  gray900: "#101828",
  humome300: "#A4BCFD",
  humome500: "#6172F3",
  humome700: "#3538CD",
  humome900: "#2D3282"
};

// src/index.tsx
var import_jsx_runtime = require("react/jsx-runtime");
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
    style: { color: colors.humome300 },
    children: "Hello World"
  });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  App
});
