import React from 'react';
import AddNote from './addNote';

const EditNote = ({ setCurrentPage, editNote }) => (
  <AddNote setCurrentPage={setCurrentPage} editNote={editNote} />
);

export default EditNote;
