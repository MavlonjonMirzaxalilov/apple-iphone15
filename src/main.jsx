import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

//...
import * as Sentry from '@sentry/react'

Sentry.init({
	dsn: 'https://54963948d5e34773a2b5e7b7c2629409@o4507538153013248.ingest.us.sentry.io/4507538157010944',
	integrations: [
		Sentry.browserTracingIntegration(),
		// Sentry.metrics.metricsAggregatorIntegrations(),
		Sentry.reactRouterV6BrowserTracingIntegration({
			useEffect: React.useEffect,
		}),
		Sentry.replayIntegration(),
	],

	tracesSampleRate: 1.0,
	tracePropagationTargets: ['localhost', /^https:\/\/yourserver\.io\/api/],

	replaysSessionSampleRate: 0.1,
	replaysOnErrorSampleRate: 1.0,
})

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
)
