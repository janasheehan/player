import React from 'react'
import { shallow } from 'enzyme'
import ListedSong from 'components/ListedSong'

// Enzyme render test docs: https://airbnb.io/enzyme/docs/api

var wrapper;
var songData =   {
    artist: 'Frank Ocean',
    album: 'channel ORANGE',
    track: 'Sweet Life',
  };

describe('<ListedSong />', () => {
  beforeEach(()=> {
    wrapper = shallow(<ListedSong 
        data={songData}
        isCurrent={true}
        onSongClick={()=>{}}
    />)
  })

  it('renders the component', () => {
   expect(wrapper.exists()).to.equal(true)
  })

  it('displays expected text', () => {
    expect(wrapper.find('.title').text()).to.equal('Sweet Life');
    expect(wrapper.find('.artist').text()).to.equal('Frank Ocean - channel ORANGE');
  })

  it('current element has full opacity', () => {
    expect(wrapper.find('.track').get(0).props.style).to.deep.equal({opacity: 1 })
  })

})
