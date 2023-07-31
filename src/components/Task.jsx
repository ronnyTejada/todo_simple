import React from "react";
//import {ReactComponent as DONE, SORT, TRASH } from '../const/icons';
import { ReactComponent as Done } from "../assets/Done.svg";
import { ReactComponent as NotDone } from "../assets/NotDone.svg";
import { ReactComponent as Trash } from "../assets/Trash.svg";

const Task = ({ item, changeStatus, deleteTask }) => {


  

  return (
    <div className="task">
      <button className="task_status" onClick={()=>changeStatus(item)}>{item.done ? <Done /> : <NotDone />}</button>
      <p className="tast_title">{item.activity}</p>
      <button className="task_status" onClick={()=>deleteTask(item)}><Trash/></button>
    </div>
  );
};

export default Task;
