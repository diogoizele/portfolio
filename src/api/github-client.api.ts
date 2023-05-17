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
  const repos = await client.repos.listForAuthenticatedUser({
    per_page: 100,
  });

  const filteredRepos = repos.data.filter(
    ({ name, id }) => selectedRepos.includes(name) || selectedRepos.includes(id)
  );

  return filteredRepos;
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
