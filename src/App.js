import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().required().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  ),
});

export default function App() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  console.log(watch());
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Email Address
        <input id="email" {...register('email')} />
        <p>
          {errors.email?.message}
        </p>
      </label>
      <label htmlFor="password">
        Password
        <input
          type="password"
          {...register('password')}
        />
        <p>
          {errors.password?.message}
        </p>
      </label>
      <input type="submit" />
    </form>
  );
}
