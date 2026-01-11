import { useState } from 'react'
import './App.css'
import Card from './card.jsx';

function App() {
<Card/>
const users=[
  {
    name:'Sharmila',
    city:'Trichy',
    role:'Frontend Developer',
    skill:['Front-End Development','UI UX','React'],
    online:true,
    profile:'/img.jpg'
  },
  {
    name:'Swetha',
    city:'Sidhambaram',
    role:'Full-Stack Developer',
    skill:['Front-End','Python','React','Full-Stack Development'],
    online:false,
    profile:'/img.jpg'
  },
  {
    name:'Reshma',
    city:'Trichy',
    role:'Frontend Developer',
    skill:['Front-End Development','UI UX','React','Editing'],
    online:true,
    profile:'/img.jpg'
  },
  {
    name:'Vignesh',
    city:'Chennai',
    role:'Full-Stack Developer',
    skill:['Front-End Devleopment','UI UX','React','JAVA','Python'],
    online:false,
    profile:'/img.jpg'
  }
]
  return (
    <>
  
    {users.map((user,index)=><Card key={index}
    name={user.name}
    city={user.city}
    role={user.role}
    skill={user.skill}
    online={user.online}
    profile={user.profile}
    />)

    }

    </>
  )
}

export default App
