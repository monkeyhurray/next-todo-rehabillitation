"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { getTodo } from "@/todosApi/todosApi";
import TodoBar from "@/components/common/TodoBar";
import DoneBar from "@/components/common/DoneBar";
import { queryKey } from "@/queryKey/queryKey";
import { usePostMutation } from "@/components/hooks/useMutation";
import { useQuery } from "@tanstack/react-query";

const CSRPage = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [contents, setContent] = useState("");

  const {
    isLoading,
    isError,
    data: todos,
  } = useQuery({
    queryFn: getTodo,
    queryKey: [queryKey.todos],
  });

  const postMutation = usePostMutation();

  const onClickWriteBtn = () => {
    if (title.trim() !== "" && contents.trim() !== "") {
      setTitle("");
      setContent("");
      postMutation.mutate({
        title,
        contents,
      });
    } else {
      setTitle("");
      setContent("");
      alert("빈칸이 있으면 안됩니다!!!!!");
    }
  };

  if (isLoading) {
    return <div>로딩중...</div>;
  }
  if (isError) {
    return <div>오류 발생</div>;
  }

  return (
    <div className="ml-9 mt-6">
      <div className=" flex justify-center items-center">
        &nbsp;
        <input
          className="border border-black-700 rounded border-black w-100"
          placeholder="제목을 입력하세요"
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        &nbsp;
        <input
          className="border border-black-700 rounded border-black"
          placeholder="내용을 입력하세요"
          type="text"
          value={contents}
          required
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="w-14 rounded my-3 border-2 mx-3 border-black"
          onClick={onClickWriteBtn}
        >
          완료
        </button>
        <button
          className="w-60 rounded my-3 border-2 border-black"
          onClick={() => {
            router.push("/report");
          }}
        >
          [할일정보통계보러가기]
        </button>
      </div>
      <h1 className="text-lg">Todos...</h1>
      <TodoBar todos={todos} />
      <h1 className="text-lg mt-5">Done</h1>
      <DoneBar todos={todos} />
    </div>
  );
};

export default CSRPage;
