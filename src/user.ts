/**
 * Defines the User type.
 */
export type User = {
  /**
   * The user name.
   */
  name: string;
  /**
   * The user age.
   */
  age: number;
};

/**
 * Defines the default value for User.
 */
const defaultUser = {
  name: "Jo",
  age: 33,
};

/**
 * Returns user name and age.
 */
const user = (props?: User): string => {
  const { name, age } = { ...defaultUser, ...props };
  return `${name} is ${age}`;
};

export default user;
