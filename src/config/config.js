import firebase from 'firebase/app';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyCX8AE_PIeZNlFPFu3-b7ArxY2_xQwA5sE",
      authDomain: "mobilis-86326.firebaseapp.com",
      projectId: "mobilis-86326",
      storageBucket: "mobilis-86326.appspot.com",
      messagingSenderId: "446623109695",
      appId: "1:446623109695:web:debdb98f125d0768d99e8a",
      measurementId: "G-WTTZ1FY97Q"
  };
  
  firebase.initializeApp(firebaseConfig);

  export default firebase;