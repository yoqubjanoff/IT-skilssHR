import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter as Router } from 'react-router-dom';
import MainContextProvider from './context';
import 'react-toastify/dist/ReactToastify.css';
import Root from './root/index';
import './index.css';
import ToastProvider from './component/generics/Toast/ToastProvider';
import './i18n'; // Your i18n initialization
import { GoogleOAuthProvider } from '@react-oauth/google';
import 'react-multi-carousel/lib/styles.css';
import store from './redux/store/store';
import { Provider } from 'react-redux';
import { QueryParamProvider } from 'use-query-params';
import { ReactRouter6Adapter } from 'use-query-params/adapters/react-router-6';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<>
		<Router>
			<QueryParamProvider adapter={ReactRouter6Adapter}>
				<Provider store={store}>
					<MainContextProvider>
						<ToastProvider>
							<GoogleOAuthProvider clientId="723565813991-isouiavti4cfa4qmkohheeekg3arlqhb.apps.googleusercontent.com">
								<Root />
							</GoogleOAuthProvider>
						</ToastProvider>
					</MainContextProvider>
				</Provider>
			</QueryParamProvider>
		</Router>
	</>,
);
