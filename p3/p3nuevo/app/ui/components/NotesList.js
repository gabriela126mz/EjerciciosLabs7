"use client";
import React from 'react'; 
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

function NoteList() {
  const pathName = usePathname();
  const id = pathName.split("/").pop();
  const { noteId } = useParams();
  console.log(pathName, noteId);

  return (
    <div>
      <h1>Nota #{noteId}</h1>
      <p>Aquí puedes ver el contenido de la nota con ID #{noteId}.</p>
      <Link href="/applications/notes">Volver a la lista de notas</Link>
    </div>
  );
}

export default NoteList;
