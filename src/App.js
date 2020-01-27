import React from 'react';

import ColorPicker from './ColorPicker';
import ColorPreview from './ColorPreview';
import FileInput from './FileInput';
import './styles.css';

export default function App() {
  const colorPickerRef = React.useRef(null);
  const [hoverColor, setHoverColor] = React.useState('#FFF');
  const [selectedColor, setSelectedColor] = React.useState('#FFF');
  const [xPos, setXPos] = React.useState(undefined);
  const [yPos, setYPos] = React.useState(undefined);

  const onFileLoaded = dataUrl => {
    if (colorPickerRef && colorPickerRef.current) {
      colorPickerRef.current.loadImage(dataUrl);
    }
  };

  return (
    <div>
      <ColorPicker
        ref={colorPickerRef}
        hoverColor={hoverColor}
        setHoverColor={setHoverColor}
        setSelectedColor={setSelectedColor}
        setXPos={setXPos}
        setYPos={setYPos}
      />
      <FileInput onFileLoaded={onFileLoaded} />

      <div className="App__container">
        <div className="App__column">
          <p>Hover Color:</p>
          <ColorPreview backgroundColor={hoverColor} />

          <p>Selected Color:</p>
          <ColorPreview backgroundColor={selectedColor} />
        </div>
        <div className="App__column">
          <p>X pixel position:</p> {xPos}
          <p>Y pixel position:</p> {yPos}
        </div>
      </div>
    </div>
  );
}
