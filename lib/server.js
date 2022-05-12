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

  app.post('/manga', async (req, res) => {
    const manga = {
      name: req.body.name,
      editorial: req.body.editorial,
      tomosN: req.body.tomosN,
      precio: req.body.precio,
      estatus: req.body.estatus     
     };
    const message = 'Explorer creado.';
    await prisma.manga.create({data: manga});
    return res.json({message});
  });

  app.put('/manga/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.manga.update({
		where: {
			id: id
		},
		data: {
            name: req.body.name,
            editorial: req.body.editorial,
            tomosN: req.body.tomosN,
            precio: req.body.precio,
            estatus: req.body.estatus
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.manga.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});


app.listen(port,()=>{
    console.log("server listo  :)");
});