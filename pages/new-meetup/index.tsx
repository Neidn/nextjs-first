import NewMeetupForm from "@/components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const addMeetupHandler = (meetupData: any) => {
    console.log(meetupData);
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
