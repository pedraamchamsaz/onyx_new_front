"use client";

import { useForm } from "react-hook-form";
import axios from "axios";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";

export default function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = async (data) => {
    try {
      data.userId = user.id
      const response = await axios.post("http://localhost:3001/events", data);
      console.log("Response:", response.data);
      reset()
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const { user, isLoading } = useKindeBrowserClient();

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
            {...register("name", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.name && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Date</h4>
          <input
            {...register("date", { required: true })}
            className="border p-2 rounded-lg text-sm"
            type="date"
          />
          {errors.date && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        {/* <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Time</h4>
          <input
            {...register("date")}
            className="border p-2 rounded-lg text-sm"
            type="time"
          />
          {errors.time && <span className="text-xs text-red-500">This field is required</span>}
        </div> */}
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Category</h4>
          <input
            {...register("category", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.category && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Country</h4>
          <input
            {...register("country", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.country && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Event Image</h4>
          <input
            {...register("image", { required: true })}
            className="border p-2 rounded-lg text-sm"
          />
          {errors.image && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Price</h4>
          <input
            {...register("price", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
          />
          {errors.price && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Overview</h4>
          <textarea
            {...register("overview", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
            rows="5"
          />
          {errors.overview && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">What happens on the day?</h4>
          <textarea
            {...register("onTheDay", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
            rows="5"
          />
          {errors.onTheDay && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Refund Policy</h4>
          <textarea
            {...register("refund", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
            rows="5"
          />
          {errors.refund && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <div className="flex flex-col gap-2 w-full">
          <h4 className="text-xs font-semibold">Participant Guidelines</h4>
          <textarea
            {...register("guidelines", { required: true })}
            type="number"
            className="border p-2 rounded-lg text-sm"
            rows="5"
          />
          {errors.guidelines && (
            <span className="text-xs text-red-500">This field is required</span>
          )}
        </div>
        <input
          type="submit"
          className="border cursor-pointer rounded-[15px] py-2 bg-orange-500 w-[200px] text-white font-medium"
        />
      </div>
    </form>
  );
}
