// ## FIREBASE ADMIN
// import { initializeApp, cert } from "firebase-admin/app";
// import adminJson from "./../admin.json";
// ## ADMIN 계정
// const serviceAccount: any = adminJson;
// initializeApp({
//   credential: cert(serviceAccount),
//   storageBucket: "jb-world-2188e.appspot.com",
// });

import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import * as firebaseConfig from "../../firebase-config.json";

const firebaseApp = initializeApp(firebaseConfig);
export const storage = getStorage(firebaseApp);
