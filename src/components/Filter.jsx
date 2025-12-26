import Button from './Button'
import { Trash2 } from "lucide-react";
function Filter(props) {
  return (
    <div className="w-full flex items-center justify-center py-3.5 gap-8">
          <h1 className="text-xl font-semibold">Filters:</h1>
          <Button
            onClick={props.showAllTaskHandler}
            text="All"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={props.showActiveTaskHandler}
            text="Active"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={props.showDoneTaskHandler}
            text="Done"
            size={18}
            color="#4F46E5"
          />
          <Button
            onClick={props.deleteAllTaskHandler}
            text="Delete All"
            size={18}
            color="#EF4444"
          >
            <Trash2 size={20} color="white" strokeWidth={1.25} />
          </Button>
        </div>
  )
}

export default Filter