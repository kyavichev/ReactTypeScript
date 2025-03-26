const users = [
  "Clementine Bauch",
  "Ervin Howell",
  "Leanne Graham",
  "Mrs. Dennis Schulist",
  "Patricia Lebsack",
];

const AlbumOwner = () => {
    //return <h1 className="text-xl font-bold">{users[Math.floor(Math.random() * users.length)]}</h1>;
    return <h1 className="text-xl font-bold">{users[0]}</h1>;
};

export default AlbumOwner;
