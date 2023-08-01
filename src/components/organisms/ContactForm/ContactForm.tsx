import { validations } from "@utils/validations";
import { Button } from "atoms/Button";
import { InputForm } from "molecules/InputForm";
import { TextareaForm } from "molecules/TextareaForm";
import { useForm } from "react-hook-form";
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

  const onSubmit = async (data: ContactFormModel) => {
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
      <InputForm
        name="name"
        label="Nome"
        control={form.control}
        rules={{ required: "Esse campo é obrigatório." }}
      />
      <InputForm
        name="email"
        label="Email"
        control={form.control}
        rules={{ validate: validations.get("email") }}
      />
      <TextareaForm
        name="message"
        label="Mensagem"
        control={form.control}
        rows={3}
        rules={{ required: "Esse campo é obrigatório." }}
      />
      <Button type="submit" variant="outline">
        Enviar
      </Button>
    </form>
  );
}
