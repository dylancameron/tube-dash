import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import TubeDashPlayer from "./components/TubeDashPlayer";

const applySystemTheme = () => {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (event) => {
      if (event.matches) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    });
};

if (typeof window !== "undefined") {
  applySystemTheme();
  (window as any).React = React;
  (window as any).ReactDOM = ReactDOM;
  (window as any).TubeDashPlayer = TubeDashPlayer;
}

export { TubeDashPlayer };
