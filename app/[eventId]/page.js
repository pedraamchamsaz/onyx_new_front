import axios from "axios";

export default async function Event({ params }) {
  const getEvent = async (id) => {
    const response = await axios.get(`http://localhost:3001/events/${id}`);
    return response.data
  };
  const event = await getEvent(params.eventId);
  console.log(event)

  return (
    <div>
      <h1>{event.name}</h1>
      <p>{event.country}</p>
    </div>
  );
}
