const MockLiveChatData = () => {
  const name = RandomName();
  const chat = RandomChat();
  const newColor = RandomColor();
  return { name, chat, newColor };
};

const RandomName = () => {
  const names = [
    "Akash",
    "Priya",
    "Raj",
    "Sara",
    "John",
    "Meera",
    "Ankit",
    "Neha",
  ];
  return names[Math.floor(Math.random() * names.length)];
};

const RandomColor = () => {
  const hex = Math.floor(Math.random() * 0xffffff).toString(16);
  return `#${hex.padStart(6)}`;
};

const RandomChat = () => {
  const words = [
    "hello",
    "awesome",
    "nice",
    "lol",
    "yes",
    "no",
    "wow",
    "omg",
    "cool",
    "bro",
    "epic",
    "fun",
    "what",
    "ok",
    "amazing",
    "crazy",
    "sure",
    "great",
    "wait",
    "go",
  ];
  const emojis = ["😂", "🔥", "❤️", "👍", "😮", "💀", "🎉", "🙌", "🤣", "😎"];

  const wordCount = Math.floor(Math.random() * 5) + 1;
  const msg = [];
  for (let i = 0; i < wordCount; i++) {
    msg.push(words[Math.floor(Math.random() * words.length)]);
  }
  if (Math.random() > 0.5)
    msg.push(emojis[Math.floor(Math.random() * emojis.length)]); // maybe add emoji
  return msg.join(" ");
};

export default MockLiveChatData;
