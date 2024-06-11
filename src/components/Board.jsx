import React from "react";
import TaskColumn from "./TaskColumn";
import { taskData } from "../taskdata";
import { useState } from "react";
import Search from "./Search";
 
let initialTaskData = taskData;

 
export default function Board() {
  // const [taskData, setTaskData] = useState(initialTaskData);
  const [filteredDataArray, setFilteredDataArray] = useState(initialTaskData)
 
 console.log("taskData=>",taskData)
 console.log("filteredDataArray==>" , filteredDataArray );
 
  const filterTasksByName = (name) => {
    if(!name) {
      setFilteredDataArray(taskData);
    } else {
      const filteredTasks = taskData.map((column) => {
        console.log("column",column)
        return {
          status: column.status,
          tasks: column.tasks.filter((task) => task.assignedTo.toLowerCase().includes(name.toLowerCase())),
        };
      });
      setFilteredDataArray(filteredTasks);
    }    
  };
 
 
  const moveTask = (taskId, direction) => {
    setFilteredDataArray((prevTaskData) => {
      const newTaskData = prevTaskData.map((column) => ({
        ...column,
        tasks: [...column.tasks],
      }));
      let task = null;
      let currentColumnIndex = -1;
      let taskIndex = -1;
     
      // Find the task and its current column section
      newTaskData.forEach((column, colIndex) => {
        // console.log(colIndex)
        column.tasks.forEach((t, tIndex) => {
          // console.log(task, tIndex)
          if (t.id === taskId) {
            task = t;
            currentColumnIndex = colIndex;
            taskIndex = tIndex;
          }
        });
      });




 
      // Once the task is found, remove it from its current column
      if (task) {
        newTaskData[currentColumnIndex].tasks.splice(taskIndex, 1);
        const newColumnIndex = currentColumnIndex + direction;
        if (newColumnIndex >= 0 && newColumnIndex < newTaskData.length) {
          if (newColumnIndex === 0) {
            task.status = 'To Do';
          } else if (newColumnIndex === 1) {
            task.status = 'Traiged';
          } else if (newColumnIndex === 2) {
            task.status = 'In Progress';
          } else if (newColumnIndex === 3) {
            task.status = 'Completed';
          }
          newTaskData[newColumnIndex].tasks.push(task);
        } else {
          if (newColumnIndex === 0) {
            task.status = 'To Do';
          } else if (newColumnIndex === 1) {
            task.status = 'Traiged';
          } else if (newColumnIndex === 2) {
            task.status = 'In Progress';
          } else if (newColumnIndex === 3) {
            task.status = 'Completed';
          }
          newTaskData[currentColumnIndex].tasks.push(task);
        }
      }
 
      return newTaskData;
    });

    
  };

  
 


 
  return (
    <div>
      <Search filterTasksByName={filterTasksByName} />
      <div className="grid grid-cols-4 gap-4">
   
        {/* {filteredDataArray && filteredDataArray.length > 0 ? (
         
        ) : (
          taskData.map((data) => (
            <TaskColumn
              key={data.status}
              status={data.status}
              tasks={data.tasks}
              moveTask={moveTask}
            />
          ))
        )} */}
 
        {
          filteredDataArray.map((data) => (
            <TaskColumn
              key={data.status}
              status={data.status}
              tasks={data.tasks}
              moveTask={moveTask}
            />
          ))
        }
      </div>
    </div>
  );
}