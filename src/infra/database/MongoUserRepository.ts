import { User } from '../../core/entities/User';
import { UserRepository } from '../../core/repositories/UserRepository';
import { UserModel } from '../database/MongooseUserModel';

export class MongoUserRepository implements UserRepository {
    private toEntity(doc: any): User{
        return new User(doc.name, doc.login, doc.email, doc.password, doc.id); 
        }
        
        async save(user: User): Promise<User>{
            const doc = await UserModel.create(user);
            return this.toEntity(doc);
        };

        async findByEmail(email: string): Promise<User | null>{
            const doc = await UserModel.findOne({ email: email });

            return doc ? this.toEntity(doc): null;

        }
        
        async findById(id: string): Promise<User | null> {
            const doc = await UserModel.findOne({ _id: id });

            return doc ? this.toEntity(doc): null;
        };

        async updateUser(user: User): Promise<User | null>{
            const doc = await UserModel.findByIdAndUpdate(
                user.id, 
                { 
                    name: user.name,
                    login: user.login,
                    email: user.email,
                    password: user.password,
                },
                { new: true }
            );
            return doc ? this.toEntity(doc): null;

        };

        async delete(id: string): Promise<void> {
            const doc = await UserModel.findByIdAndDelete({ _id: id });
            
        };

}