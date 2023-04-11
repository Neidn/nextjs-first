import MeetupItem, {MeetupProps} from "@/components/meetups/MeetupItem";

import classes from "./MeetupList.module.css";

const MeetupList = (props: MeetupProps) => {
  return (
      <ul className={classes.list}>
        {props.meetups.map((meetup) => (
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
