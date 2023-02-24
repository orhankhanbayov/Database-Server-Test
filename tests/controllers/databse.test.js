const app = require('../../app');
const request = require('supertest');

describe('/set', () => {
  it('returns status 200', async () => {
    let response = await request(app).put('/set?somekey=somevalue');
    expect(response.status).toBe(200);
  });

  it('returns okay message', async () => {
    let response = await request(app).put('/set?somekey=somevalue');
    expect(response.text).toContain('okay');
  });
});

describe('/get', () => {
  it('returns status 200', async () => {
    let response = await request(app).get('/get?key=car');
    expect(response.status).toBe(200);
  });

  it('returns the value of the object set', async () => {
    await request(app).put('/set?car=audi');
    let response = await request(app).get('/get?key=car');
    expect(response.text).toContain('audi');
  });

  it('returns undefined if get called with being set first', async () => {
    let response = await request(app).get('/get?key=somekey');
    expect(response.text).toContain('undefined');
  });
});
