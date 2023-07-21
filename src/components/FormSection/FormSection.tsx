'use client';

import {useForm} from 'react-hook-form';
import SectionMotion from '../SectionMotion/SectionMotion';
import {Button} from '../Button/Button';
import Input from '../Input/Input';
import Textarea from '../Textarea/Textarea';
import Title from '../Title/Title';

interface IContactForm {
  name: string;
  email: string;
  message: number;
}

const FormSection = () => {
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
        Связаться
      </Title>
      <form className="grid grid-cols-1 gap-6 w-1/2 mx-auto" onSubmit={handleSubmit(onSubmit)}>
        <Input
          placeholder="Имя"
          error={errors.name}
          {...register('name', {
            required: {value: true, message: 'Заполните имя'},
            maxLength: {value: 32, message: 'Максимум символов 32'},
          })}
        />
        <Input
          placeholder="Email"
          error={errors.email}
          {...register('email', {
            required: {value: true, message: 'Заполните email'},
            pattern: {value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Неверный формат email'},
          })}
        />
        <Textarea
          rows={4}
          placeholder="Сообщение"
          maxLength={512}
          error={errors.message}
          {...register('message', {
            required: {value: true, message: 'Заполните текст сообщения'},
            maxLength: {value: 512, message: 'Максимум символов 512'},
          })}
        />
        <Button className="justify-self-start" type="submit">
          Отправить
        </Button>
      </form>
    </SectionMotion>
  );
};

export default FormSection;
