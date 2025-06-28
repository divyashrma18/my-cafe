import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Menu3.css'

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
     
      <div className="container2 ">
      
        <div className="content2" ref={contentRef}>
          <h2 className="category">Tea & Other Beverages</h2>
          <div className="menu-item">
            <h3>Tea <span className="price">$2.50</span></h3>
            <p>Selection of black, green, and herbal teas.</p>
          </div>
          <div className="menu-item">
            <h3>Hot Chocolate <span className="price">$3.00</span></h3>
            <p>Rich and creamy hot chocolate, topped with whipped cream.</p>
          </div>
          <div className="menu-item">
            <h3>Golden Milk <span className="price">$4.00</span></h3>
            <p>Turmeric, ginger, and honey blended with steamed milk.</p>
          </div>
          <div className="menu-item">
            <h3>Iced Tea <span className="price">$4.00</span></h3>
            <p>Freshly brewed and chilled, served over ice.</p>
          </div>
          
          
          
          
        </div>
        <div className="image2" ref={imageRef}>
          <img src='./images/hot2.jpg' className='rounded-[30px] h-[590px] w-[570px]' alt="Latte" />
        </div>
      </div>
    </div>
  )
}

export default Menu1
