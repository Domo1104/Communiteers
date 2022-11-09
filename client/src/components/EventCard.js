import {useHistory} from 'react-router-dom'
function EventCard({event}) {
    console.log(event)
    const history = useHistory()
    function selectEvent(title) {
        console.log(title);
        history.push(`/events/${title}`)
    }

    return (
        <div onClick={() => selectEvent(event.title)} className="event-cards">
            <h1 className="event-title"> {event.title} </h1>
            <p className="event-start-date-time"> Start: {event.start_date_time} </p>
            <p className="event-end-date-time"> End: {event.end_date_time} </p>
            <p className="event-location"> Location: {event.location} </p>
            <p className="event-category"> Category: {event.category} </p>
            <p className="event-description"> Description: {event.description} </p>
        </div>
    )
}

export default EventCard