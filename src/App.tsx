import * as React from 'react';
import { FC } from 'react';
import Header from './components/header/header';
import AppRouter from "./routes/AppRouter";

const App: FC = () => {
    return <>
        <Header/>
        <AppRouter />
    </>
}

export default App;
