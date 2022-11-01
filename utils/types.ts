export type EngineeringDep =
  | "mechanical"
  | "electrical"
  | "agricultural"
  | "mining"
  | "civil"
  | "oil"
  | "survey"
  | "chemical";

export type Batch = "016" | "017" | "018" | "019" | "020" | "021";
export type Day = "sunday" | "monday" | "tuesday" | "wednesday" | "thursday";
export type Gender = "male" | "female";

export type SearchItemPost = {
  __typename?: "Post" | undefined;
  id: number;
  createdAt: string;
  updatedAt: string;
  imageId: string;
  carModel: string;
  numberOfSeats: number;
  isAcWorking: boolean;
  locations: string;
  price: number;
  departure: string;
  arrival: string;
  days: string;
  user: {
    name: string;
    dep: string;
    batch: string;
    address: string;
  };
};
