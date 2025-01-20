import { type SchemaTypeDefinition } from "sanity";
import { author } from "./author";
import { trip } from "./trip";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [author, trip],
};
