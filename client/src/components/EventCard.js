function EventCard({event}) {
    return (
        <div className="event-cards">
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