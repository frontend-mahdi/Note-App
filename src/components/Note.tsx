import { FC } from "react";

export interface NoteType {
  title: string;
  description: string;
}

const Note: FC<NoteType> = ({ title, description }) => {
  return (
    <div className="border border-white rounded px-4 py-2 w-full mb-4">
      <h4 className="capitalize">{title}</h4>
      <p className="text-gray-400 text-sm">{description}</p>
      <div className="text-sm font-semibold flex flex-row gap-2">
        <span className="cursor-pointer text-blue-300">Edit Note</span>
        <span className="cursor-pointer text-red-300">Delete Note</span>
      </div>
    </div>
  );
};

export default Note;
