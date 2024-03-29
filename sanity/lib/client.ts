import { createClient } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { cache } from "react";

export function getClient(preview?: { token?: string }) {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
    perspective: "published",
  });

  if (preview) {
    if (!preview.token) {
      throw new Error("You must provide a token to preview drafts");
    }

    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: "previewDrafts",
    });
  }

  return client;
}

export const getCachedClient = (preview?: { token?: string }) => {
  const client = getClient(preview);

  return cache(client.fetch.bind(client));
};
