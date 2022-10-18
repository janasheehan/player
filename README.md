

### Functionality

1. Play songs from a playlist.
2. Display the currently playing song.
3. Pause and resume the currently playing song.
4. Go back to the previous song.
5. Skip to the next song in the playlist.
6. Shuffle the songs included in the playlist.

Here are a few specifics about some less obvious parts of this application:

- **Shuffle**: When toggled on, the player should play all the songs in random order before replaying any song.
- **Next**: If shuffle is toggled on, the `Next` button should start playing the next song in the randomized order. If shuffle is not toggled on, `Next` should start the next song in the playlist. When the last song is playing, `Next` should start again from the beginning.
- **Previous**: `Previous` button always plays the last song played before the currently playing song.

If you come across some corner cases that are not addressed here, please use your best judgement to decide on what should happen. What do you think would be the best user experience?

## NOTES:
1. Using the HTMLAudioElement instead of Howler
2. The playlist functionality is based on managing indices of existing songs
3. If an audio url contains an error, the song is skipped (and not remembered as previously played)
4. If an image representing an album cover does not load, a default image is served
5. The player is responsive 

The following has been setup in the mocha test environment:

- mocha
- chai matchers
- jsdom
- enzyme
- babel-polyfill

As well, `app/` has been added to the runtime path, so you can do things like:

```js
import App from 'components/App'
```

inside your tests.

## Development

### Development server

The repository is ready to go with a [brunch](https://brunch.io/) configuration to build and serve a development version of the page with React.

Use of Node 13 recommended for this project.

Run `npm install` to download the dependencies, and then `npm start` then open the browser to [http://localhost:3333](http://localhost:3333)

As currently configured, the starting point for brunch is at `app/assets/index.html`.

