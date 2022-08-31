/*
 * Lecture #3 - Topic 2: Changing parent state
 *
 * You can change a Parent component's state by calling its function from a Child component,
 * as long as you passed the function as a prop from the Parent component to the Child component,
 * and as long as there is some code that would change the Parent component's state in the function.
 */

function Child( {hamster, handleClick} ){
    return (
        <>
            <img src={hamster.image}></img>
            <h2>{hamster.name}</h2>
            <h3>{hamster.occupation}</h3>
            <button onClick={handleClick}>Click to get a random hamster!</button>
        </>
    )
}

export default Child;