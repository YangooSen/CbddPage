import myAxios from "@/request";

export interface platform {
  id: number;
  category: string;
  platform: string;
  problem: string;
  function: string;
}

export const getPlatformByCategory = async (category: string) => {
  return await myAxios.request({
    url: `/platform/${category}`,
    method: "GET",
  });
};
