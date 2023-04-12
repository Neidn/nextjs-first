import {MongoClient} from "mongodb";

import MeetupList from "@/components/meetups/MeetupList";

const MONGODB_URI: string = `${process.env.DB_HOST}meetups?retryWrites=true&w=majority`;

export type MeetupListProps = {
  meetups: MeetupData[];
}

export type MeetupData = {
  id: string;
  title: string;
  image: string;
  address: string;
  description: string;
}

const HomePage = (props: MeetupListProps) => {
  return (
      <MeetupList meetups={props.meetups}/>
  );
}

export default HomePage

/*
// SSR
export const getServerSideProps: GetServerSideProps = async (context) => {
  const req = context.req;
  const res = context.res;

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    }
  };
}
*/

// this static data may not have recent data
export const getStaticProps = async () => {
  // fetch data from an API
  const client: MongoClient = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find().toArray();

  await client.close();

  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    // data check and refresh interval
    revalidate: 10,
  };
}
