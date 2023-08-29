import { useState } from "react";
import { FolderCard, FileCard, Modal, Dropdown } from "./components";
import "./app.scss";

function App() {
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {showModal && (
        <Modal showModal={showModal} onClickModal={() => setShowModal(false)} />
      )}
      <div className="Home">
        <div className="flexbox">
          <Dropdown
            value={filter}
            options={["By name", "By time created"]}
            onSelect={(value) => setFilter(value)}
          />
          <Dropdown
            value={filter}
            options={["By name", "By time created"]}
            onSelect={(value) => setFilter(value)}
          />
        </div>
        <p className="header">Folder</p>
        <div className="container">
          {[1, 2, 3, 4, 5, 6, 7, 8].map((_, i) => (
            <FolderCard key={i} />
          ))}
        </div>
        <p className="header">Files</p>
        <div className="grid">
          {[1, 2, 3, 4, 5].map((_, i) => (
            <FileCard key={i} doubleClickImage={() => setShowModal(true)} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
