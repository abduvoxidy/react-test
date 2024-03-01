import { Dispatch, SetStateAction } from "react";

type ToDoType = {
  id: string;
  todo: string;
};

type TodoProps = {
  handleToggle: () => void;
  isActiveToDo: (num: number) => void;
  setState: Dispatch<SetStateAction<string>>;
  toDoObj: (obj: ToDoType) => boolean;
};

export default function Todo({
  handleToggle,
  isActiveToDo,
  setState,
  toDoObj,
}: TodoProps) {
  return (
    <div
      onClick={() => {
        handleToggle();
        isActiveToDo(5);
        setState("str");
        toDoObj({ id: "123", todo: "To do 1" });
      }}
    >
      index
    </div>
  );
}
