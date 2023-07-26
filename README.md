# Frontend Mentor - QR code component

![Design preview for the QR code component coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML and CSS.**

## The challenge

Your challenge is to build out this QR code component and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Want some support on the challenge? [Join our Slack community](https://www.frontendmentor.io/slack) and ask questions in the **#help** channel.

## Where to find everything

Your task is to build out the project to the designs inside the `/design` folder. You will find both a mobile and a desktop version of the design. 

The designs are in JPG static format. Using JPGs will mean that you'll need to use your best judgment for styles such as `font-size`, `padding` and `margin`. 

If you would like the design files (we provide Sketch & Figma versions) to inspect the design in more detail, you can [subscribe as a PRO member](https://www.frontendmentor.io/pro).

You will find all the required assets in the `/images` folder. The assets are already optimized.

There is also a `style-guide.md` file containing the information you'll need, such as color palette and fonts.

## Building your project

Feel free to use any workflow that you feel comfortable with. Below is a suggested process, but do not feel like you need to follow these steps:

1. Initialize your project as a public repository on [GitHub](https://github.com/). Creating a repo will make it easier to share your code with the community if you need help. If you're not sure how to do this, [have a read-through of this Try Git resource](https://try.github.io/).
2. Configure your repository to publish your code to a web address. This will also be useful if you need some help during a challenge as you can share the URL for your project with your repo URL. There are a number of ways to do this, and we provide some recommendations below.
3. Look through the designs to start planning out how you'll tackle the project. This step is crucial to help you think ahead for CSS classes to create reusable styles.
4. Before adding any styles, structure your content with HTML. Writing your HTML first can help focus your attention on creating well-structured content.
5. Write out the base styles for your project, including general content styles, such as `font-family` and `font-size`.
6. Start adding styles to the top of the page and work down. Only move on to the next section once you're happy you've completed the area you're working on.

## Deploying your project

As mentioned above, there are many ways to host your project for free. Our recommend hosts are:

- [GitHub Pages](https://pages.github.com/)
- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)

You can host your site using one of these solutions or any of our other trusted providers. [Read more about our recommended and trusted hosts](https://medium.com/frontend-mentor/frontend-mentor-trusted-hosting-providers-bf000dfebe).

## Create a custom `README.md`

We strongly recommend overwriting this `README.md` with a custom one. We've provided a template inside the [`README-template.md`](./README-template.md) file in this starter code.

The template provides a guide for what to add. A custom `README` will help you explain your project and reflect on your learnings. Please feel free to edit our template as much as you like.

Once you've added your information to the template, delete this file and rename the `README-template.md` file to `README.md`. That will make it show up as your repository's README file.

## Submitting your solution

Submit your solution on the platform for the rest of the community to see. Follow our ["Complete guide to submitting solutions"](https://medium.com/frontend-mentor/a-complete-guide-to-submitting-solutions-on-frontend-mentor-ac6384162248) for tips on how to do this.

Remember, if you're looking for feedback on your solution, be sure to ask questions when submitting it. The more specific and detailed you are with your questions, the higher the chance you'll get valuable feedback from the community.

## Sharing your solution

There are multiple places you can share your solution:

1. Share your solution page in the **#finished-projects** channel of the [Slack community](https://www.frontendmentor.io/slack). 
2. Tweet [@frontendmentor](https://twitter.com/frontendmentor) and mention **@frontendmentor**, including the repo and live URLs in the tweet. We'd love to take a look at what you've built and help share it around.
3. Share your solution on other social channels like LinkedIn.
4. Blog about your experience building your project. Writing about your workflow, technical choices, and talking through your code is a brilliant way to reinforce what you've learned. Great platforms to write on are [dev.to](https://dev.to/), [Hashnode](https://hashnode.com/), and [CodeNewbie](https://community.codenewbie.org/).

We provide templates to help you share your solution once you've submitted it on the platform. Please do edit them and include specific questions when you're looking for feedback. 

The more specific you are with your questions the more likely it is that another member of the community will give you feedback.

## Got feedback for us?

We love receiving feedback! We're always looking to improve our challenges and our platform. So if you have anything you'd like to mention, please email hi[at]frontendmentor[dot]io.

This challenge is completely free. Please share it with anyone who will find it useful for practice.

**Have fun building!** 🚀


## Que debo conocer antes de:

### Tecnologias

- ViteJS
- React v18
- Docker
- ESLint
- Prettier
- Husky
- Axios

### Setup

1. Clonar el repositorio
2. Crear archivo `.env` con las variables especificadas en el `.env.sample`
3. Para correrlo sin docker:

   3.1. Situarse en la raiz del proyecto, proceder a instalar las dependencias con `yarn install`

   3.2. Ejecutar `yarn start`

4. Para correrlo con docker:
   4.1. Construimos la imagen
   ```
   docker build -t IMAGE_NAME:$TAG_IMAGE_DEV -f Dockerfile .
   ```
   4.2. Procedemos a crear el container
   ```
   docker run -dp 3000:3000 --name PROJECT_NAME IMAGE_NAME:$TAG_IMAGE_DEV
   ```
5. Abrir el browser y dirigirse a `localhost:3000`

### Consideraciones para el CI-CD

Como se presenta en el `Dockerfile`, se debe tener en cuenta antes de emitir un lanzamiento hacia el CI se debe de con antelación crear el archivo yarn.lock localmente. Esto con el objetivo de optimizar el despliegue y liberación del proyecto en el servidor, así como también que el motivo es que a nivel del Dockerfile se esta utilizando el comando `yarn install --frozen-lockfile` buscando mejorar el rendimiento del pipeline.

## Arquitectura

### Clean Architecture

En _Clean Architecture_, una aplicación se divide en responsabilidades y cada una de estas responsabilidades se representa en forma de capa.

Se basa en que la capa de dominio (Models/State) no dependa de ninguna capa exterior.
La de aplicación sólo depende de la de dominio y el resto (normalmente presentación y acceso a datos) depende de la capa de aplicación.
Esto se logra con la implementación de interfaces que luego tendrán que implementar las capas externas mediante la inyección de dependencias.

El siguiente diagrama representa la adaptación hecha de Clean Architecture para un proyecto Frontend basado en Typescrit y React

![CleanArchitectureReact](https://user-images.githubusercontent.com/32858351/173492130-2400f1b6-0262-4214-86c8-2733a5219f57.svg)

### Capas

- **Servicios Externos:** es la capa que contiene los servicios que conectan el dominio con el mundo exterior (capas exteriores). Aquí se definen los contratos, interfaces destinados a consumir los servicios externos.

  - **services**: todos aquellos lugares donde vamos a estar llamando para buscar la información

- **Adaptadores:** es la capa de estandarización datos. Implementa interfaces definida en la capa de Servicios Externos y estandariza los responses de los servicios externos buscando llevar a la aplicación la menor cantidad errores humanos.

  - **adapters**: estandarizar en base al modelo y el endpoint de momento. Reciben informacion y la devuelven.
  - **interceptors**: se busca en base a los adapters adaptar lo que enviamos y lo que recibimos (usalmente se utiliza axios como estandar)

- **Componentes:** Aqui se define toda la logica de negocio, mediante los components como tal, los hooks, utilities entre otros...

  - **components**: logica de negocio / componentes estilizados
  - **hooks**: custom hooks que sean reutilizables en un segmento o toda la aplicación, para controlar su ciclo de vida.
  - **routes**: definir las rutas de la aplicación y sus conexiones
  - **utilities**: porciones de logica reutilizables en la aplicacion
  - **assets**: estilos, fonts, recursos graficos, entre otros.

- **Models/State:** es el corazon de la aplicación y tiene que estar totalmente aislada de cualquier dependencia ajena a la lógica o los datos de negocio. Puede contener entidades, value objects, eventos y servicios del dominio. Representan el state y el state en sí.

  - **types/interfaces/models**: dar la representacion de nuestras entidades, y estandarizar un contrato sobre lo que se utilizara.
  - **context**: cualquier recurso que se necesite para manejar el state dentro de un alcance definido y que no sera necesario en toda la aplicación en todo momento.
  - **redux**: información que se necesita en toda la aplicación en todo momento.

### Patrones y metodologías utilizadas:

- **Axios:** Para el consumo de servicios en la capa de Servicios Externos

- **Pruebas unitarias:** Se debe utilizar jest asi como react-testing-library

- **ESLint:** En este proyecto se utiliza eslinter para la estandarización y verificación del código

- **Prettier:** De igual manera buscando establecer un estandar de legibilidad del código formateando un estilo en comun.

- **Husky:** Utilizando las virtudes, como pre-commits en el cual se ejecutan los comandos de eslint y prettier, para que antes de cada commit se le de formato con prettier y se valide el codigo que se trata de commitear con ESLint

### Tecnología CSS

**Importante:** Hasta ahora no se ajustara el template a una tecnologias de css en especifica, con el objetivo de que cada quien al utilizar el template pueda configurar e instalar la tecnologia que le guste

#### Opciones recomendadas:

- **TaildWindCSS**
- **StyledComponents**
- **Emotion**
- **Bootstrap**
- **AntDesign**
