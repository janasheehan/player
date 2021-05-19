import React from "react";
import AlbumArt from './AlbumArt';
import { useMediaQuery } from 'react-responsive';

const ListedSong = ({ data, isCurrent, onSongClick }) => {
	const { artist, album, track, id } = data;
  const image = '/images/'+id+'.jpg';
	const isMobile = useMediaQuery({ maxWidth: 1024 })

	return (	
		<div 
			className="track"
			onClick={onSongClick}
			style={(isCurrent) ? { 'opacity': 1 } : { 'opacity': 0.4 }}
		>
			<p
				className="info"
			>	
				<span className="title">
					<span className="highlight-left" />{track}
				</span>
				<span className="artist">
					{artist} - {album}
					<span className="highlight-right" />
				</span>
			</p>
			{isMobile && 	<AlbumArt
				image={image}
				album={album}
				artist={artist}
			/>}
		</div>
	)
}

export default ListedSong;
