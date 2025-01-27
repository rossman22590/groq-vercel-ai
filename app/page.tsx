'use client';

import { useChat } from 'ai/react';

export default function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <b className='px-3'>AI Tutor x Groq</b>
      {messages.map(m => (
        <div key={m.id} className="whitespace-pre-wrap px-3">
          {m.role === 'user' ? <b className='mt-2'>User:</b>: <b className='mt-2'>Groq:</b>}
          {m.content}
        </div>
      ))}

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 w-full max-w-md p-2 mb-8 border border-gray-300 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}
