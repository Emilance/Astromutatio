import React from 'react';
import YouTube from 'react-youtube';
import { useRouter } from 'next/router';
import styles from '../../styles/Video.module.css'
import Link from 'next/link';
import {MdKeyboardBackspace} from 'react-icons/md'



const YoutubeVid =()=>{
    const  router = useRouter();
    const  Id = router.query.id
    const opts = {
        height: '100%',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const style={
        width: '100%',
        position: 'absolute',
        height:"100vh"

      }
        const onPlayerReady = (event) => {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
 
    return(
         <div className={styles.vcontainer}>
             <Link href="/video">
                <a>
                  <div className={styles.backButton}>
                     <MdKeyboardBackspace size="20"/>
                     <span>back</span>
                  </div>
                </a>
          </Link>
                 <YouTube videoId={Id}
                 style={style}
                
                 opts={opts} onReady={onPlayerReady}  />
              

        </div>
    )
}

export default YoutubeVid