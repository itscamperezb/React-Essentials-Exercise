import { useState } from "react";
//todas las funciones de react que empiezan por "use" son hooks de react
//tecnicamente son como cualquier otra funcion pero solo deben ser llamadas dentro
// de react component functions y en el tope del componente (no dentro de condicionales o loops)
import componentImg from "./assets/components.png";
import { CORE_CONCEPTS as concepts } from "./data";
import Header from "./Components/Header/Header";
import CoreConcept from "./Components/CoreConcept";
import TabButton from "./Components/TabButton";
import { EXAMPLES } from "./data";
// Los props son para pasar información/data entre componentes y poder usarla en distintos componentes
//Ejemplo

function App() {
  const [selectedTopic, setSelectedTopic] = useState();
  //dentro de useState, el primer valor es el valor inicial del state, es decir el que se renderiza la primera vez
  //que el componente despliega en la UI

  //una buena practica es usar el mismo nombre para el state y la function que lo actualiza "selectedTopic" y "setSelectedTopic"
  //NOTA: selectedTopic es solo una variable normal, en donde se alamcena el valor default del state, el cual podrá cambiar gracias
  //a la function setSelectedTopic
  // dato curioso: la razon por la cual se puede usar const y no necesariamente let es porque
  // lo que hace el useStae es cargar de nuevo el componente cada vez que el state cambia, es como darle refresh al componente
  function handleClick(input) {
    //los inputs que esta function debe recibir son "Components", "JSX", "Props" y "State".
    // dependiendo del input que reciba, el contenido dentro de "Dynamic Content" debe cambiar

    //NOTA: By default los react components solo se ejecutan una vez
    //por lo tanto, si quiero que algo cambie en la UI debo usar "State" para que react se de cuenta
    // que algo cambió y vuelva a renderizar el componente
    setSelectedTopic(input);
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
            <TabButton onSelect={() => handleClick("components")}>
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
          {/* para poder mostrar un mensaje inicial cuando ningun boton ha sido seleccionado necesitamos hacer un
          consitional rendering */}
          {/* selectedTopic === null es lo mismo que escribir !selectedTopic es como decir "selectedTopic es null" , con la diferencia 
          que si uso selectedTopic === null, entonces el valor inicial que debo poner a selectedTopic 
          es null, mientras que !selectedTopic es una expresion booleana puedo dejar el useSate con
           valor inicial vacío*/}
          {!selectedTopic ? (
            <p>Please select a topic</p>
          ) : (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
