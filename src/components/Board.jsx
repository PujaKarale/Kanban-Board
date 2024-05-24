import React from "react";
import TaskColumn from "./TaskColumn";
import { taskData } from "../taskdata";
import { useState } from "react";

const initialTaskData = taskData;
export default function Board() {
  const [taskData, setTaskData] = useState(initialTaskData);
  const moveTask = (taskId, direction) => {
    setTaskData((prevTaskData) => {
      const newTaskData = prevTaskData.map((column) => ({
        ...column,
        tasks: [...column.tasks],
      }));

      let task = null;
      let currentColumnIndex = -1;
      let taskIndex = -1;

      // Find the task and its current column section
      for (let i = 0; i < newTaskData.length; i++) {
        taskIndex = newTaskData[i].tasks.findIndex((t) => t.id === taskId);
        if (taskIndex !== -1) {
          task = newTaskData[i].tasks[taskIndex];
          currentColumnIndex = i;
          break;
        }
      }

      // task find then remove it from its current column
      if (task) {
        newTaskData[currentColumnIndex].tasks.splice(taskIndex, 1);
        const newColumnIndex = currentColumnIndex + direction;
        if (newColumnIndex >= 0 && newColumnIndex < newTaskData.length) {
          if(newColumnIndex == 0) {
            task.status = 'To Do'
          } else if(newColumnIndex == 1) {
            task.status = 'Traiged'
          } else if(newColumnIndex == 2) {
            task.status = 'In Progress'
          } else if(newColumnIndex == 3) {
            task.status = 'Completed'
          }
          newTaskData[newColumnIndex].tasks.push(task);
        } else {
          if(newColumnIndex == 0) {
            task.status = 'To Do'
          } else if(newColumnIndex == 1) {
            task.status = 'Traiged'
          } else if(newColumnIndex == 2) {
            task.status = 'In Progress'
          } else if(newColumnIndex == 3) {
            task.status = 'Completed'
          }
          newTaskData[currentColumnIndex].tasks.push(task);
        }
      }
      return newTaskData;
      
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4">
      {taskData.map((data) => (
        <TaskColumn
          key={data.status}
          status={data.status}
          tasks={data.tasks}
          moveTask={moveTask }
        />
      ))}
    </div>
  );
}
