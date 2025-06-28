import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './Menu1.css'


gsap.registerPlugin(ScrollTrigger)

const Menu1 = () => {
  const contentRef = useRef(null)
  const imageRef = useRef(null)
 const headingRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    gsap.fromTo(
      contentRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        duration: 3.4,
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
useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (headingRef.current) {
      observer.observe(headingRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <div className="menu1" id='menu'>
      <div  ref={headingRef} className={`menu ${isVisible ? "slide-in" : ""}`}>Our Menu</div>
      <div className="container">
        <div className="content" ref={contentRef}>
          <h2 className="category">Coffee</h2>
          <div className="menu-item">
            <h3>Espresso <span className="price">$2.50</span></h3>
            <p>Rich and bold single shot of espresso.</p>
          </div>
          <div className="menu-item">
            <h3>Americano <span className="price">$3.00</span></h3>
            <p>Espresso with hot water for a smooth, robust flavor.</p>
          </div>
          <div className="menu-item">
            <h3>Latte <span className="price">$4.00</span></h3>
            <p>Espresso with steamed milk and a light layer of foam. <br /> Flavors: Vanilla, Caramel, Hazelnut, Mocha.</p>
          </div>
          <div className="menu-item">
            <h3>Cappuccino <span className="price">$4.00</span></h3>
            <p>Equal parts espresso, steamed milk, and foam.</p>
          </div>
          <div className="menu-item">
            <h3>Flat White <span className="price">$4.00</span></h3>
            <p>Silky microfoam over a double shot of espresso.</p>
          </div>
          <div className="menu-item">
            <h3>Macchiato <span className="price">$4.00</span></h3>
            <p>Espresso marked with a dollop of frothy steamed milk.</p>
          </div>
          <div className="menu-item">
            <h3>Mocha <span className="price">$4.00</span></h3>
            <p>Espresso, steamed milk, and rich chocolate syrup, topped with whipped cream.</p>
          </div>
          <div className="menu-item">
            <h3>Cold Brew <span className="price">$4.00</span></h3>
            <p>Smooth and refreshing cold-brewed coffee, served over ice.</p>
          </div>
        </div>
        <div className="image" ref={imageRef}>
          <img src='./images/latte.jpg' className='rounded-[30px]' alt="Latte" />
        </div>
      </div>
    </div>
  )
}

export default Menu1
