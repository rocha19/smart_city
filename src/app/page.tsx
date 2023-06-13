'use client'
import { Sensors } from '@/core'
import { useEffect } from 'react'

export default function Home() {
  async function sendMessage(data: Sensors) {
    await fetch('/api/send', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      sendMessage({
        id: 'any id',
        name: 'any name',
        position:
          { x: event.clientX, y: event.clientY }
      })
    }

    window.addEventListener('click', handleClick)

    return () => {
      window.removeEventListener('click', handleClick)
    }
  }, [])

  return (
    <div
      className="flex flex-1 h-screen w-screen bg-[url('../assets/top-view.jpg')] bg-contain"
    />
  )
}
