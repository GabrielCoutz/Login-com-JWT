import formDataToObject from "./formDataToObject";

export default function getValues(form: HTMLFormElement) {
  const inputs = [...form.getElementsByTagName("input")];
  const formData = new FormData();

  inputs.forEach(({ name, value }) => formData.append(name, value));

  return formDataToObject(formData);
}
