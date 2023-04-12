import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS: (MeetupData)[] = [
  {
    id: "m1",
    title: "This is a first meetup",
    image:
        "https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg",
    address: "Some address 5, 12345 Some City",
    description: "This is a first meetup",
  },
  {
    id: "m2",
    title: "This is a second meetup",
    image:
        "https://cdn.pixabay.com/photo/2022/04/05/14/13/flower-7113735_1280.jpg",
    address: "Some address 10, 12345 Some City",
    description: "This is a second meetup",
  },
];

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
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
    // data check and refresh interval
    revalidate: 10,
  };
}
