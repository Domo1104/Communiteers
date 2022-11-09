import { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import EventCard from './EventCard'

export default function SelectEvent({eventListing}){
    const { title } = useParams()
    const [currentEvent, setCurrentEvent]= useState({})
    useEffect(()=>{
        const selectedEvent = eventListing.filter((event)=>{
            return event.title.toLowerCase() === title.toLowerCase()
        })
        setCurrentEvent(selectedEvent[0])
    },[title])
    function joinEvent(){
        //signup
    }
  return (
    <div>
        {<EventCard event={currentEvent}/>}
        <button onClick={joinEvent}>Join Event</button>
    </div>
  )
}
