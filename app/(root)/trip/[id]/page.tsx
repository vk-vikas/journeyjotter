import { Skeleton } from "@/components/ui/skeleton";
import View from "@/components/View";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { TRIP_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import markdownit from "markdown-it";

export const experimental_ppr = true;
const md = markdownit();

const page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const id = (await params).id;
  const trip = await client.fetch(TRIP_BY_ID_QUERY, { id });
  console.log(trip);

  if (!trip) return notFound();

  const parsedContent = md.render(trip?.pitch || "");

  return (
    <>
      <section className="pink_container !min-h-[230px]">
        <p className="tag">{formatDate(trip?._createdAt)}</p>

        <h1 className="heading">{trip.title}</h1>
        <p className="sub-heading !max-w-5xl">{trip.description}</p>
      </section>

      <section className="section_container">
        <img
          src={trip.image}
          alt="thumbnail"
          className="w-full h-auto rounded-xl"
        />
        <div className="space-y-5 mt-10 max-w-4xl mx-auto">
          <div className="flex-between gap-5">
            <Link
              href={`/user/${trip.author?._id}`}
              className="flex gap-2 items-center mb-3"
            >
              <Image
                src={trip.author.image}
                alt="avatar"
                width={64}
                height={64}
                className="rounded-full drop-shadow-lg"
              />

              <div>
                <p className="text-20-medium">{trip.author.name}</p>
                <p className="text-16-medium !text-black-300">
                  @{trip.author.username}
                </p>
              </div>
            </Link>

            <p className="category-tag">{trip.category}</p>
          </div>

          <h3 className="text-30-bold">Pitch Details</h3>
          {parsedContent ? (
            <article
              className="prose max-w-4xl font-work-sans break-all"
              dangerouslySetInnerHTML={{ __html: parsedContent }}
            />
          ) : (
            <p className="no-result">No details provided</p>
          )}
        </div>
        <hr className="divider" />
        // todo editor
        <Suspense fallback={<Skeleton className="view_skeleton" />}>
          <View id={id} />
        </Suspense>
      </section>
    </>
  );
};

export default page;
