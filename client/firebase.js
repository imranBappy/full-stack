// import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
// import { initializeApp } from 'firebase/app';
// import 'firebase/auth'
 
// const firebaseConfig = {
//     apiKey: "AIzaSyBwcFFGN83oBm0LlZgR5qsA2mIoEkcv7Wk",
//     authDomain: "fir-adb93.firebaseapp.com",
//     projectId: "fir-adb93",
//     storageBucket: "fir-adb93.appspot.com",
//     messagingSenderId: "359501769209",
//     appId: "1:359501769209:web:43b3ff0f4ef66bbdd5b528",
//     measurementId: "G-K95M8H4Y0R"
// };
// initializeApp(firebaseConfig)
// const auth = getAuth();

// const firebase = (number, cb) =>{
    
//     setTimeout(() => {
//         const result = cb()
//         console.log(result);
//         console.log(200);
//     }, 1000);
    // var recaptcha = new RecaptchaVerifier('recaptcha', {
    //     'size': 'invisible',
    //     'callback': (response) => {}
    // }, auth);

    // signInWithPhoneNumber(auth, number, recaptcha).then( function(e) {
    //         const code = cb()
    //       e.confirm(code).then(function (result) {
    //           console.log({result});
    //       }).catch(function (error) {
    //           console.error( {error});
    //       });
      
    //   })
    //   .catch(function (error) {
    //       console.error( error);
      
    //   });
      
// }

// export default firebase