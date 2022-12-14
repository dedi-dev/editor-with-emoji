import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

// import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
// import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
// import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
// import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
// import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
// import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
// import Heading from '@ckeditor/ckeditor5-heading/src/heading';
// import Image from '@ckeditor/ckeditor5-image/src/image';
// import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
// import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
// import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
// import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
// import Link from '@ckeditor/ckeditor5-link/src/link';
// import List from '@ckeditor/ckeditor5-list/src/list';
// import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
// import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';

// import '../themes/style.css';

export default class ClassicEditor extends ClassicEditorBase {}

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	// Essentials,
	// UploadAdapter,
	// Autoformat,
	Bold,
	Italic,
	// Underline,
	// BlockQuote,
	// EasyImage,
	// Heading,
	// Image,
	// ImageCaption,
	// ImageStyle,
	// ImageToolbar,
	// ImageUpload,
	// Link,
	// List,
	// Paragraph,
	// Highlight
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	highlight: {
		options: [
			{
				model: 'orangePen',
				class: 'pen-orange',
				title: 'Orange',
				color: '#e59536',
				type: 'pen'
			},
			{
				model: 'lightBluePen',
				class: 'pen-light-blue',
				title: 'Light blue',
				color: '#30caf7',
				type: 'pen'
			},
			{
				model: 'darkBluePen',
				class: 'pen-dark-blue',
				title: 'Dark blue',
				color: '#3982a4',
				type: 'pen'
			},
			{
				model: 'greenPen',
				class: 'pen-green',
				title: 'Green',
				color: '#488f80',
				type: 'pen'
			},
			{
				model: 'grayPen',
				class: 'pen-gray',
				title: 'Dark gray',
				color: '#4d4d4c',
				type: 'pen'
			}
		]
	},
	heading: {
		options: [
			{ model: 'paragraph', title: 'Body copy', class: 'ck-heading_paragraph' },
			{ model: 'heading2', view: 'h2', title: 'Sub Header', class: 'ck-heading_heading2' }
		]
	},
	toolbar: {
		items: [
			// 'heading',
			// '|',
			// 'highlight',
			// '|',
			'bold',
			'italic',
			// 'underline',
			// '|',
			// 'numberedList',
			// 'bulletedList',
			// '|',
			// 'blockQuote',
			// '|',
			// 'link',
			// '|',
			// 'imageUpload',
			// '|'
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};