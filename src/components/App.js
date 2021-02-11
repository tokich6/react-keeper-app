import React, { useState } from 'react';
import Header from './Header';
import Note from './Note';
import Footer from './Footer';
import CreateArea from './CreateArea';
// import notes from '../notes';


function App() {
    const [notes, setNotes] = useState([]);

    function addNote(newNote) {
        setNotes(prevNotes => {
            return [
                ...prevNotes,
                newNote
            ]
        })
    }

    function deleteNote(itemId) {
        setNotes(prevNotes => {
            return prevNotes.filter((item, index) => {
                return index !== itemId
            });
        });
    }

    return (
        <div>
            <Header />
            <CreateArea onAdd={addNote}/>
            {
                notes.map((note, i) => {
                    return <Note key={i} id={i} title={note.title} content={note.content} onDelete={deleteNote} />
                })
            }
            <Footer />
        </div>
    )
}

export default App;
