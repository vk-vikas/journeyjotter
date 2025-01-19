import React from "react";
import SearchForm from "@/components/SearchForm";
import TravelCard from "@/components/TravelCard";

const page = async ({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) => {
  const query = (await searchParams).query;

  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1 },
      description: "desc",
      image:
        "https://www.onmycanvas.com/wp-content/uploads/2020/08/Butterfly-beach-goa-front-view-1024x576.jpg",
      category: "goa",
      title: "South Goa Beaches",
    },
  ];

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
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: TravelTypeCard) => (
              <TravelCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
};

export default page;
