import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME = "videoplayer-current-time";
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
player.on("timeupdate", throttle(onPlay, 1000));
function onPlay(time) {
    localStorage.setItem(CURRENT_TIME, JSON.stringify(time));
}
let time = JSON.parse(localStorage.getItem(CURRENT_TIME)) ?? { seconds: 0 };
player.setCurrentTime(time.seconds);

