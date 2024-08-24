import React from 'react'
import './Home.css'
import home1_image from "../../assets/image_2.jpg"



const Home = () => {
  return (
    
    <>
    
    <div className='home-inside'>
        <div className='home-inside-left'> 
           <h1>Music Festival</h1>
           <p>He's one of the world's most successful musicians,
             introduced Guy Ritchie to Madonna and has just been 
             made a CBE. He has also written his memoirs - and doing it plunged him into depression.</p>
           <h3>So why does everyone <br /> mock him?</h3>
           <button>read more</button>
        </div>
        <div className='home-inside-right'>
            <div>

            </div>
        </div>
    </div>

  
     <div className='home1-inside'>

        <div className='home1-inside-left'>
        <h1>Musical legend.</h1>
          <p>Gordon Sumner, better known as Sting, <br />
             was born in Newcastle upon Tyne, <br />
             England, on October 2, 1951. He is best <br />
             known for his singing career, both with <br />
             the 1980s band The Police and as a solo <br />
             artist. Sting is also a distinguished 
             songwriter <br /> and actor, as well as an active 
             philanthropist <br /> in causes from environmentalism 
             to human rights.</p>
             <button>read more</button>
        </div>
        <img src={home1_image} alt="" />
        <div className='home1-inside-right'>
        <h1>Acting and <br /> Scoring in Films</h1>
            <p>Along with his musical exploration and <br />
                experimentation, Sting found time for <br />
                acting. He appeared in several films, <br />
                including the science-fiction drama <br />
                Dune (1984) and the popular British 
                crime <br /> film Lock, Stock, and Two 
                Smoking Barrels (1998).</p>
             <button>read more</button>

        </div>
     </div>
     
    <div className='home2-inside'>
      <div className='home2-inside-left'>
        <div>
          
        </div>

      </div>
      <div className='home2-inside-right'>
        <h1>'The Last Ship' <br /> Broadway Musical</h1>
         <p>In 2013, Sting released the album The Last Ship, <br /> 
          which drew inspiration from his childhood. He spent <br />
          his early years not far from the shipyards of Wallsend,<br />
           a Newcastle neighborhood. Singer and actor Jimmy Nail <br />
           contributed vocals to the album and he also helped Sting <br />
            develop a musical based on the album.</p>
            <button>read more</button>
      </div>

    </div>

    </>
  )
}

export default Home