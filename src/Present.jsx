import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';
import device from 'current-device'
// import { beFull, isFull } from 'be-full';
import { words, wordsToPhone } from './data'
import './index.css'



const Present = props => {

  const [isStart, setIsStart] = useState(true)

  function randomNum(min, max) {
    var num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
  }

  useEffect(() => {
    console.log('进入了这个页面');
    let wordsArr = wordsToPhone;
    if (device.desktop()) {
      console.log('电脑')
      wordsArr = words
    }
    const container = document.querySelector('.container');
    if (container) {
      const fragment = document.createDocumentFragment();
      wordsArr.forEach(w => {
        const wordBox = document.createElement('div');
        const word = document.createElement('div');
        word.innerText = w;
        word.classList.add('word');
        word.style.color = '#BAABDA';
        word.style.fontFamily = '楷体';
        word.style.fontSize = '20px';
        wordBox.classList.add('word-box');
        wordBox.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
        wordBox.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
        wordBox.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
        wordBox.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

        wordBox.appendChild(word);
        fragment.appendChild(wordBox);
      });
      container.appendChild(fragment);
    }
    setIsStart(false)
    setTimeout(() => {
      setIsStart(true);
    }, 1500)
    setTimeout(() => {
      // console.log('是否全屏', isFull(document.getElementById('sky')));
      let textone = document.querySelector('.textone').querySelector('h1');
      let text = document.querySelector('.text').querySelector('h1');
      textone.innerHTML = '今晚，整片星空将为你一人闪烁，生日快乐！Sophia';
      textone.style.color = '#E8F9FD';
      textone.style.fontFamily = '华文楷体'
      text.innerHTML = '';
    }, 10000)
  }, [])

  return (
    <>
      <div className="sky">

        <div className="videofilm">
          <ReactPlayer
            width={'auto'}
            height={'auto'}
            url={props.videoSrc}
            playing={isStart}
            loop={true}
            volume={0.5}
          // onReady={(e) => { console.log('准备好了', e); setIsStart(true) }}
          />
        </div>
        <div className="textone">
          <h1>look at the stars</h1>
        </div>
        <div className="text">
          <h1>look how they shine for u</h1>
        </div>

        <div className="container textContainer"></div>
      </div>
    </>
  )
}

export default Present;
