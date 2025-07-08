import {CreateUser} from '../../core/usecases/CreateUser';
import {User} from '../../core/entities/User';
import {userRepository} from '../../infra/database/repositoryInstance';

describe('CreateUser', () => {
    beforeEach(() => {
        userRepository.users = [];
    })

    it('deve criar um novo usuário e guardar no repositorio', async () => {
        const createUser = new CreateUser(userRepository);

        const user = await createUser.execute({
            name: 'Kimberly', 
            login: 'Kim09',
            email: 'kimberly@example.com',
            password: '123456'
        });

        expect(user).toBeInstanceOf(User);
        expect(userRepository.users).toHaveLength(1);
    });

    it('não permite dois usuarios com o mesmo email', async () => {
        const createUser = new CreateUser(userRepository);

        const user = await createUser.execute({
            name: 'Teste', 
            login: 'teste01',
            email: 'teste@example.com',
            password: '123456'
        });

        await expect(
            createUser.execute({
            name: 'Teste 2', 
            login: 'teste02',
            email: 'teste@example.com',
            password: '654321'
        })
    ).rejects.toThrow('Usuário já existe com esse e-mail');
    expect(userRepository.users).toHaveLength(1);
    });

    
   
});