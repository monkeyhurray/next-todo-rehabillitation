import axios from "axios";

import type { Todo } from "@/types";

const getTodo = async () => {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos`
  );
  return response.data;
};

const postTodo = async (newTodo: {
  title: string;
  contents: string;
}): Promise<void> => {
  await axios.post(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos`, {
    ...newTodo,
    isDone: false,
  });
};

const patchTodo = async (payload: Todo) => {
  await axios.patch(
    `${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${payload.id}`,
    { ...payload, isDone: payload.isDone ? false : true }
  );
};

const deleteTodo = async (id: string): Promise<void> => {
  await axios.delete(`${process.env.NEXT_PUBLIC_SERVER_URL}/todos/${id}`);
};

export { getTodo, postTodo, patchTodo, deleteTodo };
