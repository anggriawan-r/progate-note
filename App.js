import React, { useState } from 'react';
import Home from './src/screens/home';
import AddNote from './src/screens/addNote';
import EditNote from './src/screens/editNote';
import { NoteContextProvider } from './src/context/noteContext';

const CurrentPageWidget = ({
  currentPage,
  noteList,
  setCurrentPage,
  addNote,
  editNote,
  deleteNote,
}) => {
  switch (currentPage) {
    case 'home':
      return (
        <Home
          noteList={noteList}
          setCurrentPage={setCurrentPage}
          deleteNote={deleteNote}
        />
      );
    case 'add':
      return <AddNote setCurrentPage={setCurrentPage} addNote={addNote} />;
    case 'edit':
      return <EditNote setCurrentPage={setCurrentPage} editNote={editNote} />;
    default:
      return <Home />;
  }
};

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');

  const [noteList, setNoteList] = useState([
    {
      id: 1,
      title: 'Note pertama',
      desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry',
    },
  ]);

  const addNote = (title, desc) => {
    const id = noteList.length > 0 ? noteList[noteList.length - 1].id + 1 : 1;

    setNoteList([
      ...noteList,
      {
        id,
        title: title,
        desc: desc,
      },
    ]);
  };

  const editNote = (noteId, title, desc) => {
    const newNoteList = noteList.map((note) => {
      if (note.id === noteId) {
        return {
          ...note,
          title: title,
          desc: desc,
        };
      }
      return note;
    });
    setNoteList(newNoteList);
  };

  const deleteNote = (noteId) => {
    setNoteList(noteList.filter((note) => note.id !== noteId));
  };

  return (
    <NoteContextProvider>
      <CurrentPageWidget
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        noteList={noteList}
        addNote={addNote}
        editNote={editNote}
        deleteNote={deleteNote}
      />
    </NoteContextProvider>
  );
};

export default App;
