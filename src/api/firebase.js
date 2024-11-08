import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getDatabase, ref, set, get, remove } from "firebase/database";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_FIREBASE_DB_URL,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);

export async function addNewImage(image, title) {
  const id = uuid();
  return set(ref(database, `gallery/${id}`), {
    image,
    title,
    id,
  });
}

export async function getImages() {
  return get(ref(database, "gallery")).then((snapshot) => {
    if (snapshot.exists()) {
      const images = Object.values(snapshot.val());
      const updatedImages = images.map((image) => {
        if (image.image.startsWith("http://")) {
          image.image = image.image.replace(/^http:/, "https:");
        }
        return image;
      });

      return updatedImages;
    }
    return [];
  });
}
export async function getVideo() {
  return get(ref(database, "videos")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
getVideo();
export async function addMessage({ name, message, password }) {
  const id = uuid();
  const timestamp = new Date().toISOString();

  return set(ref(database, `messages/${id}`), {
    name,
    message,
    password,
    id,
    submittedAt: timestamp,
  });
}
/*
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  const options = { year: "numeric", month: "2-digit", day: "2-digit" };
  return new Intl.DateTimeFormat("ko-KR", options).format(date);
}
*/
export async function getMessages() {
  return get(ref(database, "messages")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
      /*
      return Object.values(snapshot.val()).map((message) => {
        if (message.submittedAt) {
          message.submittedAt = formatTimestamp(message.submittedAt);
        }
        return message;
      });
    } else {
      return [];*/
    }
    return [];
  });
}

export async function addRsvp(rsvpData) {
  const id = uuid();
  const timestamp = new Date().toISOString();

  return set(ref(database, `rsvps/${id}`), {
    ...rsvpData,
    id,
    submittedAt: timestamp,
  });
}

export async function updateMessage(id, updatedData) {
  return set(ref(database, `messages/${id}`), updatedData);
}

export async function deleteMessage(id) {
  const dbRef = ref(database, `messages/${id}`);
  return remove(dbRef);
}
