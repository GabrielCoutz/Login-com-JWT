import client from "./index";

const fetchUsers = async (endpoint) => {
  return await (await fetch(`${process.env.BASEURL}${endpoint}`)).json();
};

const context = () => {
  return { fetchUsers };
};

export default context;
