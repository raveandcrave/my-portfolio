'use client';

import {useForm} from 'react-hook-form';
import {useContext, useEffect, useState} from 'react';
import {Button} from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import {useTranslation} from '@/app/i18n/client';
import {LngContext} from '@/app/i18n/LngContext';

interface IContactForm {
  name: string;
  email: string;
  message: number;
}

const ContactForm = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const {lng} = useContext(LngContext);
  const {t} = useTranslation(lng);

  const {
    register,
    reset,
    handleSubmit,
    formState: {errors},
  } = useForm<IContactForm>();

  const onSubmit = (formData: IContactForm) => {
    const {name, email, message} = formData;

    const text = `
    <b><u>Имя:</u></b> ${name}
    <b><u>Email:</u></b> ${email}
    - - -
    <b><u>Сообщение:</u></b> ${message}`;

    sendMessage(text);
  };

  const sendMessage = async (text: string) => {
    await fetch(`api/tg/message`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({text}),
    });

    reset();
  };

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <form className="grid grid-cols-1 gap-6 md:w-1/2 md:mx-auto" onSubmit={handleSubmit(onSubmit)}>
      <Input
        aria-invalid={!!errors.name}
        aria-errormessage={errors.name?.message}
        placeholder={t('contact-section.name')}
        error={errors.name}
        aria-label={t('contact-section.name')}
        {...register('name', {
          required: {value: true, message: t('contact-section.required.name')},
          maxLength: {value: 32, message: `${t('contact-section.maxLength')} 32`},
        })}
      />
      <Input
        aria-invalid={!!errors.email}
        aria-errormessage={errors.email?.message}
        placeholder={t('contact-section.email')}
        aria-label={t('contact-section.email')}
        error={errors.email}
        {...register('email', {
          required: {value: true, message: t('contact-section.required.email')},
          pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: `${t('contact-section.invalid')} email`},
        })}
      />
      <Textarea
        aria-invalid={!!errors.message}
        aria-errormessage={errors.message?.message}
        rows={4}
        placeholder={t('contact-section.message')}
        aria-label={t('contact-section.message')}
        maxLength={512}
        error={errors.message}
        {...register('message', {
          required: {value: true, message: t('contact-section.required.message')},
          maxLength: {value: 512, message: `${t('contact-section.maxLength')} 512`},
        })}
      />
      <Button className="justify-self-start" type="submit">
        {t('contact-section.submit')}
      </Button>
    </form>
  );
};

export default ContactForm;
