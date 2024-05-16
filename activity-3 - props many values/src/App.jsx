import Header from "./components/Header.jsx";
import Concept from "./components/Concept.jsx";
import {COMPONENTS_DATA, PROPS_DATA, JSX_DATA } from "./data.js";
function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <ul>
            <Concept
              image={COMPONENTS_DATA.image}
              title={COMPONENTS_DATA.title}
              description={COMPONENTS_DATA.description}
            />
            <Concept
              image={PROPS_DATA.image}
              title={PROPS_DATA.title}
              description={PROPS_DATA.description}
            />
            <Concept
              image={JSX_DATA.image}
              title={JSX_DATA.title}
              description={JSX_DATA.description}
            />
          </ul>
        </section>
      </main>
    </div>
  );
}

export default App;
