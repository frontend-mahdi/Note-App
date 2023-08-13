import { FC } from "react";

export interface NewNoteType {}

const NewNote: FC<NewNoteType> = () => {
  return (
    <main className="min-h-screen max-w-xl px-6 mx-auto">
      <h1 className="text-center font-bold text-lg mb-8">Create/Edit Note</h1>
      <div></div>
    </main>
  );
};

export default NewNote;
