import Todo from "./Todo";
import { useState } from "react";

type ToDoType = {
  id: string;
  todo: string;
};

export default function Todos() {
  const [todo, setTodo] = useState("");
  const [activeIndex, setActiveIndex] = useState<number>();
  const [state, setState] = useState("");

  const handleToggle = () => {
    setTodo("something");
  };
  const isActiveToDo = (index: number) => {
    setActiveIndex(index);
  };

  const toDoObj = (obj: ToDoType) => {
    if (obj) return true;
    return false;
  };

  return (
    <div>
      {[1, 2, 3].map((el) => (
        <Todo
          handleToggle={handleToggle}
          isActiveToDo={isActiveToDo}
          setState={setState}
          toDoObj={toDoObj}
        />
      ))}
    </div>
  );
}
