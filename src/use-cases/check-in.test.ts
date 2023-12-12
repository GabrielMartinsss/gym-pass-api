import { InMemoryCheckInsRepository } from '@/repositories/in-memory/in-memory-check-ins-repository'
import { describe, it, expect, beforeEach } from 'vitest'
import { CheckInUseCase } from './check-in'

let checkInRepository: InMemoryCheckInsRepository
// authenticateUseCase: name the main entity or variable we are testing as sut (Sistem under Test) - Desing pattern
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(() => {
    checkInRepository = new InMemoryCheckInsRepository()
    sut = new CheckInUseCase(checkInRepository)
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })
})
