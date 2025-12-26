import React from "react";
import { Trash2, X, Dot, Turtle, ImageOff } from "lucide-react";

function Task(props) {
  return (
    <div
      key={props.index}
      className="task mb-3.5 task flex items-center justify-between bg-gray-200 px-5 py-5 rounded-md gap-3.5 group"
      id={props.id}
    >
      <div className="flex items-center gap-3.5">
        <input
          type="checkbox"
          checked={props.checked}
          className="h-5 w-5"
          onChange={props.checkedHandler}
        />
        {props.task.completed ? (
          <h3 className="line-through text-gray-500 taskName text-2xl ">
            {props.task.taskName}
          </h3>
        ) : (
          <h3 className="taskName text-2xl ">{props.task.taskName}</h3>
        )}
      </div>

      {/* complete x */}
      <div className=" flex gap-5 items-center relative  ">
        <p className="text-sm  absolute bottm-[12px] right-12.5 text-green-600">
          {props.task.completed ? "(completed)" : " "}
        </p>
        <div className="hidden group-hover:flex">
          <X
            onClick={props.deleteTaskHandler}
            size={30}
            color={"red"}
            strokeWidth={1.25}
          />
        </div>
      </div>
    </div>
  );
}

export default Task;
