import React from 'react';
import {Route, Routes} from "react-router-dom";
import StudyPage from "../pages/StudyPage/study-page";
import ResultsPage from "../pages/ResultsPage/results-page";

const AppRouter = () => {
    return (
        <Routes>
            <Route element={<ResultsPage/>} path="results"/>
            <Route element={<StudyPage/>} path="study"/>
        </Routes>
    );
};

export default AppRouter;
