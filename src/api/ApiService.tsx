import ApiClient from "./ApiClient";

export class ApiService {
    fetchQuizzes = () => {
        return ApiClient.get("/quizzes")
            .catch(e => console.log(e));
    }

    validateQuizResult = (value: any) => {
        console.log(value)
        return ApiClient.post("/quiz-result", { ...value })
            .catch(e => console.log(e));
    };
}
