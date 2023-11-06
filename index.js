import { lazy } from "react";

export function namedLazy(factory) {
	return new Proxy({}, {
		get: (target, name) => {
			return lazy(async () => {
				const mod = await factory();
				const comp = mod[name];
				return { default: comp };
			});
		},
	});
}
