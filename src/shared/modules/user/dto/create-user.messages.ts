export const CreateUserMessages = {
  name: {
    invalidFormat: 'name is required',
    lengthField: 'min length is 1, max is 15',
  },
  email: {
    invalidFormat: 'email must be a valid address'
  },
  avatarPath: {
    invalidFormat: 'avatar is required',
  },
  password: {
    invalidFormat: 'password is required',
    lengthField: 'min length for password is 6, max is 12'
  },
  userStatus: {
    invalid: 'userStatus must be a pro or regular'
  }
};
