import React, { useEffect, useRef } from 'react';
import './Welovecoffee.css'
import { BsFillCupHotFill } from "react-icons/bs";

const Welovecoffee = () => {

 
 const buttonRef = useRef(null);
 useEffect(() => {
  
 buttonRef.current.addEventListener("mouseenter", () => {
     gsap.fromTo(buttonRef.current, 
       { x: 0, rotate: 0 }, 
       { x: 2, rotate: 2, yoyo: true, repeat: 5, duration: 0.1 }
     );
   });

 }, []);

  return (
    <div className="main-coffee bg-amber-300 h-[900px]">
<div className='coffee '>
    <div>
        <div className='loveimg'>
        <img src='/images/love.jpg' className='h-[630px] w-[500px] rounded-[30px]' />
        </div>
        
    </div>
    <div className='right-love'>
           <div className="logo mb-[100px]">
                     <p>DVicious</p>
                     <BsFillCupHotFill />
                     <p>Brew</p>
                   </div>
             <h3 className='font-semibold text-[35px]'>We Love Coffee!!!</h3> 
             <div className='flex flex-col gap-[20px]'>
                <p className='w-[550px]'>DVicious Brew is a cozy and welcoming spot in the heart of the city, offering a delightful selection of specialty coffees, fresh pastries, and wholesome meals. </p>
                <p>
                Join us for a moment of relaxation and indulgence
                </p>
                </div> 
                <div className="location flex flex-col gap-[22px]">
                    <h3>Location:</h3>
                    <div className='flex flex-col gap-[8px]'>
                        <p>DVicious Brew</p>
                        <p>123 Coffee Lane</p>
                        <p>Latte City , LC 12345</p>
                    </div>
                    <button  ref={buttonRef}className='w-[180px] h-[50px] bg-black text-white rounded-[30px] text-[18px] cursor-pointer pr-[10px]'>
                        Explore Menu
                    </button>
                    </div>    
        </div>

</div>
</div>
  )
}

export default Welovecoffee