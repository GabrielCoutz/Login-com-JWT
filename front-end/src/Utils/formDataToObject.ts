import { DataModel } from "../Interfaces/global";

export default (formData: FormData) => {
  const object: DataModel = {};

  const entries = [...formData.entries()];
  entries.forEach(([key, value]) => {
    if (!key || !value || typeof value !== "string") return;
    object[key] = value;
  });

  return object;
};
