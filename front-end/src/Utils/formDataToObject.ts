import { DataModel } from "../Interfaces/globa";

export default (formData: FormData) => {
  const data: DataModel = {};

  const entries = [...formData.entries()];
  entries.forEach(([key, value]) => {
    if (!key || !value || typeof value !== "string") return;
    data[key] = value;
  });
  return data;
};
