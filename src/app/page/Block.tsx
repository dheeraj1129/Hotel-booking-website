import React from "react";

function Block({ name, heading, title }) {
  return (
    <div>
      <div className="flex  justify-center items-center px-4 text-base border-r h-full border-red-500">
        <h2 className="px-4 text-3xl">{name}</h2>
        <div>
          <h3 className="font-bold ">{heading}</h3>
          <p className="font-light text-xs ">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Block;
