const SERVICE_SUCESSFULL = { type: null, message: '' };
const UNSUCCESSFUL_SERVICE = { type: 'SERVER_ERROR', message: 'Unexpected error' };
const POST_DOES_NOT_EXISTS = { type: 'NOT_FOUND', message: 'Post does not exist' };
const UNAUTHORIZED = { type: 'UNAUTHORIZED', message: 'Unauthorized user' };

module.exports = {
  SERVICE_SUCESSFULL,
  UNSUCCESSFUL_SERVICE,
  POST_DOES_NOT_EXISTS,
  UNAUTHORIZED,
};