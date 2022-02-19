
import { useRef, useState} from 'react';
import styles from './styles.module.css';
import videoC  from '../../../assets/test.mp4';

//const SRC = "https://v16-webapp.tiktok.com/fd4b573d02a0d285c814ce07606ad60c/6208cedb/video/tos/useast2a/tos-useast2a-pve-0068/f22b868248f0485e97e87aba54719a3e/?a=1988&br=3302&bt=1651&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3ETnz7Thzml6DXq&l=2022021303263601022307604224EA04B7&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2RtO2k6Zmp2OTMzNzczM0ApMzQ5PDVnaTw8NzQ3NzVlaWdhbGBycjRnMC9gLS1kMTZzc2MuM2BiXmA0YGEuLl8xLmA6Yw%3D%3D&vl=&vr=";
export default function VideoPlayer() {

    const [playing, setPlaying] = useState(false)
    const video = useRef()

    const handlePlay = () => {
        if(playing){
            video.current.pause()
        }
        else {
            video.current.play()
        }
        
        setPlaying(!playing)
    }

    return(
       <div>
            <video 
            className={styles.video} 
            //src={SRC} 
            controls={false}
            ref={video}
            >
                <source src={videoC} type="video/mp4"/>
            </video>
        <button className={styles.player} onClick={handlePlay} />
       </div>
    )
}