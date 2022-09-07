import ApiClient from "./ApiClient";

export class ApiService {
    // TODO: logic improvement and change in catch block
    fetchQuizzes = () => {
        return ApiClient.get("/api/v1/quizzes")
            .catch(e => console.log(e));
    }

    // TODO: change any type
    validateQuizResult = (value: any) => {
        return ApiClient.post("/api/v1/results", { ...value })
            .catch(e => console.log(e));
    };

    fetchResults = () => {
        return ApiClient.get("/api/v1/results")
            .catch(e => console.log(e));
    };
}
