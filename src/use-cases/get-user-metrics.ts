import { CheckInRepository } from '@/repositories/check-ins-repository'

interface GetUserMetricsRequest {
  userId: string
}

interface GetUserMetricsResponse {
  checkInsCount: number
}

export class GetUserMetricsUseCase {
  constructor(private checkInRepository: CheckInRepository) {}

  async execute({
    userId,
  }: GetUserMetricsRequest): Promise<GetUserMetricsResponse> {
    const checkInsCount = await this.checkInRepository.countByUserId(userId)

    return { checkInsCount }
  }
}
