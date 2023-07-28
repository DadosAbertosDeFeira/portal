import { InputForm } from "molecules/InputForm";
import { StyledButton } from "molecules/StyledButton";
import { TextareaForm } from "molecules/TextareaForm";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { validations } from "utils/validations";

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
    const response = fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact",
        ...data,
      }).toString(),
    }).then((r) => {
      form.reset();
      return r;
    });

    await toast.promise(response, {
      pending: "Enviando mensagem",
      error: "Ocorreu um erro ao enviar sua mensagem",
      success: "Sua mensagem foi enviada com sucesso",
    });
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
      <StyledButton type="submit" variant="outline">
        Enviar
      </StyledButton>
    </form>
  );
}
