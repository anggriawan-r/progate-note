import { createContext, useContext, useState } from 'react';

const NoteContext = createContext(null);

export const NoteContextProvider = ({ children }) => {
  const [note, setNote] = useState();

  return (
    <NoteContext.Provider value={{ note, setNote }}>
      {children}
    </NoteContext.Provider>
  );
};

export const useNote = () => {
  const context = useContext(NoteContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
