export type MapCallback<T, U> = (val: T, index: number, arr: T[]) => U;

export const mapEnum: <T extends Record<string, any>>(
	enumerator: T,
	fn: (val: any) => any,
) => any[] = (enumerator, fn) => {
	const keys = Object.keys(enumerator);
	return keys.map(key => fn(enumerator[key]));
};
