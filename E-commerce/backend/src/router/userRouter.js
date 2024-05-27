import express from 'express';
import { userSignup, userLogin, allUser, updateUser, deleteUser } from '../controllers/user.js';
import { signupSchema } from '../middleware/validation.js';
import validator from '../middleware/validator.js';
import { verifyToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/api/users/signup', validator.validate(signupSchema), userSignup);
router.post('/api/users/login', userLogin);
router.get('/api/users/view', verifyToken, allUser);
router.put('/api/users/update', verifyToken, updateUser);
router.delete('/api/user/delete', verifyToken, deleteUser);

export default router;
