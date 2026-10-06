import { useState } from 'react'
import './App.css'

function App() {
  // What the user types, for example "12+5"
  const [input, setInput] = useState('')

  // The answer
  const [result, setResult] = useState('')

  // All the calculator buttons
  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
  ]

  // When a button is clicked
  function handleClick(value) {
    if (value === '=') {
      calculate()
    } else {
      setInput(input + value)
    }
  }

  // Do the math
  function calculate() {
    try {
      // Only allow numbers and + - * / .
      if (!/^[0-9+\-*/.]+$/.test(input)) return
      const answer = Function('return ' + input)()
      setResult(answer)
    } catch {
      setResult('Error')
    }
  }

  // Clear everything
  function clearAll() {
    setInput('')
    setResult('')
  }

  // Delete the last character
  function deleteLast() {
    setInput(input.slice(0, -1))
  }

  return (
    <div style={{ maxWidth: '320px', margin: '40px auto', padding: '20px' }}>
      <h1 style={{ fontSize: '36px', lineHeight: '1.2' }}>Abdul Sattar's Calculator</h1>

      {/* The screen */}
      <div
        style={{
          background: '#222',
          color: 'white',
          padding: '15px',
          borderRadius: '10px',
          textAlign: 'right',
          marginBottom: '15px',
          minHeight: '70px',
        }}
      >
        <div style={{ fontSize: '20px', opacity: 0.7 }}>{input || '0'}</div>
        <div style={{ fontSize: '32px', fontWeight: 'bold' }}>{result}</div>
      </div>

      {/* Clear and Delete buttons */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
        <button onClick={clearAll} style={{ flex: 1, padding: '15px' }}>
          Clear
        </button>
        <button onClick={deleteLast} style={{ flex: 1, padding: '15px' }}>
          Delete
        </button>
      </div>

      {/* Number and math buttons */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '10px',
        }}
      >
        {buttons.map((b) => (
          <button
            key={b}
            onClick={() => handleClick(b)}
            style={{
              padding: '20px',
              fontSize: '20px',
              background: b === '=' ? 'green' : '',
              color: b === '=' ? 'white' : '',
            }}
          >
            {b}
          </button>
        ))}
      </div>
    </div>
  )
}

export default App