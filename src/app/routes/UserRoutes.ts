import { Router } from 'express';
import { CreateUserController } from '../controllers/CreateUserController';
import { AuthUserController } from '../controllers/AuthUserController';
import { GetUserByIdController } from '../controllers/GetUserByIdController';
import { UpdateUserByController } from '../controllers/UpdateUserByIdController';
import { DeleteUserByIdController } from '../controllers/DeleteUserByIdController';
import { authenticateUser } from '../../shared/middlewares/authMiddlewares';

const router = Router(); 

const createUserController = new CreateUserController();
const login = new AuthUserController();
const getUserByIdController = new GetUserByIdController();
const updateUserByIdController = new UpdateUserByController();
const deleteUserByIdController = new DeleteUserByIdController();


router.post('/', async (req, res) => {
  await createUserController.handle(req, res);
});

router.post('/login', async (req, res) => {
  await login.handle(req, res);
});

router.get('/me', authenticateUser, async (req, res) => {
  res.json({message: 'Esta rota está protegida', user: req.user});
});

router.get('/:id', async (req, res) => {
  await getUserByIdController.handle(req, res);
});

router.patch('/:id', async (req, res) => {
  await updateUserByIdController.handle(req, res);
});

router.delete('/:id', async (req, res) => {
  await deleteUserByIdController.handle(req, res );
});

// { 
//   "name": "kim", 
//   "login": "kim_a", 
//   "email": "email@example.com", 
//   "password": "123456"
// }

export { router as userRoutes };