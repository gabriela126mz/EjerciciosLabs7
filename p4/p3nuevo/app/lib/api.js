export async function fetchNotes() {
    return new Promise ((resolve) => {
        setTimeout(() => {
            const dummyData = [
                {id: 1, title: "Nota 1", content: "Contenido de la nota 1"},
                {id: 2, title: "Nota 2", content: "Contenido de la nota 2"},
                {id: 3, title: "Nota 3", content: "Contenido de la nota 3"},
                {id: 4, title: "Nota 4", content: "Contenido de la nota 4"},
                {id: 5, title: "Nota 5", content: "Contenido de la nota 5"},
            ];
        resolve(dummyData);
    },1000);
    });
}