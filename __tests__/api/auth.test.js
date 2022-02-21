const db = require('../../db');
const seed = require('../../data/seed-initial-data');

const { valid, invalid } = require('./tests/signup');
const {
  statusCodeCheck,
  headerCheck,
  tokenCheck,
  inactiveUserCheck,
  unAuthorizedCheck,
  badRequestCheck,
  serverErrorCheck,
} = require('./tests/login');
const {
  checkAuthenticatedDelete,
  undefinedTokenCheck,
} = require('./tests/user');

beforeAll(async () => {
  await db.connect();
  await seed.deleteData();
  await seed.importData();
});

afterAll(async () => {
  await seed.deleteData();
  await db.disconnect();
});

describe('Authentication test', () => {
  describe('POST /api/v1/auth/signup', () => {
    describe('given a new user signup fields', () => {
      valid(0);
    });
    describe('given an existing user signup fields', () => {
      invalid(0);
    });
  });

  describe('POST /api/v1/auth/login', () => {
    describe('given the email and password', () => {
      statusCodeCheck(0);
      headerCheck(0);
      tokenCheck(0);
    });
    describe('given the username and password is incorrect', unAuthorizedCheck);

    describe('given the username and password is missing', badRequestCheck);

    describe('given an empty json object is sent in request', serverErrorCheck);
  });

  describe('DELETE /api/v1/users/deleteMe', () => {
    describe('given the user is active', () => {
      checkAuthenticatedDelete();
    });
  });

  describe('GET /api/v1/users/getRole', () => {
    describe('given the user is inactive', () => {
      inactiveUserCheck();
    });
    describe('given the token is missing', undefinedTokenCheck);
  });
});
