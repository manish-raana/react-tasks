import Task from '@/components/Task';
import React, { Fragment, useState } from 'react'
import { TaskData } from "../dummyTasks";
import { ITask } from '@/types/Task';
const TaskList = () => {
  const [taskValue, setTaskValue] = useState('');
  const [_taskData, setTaskData] = useState<ITask[]>(TaskData);

  const handleAddTask = () => {
    if (taskValue.trim() === '' || !taskValue) { 
      console.error('add a valid task title');
      return;
    }
    const task:ITask = {
      id: _taskData.length + 1,
      title: taskValue,
      completed: false
    }
    setTaskData([..._taskData, task]);
  }
  const updateTaskStatus = (taskId:number) => {
    console.log('task-id: ', taskId)
    const updatedTasks = _taskData.map((task) => {
      if (task.id === taskId) { 
        return {
          ...task,
          completed: !task.completed,
        };
      } else {
        return task
      }
    });
    setTaskData(updatedTasks);
  };
  const deleteTask = (taskId: number) => {
    const updatedTasks = _taskData.filter((task) => task.id !== taskId);
    setTaskData(updatedTasks);
  };
  return (
    <div className="flex flex-col gap-4 items-center justify-center p-5">
      <p className="text-3xl font-bold">Task CRUD</p>
      <div className="flex flex-col md:flex-row gap-4 items-center">
        <input
          type="text"
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          className="input input-sm input-bordered"
          placeholder="Enter task title"
        />
        <button onClick={handleAddTask} className="btn btn-sm">
          Add Task
        </button>
      </div>

      {_taskData.length === 0 ? (
        <p className="text-lg">No Task Available!</p>
      ) : (
        <Fragment>
          <div className="w-full flex justify-center gap-5 md:gap-20 font-bold">
            <p>#</p>
            <p>Title</p>
            <p>Status</p>
            <p>Action</p>
          </div>
          {_taskData?.map((task, index) => (
            <Task key={index} task={task} updateTaskStatus={updateTaskStatus} deleteTask={deleteTask} />
          ))}
        </Fragment>
      )}
    </div>
  );
}

export default TaskList