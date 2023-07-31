import React, { useState } from "react";
import { useFetch } from "../hooks/useFecth";
import Task from "./Task";

const ListTask = () => {
  const { data, setData, fetchData } = useFetch();
  const [participants, setParticipants] = useState(0);

  const changeStatus = (item) => {
    let newData = data.map((task) => {
      if (task.key === item.key) {
        item.done = !item.done;
      }
      return task;
    });

    setData(newData);
  };

  const deleteTask = (item) => {
    let newData = data.filter((task) => task.key !== item.key);

    setData(newData);
  };

  const handleChange = (e) => {
    setParticipants(e.target.value)
  };

  return (
    <div className="list">
      <input
        type="text"
        className="list_input"
        placeholder="Participantes"
       
        onKeyPress={(event) => {
          if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
          }
        }}
        onChange={(e) => handleChange(e)}
      />
      <button className="list_button" onClick={() => fetchData(participants)} >
        Añadir
      </button>
      {data.map((item) => {
        return (
          <Task
            item={item}
            changeStatus={changeStatus}
            deleteTask={deleteTask}
            setData={setData}
          />
        );
      })}
    </div>
  );
};

export default ListTask;
