import myAxios from "@/request";

export interface achievement {
  id: number;
  content: string;
}

export const getAllAchievement = async () => {
  return await myAxios.request({
    url: "/achievement",
    method: "GET",
  });
};
