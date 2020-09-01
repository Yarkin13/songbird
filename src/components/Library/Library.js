import React from 'react'
import KindBird from './KindBird'

function Library() {
  const modes = [
    {
      id: 1,
      title: 'Воробьиные',
    },
    {
      id: 2,
      title: 'Лесные птицы',
    },
    {
      id: 3,
      title: 'Певчие птицы',
    },
    {
      id: 4,
      title: 'Хищные птицы',
    },
    {
      id: 5,
      title: 'Морские птицы',
    },
  ]
  return (
    <ul>
      {modes.map((bird) => {
        return (
          <KindBird title={bird.title} key={bird.id} id={bird.id}></KindBird>
        )
      })}
    </ul>
  )
}

export default Library
