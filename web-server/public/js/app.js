console.log('Client side javascript file is loaded!')

const weatherApp = document.querySelector('form')
const query = document.querySelector('input')

weatherApp.addEventListener('submit', (e) => {
  e.preventDefault()

  const location = query.value

  var PORT = process.env.PORT || 3000;
  fetch('http://localhost:' + PORT + '/weather?address=' + location).then((response) => {
    response.json().then((data) => {
      if(data.error) {
        console.log(data.error)
      } else {
        console.log(data.location)
        console.log(data.forecast)
      }
    })
  })
  //console.log('testing form') //Changing this around
  //console.log(location) //Use the Location variable
})
