/* @flow */

import React, { Component } from 'react';
import draftToHtml from 'draftjs-to-html';
import { convertToRaw } from 'draft-js';
import draftToMarkdown from 'draftjs-to-markdown';
import { Editor } from 'react-draft-wysiwyg';
import EditorConvertToJSON from './EditorConvertToJSON';

import '../../../node_modules/codemirror/lib/codemirror.css';
import './styles.css';

require('codemirror/mode/jsx/jsx');

export default class Demo extends Component {

  state: any = {
    editorContents: [],
  };

  onEditorStateChange: Function = (index, editorContent) => {
    let editorContents = this.state.editorContents;
    editorContents[index] = editorContent;
    editorContents = [...editorContents];
    this.setState({
      editorContents,
    });
  };

  render() {
    const { editorContents } = this.state;
    return (
      <div className="demo-root">
        <EditorConvertToJSON />
      </div>
    );
  }
}
