import { ComponentType, LazyExoticComponent } from "react";

type ComponentName<Component, Name> = Component extends ComponentType<any> ? Name : never;
type LazyComponent<Component> = Component extends ComponentType<any> ? LazyExoticComponent<Component> : never;
type LazyComponentExports<Module> = {
	[Export in keyof Module as ComponentName<Module[Export], Export>]: LazyComponent<Module[Export]>;
};

export declare function namedLazy<Module>(factory: () => Promise<Module>): LazyComponentExports<Module>;
export {};
