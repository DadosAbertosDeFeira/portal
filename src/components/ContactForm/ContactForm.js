/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import classnames from 'classnames';

import Button from '../Button';
import { encodeForm } from '../../utils/form';

import styles from './ContactForm.module.scss';

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const formValidation = {
  name: {
    required: 'Esse campo é obrigatório',
  },
  email: {
    required: 'Esse campo é obrigatório',
    pattern: {
      value: EMAIL_REGEX,
      message: 'Informe um email válido',
    },
  },
  message: {
    required: 'Esse campo é obrigatório',
  },
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await toast.promise(
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': 'contact',
          ...data,
        }),
      }),
      {
        pending: 'Enviando mensagem',
        error: 'Ocorreu um erro ao enviar sua mensagem',
        success: 'Sua mensagem foi enviada com sucess',
      }
    );
  };

  return (
    <>
      <strong className={styles.title}>Fale conosco</strong>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
        <input
          className={styles.contactFormInput}
          {...register('name', formValidation.name)}
          type="text"
          placeholder="Nome"
        />
        <ErrorMessage
          as="span"
          className={classnames(styles.errorMessage, 'text-sm m-sm')}
          errors={errors}
          name="name"
        />

        <input
          className={styles.contactFormInput}
          {...register('email', formValidation.email)}
          type="email"
          placeholder="Email"
        />
        <ErrorMessage
          as="span"
          className={classnames(styles.errorMessage, 'text-sm m-sm')}
          errors={errors}
          name="email"
        />

        <textarea
          className={styles.contactFormTextarea}
          {...register('message', formValidation.message)}
          placeholder="Mensagem"
          rows={3}
        />
        <ErrorMessage
          as="span"
          className={classnames(styles.errorMessage, 'text-sm m-sm')}
          errors={errors}
          name="message"
        />

        <Button
          className={styles.contactFormSubmitButton}
          type="submit"
          outline
        >
          Enviar
        </Button>
      </form>
    </>
  );
};

export default ContactForm;
