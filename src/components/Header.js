import React, { useReducer, useEffect, useMemo, useState } from 'react';
// import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
const initialState = {
  todos: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          { id: Date.now(), title: action.payload, completed: false },
          ...state.todos,
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    default:
      return state;
  }
}

const Header = () => {
  // const [toggle, setToggle] = useState(false);
  // const [text, setText] = useState("");
  // const [filter, setFilter] = useState("all");
  // const [todos, setTodos] = useState([
  //   { id: 1, title: "Prepare React test", completed: false },
  //   { id: 2, title: "Revise hooks", completed: true },
  // ]);

  // const addTodo = (e) => {
  //   e.preventDefault();
  //   const value = text.trim();
  //   if (!value) return;

  //   const newTodo = {
  //     id: Date.now(),
  //     title: value,
  //     completed: false,
  //   };

  //   setTodos((prev) => [newTodo, ...prev]);
  //   setText("");
  // };

  // const toggleTodo = (id) => {
  //   debugger;
  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, completed: !todo.completed } : todo
  //     )
  //   );
  // };

  // const deleteTodo = (id) => {
  //   setTodos((prev) => prev.filter((todo) => todo.id !== id));
  // };

  // const editTodo = (id) => {
  //   const updatedTitle = prompt("Edit todo:");
  //   if (!updatedTitle || !updatedTitle.trim()) return;

  //   setTodos((prev) =>
  //     prev.map((todo) =>
  //       todo.id === id ? { ...todo, title: updatedTitle.trim() } : todo
  //     )
  //   );
  // };

  // const filteredTodos = useMemo(() => {
  //   if (filter === "active") return todos.filter((todo) => !todo.completed);
  //   if (filter === "completed") return todos.filter((todo) => todo.completed);
  //   return todos;
  // }, [todos, filter]);

  const [text, setText] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;
    dispatch({ type: "ADD_TODO", payload: value });
    setText("");
  };

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!res.ok) throw new Error("Failed to fetch users");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError("Something went wrong while fetching users.");
      } finally {
        setLoading(false);
      }
    }

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;


  return (
    // <header className="flex justify-between px-5 py-3 bg-slate-900 text-white fixed w-full z-20 shadow-lg">
    //   <a href="/" className="text-2xl font-bold text-blue-400">Rashmith</a>
    //   <nav className="hidden md:flex space-x-6">
    //     <a href="#about" className="hover:text-blue-400">About</a>
    //     <a href="#skills" className="hover:text-blue-400">Skills</a>
    //     <a href="#projects" className="hover:text-blue-400">Projects</a>
    //     <a href="#contact" className="hover:text-blue-400">Contact</a>
    //   </nav>
    //   <button onClick={() => setToggle(!toggle)} className="md:hidden">
    //     {/* {toggle ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />} */}
    //   </button>
    //   <nav className={`${toggle ? 'left-0' : '-left-full'} md:hidden fixed top-12 w-full h-screen bg-slate-900 transition-all duration-300 flex flex-col items-center pt-10`}>
    //     <a href="#about" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>About</a>
    //     <a href="#skills" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Skills</a>
    //     <a href="#projects" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Projects</a>
    //     <a href="#contact" className="py-4 text-xl hover:text-blue-400" onClick={() => setToggle(false)}>Contact</a>
    //   </nav>
    // </header>

    // <div style={{ maxWidth: 500, margin: "40px auto", fontFamily: "Arial" }}>
    //   <h1>Todo App</h1>

    //   <form onSubmit={addTodo} style={{ display: "flex", gap: 8 }}>
    //     <input
    //       value={text}
    //       onChange={(e) => setText(e.target.value)}
    //       placeholder="Enter a task"
    //       style={{ flex: 1, padding: 8 }}
    //     />
    //     <button type="submit">Add</button>
    //   </form>

    //   <div style={{ margin: "16px 0", display: "flex", gap: 8 }}>
    //     <button onClick={() => setFilter("all")}>All</button>
    //     <button onClick={() => setFilter("active")}>Active</button>
    //     <button onClick={() => setFilter("completed")}>Completed</button>
    //   </div>

    //   <ul style={{ listStyle: "none", padding: 0 }}>
    //     {filteredTodos.map((todo) => (
    //       <li
    //         key={todo.id}
    //         style={{
    //           display: "flex",
    //           justifyContent: "space-between",
    //           alignItems: "center",
    //           padding: "10px 0",
    //           borderBottom: "1px solid #ddd",
    //         }}
    //       >
    //         <span
    //           onClick={() => toggleTodo(todo.id)}
    //           style={{
    //             cursor: "pointer",
    //             textDecoration: todo.completed ? "line-through" : "none",
    //             color: todo.completed ? "#888" : "#000",
    //             flex: 1,
    //           }}
    //         >
    //           {todo.title}
    //         </span>

    //         <div style={{ display: "flex", gap: 8 }}>
    //           <button onClick={() => editTodo(todo.id)}>Edit</button>
    //           <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    //         </div>
    //       </li>
    //     ))}
    //   </ul>
    // </div>
    <div>
      <h1>Todo App</h1>

      <form onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add todo"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {state.todos.map((todo) => (
          <li key={todo.id}>
            <span
              onClick={() =>
                dispatch({ type: "TOGGLE_TODO", payload: todo.id })
              }
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
                cursor: "pointer",
              }}
            >
              {todo.title}
            </span>
            <button
              onClick={() =>
                dispatch({ type: "DELETE_TODO", payload: todo.id })
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>

  );
};

export default Header;