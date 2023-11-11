import React, { useState } from 'react';
import { Auth } from 'aws-amplify';
import { Navigate } from 'react-router-dom';

function UserHome({User}) {
  
    const handleSignOut = async () => {
  try {
    await Auth.signOut();
    Navigate('/');  // navigate to the home screen
    return true; 
    } catch (error) {
     console.error('Error signing out: ', error);
        return false; 
    }
  };
   const processService = async () => {
        try{
            //SET UP PAYMENT HERE 
            //END PAYMENT 
            var userID = "error"; 
            Auth.currentSession()
            .then((data) => {
                //Check with Backend. 
                userID = data.userID
            }).catch(err => console.log(err));
            Navigate('/UserHome/' + userId);
        }

   }
  const [service, setService] = useState('None');
  
   
  return (
    //ADD DANTE APP
    //SCREENS 1=>2 
    //First Screen is payment and service request
    //Second screen is Service
    <div>
      <h1>Welcome to Syllubus Savior!</h1> 
      <div>
        <label>Select your Service: </label>
        <select value={service} onChange={(e) => setService(e.target.value)}>
          <option value="1"> Service 1: AI chatbot $20 per month</option>
          <option value="2"> Service 2: Simple Calender $10</option>
          <option value="3"> Service 3: Text reminders for each day or night $20 per month </option>
          <option value="12">Service 1 and 2: $25 for the first month and $18 for every month after</option>
          <option value="13">Service 1 and 3: $35 per Month </option>
          <option value="23">Service 2 and 3: $25 for the first month and $18 for every month after</option>
          <option value="123">All Three Services: $40 per month </option>
        </select>
        <button onClick={processService} />
        <button onClick={handleSignOut}>Sign Out</button>
      </div>
    </div>
  );
}

export default UserHome;