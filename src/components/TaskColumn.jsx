import React from "react";
import Card from "./Card";

export default function TaskColumn({ status, tasks, moveTask }) {
  return (
    <div className="bg-gray-100 rounded-lg shadow p-4 shadow-blue-400">
      <h2 className="text-lg font-bold mb-4 text-black border shadow-md bg-gray-200 rounded-lg text-center  shadow-blue-400 py-2">{status}</h2>
      {tasks.map((task) => (
        <Card key={task.id} task={task} moveTask={moveTask} />
      ))}
    </div>
  );
}
