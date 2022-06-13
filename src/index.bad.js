import { handleSubmit } from "./submit";

const main = () => {
  document.getElementById('button').addEventListener('click', () => {
    handleSubmit();
  })
}

main();