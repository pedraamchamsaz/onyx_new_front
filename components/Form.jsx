"use client";

import { useForm } from "react-hook-form";

export default function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-[500px] mx-auto border border-black rounded-xl px-6 bg-white/70"
    >
      <h2 className="py-4 text-center font-semibold border-b">Create Event</h2>
      <div className="flex flex-col gap-6 py-4 items-center">
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Event Name</h4>
          <input
            {...register("eventName")}
            className="border p-2 rounded-lg text-sm"
          />
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Category</h4>
          <input
            {...register("category", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Country</h4>
          <input
            {...register("country", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Price</h4>
          <input
            {...register("price", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Overview</h4>
          <textarea
            {...register("overview", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
            rows='5'
          />
          {errors.category && <span>This field is required</span>}
        </div>
        <input
          type="submit"
          className="border cursor-pointer rounded-[15px] py-2 bg-orange-500 w-[200px]"
        />
      </div>
    </form>
  );
}
