import {FormControl, TextField, Typography,} from '@mui/material';

import {useDispatch} from 'react-redux';
import {setUserInfo} from '../../redux/slices/userSlice';

const UserInfo = (props: any) => {

    const dispatch = useDispatch();

    const handleInput = (evt: any) => {
        const name = evt.target.name;
        const newValue = evt.target.value;
        dispatch(setUserInfo({[name]: newValue}))
    };

    return (
        <>
            <Typography variant="h5" component="h1">
                {props.formName}
            </Typography>
            <Typography component="p">{props.formDescription}</Typography>
            <FormControl>
                <TextField
                    required
                    id="standard-basic"
                    name="firstName"
                    label="Имя"
                    variant="standard"
                    onChange={handleInput}
                />
                <TextField
                    required
                    id="standard-basic"
                    name="lastName"
                    label="Фамилия"
                    variant="standard"
                    onChange={handleInput}
                />
                <TextField
                    required
                    id="standard-basic"
                    name="email"
                    label="Email"
                    variant="standard"
                    onChange={handleInput}
                />
                <TextField
                    required
                    id="standard-basic"
                    name="group"
                    label="Номер группы"
                    variant="standard"
                    onChange={handleInput}
                />
                <TextField
                    required
                    id="standard-basic"
                    name="faculty"
                    label="Факультет"
                    variant="standard"
                    onChange={handleInput}
                />
            </FormControl>
        </>
    );
};

export default UserInfo;
