import React from "react";
import "./AddPostLauncher.css";

function AddPostLauncher(props) {
  return (
    <button className="LauncherBtn" onClick={() => props.toggle()}>
      +
    </button>
  );
}

export default AddPostLauncher;
