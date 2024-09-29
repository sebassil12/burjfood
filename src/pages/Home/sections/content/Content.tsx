import content from "./content.module.css";
function Content() {
  return (
    <div className={content.container}>
      <section className={content.welcome}>
        <h1>Bienvenido a BurjFood: Donde la Rápidez Encuentra la Frescura</h1>
        <hr></hr>
        <p>En el corazón de Barcelona, nació BurjFood, el sueño de Juan de fusionar
        la rapidez de la comida rápida con la frescura de las ensaladas. Con la
        pasión culinaria de Elena, nuestro chef, cada plato es una obra maestra
        de sabores equilibrados y calidad excepcional. </p>
      </section>
      <section className={content.lema}>
        <h1>Nuestro Lema: "Sabores Rápidos, Frescura Eterna"</h1>
        <hr></hr>
        <p>En BurjFood, vivimos según el lema "Sabores Rápidos, Frescura Eterna".
        Cada plato está diseñado para sorprender y satisfacer, ofreciendo la
        rapidez que necesitas sin comprometer la frescura que mereces.</p>
      </section>
      <section className={content.location}>
        <h1> Ubicación: Encanto Mediterráneo en el Corazón de Barcelona</h1>
        <hr></hr>
        <p>Descubre BurjFood en el pintoresco barrio de Gràcia, a solo unos pasos
        de la Sagrada Familia. Nuestra dirección: Carrer del Sabor, 123, 08000
        Barcelona. Sumérgete en la fusión única de rapidez y frescura que
        ofrecemos. ¡Te esperamos!</p>
      </section>
    </div>
  );
}

export default Content;
