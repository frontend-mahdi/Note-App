import { NoteType } from "@/models/Note";
import { IDBPDatabase, openDB } from "idb";
import { useEffect, useState } from "react";

const useIdb = () => {
  const DB_NAME = "pwa-note-db";
  const TABLE_NAME = "notes";
  const [db, setDb] = useState<Promise<IDBPDatabase>>();
  useEffect(() => {
    const dbPromise = openDB(DB_NAME, 1, {
      upgrade: (db) => {
        if (!db.objectStoreNames.contains(TABLE_NAME))
          db.createObjectStore(TABLE_NAME, {
            keyPath: "id",
          });
      },
    });
    setDb(dbPromise);
  }, []);
  const writeNote = (data: NoteType) => {
    if (db)
      db.then((db) => {
        const tx = db
          .transaction(TABLE_NAME, "readwrite")
          .objectStore(TABLE_NAME)
          .put(data);
        return tx;
      });
  };
  const readAllNotes = () => {
    let result;
    if (db)
      result = db.then((db) => {
        const tx = db
          .transaction(TABLE_NAME, "readonly")
          .objectStore(TABLE_NAME)
          .getAll();
        return tx;
      });
    return result;
  };
  return { writeNote, readAllNotes, db };
};

export default useIdb;
