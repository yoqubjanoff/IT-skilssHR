/* eslint-disable no-unused-vars */
import React from 'react';

// export const ErrorFallbackProps = {
// 	resetErrorBoundary: (...args)
// }

export const ErrorFallback = ({ error, resetErrorBoundary }) => (
	<div role="alert">
		<p>Something went wrong:</p>
		<pre>{error?.message}</pre>
		<button type="button" onClick={resetErrorBoundary}>
			Try again
		</button>
	</div>
);
