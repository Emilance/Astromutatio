
import Header from "../../components/Header"
import styles from '../../styles/Video.module.css'
import Image from "next/image";
import Footer from "../../components/Footer";

import Link from "next/link";
import Menu from "../../components/Menu";

const videoContent =[
    {
        title:"How stars are formed",
        img: '/how1.jpg',
        link:"/video/iaCg8THvgRU"
    },

    {
        title:"Introduction to variability in stars",
        img: '/how2.jpg',
        link: "/video/r13ygxgXJAM"
    },
    {
        title:"An high level overview of what variable stars are",
        img: '/how2.jpg',
        link: "/video/GKctq20u8SI"
    },
    {
        title:"what are cepheid variable",
        img: '/astroMutatio.jpg',
        link: "/video/QSttRD3nU9g"
    },
    {
        title:"What  are eclipsing variables ?",
        img: '/eclipsing.png',
        link: "/video/meeSpRGk74o"
    },
    {
        title:"What  are cataclysmic variables ?",
        img: '/cataclysmic.png',
        link: "/video/hWxsl9ZRgWM"
    },
    {
        title:"What  are pulsating variables ?s",
        img: '/pulsating.png',
        link: "/video/C4lRmBEdrIc"
    },
    {
        title:"What  are stars ? how are they form  and how will they be destroyed",
        img: '/astroMutatio.jpg',
        link: "/video/"
    }
]

const Video =()=>{
    return(
        <div  className={styles.container}>
           <Header/>
          
           <div className={styles.hbackgroud}></div>
           <h1> Learn here with video</h1>
           <div className={styles.searchCon}>
                <input type="text"  placeholder="Type video title here"  />
                 <button>Search</button>
           </div>
           <div className={styles.videoCon}>

            {videoContent.map((data, i) => {
                return(
                <Link key={i} href={data.link}>

                 <div  className={styles.vidCard}>
                     <div className={styles.cardImg}>
                        <Image src={data.img}   alt=""  layout="fill"/>
                     </div>
                     <h1>{data.title}</h1>
                     <button>Watch Now</button>
                 </div>
                </Link>

                )
            })}
           
           </div>
           <Menu/>
            <Footer/>
        </div>
    )
}

export default Video