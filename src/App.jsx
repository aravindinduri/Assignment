import "./App.css";
import HowItWorks from './components/HowItWorks'
function App() {
  return (
    <main className="flex justify-center gap-4 flex-col min-h-screen">
            <h2 className="text-center font-bold text-2xl mb-8 text-white">How It Works</h2>

      <HowItWorks/>
    </main>
  );
}

export default App;
