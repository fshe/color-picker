import React, { forwardRef } from 'react';

import './styles.css';

const getMousePosition = event => ({
  x: event.offsetX,
  y: event.offsetY,
});

// This function is copied from somewhere. Forgot the source.
const rgbToHex = (r, g, b) => {
  if (r > 255 || g > 255 || b > 255) throw new Error('Invalid color');
  return ((r << 16) | (g << 8) | b).toString(16);
};

function ColorPicker(
  { hoverColor, setHoverColor, setSelectedColor, setXPos, setYPos },
  ref
) {
  const canvasElement = React.useRef(null);
  const [isColorPickerActive, setIsColorPickerActive] = React.useState(false);

  // Define an imperative API, in order to better encapsulate canvas logic.
  React.useImperativeHandle(ref, () => ({
    loadImage: dataUrl => {
      const image = new Image();
      image.onload = () => {
        canvasElement.current.width = image.naturalWidth;
        canvasElement.current.height = image.naturalHeight;
        const canvasContext = canvasElement.current.getContext('2d');
        // Paint the image onto the canvas.
        canvasContext.drawImage(image, 0, 0);
      };

      image.src = dataUrl;
    },
  }));

  const mouseMoveHandler = event => {
    // NOTE: Think about it, do I actually need this check?
    if (isColorPickerActive) {
      const { x, y } = getMousePosition(event);
      setXPos(x);
      setYPos(y);

      const canvasContext = canvasElement.current.getContext('2d');
      // NOTE: This currently treats transparent pixels as black.
      const [r, g, b] = canvasContext.getImageData(x, y, 1, 1).data;
      const hex = '#' + ('000000' + rgbToHex(r, g, b)).slice(-6);
      setHoverColor(hex);
    }
  };

  const clickHandler = () => {
    setHoverColor('#FFF');
    setSelectedColor(hoverColor);
    setIsColorPickerActive(false);
  };

  React.useEffect(() => {
    const { current } = canvasElement;
    if (isColorPickerActive) {
      current.addEventListener('mousemove', mouseMoveHandler);
      current.addEventListener('click', clickHandler);
    }

    // Cleanup by removing the attached listeners.
    return () => {
      current.removeEventListener('mousemove', mouseMoveHandler);
      current.removeEventListener('click', clickHandler);
    };
  }, [isColorPickerActive]);

  return (
    <>
      <canvas
        ref={canvasElement}
        width="490"
        height="490"
        className="ColorPicker__canvas"
      />
      <button onClick={() => setIsColorPickerActive(val => !val)}>
        {isColorPickerActive ? 'Stop' : 'Start'} color picker
      </button>
    </>
  );
}

export default forwardRef(ColorPicker);
