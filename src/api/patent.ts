import myAxios from "@/request";

export interface patent {
  id: number;
  content: string;
}

export const getAllPatent = async () => {
  return await myAxios.request({
    url: "/patent",
    method: "GET",
  });
};
