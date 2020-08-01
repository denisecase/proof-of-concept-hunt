/**
 * Main code.
 * @module tab
 */
import * as dateTime from './dateTime.js';
import getJoke from './jokes.js';
import getLocation from './location.js';

window.addEventListener('load', main);

/**
 * Logic to execute each time the new tab loads.
 * Includes a recurring update every n milliseconds.
 */
function main() {

  // assign display elements .............................................

  const weekElement = document.getElementById('week')
  const greetingElement = document.getElementById('greeting')
  const clockElement = document.getElementById('clockbox')
  const jokeElement = document.getElementById('smile')
  const locationElement = document.getElementById('location')
  const locationAnswerElement = document.getElementById('locationAnswer')
  const errorElement = document.getElementById('error-message')

  errorElement.innerHTML = ""

  // configure event listeners .............................................

  jokeElement.addEventListener('dblclick', smileHandler)
  jokeElement.addEventListener('click', smileHandler)
  locationElement.addEventListener('click', locationHandler)
  locationElement.addEventListener('touch', locationHandler)
  errorElement.addEventListener('click', clearErrorText)
  errorElement.addEventListener('touch', clearErrorText)

  // define event handlers .........................................................

    /**
   * Wait to get a joke back and then display it.
   */
  async function smileHandler() {
    console.log('Getting a joke')
    const joke = await getJoke()
    jokeElement.innerHTML = joke
  }

  /**
   * Wait to get location and then display it.
   * Location should only be updated in response to a USER GESTURE
   */
  async function locationHandler() {
    const locText = await getLocation()
    locationAnswerElement.innerHTML = locText
  }

  function clearErrorText() {
    errorElement.innerHTML = '';
  }

  /** Possible location error:
   * Geolocation permission has been blocked 
   * as the user has ignored the permission prompt several times. 
   * This can be reset in Page Info which can be accessed by 
   * clicking the lock icon next to the URL. 
   * See https://www.chromestatus.com/features/6443143280984064 
   * for more information.
   */

  // more startup logic  ...........................................

  const updateDisplay = (elClock, elGreet) => {
    const { clock, nhour, nday } = dateTime.getClock()
    const greeting = dateTime.getGreeting(nhour)
    elClock.innerHTML = clock
    elGreet.innerHTML = greeting
  }

  const refreshMilliseconds = 10000
  updateDisplay(clockElement, greetingElement)
  setInterval(
    updateDisplay.bind(null, clockElement, greetingElement),
    refreshMilliseconds
  )



}
