import { FC } from "react";

export interface NoteType {
  title: string;
  description: string;
}

const Note: FC<NoteType> = ({ title, description }) => {
  return (
    <div className="border-white bg-gray-900 border-b px-4 py-2 w-full mb-6">
      <h4 className="capitalize">{title}</h4>
      <p className="text-gray-400 text-sm py-2">{description}</p>
      <div className="text-sm font-semibold flex flex-row justify-end gap-2">
        <span className="cursor-pointer text-blue-300">Edit Note</span>
        <span className="cursor-pointer text-red-300">Delete Note</span>
      </div>
    </div>
  );
};

export default Note;
