import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

const isGitHubActions = process.env.GITHUB_ACTIONS === "true";
const repo = process.env.GITHUB_REPOSITORY?.split("/")?.[1];
const owner = process.env.GITHUB_REPOSITORY_OWNER;
const isUserOrOrgPagesRepo = !!(owner && repo && repo.toLowerCase() === `${owner.toLowerCase()}.github.io`);

export default defineConfig({
  site: isGitHubActions && owner ? `https://${owner}.github.io` : undefined,
  base: isGitHubActions && repo && !isUserOrOrgPagesRepo ? `/${repo}` : "/",
  integrations: [tailwind()],
});
