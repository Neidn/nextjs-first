import MeetupDetail from "@/components/meetups/MeetupDetail";

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
