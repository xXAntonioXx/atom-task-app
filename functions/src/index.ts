import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

// If your Express app is in `backend/src/app.ts`:
import app from "../../backend/dist/server";

// OR if you don't export an app yet, define it here:

export const api = functions.https.onRequest(app);
