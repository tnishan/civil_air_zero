import React, { useEffect, useState } from 'react';
import './Messages.css';

function Messages() {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [editing, setEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/messages/')
      .then(response => response.json())
      .then(data => setMessages(data));
  }, []);

  const addMessage = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/messages/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newMessage }),
    })
      .then(response => response.json())
      .then(message => setMessages(oldMessages => [...oldMessages, message]));
    setNewMessage('');
  };

  const deleteMessage = (id) => {
    fetch(`http://127.0.0.1:8000/api/messages/${id}/`, {
      method: 'DELETE',
    })
      .then(() => setMessages(oldMessages => oldMessages.filter(message => message.id !== id)));
  };

  const editMessage = (id) => {
    setEditing(true);
    setNewMessage(messages.find(message => message.id === id).content);
    setEditingId(id);
  };

  const updateMessage = (event) => {
    event.preventDefault();
    fetch(`http://127.0.0.1:8000/api/messages/${editingId}/`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: newMessage }),
    })
      .then(response => response.json())
      .then(updatedMessage => {
        setMessages(oldMessages => oldMessages.map(message => message.id === updatedMessage.id ? updatedMessage : message));
        setEditing(false);
        setNewMessage('');
        setEditingId(null);
      });
  };

  return (
    <div className="messages-container">
      <h2>Messages</h2>
      {messages.map(message => {
        const createdAt = new Date(message.created_at);
        const updatedAt = new Date(message.updated_at);

        return (
          <div key={message.id} className="message">
            <div>
              <p>{message.content}</p>
              <button onClick={() => editMessage(message.id)}>Edit</button>
              <button onClick={() => deleteMessage(message.id)}>Delete</button>
            </div>
            <p style={{ color: 'gray' }}>
              Created at: {createdAt.toLocaleString()} | Updated at: {updatedAt.toLocaleString()}
            </p>
          </div>
        );
      })}
      <form onSubmit={editing ? updateMessage : addMessage} className="new-message-form">
        <input
          type="text"
          value={newMessage}
          onChange={e => setNewMessage(e.target.value)}
        />
        <button type="submit">{editing ? 'Update Message' : 'Add Message'}</button>
      </form>
    </div>
  );
}

export default Messages;
