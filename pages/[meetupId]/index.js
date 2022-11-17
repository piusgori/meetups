import MeetupDetail from "../../components/meetups/MeetupDetail";
const meetup = { id: 'm1', title: 'A First Meetup', image: 'https://cdn.pixabay.com/photo/2022/10/24/18/10/street-7544046__340.jpg', address: 'Some address 5, 12345 Some City', description: 'This is a first meetup' }

const MeetupDetails = ({ meetup }) => {
  return (
    <MeetupDetail meetup={meetup}></MeetupDetail>
  )
}

export const getStaticPaths = async () => {
    return {fallback: false ,  paths: [ { params: { meetupId: 'm1' } }, { params: { meetupId: 'm2' } } ] }
}

export const getStaticProps = async (context) => {
    const meetupId = context.params.meetupId;
    console.log(meetupId);
    return { props: { meetup:  meetup } };
}

export default MeetupDetails; 