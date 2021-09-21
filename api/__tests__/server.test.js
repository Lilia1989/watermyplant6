const request = require('supertest')
const server = require('../server')
const db = require('../data/db-config')

beforeAll(async () => {
  await db.migrate.rollback()
  await db.migrate.latest()
})
beforeEach(async () => {
  await db.seed.run()
})
afterAll(async () => {
  await db.destroy()
})

it('sanity check', () => {
  expect(true).not.toBe(false)
})

describe('server.js', () => {
  it('is the correct testing environment', async () => {
    expect(process.env.NODE_ENV).toBe('testing')
  })
})

describe('[POST] /register', () => {
  it('returns a status 201 CREATED', async () => {
    const res = await request(server).post('/register').send({name: 'lilia' })
    expect(res.status).toBe(201)
  })
  it('returns newly created user', async () => {
    const res = await request(server).post('/register').send({name: 'lilia'})
    // console.log(res)
    expect(res.body).toMatchObject({
      id: 4, name: 'lilia'
    })
  })
})