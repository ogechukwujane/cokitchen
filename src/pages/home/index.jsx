import { useEffect, useMemo, useState } from "react";
import { FolderCard, FileCard, Modal, Dropdown } from "../../components";
import searchIcon from "../../assets/search-icon.svg";
import "./home.scss";
import { fetcher } from "../../api/fetcher";
import { isImage } from "../../utils";

export const Home = () => {
  const [filter, setFilter] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [param, setParam] = useState("/");
  const [modalData, setModalData] = useState({});
  const [searchData, setSearchData] = useState("");
  const [allFileData, setAllFileData] = useState([]);
  const { data, loading } = fetcher(param);

  const fileData = data?.filter((item) => item.type === "file");
  const folderData = data?.filter((item) => item.type === "folder");

  useEffect(() => {
    if (!searchData && !filter) {
      setAllFileData(fileData);
    }
    if (searchData) {
      const searchResult = fileData?.filter((item) =>
        item.name.toLowerCase().includes(searchData.toLowerCase())
      );
      setAllFileData(searchResult);
    }
    if (filter === "By name") {
      const res = fileData.slice().sort((a, b) => a.name.localeCompare(b.name));
      setAllFileData(res);
    }
    if (filter === "By time created") {
      const res = fileData
        .slice()
        .sort((a, b) => b.created_at.localeCompare(a.created_at));
      setAllFileData(res);
    }
  }, [searchData, fileData]);

  const handleCardDoubleClick = async (data) => {
    if (isImage(data.name)) {
      setModalData(data);
      setShowModal(true);
    } else {
      try {
        const response = await fetch(data.src);
        const blob = await response.blob();

        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = data.name;
        anchor.target = "_blank";
        anchor.rel = "noopener noreferrer";
        document.body.appendChild(anchor);
        anchor.click();
        document.body.removeChild(anchor);
        URL.revokeObjectURL(anchor.href);
      } catch (error) {
        console.error("Error downloading document:", error);
      }
    }
  };

  return (
    <>
      {loading ? (
        <h2 className="loader">Loading...</h2>
      ) : (
        <>
          {showModal && (
            <Modal
              data={modalData}
              showModal={showModal}
              onClickModal={() => setShowModal(false)}
            />
          )}
          <div className="Home">
            <div className="flexbox">
              <Dropdown
                value={filter}
                options={["By name", "By time created"]}
                onSelect={(value) => setFilter(value)}
              />
              <div className="search__wrap">
                <img src={searchIcon} alt="" />
                <input
                  placeholder="Search"
                  className="input"
                  value={searchData}
                  onChange={(e) => {
                    setFilter("");
                    setSearchData(e.target.value);
                  }}
                />
              </div>
            </div>
            <p className="header">Folder</p>
            <div className="container">
              {folderData?.map((data) => (
                <FolderCard
                  data={data}
                  key={data.id}
                  handleDoubleClick={() => {
                    setParam(`/file/${data.id}`);
                  }}
                />
              ))}
            </div>
            <p className="header">Files</p>
            <div className="grid">
              {allFileData?.map((data) => (
                <FileCard
                  key={data.id}
                  data={data}
                  doubleClickImage={() => handleCardDoubleClick(data)}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
};
