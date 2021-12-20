import Container from "./components/Container";
import DivIzq from './components/DivIzq'

function App() {

  const styles = {
    title: {
      color: '#395B5D',
    }
  }

  return (
    <Container>
        <h1 style={styles.title}>SPLITTER</h1>
            <DivIzq />
    </Container>
  )
}

export default App;
