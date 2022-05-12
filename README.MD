# Manga lib  CRUD  [Back end]

##  Sobre el proyecto parte A back end
<p>Este CRUD esta realizado para una base de datos para  una libreria de mangas/comics 

## INFO 
<p> JavaScript
<p>Node: ``16.40.0``
<p>Prisma:``3.14.0``
<p>eslint:``8.15.0``


## Informacion de el manga / comic  

- Nombre del manga.
- Nombre de la Editorial. 
- Numero de tomos que tienes el usuario.
- Precio de cada tomo unico.
- Estado de  la coleccion completo o incompleto.

## Operaciones de la base de datos.

- Leer  la informacion de la base de datos.
- Crear un nuevo manga. con las carateristicaz anteriormente menscionadas.
- Editar el manga seleccionada mediante id.
- Eliminar el manga en cuestion.


## Endpoints
| End points                     	| Request                        	|        	| Response                                                   	|
|--------------------------------	|--------------------------------	|--------	|------------------------------------------------------------	|
| http://localhost:3000/manga    	| http://localhost:3000/manga    	| GET    	| Muestra  la informacion de los mangas de la base de datos  	|
| http://localhost:3000/manga/id 	| http://localhost:3000/manga/id 	| GET    	| Muestra el manga con el id correspondiente                 	|
| http://localhost:3000/manga    	| http://localhost:3000/manga    	| POST   	| Agrega un nuevo manga dentro de la base de datos.          	|
| http://localhost:3000/manga/id 	| http://localhost:3000/manga/id 	| PUT    	| Modifica el manga por su id correspondiente.               	|
| http://localhost:3000/manga/id 	| http://localhost:3000/manga/id 	| DELETE 	| Elimina de la base de datos el manga correspondiente       	|



## Base de datos 
<p> la base de datos esta realizada en postgres de la siguiente manera:

- Codigo usado en La terminal de Postgres ``create database mangalib;``

## Creando  la base de datos mediante prisma.
 
 <p> Dentro de la carpeta prisma se encuentra Schema.prisma donde se agrego el modelo  para la tabal de la base de datos. 

```
model manga {
  id Int @id @default(autoincrement())
  name String @unique
  editorial String @db.VarChar(255)
  tomosN Int 
  precio Int
  estatus Boolean  @default(false)
  dateCreated DateTime @default(now())
  lastUpdated DateTime @updatedAt
}
```


### Mangas table ejemplo

| id | Name      | Editorial | TomosN  | Precio | Estatus |
|----|-----------|-----------|---------|--------|---------|
| 01 | One piece | Panini    | 2       | 69     | false   |
