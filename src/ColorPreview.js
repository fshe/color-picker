import React from 'react';
import './styles.css';

export default function ColorPreview({ backgroundColor }) {
  return (
    <div
      className="ColorPreview"
      style={{
        backgroundColor,
      }}
    />
  );
}
