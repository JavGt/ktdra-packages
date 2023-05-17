/**
 * @license Copyright (c) 2014-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
import ClassicEditor from '@ckeditor/ckeditor5-editor-classic/src/classiceditor.js';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment.js';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat.js';
import AutoLink from '@ckeditor/ckeditor5-link/src/autolink.js';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold.js';
import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials.js';
// import FontSize from '@ckeditor/ckeditor5-font/src/fontsize.js';
import Heading from '@ckeditor/ckeditor5-heading/src/heading.js';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight.js';
import Indent from '@ckeditor/ckeditor5-indent/src/indent.js';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic.js';
import Link from '@ckeditor/ckeditor5-link/src/link.js';
import List from '@ckeditor/ckeditor5-list/src/list.js';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph.js';
import SelectAll from '@ckeditor/ckeditor5-select-all/src/selectall.js';
import SpecialCharacters from '@ckeditor/ckeditor5-special-characters/src/specialcharacters.js';
import SpecialCharactersCurrency from '@ckeditor/ckeditor5-special-characters/src/specialcharacterscurrency.js';
import SpecialCharactersLatin from '@ckeditor/ckeditor5-special-characters/src/specialcharacterslatin.js';
import SpecialCharactersMathematical from '@ckeditor/ckeditor5-special-characters/src/specialcharactersmathematical.js';
import SpecialCharactersText from '@ckeditor/ckeditor5-special-characters/src/specialcharacterstext.js';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation.js';

import Math from '@isaul32/ckeditor5-math/src/math';
import AutoformatMath from '@isaul32/ckeditor5-math/src/autoformatmath';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';

class Editor extends ClassicEditor { }

// Plugins to include in the build.
Editor.builtinPlugins = [
  Alignment,
  Autoformat,
  AutoLink,
  Bold,
  Essentials,
  // FontSize,
  Heading,
  Highlight,
  Indent,
  Italic,
  Link,
  List,
  Paragraph,
  SelectAll,
  SpecialCharacters,
  SpecialCharactersCurrency,
  SpecialCharactersLatin,
  SpecialCharactersMathematical,
  SpecialCharactersText,
  TextTransformation,
  Math,
  AutoformatMath,
  PasteFromOffice
];

// Editor configuration.
Editor.defaultConfig = {
  toolbar: {
    items: [
      'fontSize',
      'bold',
      'italic',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'specialCharacters',
      'math',
      '|',
      'alignment',
      'highlight',
      'selectAll',
      '|',
      'undo',
      'redo'
    ]
  },
  math: {
    engine: 'mathjax',
    lazyLoad: async () => {
      await import('@isaul32/ckeditor5-math/src/mathjax');
    },
    outputType: 'script',
    className: 'math-tex',
    forceOutputType: true,
    enablePreview: true,
    previewClassName: [],
    popupClassName: [],
    katexRenderOptions: {}
  },
  language: 'es',
};

export default Editor;
