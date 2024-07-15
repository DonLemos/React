// Chat.js
import React, { useState, useEffect, useRef } from 'react';
import { collection, addDoc, query, orderBy, onSnapshot } from 'firebase/firestore';
import { auth, db } from '../firebase-config';
import ChatMessage from './ChatMessage';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');
  const dummy = useRef();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('createdAt'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messages = snapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
      setMessages(messages);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(collection(db, 'messages'), {
      text: formValue,
      createdAt: new Date(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <span ref={dummy}></span>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Type Message" />
        <button type="submit" disabled={!formValue}>Send</button>
      </form>
    </>
  );
}

export default Chat;
