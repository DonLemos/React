import { useState, useEffect } from "react";
import { auth, db, collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "../firebase/config";
import Message from "./Message";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesRef = collection(db, "messages");

  useEffect(() => {
    const q = query(messagesRef, orderBy("timestamp", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setMessages(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });
    return unsubscribe;
  }, []);

  const sendMessage = async () => {
    if (newMessage.trim() === "") return;

    // Add the new message to Firestore
    await addDoc(messagesRef, {
      text: newMessage,
      user: auth.currentUser.displayName,
      userId: auth.currentUser.uid,
      timestamp: serverTimestamp(),
      photoURL: auth.currentUser.photoURL // Ensure this is set correctly
    });

    setNewMessage(""); // Clear input after sending message
  };

  return (
    <div className="chat-container">
      <div className="messages">
        {messages.map((msg) => (
          <Message
            key={msg.id}
            text={msg.text}
            user={msg.user}
            userId={msg.userId}
            photoURL={msg.photoURL} // Ensure we pass the photoURL here
          />
        ))}
      </div>
      <div className="input-container">
        <input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
