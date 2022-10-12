import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForTeacher from "../components/registration/registration-for-teacher/registration-for-teacher";
import RegistrationForStudent from "../components/registration/registration-for-student/registration-for-student";
import LoginForTeacher from "../components/login/login-for-teacher/login-for-teacher";
import LoginForStudent from "../components/login/login-for-student/login-for-student";

export const RouteNames = {
    STUDY: '/',
    RESULTS: '/results',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    TEACHERREGISTRATION: '/registration/teacher',
    STUDENTREGISTRATION: '/registration/student',
    TEACHERLOGIN: '/login/teacher',
    STUDENTLOGIN: '/login/student',
}

export const publicRoutes = [
    {path: RouteNames.STUDY, component: <StudyPage/>},
    {path: RouteNames.RESULTS, component: <ResultsPage/>},
    {path: RouteNames.REGISTRATION, component: <RegistrationPage/>},
    {path: RouteNames.LOGIN, component: <LoginPage/>},
    {path: RouteNames.TEACHERREGISTRATION, component: <RegistrationForTeacher/>},
    {path: RouteNames.STUDENTREGISTRATION, component: <RegistrationForStudent/>},
    {path: RouteNames.TEACHERLOGIN, component: <LoginForTeacher/>},
    {path: RouteNames.STUDENTLOGIN, component: <LoginForStudent/>},
]