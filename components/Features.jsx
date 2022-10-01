import styles from '../styles/Features.module.css'
import FeatureCard from './FeatureCarousel';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill }  from 'react-icons/bs'
import React, { useRef } from 'react';


const  features = [
    {
        image: '/vid1.png',
        title:'Learn with video',
        subtitle : 'Learn the basics astronomy with a well structured video',
        overlayText :'Go through our video lessons on astronomy',
        link: "/video"
    },
    {
        image:'/3dvisual.png',
        title: 'Visualize variation in 3D',
        subtitle: 'Visualize variable stars in 3 dimension',
        overlayText: "Click to visualize the change in brigthness in 3D",
        link: "/3d"
    },
    {
        image:'/lightcurve1.png',
        title: "Stars lightcurve",
        subtitle: "graphs that show the brightness of  star over a period of time",
        overlayText:"graphical representation of stars variabilities ",
        link: "/lightcurve"
    },
    {
        image:'/universe.png',
        title: "Today's Night Sky",
        subtitle: "what you should know about  today's night sky",
        overlayText:"the variabiity of today's night",
        link: "/atronomypics"
    },
    {
        image:'/quiz.jpg',
        title: "Ready to upgrade your rank?",
        subtitle: "Take a quiz to upgrade your rank on whySpace ",
        overlayText: "level  up !!!",
        link: "quiz/d"
    }
]



const Features = () => {
const carouselRef = useRef()



      const scrollHandler= (direction)=>{
        if(typeof window !== "undefined"){
        var TestCon = document.getElementById("caro")
        if(direction =="left"){
            TestCon.scrollLeft -= 200
        }else if(direction == "right"){
        var TestCon = document.getElementById("caro")
        TestCon.scrollLeft += 200
        }
      }
  }
    return ( 
           <div className={styles.container}>
            <h1>LEARNING FEATURES </h1>
            <div onClick={() => scrollHandler("left")} className={styles.leftArrow} >
              <BsFillArrowLeftCircleFill  size="30" />
            </div>
            <div onClick={() => scrollHandler("right")} className={styles.rightArrow} >
               <BsFillArrowRightCircleFill  size="30"/>
            </div>
            <div id="caro" className={styles.extCarouselCon}>

            <div   ref={carouselRef}   className={styles.carouselCon}>
                 {features.map((data, i) => {
                    return(
                        <FeatureCard  key={i} data={data} />
                    )
                 })}

            </div>

            </div>

           </div>
     );
}
 
export default Features;