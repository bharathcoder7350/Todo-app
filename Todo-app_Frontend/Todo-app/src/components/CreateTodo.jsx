import { useState } from "react";

export function CreateTodo(props){

const { title, setTitle} = useState("")
const { description , setDescription } = useState("")

return <div>
    <input id="title" style={{
        padding:10,
        margin:10
    }} type="text" placeholder="title" onChange={function(e){
        setTitle(e.target.value)
    }}/> <br />
    <input style={{
        padding:10,
        margin:10
    }} type="text" id="desc" placeholder="description" onChange={function(e){
        setDescription(e.target.value)
    }} /> <br />
    <button style={{
        padding:10,
        margin:10
    }} onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title:title,
                description:description
            }),
            headers: {
                "content-type" : "application/json"
            }
        }).then(async(res)=>{
            const json = await res.json()
            res.json({
                msg : " Todo Added "
            })
        })
    }} >Add a Todo</button>

</div>
}