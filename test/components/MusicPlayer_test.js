import React from 'react'
import { shallow } from 'enzyme'
import MusicPlayer from 'components/MusicPlayer'
import playlist from 'playlist'

// Enzyme render test docs: https://airbnb.io/enzyme/docs/api

const testData = playlist;
const testArray = playlist.map((item, index) => index);
var wrapper;

describe('<MusicPlayer />', () => {
  beforeEach(()=> {
    wrapper = shallow(<MusicPlayer 
      playlist={testData}
      allSongs={testArray}
    />)
  })

  it('renders the component', () => {
    expect(wrapper.exists()).to.equal(true)
  })

  it('renders a list of six songs', () => {
    expect(wrapper.find('ListedSong')).to.have.lengthOf(6)
  })
})
