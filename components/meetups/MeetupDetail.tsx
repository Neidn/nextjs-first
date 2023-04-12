import Image from "next/image";

import classes from "./MeetupDetail.module.css";

export type MeetupDetail = {
  image: string;
  address: string;
  description: string;
  title: string;
}

const MeetupDetail = (props: MeetupDetail) => {
  return (
      <section className={classes.detail}>
        <Image
            src={props.image}
            alt={props.title}
            width={600}
            height={600}
        />
        <h1>{props.title}</h1>
        <address>{props.address}</address>
        <p>{props.description}</p>
      </section>
  );
}

export default MeetupDetail
