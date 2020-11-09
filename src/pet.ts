/**
 * Defines the Pet type.
 *
 * **Important! This is markdown!!**
 *
 * Example:
 * ```js
 * const test = Test()
 * ```
 *
 * @category Types
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
const defaultPet = {
  name: "Kitty",
  age: 3,
};

/**
 * Returns pet name and age.
 *
 * @category Functions
 */
const pet = (props?: Pet): string => {
  const { name, age } = { ...defaultPet, ...props };
  return `${name} is ${age}`;
};

export default pet;
