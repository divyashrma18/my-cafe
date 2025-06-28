import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Menu2.css'

gsap.registerPlugin(ScrollTrigger)

const Menu1 = () => {
  const contentRef = useRef(null)
  const imageRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 3.3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: contentRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )

    gsap.fromTo(
      imageRef.current,
      { opacity: 0, y: -100 }, 
      {
        opacity: 1,
        y: 0,
        duration: 3,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: imageRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
      }
    )
  }, [])

  return (
    <div className="menu1 ">
     
      <div className="container mt-[30px]">
      <div className="image2" ref={imageRef}>
          <img src='./images/chailatte3.jpg' className='rounded-[30px] h-[570px] w-[600px]' alt="Latte" />
        </div>
        <div className="content1" ref={contentRef}>
          <h2 className="category">Speciality Lattes</h2>
          <div className="menu-item">
            <h3>Matcha Latte <span className="price">$2.50</span></h3>
            <p>Ceremonial grade matcha blended with steamed milk.</p>
          </div>
          <div className="menu-item">
            <h3>Turmeric Latte <span className="price">$3.00</span></h3>
            <p>Turmeric, ginger, and cinnamon blended with steamed milk for a healthy boost.</p>
          </div>
          <div className="menu-item">
            <h3>Chai Latte <span className="price">$4.00</span></h3>
            <p>Spiced chai tea blended with steamed milk.</p>
          </div>
          <div className="menu-item">
            <h3>Honey Lavender Latte <span className="price">$4.00</span></h3>
            <p>Espresso, steamed milk, honey, and a hint of lavender.</p>
          </div>
          
          
          
          
        </div>
        
      </div>
    </div>
  )
}

export default Menu1
