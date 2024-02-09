// 去404的方法
export const go404 = () => {
  showError({
    statusCode: 500,
    message: '发生一点小意外',
  })
}
