import React, { useEffect, useState } from 'react'
import EmojiPicker from 'emoji-picker-react'
import ReactQuill from 'react-quill'
import { Twemoji   } from 'react-emoji-render';
import emoji from 'react-easy-emoji'
import emojiRegex  from 'emoji-regex'
import Graphemer from 'graphemer';
import 'react-quill/dist/quill.snow.css'
import './App.css'

function App() {
  const splitter = new Graphemer();
  const regex = emojiRegex();
  const testValue =
    '🥲 tess'

  const [data, setData] = useState('Hello from CKEditor 5!')
  const [value, setValue] = useState('')
  const [listData, setListData] = useState([])

  const loopEmoji = () => {
    
    console.log('test Emoji: ', '🥲'.match(regex))
    // let element = []
    // for (const match of testValue.matchAll(regex)) {
    //   const emoji = match[0];
    //   console.log(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`);
    //   emojis.push(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`)
    // }
    // for (let i = 0; i < testValue.length; i++) {
    //   console.log(`testValue ke ${i}: ${testValue[i]}`)
    //   let char = testValue[i]
    //   if (char.match(regex)) {
    //     if (i > 0) {
    //       if (testValue[i - 1].match(regex)) {
    //        const newChar = testValue[i - 1] + char
    //        testValue[i - 1] = newChar
    //       } else {
    //         element.push(char)
    //       }
    //     }
    //   } else {
    //     element.push(char)
    //   }
      
    // }
    // setListData(element)
    const graphemes = splitter.splitGraphemes(testValue);
    setListData(graphemes)
    console.log('tes1: ', '🥲'.match(regex).length )
    console.log('tes2: ', '2'.match(regex) )
  }

  // for (const match of testValue.matchAll(regex)) {
  //   const emoji = match[0];
  //   console.log(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`);
  // }

  useEffect(() => {
    loopEmoji()
  }, [])


  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px' }}
    >
      <p>
        {listData.map((val, i) => (emoji(val)))}
      </p>
      <p>
        testing span and emoji \n
        <span className='font-bold'>{emoji('🥲 tess')}</span>
      </p>
      <textarea readOnly value={testValue} style={{ outline: 'none' }} />
      <Twemoji  svg size={32} text={`This ❤️ sentence includes :+1: a variety of emoji types :) ${testValue} `} />
      <h4>Emoji Easy</h4>
      <p>
        {emoji(testValue)}
      </p>
      <div>
        <ReactQuill
          readOnly
          theme="snow"
          value={value}
          onChange={(value) => {
            console.log('reaccu quil: ', value)
            let newValue = value
            if(newValue.includes('<strong>') && newValue.includes('</strong>')) {
              newValue = newValue.replace('<strong>', '*')
              newValue = newValue.replace('</strong>', '*')
            }
            setValue(newValue)
          }}
        />
      </div>
      <div>
        <span>
          test <img src="" alt="😊" /> test
        </span>
      </div>
      <h2>Emoji Picker</h2>
      <EmojiPicker
        height={300}
        width={600}
        searchDisabled
        emojiStyle="facebook"
        onEmojiClick={(emoji) => {
          console.log(emoji)
          console.log(emoji.getImageUrl())
          console.log(emoji.emoji)
          // const newData = data + emoji.emoji
          // setData(newData)
        }}
      />
    </div>
  )
}

export default App
