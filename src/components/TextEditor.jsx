import React, { useState, useRef } from 'react';

const TextEditor = ({ onContentChange }) => {
  const editorRef = useRef(null);
  const [editorContent, setEditorContent] = useState('<p>Start typing here...</p>');

  const handleCommand = (command) => {
    document.execCommand(command, false, null);
  };

  const handleInput = () => {
    const htmlContent = editorRef.current.innerHTML;
    setEditorContent(htmlContent);
    onContentChange(htmlContent);  // Send updated HTML content to parent
  };

  return (
    <div className='bg-white'>
      {/* Toolbar */}
      <div style={{ marginBottom: '10px' }}>
        <button onClick={() => handleCommand('bold')}><b>B</b></button>
        <button onClick={() => handleCommand('italic')}><i>I</i></button>
        <button onClick={() => handleCommand('insertUnorderedList')}>• Bullets</button>
        <button onClick={() => handleCommand('outdent')}>Outdent</button>
        <button onClick={() => handleCommand('indent')}>Indent</button>
      </div>

      {/* Editable Content */}
      <div
        className='bg-white'
        ref={editorRef}
        contentEditable={true}
        dangerouslySetInnerHTML={{ __html: editorContent }}
        onInput={handleInput}
        style={{
          minHeight: '200px',
          border: '1px solid #ccc',
          padding: '10px',
          outline: 'none',
          whiteSpace: 'pre-wrap',
        }}
      />
    </div>
  );
};

export default TextEditor;
