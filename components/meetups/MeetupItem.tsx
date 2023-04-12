import {useRouter} from "next/router";
import Image from "next/image";

import Card from "@/components/ui/Card";

import classes from "./MeetupItem.module.css";

export type MeetupItem = {
  key: string;
  id: string;
  image: string;
  title: string;
  address: string;
}

const MeetupItem = ({id, image, title, address}: MeetupItem) => {
  const router = useRouter();

  const showDetailsHandler = async () => {
    await router.push("/" + id);
  }

  return (
      <li className={classes.item}>
        <Card>
          <div className={classes.image}>
            <Image src={image} alt={title} width={600} height={600}/>
          </div>
          <div className={classes.content}>
            <h3>{title}</h3>
            <address>{address}</address>
          </div>
          <div className={classes.actions}>
            <button type={"button"} onClick={showDetailsHandler}>Show Details</button>
          </div>
        </Card>
      </li>
  );
}

export default MeetupItem;
