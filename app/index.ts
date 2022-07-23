import { getManager } from 'typeorm'

const func1 = async () => {
  await getManager().transaction(async (entityManager) => {
    await entityManager.save({ dd: 111 })
  })
}
