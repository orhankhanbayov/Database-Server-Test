const app = require('../../app');
const request = require('supertest');

describe('/set', () => {
  it('returns 204 with okay message', async () => {
    let response = await request(app).put('/');
    expect(response.text).toContain('okay');
    expect(response.status).toBe(200);
  });
});
