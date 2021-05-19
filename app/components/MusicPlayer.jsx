import React, { useState, useEffect, useRef } from 'react';
import Controls from './Controls';
import ListedSong from './ListedSong';
import AlbumArt from './AlbumArt';

const MusicPlayer = ({ playlist, allSongs }) => {
  // state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [lastSong, setLastSong] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [availableShuffleChoice, setShuffleSongs] = useState(allSongs);

  // selected song details
  const { artist, album, url, id, color='rgba(255,255,255,0.3)'} = playlist[currentIndex];
  const image = '/images/'+id+'.jpg';

  // refs 
  const audioRef = useRef(new Audio(url));
  const intervalRef = useRef();
  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(progress / duration) * 100}%`
    : "0%";
  const progressBarLook = `
    -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, ${color}), color-stop(${currentPercentage}, rgba(255,255,255,0.3)
  `;

  const newSong = () => {
    if (isShuffle) { 
      selectSongForShuffle(); 
    } else if (currentIndex < playlist.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setCurrentIndex(0);
    }
  };

  const startTimer = () => {
    // clear any timers already running
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      if (audioRef.current.ended) {
        nextSong();
      } else {
        setProgress(audioRef.current.currentTime);
      }
    }, [1000]);
  };
  
  const onScrub = (value) => {
    // clear any timers already running
    clearInterval(intervalRef.current);
    audioRef.current.currentTime = value;
    setProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    // if not already playing, start
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const prevSong = () => {
    // this follow the requirements, but will cause a loop
    setLastSong(currentIndex);
    setCurrentIndex(lastSong);
  };

  const nextSong = () => {
    setLastSong(currentIndex);
    newSong();
  };

  const handleSongClick = (newIndex) => {
    setIsPlaying(false);
    setLastSong(currentIndex);
    setCurrentIndex(newIndex);
    // if in shuffle mode, remove the selected song index from the shuffle array
    if (isShuffle) setShuffleSongs(availableShuffleChoice.filter(item => item !== currentIndex));
    setIsPlaying(true);
  }

  const handleShuffleClick = () => {
    setIsShuffle(!isShuffle)
    // remove the currently playing song index from the shuffle array
    if (isPlaying) setShuffleSongs(availableShuffleChoice.filter(item => item !== currentIndex));
  }

  const selectSongForShuffle = () => {
    // choose a song from those that have not yet played      
    const randomIndex = Math.floor(Math.random() * availableShuffleChoice.length);
    setCurrentIndex(availableShuffleChoice[randomIndex]);
  }

  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

   // handle cleanup and setup when changing a song (represented by currentIndex)
  useEffect(() => {
    // remove the song that is about to play from possible shuffle choices
    if (isShuffle) setShuffleSongs(availableShuffleChoice.filter(item => item !== currentIndex));
    audioRef.current.pause();
    audioRef.current = new Audio(url);

    //  if error, skip to the next song, and do not store this one as the last song played
    audioRef.current.onerror = () => {
      newSong();
    }

    audioRef.current.oncanplay = () => {
      setProgress(audioRef.current.currentTime);
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } 

  }, [currentIndex]);

  // monitor the shuffle array to replenish it once empty (all songs have been played)
  useEffect(() => {
    if (availableShuffleChoice.length === 0) {
      setShuffleSongs(allSongs);
    }
  }, [availableShuffleChoice.length]); 

  return (
    <>
      <section className="header">
        <div className="details">
          <AlbumArt 
            image={image}
            album={album}
            artist={artist}
          />
          <Controls
            isPlaying={isPlaying}
            isShuffle={isShuffle}
            onPrevClick={prevSong}
            onNextClick={nextSong}
            onPlayPauseClick={setIsPlaying}
            onShuffleClick={handleShuffleClick}
          />
          <input
            type="range"
            value={progress}
            step="1"
            min="0"
            max={duration ? duration : `${duration}`}
            className="progress"
            onChange={(e) => onScrub(e.target.value)}
            onMouseUp={onScrubEnd}
            onKeyUp={onScrubEnd}
            style={{ background: progressBarLook }}
          />
        </div>
      </section>
      <section className="songList">
      {playlist.map((value, index) => 
        <ListedSong 
          data={value}
          isCurrent={index===currentIndex}
          onSongClick={() => handleSongClick(index)}
          key={index} 
        />
      )}
      </section>
    </>
  );
};

export default MusicPlayer;
