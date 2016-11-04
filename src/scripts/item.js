/**
 * @typedef {!{id: number, completed: boolean, title: string}}
 */
export let Item;

/**
 * @typedef {!Array<Item>}
 */
export let ItemList;

/**
 * Enum containing a known-empty record type, matching only empty records unlike Object.
 *
 * @enum {Object}
 */
const Empty = {
	Record: {}
};

/**
 * Empty ItemQuery type, based on the Empty @enum.
 *
 * @typedef {Empty}
 */
export let EmptyItemQuery;

/**
 * Reference to the only EmptyItemQuery instance.
 *
 * @type {EmptyItemQuery}
 */
export const emptyItemQuery = Empty.Record;

/**
 * @typedef {!({id: number}|{completed: boolean}|EmptyItemQuery)}
 */
export let ItemQuery;

/**
 * @typedef {!({id: number, title: string}|{id: number, completed: boolean})}
 */
export let ItemUpdate;
