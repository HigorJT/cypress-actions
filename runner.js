const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjA2YmVjNWZmLTE5NTMtNGU4MC1iODc2LWZhOWMwOTJhODkwOC0xNjc2NTc4OTg0NzYwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiOWNlNDEzZjQtNTdjYy00NDE3LWI4YzMtM2NjYmVkZDY0ZWU3IiwidHlwZSI6InQifQ.PePnK2ZR_iVwT5mHMo-B7ZyvF4li4XR_64rwqLRlFas'

cypress.run({
  // specs to run here
})
.then((results) => {
  const args = {
    target: 'TOKEN',
  }
  tesults.results(results, args);
})
.catch((err) => {
 console.error(err)
})
