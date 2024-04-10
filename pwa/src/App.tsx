import { useState } from "react";
import "onecode-library/dist/style.css";
import { Button } from "onecode-library";

export default function App() {
  const [mode, setMode] = useState("light");

  const toggleDarkMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  };

  return (
    <>
      <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>

      <Button variant="destructive" className="text-orange-500">
        Shadcn Button
      </Button>
    </>
  );
}
