import { useState } from 'react'
import Child from './Child'

/*
 * Lecture #3 - Topic 1: Callback functions as props
 *
 * You can pass callback functions as props from a Parent component to a Child component
 */

function Parent(){

    const hamsters = [
        {
          id: 1,
          name: "Mark Hamsterberg",
          occupation: "CEO",
          image: "https://media.sciencephoto.com/c0/15/32/93/c0153293-800px-wm.jpg"
        },
        {
          id: 2,
          name: "Amy",
          occupation: "Project Manager",
          image: "https://media.istockphoto.com/photos/business-hamster-picture-id166548470?k=20&m=166548470&s=170667a&w=0&h=ItGX4aHUCRs68sihtrfq89QpNfgNUPthnWKmRm3ESrk="
        },
        {
          id: 3,
          name: "Hammy",
          occupation: "Software Engineering Instructor",
          image: "https://media.istockphoto.com/photos/cute-syrian-hamster-working-from-home-on-a-laptop-picture-id1344480939?k=20&m=1344480939&s=612x612&w=0&h=PlOpoqk9zcX_cEKk7c7XR9TfER_d44W3PMfz_uVK6o8="
        },
        {
          id: 4,
          name: "Kammy",
          occupation: "Software Engineering Lecturer",
          image: "https://i.pinimg.com/736x/e5/ed/4e/e5ed4e8bb650e01edfad7ef6f32e5591.jpg"
        },
        {
          id: 5,
          name: "Sammy",
          occupation: "IT Support",
          image: "https://i.pinimg.com/236x/6d/fc/e8/6dfce8d7ca240ee1d5e73029c832eff9--hamsters.jpg"
        },
        {
          id: 6,
          name: "Tammy",
          occupation: "Recruiter",
          image: "https://i.pinimg.com/originals/00/5e/13/005e13e9636b4739429ed8cf195c69b4.jpg"
        }
    ]

    const [hamster, setHamster] = useState(hamsters[0])

    function setRandomHamster(){
        let randomNumber = Math.floor(Math.random() * 6);

        while(randomNumber === (hamster.id - 1)){
            randomNumber = Math.floor(Math.random() * 6);
        }

        setHamster(hamsters[randomNumber]);
    }

    /* Refactor this code - Put the <div> along with the <img> <h2> <h3> and <button> elements in the Child component.
     * Your app should still be working fine as it does with the elements in the Parent component.
     */

    return (
        <div>
            <img src={hamster.image}></img>
            <h2>{hamster.name}</h2>
            <h3>{hamster.occupation}</h3>
            <button onClick={setRandomHamster}>Click to get a random hamster!</button>
        </div>
    );
}

export default Parent;