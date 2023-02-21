import { Octokit } from "@octokit/rest";

import { GitHub } from "config/constants";

class GithubService {
  private octokit: Octokit;
  private authToken: string;

  constructor() {
    const { GITHUB_PERSONAL_AUTH_TOKEN } = process.env;

    this.authToken = GITHUB_PERSONAL_AUTH_TOKEN;

    this.octokit = new Octokit({
      auth: GITHUB_PERSONAL_AUTH_TOKEN,
      userAgent: GitHub.userAgent,
      baseUrl: GitHub.baseUrl,
    });
  }

  async getReposByIdsOrNames(selectedRepos: (string | number)[]) {
    const repos = await this.octokit.repos.listForAuthenticatedUser({
      per_page: 100,
    });

    const filteredRepos = repos.data.filter(
      ({ name, id }) =>
        selectedRepos.includes(name) || selectedRepos.includes(id)
    );

    return filteredRepos;
  }

  async getRepos() {
    const repos = await this.octokit.repos.listForUser({
      username: "diogoizele",
      per_page: 100,
    });

    return repos;
  }

  async getRepoLanguages(repoName: string) {
    const languages = await this.octokit.repos.listLanguages({
      owner: "diogoizele",
      repo: repoName,
    });

    return languages;
  }

  async getRepoReadme(repoName: string) {
    const readme = await this.octokit.repos.getReadme({
      owner: "diogoizele",
      repo: repoName,
    });

    return readme;
  }
}

export default new GithubService();
