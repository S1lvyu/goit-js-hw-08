import player from '@vimeo/player';
import throttle from 'lodash.throttle';
const iframe = document.querySelector('iframe');
const iframePlayer = new player(iframe);
let currentTime;
const throttledFunction = throttle(getTime, 1000, {
  leading: false,
  trailing: true,
});

iframePlayer.on('timeupdate', throttledFunction);

function getTime(data) {
  currentTime = data.seconds;
  localStorage.setItem('videoplayer-current-time', currentTime);
  console.log(currentTime);
}

console.log(localStorage);
iframePlayer
  .setCurrentTime(localStorage.getItem('videoplayer-current-time'))
  .then(function (seconds) {
    // seconds = the actual time that the player seeked to
  })
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        // the time was less than 0 or greater than the video’s duration
        break;

      default:
        // some other error occurred
        break;
    }
  });
