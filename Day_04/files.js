 const [showCategoryList, setShowCategoryList] = useState(false);
  const [showCarList, setShowCarList] = useState(false);
  const [showBikeList, setShowBikeList] = useState(false);
  const [showHyundaiList, setShowHyundaiList] = useState(false);

<div className="dropdown justify-items-center items-center relative inline-block">
          <button
            className="dropbtn p-2 m-2 px-8 mx-10 bg-yellow-700 hover:bg-yellow-500 text-white rounded-md"
            onClick={() => {
              !showCategoryList
                ? setShowCategoryList(true)
                : setShowCategoryList(false);
              setShowCarList(false);
              setShowBikeList(false);
            }}
          >
            Category
          </button>

          {showCategoryList && (
            <div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
              <Link
                to="/"
                className="car block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => setShowCarList(true)}
                onMouseLeave={() => {
                  showBikeList ? setShowCarList(false) : null;
                }}
              >
                Car
              </Link>
              <Link
                to="/"
                className="bike block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => setShowBikeList(true)}
                onMouseLeave={() => {
                  showCarList ? setShowBikeList(false) : null;
                }}
              >
                Bike
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Biscuit
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Snacks
              </Link>
            </div>
          )}
          {showCarList && (
            <div className="car-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => setShowHyundaiList(true)}
                onMouseLeave={() => setShowHyundaiList(false)}
              >
                Hyundai
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Honda
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Maruti
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Skoda
              </Link>
            </div>
          )}
          {showBikeList && (
            <div className="bike-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                TVS
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Bajaj
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Honda
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Yamaha
              </Link>
            </div>
          )}
          {showHyundaiList && (
            <div className="hyundai-model absolute bg-amber-100 w-40 ml-80 shadow-lg">
              <Link to="/" className="block text-black px-3 py-4">
                Santro
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                I-10
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                Verna
              </Link>
              <Link to="/" className="block text-black px-3 py-4">
                I-20
              </Link>
            </div>
          )}
        </div>
