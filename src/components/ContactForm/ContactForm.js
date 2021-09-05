import React from 'react';
import Button from '../Button';
import { encodeForm } from '../../utils/form';

import styles from './ContactForm.module.scss';

const ContactForm = () => {
  const [formData, setFormData] = React.useState({});
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData);
    console.log(encodeForm(formData));
    try {
      await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encodeForm({
          'form-name': event.target.getAttribute('name'),
          ...formData,
        }),
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <strong className={styles.title}>Fale conosco</strong>
      <form
        onSubmit={handleSubmit}
        className={styles.contactForm}
        name="contact"
        data-netlify="true"
      >
        <input
          onChange={handleOnChange}
          className={styles.contactFormInput}
          type="text"
          name="name"
          placeholder="Nome"
        />
        <input
          onChange={handleOnChange}
          className={styles.contactFormInput}
          type="email"
          name="email"
          placeholder="Email"
        />
        <textarea
          onChange={handleOnChange}
          className={styles.contactFormTextarea}
          name="message"
          placeholder="Mensagem"
          rows={3}
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
