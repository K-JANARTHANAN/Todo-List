import react,{useState} from "react";
import "./styles.css";
function Todo()
{
    const[Todo,setTodo]=useState([]);
    const[values,setValues]=useState("");

    const addtotodo=()=>{
        setTodo((t)=>
        {
          return  t.concat(
                {
                     text:values,
                     id:Math.random()
                }
            )
        })
        setValues("")
    }
    const removetodo=(id)=>
    {
        setTodo(Todo=>Todo.filter(t=>t.id!=id));
    }
    return(
         <div className="container">
            <input type="text" placeholder="Enter a new Todo" value={values}
             onChange={e=>setValues(e.target.value)}/>
             <button onClick={addtotodo}>ADD</button>
        <ul className="todos-list">
            {Todo.map(({text,id})=>(
                <li className="todo" key={id}>
                    <span>{text}</span> 
                    <button className="close" onClick={()=>removetodo(id)}>remove</button>
                </li>
                  ))}
        </ul>
        </div>
                   
    )

}
export default Todo;