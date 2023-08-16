import { NoteType } from "@/models/Note";
import { FC } from "react";

export interface NotePropType {
  note: NoteType;
  deleteNoteHandler: () => void;
  updateNoteHandler: () => void;
}

const Note: FC<NotePropType> = ({
  note,
  deleteNoteHandler,
  updateNoteHandler,
}) => {
  const { title, description = "" } = note;

  return (
    <div className="border-white bg-gray-900 border-b px-4 py-2 w-full mb-6">
      <h4 className="capitalize">{title}</h4>
      <p className="text-gray-400 text-sm py-2">{description}</p>
      <div className="text-sm font-semibold flex flex-row justify-end gap-2">
        <span
          className="cursor-pointer text-blue-300"
          onClick={updateNoteHandler}
        >
          Edit Note
        </span>
        <span
          className="cursor-pointer text-red-300"
          onClick={deleteNoteHandler}
        >
          Delete Note
        </span>
      </div>
    </div>
  );
};

export default Note;
