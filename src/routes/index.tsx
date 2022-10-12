import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";
import RegistrationForTeacher from "../components/registration/registration-for-teacher/registration-for-teacher";
import RegistrationForStudent from "../components/registration/registration-for-student/registration-for-student";

export const RouteNames = {
    STUDY: '/',
    RESULTS: '/results',
    REGISTRATION: '/registration',
    LOGIN: '/login',
    TEACHERREGISTRATION: '/registration-teacher',
    STUDENTREGISTRATION: '/registration-student',
}

export const publicRoutes = [
    {path: RouteNames.STUDY, component: <StudyPage/>},
    {path: RouteNames.RESULTS, component: <ResultsPage/>},
    {path: RouteNames.REGISTRATION, component: <RegistrationPage/>},
    {path: RouteNames.LOGIN, component: <LoginPage/>},
    {path: RouteNames.TEACHERREGISTRATION, component: <RegistrationForTeacher/>},
    {path: RouteNames.STUDENTREGISTRATION, component: <RegistrationForStudent/>},
]