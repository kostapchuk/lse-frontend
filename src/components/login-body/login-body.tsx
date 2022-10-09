import {Button, IconButton, InputAdornment, TextField} from '@mui/material'
import Box from "@mui/material/Box";
import { FC, useEffect, useState } from "react";
import {textFieldStyle} from './login-body-styles'
import { TypeOf } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useNavigate } from 'react-router-dom';
import { loginSchema } from '../login/validation-form';
import { RouteNames } from '../../routes';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { ApiService } from '../../api/ApiService';

const LoginBody: FC = () => {

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = () => setShowPassword(!showPassword);


    const [user, setUser] = useState({})

    const navigate = useNavigate()

    const {
        register,
        formState: { errors, isSubmitSuccessful },
        reset,
        handleSubmit,
      } = useForm<LoginInput>({
        resolver: zodResolver(loginSchema),
      });

      const onSubmitHandler: SubmitHandler<LoginInput> = (values) => {
        new ApiService().loginStudent(values)
        .then((res:any) => {
          console.log(res.body)
          setUser(res.body)
        })
      };

      useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
            navigate(RouteNames.STUDY)
        }
      }, [isSubmitSuccessful]);

    return (
        <Box 
        component='form'
        noValidate
        autoComplete='off'
        onSubmit={handleSubmit(onSubmitHandler)}
        >
            <TextField error={!!errors['email']}
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        label='Email' placeholder='Введите email'
                        helperText={errors['email'] ? errors['email'].message : ''}
                        {...register('email')}/>
            <TextField error={!!errors['password']} 
                        required 
                        style={textFieldStyle} 
                        fullWidth 
                        type={showPassword ? "text" : "password"}
                        label='Пароль' 
                        placeholder='Введите пароль'
                        helperText={errors['password'] ? errors['password'].message : ''}
                        {...register('password')}
                        InputProps={{endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                            aria-label="toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? <Visibility /> : <VisibilityOff />}
                            </IconButton>
                          </InputAdornment>
                        )}}/>
            <Box mt={2} textAlign='center'>
                <Button onClick={() => onSubmitHandler} type='submit' 
                        variant='contained'
                        color='primary'
                        >Войти</Button>
            </Box>
    </Box>
    )
}

type LoginInput = TypeOf<typeof loginSchema>;

export default LoginBody;