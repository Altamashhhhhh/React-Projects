import React, { useState } from 'react'
import Greeting from './Greeting'
import "./App.css"
const users = [
  {
    "name": "John Doe",
    "greeting": "Hello, John! Welcome back!"
  },
  {
    "name": "Jane Smith",
    "greeting": "Hi, Jane! Great to see you!"
  },
  {
    "name": "Michael Johnson",
    "greeting": "Hello, Michael! How's it going?"
  },
  {
    "name": "Emily Davis",
    "greeting": "Hi, Emily! Hope you're doing well!"
  },
  {
    "name": "David Brown",
    "greeting": "Hello, David! Nice to have you here!"
  },
  {
    "name": "Sarah Wilson",
    "greeting": "Hi, Sarah! Welcome back!"
  },
  {
    "name": "James Taylor",
    "greeting": "Hello, James! Good to see you!"
  },
  {
    "name": "Jessica Martinez",
    "greeting": "Hi, Jessica! How have you been?"
  },
  {
    "name": "Daniel Garcia",
    "greeting": "Hello, Daniel! What's new?"
  },
  {
    "name": "Laura Lee",
    "greeting": "Hi, Laura! Welcome aboard!"
  },
  {
    "name": "Christopher Walker",
    "greeting": "Hello, Christopher! Nice to meet you!"
  },
  {
    "name": "Amanda Hall",
    "greeting": "Hi, Amanda! How are you today?"
  },
  {
    "name": "Joshua Allen",
    "greeting": "Hello, Joshua! Glad to have you here!"
  },
  {
    "name": "Megan Young",
    "greeting": "Hi, Megan! What's up?"
  },
  {
    "name": "Andrew King",
    "greeting": "Hello, Andrew! Enjoy your stay!"
  }
]


const App = () => {
  const [search, setSearch] = useState("");

  const updatedData = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <h1>DYNAMIC USER SEARC</h1>
      <input
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        value={search}
        name="search"
        id="search"
        placeholder="Enter the name"
      />
      <div className="container">

        <div className="greeting-container">
          {updatedData.map((user, index) => (
            <Greeting  greeting={user.greeting} name={user.name} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App
