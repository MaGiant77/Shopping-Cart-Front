import { useState } from "react";

export default function LiList({cars, onAddCarVal}){
    return (
        <ul className="group flex-col px-80 py-44 bg-amber-300 h-screen">
            {cars.map((car)=>(
                <li key={car.id} className="p-2 flex" >
                    <Task car={car} onAddCarVal={onAddCarVal} />
                </li>
            ))}
        </ul>
    );
}

function Task({car, onAddCarVal}){
    return (
        <label className="flex items-center justify-between w-40">
            <span >{car.text}</span>
            <button className="border-2 border-stone-950 p-1 mx-2" onClick={()=>onAddCarVal(car.id)}>Add</button>
        </label>
    )
}