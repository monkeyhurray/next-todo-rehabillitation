import React from "react";
import { useDeleteMutation, usePatchMutation } from "../hooks/useMutation";

import type { Todo } from "@/types";

const patchMutation = usePatchMutation();
const deleteMutation = useDeleteMutation();

const DoneBar = ({ todos }: { todos: Todo[] }) => {
  const patchContents = (payload: Todo) => patchMutation.mutate(payload);
  const deleteContents = (id: string) => deleteMutation.mutate(id);

  const todoFliter = todos.filter((todo) => todo.isDone === false);
  return (
    <div>
      {todoFliter.map((todo: Todo) => {
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
              className="mr-1 bg-blue-400 hover:bg-blue-700 text-white font-bold py-0.9 px-6 border border-blue-700 rounded"
              onClick={() => patchContents(payload)}
            >
              취소
            </button>{" "}
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

export default DoneBar;
