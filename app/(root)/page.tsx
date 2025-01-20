import React from "react";
import SearchForm from "@/components/SearchForm";
import TravelCard from "@/components/TravelCard";
import { client } from "@/sanity/lib/client";
import { TRIPS_QUERY } from "@/sanity/lib/queries";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;
  const posts = await client.fetch(TRIPS_QUERY);

  return (
    <>
      <section className="pink_container">
        <h1 className="heading">
          Log your perfect travel itineraries and stories
        </h1>
        <p className="sub-heading !max-w-3xl">
          Share perfect trvale guides for the world to read !
        </p>
        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : "All Trips"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: TravelTypeCard) => (
              <TravelCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No Trips found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default page;
