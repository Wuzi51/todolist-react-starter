import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState } from 'react';

const dummyTodos = [
  {
    title: 'Learn react-router',
    isDone: true,
    id: 1,
  },
  {
    title: 'Learn to create custom hooks',
    isDone: false,
    id: 2,
  },
  {
    title: 'Learn to use context',
    isDone: true,
    id: 3,
  },
  {
    title: 'Learn to implement auth',
    isDone: false,
    id: 4,
  },
];

const TodoPage = () => {
  const [inputValue, setInpputValue] = useState('')
  const [todo, setTodo] = useState(dummyTodos);
  // 檢查輸入內容是否為空
  const handleChange = (value) => {
    setInpputValue(value)
  }

  const handleAddTodo = () => {
    if(inputValue.length === 0) {
      return
    }

    setTodo((prevTodos) => {
      return [
        ...prevTodos,
        {
         id: Math.random() * 100,
         title: inputValue,
         isDone: false, 
        }
      ]
    })
    // 重置輸入欄位
    setInpputValue('')
  }

  const handelKeyDonw = () => {
    if (inputValue.length === 0) {
      return;
    }

    setTodo((prevTodos) => {
      return [
        ...prevTodos,
        {
          id: Math.random() * 100,
          title: inputValue,
          isDone: false,
        },
      ];
    });
    setInpputValue('');
  }

  return (
    <div>
      TodoPage
      <Header />
      <TodoInput 
        inputValue={inputValue} 
        onChange={handleChange}
        onAddTodo={handleAddTodo}
        onKeyDone={handelKeyDonw}
      />
      <TodoCollection todos={todo}/>
      <Footer />
    </div>
  );
};

export default TodoPage;
