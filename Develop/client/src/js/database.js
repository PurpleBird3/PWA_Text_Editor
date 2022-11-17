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
  // CONNECT TO THE DATABASE
  const jateDd = await openDB('jate', 1);
  // SPECIFY THE DATABASE AND PRIVILEGES
  const tx = jateDd.transaction('jate', 'readwrite');
  // OPEN THE DESIRED OBJECT STORE
  const store = tx.objectStore('jate');
  // PASS THE VALUE AND CONTENT TO STORE
  const request = store.put({ id: 1, value: content });

  // CONFIRM THE REQUEST AND PROMPT THE USER
  const result = await request;
  // console.log('Data saved to the database', result);
  // ***** OR USE BELOW 
  console.log('Data saved to the database', result.valueOf);
};
// console.error('putDb not implemented');


// ** TODO: Add logic for a method that gets all the content from the database
// GIVEN LINE 37. COMMENTED IT OUT TO KEEP ORIGINAL, PASTED IT ON LNE 40 AND STARTED THERE
// export const getDb = async () => console.error('getDb not implemented');

// TODO: Add logic to a method that accepts some content and adds it to the database
export const getDb = async () => {
  console.log('GET content from the database');
  // CONNECT TO THE DATABASE
  const jateDd = await openDB('jate', 1);
  // CREATE A NEW TRANSACTION. SPECIFY THE DATABASE AND PRIVILEGES
  const tx = jateDd.transaction('jate', 'readonly');
  // OPEN THE DESIRED OBJECT STORE
  const store = tx.objectStore('jate');
  // GET ALL THE CONTENT FROM THE DATABASE
  // const request = store.getAll();
  // OR GET(1)
  const request = store.get(1);

  // CONFIRM THE REQUEST AND CONSOLE LOG THE RESULT
  const result = await request;
  // CONSOLE LOG THE RESULT THIS WAY???
  console.log('result.value', result);
  // RETURN THE RESULT
  // return result;

  // RETURN RESULT?.VALUE OPTIONALLY CHAINING THE VALUE PROPERTY
  return result?.value;
};
// console.error('getDb not implemented');

// START THE DATABASE
initdb();
