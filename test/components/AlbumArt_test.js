import React from 'react'
import { shallow } from 'enzyme'
import AlbumArt from 'components/AlbumArt'

// Enzyme render test docs: https://airbnb.io/enzyme/docs/api

var wrapper;

describe('<AlbumArt />', () => {
  beforeEach(()=> {
    wrapper = shallow(<AlbumArt 
        image={"image_url"}
        album={"album"}
        artist={"artist"}
    />)
  })

  it('renders the component', () => {
   expect(wrapper.exists()).to.equal(true)
  })

  it('img tag has proper alt tag and src', () => {
    expect(wrapper.find('.album-cover').get(0).props.src).to.deep.equal('image_url');
    expect(wrapper.find('.album-cover').get(0).props.alt).to.deep.equal('Vinyl cover look for album by artist');
  })

})
