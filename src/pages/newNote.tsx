import { FC } from "react";
import { useForm } from "react-hook-form";

export interface NewNoteType {}

const NewNote: FC<NewNoteType> = () => {
  type FormInputsType = {
    title: string;
    description: string;
  };
  const { handleSubmit, register } = useForm<FormInputsType>();
  const submitFormHandler = (data: FormInputsType) => {
    console.log("submitted data is", data);
  };
  return (
    <main className="min-h-screen max-w-xl px-6 mx-auto">
      <h1 className="text-center font-bold text-lg mb-8">Create/Edit Note</h1>
      <div>
        <form
          onSubmit={handleSubmit(submitFormHandler)}
          className="flex flex-col items-stretch gap-4"
        >
          <input
            type="text"
            placeholder="Title"
            {...register("title", { required: true })}
            className="bg-gray-800 px-3 py-2 rounded-sm"
          />
          <textarea
            placeholder="Description (optional)"
            {...register("description")}
            className="bg-gray-800 px-3 py-2 rounded-sm"
          />
          <button
            type="submit"
            className="bg-gray-600 rounded-sm py-2 hover:bg-gray-500"
          >
            submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default NewNote;
