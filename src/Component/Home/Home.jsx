import React from 'react'
import './Home.css'
import home1_image from "../../assets/image_2.jpg"
import home3_image from "../../assets/image_4.jpg"
import home5_image from "../../assets/image_6.jpg"


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
  



    <div className='home3-inside'>
      <div className='home3-inside-left'>
       <h1>Personal Life</h1>
       <p>In addition to his musical career, <br /> Sting has been active 
        in human rights and <br /> other social issues. He and his wife, <br />
        Trudie Styler, have been married since <br /> 1992. The couple 
        has four children. <br /> Sting also has two other children <br />
        from his first marriage.</p>
        <button>read more</button>
      </div>
      <div className='home3-inside-right'>
      
      </div>
      <img src={home3_image} alt="" />
    </div>



    <div className='home4-inside'>
      <div className='home4-inside-left'>
        
          <h1>'The Last Ship' <br /> Broadway Musical</h1>
          <p>In 2013, Sting released the album <br />
           The Last Ship, which drew inspiration from <br />
           his childhood. He spent his early years not <br />
           far from the shipyards of Wallsend, a Newcastle <br />
           neighborhood. Singer and actor Jimmy Nail contributed <br />
           vocals to the album and he also helped Sting <br />
            develop a musical based on the album.</p>
          <button>read more</button>

      </div>

      <div className='home4-inside-right'>

      </div>
    </div>
  



    <div className='home5-inside'>
      <div className='home5-inside-left'>
            <h1>What exactly is <br /> the spirit?</h1>
            <p>I don't know what it is. But it's something <br />
               I need to connect with on a regular basis and <br />
               the roots for me are music and my relationships. <br />
               I don't know what it is. I only have a <br />
               limited brain. I'm just a human being.</p>
               <button>read more</button>
      </div>
      <img src={home5_image} alt="" />
      <div className='home5-inside-right'>
        <div className='home5-inside-right-inner'>
        <h1>''</h1>
        </div>
          <div className='home5-inside-right-outer'>
          <p>Learn to enjoy every minute of your <br />
             life. Be happy now. Don't wait for <br />
             something outside of yourself to make <br />
             you happy in the future. Think how really <br />
             precious is the time you have to spend, whether <br />
             it's at work or with your family. Every <br />
             minute should be enjoyed and savored.</p>
             <button>read more</button>
          </div>
        
      </div>
    </div>

    </>
  )
}

export default Home