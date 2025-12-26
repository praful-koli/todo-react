import React from 'react'

function Input(pros) {
  return (
   <div className="inputContiner  w-full  px-25 py-6 flex items-center justify-center ">
          <div className="flex items-center justify-center gap-4 w-full">
            <input
              type="text"
              placeholder="Enter your task"
              autoComplete="none"
              name="taskBar"
              id="taskBar"
              value={pros.task}
              onChange={pros.setTask}
              className=" text-2xl px-10 py-1.5 w-7/10 h-14 outline-0 rounded-md border-2 border-[#D1D5DB]    focus:border-sky-500"
            />
            <button
              className=" bg-indigo-500 text-2xl text-white py-3 px-4 rounded-md active:scale-98"
              onClick={pros.addTaskHandler}
            >
              Add
            </button>
          </div>
        </div>
  )
}

export default Input