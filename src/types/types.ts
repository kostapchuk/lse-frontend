export interface IQuestion {
    id: string;
    text: string;
    multipleChoice: boolean;
    cost: number;
}

export interface IQuizItem {
    question: IQuestion;
    answers: IAnswer[];
}

export interface IQuiz {
    id: string;
    name: string;
    items: IQuizItem[];
}

export interface IAnswer {
    id: string;
    text: string;
}
