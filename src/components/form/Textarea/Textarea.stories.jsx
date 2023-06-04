/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { Textarea } from "./Textarea";

export default {
  title: "components/Textarea",
  component: Textarea,
  argTypes: {
    control: {
      control: false,
    },
    name: {
      control: false,
    },
  },
};

export const Default = (args) => {
  const form = useForm();

  return <Textarea {...args} control={form.control} />;
};

export const Invalid = (args) => {
  const form = useForm();

  form.setError(args.name, {
    type: "required",
    message: "Esse valor é obrigatório.",
  });

  form.setValue(args.name, " ");

  return (
    <Textarea {...args} control={form.control} rules={{ required: true }} />
  );
};

Invalid.args = {
  name: "Email",
  label: "E-mail",
};
