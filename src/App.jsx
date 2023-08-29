import { useState } from "react";
import { FolderCard, FileCard, Modal, Dropdown } from "./components";

function App() {
  const [filter, setFilter] = useState("");

  return (
    <>
      <div>
        <Dropdown
          value={filter}
          options={["By name", "By time created"]}
          onSelect={(value) => setFilter(value)}
        />
      </div>
      <p>Folder</p>
      <div>
        <FolderCard />
      </div>
      <p>Files</p>
      <div>
        <FileCard />
      </div>
    </>
  );
}

export default App;
