import { motion } from 'framer-motion';
import { cardStyle, divStyle, optionStyle, containerStyle } from './Styles';

type Props = {
    heading:string,
    paragraph:string,
    button:string
}

const container = {
    hidden: {opacity: 1, scale: 0},
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.3,
            staggerChildren: 0.5
        }
    }
}

const item = {
    hidden: {y: 200, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    },
}

const Card = ({heading, paragraph, button}:Props) => {
    return (
        <motion.div
            style={containerStyle}
            variants={container}
            initial='hidden'
            animate='visible'
        >
        {[0, 1, 2, 3].map((index) => (
            <motion.div
                style={cardStyle}
                key={index}
                className='item'
                variants={item}
            >
                <h2>{heading}</h2>
                <p>{paragraph}</p>
                <div style= {divStyle}>
                    <motion.div
                        style={optionStyle}
                        whileHover={{
                            scale: 1.1,
                            transition: {
                                type: 'spring',
                                stiffness: 400,
                                damping: 10,
                                duration: 0.1
                            },
                        }}
                        whileTap={{
                            scale: 1.3,
                            backgroundColor: 'grey',
                        }}
                    >{button}
                    </motion.div>
                </div>
            </motion.div>
        ))}

        </motion.div>
    )
}

export default Card;