import { useState } from "react"

export default function AddTask({onAddTask}){
    const [content, setContent]=useState("");
    return (
        <label>
            <input className="p-2 border-2 border-stone-950" type="text" placeholder="Add task" value={content} onChange={e=>{
                e.preventDefault();
                setContent(e.target.value);
            }}></input>
            <button className="border-2 p-2 px-5 ml-5 border-stone-950" onClick={()=>{
                setContent("");
                onAddTask(content);
            }}>Add</button>
        </label>
    );
}