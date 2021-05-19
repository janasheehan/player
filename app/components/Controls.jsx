import React from "react";
import { useMediaQuery } from 'react-responsive';
import { Play, Pause, Next, Prev, Shuffle } from "./Icons";

const Controls = ({
	isPlaying,
	isShuffle,
	onPlayPauseClick,
	onPrevClick,
	onNextClick,
	onShuffleClick
}) => {

	// for narrow viewport, 
	const isMobile = useMediaQuery({ maxWidth: 414 })
	const playerStyle = isShuffle ? { 'opacity': '0.2' } : { 'opacity': '1' };
	const shuffleStyle = isShuffle ? { 'opacity': '1' } : { 'opacity': '0.2' };

	return (
		<div className={isMobile ? "controls-mobile" : "controls"} >
			<div className={isMobile ? "player-mobile" : "player"} >
				<button
					type="button"
					className="prev"
					aria-label="Previous"
					onClick={onPrevClick}
					style={playerStyle}
				>
					<Prev />
				</button>
				{isPlaying ? (
					<button
						type="button"
						className="pause"
						onClick={() => onPlayPauseClick(false)}
						aria-label="Pause"
						style={playerStyle}
					>
						<Pause />
					</button>
				) : (
					<button
						type="button"
						className="play"
						onClick={() => onPlayPauseClick(true)}
						aria-label="Play"
						style={playerStyle}
					>
						<Play />
					</button>
				)}

				{isMobile && (
					<button
						type="button"
						className="shuffle"
						aria-label="Shuffle"
						onClick={onShuffleClick}
						style={shuffleStyle}
					>
						<Shuffle />
					</button>)}
				<button
					type="button"
					className="next"
					aria-label="Next"
					onClick={onNextClick}
					style={playerStyle}
				>
					<Next />
				</button>
			</div>
			{!isMobile && (<button
				type="button"
				className="shuffle"
				aria-label="Shuffle"
				onClick={onShuffleClick}
				style={shuffleStyle}
			>
				<Shuffle />
			</button>)}
		</div>
	)
};

export default Controls;
