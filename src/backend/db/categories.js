import { v4 as uuid } from "uuid";
import Comedy from "../../Assets/Images/Comedy.jpg";
import Sports from "../../Assets/Images/Sports.jpg";
import Podcast from "../../Assets/Images/Podcast.jpg";
import Gaming from "../../Assets/Images/Gaming.jpg";

/**
 * Category Database can be added here.
 * You can add category of your wish with different attributes
 * */

export const categories = [
  {
    _id: uuid(),
    categoryName: "Comedy",
    image:Comedy,
  },
  {
    _id: uuid(),
    categoryName: "Sports",
    image:Sports,
  },
  {
    _id: uuid(),
    categoryName: "Podcast",
    image: Podcast,
  },
  {
    _id: uuid(),
    categoryName: "Gaming",
    image: Gaming,
  }
];
