import styles from "../styles/Featured.module.css";
import Image from "next/image";
import { useState } from "react";
import { BiRightArrow, BiLeftArrow } from "react-icons/bi";


const Featured = () => {
    const [index, setIndex] = useState(0)

    const images = [
      "/img/senpai1.jpg",
      "/img/senpai2.jpg",
      "/img/senpai3.jpg",
      "/img/senpai4.jpg",
    ];

    const handleArrow = (direction) => {
        if(direction === "1"){
            setIndex(index !== 0 ? index - 1 : 2)
        }
        if(direction === "r"){
            setIndex(index !== 3 ? index + 1 : 0)
        }
    }


  return (
    <div className={styles.container}>
        <div className={styles.arrowContainer} style={{left:0}} onClick={() => handleArrow("1")}>
        {/* <Image src="/img/arrow.png" alt="" layout='fill' objectFit='contain'/> */}
        <BiLeftArrow className={styles.arrow} />
        </div>
        <div className={styles.wrapper} style={{transform:`translateX(${-100*index}vw)`}}>
        {images.map((img, i) => (
            <div className={styles.imgContainer} key={i}>
               <Image className={styles.images} src={img}  alt="" layout='fill' objectFit='contain' />               
            </div>
             ))}
        </div>
        <div className={styles.arrowContainer} style={{right:0}} onClick={() => handleArrow("r")}>
        {/* <Image src="/img/arrow2.png" alt="" layout='fill' objectFit='contain'/> */}
        <BiRightArrow className={styles.arrow2}/>
        </div>
    </div>
  )
}

export default Featured