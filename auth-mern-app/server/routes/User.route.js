import express from 'express';
import { UserController, getAllUserController, getUserById, deleteUser, updateUser } from '../controller/User.controller.js'

const router = express.Router();

router.post("/createUser", UserController);
router.get('/allUser', getAllUserController)

router.get('/users/:id', getUserById)
router.put('/users/:id', updateUser)
router.delete('/users/:id', deleteUser)

export default router;