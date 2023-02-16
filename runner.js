const cypress = require('cypress')
const tesults = require('cypress-tesults-reporter');

const TOKEN = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6ImY3ZjM2MDkyLTRiN2UtNDQ0Yi1iZmRjLWYwNDU1ZGNmZTc5Ni0xNjc2NTc2Mjg2NTcwIiwiZXhwIjo0MTAyNDQ0ODAwMDAwLCJ2ZXIiOiIwIiwic2VzIjoiMTcyYzAyZDQtNjk2YS00MzQ3LWIwOGEtY2MxMGY0OTkzZGFlIiwidHlwZSI6InQifQ.i5c3WNIh3rb6QpEUlbZR8JkWWvJjPZrbTOE2yc-lNJk'

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
