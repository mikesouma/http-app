import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Raven from 'raven-js';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

Sentry.init({
    dsn: "https://a449878c63114496988579b437b5aad1@o1084542.ingest.sentry.io/6094392",
    integrations: [new Integrations.BrowserTracing()],
  
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
