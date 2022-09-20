import {Button, TextField} from '@mui/material'
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";
import {textFieldStyle} from './sign-up-body-styles'
import { object, string, TypeOf } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';

const registerSchema = object({
    firstName: string()
    .min(1,'Укажите имя')
    .max(32, 'Имя должно содержать менее 32 символов'),
    lastName: string()
    .min(1,'Укажите фамилию')
    .max(32, 'Имя должно содержать менее 32 символов'),
    faculty: string()
    .min(1,'Укажите факультет')
    .max(32, 'Имя должно содержать менее 32 символов'),
    groupNumber: string()
    .min(1,'Укажите номер группы')
    .max(32, 'Имя должно содержать менее 32 символов'),
    email: string().min(1,'Укажите email').email('Электронная почта недействительна'),
    password: string()
    .min(1,'Требуется пароль')
    .min(8, 'Пароль должен быть не менее 8 символов')
    .max(32, 'Пароль должен быть меньше 32 символов'),
    passwordConfirm: string().min(1,'Подтвердите пароль'),
}).refine((data) => data.password === data.passwordConfirm, {
    path: ['passwordConfirm'],
    message: 'Пароли не совпадают',
});

const SignUpBody: FC = () => {
    const [user,setUser] = useState({})

    const navigate = useNavigate()

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
      } = useForm<RegisterInput>({
        resolver: zodResolver(registerSchema),
      });

      const onSubmitHandler: SubmitHandler<RegisterInput> = (values) => {
        setUser(values)
      };

    console.log(user)

      useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            navigate('/')
        }
      }, [isSubmitSuccessful]);

    return (
        <Box 
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}>
            <TextField error={!!errors['firstName']}
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Имя' 
                        placeholder='Введите имя'
                        helperText={errors['firstName'] ? errors['firstName'].message : ''}
                        {...register('firstName')}/>
            <TextField error={!!errors['lastName']} 
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Фамилия' 
                        placeholder='Введите фамилию'
                        helperText={errors['lastName'] ? errors['lastName'].message : ''}
                        {...register('lastName')}/>
            <TextField error={!!errors['email']}
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Email' placeholder='Введите email'
                        helperText={errors['email'] ? errors['email'].message : ''}
                        {...register('email')}/>
            <TextField error={!!errors['groupNumber']}
                        required 
                        style={textFieldStyle} 
                        fullWidth label='Номер группы'
                        placeholder='Введите номер группы'
                        helperText={errors['groupNumber'] ? errors['groupNumber'].message : ''}
                        {...register('groupNumber')}/>
            <TextField error={!!errors['faculty']}
                        required 
                        style={textFieldStyle} 
                        fullWidth label='Факультет' 
                        placeholder='Введите факультет'
                        helperText={errors['faculty'] ? errors['faculty'].message : ''}
                        {...register('faculty')}/>
            <TextField error={!!errors['password']} 
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        type='password'
                        label='Пароль' 
                        placeholder='Придумайте пароль'
                        helperText={errors['password'] ? errors['password'].message : ''}
                        {...register('password')}/>
            <TextField error={!!errors['passwordConfirm']} 
                        required 
                        style={textFieldStyle} 
                        type='password'
                        fullWidth 
                        label='Подтвердите пароль' placeholder='Подтвердите пароль'
                        helperText={
                            errors['passwordConfirm'] ? errors['passwordConfirm'].message : ''
                        }
                        {...register('passwordConfirm')}
              />
            <Box mt={2} textAlign='center'>
                <Button type='submit' 
                        variant='contained'
                        color='primary'
                        >Зарегистрироваться</Button>
            </Box>
    </Box>
    )
}

type RegisterInput = TypeOf<typeof registerSchema>;

export default SignUpBody;