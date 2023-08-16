import Note from "@/components/Note";
import useIdb from "@/hooks/Idb";
import { NoteType } from "@/models/Note";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";

export interface IndexType {}

const Index: FC<IndexType> = () => {
  const { readAllNotes, deleteNote, db } = useIdb();
  const [notes, setNotes] = useState<NoteType[] | null>(null);
  const [update, setUpdate] = useState<number>(0);
  const router = useRouter();
  useEffect(() => {
    if (db)
      readAllNotes()?.then((data) => {
        setNotes(data);
      });
  }, [db, update]);
  const deleteNoteHandler = (id: NoteType["id"]) => {
    if (db) deleteNote(id);
    setUpdate(Math.random());
  };
  const updateNoteHandler = (id: NoteType["id"]) => {
    // if(db)deleteNote(id)
    router.push(`/newNote?edit=${id}`);
  };

  return (
    <main className="min-h-screen max-w-xl px-6 mx-auto">
      <h1 className="text-center font-bold text-lg mb-8">Notes List</h1>
      <div className="overflow-y-auto max-h-[80vh]">
        {!!notes ? (
          notes.length === 0 ? (
            <div className="text-center">You do not have any note</div>
          ) : (
            notes.map((note, index) => (
              <Note
                key={index}
                note={note}
                deleteNoteHandler={() => deleteNoteHandler(note.id)}
                updateNoteHandler={() => updateNoteHandler(note.id)}
              />
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
