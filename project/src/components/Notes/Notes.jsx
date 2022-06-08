import "./Notes.css";
import PostIt from "../Post-it/PostIt";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../UserContext/UserContext";

const fetchNewNote = (userEmail) => {
  return fetch("/newnote", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: userEmail,
      title: "Title",
      list: [{ text: "todo", done: false }],
    }),
  }).then((res) => {
    if (res.ok) {
      return res.json();
    }
    return new Error("fetch wasn't successfull");
  });
};

const fetchNote = (email, id) => {
  return fetch("/getNote", {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      email: email,
      id: id,
    }),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
};

const Notes = () => {
  const [notes, setNotes] = useState([]);
  const { context, setContext } = useContext(UserContext);

  const getNotes = (email) => {
    return fetch("/getUser", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        email: email,
      }),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return new Error("fetch wasn't successfull");
    });
  };
  //new notes
  const newNote = async () => {
    const result = await fetchNewNote(context);
    console.log(result);
    return null;
  };
  //geting notes from server
  useEffect(() => {
    const getNotesDb = async () => {
      const result = await getNotes(context);
      setNotes(result);
      console.log(notes);
    };
    getNotesDb();
  }, []);
  return (
    <div id="notes">
      <h1 className="title">My Notes</h1>
      <div className="note-container">
        <button className="new-note" onClick={newNote}>
          +
        </button>
        {notes.map((note) => {
          return <PostIt title={note.title} tasks={note.list}></PostIt>;
        })}
      </div>
    </div>
  );
};

export default Notes;
