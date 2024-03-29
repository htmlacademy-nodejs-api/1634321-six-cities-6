import { User } from './user.type.js';

export enum HousingType {
  apartment = 'apartment',
  house = 'house',
  room = 'room',
  hotel = 'hotel',
}

export type HousingFeature =
  | 'Breakfast'
  | 'Air conditioning'
  | 'Laptop friendly workspace'
  | 'Baby seat'
  | 'Washer'
  | 'Towels'
  | 'Fridge';

export interface HousingLocation {
    latitude: number;
    longitude: number;
}

export type Housing = {
  title: string;
  description: string;
  postDate: Date;
  city: string;
  preview: string;
  images: string[];
  isPremium: boolean;
  isFavorite: boolean;
  rating: number;
  housingType: HousingType;
  rooms: number;
  guests: number;
  price: number;
  features: HousingFeature[];
  authorId: User;
  reviewsAmount: number;
  location: HousingLocation;
}
