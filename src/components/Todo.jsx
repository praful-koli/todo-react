import { Trash2, X, Dot, Turtle } from "lucide-react";
import Button from "./Button";
import Banner from "./Banner";
import { useEffect, useState } from "react";
function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);
  const [totalTask, setTotalTask] = useState(0);
  const [totalCompleted, setCompletedTask] = useState(0);

  function getData() {
    return JSON.parse(localStorage.getItem("task")) || [];
  }

  const addTaskHandler = () => {
    let temp = {
      id: Date.now(),
      taskName: task,
      completed: false,
    };

    let listTask = getData();
    listTask.unshift(temp);
    localStorage.setItem("task", JSON.stringify(listTask));
    let newList = [...listTask];
    setTotalTask((prev) => prev + 1);
    setList(newList);
    setTask("");
  };

  function deleteTaskHandler(e) {
    let element = e.target.closest(".task");
    const newTaskList = getData().filter((task) => task.id != element.id);
    if (newTaskList) {
      localStorage.setItem("task", JSON.stringify(newTaskList));
      setList([...newTaskList]);
      setTotalTask((prev) => prev - 1);
    }
  }

  function deleteAllTaskHandler() {
    localStorage.clear();
    let listTask = getData();
    localStorage.setItem("task", JSON.stringify(listTask));
    setList([...listTask]);
    setTotalTask(0);
  }

  function checkedHandler(e) {
    let element = e.target.closest(".task");
    const newTaskList = getData().map((task) => {
      if (task.id == element.id) {
        task.completed = !task.completed;
       
    }

      return task;
    });
    localStorage.setItem("task", JSON.stringify(newTaskList));
    setList([...newTaskList]);
    setCompletedTask(prev => prev+1)
  }

  function showDoneTaskHandler() {
    let newTaskList = getData().filter((task) => task.completed);
    setList([...newTaskList]);
  }
  function showActiveTaskHandler() {
    let newTaskList = getData().filter((task) => !task.completed);
    setList([...newTaskList]);
  }
  function showAllTaskHandler() {
    let newTaskList = getData();
    setList([...newTaskList]);
  }

  useEffect(() => {
    let listTask = getData();
    localStorage.setItem("task", JSON.stringify(listTask));
    let newList = [...listTask];
    setList(newList);
    setTask("");
  }, []);
  return (
    <div className="container-todo w-full h-lvh bg-gray-300 flex items-center justify-center">
      <div className=" w-10/14 h-13/14 bg-white rounded-3xl overflow-hidden ">
        {/* banner */}
        <Banner />

        {/* input continer */}
        <div className="inputContiner  w-full  px-25 py-6 flex items-center justify-center ">
          <div className="flex items-center justify-center gap-4 w-full">
            <input
              type="text"
              placeholder="Enter your task"
              autoComplete="none"
              name="taskBar"
              id="taskBar"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
              className=" text-2xl px-10 py-1.5 w-7/10 h-14 outline-0 rounded-md border-2 border-[#D1D5DB]    focus:border-sky-500"
            />
            <button
              className=" bg-indigo-500 text-2xl text-white py-3 px-4 rounded-md active:scale-98"
              onClick={addTaskHandler}
            >
              Add
            </button>
          </div>
        </div>

        {/* filter section */}
        <div className="w-full flex items-center justify-center py-3.5 gap-8">
          <h1 className="text-xl font-semibold">Filters:</h1>
          <Button
            onClick={showAllTaskHandler}
            text="All"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={showActiveTaskHandler}
            text="Active"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={showDoneTaskHandler}
            text="Done"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={deleteAllTaskHandler}
            text="Delete All"
            size={18}
            color="#EF4444"
          >
            <Trash2 size={20} color="white" strokeWidth={1.25} />
          </Button>
        </div>

        {/* list task section  container  */}
        <div className="list-task w-full h-9/16 px-25 py-20  scrollbar-hide overflow-y-auto">
          {/* task1 */}
          {list.map((task, index) => {
            return (
              <div
                key={index}
                className="task mb-3.5 task flex items-center justify-between bg-gray-200 px-5 py-5 rounded-md gap-3.5 group"
                id={task.id}
              >
                <div className="flex items-center gap-3.5">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    className="h-5 w-5"
                    onChange={checkedHandler}
                  />
                  {task.completed ? (
                    <h3 className="line-through text-gray-500 taskName text-2xl ">
                      {task.taskName}
                    </h3>
                  ) : (
                    <h3 className="taskName text-2xl ">{task.taskName}</h3>
                  )}
                </div>

                {/* complete x */}
                <div className=" flex gap-5 items-center relative  ">
                  <p className="text-sm  absolute bottm-[12px] right-[50px] text-green-600">
                    {task.completed ? "(completed)" : " "}
                  </p>
                  <div className="hidden group-hover:flex">
                    <X
                      onClick={deleteTaskHandler}
                      size={30}
                      color={"red"}
                      strokeWidth={1.25}
                    />
                  </div>
                </div>
              </div>
            );
          }) }
        </div>

        {/* count of complete task and total task */}
        <div className="w-full  flex justify-center items-cente py-3">
          <p className="flex items-center justify-center ">
            {totalTask} task
            <Dot size={20} strokeWidth={1.25} /> {totalCompleted} completed
          </p>
        </div>
      </div>
    </div>
  );
}

export default Todo;
