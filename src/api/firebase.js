import { initializeApp } from "firebase/app";
import { v4 as uuid } from "uuid";
import { getDatabase, ref, set, get } from "firebase/database";

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
  return set(ref(database, `messages/${id}`), {
    name,
    message,
    password,
    id,
  });
}

export async function getMessages() {
  return get(ref(database, "messages")).then((snapshot) => {
    if (snapshot.exists()) {
      return Object.values(snapshot.val());
    }
    return [];
  });
}
