import React from "react";
import Header from "./header";
import Nav from "./nav";
import Stories from "./stories";
import Loading from "./loading";

const navItems = ["arts", "books", "fashion", "food", "movies", "travel"];
const nytapi = "0vivzjpviFu0asEzv5I3fzMtaYv9EmPC";

function App() {
  const [stories, setStories] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [section, setSection] = React.useState("arts");

  // React.useEffect(() => {
  //   const url = new URL(window.location.href);
  //   const hash = url.hash.slice(1);
  //   if (hash !== "undefined") {
  //     console.log(" hash ", hash);
  //     setSection(hash);
  //   } else {
  //     setSection("arts");
  //   }
  // }, []);

  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${nytapi}`
    )
      .then((response) => response.json())
      .then((data) => setStories(data.results))
      .then(setLoading(false))
      .catch((error) => {
        console.log(error);
      });
  }, [section]);

  return (
    <>
      <Header siteTitle="All the news the Fits We Print" />

      <Nav navItems={navItems} setSection={setSection} section={section} />

      {loading || section.length === 0 ? (
        <Loading />
      ) : (
        <Stories stories={stories} section={section} />
      )}
    </>
  );
}

export default App;
