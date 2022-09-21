import ApiClient from "./ApiClient";

export class ApiService {
    // TODO: logic improvement and change in catch block
    fetchQuizzes = () => {
        return ApiClient.get("/api/v1/quizzes")
            .catch((e:any) => console.log(e));
    }

    // TODO: change any type
    validateQuizResult = (value: any) =>
        ApiClient.post("/api/v1/results", {...value});

    register = (value: any) =>
        ApiClient.post("/api/v1/register", {...value});
}
