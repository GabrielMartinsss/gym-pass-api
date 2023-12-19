import { Environment } from 'vitest'

export default <Environment>{
  name: 'prisma',
  transformMode: 'ssr',
  async setup() {
    console.log('[Setup]: Execute before each test file.')

    return {
      teardown() {
        console.log('[Teardown]: Execute after each test file.')
      },
    }
  },
}
