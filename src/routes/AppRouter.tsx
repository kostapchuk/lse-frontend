import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudyPage from "../pages/StudyPage/StudyPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import RegistrationPage from '../pages/RegistrationPage/RegistrationPage';

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<ResultsPage/>} path="results"/>
            <Route element={<StudyPage/>} path=""/>
            <Route element={<RegistrationPage/>} path="SignUp"/>
        </Routes>
    );
};

export default AppRouter;
