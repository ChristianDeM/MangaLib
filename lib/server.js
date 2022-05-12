const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

app.get("/", (req, res)=>{
    res.send("hola a todos ");
});

app.get('/manga', async (req, res) => {
    const AllMangas =  await prisma.manga.findMany({});
    res.json(AllMangas);
  });

  app.get('/manga/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.manga.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });



app.listen(port,()=>{
    console.log("server listo  :)");
});