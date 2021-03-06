// Type definitions for random-seed 0.3.0
// Project: https://github.com/skratchdot/random-seed/
// Definitions by: Endel Dreyer <https://github.com/endel>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

declare module "random-seed" {

  export interface RandomSeed {
    range (range: number): number;
    random (): number;
    floatBetween (min: number, max: number): number;
    intBetween (min: number, max: number): number;

    string (count: number): string;
    seed (seed: string): void;

    cleanString (inStr: string): string;
    hashString (inStr: string): string;

    addEntropy (...args: any[]): void;
    initState (): void;

    done (): void;
  }

  export function create (seed?: string): RandomSeed;

}
