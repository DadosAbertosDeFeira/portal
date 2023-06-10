/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

export default {
  title: "components/Input",
  component: Input,
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

  return <Input {...args} control={form.control} />;
};

export const Invalid = (args) => {
  const form = useForm();

  form.setError(args.name, {
    type: "required",
    message: "Esse valor é obrigatório.",
  });

  form.setValue(args.name, " ");

  return <Input {...args} control={form.control} rules={{ required: true }} />;
};

Invalid.args = {
  name: "Email",
  label: "E-mail",
};
