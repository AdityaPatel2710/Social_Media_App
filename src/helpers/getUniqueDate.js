import { faker } from '@faker-js/faker';

/**
 * Returns a repeatable “random” Date for any given numeric ID.
 * @param {number|string} id     —  The seed: use the same id to get the same date
 * @param {string} [from='2020-01-01'] — lower bound (ISO format)
 * @param {string} [to='2023-12-31']   — upper bound (ISO format)
 */

function getUniqueDateForId(id) {
  let from = '2020-01-01';
  let to = '2025-6-30';
  faker.seed(Number(id));

  return faker.date.between({from, to}).toLocaleString("en-IN", {
                                                year:   "numeric",
                                                month:  "short",
                                                day:    "numeric",
                                            }
                                    );
}


export default getUniqueDateForId;
