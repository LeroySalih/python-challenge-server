import { motion } from "framer-motion";
import styled from "styled-components";

const Panel = styled(motion.div)`
  width: 200px;
  height: min-content;
  padding: 1rem;
  border-radius: 1rem;
  border: silver 1px solid;
`;

const PanelVariant = {
  initial: {
    rotateX: 51,
    rotateZ: 43,
    boxShadow: "10px 10px 10px #808080"
  },
  float: {
    translateY: [0, -30, 0],
    boxShadow: [
      "10px 10px 10px #808080",
      "20px 40px 40px #808080",
      "10px 10px 10px #808080"
    ],
    transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
  },
  flat: {
    translateY: 0,
    rotateX: 0,
    rotateZ: 0
  }
};

const CodePanel = ({ hover, setHover, onClick }) => (
  <Panel
    variants={PanelVariant}
    onMouseOver={() => setHover(true)}
    onMouseOut={() => setHover(false)}
    initial="initial"
    animate={hover ? "flat" : "float"}
  >
    <CodeWindow />
    <button onClick={onClick}>Start Coding</button>
  </Panel>
);

const ItemVariant = {
  hide: { height: 20, width: 0 },
  show: (custom) => ({ width: custom, transition: { duration: 0.1 } })
};

const Bar = styled(motion.div)`
  margin-bottom: 10px;
  background-color: ${(props) => props.color};
  border-radius: 10px;
`;

const CodeWindow = () => (
  <motion.div
    variants={{}}
    initial="hide"
    transition={{ staggerChildren: 0.5 }}
    animate="show"
  >
    <Bar color="red" custom={100} variants={ItemVariant}></Bar>
    <Bar color="blue" custom={180} variants={ItemVariant}></Bar>
    <Bar color="green" custom={50} variants={ItemVariant}></Bar>
    <Bar color="green" custom={80} variants={ItemVariant}></Bar>
    <Bar color="green" custom={50} variants={ItemVariant}></Bar>
  </motion.div>
);

export default CodePanel;
