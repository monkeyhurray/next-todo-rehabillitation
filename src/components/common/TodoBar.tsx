import React from "react";
import { Todo } from "@/types";
import { usePatchMutation, useDeleteMutation } from "../hooks/useMutation";

const TodoBar = ({ todos }: { todos: Todo[] }) => {
  const patchMutation = usePatchMutation();
  const deleteMutation = useDeleteMutation();

  const deleteContents = (id: string) => deleteMutation.mutate(id);

  const onClickToggle = (payload: Todo) => patchMutation.mutate(payload);

  const todosFilter = todos.filter((todo) => todo.isDone === true);
  return (
    <div>
      {todosFilter.map((todo) => {
        const payload = {
          id: todo.id,
          title: todo.title,
          contents: todo.contents,
          isDone: todo.isDone,
        };

        return (
          <div
            className="mr-3 p-4 border-4 border-black rounded-lg"
            key={todo.id}
          >
            <li className="mb-1.5">제목:&nbsp;{todo.title}</li>
            <li>내용:&nbsp;{todo.contents}</li>
            <button
              className="mr-1 bg-green-400 hover:bg-green-700 text-white font-bold py-0.9 px-6 border border-grey-700 rounded"
              onClick={() => onClickToggle(payload)}
            >
              완료
            </button>
            <button
              className="bg-red-400 hover:bg-red-700 text-white font-bold py-0.9 px-3 border border-blue-700 rounded"
              onClick={() => deleteContents(todo.id)}
            >
              삭제하기
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default TodoBar;
