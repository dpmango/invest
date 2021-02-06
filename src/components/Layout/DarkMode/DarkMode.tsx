import React, { useState } from 'react';

// import styles from './Input.scss';

const { ipcRenderer } = require('electron');

const DarkMode = () => {
  const [themeSource, setThemeSource] = useState<string>('System');

  const toggleDarkMode = async () => {
    const isDarkMode = await ipcRenderer.invoke('dark-mode:toggle');
    setThemeSource(isDarkMode ? 'Dark' : 'Light');
  };

  const resetModeSystem = async () => {
    await ipcRenderer.invoke('dark-mode:system');
    setThemeSource('System');
  };

  return (
    <div className="container">
      <p>
        Current theme source <strong>{themeSource}</strong>
      </p>

      <button type="button" onClick={toggleDarkMode}>
        Toggle Dark Mode
      </button>
      <button type="button" onClick={resetModeSystem}>
        Reset to System Theme
      </button>
    </div>
  );
};
export default DarkMode;
