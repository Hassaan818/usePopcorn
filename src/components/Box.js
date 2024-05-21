import { useState } from "react";

export default function Box({children}) {
    const [isOpen, setIsOpen] = useState(true);
    return (
      <div className="box">
        <button
          className="btn-toggle"
          onClick={() => setIsOpen((open) => !open)}
        >
          {isOpen ? "–" : "+"}
        </button>
        {/* <Button onClick={() => setIsOpen1((open) => !open)}>
      {isOpen1 ? "–" : "+"}
    </Button> */}
        {isOpen && children}
      </div>
    );
  }