import { useEffect, useState } from "react";
export default function Todo () {
    const [todos, setTodos] = useState(() => {
        try{
            const savedTodos = localStorage.getItem('todos');
            return savedTodos ? JSON.parse(savedTodos) : [];
        } catch (error) {
            console.error('Помилка при читанні LocalStorage', error);
            return [];
        }
    });
    const [text, setText] = useState("");

    //збереження у ls
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    //доодати нову задачу
    const handleAdd = (e) => {
        e.preventDefault();
        if(!text.trim()) return;
        const newTodo = {
            id:  Date.now(),
            text,
            completed: false,
        };
        setTodos([...todos, newTodo]); //Додаємо до масиву
        setText(""); //очищаємо інпут
    };
    
    //переключити виконання
    const toggleTodo = (id) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
          )
        );
      };
      // видалити
    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !==id));
    }
        
    return(
        <div className="todo">
        <h2>Todo list</h2>
        <form onSubmit={handleAdd}>
            <label htmlFor="newInput">Що ще потрібно зробити для комфорту кота?
            <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </label>
            <button type="submit" className="btn">Add</button>
        </form>
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} className="todo_item">
                    <span onClick={() => toggleTodo(todo.id)}>{todo.text}</span>
                    <button onClick={() => deleteTodo(todo.id)}>Видалити</button>
                </li>
            ))}
        </ul>
    </div>
    )
};

