import React from 'react';
import './App.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  firstName: yup.string().required('First Name is a required field'),
  lastName: yup.string().required('Last Name is a required field'),
  email: yup.string().email().required('Email is a required field'),
  password: yup.string().required().matches(
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/,
    'Password Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character',
  ),
});

export default function App() {
  const {
    register, handleSubmit, formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => console.log(data);

  // console.log(watch());
  // console.log(errors);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="firstName">
        First Name
        <input id="firstName" {...register('firstName')} />
        <p>
          {errors.firstName?.message}
        </p>
      </label>
      <label htmlFor="lastName">
        Last Name
        <input id="lastName" {...register('lastName')} />
        <p>
          {errors.lastName?.message}
        </p>
      </label>
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
