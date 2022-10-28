import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import {persistor, store} from './redux/store/store';

const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Failed to find the root element');
}
const root = createRoot(rootElement);
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null}  persistor={persistor}>
                <App />
            </PersistGate>
        </Provider>
    </BrowserRouter>
);
