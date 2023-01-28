import Image from 'next/image';
import React from 'react'

function SingleEventPage({event}) {
  return (
    <div>
      <h2> {event.title} </h2>
      <h2> Location: {event.city}</h2>
      <Image 
        width={500} 
        height={400} 
        alt={event.title} 
        src={event.image} 
      />
      <p> {event.description} </p>
    </div>
  );
}

export default SingleEventPage;
