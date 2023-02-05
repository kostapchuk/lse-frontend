import { FC, useEffect, useState } from "react";
import QuizElement from "../quiz-item/quiz-item";

import Typography from "@mui/material/Typography";
import { IQuiz } from "../../types/types";
import { nanoid } from "@reduxjs/toolkit";
import { Box, Button, Modal } from "@mui/material";
import { store } from "../../redux/store/store";
import { useSubmitResultMutation } from "../../redux/slices/resultsApiSlice";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RouteNames } from "../../routes";
import BasicModal from "./quiz-result-modal";

interface QuizProps {
  quiz: IQuiz;
}

const Quiz: FC<QuizProps> = ({ quiz }) => {
  const [submitResult] = useSubmitResultMutation();
  const userId = useSelector((state: any) => state.auth.id);
  const userType = useSelector((state: any) => state.auth.userType);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const results = store.getState().results.results;
    const resIndex = results.findIndex((res: any) => res.quizId == quiz.quizId);
    if (resIndex != -1) {
      const payload = {
        quizResult: results[resIndex],
        userId: userId,
        userType: userType,
      };
      submitResult(payload)
        .unwrap()
        .then((res) => {
            navigate(RouteNames.STUDY);
          handleOpen();
          console.log(open)
        });
    }
  };

  return (
    <>
      <Typography variant="h5">{quiz.quizName}</Typography>
      {quiz.quizItems
        .map((value) => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value)
        .map((item, index) => (
          <QuizElement
            questionNumber={index + 1}
            key={nanoid()}
            answers={item.answers}
            question={item.question}
            quizId={quiz.quizId}
          />
        ))}
      <Button
        onClick={handleSubmit}
        style={{ backgroundColor: "#1976d2" }}
        sx={{ my: 2, color: "white", display: "block" }}
      >
        Отправить
      </Button>
      <BasicModal isOpen={open} />
    </>
  );
};

export default Quiz;
