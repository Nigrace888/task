import express from 'express';
import { Login, Signup } from '../controllers/authController.js';


const router = express.Router();

router.post('/login',Login)
router.delete('/signup',Signup)

export default router;