/*!
 * froala_editor v4.6.0 (https://www.froala.com/wysiwyg-editor)
 * License https://froala.com/wysiwyg-editor/terms/
 * Copyright 2014-2025 Froala Labs
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('froala-editor')) :
  typeof define === 'function' && define.amd ? define(['froala-editor'], factory) :
  (factory(global.FroalaEditor));
}(this, (function (FE) { 'use strict';

  FE = FE && FE.hasOwnProperty('default') ? FE['default'] : FE;

  /**
   * Ukrainian
   */
  FE.LANGUAGE['uk'] = {
    translation: {
      // Place holder
      'Type something': "\u041D\u0430\u043F\u0438\u0448\u0456\u0442\u044C \u0431\u0443\u0434\u044C-\u0449\u043E",
      // Basic formatting
      'Bold': "\u0416\u0438\u0440\u043D\u0438\u0439",
      'Italic': "\u041A\u0443\u0440\u0441\u0438\u0432",
      'Underline': "\u041F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
      'Strikethrough': "\u0417\u0430\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u0438\u0439",
      // Main buttons
      'Insert': "\u0432\u0441\u0442\u0430\u0432\u0438\u0442\u0438",
      'Delete': "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
      'Cancel': "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
      'OK': 'OK',
      'Back': "\u043D\u0430\u0437\u0430\u0434",
      'Remove': "\u0432\u0438\u0434\u0430\u043B\u0438\u0442\u0438",
      'More': "\u0431\u0456\u043B\u044C\u0448\u0435",
      'Update': "\u043E\u043D\u043E\u0432\u043B\u0435\u043D\u043D\u044F",
      'Style': "\u0441\u0442\u0438\u043B\u044C",
      // Font
      'Font Family': "\u0428\u0440\u0438\u0444\u0442",
      'Font Size': "\u0420\u043E\u0437\u043C\u0456\u0440 \u0448\u0440\u0438\u0444\u0442\u0443",
      // Colors
      'Colors': "\u043A\u043E\u043B\u044C\u043E\u0440\u0438",
      'Background': "\u0424\u043E\u043D",
      'Text': "\u0422\u0435\u043A\u0441\u0442",
      'HEX Color': 'Шістнадцятковий колір',
      // Paragraphs
      'Paragraph Format': "\u0424\u043E\u0440\u043C\u0430\u0442",
      'Normal': "\u041D\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0438\u0439",
      'Code': "\u041A\u043E\u0434",
      'Heading 1': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 1",
      'Heading 2': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 2",
      'Heading 3': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 3",
      'Heading 4': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A 4",
      // Style
      'Paragraph Style': "\u043F\u0443\u043D\u043A\u0442 \u0441\u0442\u0438\u043B\u044C",
      'Inline Style': "\u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u0442\u0438\u043B\u044C",
      // Alignment
      'Align': "\u0412\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
      'Align Left': "\u041F\u043E \u043B\u0456\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Center': "\u041F\u043E \u0446\u0435\u043D\u0442\u0440\u0443",
      'Align Right': "\u041F\u043E \u043F\u0440\u0430\u0432\u043E\u043C\u0443 \u043A\u0440\u0430\u044E",
      'Align Justify': "\u041F\u043E \u0448\u0438\u0440\u0438\u043D\u0456",
      'None': "\u043D\u0456",
      // Lists
      'Ordered List': "\u041D\u0443\u043C\u0435\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
      'Unordered List': "\u041C\u0430\u0440\u043A\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u0438\u0441\u043E\u043A",
      // Indent
      'Decrease Indent': "\u0417\u043C\u0435\u043D\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
      'Increase Indent': "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438 \u0432\u0456\u0434\u0441\u0442\u0443\u043F",
      // Links
      'Insert Link': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      'Open in new tab': "\u0412\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u0432 \u043D\u043E\u0432\u0456\u0439 \u0432\u043A\u043B\u0430\u0434\u0446\u0456",
      'Open Link': "\u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      'Edit Link': "\u0440\u0435\u0434\u0430\u0433\u0443\u0432\u0430\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      'Unlink': "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      'Choose Link': "\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044C \u043F\u043E\u0441\u0438\u043B\u0430\u043D\u043D\u044F",
      // Images
      'Insert Image': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      'Upload Image': "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F",
      'By URL': "\u0437\u0430 URL",
      'Browse': "\u043F\u0435\u0440\u0435\u0433\u043B\u044F\u0434\u0430\u0442\u0438",
      'Drop image': "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0456\u0442\u044C \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0441\u044E\u0434\u0438",
      'or click': "\u0430\u0431\u043E \u043D\u0430\u0442\u0438\u0441\u043D\u0456\u0442\u044C",
      'Manage Images': "\u041A\u0435\u0440\u0443\u0432\u0430\u043D\u043D\u044F \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F\u043C\u0438",
      'Loading': "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
      'Deleting': "\u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043D\u044F",
      'Tags': "\u043A\u043B\u044E\u0447\u043E\u0432\u0456 \u0441\u043B\u043E\u0432\u0430",
      'Are you sure? Image will be deleted.': "\u0412\u0438 \u0432\u043F\u0435\u0432\u043D\u0435\u043D\u0456? \u0417\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u043D\u044F \u0431\u0443\u0434\u0435 \u0432\u0438\u0434\u0430\u043B\u0435\u043D\u043E.",
      'Replace': "\u0437\u0430\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438",
      'Uploading': "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F",
      'Loading image': "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0435\u043D\u043D\u044F \u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u044C",
      'Display': "\u0434\u0438\u0441\u043F\u043B\u0435\u0439",
      'Inline': "\u0412 \u043B\u0456\u043D\u0456\u044E",
      'Break Text': "\u043F\u0435\u0440\u0435\u0440\u0432\u0430 \u0442\u0435\u043A\u0441\u0442",
      'Alternative Text': "\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u0438\u0439 \u0442\u0435\u043A\u0441\u0442",
      'Change Size': "\u0437\u043C\u0456\u043D\u0438\u0442\u0438 \u0440\u043E\u0437\u043C\u0456\u0440",
      'Width': "\u0428\u0438\u0440\u0438\u043D\u0430",
      'Height': "\u0412\u0438\u0441\u043E\u0442\u0430",
      'Something went wrong. Please try again.': "\u0429\u043E\u0441\u044C \u043F\u0456\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A. \u0411\u0443\u0434\u044C \u043B\u0430\u0441\u043A\u0430 \u0441\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0449\u0435 \u0440\u0430\u0437.",
      'Image Caption': 'Заголовок зображення',
      'Advanced Edit': 'Розширений редагування',
      // Video
      'Insert Video': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0432\u0456\u0434\u0435\u043E",
      'Embedded Code': "\u0432\u0431\u0443\u0434\u043E\u0432\u0430\u043D\u0438\u0439 \u043A\u043E\u0434",
      'Paste in a video URL': 'Вставте в відео-URL',
      'Drop video': 'Перетягніть відео',
      'Your browser does not support HTML5 video.': 'Ваш браузер не підтримує відео html5.',
      'Upload Video': 'Завантажити відео',
      // Tables
      'Insert Table': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u044E",
      'Table Header': "\u0417\u0430\u0433\u043E\u043B\u043E\u0432\u043E\u043A \u0442\u0430\u0431\u043B\u0438\u0446\u0456",
      'Remove Table': "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0442\u0430\u0431\u043B\u0438\u0446\u0456",
      'Table Style': "\u0421\u0442\u0438\u043B\u044C \u0442\u0430\u0431\u043B\u0438\u0446\u0456",
      'Horizontal Align': "\u0413\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0435 \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
      'Row': "\u0420\u044F\u0434\u043E\u043A",
      'Insert row above': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0440\u044F\u0434\u043E\u043A \u0437\u0432\u0435\u0440\u0445\u0443",
      'Insert row below': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u043E\u0440\u043E\u0436\u043D\u0456\u0439 \u0440\u044F\u0434\u043E\u043A \u0437\u043D\u0438\u0437\u0443",
      'Delete row': "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0440\u044F\u0434\u043E\u043A",
      'Column': "\u0421\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
      'Insert column before': "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u043B\u0456\u0432\u043E\u0440\u0443\u0447",
      'Insert column after': "\u0414\u043E\u0434\u0430\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C \u043F\u0440\u0430\u0432\u043E\u0440\u0443\u0447",
      'Delete column': "\u0412\u0438\u0434\u0430\u043B\u0438\u0442\u0438 \u0441\u0442\u043E\u0432\u043F\u0435\u0446\u044C",
      'Cell': "\u041A\u043E\u043C\u0456\u0440\u043A\u0430",
      'Merge cells': "\u041E\u0431'\u0454\u0434\u043D\u0430\u0442\u0438 \u043A\u043E\u043C\u0456\u0440\u043A\u0438",
      'Horizontal split': "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u043E",
      'Vertical split': "\u0420\u043E\u0437\u0434\u0456\u043B\u0438\u0442\u0438 \u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u043E",
      'Cell Background': "\u0441\u0442\u0456\u043B\u044C\u043D\u0438\u043A\u043E\u0432\u0438\u0439 \u0444\u043E\u043D",
      'Vertical Align': "\u0432\u0435\u0440\u0442\u0438\u043A\u0430\u043B\u044C\u043D\u0430 \u0432\u0438\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u043D\u043D\u044F",
      'Top': "\u0422\u043E\u043F",
      'Middle': "\u0441\u0435\u0440\u0435\u0434\u043D\u0456\u0439",
      'Bottom': "\u0434\u043D\u043E",
      'Align Top': "\u0417\u0456\u0441\u0442\u0430\u0432\u0442\u0435 \u0432\u0435\u0440\u0445\u043D\u044E",
      'Align Middle': "\u0432\u0438\u0440\u0456\u0432\u043D\u044F\u0442\u0438 \u043F\u043E \u0441\u0435\u0440\u0435\u0434\u0438\u043D\u0456",
      'Align Bottom': "\u0417\u0456\u0441\u0442\u0430\u0432\u0442\u0435 \u043D\u0438\u0436\u043D\u044E",
      'Cell Style': "\u0441\u0442\u0438\u043B\u044C \u043A\u043E\u043C\u0456\u0440\u043A\u0438",
      // Files
      'Upload File': "\u0417\u0430\u0432\u0430\u043D\u0442\u0430\u0436\u0438\u0442\u0438 \u0444\u0430\u0439\u043B",
      'Drop file': "\u041F\u0435\u0440\u0435\u043C\u0456\u0441\u0442\u0456\u0442\u044C \u0444\u0430\u0439\u043B \u0441\u044E\u0434\u0438",
      // Emoticons
      'Emoticons': "\u0441\u043C\u0430\u0439\u043B\u0438",
      'Grinning face': "\u043F\u043E\u0441\u043C\u0456\u0445\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430",
      'Grinning face with smiling eyes': "\u041F\u043E\u0441\u043C\u0456\u0445\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0443\u0441\u043C\u0456\u0445\u043D\u0435\u043D\u0438\u043C\u0438 \u043E\u0447\u0438\u043C\u0430",
      'Face with tears of joy': "\u041E\u0431\u043B\u0438\u0447\u0447\u044F \u0437\u0456 \u0441\u043B\u044C\u043E\u0437\u0430\u043C\u0438 \u0440\u0430\u0434\u043E\u0441\u0442\u0456",
      'Smiling face with open mouth': "\u0423\u0441\u043C\u0456\u0445\u043D\u0435\u043D\u0435 \u043E\u0431\u043B\u0438\u0447\u0447\u044F \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C",
      'Smiling face with open mouth and smiling eyes': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C \u0456 ",
      'Smiling face with open mouth and cold sweat': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C \u0456 ",
      'Smiling face with open mouth and tightly-closed eyes': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C \u0456 \u0449\u0456\u043B\u044C\u043D\u043E \u0437\u0430\u043A\u0440\u0438\u0442\u0438\u043C\u0438 \u043E\u0447\u0438\u043C\u0430",
      'Smiling face with halo': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0433\u0430\u043B\u043E",
      'Smiling face with horns': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0440\u043E\u0433\u0430\u043C\u0438",
      'Winking face': "\u043F\u0456\u0434\u043C\u043E\u0440\u0433\u0443\u044E\u0447\u0438 \u043E\u0441\u043E\u0431\u0430",
      'Smiling face with smiling eyes': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0443\u0441\u043C\u0456\u0445\u043D\u0435\u043D\u0438\u043C\u0438 \u043E\u0447\u0438\u043C\u0430",
      'Face savoring delicious food': "\u041E\u0441\u043E\u0431\u0430 \u0441\u043C\u0430\u043A\u0443\u044E\u0447\u0438 \u0441\u043C\u0430\u0447\u043D\u0443 \u0457\u0436\u0443",
      'Relieved face': "\u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u043E \u043E\u0441\u043E\u0431\u0430",
      'Smiling face with heart-shaped eyes': "\u041F\u043E\u0441\u043C\u0456\u0445\u0430\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0443 \u0444\u043E\u0440\u043C\u0456 \u0441\u0435\u0440\u0446\u044F \u043E\u0447\u0438\u043C\u0430",
      'Smiling face with sunglasses': "Smiling face with sunglasses",
      'Smirking face': "\u043F\u043E\u0441\u043C\u0456\u0445\u043D\u0443\u0432\u0448\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430",
      'Neutral face': "\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Expressionless face': "\u043D\u0435\u0432\u0438\u0440\u0430\u0437\u043D\u0456 \u043E\u0431\u043B\u0438\u0447\u0447\u044F",
      'Unamused face': "Unamused \u043E\u0441\u043E\u0431\u0430",
      'Face with cold sweat': "\u041E\u0441\u043E\u0431\u0430 \u0437 \u0445\u043E\u043B\u043E\u0434\u043D\u043E\u0433\u043E \u043F\u043E\u0442\u0443",
      'Pensive face': "\u0437\u0430\u043C\u0438\u0441\u043B\u0435\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Confused face': "\u043F\u043B\u0443\u0442\u0430\u0442\u0438 \u043E\u0441\u043E\u0431\u0430",
      'Confounded face': "\u043D\u0435\u0445\u0430\u0439 \u043F\u043E\u0441\u043E\u0440\u043E\u043C\u043B\u044F\u0442\u044C\u0441\u044F \u043E\u0441\u043E\u0431\u0430",
      'Kissing face': "\u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043A\u0438 \u043E\u0441\u043E\u0431\u0430",
      'Face throwing a kiss': "\u041E\u0441\u043E\u0431\u0430 \u043A\u0438\u0434\u0430\u043B\u0438 \u043F\u043E\u0446\u0456\u043B\u0443\u043D\u043E\u043A",
      'Kissing face with smiling eyes': "\u041F\u043E\u0446\u0456\u043B\u0443\u043D\u043A\u0438 \u043E\u0441\u043E\u0431\u0430 \u0437 \u0443\u0441\u043C\u0456\u0445\u043D\u0435\u043D\u0438\u043C\u0438 \u043E\u0447\u0438\u043C\u0430",
      'Kissing face with closed eyes': "\u041F\u043E\u0446\u0456\u043B\u0443\u043D\u043A\u0438 \u043E\u0431\u043B\u0438\u0447\u0447\u044F \u0437 \u0437\u0430\u043F\u043B\u044E\u0449\u0435\u043D\u0438\u043C\u0438 \u043E\u0447\u0438\u043C\u0430",
      'Face with stuck out tongue': "\u041E\u0431\u043B\u0438\u0447\u0447\u044F \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043B\u0438 \u044F\u0437\u0438\u043A",
      'Face with stuck out tongue and winking eye': "\u041E\u0431\u043B\u0438\u0447\u0447\u044F \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043B\u0438 \u044F\u0437\u0438\u043A\u0430 \u0456 \u0410\u043D\u0456\u043C\u043E\u0432\u0430\u043D\u0435 \u043E\u0447\u0435\u0439",
      'Face with stuck out tongue and tightly-closed eyes': "\u041E\u0431\u043B\u0438\u0447\u0447\u044F \u0437 \u0441\u0442\u0438\u0440\u0447\u0430\u043B\u0438 \u044F\u0437\u0438\u043A\u0430 \u0456 \u0449\u0456\u043B\u044C\u043D\u043E \u0437\u0430\u043A\u0440\u0438\u0442\u0456 \u043E\u0447\u0456",
      'Disappointed face': "\u0440\u043E\u0437\u0447\u0430\u0440\u043E\u0432\u0430\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Worried face': "\u0441\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Angry face': "\u0437\u043B\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Pouting face': "\u043F\u0443\u0445\u043A\u0456 \u043E\u0441\u043E\u0431\u0430",
      'Crying face': "\u043F\u043B\u0430\u0447 \u043E\u0441\u043E\u0431\u0430",
      'Persevering face': "\u043D\u0430\u043F\u043E\u043B\u0435\u0433\u043B\u0438\u0432\u0430 \u043E\u0441\u043E\u0431\u0430",
      'Face with look of triumph': "\u041E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0438\u0434\u043E\u043C \u0442\u0440\u0456\u0443\u043C\u0444\u0443",
      'Disappointed but relieved face': "\u0420\u043E\u0437\u0447\u0430\u0440\u043E\u0432\u0430\u043D\u0438\u0439, \u0430\u043B\u0435 \u0437\u0432\u0456\u043B\u044C\u043D\u0435\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Frowning face with open mouth': "\u041D\u0430\u0441\u0443\u043F\u0438\u0432\u0448\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C",
      'Anguished face': "\u0431\u043E\u043B\u0456\u0441\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Fearful face': "\u043F\u043E\u0431\u043E\u044E\u044E\u0447\u0438\u0441\u044C \u043E\u0441\u043E\u0431\u0430",
      'Weary face': "\u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Sleepy face': 'сонне обличчя',
      'Tired face': "\u0432\u0442\u043E\u043C\u0438\u043B\u0438\u0441\u044F \u043E\u0441\u043E\u0431\u0430",
      'Grimacing face': "\u0433\u0440\u0438\u043C\u0430\u0441\u0443\u044E\u0447\u0438 \u043E\u0441\u043E\u0431\u0430",
      'Loudly crying face': "Loudly crying face",
      'Face with open mouth': "\u041E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C",
      'Hushed face': "\u0437\u0430\u0442\u0438\u0445 \u043E\u0441\u043E\u0431\u0430",
      'Face with open mouth and cold sweat': "\u041E\u0441\u043E\u0431\u0430 \u0437 \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u043C \u0440\u043E\u0442\u043E\u043C \u0456 \u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439 \u043F\u0456\u0442",
      'Face screaming in fear': "\u041E\u0441\u043E\u0431\u0430 \u043A\u0440\u0438\u0447\u0430\u0442\u0438 \u0432 \u0441\u0442\u0440\u0430\u0445\u0443",
      'Astonished face': "\u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439 \u043E\u0441\u043E\u0431\u0430",
      'Flushed face': "\u043F\u0440\u0438\u043F\u043B\u0438\u0432 \u043A\u0440\u043E\u0432\u0456 \u0434\u043E \u043E\u0431\u043B\u0438\u0447\u0447\u044F",
      'Sleeping face': "\u0421\u043F\u043B\u044F\u0447\u0430 \u043E\u0441\u043E\u0431\u0430",
      'Dizzy face': "\u0414\u0456\u0437\u0437\u0456 \u043E\u0441\u043E\u0431\u0430",
      'Face without mouth': "\u041E\u0441\u043E\u0431\u0430 \u0431\u0435\u0437 \u0440\u043E\u0442\u0430",
      'Face with medical mask': "\u041E\u0441\u043E\u0431\u0430 \u0437 \u043C\u0435\u0434\u0438\u0447\u043D\u043E\u044E \u043C\u0430\u0441\u043A\u043E\u044E",
      // Line breaker
      'Break': "\u0437\u043B\u043E\u043C\u0438\u0442\u0438",
      // Math
      'Subscript': "\u043F\u0456\u0434\u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439",
      'Superscript': "\u043D\u0430\u0434\u0440\u044F\u0434\u043A\u043E\u0432\u0438\u0439 \u0441\u0438\u043C\u0432\u043E\u043B",
      // Full screen
      'Fullscreen': "\u043F\u043E\u0432\u043D\u043E\u0435\u043A\u0440\u0430\u043D\u043D\u0438\u0439 \u0440\u0435\u0436\u0438\u043C",
      // Horizontal line
      'Insert Horizontal Line': "\u0412\u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u0433\u043E\u0440\u0438\u0437\u043E\u043D\u0442\u0430\u043B\u044C\u043D\u0443 \u043B\u0456\u043D\u0456\u044E",
      // Clear formatting
      'Clear Formatting': "\u041E\u0447\u0438\u0441\u0442\u0438\u0442\u0438 \u0444\u043E\u0440\u043C\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F",
      // Save
      'Save': "\u0417\u0431\u0435\u0440\u0435\u0433\u0442\u0438",
      // Undo, redo
      'Undo': "\u0421\u043A\u0430\u0441\u0443\u0432\u0430\u0442\u0438",
      'Redo': "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0438",
      // Select all
      'Select All': "\u0412\u0438\u0431\u0440\u0430\u0442\u0438 \u0432\u0441\u0435",
      // Code view
      'Code View': "\u041F\u0435\u0440\u0435\u0433\u043B\u044F\u0434 \u043A\u043E\u0434\u0443",
      // Quote
      'Quote': "\u0426\u0438\u0442\u0430\u0442\u0430",
      'Increase': "\u0417\u0431\u0456\u043B\u044C\u0448\u0438\u0442\u0438",
      'Decrease': "\u0437\u043D\u0438\u0436\u0435\u043D\u043D\u044F",
      // Quick Insert
      'Quick Insert': "\u0428\u0432\u0438\u0434\u043A\u0438\u0439 \u0432\u0441\u0442\u0430\u0432\u043A\u0430",
      // Spcial Characters
      'Special Characters': 'Спеціальні символи',
      'Latin': 'Латинський',
      'Greek': 'Грецький',
      'Cyrillic': 'Кирилиця',
      'Punctuation': 'Пунктуація',
      'Currency': 'Валюта',
      'Arrows': 'Стріли',
      'Math': 'Математика',
      'Misc': 'Різне',
      // Print.
      'Print': 'Друкувати',
      // Spell Checker.
      'Spell Checker': 'Перевірка орфографії',
      // Help
      'Help': 'Допомогти',
      'Shortcuts': 'Ярлики',
      'Inline Editor': 'Вбудований редактор',
      'Show the editor': 'Показати редактору',
      'Common actions': 'Спільні дії',
      'Copy': 'Скопіювати',
      'Cut': 'Вирізати',
      'Paste': 'Вставити',
      'Basic Formatting': 'Основне форматування',
      'Increase quote level': 'Збільшити рівень цитування',
      'Decrease quote level': 'Знизити рівень цитування',
      'Image / Video': 'Зображення / відео',
      'Resize larger': 'Змінити розмір більше',
      'Resize smaller': 'Змінити розмір менше',
      'Table': 'Стіл',
      'Select table cell': 'Виберіть комірку таблиці',
      'Extend selection one cell': 'Продовжити виділення однієї комірки',
      'Extend selection one row': 'Продовжити виділення одного рядка',
      'Navigation': 'Навігація',
      'Focus popup / toolbar': 'Фокус спливаюче / панель інструментів',
      'Return focus to previous position': 'Поверніть фокус на попередню позицію',
      // Embed.ly
      'Embed URL': 'Вставити URL-адресу',
      'Paste in a URL to embed': 'Вставте в url, щоб вставити',
      // Word Paste.
      'The pasted content is coming from a Microsoft Word document. Do you want to keep the format or clean it up?': 'Вставлений вміст надходить з документу Microsoft Word. ви хочете зберегти формат чи очистити його?',
      'Keep': 'Тримати',
      'Clean': 'Чистий',
      'Word Paste Detected': 'Слово паста виявлено',
      // Character Counter
      'Characters': 'Символи',
      // More Buttons
      'More Text': 'більше тексту',
      'More Paragraph': 'більше Параграф',
      'More Rich': 'більше Багатий',
      'More Misc': 'більше Різне'
    },
    direction: 'ltr'
  };

})));
//# sourceMappingURL=uk.js.map
