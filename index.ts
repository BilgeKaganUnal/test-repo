import { UserType } from "./types";

// This will cause a type error due to missing return type
function processUser(user: UserType) {
  // ESLint error: missing return type
  const { firstName, lastName } = user;

  // This will cause a lint error (unused variable)
  const fullName = `${firstName} ${lastName}`;

  // This will cause a type error (returning number when void is expected)
  return 42;
}

// This will cause a type error (missing required property)
const invalidUser: UserType = {
  firstName: "John",
  // lastName is missing
};

processUser(invalidUser);
