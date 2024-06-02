import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postTodo, patchTodo, deleteTodo } from "@/todosApi/todosApi";
import { queryKey } from "@/queryKey/queryKey";

const usePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: postTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] }),
  });
};

const usePatchMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] }),
  });
};

const useDeleteMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: deleteTodo,
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: [queryKey.todos] }),
  });
};

export { usePostMutation, usePatchMutation, useDeleteMutation };
