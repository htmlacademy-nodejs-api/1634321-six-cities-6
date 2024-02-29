export const CreateCommentMessages = {
  text: {
    invalidFormat: 'text is required',
    lengthField: 'min length is 5, max is 2024'
  },
  rating: {
    invalidFormat: 'rating must be an integer',
    minValue: 'Minimum rating is 1',
    maxValue: 'Maximum rating is 5',
  },
  offerId: {
    invalidFormat: 'offerId field must be a valid id'
  },
  authorId: {
    invalidFormat: 'authorId field must be a valid id'
  },
} as const;
