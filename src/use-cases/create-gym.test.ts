import { InMemoryGymsRepository } from '@/repositories/in-memory/in-memory-gym-repository'
import { it, expect, describe, beforeEach } from 'vitest'
import { CreateGymUseCase } from './create-gym'

let usersRepository: InMemoryGymsRepository
// authenticateUseCase: name the main entity or variable we are testing as sut (Sistem under Test) - Desing pattern
let sut: CreateGymUseCase

describe('Register use case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryGymsRepository()
    sut = new CreateGymUseCase(usersRepository)
  })

  it('should be able to create gym', async () => {
    const { gym } = await sut.execute({
      title: 'JS gym',
      description: null,
      phone: null,
      latitude: -27.2092052,
      longitude: -49.6401091,
    })

    expect(gym.id).toEqual(expect.any(String))
  })
})
