import React, { useState } from 'react';

function App() {
  const [inputText, setInputText] = useState('');
  const [paragraphs, setParagraphs] = useState([]);

  const handleAddParagraph = () => {
    setParagraphs([...paragraphs, inputText]);
    setInputText('');
  };

  return (
    <div>
      <input
        type="text"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button onClick={handleAddParagraph}>Добавить</button>
      <div>
        {paragraphs.map((text, index) => (
          <p key={index}>{text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;

