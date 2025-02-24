import React from "react";
import { client } from "@/sanity/lib/client";
import { TRIPS_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import TravelCard, { TravelTypeCard } from "./TravelCard";

const UserTrips = async ({ id }: { id: string }) => {
  const trips = await client.fetch(TRIPS_BY_AUTHOR_QUERY, { id });

  return (
    <>
      {trips.length > 0 ? (
        trips.map((trips: TravelTypeCard) => (
          <TravelCard key={trips._id} post={trips} />
        ))
      ) : (
        <p className="no-result">No posts yet</p>
      )}
    </>
  );
};
export default UserTrips;
