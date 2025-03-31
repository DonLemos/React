import { auth } from "../firebase/config";
console.log(auth.currentUser);


const Message = ({ text, user, userId, photoURL }) => {
  const isOwnMessage = userId === auth.currentUser?.uid;
  console.log("photoURL:", photoURL);

  return (
    <div className={`message ${isOwnMessage ? "own-message" : "other-message"}`}>
      {/* Display avatar if photoURL is present */}
      {photoURL && <img src={photoURL} alt="User Avatar" className="avatar" />}
      <div className="message-text">
        <strong>{user}</strong>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Message;
