import useSwr from "swr";

const baseUrl = "localhost:4000/canabis/api";

export const useRequest = (path: string, name: string) => {
  if (!path) {
    throw new Error("Path is required");
  }

  const url = name ? baseUrl + path + "/" + name : baseUrl + path;
  const { data, error } = useSwr(url);

  return { data, error };
};
