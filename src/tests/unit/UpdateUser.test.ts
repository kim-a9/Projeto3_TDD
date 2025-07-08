import {User} from '../../core/entities/User';
import {userRepository} from '../../infra/database/repositoryInstance';
import {UpdateUser} from '../../core/usecases/UpdateUser';

describe('UpdateUser', async () => {
    let user: User
    beforeEach(() => {
        userRepository.users = [];
        user = new User('1', 'Usuario', 'user01', 'teste@example.com', '123456')
        userRepository.users.push(user);
    })






})