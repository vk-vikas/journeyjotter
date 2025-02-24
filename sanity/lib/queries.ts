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

export const TRIP_BY_ID_QUERY =
  defineQuery(`*[_type == "trip" && _id == $id][0]{
  _id, 
  title, 
  slug,
  _createdAt,
  author -> {
    _id, name, username, image, bio
  }, 
  views,
  description,
  category,
  image,
  pitch,
}`);

export const TRIP_VIEWS_QUERY = defineQuery(`
    *[_type == "trip" && _id == $id][0]{
        _id, views
    }
`);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(`
    *[_type == "author" && id == $id][0]{
        _id,
        id,
        name,
        username,
        email,
        image,
        bio
    }
    `);

export const AUTHOR_BY_ID_QUERY = defineQuery(`
      *[_type == "author" && _id == $id][0]{
          _id,
          id,
          name,
          username,
          email,
          image,
          bio
      }
    `);

export const TRIPS_BY_AUTHOR_QUERY =
  defineQuery(`*[_type == "trip" && author._ref == $id] | order(_createdAt desc) {
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
