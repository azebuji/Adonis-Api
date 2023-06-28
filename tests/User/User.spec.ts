import { test } from '@japa/runner';
import supertest from 'supertest';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;

test.group('User', () => {
    test('It should create an user', async (assert) => {
        const UserPayLoad = {
            email: "teste@teste.com",
            username: "test",
            password: 'test'
        }

        await supertest(BASE_URL).post('/user').send(UserPayLoad).expect(201);
    }).pin()
})