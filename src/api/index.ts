/* Base api */
export { apiInstance } from "./base/instance.api";

/* Github client */
export {
  getRepoContent,
  getRepoLanguages,
  getRepoReadme,
  getRepos,
  getReposByIdsOrNames,
} from "./github-client.api";

/* Contentful client */
export {
  getEducationContent,
  getExperienceContent,
  getSocialMediaContent,
} from "./contentful-client.api";

/* Spotify client */
export { currentPlayingTrack } from "./spotify-client.api";
