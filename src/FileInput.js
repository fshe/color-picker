import React from 'react';

export default function FileInput({ onFileLoaded }) {
  const fileInput = React.useRef(null);

  const handleFileSelection = React.useCallback(
    event => {
      const files = event.target.files;
      // NOTE: Unsure whether I need to check that `files` is truthy.
      if (files && files[0]) {
        const reader = new FileReader();
        reader.onload = evt => {
          onFileLoaded(evt.target.result);
        };

        reader.readAsDataURL(files[0]);
      }
    },
    [onFileLoaded]
  );

  // NOTE: onChange here is acceptable, but won't be called if the same file is selected */
  return <input ref={fileInput} type="file" onChange={handleFileSelection} />;
}
