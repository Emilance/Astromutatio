import React from 'react';
import YouTube from 'react-youtube';
import { useRouter } from 'next/router';
import styles from '../../styles/Video.module.css'



const YoutubeVid =()=>{
    const  router = useRouter();
    const  Id = router.query.id
    const opts = {
        height: '600',
        width: '540',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
        const onPlayerReady = (event) => {
          // access to player in all event handlers via event.target
          event.target.pauseVideo();
        }
 
    return(
         <div className={styles.vcontainer}>
                 <YouTube videoId={Id}
                 opts={opts} onReady={onPlayerReady}  />
                 <div  ></div>

        </div>
    )
}

export default YoutubeVid