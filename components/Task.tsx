import React from "react";
import { ITask } from "@/types/Task";

interface TaskProps {
  task: ITask;
  updateTaskStatus: (taskId: number) => void;
  deleteTask: (taskId: number) => void;
}

const Task: React.FC<TaskProps> = ({ task, updateTaskStatus, deleteTask }) => {
  return (
    <div className="flex items-center gap-2 md:gap-14 text-xs sm:text-sm md:text-lg">
      <input className="checkbox" type="checkbox" checked={task.completed} onChange={() => updateTaskStatus(task.id)} />
      <span className={task.completed ? "text-green-500" : ""}>{task.title}</span>
      <span className={task.completed ? "text-green-500" : ""}>{task.completed ? "Completed" : "Incomplete"}</span>
      <button disabled={!task.completed} className="btn btn-sm btn-error btn-outline" onClick={() => deleteTask(task.id)}>
        Delete
      </button>
    </div>
  );
};

export default Task;
