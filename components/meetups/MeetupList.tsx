import MeetupItem from "@/components/meetups/MeetupItem";

import classes from "./MeetupList.module.css";
import {MeetupListProps, MeetupData} from "@/pages";

const MeetupList = ({meetups}: MeetupListProps) => {
  return (
      <ul className={classes.list}>
        {meetups.map((meetup: MeetupData) => (
            <MeetupItem
                key={meetup.id}
                id={meetup.id}
                image={meetup.image}
                title={meetup.title}
                address={meetup.address}
            />
        ))}
      </ul>
  )
}

export default MeetupList;
