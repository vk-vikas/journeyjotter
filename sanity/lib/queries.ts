import { defineQuery } from "next-sanity";

export const TRIPS_QUERY =
  defineQuery(`*[_type == "trip" && defined(slug.current)]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, image, bio
  }, 
  views,
  description,
  category,
  image,
}`);
