import {User} from '../../core/entities/User';
import {userRepository} from '../../infra/database/repositoryInstance';
import {DeleteUser} from '../../core/usecases/DeleteUser';


describe('DeleteUser', () => {
    let user: User
    beforeEach(() => {
        userRepository.users = [];
        user = new User('1', 'Usuario', 'user01', 'teste@example.com', '123456')
        userRepository.users.push(user);
    })

    it('deve apagar um usuario com sucesso', async () => {
        const deleteUser = new DeleteUser(userRepository);
        
        await expect(deleteUser.execute(user.id));

        const deletedUser = await userRepository.findById(user.id);

        expect(deletedUser).toBeNull();

    })
})