/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import Input from '../form/Input/Input';
import Textarea from '../form/Textarea/Textarea';
import validations from '../../utils/validations/validations';

const ContactForm = () => {
  const form = useForm({
    mode: 'onSubmit',
    shouldUseNativeValidation: true,
    defaultValues: {
      name: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (data) => {
    const response = fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        'form-name': 'contact',
        ...data,
      }).toString(),
    }).then((r) => {
      form.reset();
      return r;
    });

    await toast.promise(response, {
      pending: 'Enviando mensagem',
      error: 'Ocorreu um erro ao enviar sua mensagem',
      success: 'Sua mensagem foi enviada com sucesso',
    });
  };

  return (
    <form
      className="flex flex-col w-full gap-y-4"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <h1 className="text-2xl">Fale conosco</h1>
      <Input
        name="name"
        label="Nome"
        control={form.control}
        rules={{ required: 'Esse campo é obrigatório.' }}
      />
      <Input
        name="email"
        label="Email"
        control={form.control}
        rules={{ validate: validations.get('email') }}
      />
      <Textarea
        name="message"
        label="Mensagem"
        control={form.control}
        rows={3}
        rules={{ required: 'Esse campo é obrigatório.' }}
      />
      <button type="submit" className="button-outline">
        Enviar
      </button>
    </form>
  );
};

export default ContactForm;
