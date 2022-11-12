const users = [
  { name: "wafi", id: 1, age: 50 },
  { name: "karim", id: 2, age: 20 },
  { name: "tami", id: 3, age: 30 },
];

const getUsers = async (req, res) => {
  const users = [
    { name: "wafi", id: 1, age: 50 },
    { name: "karim", id: 2, age: 20 },
    { name: "tami", id: 3, age: 30 },
  ];
  res.status(200).json({ users: users });
};
const getOneUser = async (req, res) => {
  const id = req.params.id;
  const founUser = users.find((user) => user.id == id);
  if (founUser) {
    res.status(200).json({ user: founUser });
  } else {
    res.status(400).json({ msg: "no user found" });
  }
};
const postUser = async (req, res) => {
  console.log("add user");
};
const putUser = async (req, res) => {
  console.log("put user");
};
const deleteUser = async (req, res) => {
  console.log("delete user");
};
module.exports = { getUsers, postUser, putUser, deleteUser, getOneUser };
