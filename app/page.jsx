'use client'
import { useChat } from 'ai/react'

export default function Page() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
    <div style={{ maxWidth: 600, margin: '40px auto', padding: 20 }}>
      <h1>LucasBot 🤖</h1>
      <div>
        {messages.map((m, i) => (
          <div key={i} style={{ marginBottom: 12 }}>
            <strong>{m.role === 'user' ? 'Toi' : 'LucasBot'}:</strong> {m.content}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
          value={input}
          onChange={handleInputChange}
          placeholder="Écris ton message ici..."
          style={{ width: '100%', padding: 8, marginTop: 12 }}
        />
      </form>
    </div>
  )
}
