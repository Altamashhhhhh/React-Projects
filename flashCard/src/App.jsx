import { useState } from 'react'
import './App.css'

const questions = [
  {
    "id": "a1f8b1d7-4e3d-4a5f-9d2b-23f7f4e0b6c7",
    "question": "What is the capital of France?",
    "answer": "Paris"
  },
  {
    "id": "c8d5e2b9-1f4e-4c6a-9b7a-92e3c9f5d2e1",
    "question": "What is the largest planet in our solar system?",
    "answer": "Jupiter"
  },
  {
    "id": "e9b3a8d5-7c4d-42a5-8d1c-3e5f7a9c6e8b",
    "question": "Who wrote the play 'Romeo and Juliet'?",
    "answer": "William Shakespeare"
  },
  {
    "id": "f7a2c9e4-6b1d-41f5-8e3b-4d5a7c9f2e3c",
    "question": "What is the chemical symbol for water?",
    "answer": "H2O"
  },
  {
    "id": "b3f5c8d9-2e4a-47b3-8c1d-5a7e4b3d6f1e",
    "question": "What year did the Titanic sink?",
    "answer": "1912"
  },
  {
    "id": "d1a7c9f2-8e3b-4c6a-9b7d-2f4e1d5c9a7b",
    "question": "Which element has the atomic number 1?",
    "answer": "Hydrogen"
  },
  {
    "id": "e4b7a9c3-2d1f-42b5-8e3c-7f6a1d9c5b2a",
    "question": "What is the fastest land animal?",
    "answer": "Cheetah"
  },
  {
    "id": "c9d2b7e4-3f1a-4e6b-8c5d-2a7f1b4e3c8a",
    "question": "How many continents are there on Earth?",
    "answer": "Seven"
  }
]


function App() {
  const [selectedId, setSelectedId] = useState(null)

  const handleAnswer = (id) => {
    setSelectedId(id)
  }
  console.log(selectedId)
  return (
    <><h1>FLASHCARDS</h1>
      <div className='container'>

        {questions.map((question) => (
          <div className={selectedId === question.id ? "selected" : ""} key={question.id} onClick={() => handleAnswer(question.id)}>
            <p>{selectedId === question.id ? question.answer : question.question}</p>
          </div>
        )
        )}
      </div>
    </>
  )
}

export default App
