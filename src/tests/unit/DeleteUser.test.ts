import {User} from '../../core/entities/User';
import { InMemoryUserRepository } from '../../infra/database/InMemoryUserRepository';
import {DeleteUser} from '../../core/usecases/DeleteUser';


describe('DeleteUser', () => {
    let userRepository: InMemoryUserRepository;
    let deleteUser: DeleteUser;

    beforeEach(() => {
        userRepository = new InMemoryUserRepository();
        deleteUser = new DeleteUser(userRepository);
    });

    it('deve apagar um usuario com sucesso', async () => {
        const user = new User(
            '123',
            'Usuario', 
            'usuario01',
            'teste@example.com',
            '123456'
        )
        await userRepository.save(user);

        await deleteUser.execute(user.id as string);

        const delUser = await userRepository.findById(user.id!);

        expect(delUser).toBeNull();

    });

    it('deve retornar erro caso o usuario seja inexistente', async () => {
        const user = new User(
            '123',
            'Usuario', 
            'usuario01',
            'teste@example.com',
            '123456'
        )
        await userRepository.save(user);

        await expect(deleteUser.execute('987')).rejects.toThrow('usuário não encontrado');

    });


});