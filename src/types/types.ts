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
