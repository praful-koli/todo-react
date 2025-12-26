import {Dot} from 'lucide-react'

function CountTasks(props) {
  return (
     <div className="w-full  flex justify-center items-cente py-3">
          <p className="flex items-center justify-center ">
            {props.totalTask} task
            <Dot size={20} strokeWidth={1.25} /> {props.totalCompleted} completed
          </p>
     </div>
  )
}

export default CountTasks