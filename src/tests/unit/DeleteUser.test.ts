import {User} from '../../core/entities/User';
import {userRepository} from '../../infra/database/repositoryInstance';
import {DeleteUser} from '../../core/usecases/DeleteUser';


describe('DeleteUser', async () => {
    beforeEach(() => {
        userRepository.users = [];
    })
})