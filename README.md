# **Enviar Correos con **NODEMAILER** ** 


![Primer Diseno](./screenshots/1.png)
![Primer Diseno](./screenshots/2.png)

# Requisitos:
* Tener instalado [Node JS → ](https://nodejs.org/es)
* Tener instalado [GIT → ](https://git-scm.com/) Opcional

# Instalación:

* Clonaremos el repositorio en nuestra maquina usando el comando ``` git clone https://github.com/1TSpahc/Buho-caso-7-api.git ```. O puedes descargar el zip.

![Primer Diseno](./screenshots/3.png)

* Ahora instalaremos las dependencias que nescesita el proyecto.

* Si usaste git, solo tienes que ingresar a la terminal en la ruta donde clonaste es repositorio y ejecutar un comando de node js ```npm install``` para que se descargar las dependencias que necesita el proyecto.

![Primer Diseno](./screenshots/4.png)


* Si descargaste el zip y no tienes git instalado solo tienes que descomprimir el zip/ entrar a la carpteta buho-caso-7-api y abrirla en cualquier terminal y seguir el mismo paso que 👆.



* Ahora abriremos el codigo en ``` nuestro visual studio code``` usando el siguiente comando ```code .```

# Configurar el proyecto:

 Para configura el proyecto solo modificaremos 3 archivos:
* 1: El archivo ``` .evn.example ```.

* Tenemos que renombrar el archivo a ```.env```.(quitemos el ```.example``` del archivo).

![Primer Diseno](./screenshots/5.png)

* Para obtener los datos que necesita nodemailer usaremos -> ```CPANEL```.

![Primer Diseno](./screenshots/6.png)

![Primer Diseno](./screenshots/7.png)

![Primer Diseno](./screenshots/8.png)

![Primer Diseno](./screenshots/9.png)

* Y el ```PASSWORD``` es la contrasena con la que incias sesion en  ```cpanel```.

![Primer Diseno](./screenshots/10.png)

* Y reemplazamos los datos en el archivo ```.env``` con los nuevos datos de ```cpanel```.

* 2: El segundo archivo que modificaremos es el ```src/config/index.js``` en la linea ```13```

![Primer Diseno](./screenshots/11.png)

* Esa linea es lo que se mostrará en el correo ejemplo ->```Equipo de Carhome``` 👇

![Primer Diseno](./screenshots/12.png)
![Primer Diseno](./screenshots/13.png)

* ahora reemplaza esa linea con el texto que quieras.

* 3: El ultimo archivo que modificaremos es el ```src/template/index.js``` que es el ```html``` que se muestra como contenido del correo.

![Primer Diseno](./screenshots/2.png)

* El template que se muestra por defecto se obtuvo de  [AQUI → ](https://my.stripo.email/cabinet/#/templates/901244)

![Primer Diseno](./screenshots/14.png)

# Correr la aplicacion:
* Necesitaremos instalar una extencion de Visual studio code 👇

![Primer Diseno](./screenshots/15.png)

* Ahora deberia aparecer este icono en la barra  ⚡️ 👇

![Primer Diseno](./screenshots/16.png)

* Abriremos la terminal en la ruta de nuestra aplicacion y ejecutaremos este comando de node ``` npm run dev ```. 👇

![Primer Diseno](./screenshots/17.png)

* Si ingresamos a ```http://localhost:4000/``` deberia aparecer este mensaje 👇

![Primer Diseno](./screenshots/18.png)

* Ahora abriremos ```Thunder client``` para probar la api. le damos  click en ```new Request```

![Primer Diseno](./screenshots/19.png)

* Si insertamos ```http://localhost:4000/``` y le damos a ```send``` el servidor nos deberia responder con un ```Hola!```

![Primer Diseno](./screenshots/20.png)

* Ahora cambiaremos el metodo de ```GET``` a ```POST```  y la url ```http://localhost:4000/api/email``` y eliminaremos los ```http headers``` para insertar uno nuevo.

![Primer Diseno](./screenshots/21.png)

* Agregaremos el  ```Content-type```-> ```application/json``` (recuerda guadar los cambios.)

![Primer Diseno](./screenshots/22.png)

* Ahora nos dirigimos al apartado de ```Body``` y creamos el ```JSON``` que enviaremos, ahi remplazamos el nombre, apellido y el correo del cliente a quien le enviaremos el correo.

![Primer Diseno](./screenshots/23.png)

* Si el correo se envio con exito el servidor nos responderá con un ```messageId```

![Primer Diseno](./screenshots/24.png)

![Primer Diseno](./screenshots/25.png)

![Primer Diseno](./screenshots/26.png)









