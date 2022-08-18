import React, { FC, useEffect, useReducer, useState } from 'react';
import QuizElement from '../quiz-element/quiz-element';
import { nanoid } from '@reduxjs/toolkit';
import { IAnswer } from '../answers/answers';
import Typography from '@mui/material/Typography';
import { Button, Icon, makeStyles, TextField } from '@mui/material';
import UserInfo from '../user-info/user-info';

export interface IQuestion {
  // id_q
  question: string;
  multipleChoice: boolean;
}

const Quiz: FC = () => {
  const [quiz, setQuiz] = useState(new Map<IQuestion, IAnswer[]>());

  // const [formInput, setFormInput] = useReducer(
  //     (state, newState) => ({ ...state, ...newState }),
  //     {
  //         name: "",
  //         email: ""
  //     }
  // );
  //
  // const handleInput = (evt) => {
  //     const name = evt.target.name;
  //     const newValue = evt.target.value;
  //     setFormInput({ [name]: newValue });
  // };
  //
  // const handleSubmit = (evt) => {
  //     evt.preventDefault();
  //
  //     let data = { formInput };
  //
  //     // fetch("https://pointy-gauge.glitch.me/api/form", {
  //     //     method: "POST",
  //     //     body: JSON.stringify(data),
  //     //     headers: {
  //     //         "Content-Type": "application/json"
  //     //     }
  //     // })
  //     //     .then((response) => response.json())
  //     //     .then((response) => console.log("Success:", JSON.stringify(response)))
  //     //     .catch((error) => console.error("Error:", error));
  // };

  useEffect(() => {
    const map = new Map<IQuestion, IAnswer[]>();
    map.set(
      {
        question: 'Энергия это:',
        multipleChoice: false,
      },
      [
        { id: 1, text: 'направленное движение электронов' },
        { id: 2, text: 'мера скорости вращения молекул вещества' },
        { id: 3, text: 'мера беспорядка в системе' },
        {
          id: 4,
          text: 'количественная оценка различных форм движения материи',
        },
        { id: 5, text: 'способность тела или системы тел совершать работу' },
      ]
    );
    map.set(
      {
        question: 'К традиционно используемым видам энергии относятся:',
        multipleChoice: true,
      },
      [
        { id: 11, text: 'солнечная' },
        { id: 22, text: 'ветровая' },
        { id: 33, text: 'биоэнергия' },
        { id: 44, text: 'газ' },
        { id: 55, text: 'нефть' },
      ]
    );
    setQuiz(map);
  }, []);

  // const useStyles = makeStyles((theme: any) => ({
  //     button: {
  //         margin: theme.spacing(1)
  //     },
  //     leftIcon: {
  //         marginRight: theme.spacing(1)
  //     },
  //     rightIcon: {
  //         marginLeft: theme.spacing(1)
  //     },
  //     iconSmall: {
  //         fontSize: 20
  //     },
  //     root: {
  //         padding: theme.spacing(3, 2)
  //     },
  //     container: {
  //         display: "flex",
  //         flexWrap: "wrap"
  //     },
  //     textField: {
  //         marginLeft: theme.spacing(1),
  //         marginRight: theme.spacing(1),
  //         width: 400
  //     }
  // }));
  //
  // const classes = useStyles();

  return (
    <>
      <Typography variant="h5">Тест 1</Typography>
      {Array.from(quiz.entries()).map((value) => (
        <QuizElement
          key={nanoid()}
          answers={value[1]}
          multipleChoice={value[0].multipleChoice}
          question={value[0].question}
        />
      ))}
      <UserInfo
        formName="Личные данные"
        formDescription="Необходимо заполнить форму ниже для отправки результатов"
      />
      {/*<form onSubmit={handleSubmit}>*/}
      {/*    <TextField*/}
      {/*        label="Name"*/}
      {/*        id="margin-normal"*/}
      {/*        name="name"*/}
      {/*        defaultValue={formInput.email}*/}
      {/*        className={classes.textField}*/}
      {/*        helperText="Enter your full name"*/}
      {/*        onChange={handleInput}*/}
      {/*    />*/}
      {/*    <TextField*/}
      {/*        label="Email"*/}
      {/*        id="margin-normal"*/}
      {/*        name="email"*/}
      {/*        defaultValue={formInput.name}*/}
      {/*        className={classes.textField}*/}
      {/*        helperText="e.g. name@gmail.com"*/}
      {/*        onChange={handleInput}*/}
      {/*    />*/}
      {/*    <Button*/}
      {/*        type="submit"*/}
      {/*        variant="contained"*/}
      {/*        color="primary"*/}
      {/*        className={classes.button}*/}
      {/*    >*/}
      {/*        Subscribe <Icon className={classes.rightIcon}>send</Icon>*/}
      {/*    </Button>*/}
      {/*</form>*/}
    </>
  );
};

export default Quiz;
