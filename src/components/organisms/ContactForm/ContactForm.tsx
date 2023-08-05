import { validations } from "@utils/validations";
import { Button } from "atoms/Button";
import { Input } from "atoms/Input";
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
        render: "Sua mensagem foi enviada com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 5000,
      });

      form.reset();
    } catch (e) {
      toast.update(toastId, {
        render: "Ocorreu um erro ao enviar sua mensagem",
        type: "error",
        isLoading: false,
        autoClose: 5000,
      });
    }
  };

  return (
    <form
      className="flex w-full flex-col gap-y-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl">Fale conosco</h1>
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
