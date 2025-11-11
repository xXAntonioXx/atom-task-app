import * as functions from "firebase-functions";
import express from 'express';
import cors from 'cors';

// If your Express app is in `backend/src/app.ts`:
import app from "../../backend/src/server"; 

// OR if you don't export an app yet, define it here:
const localApp = express();
localApp.use(cors({ origin: true }));
localApp.get("/", (req, res) => res.send("Hello from Firebase!"));

export const api = functions.https.onRequest(app || localApp);
