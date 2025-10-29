import React, { use } from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'

const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1752170080668-fa46b5539cf4?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1949",
      intro: "A highly satisfied customer who experienced seamless service and quick resolution to their needs.",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1600275669439-14e40452d20b?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      intro: "Represents an underserved market segment that requires more personalized engagement and trust building.",
      tag: "Underserved"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661605716418-36bf05dfd7c6?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1169",
      intro: "Belongs to the underbanked population seeking innovative digital payment and lending solutions.",
      tag: "Underbanked"
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1661749342073-a28c018a2929?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=687",
      intro: "A loyal customer with high satisfaction and repeat engagement across multiple product categories.",
      tag: "Loyal"
    },
    {
      img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "A new user exploring features for the first time, showing curiosity but uncertain long-term interest.",
      tag: "New User"
    },
    {
      img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "An enthusiastic customer who actively shares feedback and helps improve product usability.",
      tag: "Engaged"
    },
    {
      img: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "A premium segment user who values quality, exclusivity, and seamless service experiences.",
      tag: "Premium"
    },
    {
      img: "https://images.unsplash.com/photo-1516280030429-27679b3dc9cf?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "A customer who recently switched from a competitor and seeks better support and transparency.",
      tag: "Converted"
    },
    {
      img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "A long-term client with consistent engagement but open to exploring alternative services.",
      tag: "Established"
    },
    {
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=1000",
      intro: "A tech-savvy customer who embraces digital platforms and drives innovation through feedback.",
      tag: "Innovator"
    }
  ]


  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App
