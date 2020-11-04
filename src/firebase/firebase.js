import * as firebase from 'firebase'

var config = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIRBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
};

firebase.initializeApp(config)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export { firebase, googleAuthProvider, database as default }


// database.ref().set({
//     name: 'andrew',
//     age: 26,
//     isSingle: true,
//     location: {
//         city: 'philly',
//         country: 'United state'
//     }
// }).then(() => {
//     console.log('data is saved')
// }).catch((err) => {
//     console.log('data is not saved', err)
// })

// database.ref().update({
//     name: 'mike',
//     age: 29,
//     isSingle: null
// })
// database.ref('isSingle')
//     .remove()
//     .then(() => { console.log('sucessful remove') })
//     .catch((err) => { console.log(err) })

// database.ref()
//     .once('value')
//     .then((snapShot) => {
//         const val = snapShot.val()
//         console.log(val)
//     })
//     .catch((e) => { console.log('err ' + e) })

// database.ref().on('value', (snapShot) => {
//     console.log(snapShot.val())
// })

// const notes = [{
//     id: 12,
//     body: 'this is note',
//     title: 'first note'
// }, {
//     id: 20,
//     body: 'this is second note',
//     title: 'my new title note'
// }]

// database.ref('notes').push(notes[1])


