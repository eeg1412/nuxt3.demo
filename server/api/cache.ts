import { defineEventHandler } from 'h3'

export default defineEventHandler(() => {
  console.log('Hello World')
  // 随机0-10的整数
  const random = Math.floor(Math.random() * 10)
  // 发送json
  console.log(useStorage('cache').clear())
  return { message: 'Hello World', random }
})
