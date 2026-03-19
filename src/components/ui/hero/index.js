// Components
export { default as HeroV1 } from "./HeroV1";
export { default as HeroV2 } from "./HeroV2";
export { default as HeroV3 } from "./HeroV3";

// Code generators — must be exported so registry can import them
export { getHeroV1Code } from "./HeroV1";
export { getHeroV2Code } from "./HeroV2";
export { getHeroV3Code } from "./HeroV3";
