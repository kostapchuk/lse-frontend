export interface IQuestion {
  id: string;
  text: string;
  multipleChoice: boolean;
}

export interface IQuizItem {
  question: IQuestion;
  answers: IAnswer[];
}

export interface IQuiz {
  quizId: string;
  quizName: string;
  quizItems: IQuizItem[];
}

export interface IAnswer {
  id: string;
  text: string;
}

export interface IResults {
  id: string;
  quizName: string;
  firstName: string;
  lastName: string;
  group: string;
  faculty: string;
  email: string;
  score: number;
  maxScore: number;
}
