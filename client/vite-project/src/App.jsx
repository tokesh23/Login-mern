import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [password, setPassword] = useState(''); // Added state for password

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4020/api/get');
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const savelogin = async () => {
    if (input.trim() === '' || password.trim() === '') return; // Check both input and password
    try {
      const response = await axios.post('http://localhost:4020/api/save', { user: input, password });
      setData([...data, response.data]); // Use existing `data` for updating state
      setInput('');
      setPassword(''); // Clear password input after saving
    } catch (error) {
      console.error('Error adding user-password:', error);
    }
  };

  return (
    <div className='div1'>
      <h1>Login</h1>
      <div className='container'>
        <input
          type='text'
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder='Username'
        />
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder='Password'
        />
        <button className='btn' onClick={savelogin}>Click</button>
      </div>

      {/* // if show or print data than use this follwing code  */}
      {/* <div className='data-container'>
        {data.map((dat) => (
          <div key={dat._id}>
            <p>User: {dat.user}</p>
            <p>Password: {dat.password}</p>
          </div>
        ))} */}
    
    </div>
  );
};

export default App;
