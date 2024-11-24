import myAxios from "@/request";

export interface software {
  id: number;
  content: string;
}

export const getAllSoftware = async () => {
  return await myAxios.request({
    url: "/software",
    method: "GET",
  });
};
