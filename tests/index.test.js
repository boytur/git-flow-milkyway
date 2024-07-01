const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('should return a 200 status and a JSON object with message and users', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World');
        expect(response.body.users).toEqual(['john', 'doe', 'jane', 'doe','pleng','K SudInw']);
    });
});

describe('POST /user', () => {
    it('should create a user and return a 200 status with the user object', async () => {
        const newUser = ['john', 'doe', 'jane', 'doe'];

        const response = await request(app)
            .post('/user')
            .send(newUser)
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('message', 'User created successfully');
        expect(response.body).toHaveProperty('success', true);
        expect(response.body.user).toEqual(newUser);
    });

    it('should return a 400 status when user is not provided', async () => {
        const response = await request(app)
            .post('/user')
            .send({})
            .set('Content-Type', 'application/json');

        expect(response.status).toBe(400);
        expect(response.body).toHaveProperty('success', false);
        expect(response.body).toHaveProperty('message', 'User required!');
    });
});