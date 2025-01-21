import { defineQuery } from "next-sanity";

// export const TRIPS_QUERY =
//   defineQuery(`*[_type == "trip" && defined(slug.current)]{
//   _id,
//   title,
//   slug,
//   _createdAt,
//   author -> {
//     _id, name, image, bio
//   },
//   views,
//   description,
//   category,
//   image,
// }`);

export const TRIPS_QUERY =
  defineQuery(`*[_type == "trip" && defined(slug.current) && !defined($search) || title match $search || category match $search || author->name match $search] | order(_createdAt desc) {
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
