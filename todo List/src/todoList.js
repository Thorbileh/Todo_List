import React,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPen, faTrash,faCheckSquare
} from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
import Popup from'reactjs-popup';
 import './todolistStyle.css'; 
 import I1 from './images/sun.png'
import I2 from './images/star.png'
import I3 from './images/check-list.png'
import I4 from './images/infinity.png'
import I5 from './images/checked.png'
import I6 from './images/user.png'
import I7 from './images/to-do-list.png'
import I8 from './images/folder.png'
import I9 from './images/menu.png'
import I11 from './images/loupe.png'
import I10 from './images/add.png'
import I17 from './images/add-user.png'
import I18 from './images/more.png'
import I19 from './images/empty.png'
import I20 from './images/edit-text.png'
import I21 from './images/remove.png'

library.add(faTrash, faPen, faCheckSquare);


const TodoList = () =>{
    const [list,setList] = useState([]);
    const [input,setInput] = useState('');
    const [todoEditing,setTodoEditing]= React.useState(null);
    const [editinText, setEditingText]= React.useState('');
  
    const addTodo =(todo)=>{
      const newTodo = {
        id:Math.random(),
        todo:todo
      }
      console.log(todo)
      //add to do list
      setList([...list, newTodo]);
      //clear input box
      setInput("");
    }
    const deleteTodo=(id)=>{
      const newList = list.filter((todo)=> todo.id !== id);
      setList(newList);
    }

    function WorkDone(id){
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.completed = !todo.completed
            }
            return todo;
        });
        setList(updateTodos);
    }
    function editTodo(id){
      
        const updateTodos = list.map((todo)=>{
            if(todo.id===id){
                todo.todo = editinText;
              
            }
           console.log(todo)
            return todo;
        });
        setList(updateTodos);
        setTodoEditing(null);
        

    }
    
return(

<div>
 <div className="container">
          <div className="flex_Item">
            <div className="init">
             <div className='circle'><h6 className='initials'>PM</h6></div> 
              <h5 className='name'>Precious Masilela</h5>
            </div>

            <input type="text" name="search" placeholder='Search' className='search'></input>
            <img className='i11' src={I11}></img>
            <div className='menu'>
              <img className="i1" src={I1}></img> <h5 className='Myday'> My Day</h5>
              <h5 className='important'><img className="i2" src={I2}></img>Important</h5>
              <h5 className='Planned'><img className="i3" src={I3}></img>Planned</h5>
              <h5 className='All'><img className="i4" src={I4}></img>All</h5>
              <h5 className='completed'><img className="i5" src={I5}></img>Completed</h5>
              <h5 className='tome'><img className="i6" src={I6}></img>Assigned to me</h5>
              <h5 className='task'><img className="i7" src={I7} ></img>Tasks</h5>
              <h5 className='line'></h5>
              <h5 className='group'><img className="i8" src={I8}></img>Untitle group</h5>
              <h5 className='toDo'><img className="i9" src={I9}></img>ToDo</h5>
            </div>
            <label className='new'> <input type="text" placeholder='+  New List' className='list' >
            </input><button type="submit" className='but' > <img className="i10" src={I10}></img></button></label>

          </div>
          <div className='flex_item'>
            <h2 className='ToDower'>ToDo</h2>
            
            <div className='butH'>
            <button className='icon'><img className="i17" src={I17}></img></button>
            <button className='icon2'><img className="i18" src={I18}></img></button>
            </div>
            <ul className='output'>
           {
             list.map((todo)=>(
               <div key={todo.id}>
                <div className='Display'>

             <img className='i19' src={I19}></img>
              <h5 className='doing'>{todo.todo}</h5>
               <div class="EditAndDelete">
               <Popup trigger={<span className='Ico'><FontAwesomeIcon className='icons' icon="fa-solid fa-pen" onClick={()=> setTodoEditing(todo.id)}/></span>} position = "left center">
               <input type="text" placeholder='Enter edited text' onChange={(e)=>setEditingText(e.target.value)}/>
               <span className='Ico' onClick={()=> editTodo(todo.id)}><FontAwesomeIcon icon="fas fa-check-square" /></span>
               </Popup>
                 <span className='Ico'><FontAwesomeIcon className='icons' icon="trash" onClick={()=> deleteTodo(todo.id)}/></span>
               </div>

                 </div>
               </div>
             ))
           }
       
       
        </ul>
        <input type="text" placeholder='+         Add a Task' className='newTask' value={input} onChange={(e) => setInput(e.target.value)} requi></input>
            <button className='Addto' onClick={()=>addTodo(input)}>Add To Task</button>
      
          </div>
        </div>

  
        </div>

)

}

export default TodoList;