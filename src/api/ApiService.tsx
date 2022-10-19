import { UserRole, UserType } from "../redux/slices/userSlice";
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

    registerStudent = (value: any) =>
        ApiClient.post("/register-student", {
            ...value, 
            "userType": UserType.STUDENT,
            "role": UserRole.ROLE_STUDENT,
        });

        registerTeacher = (value: any) =>
        ApiClient.post("/register-teacher", {
            ...value, 
            "userType": UserType.TEACHER,
            "role": UserRole.ROLE_TEACHER,
        });

        loginStudent = (value: any) =>
        ApiClient.post("/login", {
            ...value, 
            "userType": UserType.STUDENT
        } );

        loginTeacher = (value: any) =>
        ApiClient.post("/api/v1/login-teacher", {
            ...value, 
            "userType": UserType.TEACHER
        }
        );

        refreshTokenTeacher = (value: any) =>
        ApiClient.post("/api/v1/register-teacher", {
            "refreshToken": "",
            "userType": "TEACHER"
        });
}