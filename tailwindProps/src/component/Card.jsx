import React from 'react'

function Card({name}) {
  return (
    <>
      <div className="flex items-center justify-center h-screen">
        <div className="w-60 h-60 rounded-xl">
          <img
            src="https://media1.giphy.com/media/z8n8dWgQ0mgEIyzlmV/giphy.gif"
            alt="Giphy"
            className="rounded-t-xl"
          />
          <div className="glass py-4 px-5 relative -top-[3.4rem] rounded-b-xl z-10">
            <h1 className="font-bold font-mono text-xl">{name}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card
