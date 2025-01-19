import React from "react";
import SearchForm from "@/components/SearchForm";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

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
    </>
  );
};

export default page;
