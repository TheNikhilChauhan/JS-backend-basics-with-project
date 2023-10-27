import data from "../data.json" assert { type: "json" };
const users = data.users;

const createUser = (req, res) => {
  console.log(req.body);
  const user = users.push(req.body);
  res.status(201).json(user);
};

const getAllUsers = (req, res) => {
  res.json(users);
};

const getSingleUser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((p) => p.id === id);
  if (user) {
    console.log(user);
  }
  res.json(user);
};

const replaceUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);

  const updateuser = users.splice(userIndex, 1, {
    ...req.body,
    id: id,
  });
  res.status(201).json(updateuser);
};

const updateUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  const updateuser = users.splice(userIndex, 1, {
    ...user, //old users
    ...req.body, // updated part of the user, second part will overwrite the first part in patch
  });
  res.status(201).json(updateuser);
};

const deleteUser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((p) => p.id === id);
  const user = users[userIndex];
  users.splice(userIndex, 1);
  res.json(user);
};

export {
  createUser,
  getAllUsers,
  getSingleUser,
  replaceUser,
  updateUser,
  deleteUser,
};
