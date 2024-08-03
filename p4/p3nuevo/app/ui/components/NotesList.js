import React from 'react';
import { fetchNotes } from "@/app/lib/api";
import Link from 'next/link';

async function NoteList() {
  const fetchedNotes = await fetchNotes();
  console.log(fetchedNotes);

  return (
    <ul>
      {fetchedNotes.map((note) => (
        <li key={note.id}>
          <Link href={`/applications/notes/${note.id}`}>
            {note.content}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default NoteList;
