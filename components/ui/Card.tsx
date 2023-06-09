import {PropsWithChildren} from "react";

import classes from "./Card.module.css";


const Card = ({children}: PropsWithChildren) => {

  return <div className={classes.card}>{children}</div>;
}

export default Card;
