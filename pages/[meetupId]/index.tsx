import MeetupDetail from "@/components/meetups/MeetupDetail";
import {GetStaticProps} from "next";

const MeetupDetails = () => {
  return (
      <>
        <MeetupDetail
            image={"https://cdn.pixabay.com/photo/2023/04/06/19/11/flower-7904985_1280.jpg"}
            title={"Korea"}
            address={"Seoul"}
            description={"Korea is a country in East Asia, occupying the southern half of the Korean Peninsula and the northern half of the Korean Strait."}
        />
      </>
  );
}

export default MeetupDetails;

// pre generated paths
export const getStaticPaths = async () => {
  return {
    fallback: false,
    paths: [
      {params: {meetupId: "m1"}},
      {params: {meetupId: "m2"}},
    ]
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  if (!context.params) {
    return {
      notFound: true,
    }
  }

  // fetch data from an API
  const meetupId = context.params.meetupId;

  return {
    props: {
      meetupData: {
        id: meetupId,
        image: "https://cdn.pixabay.com/photo/2023/04/06/19/11/flower-7904985_1280.jpg",
        title: "Korea",
        address: "Seoul",
        description: "Korea is a country in East Asia, occupying the southern half of the Korean Peninsula and the northern half of the Korean Strait."
      },
    }
  }
}
