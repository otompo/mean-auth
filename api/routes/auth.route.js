import express from 'express';
import { signin, signup, signout, google } from '../controllers/auth.controller.js';

const router = express.Router();

router.post('/signup', signup);
router.post('/signin', signin);
router.post('/google', google);
router.post('/signout', signout);

export default router;
