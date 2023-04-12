import {MongoClient, ObjectId} from "mongodb";

import MeetupDetail, {MeetupDetailProps} from "@/components/meetups/MeetupDetailProps";
import {GetStaticPaths, GetStaticProps} from "next";

const MeetupDetails = ({image, title, address, description}: MeetupDetailProps) => {
  return (
      <>
        <MeetupDetail
            image={image}
            title={title}
            address={address}
            description={description}
        />
      </>
  );
}

export default MeetupDetails;

const MONGODB_URI: string = `${process.env.DB_HOST}meetups?retryWrites=true&w=majority`;

// pre generated paths
export const getStaticPaths: GetStaticPaths = async () => {
  const client: MongoClient = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');

  const meetups = await meetupsCollection.find({}, {
    projection: {
      _id: 1,
    }
  }).toArray();

  await client.close();

  return {
    fallback: false,
    paths: meetups.map(meetup => ({
      params: {
        meetupId: meetup._id.toString(),
      }
    }))
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    }
  }

  if (!context.params.meetupId || Array.isArray(context.params.meetupId)) {
    return {
      notFound: true,
    }
  }

  // fetch data from an API
  const meetupId = new ObjectId(context.params.meetupId);


  const client: MongoClient = await MongoClient.connect(MONGODB_URI);
  const db = client.db();

  const meetupsCollection = db.collection('meetups');


  const selectedMeetup = await meetupsCollection.findOne({
    _id: meetupId,
  });

  console.log(selectedMeetup);
  await client.close();

  return {
    props: {
      meetupData: selectedMeetup,
    }
  }
}
