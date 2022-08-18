import {
  TextField,
  FormControl,
  Typography,
  Paper,
  makeStyles,
  Button,
} from '@mui/material';

import { create } from '../../api';

import React, { useReducer } from 'react';

import { padding, spacing } from '@mui/system';

const UserInfo = (props: any) => {
  //   const useStyles: any = makeStyles((theme: any) => {
  //     root: {
  //       padding: theme.spacing(2, 4);
  //     }
  //   });

  //   const classes = useStyles();

  const [formInput, setFormInput] = useReducer(
    (state: any, newState: any) => ({ ...state, ...newState }),
    {
      name: '',
      surname: '',
      email: '',
      group: '',
      faculty: '',
    }
  );

  const handleSubmit = (evt: any) => {
    evt.preventDefault();

    let data = { ...formInput };
    console.log(data);

    create(data)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });

    // fetch("https://pointy-gauge.glitch.me/api/form", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then((response) => response.json())
    //   .then((response) => console.log("Success:", JSON.stringify(response)))
    //   .catch((error) => console.error("Error:", error));
  };

  const handleInput = (evt: any) => {
    const name = evt.target.name;
    const newValue = evt.target.value;
    setFormInput({ [name]: newValue });
  };

  return (
    <>
      {/* <Paper className={classes.root}> */}
      <Typography variant="h5" component="h1">
        {props.formName}
      </Typography>
      <Typography component="p">{props.formDescription}</Typography>
      <FormControl>
        <TextField
          id="standard-basic"
          name="name"
          label="Имя"
          variant="standard"
          onChange={handleInput}
        />
        <TextField
          id="standard-basic"
          name="surname"
          label="Фамилия"
          variant="standard"
          onChange={handleInput}
        />
        <TextField
          id="standard-basic"
          name="email"
          label="Email"
          variant="standard"
          onChange={handleInput}
        />
        <TextField
          id="standard-basic"
          name="group"
          label="Номер группы"
          variant="standard"
          onChange={handleInput}
        />
        <TextField
          id="standard-basic"
          name="faculty"
          label="Факультет"
          variant="standard"
          onChange={handleInput}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          onClick={handleSubmit}
        >
          Отправить
        </Button>
      </FormControl>
      {/* </Paper> */}
    </>
  );
};

export default UserInfo;
