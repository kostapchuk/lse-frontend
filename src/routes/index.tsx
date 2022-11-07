import StudyPage from "../pages/StudyPage/StudyPage";
import UserResultsPage from "../pages/UserResultsPage/UserResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForTeacher from "../components/registration/registration-for-teacher/registration-for-teacher";
import RegistrationForStudent from "../components/registration/registration-for-student/registration-for-student";
import QuizPage from "../pages/QuizPage/QuizPage";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import NewQuizPage from "../pages/NewQuizPage/NewQuizPage";

export const RouteNames = {
    STUDY: '/',
    QUIZ: '/quizzes/:quizId',
    CREATE_QUIZ: '/quizzes/new',
    RESULTS: '/results',
    RESULTS_CURRENT_USER: '/results/me',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    NOT_FOUND: '/not-found',
    TEACHER_REGISTRATION: '/registration/teacher',
    STUDENT_REGISTRATION: '/registration/student',
}

export const publicRoutes = [
    { path: RouteNames.REGISTRATION, component: <RegistrationPage /> },
    { path: RouteNames.LOGIN, component: <LoginPage /> },
    { path: RouteNames.TEACHER_REGISTRATION, component: <RegistrationForTeacher /> },
    { path: RouteNames.STUDENT_REGISTRATION, component: <RegistrationForStudent /> },
    { path: RouteNames.NOT_FOUND, component: <NotFoundPage /> },
]

export const protectedRoutes = [
    { path: RouteNames.STUDY, component: <StudyPage /> },
    { path: RouteNames.QUIZ, component: <QuizPage /> },
    { path: RouteNames.RESULTS_CURRENT_USER, component: <UserResultsPage /> },
]

export const teacherRoutes = [
    { path: RouteNames.RESULTS, component: <ResultsPage /> },
    { path: RouteNames.CREATE_QUIZ, component: <NewQuizPage /> },
]
