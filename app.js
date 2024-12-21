// App Component

function App() {
  const assets = {
    article: "./assets/images/illustration-article.svg",
    avatar: "./assets/images/image-avatar.webp",
  };

  return (
    <>
      <main className="main">
        <article className="card">
          <div className="card-wrapper">
            <div className="card-image">
              <img src={assets.article} alt="" />
            </div>
            <div className="card-text">
              <span className="learning">Learning</span>
              <span className="date">Published 21 Dec 2023</span>
              <h1 className="title">HTML & CSS foundations</h1>
              <p>These languages are the backbone of every website, defining structure, content, and presentation.</p>
            </div>
            <div className="card-footer">
              <img src={assets.avatar} alt="" className="avatar" />
              <p className="author">Greg Hooper</p>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}

// Render the App
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
