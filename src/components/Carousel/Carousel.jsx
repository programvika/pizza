import React, { useEffect, useRef, useState } from 'react'
import { motion } from "framer-motion"
import styles from './Carousel.module.scss'
import images from './images/images'

const Carousel = () => {
    const [width, setWidth] = useState(0)
    const carousel = useRef()

    useEffect(() => {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
    }, [])

    return (
        <motion.div whileTap={{cursor: "grabbing"}} ref={carousel} className={styles.carousel}>
            <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className={styles.inner_carousel}>
                {images.map(image => {
                    return(
                        <motion.div key={image} className={styles.item}>
                            <img src={image} alt="" />
                        </motion.div>
                    )
                })}
            </motion.div>
        </motion.div>
    )
}

export default Carousel