import { Trash2, X, Dot, Turtle, ImageOff } from "lucide-react";
import Banner from "./Banner";
import { useEffect, useState } from "react";
import Input from "./Input";
import Filter from "./Filter";
import Task from "./Task";
import CountTasks from "./CountTasks";
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
    setCompletedTask((prev) => prev + 1);
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
    setList([...listTask]);
    setTask("");
  }, []);
  return (
    <div className="container-todo w-full h-lvh bg-gray-300 flex items-center justify-center">
      <div className=" w-10/14 h-13/14 bg-white rounded-3xl overflow-hidden ">
        {/* banner */}
        <Banner />

        {/* input continer */}
        <Input
          task={task}
          addTaskHandler={addTaskHandler}
          setTask={(e) => {
            setTask(e.target.value);
          }}
        />
        {/* filter section */}

        <Filter
          showAllTaskHandler={showAllTaskHandler}
          showActiveTaskHandler={showActiveTaskHandler}
          showDoneTaskHandler={showDoneTaskHandler}
          deleteAllTaskHandler={deleteAllTaskHandler}
        />
        {/* list task section  container  */}
        
        <div className="list-task w-full h-9/16 px-25 py-20  scrollbar-hide overflow-y-auto">
          {/* task1 */}
          {list.map((task, index) => {
            return (
              <Task
                key={index}
                index={index}
                id={task.id}
                checked={task.completed}
                task={task}
                checkedHandler={checkedHandler}
                deleteTaskHandler={deleteTaskHandler}
              />
            );
          })}
        </div>

        {/* count of complete task and total task */}
         <CountTasks totalTask={totalTask} totalCompleted={totalCompleted}/>
      </div>
    </div>
  );
}

export default Todo;
