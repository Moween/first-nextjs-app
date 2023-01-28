import CatEvent from "../../../src/components/events/CatEvent";

const EventsCatPage = ({ data, pageName }) => (
  <CatEvent data={data} pageName={pageName} />
);

export default EventsCatPage;

export const getStaticPaths = async () => {
  const { events_categories } = await import("../../../data/data.json");

  return {
    paths: events_categories.map((event) => ({
      params: {
        category: event.id.toString(),
      },
    })),
    fallback: false, // our page will only render for the paths that we have
  };
};
export const getStaticProps = async (context) => {
  const { allEvents } = await import("../../../data/data.json");
  const id = context?.params.category;
  const data = allEvents.filter((event) => event.city === id);
  console.log({ data });
  return {
    props: {
      data,
      pageName: id,
    },
  };
};
