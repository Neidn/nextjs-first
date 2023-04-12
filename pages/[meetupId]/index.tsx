import Image from "next/image";

const MeetupDetails = () => {
  return (
      <>
        <Image
            src={"https://cdn.pixabay.com/photo/2023/03/26/17/51/birds-7878846_1280.jpg"}
            alt={"This is a second meetup"}
            width={600}
            height={600}
        />
        <h1>This is a second meetup</h1>
        <address>Some address 10, 12345 Some City</address>
        <p>This is a second meetup</p>
      </>
  );
}

export default MeetupDetails;
