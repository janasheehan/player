import ReactDOM from 'react-dom'
import React from 'react'
import MusicPlayer from './components/MusicPlayer'
import playlist from './playlist'

document.addEventListener('DOMContentLoaded', () => {
  const shuffleSetup = playlist.map((item, index) => index);
  ReactDOM.render(<MusicPlayer 
    playlist={playlist} 
    allSongs = {shuffleSetup}
  />, 
  document.querySelector('#app'))
})
