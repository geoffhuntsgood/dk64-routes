import type { Step } from "./Step";

export class Route {
  constructor(
    public readonly title: string,
    public readonly link: string,
    public readonly steps: Step[]
  ) {}
}
