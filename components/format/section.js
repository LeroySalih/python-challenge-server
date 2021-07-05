import {motion} from 'framer-motion';
import { ItemVariant } from '.';

const Component = ({children}) => {
    return (
        <motion.div variants={ItemVariant}>
        <div className="section">
            {children}
        </div>
        <style jsx>{`
            .section {
                width: 95%;
                margin: auto;
                margin-bottom: 30px;
                border: silver 1px solid;
                padding: 30px;
                border-radius: 10px;
                background-color: white;
                box-shadow: 0px 0px 10px 10px #e0e0e0;
            }
        `}</style>
        </motion.div>
    )
}

export default Component;