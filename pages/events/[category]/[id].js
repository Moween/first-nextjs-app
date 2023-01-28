import SingleEvent from "../../../src/components/events/single-event";

const EventPage = ({ data }) => <SingleEvent event={data} />;

export default EventPage;

export async function getStaticPaths() {
  const data = await import("../../../data/data.json");
  const allEvents = data.allEvents;
  const allPaths = allEvents.map(path =>({
        params: {
            category: path.city,
            id: path.id
        }
    }))

    return {
        paths: allPaths,
        fallback: false
    }
}

export async function getStaticProps(context) {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.id;

  
  const event = allEvents.find(event => event.id === id);
  console.log({ context, id, event})
  return {
    props: {
        data: event,
    },
  };
}