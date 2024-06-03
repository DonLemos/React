// import React, { useContext, useState, useEffect } from 'react';
// import { TodosContext } from './App';
// import { Table, Form, Button } from 'react-bootstrap';
// import useAPI from './useAPI';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// function ToDoList() {
//   const { state, dispatch } = useContext(TodosContext);
//   const [todoText, setTodoText] = useState('');
//   const [editMode, setEditMode] = useState(false);
//   const [editTodo, setEditTodo] = useState(null);
//   const endpoint = 'http://localhost:3000/todos/';
//   const savedTodos = useAPI(endpoint);

//   useEffect(() => {
//     dispatch({ type: 'get', payload: savedTodos });
//   }, [savedTodos]);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     if (editMode) {
//       await axios.patch(endpoint + editTodo.id, { text: todoText });
//       dispatch({ type: 'edit', payload: { ...editTodo, text: todoText } });
//       setEditMode(false);
//       setEditTodo(null);
//     } else {
//       const newToDo = { id: uuidv4(), text: todoText };
//       await axios.post(endpoint, newToDo);
//       dispatch({ type: 'add', payload: newToDo });
//     }
//     setTodoText('');
//   };

//   const handleEditClick = (todo) => {
//     setTodoText(todo.text);
//     setEditMode(true);
//     setEditTodo(todo);
//   };

//   const handleDeleteClick = async (todo) => {
//     await axios.delete(endpoint + todo.id);
//     dispatch({ type: 'delete', payload: todo });
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Control
//             type="text"
//             placeholder="Enter To Do"
//             onChange={(event) => setTodoText(event.target.value)}
//             value={todoText}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           {editMode ? 'Edit' : 'Add'}
//         </Button>
//       </Form>
//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>To Do</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {state.todos.map((todo) => (
//             <tr key={todo.id}>
//               <td>{todo.text}</td>
//               <td>
//                 <Button variant="link" onClick={() => handleEditClick(todo)}>
//                   Edit
//                 </Button>
//               </td>
//               <td>
//                 <Button variant="link" onClick={() => handleDeleteClick(todo)}>
//                   Delete
//                 </Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default ToDoList;




// import React, { useContext, useState, useEffect } from 'react';
// import { TodosContext } from './App';
// import { Table, Form, Button } from 'react-bootstrap';
// import axios from 'axios';
// import { v4 as uuidv4 } from 'uuid';

// function ToDoList() {
//   const { state, dispatch } = useContext(TodosContext);
//   const [todoText, setTodoText] = useState("");
//   const [editMode, setEditMode] = useState(false);
//   const [editTodo, setEditTodo] = useState(null);
//   const buttonTitle = editMode ? "Edit" : "Add";

//   const endpoint = "http://localhost:3000/todos/";

//   useEffect(() => {
//     const fetchTodos = async () => {
//       try {
//         const response = await axios.get(endpoint);
//         dispatch({ type: "get", payload: response.data });
//       } catch (error) {
//         console.error("Error fetching todos", error);
//       }
//     };

//     fetchTodos();
//   }, [dispatch]);

//   const handleSubmit = async event => {
//     event.preventDefault();
//     if (editMode) {
//       try {
//         await axios.patch(endpoint + editTodo.id, { text: todoText });
//         dispatch({
//           type: 'edit',
//           payload: { ...editTodo, text: todoText }
//         });
//         setEditMode(false);
//         setEditTodo(null);
//       } catch (error) {
//         console.error("Error updating todo", error);
//       }
//     } else {
//       const newToDo = { id: uuidv4(), text: todoText };
//       try {
//         await axios.post(endpoint, newToDo);
//         dispatch({ type: 'add', payload: newToDo });
//       } catch (error) {
//         console.error("Error adding todo", error);
//       }
//     }
//     setTodoText("");
//   };

//   return (
//     <div>
//       <Form onSubmit={handleSubmit}>
//         <Form.Group controlId="formBasicEmail">
//           <Form.Control
//             type="text"
//             placeholder="Enter To Do"
//             onChange={event => setTodoText(event.target.value)}
//             value={todoText}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           {buttonTitle}
//         </Button>
//       </Form>

//       <Table striped bordered hover>
//         <thead>
//           <tr>
//             <th>To Do</th>
//             <th>Edit</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {state.todos.map(todo => (
//             <tr key={todo.id}>
//               <td>{todo.text}</td>
//               <td
//                 onClick={() => {
//                   setTodoText(todo.text);
//                   setEditMode(true);
//                   setEditTodo(todo);
//                 }}

//                 style={{ cursor: 'pointer', color: 'blue' }}

//               >
//                 Edit
//               </td>
//               <td
//                 onClick={async () => {
//                   try {
//                     await axios.delete(endpoint + todo.id);
//                     dispatch({ type: 'delete', payload: todo });
//                   } catch (error) {
//                     console.error("Error deleting todo", error);
//                   }
//                 }}
//                 style={{ cursor: 'pointer', color: 'red' }}
//               >
//                 Delete
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// }

// export default ToDoList;


import React, { useContext, useState } from 'react'
import { TodosContext } from './App'
import { Table, Form, Button } from 'react-bootstrap'

function ToDoList() {
  const { state, dispatch } = useContext(TodosContext);
  const [todoText, setTodoText] = useState("")
  const [editMode, setEditMode] = useState(false)
  const [editTodo, setEditTodo] = useState(null)
  const buttonTitle = editMode ? "Edit" : "Add";
  
  const handleSubmit = event => {
    event.preventDefault();
    if (editMode) {
      dispatch({
        type: 'edit', payload:
          { ...editTodo, text: todoText }
      })
      setEditMode(false)
      setEditTodo(null)
    }
    else {
      dispatch({ type: 'add', payload: todoText })
    }
    setTodoText("")
  }
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            type="text"
            placeholder="Enter To Do"
            onChange={event =>
              setTodoText(event.target.value)}
            value={todoText}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          {buttonTitle}
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>To Do</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {state.todos.map(todo => (
            <tr key={todo.id}>
              <td>{todo.text}</td>
              <td onClick={() => {
                setTodoText(todo.text)
                setEditMode(true)
                setEditTodo(todo)
              }}>
                Edit
              </td>
              <td onClick={() =>
                dispatch({ type: 'delete', payload: todo })}>Delete</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
export default ToDoList;