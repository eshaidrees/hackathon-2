import { groq } from "next-sanity";

export const allProducts = groq`*[_type == "product"]`
export const eightProducts = groq`*[_type == "product"][0..7]`