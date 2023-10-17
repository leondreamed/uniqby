export default function uniqueBy<T extends any[]>(
	array: T,
	getValueOrKey: string | ((item: T[number]) => any)
): T {
	const uniqueArray: any[] = [];
	const found = new Set();

	let getValue: (item: any) => any;
	if (typeof getValueOrKey !== 'function') {
		var key = getValueOrKey;
		getValue = (item) => item[key];
	} else {
		getValue = getValueOrKey;
	}

	for (const item of array) {
		var value = getValue(item);
		if (!found.has(value)) {
			found.add(value);
			uniqueArray.push(item);
		}
	}

	return uniqueArray as T;
}
