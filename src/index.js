const main = async () => {
  document.getElementById('button').addEventListener('click', async (e) => {
    const { handleSubmit } = await import('./submit' /* webpackChunkName: "submit" */) // webpack magic comments allow us to name dynamic imports
    handleSubmit();
  })
}

main();