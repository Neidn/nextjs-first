import Image from "next/image";

import classes from "./MeetupDetail.module.css";

import {MeetupData} from "@/components/meetups/MeetupItem";

const MeetupDetail = (props: MeetupData) => {
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
