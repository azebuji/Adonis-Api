import { test } from '@japa/runner';
import supertest from 'supertest';

const BASE_URL = `http://${process.env.HOST}:${process.env.PORT}`;


/*
             "users": {
                "id": Number,
                "email": String,
                "username": String,
                "password": String,
                "avatar": String

            }
        */
test.group('User', () => {
    test('It should create an user', async ({ assert }) => {
        const UserPayLoad = {
            email: "teste@teste.com",
            username: "test",
            password: 'test',
            avatar: "https://images.com/image/1"
        }

        const { body } = await supertest(BASE_URL).post('/users').send(UserPayLoad).expect(201);
        assert.exists(body.user, "User undefined")
        assert.exists(body.user.id, "Id undefined")
        assert.equal(body.user.email, UserPayLoad.email)
        assert.equal(body.user.password, UserPayLoad.password)
        assert.equal(body.user.username, UserPayLoad.username)
        assert.equal(body.user.avatar, UserPayLoad.avatar)
    }).pin()
})