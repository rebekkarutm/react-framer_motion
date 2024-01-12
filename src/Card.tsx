import { motion } from 'framer-motion';
import { cardStyle, divStyle, btnStyle, containerStyle } from './Styles';

//making props so I can have the heading, paragraph, and button say different things (declared in app.tsx)
type Props = {
    heading:string,
    paragraph:string,
    button:string
}

//making a container to stagger the movement of the cards
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

//the cards being hidden until they've moved into place
const item = {
    hidden: {y: 200, opacity: 0},
    visible: {
        y: 0,
        opacity: 1
    },
}

//creating the cards wrapped in motion divs, styling and mapping through them (to make the animation staggered)
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
                        style={btnStyle}
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