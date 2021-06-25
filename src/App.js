import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';

export default function App() {
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch());
  console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">
        Email Address
        <input id="email" {...register('email', { required: 'This is required' })} />
        {errors.email && <p>{errors.email.message}</p>}
      </label>
      <label htmlFor="password">
        Password
        <input
          {...register('password', {
            required: 'This is required',
            minLength: {
              value: 5,
              message: 'Password must be at least 5 characters long',
            },
            // valueAsNumber: true,
            // valueAsNumber: {
            //   value: true,
            //   message: 'Password must be a number',
            // },
          })}
        />
        {errors.password && <p>{errors.password.message}</p>}
      </label>
      <input type="submit" />
    </form>
  );
}
