import componentImg from "./assets/components.png";
import { CORE_CONCEPTS as concepts } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/TabButton";
// Los props son para pasar información/data entre componentes y poder usarla en distintos componentes
//Ejemplo

function App() {
  function handleClick(input) {
    //los inputs que esta function debe recibir son "Components", "JSX", "Props" y "State".
    // dependiendo del input que reciba, el contenido dentro de "Dynamic Content" debe cambiar
    console.log(input);
  }
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {concepts.map((item) => {
              return (
                <CoreConcept
                  title={item.title}
                  description={item.description}
                  image={item.image}
                />
              );
            })}
          </ul>
        </section>
        {/* otra manera de desplegar esta list es  */}
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* haciendo esto estamos usando los elementos image, description y title del array CORE_CONCEPTS*/}
            <CoreConcept {...concepts[0]} />
            <CoreConcept {...concepts[1]} />
            <CoreConcept {...concepts[2]} />
            <CoreConcept {...concepts[3]} />
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            {/* onSelect es un prop hecho por el dev para que el button que está
             dentro del componente <TabButton> active la function handleClick ubicada dentro de este mismo archivo App.jsx
             la intención de poner la function aqui y no en TabButton.jsx es para poder cambiar el contenido dentro del Dynamic Content*/}

            {/* Parte 2:
             Ahora para poder hacer que el contenido cambie segun el boton seleccionado */}
            <TabButton onSelect={() => handleClick("componets")}>
              Components
            </TabButton>
            <TabButton onSelect={() => handleClick("jsx")}>JSX</TabButton>
            <TabButton onSelect={() => handleClick("props")}>Props</TabButton>
            <TabButton onSelect={() => handleClick("state")}>State</TabButton>
            {/* al colocar handleClick() dentro de una arrow function "() => handleClick()"" lo hacemos porque necesitamos que handleClick 
            reciba un input, ya sea "Components", "JSX", etc. y asi poder hacer que el contenido cambie segun el boton seleccionado
            si no la metemos dentro de la arrow function, al poner solo "handleClick()" hace que la funcion se ejecute cuando la linea de codigo <TabButton> se ejecute.
            */}
          </menu>
          Dynamic Content
        </section>
      </main>
    </div>
  );
}

export default App;
