const Cards = () => {
  return (
    <section className="max-w-screen-2xl mx-auto py-32">
      <div className="grid lg:grid-cols-3 gap-20 w-11/12 mx-auto">
        {/* 1  */}
        <div className="card w-11/12 md:w-8/12 lg:w-11/12 card-bg shadow-xl mx-auto">
          <figure>
            <img src="https://i.ibb.co/Ypngzwk/game1.png" alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gaming Console</h2>
            <p>
              {" "}
              Gaming consoles are specialized electronic devices designed
              primarily for playing video games. They typically connect to a
              television or monitor and use controllers to interact with the
              games.
            </p>
            <div className="card-actions justify-center my-4">
              <button className="btn btn-primary">Play Now</button>
            </div>
          </div>
        </div>
        {/* 2 */}
        <div className="card w-11/12 md:w-8/12 lg:w-11/12 card-bg shadow-xl mx-auto">
          <figure>
            <img src="https://i.ibb.co/Ypngzwk/game1.png" alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gaming Console</h2>
            <p>
              {" "}
              Gaming consoles are specialized electronic devices designed
              primarily for playing video games. They typically connect to a
              television or monitor and use controllers to interact with the
              games.
            </p>
            <div className="card-actions justify-center my-4">
              <button className="btn btn-primary">Play Now</button>
            </div>
          </div>
        </div>
        {/* 3 */}
        <div className="card w-11/12 md:w-8/12 lg:w-11/12 card-bg shadow-xl mx-auto">
          <figure>
            <img src="https://i.ibb.co/Ypngzwk/game1.png" alt="image" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Gaming Console</h2>
            <p>
              {" "}
              Gaming consoles are specialized electronic devices designed
              primarily for playing video games. They typically connect to a
              television or monitor and use controllers to interact with the
              games.
            </p>
            <div className="card-actions justify-center my-4">
              <button className="btn btn-primary">Play Now</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cards;
