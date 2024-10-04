import React from "react";

export default function Task({car, onAddCarVal}){
    return (
        <label className="flex items-center justify-between w-40">
            <span >{car}</span>
            <button className="border-2 border-stone-950 p-1 mx-2" onClick={()=>onAddCarVal(car)}>Add</button>
        </label>
    )
}