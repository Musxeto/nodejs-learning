import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.get("/chai", (req, res) => {
  chai = [
    {
      id: 1,
      title: "Strong Chai",
      content: "Strong Tea to wake you up",
    },
    {
      id: 2,
      title: "Kashmiri Chai",
      content: "A traditional pink tea from Kashmir, rich in flavor and aroma",
    },
    {
      id: 3,
      title: "Peshawari Chai",
      content:
        "A blend of green tea, milk, and spices, originating from Peshawar",
    },
    {
      id: 4,
      title: "Karak Chai",
      content: "A strong and aromatic tea with milk, popular in Karachi",
    },
    {
      id: 5,
      title: "Lahori Chai",
      content: "A creamy and frothy tea specialty of Lahore",
    },
    {
      id: 6,
      title: "Quetta Chai",
      content: "A robust black tea enjoyed with cardamom and almonds in Quetta",
    },
    {
      id: 7,
      title: "Masala Chai",
      content: "Spiced tea with aromatic spices",
    },
    {
      id: 8,
      title: "Ginger Chai",
      content: "Tea with a kick of ginger",
    },
    {
      id: 9,
      title: "Cardamom Chai",
      content: "Tea flavored with cardamom pods",
    },
    {
      id: 10,
      title: "Lemon Chai",
      content: "Refreshing tea with a hint of lemon",
    },
    {
      id: 11,
      title: "Mint Chai",
      content: "Cooling tea infused with mint leaves",
    },
  ];
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening at port: ${port}`);
});
