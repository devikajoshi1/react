import React from 'react'

const Card = (props) => {
    console.log(props.user);
  return (
      <div className="card">
        
        <h1>{props.user }</h1>
        <img src="https://images.unsplash.com/photo-1763173998548-eada87ada4e6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDg2fENEd3V3WEpBYkV3fHxlbnwwfHx8fHw%3D " alt="Profile" />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>View Profile</button>
      </div>
  )
}

export default Card
