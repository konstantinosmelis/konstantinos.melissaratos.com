import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import i18n from './i18n';
import { I18nextProvider } from 'react-i18next';
import reportWebVitals from './reportWebVitals';

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <I18nextProvider i18n={i18n}>
            <App/>
        </I18nextProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
