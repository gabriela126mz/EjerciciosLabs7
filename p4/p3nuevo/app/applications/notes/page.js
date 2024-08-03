import React, { Suspense } from 'react';
import NoteList from '@/app/ui/components/NotesList';
import LoremList from '@/app/ui/components/LoremList';

function Notes() {
  return (
    <div>
      <h1>Noticias</h1>
      <Suspense fallback={<div>Cargando...</div>}>
        <NoteList />
      </Suspense>
      <LoremList />
    </div>
  );
}

export default Notes;
