document.getElementById('button').addEventListener('click', (e) => {
  console.log('Hi?:', );
  import('lodash')
    .then(({ default: _ }) => {
      const element = document.createElement('div');

      element.innerHTML = _.join(['Hello', 'webpack'], ' ');

      document.body.appendChild(element);
    })
    .catch((error) => 'An error occurred while loading the component');
})