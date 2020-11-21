import { render } from "enzyme";
import React from "react";
import ReactAudioPlayer from "react-audio-player";
import Sound from "react-sound";
import useSound from "use-sound";


const audioTrack = "HowlsMovingCastle_MerryGoRound.mp3"

class Audio extends React.Component{

  state ={ 
    audioFile: false,
  
  }

  mouseEnterHandler = ()=>{
    this.setState({
      soundFile: true
    })
    if (soundFile) {
      setTimeout(()=> {
        this.setState({ soundFile: false})
      },1000)
    }
  }
  render(){
    return(    <div onMouseEnter={this.mouseEnterHandler} className='square'>
    <Sound playStatus={ this.state.audioFile ? Sound.status.PLAYING: Sound.status.STOPPED} url={`/soundBites/${randomSounds()}`}/>  
  </div>)
  }
}

export default Audio;
