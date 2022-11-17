import React from 'react';
import MeetupList from '../components/meetups/MeetupList';

const dummyMeetups = [
    { id: 'm1', title: 'A First Meetup', image: 'https://cdn.pixabay.com/photo/2022/10/24/18/10/street-7544046__340.jpg', address: 'Some address 5, 12345 Some City', description: 'This is a first meetup' },
    { id: 'm2', title: 'A Second Meetup', image: 'https://cdn.pixabay.com/photo/2022/11/11/16/11/lion-cathedral-7585300__340.jpg', address: 'Some address 10, 12345 Some City', description: 'This is a second meetup' },
]

const HomePage = ({ meetups }) => {
  return  <MeetupList meetups={meetups}></MeetupList>
}

// export const getServerSideProps = async (context) => {
//   const { req, res } = context;
//   return {
//     props: { meetups: dummyMeetups }
//   }
// }

export async function getStaticProps() {
  return {
    props: { meetups: dummyMeetups },
    revalidate: 3600
  };
}

export default HomePage;