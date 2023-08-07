import { validations } from "@utils/validations";
import { Button } from "atoms/Button";
import { Input } from "atoms/Input";
import { Text } from "atoms/Text";
import { Textarea } from "atoms/Textarea";
import type { SubmitHandler } from "react-hook-form";
import { Controller, useForm } from "react-hook-form";
import { toast } from "react-toastify";

export interface ContactFormModel {
  name: string;
  email: string;
  message: string;
}

export function ContactForm() {
  const form = useForm<ContactFormModel>({
    mode: "onSubmit",
    shouldUseNativeValidation: true,
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<ContactFormModel> = async (data) => {
    const toastId = toast.loading("Enviando mensagem");

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams({
          "form-name": "contact",
          ...data,
        }).toString(),
      });
      if (response.status !== 200) throw new Error();

      toast.update(toastId, {
        autoClose: 5000,
        isLoading: false,
        render: "Sua mensagem foi enviada com sucesso",
        type: "success",
      });

      form.reset();
    } catch (e) {
      toast.update(toastId, {
        autoClose: 5000,
        isLoading: false,
        render: "Ocorreu um erro ao enviar sua mensagem",
        type: "error",
      });
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-y-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <Text variant="h1">Fale conosco</Text>
      <Controller
        name="name"
        control={form.control}
        rules={{ required: "Esse campo é obrigatório" }}
        render={({ field, fieldState: { error } }) => (
          <Input
            errorText={error?.message}
            label="Nome"
            variant="outline"
            hideLabel
            filled
            {...field}
          />
        )}
      />

      <Controller
        name="email"
        control={form.control}
        rules={{ validate: validations.get("email") }}
        render={({ field, fieldState: { error } }) => (
          <Input
            errorText={error?.message}
            label="Email"
            variant="outline"
            hideLabel
            filled
            {...field}
          />
        )}
      />

      <Controller
        name="message"
        control={form.control}
        rules={{ required: "Esse campo é obrigátorio" }}
        render={({ field, fieldState: { error } }) => (
          <Textarea
            errorText={error?.message}
            label="Mensagem"
            hideLabel
            {...field}
          />
        )}
      />

      <Button type="submit" variant="outline">
        Enviar
      </Button>
    </form>
  );
}