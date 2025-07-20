import { Router } from 'express';
import { CreateUserController } from '../CreateUserController';
import { AuthUserController } from '../AuthUserController';
import { GetUserByIdController } from '../GetUserByIdController';
import { UpdateUserByController } from '../UpdateUserByIdController';
import { DeleteUserByIdController } from '../DeleteUserByIdController';

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

router.get('/:id', async (req, res) => {
  await getUserByIdController.handle(req, res);
});

router.get('/me', async (req, res) => {
  res.json({message: 'Esta rota está protegida', user: req.user});
});

router.patch('/:id', async (req, res) => {
  await updateUserByIdController.handle(req, res);
});

router.delete('/:id', async (req, res) => {
  await deleteUserByIdController.handle(req, res );
});

export { router as userRoutes };