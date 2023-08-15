import Note from "@/components/Note";
import useIdb from "@/hooks/Idb";
import { NoteType } from "@/models/Note";
import { FC, useEffect, useState } from "react";

export interface IndexType {}

const Index: FC<IndexType> = () => {
  const { readAllNotes, db } = useIdb();
  const [notes, setNotes] = useState<NoteType[] | null>(null);
  useEffect(() => {
    if (db)
      readAllNotes()?.then((data) => {
        setNotes(data);
      });
  }, [db]);
  return (
    <main className="min-h-screen max-w-xl px-6 mx-auto">
      <h1 className="text-center font-bold text-lg mb-8">Notes List</h1>
      <div className="overflow-y-auto max-h-[80vh]">
        {!!notes ? (
          notes.length === 0 ? (
            <div className="text-center">You do not have any note</div>
          ) : (
            notes.map(({ title, description }, index) => (
              <Note key={index} title={title} description={description} />
            ))
          )
        ) : (
          <div className="text-center">loading notes From indexed db...</div>
        )}
      </div>
    </main>
  );
};

export default Index;
