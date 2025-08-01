import { UserRepository } from '../repositories/UserRepository';
import { User } from '../entities/User';

export class GetUserById {
  constructor(private userRepository: UserRepository) {}

  async execute(id: string): Promise<User | null> {

    const userFound = await this.userRepository.findById(id);

    if(!userFound){
      throw new Error('Usuário não encontrado');
    }
    return userFound;
    
  }
}