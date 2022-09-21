import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';
import LoginPage from "../pages/LoginPage/LoginPage";

export const RouteNames = {
    STUDY: '/',
    RESULTS: '/results',
    REGISTRATION: '/registration',
    LOGIN: '/login'
}

export const publicRoutes = [
    {path: RouteNames.STUDY, component: <StudyPage/>},
    {path: RouteNames.RESULTS, component: <ResultsPage/>},
    {path: RouteNames.REGISTRATION, component: <RegistrationPage/>},
    {path: RouteNames.LOGIN, component: <LoginPage/>},
]