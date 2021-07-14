import React from "react";
import { useDispatch } from "react-redux";
import { setStrokeColor } from "../modules/currentStroke/actions";

const COLORS = [
  "#000000",
  "#f44336",
  "#e91e63",
  "#9c27b0",
  "#673ab7",
  "#3f51b5",
  "#2196f3",
  "#03a9f4",
  "#00bcd4",
  "#009688",
  "#4caf50",
  "#8bc34a",
  "#cddc39",
  "#ffeb3b",
  "#ffc107",
  "#ff9800",
  "#ff5722",
  "#795548",
  "#607d8b",
];

const ColorPanel = () => {
  const dispatch = useDispatch();

  const onColorChange = (color: string) => {
    dispatch(setStrokeColor(color));
  };

  return (
    <div className="window colors-panel">
      <div className="title-bar">
        <div className="title-bar-text">Colors</div>
      </div>
      <div className="window-body colors">
        {COLORS.map((color: string) => {
          return (
            <div
              className="color"
              key={color}
              onClick={() => onColorChange(color)}
              style={{ backgroundColor: color }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default ColorPanel;
