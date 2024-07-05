import React from "react";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import Field from "../components/Field";
import FieldSet from "../components/FieldSet";
import NumberInput from "../components/NumberInput";

const RegistrationForm = () => {
  const {
    register, // this conect input field to the form hook
    handleSubmit, // this fn takes all form data and return it
    formState: { errors }, // all the error of input field keep in this object
    setError, // set custom error in state that is control by form hook
    control, //  it is used to connect useFieldArray to form hook
  } = useForm();

  const { fields, append, remove } = useFieldArray({
    // it is used to create dynamic field, fields contain added input fields, it is an array.
    // append insert new input filed, remove delete fields.
    name: "socials",
    control, // used to connect form hook to useFieldArray
  });

  const submitForm = (formData) => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <form onSubmit={handleSubmit(submitForm)}>
        <FieldSet label="Enter Your Basic Details">
          <Field label="Picture" error={errors.picture}>
            <input
              {...register("picture", {
                required: "Picture is required",
              })}
              type="file"
              id="picture"
              name="picture"
            />
          </Field>
          <Field label="Email" error={errors.email}>
            <input
              {...register("email", {
                required: "Email is required.",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.email ? "border-red-500" : "border-gray-200"
              }`}
              type="email"
              name="email"
              id="email"
              placeholder="Enter email address"
            />
          </Field>
          <Field label="Password" error={errors.password}>
            <input
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 8,
                  message: "Your password must be at least 8 characters.",
                },
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.password ? "border-red-500" : "border-gray-200"
              }`}
              type="password"
              name="password"
              id="password"
              placeholder="Enter Password"
            />
          </Field>

          <Field label="Full Name" error={errors.fname}>
            <input
              {...register("fname", {
                required: "Full Name is required.",
              })}
              className={`p-2 border box-border w-[300px] rounded-md ${
                !!errors.fname ? "border-red-500" : "border-gray-200"
              }`}
              type="text"
              name="fname"
              id="fname"
              placeholder="Enter Full Name"
            />
          </Field>

          <Field label="Age" error={errors.age}>
            <Controller
              name="age"
              control={control}
              defaultValue={1}
              render={({ field: { ref, ...field } }) => (
                <NumberInput
                  id="age"
                  className={`p-2 border box-border w-full rounded-md ${
                    !!errors.age ? "border-red-500" : "border-gray-200"
                  }`}
                  {...field}
                />
              )}
              rules={{
                max: {
                  value: 100,
                  message: "Age can be between 0 and 100",
                },
              }}
            />
          </Field>
        </FieldSet>

        <FieldSet label="Enter Social Handles">
          {fields.map((field, index) => {
            return (
              <div
                className="flex justify-between items-center w-max"
                key={field.id}
              >
                <Field label="Social Name">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].name`)}
                    id={`socials[${index}].name`}
                    name={`socials[${index}].name`}
                  />
                </Field>

                <Field label="Social URL">
                  <input
                    className="p-2 border box-border w-full rounded-md"
                    type="text"
                    {...register(`socials[${index}].url`)}
                    id={`socials[${index}].url`}
                    name={`socials[${index}].url`}
                  />
                </Field>
                <button
                  className="mt-8 mr-2 text-2xl"
                  onClick={() => remove(index)}
                >
                  &#8722;
                </button>
              </div>
            );
          })}
          <button
            className="mt-8 text-md text-white cursor-pointer border rounded-lg bg-gray-500 p-1 m-auto"
            onClick={() => append({ name: "", url: "" })}
          >
            Add A Social Handle
          </button>
        </FieldSet>

        <div>{errors?.root?.random?.message}</div>
        <Field>
          <button className="text-md text-white cursor-pointer p-1 border rounded-lg bg-purple-500 m-auto">
            Register
          </button>
        </Field>
      </form>
    </div>
  );
};

export default RegistrationForm;
