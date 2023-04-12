import MeetupList from "@/components/meetups/MeetupList";

const DUMMY_MEETUPS: ({
  image: string;
  address: string;
  description: string;
  id: string;
  title: string
})[] = [
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

const HomePage = () => {
  return (
      <MeetupList meetups={DUMMY_MEETUPS}/>
  );
}

export default HomePage
