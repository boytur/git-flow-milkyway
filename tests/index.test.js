const request = require('supertest');
const app = require('../index');

describe('GET /', () => {
    it('should return a 200 status and a JSON object with message and users', async () => {
        const response = await request(app).get('/');
        expect(response.status).toBe(200);
        expect(response.body.message).toBe('Hello World');
        expect(response.body.users).toEqual(['john', 'doe', 'jane', 'doe']);
    });
});
