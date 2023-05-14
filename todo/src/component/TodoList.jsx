import React, { useState } from 'react';

export const TodoList = () => {
  const [todos, setTodos] = useState([]);
  const [inputTodo, setInputTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);
  const [idCount, setIdCount] = useState(1);

  const createTodo = () => {
    if (!inputTodo){
      alert('Todoを入力してください');
      return;
    }
    setTodos([...todos, { id: idCount, name: inputTodo, completed: false }]);
    setInputTodo("");
    setIdCount(idCount + 1);
  };

  const deleteTodo = (id) => {
    if (window.confirm('本当によろしいですか？')) {
      setTodos(todos.filter(todo => todo.id !== id));
    }
  };

  const toggleCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const editTodo = (id) => {
    const todo = todos.find(todo => todo.id === id);
    setEditIndex(id);
    setInputTodo(todo.name);
  };

  const updateTodo = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, name: inputTodo } : todo));
    setEditIndex(null);
    setInputTodo("");
  };


  // ここでタスクのステータスを定義
  const completedTasks = todos.filter(todo => todo.completed).length;
  const totalTasks = todos.length;
  const uncompletedTasks = totalTasks - completedTasks;

  return (
    <>
      <h1>Todoリスト</h1>
      <h2>Todoステータス</h2>
      <p>
        <span className='mr-1'>全てのタスク：{totalTasks}</span>
        <span className='mr-1'>完了済み：{completedTasks}</span>
        <span className='mr-1'>未完了：{uncompletedTasks}</span>
      </p>
      <h2>Todo入力フォーム</h2>
      <input className='mr-1' type="text" value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
      <button onClick={createTodo}>保存</button>
      <h2>Todo一覧</h2>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <input className='mr-1' type="checkbox" id={`todo-${todo.id}`} checked={todo.completed} onChange={() => toggleCompleted(todo.id)} />
            {editIndex === todo.id ? 
              <>
                <input className='mr-1' value={inputTodo} onChange={(e) => setInputTodo(e.target.value)} />
                <button className='mr-1' onClick={() => updateTodo(todo.id)}>保存</button>
              </> :
              <>
                <label className={`mr-1 ${todo.completed ? 'completed' : ''}`} htmlFor={`todo-${todo.id}`}>{todo.name}</label>
                <button className='mr-1' onClick={() => editTodo(todo.id)}>編集</button>
                <button onClick={() => deleteTodo(todo.id)}>削除</button>
              </>
            }
          </li>
        ))}
      </ul>
    </>
  );
};
