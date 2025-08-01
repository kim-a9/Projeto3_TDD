import { User } from '../../core/entities/User';
import { InMemoryUserRepository } from '../../infra/database/InMemoryUserRepository';
import { GetUserById } from '../../core/usecases/GetUserById';
import { CreateUser } from '../../core/usecases/CreateUser';

describe('GetUserById', () => {
    let userRepository: InMemoryUserRepository;
    let getUserById: GetUserById;
    let createUser: CreateUser;

    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
        getUserById = new GetUserById(userRepository);
        createUser = new CreateUser(userRepository);
    });

    it('deve verificar se o usuario possui um id', async () => {
    const userData = new User(
        'Kimberly', 
        'Kim09',
        'kimberly@example.com',
        '123456'
    );
    const user = await createUser.execute(userData);
    
    const idFound = await getUserById.execute(user.id!);

    expect(idFound).not.toBeNull();
    });

    it('deve retornar um erro caso não encontre o id', async () => {

        await expect(getUserById.execute('9876')).rejects.toThrow('Usuário não encontrado');

    });

});

