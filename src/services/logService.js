import Raven from 'raven-js';
import * as Sentry from "@sentry/react";
import { Integrations } from "@sentry/tracing";

function init(){
    Sentry.init({
        dsn: "https://a449878c63114496988579b437b5aad1@o1084542.ingest.sentry.io/6094392",
        integrations: [new Integrations.BrowserTracing()],
      
        // Set tracesSampleRate to 1.0 to capture 100%
        // of transactions for performance monitoring.
        // We recommend adjusting this value in production
        tracesSampleRate: 1.0,
      });
}

function log(error){
    Raven.captureException(error);
}

export default {
    init,
    log
};