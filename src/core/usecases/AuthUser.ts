import { UserRepository } from '../repositories/UserRepository';
import { generateToken } from '../../shared/helpers/jwt';

interface IAuthUserInput {
    email: string,
    password: string
}

export class AuthUser {
    constructor(private UserRepository: UserRepository){}

    async execute({email, password}: IAuthUserInput): Promise<String> {
        const user = await this.UserRepository.findByEmail(email);

        if(!user || user.password !== password) {
            throw new Error("Credenciais inválidas")
        }

        const token = generateToken({userID: user.id, email: user.email})
        return token;

    }

}