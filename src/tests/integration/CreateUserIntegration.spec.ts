import request from 'supertest';
import app from '../../infra/server/server';
import { InMemoryUserRepository} from '../../infra/database/InMemoryUserRepository';
import { User } from '../../core/entities/User';

describe('POST / users', () => {
    let mockUserRepository: jest.Mocked<InMemoryUserRepository>;

    beforeAll(() => {
        mockUserRepository = {
            save: jest.fn(),
            findByEmail: jest.fn()
        } as unknown as jest.Mocked<InMemoryUserRepository>;
    });

    afterEach(() => {
        // jest.restoreAllMocks();
        jest.clearAllMocks();
    });
    test('deve criar um novo usuario', async () => {
    const createdUser = new User(
        'Dorothy Vaughan',
        'user01',
        'teste@example.com',
        '123456'
    );
    mockUserRepository.save.mockResolvedValue(createdUser);

    const response = await request(app).post('/users').send(createdUser);

    expect(response.status).toBe(200);

    });

    it('deve retornar erro caso o email já estiver cadastrado', async () => {
        
        await request(app).post('/users').send({
            name: 'Usuario',
            login: 'user01',
            email: 'test@example.com',
            password: '123456'  
        });
        
        const res = await request(app).post('/users').send({
            name: 'Kim',
            login: 'kim09',
            email: 'test@example.com',
            password: '654321'
        });
        jest.spyOn(mockUserRepository, 'findByEmail').mockRejectedValue('Usuário já existe com esse e-mail');

        expect(res.status).toBe(400);
        expect(res.body).toHaveProperty('error', 'Usuário já existe com esse e-mail');
    });


});