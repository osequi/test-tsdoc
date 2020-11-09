/**
 * Defines the Pet type.
 */
export type Pet = {
  /**
   * The pet name.
   */
  name: string;
  /**
   * The pet age.
   */
  age: number;
};

/**
 * Defines the default value for Pet.
 */
const defaultProps = {
  name: "Kitty",
  age: 3,
};

/**
 * Returns pet name and age.
 */
const pet = (props?: Pet): string => {
  const { name, age } = { ...defaultProps, ...props };
  return `${name} is ${age}`;
};

export default pet;
