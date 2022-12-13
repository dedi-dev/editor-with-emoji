/**
 * @license Copyright (c) 2014-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js'
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js'
import Code from '@ckeditor/ckeditor5-basic-styles/src/code.js'
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js'
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js'
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js'
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough.js'
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters'
import SpecialCharactersEssentials from '@ckeditor/ckeditor5-special-characters/src/specialcharactersessentials'
import Plugin from '@ckeditor/ckeditor5-core/src/plugin'
import ButtonView from '@ckeditor/ckeditor5-ui/src/button/buttonview'

import {
  EmojiActivity,
  EmojiFlags,
  EmojiFood,
  EmojiNature,
  EmojiObjects,
  EmojiPeople,
  EmojiPlaces,
  EmojiSymbols,
} from './emoji'

class Editor extends ClassicEditor {}

function SpecialCharactersEmoji(editor) {
  editor.plugins
    .get('SpecialCharacters')
    .addItems('Smileys & People', EmojiPeople)
  editor.plugins
    .get('SpecialCharacters')
    .addItems('Animals & Nature', EmojiNature)
  editor.plugins.get('SpecialCharacters').addItems('Food & Drink', EmojiFood)
  editor.plugins.get('SpecialCharacters').addItems('Activity', EmojiActivity)
  editor.plugins
    .get('SpecialCharacters')
    .addItems('Travel & Places', EmojiPlaces)
  editor.plugins.get('SpecialCharacters').addItems('Objects', EmojiObjects)
  editor.plugins.get('SpecialCharacters').addItems('Symbols', EmojiSymbols)
  editor.plugins.get('SpecialCharacters').addItems('Flags', EmojiFlags)
}

class AddParameter extends Plugin {
  init() {
    const editor = this.editor

    editor.ui.componentFactory.add('addParameter', () => {
      // The button will be an instance of ButtonView.
      const button = new ButtonView()

      button.set({
        label: '+ Add Parameter',
        withText: true,
      })

      //Execute a callback function when the button is clicked
      button.on('execute', () => {
        let params = localStorage.getItem('param')
        if (params == null) params = 0
        params = parseInt(params) + 1
        localStorage.setItem('param', params)
        localStorage.setItem('flagbutton', true)
        //Change the model using the model writer
        editor.model.change((writer) => {
          //Insert the text at the user's current position
          editor.model.insertContent(writer.createText(' {{' + params + '}} '))
        })
      })

      return button
    })
  }
}

// Plugins to include in the build.
Editor.builtinPlugins = [
  Bold,
  Code,
  Essentials,
  Italic,
  Paragraph,
  Strikethrough,
  SpecialCharacters,
  SpecialCharactersEssentials,
  SpecialCharactersEmoji,
  AddParameter,
]

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'bold',
      'italic',
      'strikethrough',
      'code',
      'specialCharacters',
      'addParameter',
    ],
  },
  language: 'en',
}

export default Editor
