import React from "react";
import Slider from "./components/Slider";

const imagens = [
  {
    url: 'https://placehold.co/1440x400/grey/white?text=Hello+World',
    alt: 'Texto 1',
    link: 'https://example.com/1'
  },
  {
    url: 'https://placehold.co/1440x400/black/white?text=Hello\nWorld',
    alt: 'Texto 2',
    link: 'https://example.com/2'
  },
  {
    url: 'https://placehold.co/1440x400/fcc/black?text=Hello\nWorld',
    alt: 'Texto 3',
    link: 'https://example.com/3'
  }
];

function App() {
  return (
    <div>
      <Slider imagens={imagens} />
    </div>
  );
}

export default App;
