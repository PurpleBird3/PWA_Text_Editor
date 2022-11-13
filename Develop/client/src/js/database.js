// MY COMMENTS IN ALL CAPS
// REFERENCE EXAMPLES FROM FOLDER 19 (28 mini project) etc...
import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// ** TODO: Add logic to a method that accepts some content and adds it to the database
// GIVEN LINE 20. COMMENTED IT OUT TO KEEP ORIGINAL, PASTED ON LINE 22 AND STARTED THERE
// export const putDb = async (content) => console.error('putDb not implemented');

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');
  const jateDd = await openDB('jate', 1);
  const tx = jateDd.transaction('jate', 'readwrite');
  const store = tx.objectStore('jate');
  const request = store.put({ content });
  const result = await request;
  console.log('Data saved to the database', result);
  // console.error('putDb not implemented');
};
// console.error('putDb not implemented');


// ** TODO: Add logic for a method that gets all the content from the database
// GIVEN LINE 37. COMMENTED IT OUT TO KEEP ORIGINAL, PASTED IT ON LNE 40 AND STARTED THERE
// export const getDb = async () => console.error('getDb not implemented');

// TODO: Add logic to a method that accepts some content and adds it to the database
export const getDb = async () => {
  console.log('GET some content from the database');
  const jateDd = await openDB('jate', 1);
  const tx = jateDd.transaction('jate', 'readonly');
  const store = tx.objectStore('jate');
  const request = store.getAll();
  const result = await request;
  console.log('result.value', result);
};
// console.error('getDb not implemented');

initdb();
