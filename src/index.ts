import React from "react";
import ReactDOM from "react-dom";
import TubeDashPlayer from "./components/TubeDashPlayer";
import { applySystemTheme } from "./utils/theme";

if (typeof window !== "undefined") {
  applySystemTheme("system");
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
  (window as any).TubeDashPlayer = TubeDashPlayer;
}

export { TubeDashPlayer };
