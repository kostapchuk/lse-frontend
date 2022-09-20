import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

export const RouteNames = {
    STUDY: '/',
    RESULTS: '/results',
    REGISTER: '/sign-Up',
}

export const publicRoutes = [
    {path: RouteNames.STUDY, component: <StudyPage/>},
    {path: RouteNames.RESULTS, component: <ResultsPage/>},
    {path: RouteNames.REGISTER, component: <RegistrationPage/>},
]