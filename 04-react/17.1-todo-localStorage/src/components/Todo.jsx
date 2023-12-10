import React, { useEffect, useState } from 'react';

import './Todo.css'

function Todo() {
    const [todoList, setTodoList] = useState([]);
    //ref for input


    //
    useEffect(() => {
        const storedTodoList = localStorage.getItem("todoList");
        if (storedTodoList) {
            setTodoList(JSON.parse(storedTodoList));
        } else {
          //extra
            localStorage.setItem("todoList", JSON.stringify(todoList));
        }
    }, []);

    const addNewItem = (e) => {
      e.preventDefault();

      const newTaskObecjt = {
        text:"",
        isDone: false
      }

      console.log(e.target.elements.newTodo.value);

      //save the value from input inside text
      newTaskObecjt.text = e.target.elements.newTodo.value;

      // console.log('e.target.elements.newTodo', e.target.elements.newTodo.value)
        setTodoList(oldArray => {
            const newList = [...oldArray, newTaskObecjt];
            localStorage.setItem("todoList", JSON.stringify(newList));
            return newList;
        });
    };

    const changeIsDoneValue = (e) => {
      const checkboxId = e.target.id;
      todoList[checkboxId].isDone = !todoList[checkboxId].isDone;
      localStorage.setItem("todoList", JSON.stringify(todoList));
      setTodoList([...todoList]);
      // console.log('todoList[checkboxId].isDone', todoList[checkboxId].isDone)

    }

    const handleDelete = (e) => {
      const buttonId = e.target.id;
      const newTodoList = todoList.filter((listItem,index) => {
        if(index != buttonId){
          return true;
        }
      });
      setTodoList(() => newTodoList);
      console.log('newTodoList', newTodoList)
    }

    return (
        <main>

            <form onSubmit={addNewItem}>
                <label htmlFor="newTodo">
                    add todoList
                    <input type="text" name='newTodo' id='newTodo' required />
                    <input type="submit" value="add" />
                </label>
            </form>

            <section>
                {todoList.map((listItem, index) => (
                    <section key={index} className='todo-section'>
                        <input type="checkbox" name="isDone" id={index} checked={listItem.isDone} onChange={changeIsDoneValue}/>
                        <p>{listItem.text}</p>
                        <button id={index} onClick={handleDelete}>Delete</button>
                    </section>
                ))}
            </section>
        </main>
    );
}

export default Todo;