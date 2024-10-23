#  explicación

El servidor esta en el archivo app.js

La línea:
```js
app.use(express.static(path.join(process.cwd(), 'public')));
```
La funcion process.cwd() devuelve la ruta donde se ejecuta la aplicaciónn.
'public' es el nombre de una directorio(carpeta)
path.join() nos permite contruir rutas, basicamente path nos da la ruta absolota donde esta la carpeta public de nuestro proyecto, concatenando las rutas enviadas como parametro.

express.static() indica a express que la ruta que le estamos indicando es donde se buscaran los archivos estaticos de mi aplicacion (html, css, js, jpg)

Las sentencias:
```js
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

```
decodifica los datos enviados desde el front end, ya sea en formto json o codificados en la url

## archivos

La ruta:
```js
app.use('/tipoPartes', routerTipoPartes);
```
devuelve un json con una lista de articulos (o partes) utiliza un router, desde donde se devuelven datos estaticos (o se usa un generador de datos fake). La ventaja de usar un router es que la línea anterior captura las solicitudes a "/tipoPartes" y con el router podemos manejar diferentes subrutas como:
"/tipoPartes/"
"/tipoPartes/all"
"/tipoPartes/get"
"/tipoPartes/create"
"/tipoPartes/delete"
"/tipoPartes/update"
etcetera 
y con diferentes verbos (get, post, put), esto nos permite en un solo archivo de router manejar todas la solicitudes de partes, si tenemos clientes por ejemplo hacemos un router para manejar todas las solicitudes de clientes y asi organizamos mejor el proyecto.


La ruta:
```js
app.get("/", (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
```
devuelve el archivo "index.html" con el código de front end completo usando tablas generadas en js.
__dirname funciona similar a process.cwd(), la diferencia es que la primera devuelve la ruta donde esta el script que se esta ejecutando y la segunda la ruta inicial del proyecto, para este ejemplo devuelven lo mismo (ya que el arrchivo en ejecucion "app.js" se esta ejecutando en la carpeta raiz del proyecto).

La ruta:
```js
app.get("/grid", (_, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index-grid.html'));
});
```
devuelve un html con el código de front end completo usando la biblioteca gridjs para generar la tabla.
Un ejemplo del uso de gridjs, lo puede ver en el archivo: "ejemplo_gridjs.html"
y en la liga [ Documentacion de Gridjs](https://gridjs.io/docs/), puede ver la documentación.

El front end usa tambien la biblioteca Sweet Alert (en lugar del la funcion alert() de js), cuya documentacion puede ver en:
[Sweet Alert Documentacion](https://sweetalert2.github.io/).