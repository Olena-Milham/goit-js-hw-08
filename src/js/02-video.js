import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

// to get a player
//Already have a player on the page?
// Pass the element to the Vimeo.Player constructor and you’re ready to go.

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = 'videoplayer-current-time';

// --------
// Add an event listener for the specified event.
// Will call the callback with a single parameter, data,
// that contains the data for that event.

player.on('play', function () {
  console.log('played the video!');
});

player.on('timeupdate', throttle(currentTime, 1000));
function currentTime(data) {
  //   console.log(data);
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(data.seconds));
  console.log('current time: ', JSON.stringify(data.seconds));
}
onReload();
function onReload() {
  const watchedData = localStorage.getItem(LOCALSTORAGE_KEY);
  const parsedData = JSON.parse(watchedData);

  if (parsedData) {
    player.setCurrentTime(parsedData);
    console.log(parsedData);
  }
}
