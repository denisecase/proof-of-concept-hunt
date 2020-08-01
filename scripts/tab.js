/**
 * Main code.
 * @module tab
 */
import * as dateTime from './dateTime.js';
import getJoke from './jokes.js';
import getLocation from './location.js';

// define event handlers .........................................................

/**
 * Wait to get a joke back and then display it.
 */
async function smileHandler() {
  const joke = await getJoke();
  document.getElementById('smile').innerHTML = joke;
}

/**
 * Wait to get location and then display it.
 * Location should only be updated in response to a USER GESTURE
 */
async function locationHandler() {
  const locText = await getLocation();
  document.getElementById('locationAnswer').innerHTML = locText;
}

function clearErrorText() {
  document.getElementById('error-message').innerHTML = '';
}

/**
 * Logic to execute each time the new tab loads.
 * Includes a recurring update every n milliseconds.
 */
function main() {
  // assign display elements .............................................

  const jokeElement = document.getElementById('smile');
  const locationElement = document.getElementById('location');
  const errorElement = document.getElementById('error-message');

  errorElement.innerHTML = '';

  // configure event listeners .............................................

  jokeElement.addEventListener('dblclick', smileHandler);
  jokeElement.addEventListener('click', smileHandler);
  locationElement.addEventListener('click', locationHandler);
  locationElement.addEventListener('touch', locationHandler);
  errorElement.addEventListener('click', clearErrorText);
  errorElement.addEventListener('touch', clearErrorText);

  /** Possible location error:
   * Geolocation permission has been blocked
   * as the user has ignored the permission prompt several times.
   * This can be reset in Page Info which can be accessed by
   * clicking the lock icon next to the URL.
   * See https://www.chromestatus.com/features/6443143280984064
   * for more information.
   */

  // more startup logic  ...........................................

  const updateDisplay = () => {
    const { clock, nhour } = dateTime.getClock();
    const greeting = dateTime.getGreeting(nhour);
    document.getElementById('clockbox').innerHTML = clock;
    document.getElementById('greeting').innerHTML = greeting;
  };

  const refreshMilliseconds = 10000;
  updateDisplay();
  setInterval(updateDisplay, refreshMilliseconds);
}

window.addEventListener('load', main);
