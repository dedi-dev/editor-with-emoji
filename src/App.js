import React, { useEffect, useState } from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import EmojiPicker from 'emoji-picker-react'
import ReactQuill from 'react-quill'
import { Twemoji   } from 'react-emoji-render';
import emoji from 'react-easy-emoji'
import emojiRegex  from 'emoji-regex'
import 'react-quill/dist/quill.snow.css'

function App() {
  const regex = emojiRegex();
  const testValue =
    '🥲 tess 🙇‍♂️💁‍♀️💁‍♂️ lagi 👩‍❤️‍💋‍👨'

  const [data, setData] = useState('Hello from CKEditor 5!')
  const [value, setValue] = useState('')
  const [listData, setListData] = useState([])

  const loopEmoji = () => {
    
    console.log('test Emoji: ', '🥲'.match(regex))
    let emojis = []
    for (const match of testValue.matchAll(regex)) {
      const emoji = match[0];
      console.log(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`);
      emojis.push(`Matched sequence ${ emoji } — code points: ${ [...emoji].length }`)
    }
    setListData(emojis)
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

      <textarea readOnly value={testValue} style={{ outline: 'none' }} />
      <Twemoji  svg size={32} text={`This ❤️ sentence includes :+1: a variety of emoji types :) ${testValue} `} />
      <h4>Emoji Easy</h4>
      <p>
        {emoji(testValue)}
      </p>
      <div>
        <ReactQuill
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
        lazyLoadEmojis={true}
        emojiStyle="facebook"
        onEmojiClick={(emoji) => {
          console.log(emoji)
          console.log(emoji.getImageUrl())
          console.log(emoji.emoji)
          // const newData = data + emoji.emoji
          // setData(newData)
        }}
      />
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={Editor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData()
          console.log({ event, editor, data })
          let params = localStorage.getItem('param')
          console.log('param: ', params)
        }}
      />
    </div>
  )
}

export default App
