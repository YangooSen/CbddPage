import myAxios from "@/request";

export interface instruct {
  id: number;
  content: string;
}

export const getAllInstruct = async () => {
  return await myAxios.request({
    url: "/instruct",
    method: "GET",
  });
};
