import {FormControl, Typography,} from '@mui/material';

import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../redux/slices/userSlice';
import TextInput from "../text-input/text-input";
import React, {FC} from "react";

interface UserFormProps {
    name: string;
    description: string;
}

const UserForm: FC<UserFormProps> = ({name, description}) => {

    const dispatch = useDispatch();

    const handleInput = (evt: React.ChangeEvent<HTMLInputElement>) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        dispatch(setUserInfo({[name]: newValue}))
    };

    return (
        <>
            <Typography variant="h5" component="h1">
                {name}
            </Typography>
            <Typography component={"p"}>{description}</Typography>
            <FormControl>
                <TextInput required field="firstName" label="Имя" onChange={handleInput}/>
                <TextInput required field="lastName" label="Фамилия" onChange={handleInput}/>
                <TextInput required field="email" label="Email" onChange={handleInput}/>
                <TextInput required field="group" label="Номер группы" onChange={handleInput}/>
                <TextInput required field="faculty" label="Факультет" onChange={handleInput}/>
            </FormControl>
        </>
    );
};

export default UserForm;
