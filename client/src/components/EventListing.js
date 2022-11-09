import EventCard from "./EventCard";

function EventListing({ eventListing, setEventListing }) {
console.log(eventListing);
    return (
        <div>
            <div className="event-listing">
                {eventListing.map((event) => {
                    return (
                        <div>
                            <EventCard event={event}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )

}

export default EventListing