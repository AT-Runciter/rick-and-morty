"use client";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import MaskedInput from "react-input-mask";
import { contactFormValidationSchema } from "@/schemas/contactFormValidationSchems";
import { Button } from "../ui/button";

type contactFormValidationSchema = z.infer<typeof contactFormValidationSchema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<contactFormValidationSchema>({
    resolver: zodResolver(contactFormValidationSchema),
  });

  const onSubmit: SubmitHandler<contactFormValidationSchema> = (data) => {
    console.log(data);
    reset({ name: "", email: "", phone: "" });
  };

  return (
    <form
      className="w-[400px] px-8 pt-6 pb-8 mb-4 mx-auto"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full mb-8">
        <label
          className="block mb-2 text-lg font-bold text-accent"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className={`relative w-full px-3 py-4 text-lg leading-tight text-gray-700 border ${
            errors.name && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="name"
          type="text"
          placeholder="First Name"
          {...register("name")}
        />
        {errors.name && (
          <p className="absolute text-xs italic text-red-500 mt-2">
            {errors.name?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-8">
        <label
          className="block mb-2 text-lg font-bold text-accent"
          htmlFor="email"
        >
          Email
        </label>
        <input
          className={`relative w-full px-3 py-4 text-lg leading-tight text-gray-700 border ${
            errors.name && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          id="email"
          type="email"
          placeholder="Email"
          {...register("email")}
        />
        {errors.email && (
          <p className="absolute text-xs italic text-red-500 mt-2">
            {errors.email?.message}
          </p>
        )}
      </div>

      <div className="w-full mb-8">
        <label
          className="block mb-2 text-lg font-bold text-accent"
          htmlFor="phone"
        >
          Phone
        </label>
        <MaskedInput
          className={`relative w-full px-3 py-4 text-lg leading-tight text-gray-700 border ${
            errors.name && "border-red-500"
          } rounded appearance-none focus:outline-none focus:shadow-outline`}
          mask="+380999999999"
          placeholder="+380"
          id="phone"
          {...register("phone")}
        />
        {errors.phone && (
          <p className="absolute text-xs italic text-red-500 mt-2">
            {errors.phone?.message}
          </p>
        )}
      </div>
      <Button
        type="submit"
        className="mx-auto mt-[50px] text-xl text-secondary px-[45px] py-[25px] bg-gradient-to-b from-blue-300 to-green-300 transition-color hover:bg-gradient-to-t "
      >
        Submit
      </Button>
    </form>
  );
}
