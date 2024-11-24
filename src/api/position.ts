import myAxios from "@/request";

export interface position {
  id: number;
  content: string;
}

export const getAllPosition = async () => {
  return await myAxios.request({
    url: "/position",
    method: "GET",
  });
};
