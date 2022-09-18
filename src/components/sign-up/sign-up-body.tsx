import {Button, TextField} from '@mui/material'
import Box from "@mui/material/Box";
import { FC, useState } from "react";
import {textFieldStyle} from './sign-up-body-styles'

const SignUpBody: FC = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [groupNumber, setGroupNumber] = useState('');
    const [faculty, setFaculty] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <Box>
            <TextField onChange={(e) => setFirstName(e.target.value)} 
                        value={firstName} required style={textFieldStyle} fullWidth label='Имя' placeholder='Введите ваше имя'/>
            <TextField onChange={(e) => setLastName(e.target.value)} 
                        value={lastName} required style={textFieldStyle} fullWidth label='Фамилия' placeholder='Введите вашу фамилию'/>
            <TextField onChange={(e) => setEmail(e.target.value)} 
                        value={email} required style={textFieldStyle} fullWidth label='Email' placeholder='Введите ваш Email'/>
            <TextField onChange={(e) => setGroupNumber(e.target.value)} 
                        value={groupNumber} required style={textFieldStyle} fullWidth label='Номер группы'
                    placeholder='Введите номер вашей группы'/>
            <TextField onChange={(e) => setFaculty(e.target.value)} 
                        value={faculty} required style={textFieldStyle} fullWidth label='Факультет' placeholder='Введите свой факультет'/>
            <TextField onChange={(e) => setPassword(e.target.value)} 
                        value={password} required style={textFieldStyle} fullWidth label='Пароль' placeholder='Придумайте пароль'/>
            <TextField required style={textFieldStyle} fullWidth label='Подтвердите пароль' placeholder='Подтвердите пароль'/>
            <Box mt={2} textAlign='center'>
                <Button type='submit' variant='contained'
                        color='primary'>Зарегистрироваться</Button>
            </Box>
    </Box>
    )
}

export default SignUpBody;