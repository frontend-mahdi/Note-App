import Note from "@/components/Note";
import { FC } from "react";

export interface IndexType {}

const Index: FC<IndexType> = () => {
  const EmptyArray = Array.from({ length: 13 }, (_, index) => index);

  return (
    <main className="min-h-screen max-w-xl px-6 mx-auto">
      <h1 className="text-center font-bold text-lg mb-8">Notes List</h1>
      <div className="overflow-y-auto max-h-[80vh]">
        {EmptyArray.map((_, index) => (
          <Note key={index} title="Title" description="this is a description" />
        ))}
      </div>
    </main>
  );
};

export default Index;
