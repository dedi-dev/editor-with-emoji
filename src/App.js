import React, { useState } from 'react'
import Editor from 'ckeditor5-custom-build/build/ckeditor'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import EmojiPicker from 'emoji-picker-react'

function App() {
  const testValue =
    '🙇‍♂️💁‍♀️💁‍♂️🙅‍♀️🙅‍♂️🙆‍♀️🙆‍♂️🙋‍♀️🙋‍♂️🧏‍♀️🧏🧏‍♂️🤦‍♀️🤦‍♂️🤷‍♀️🤷‍♂️🙎‍♀️🙎‍♂️🙍‍♀️🙍‍♂️💇‍♀️💇‍♂️💆‍♀️💆‍♂️🧖‍♀️🧖🧖‍♂️💅🤳💃🕺👯‍♀️👯‍♂️🕴️👩‍🦽🧑‍🦽👨‍🦽👩‍🦼🧑‍🦼👨‍🦼🚶‍♀️🚶🚶‍♂️👩‍🦯🧑‍🦯👨‍🦯🧎‍♀️🧎🧎‍♂️🏃‍♀️🏃🏃‍♂️🧍‍♀️🧍🧍‍♂️👫👭👬👩‍❤️‍👨👩‍❤️‍👩💑👨‍❤️‍👨👩‍❤️‍💋‍👨'

  const [data, setData] = useState('Hello from CKEditor 5!')

  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', paddingTop: '50px' }}
    >
      <textarea readOnly value={testValue} style={{ outline: 'none' }} />
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
          const newData = data + emoji.emoji
          setData(newData)
        }}
      />
      <h2>Using CKEditor 5 build in React</h2>
      <CKEditor
        editor={Editor}
        data={data}
        onChange={(event, editor) => {
          const data = editor.getData()
          console.log({ event, editor, data })
        }}
      />
    </div>
  )
}

export default App
