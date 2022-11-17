import React from 'react';
import NewMeetupForm from '../../components/meetups/NewMeetupForm';

const NewMeetupPage = () => {

    const addMetupHandler = async (enteredMeetupData) => {
        const response = await fetch(' /api/new-meetup', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(enteredMeetupData) });
        const data = await response.json();
        console.log(data);
    }
  return <NewMeetupForm onAddMeetup={addMetupHandler}></NewMeetupForm>
}

export default NewMeetupPage;