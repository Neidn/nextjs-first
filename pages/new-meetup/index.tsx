import {useRouter} from "next/router";

import NewMeetupForm from "@/components/meetups/NewMeetupForm";
import {MeetupDetailProps} from "@/components/meetups/MeetupDetailProps";

const NewMeetupPage = () => {
  const router = useRouter();

  const addMeetupHandler = async (meetupData: MeetupDetailProps) => {
    const response = await fetch(
        '/api/new-meetup',
        {
          method: 'POST',
          body: JSON.stringify(meetupData),
          headers: {
            'Content-Type': 'application/json'
          },
        }
    );
    await response.json();

    await router.push('/');
  }

  return <NewMeetupForm onAddMeetup={addMeetupHandler}/>;
}

export default NewMeetupPage;
