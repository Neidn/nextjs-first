import Image from "next/image";
import Card from "@/components/ui/Card";

import classes from "./MeetupItem.module.css";

const MeetupItem = (props: MeetupItem) => {
  return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <Image src={props.image} alt={props.title}/>
          </div>
          <div className={classes.content}>
            <h3>{props.title}</h3>
            <address>{props.address}</address>
          </div>
          <div className={classes.actions}>
            <button>Show Details</button>
          </div>
        </Card>
      </li>
  );
}

export default MeetupItem;

export interface MeetupProps {
  meetups: MeetupItem[];
  onAddMeetup: (meetupData: {
    image: string;
    address: string;
    description: string;
    title: string;
  }) => void;
}

export interface MeetupItem {
  key: string;
  id: string;
  image: string;
  title: string;
  address: string;
}
