import {
  Housing,
  HousingType,
  HousingFeature,
  HousingLocation,
  User,
  UserStatus,
} from '../types/index.js';

function parseUser(authorId: string): User {
  const [name, email, avatarPath, password, status] = authorId.split(';');

  return {
    name,
    email,
    avatarPath,
    password,
    userStatus: status as UserStatus,
  };
}

function parseLocation(location: string): HousingLocation {
  const [latitude, longitude] = location.split(' ');

  return {
    latitude: Number(latitude),
    longitude: Number(longitude),
  };
}

export function createOffer(offerData: string): Housing {
  const [
    title,
    description,
    postDate,
    city,
    preview,
    images,
    isPremium,
    isFavorite,
    rating,
    housingType,
    rooms,
    guests,
    price,
    features,
    authorId,
    reviewsAmount,
    location
  ] = offerData.replace('\n', '').split('\t');


  return {
    title,
    description,
    postDate: new Date(postDate),
    city,
    preview,
    images: images.split(';'),
    isPremium: isPremium === 'true',
    isFavorite: isFavorite === 'true',
    rating: Number(rating),
    housingType: housingType as HousingType,
    rooms: Number(rooms),
    guests: Number(guests),
    price: Number(price),
    features: features.split(',') as HousingFeature[],
    authorId: parseUser(authorId),
    reviewsAmount: Number(reviewsAmount),
    location: parseLocation(location)
  };
}
