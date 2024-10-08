import "./styles/global.css";
import React from "react";
import ReactDOM from "react-dom";
import TubeDashPlayer from "./components/TubeDashPlayer";

if (typeof window !== "undefined") {
	(window as any).React = React;
	(window as any).ReactDOM = ReactDOM;
	(window as any).TubeDashPlayer = TubeDashPlayer;
}

export { TubeDashPlayer };
