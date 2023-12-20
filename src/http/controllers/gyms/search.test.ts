import request from 'supertest'
import { app } from '@/app'
import { it, describe, expect, beforeAll, afterAll } from 'vitest'
import { createAndAuthenticateUser } from '@/utils/test/create-and-authenticate-user'

describe('Search (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })

  it('should be able to search a gym by title', async () => {
    const { token } = await createAndAuthenticateUser(app)

    const mapsNamesGyms = ['JavaScript Gym', 'TypeScript Gym']

    for (const nameGym of mapsNamesGyms) {
      await request(app.server)
        .post('/gyms')
        .set('Authorization', `Bearer ${token}`)
        .send({
          title: nameGym,
          description: 'Some description',
          phone: '11999999999',
          latitude: -27.2092052,
          longitude: -49.6401091,
        })
    }

    const response = await request(app.server)
      .get('/gyms/search')
      .query({
        query: 'JavaScript',
      })
      .set('Authorization', `Bearer ${token}`)
      .send()

    expect(response.statusCode).toEqual(200)
    expect(response.body.gyms).toHaveLength(1)
    expect(response.body.gyms).toEqual([
      expect.objectContaining({
        title: 'JavaScript Gym',
      }),
    ])
  })
})
