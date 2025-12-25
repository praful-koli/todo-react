import React from "react";
function Button(props) {
 return (
    <button
      onClick={props.onClick}
      style={{ fontSize: props.size + 'px', background: props.color }}
      className="text-white py-2 px-3 rounded-md active:scale-95 flex items-center gap-2"
    >
      {props.children}
      {props.text}
    </button>
  );

}

export default Button;
