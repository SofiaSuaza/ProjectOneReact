import './App.css';

function App() {
  return (
    <div className="container">
      <header>
        <h1>React</h1>
        <h2>Biblioteca para el desarrollo frontend</h2>
      </header>

      <section>
        <h2>¿Qué es React?</h2>
        <p>
          React es una biblioteca de JavaScript desarrollada por Facebook para construir
          interfaces de usuario interactivas. Se basa en componentes reutilizables y
          un DOM virtual que optimiza el rendimiento.
        </p>
        <p>
          Fue lanzada en 2013 y desde entonces ha sido adoptada por empresas como Instagram,
          Netflix, WhatsApp y muchas otras que buscan rapidez y escalabilidad en sus aplicaciones.
        </p>
        <p>
          También es de código abierto, lo que significa que cualquier desarrollador puede
          aportar mejoras y mantenerla en constante evolución.
        </p>
      </section>

      <section>
        <h2>¿Para qué sirve?</h2>
        <ul>
          <li>Crear aplicaciones web dinámicas e interactivas.</li>
          <li>Reutilizar componentes para acelerar el desarrollo.</li>
          <li>Gestionar estados y datos de forma sencilla.</li>
          <li>Integrarse con otras herramientas y bibliotecas.</li>
        </ul>
        <p>
          En pocas palabras, sirve para que los desarrolladores construyan interfaces modernas,
          rápidas y fáciles de mantener, sin tener que reescribir código constantemente.
        </p>
        <p>
          Además, es ideal tanto para proyectos pequeños como para aplicaciones grandes
          y escalables, ya que se adapta a diferentes necesidades.
        </p>
      </section>

      <section>
        <h2>¿Por qué es popular en desarrollo frontend?</h2>
        <ol>
          <li>Gran comunidad y soporte continuo.</li>
          <li>Rendimiento alto gracias al DOM virtual.</li>
          <li>Flexibilidad para proyectos de todo tipo.</li>
          <li>Amplio ecosistema de recursos y librerías.</li>
        </ol>
        <p>
          Además, React tiene una curva de aprendizaje amigable en comparación con otros
          frameworks y cuenta con una gran cantidad de tutoriales, cursos y documentación.
          Esto hace que los nuevos desarrolladores puedan adaptarse rápidamente.
        </p>
        <p>
          Incluso compañías tecnológicas emergentes lo eligen porque facilita el trabajo
          en equipo y permite mantener proyectos a largo plazo con mayor orden.
        </p>
      </section>

      <footer>
        <p>© 2025 Todos los derechos reservados - Sofía Suaza</p>
      </footer>
    </div>
  );
}

export default App;
