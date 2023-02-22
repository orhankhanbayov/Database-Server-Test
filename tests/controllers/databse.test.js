const app = require('../../app');
const request = require('supertest');

describe('/set', async () => {
  it('returns 204 with okay message', async () => {
    let response = await request(app).put('/set');
    expect(response.body).toContain(' ');
  });
});
