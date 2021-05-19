import React from 'react'
import { shallow } from 'enzyme'
import Controls from 'components/Controls'

// Enzyme render test docs: https://airbnb.io/enzyme/docs/api

var wrapper;

describe('<Controls />', () => {
  beforeEach(()=> {
    wrapper = shallow(<Controls 
        isPlaying={true}
        isShuffle={true}
        onPrevClick={()=>{}}
        onNextClick={()=>{}}
        onPlayPauseClick={()=>{}}
        onShuffleClick={()=>{}}
    />)
  })

  it('renders the component', () => {
   expect(wrapper.exists()).to.equal(true)
  })

  it('non-shuffle element has opacity 0.2', () => {
    expect(wrapper.find('.next').get(0).props.style).to.deep.equal({opacity: '0.2' })
    expect(wrapper.find('.prev').get(0).props.style).to.deep.equal({opacity: '0.2' })
    expect(wrapper.find('.pause').get(0).props.style).to.deep.equal({opacity: '0.2' })
  })

  it('shuffle element has opacity 1', () => {
    expect(wrapper.find('.shuffle').get(0).props.style).to.deep.equal({opacity: '1' })
  })
})
