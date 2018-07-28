import firebase from 'firebase'; // Version can be specified in package.json

class Fire {
    constructor() {
        this.init();

    }

    init = () =>
        firebase.initializeApp({
            apiKey: "AIzaSyCUqP5AB7PQ71f0qzpyGatyuJJ3OdV_BA0",
            authDomain: "walkpals.firebaseapp.com",
            databaseURL: "https://walkpals.firebaseio.com",
            projectId: "walkpals",
            storageBucket: "walkpals.appspot.com",
            messagingSenderId: "604206196946"
        });



    get ref() {
        return firebase.database().ref('messages');
    }

    parse = snapshot => {
        const { timestamp: numberStamp, text, user } = snapshot.val();
        const { key: _id } = snapshot;
        const timestamp = new Date(numberStamp);
        const message = {
            _id,
            timestamp,
            text,
            user,
        };
        return message;
    };

    on = callback =>
        this.ref
            .limitToLast(20)
            .on('child_added', snapshot => callback(this.parse(snapshot)));

    get timestamp() {
        return firebase.database.ServerValue.TIMESTAMP;
    }
    // send the message to the Backend
    send = messages => {
        for (let i = 0; i < messages.length; i++) {
            const { text, user } = messages[i];
            const message = {
                text,
                user,
                timestamp: this.timestamp,
            };
            this.append(message);
        }
    };

    append = message => this.ref.push(message);

    // close the connection to the Backend
    off() {
        this.ref.off();
    }
}

Fire.shared = new Fire();
export default Fire;