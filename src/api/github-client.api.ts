import { Octokit } from "@octokit/rest";

import { GitHub } from "config/constants";

const { GITHUB_PERSONAL_AUTH_TOKEN } = process.env;

const client = new Octokit({
  auth: GITHUB_PERSONAL_AUTH_TOKEN,
  userAgent: GitHub.userAgent,
  baseUrl: GitHub.baseUrl,
});

export const getReposByIdsOrNames = async (
  selectedRepos: (string | number)[]
) => {
  const reposResponse = await client.repos.listForAuthenticatedUser({
    per_page: 150,
  });

  const repos = [];

  // To maintain the order of selected repositories
  selectedRepos.forEach((repoIdentifier) => {
    const repo = reposResponse.data.find((repository) => {
      return (
        repository?.name === repoIdentifier || repository?.id === repoIdentifier
      );
    });

    if (repo) {
      repos.push(repo);
    } else {
      console.error("Repository not found:", repoIdentifier);
    }
  });

  for (const repo of repos) {
    try {
      const languageResponse = await getRepoLanguages(repo?.name);

      const languages = Object.keys(languageResponse.data);

      if (languages.length > 8) languages.length = 8;

      repo.languages = languages;
    } catch (e) {
      console.error("Could not get languages for repo:", repo?.name);
    }
  }

  return repos;
};

export const getRepos = async () => {
  const repos = await client.repos.listForUser({
    username: GitHub.userAgent,
    per_page: 100,
  });

  return repos;
};

export const getRepoLanguages = async (repoName: string) => {
  const languages = await client.repos.listLanguages({
    owner: GitHub.userAgent,
    repo: repoName,
  });

  return languages;
};

export const getRepoReadme = async (repoName: string) => {
  const readme = await client.repos.getReadme({
    owner: GitHub.userAgent,
    repo: repoName,
  });

  return readme;
};

export const getRepoContent = async (repoName: string, path: string) => {
  const content = await client.repos.getContent({
    owner: GitHub.userAgent,
    repo: repoName,
    path,
  });

  return content;
};
