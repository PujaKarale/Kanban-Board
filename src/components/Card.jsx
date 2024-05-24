import React from "react";
import { taskData } from "../taskdata";
export default function Card({ task, moveTask }) {
  const handleLeftClick = () => {
    moveTask(task.id, -1); // Move left
  };
  const handleRightClick = (e) => {
    e.preventDefault();
    moveTask(task.id, 1); // Move right
  };
  return (
    <div
      className="bg-white shadow-md rounded p-4 mb-4 border-l-4 border-blue-500"
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
    >
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-xl font-bold text-gray-800">{task.title}</h3>
        <span
          className={`px-2 py-1 rounded text-sm ${
            task.status === "Completed"
              ? "bg-green-200 text-green-800"
              : "bg-yellow-200 text-yellow-800"
          }`}
        >
          {task.status}
        </span>
      </div>
      <p className="text-gray-600 mb-2">{task.description}</p>
      <div className="flex justify-between items-center text-sm text-gray-500">
        <span>Priority: {task.priority}</span>
        <span>Assigned to: {task.assignedTo}</span>
      </div>
    </div>
  );
}
