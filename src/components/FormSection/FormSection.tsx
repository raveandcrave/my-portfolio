'use client';

import {useForm} from 'react-hook-form';
import {useContext} from 'react';
import SectionMotion from '../SectionMotion/SectionMotion';
import {Button} from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Title from '../Title/Title';
import {useTranslation} from '@/app/i18n/client';
import {LngContext} from '@/app/i18n/LngContext';

interface IContactForm {
  name: string;
  email: string;
  message: number;
}

const FormSection = () => {
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

  return (
    <SectionMotion className="py-24" id="contact">
      <Title tag="h2" className="mb-10 mx-auto text-center">
        {t('contact-section.title')}
      </Title>
      <form className="grid grid-cols-1 gap-6 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder={t('contact-section.name')}
          error={errors.name}
          {...register('name', {
            required: {value: true, message: t('contact-section.required.name')},
            maxLength: {value: 32, message: `${t('contact-section.maxLength')} 32`},
          })}
        />
        <Input
          placeholder={t('contact-section.email')}
          error={errors.email}
          {...register('email', {
            required: {value: true, message: t('contact-section.required.email')},
            pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: `${t('contact-section.invalid')} email`},
          })}
        />
        <Textarea
          rows={4}
          placeholder={t('contact-section.message')}
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
    </SectionMotion>
  );
};

export default FormSection;
