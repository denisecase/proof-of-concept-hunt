/**
 * Get the location to append to a "welcome to ..."
 * Returns 'home' or 'to school' depending on location.
 * Uses new import / export - be sure to set type="module" in HTML
 * Can be easily added to any web page.
 * Includes GeoLocation API example.
 * @module location/getLocation
 * @author Denise Case
 */

export default function getLocation() {
  if (!navigator.geolocation) {
    return "? (browser DOES NOT support geolocation)"
  } else {  

    // geolocation supported

    const options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }

    navigator.geolocation.getCurrentPosition(
      position => {
      console.log('success position ' + position)
      if (position === undefined) { return ' position is undefined'; }
      const crd = position.coords
      locations.forEach((location, index, array) => {
        if (inside(crd, location)) {
          document.querySelector('#locationAnswer').innerHTML = location.Name;
        }
      })
    }, 
    err => {
      const s = `ERROR(${err.code}): ${err.message}`
      console.warn(s)
      document.querySelector('#error-message').innerHTML = err.message;
    }, options)
  }
}




const locations = [
  {
    "Name": "Faustiana One",
    "North": 40.344208,
    "West": -94.891494,
    "South": 40.343652,
    "East": -94.888400,
    "Notes": "circle",
    "Attachments": "",
    "Quest-Location": "Faustiana-Faustiana One"
  },
  {
    "Name": "Faustiana Two",
    "North": 40.343579,
    "West": -94.89084,
    "South": 40.343268,
    "East": -94.888400,
    "Notes": "heading south",
    "Attachments": "",
    "Quest-Location": "Faustiana-Faustiana Two"
  },
  {
    "Name": "Faustiana Three",
    "North": 40.342947,
    "West": -94.8862633,
    "South": 40.34275,
    "East": -94.888400,
    "Notes": "further south",
    "Attachments": "",
    "Quest-Location": "Faustiana-Faustiana Three"
  },
  {
    "Name": "Faustiana Four",
    "North": 40.342533,
    "West": -94.890749,
    "South": 40.341902,
    "East": -94.888400,
    "Notes": "watertower",
    "Attachments": "",
    "Quest-Location": "Faustiana-Faustiana Four"
  },
  {
    "Name": "16th One",
    "North": 40.360516,
    "West": -94.888755,
    "South": 40.360123,
    "East": -94.88847,
    "Notes": "home 1",
    "Attachments": "",
    "Quest-Location": "16th Street-16th One"
  },
  {
    "Name": "16th Two",
    "North": 40.360516,
    "West": -94.888994,
    "South": 40.360123,
    "East": -94.88887,
    "Notes": "home 2",
    "Attachments": "",
    "Quest-Location": "16th Street-16th Two"
  },
  {
    "Name": "16th Three",
    "North": 40.360516,
    "West": -94.889264,
    "South": 40.360123,
    "East": -94.8891,
    "Notes": "home 3",
    "Attachments": "",
    "Quest-Location": "16th Street-16th Three"
  },
  {
    "Name": "16th Four",
    "North": 40.360516,
    "West": -94.889651,
    "South": 40.360123,
    "East": -94.889332,
    "Notes": "home 4",
    "Attachments": "",
    "Quest-Location": "16th Street-16th Four"
  },
  {
    "Name": "Peach Park One",
    "North": 40.359,
    "West": -94.8862633,
    "South": 40.3507181,
    "East": -94.8820898,
    "Notes": "",
    "Attachments": "",
    "Quest-Location": "Peach Park-Peach Park One"
  },
  {
    "Name": "Peach Park Two",
    "North": 40.359,
    "West": -94.8862633,
    "South": 40.3507181,
    "East": -94.8820898,
    "Notes": "",
    "Attachments": "",
    "Quest-Location": "Peach Park-Peach Park Two"
  },
  {
    "Name": "Peach Park Three",
    "North": 40.359,
    "West": -94.8862633,
    "South": 40.3507181,
    "East": -94.8820898,
    "Notes": "",
    "Attachments": "",
    "Quest-Location": "Peach Park-Peach Park Three"
  },
  {
    "Name": "Peach Park Four",
    "North": 40.359,
    "West": -94.8862633,
    "South": 40.3507181,
    "East": -94.8820898,
    "Notes": "",
    "Attachments": "",
    "Quest-Location": "Peach Park-Peach Park Four"
  },
  {
    "Name": "",
    "North": 40.359,
    "West": -94.8862633,
    "South": 40.3507181,
    "East": -94.8820898,
    "Notes": "",
    "Attachments": "",
    "Quest-Location": ""
  }
]



function inside(crd, bounds) {
  console.log('CHECKING inside ' + bounds.Name)
  console.log(crd)
  console.log(bounds)
  console.log(crd.latitude > bounds.South)
  console.log(crd.latitude < bounds.North)
  console.log(crd.longitude > bounds.West)
  console.log(crd.longitude < bounds.East)
  const ans =
    crd.latitude > bounds.South &&
    crd.latitude < bounds.North &&
    crd.longitude > bounds.West &&
    crd.longitude < bounds.East

  console.log('CHECKING ' + bounds.Name + ' ANS: ' + ans)
  return ans
}
