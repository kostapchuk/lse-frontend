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
  createdDate: string;
}

export interface IAnswer {
  id: string;
  text: string;
}

export interface IResults {
  id: string;
  quizName: string;
  email: string;
  score: number;
  maxScore: number;
  createdDate: string;
}
