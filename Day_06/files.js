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
                onMouseEnter={() => {
                  setShowCarList(true);
                  setShowBikeList(false);
                  setShowBiscuitList(false);
                  setShowAppliancesList(false);
                }}
                // onMouseLeave={() => {
                //   !showCarList ? setShowCarList(false) : setShowCarList(true);
                // }}
              >
                Cars
              </Link>
              <Link
                to="/"
                className="bike block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowBikeList(true);
                  setShowCarList(false);
                  setShowBiscuitList(false);
                  setShowAppliancesList(false);
                }}
                // onMouseLeave={() => setShowBikeList(false)}
              >
                Bikes
              </Link>
              <Link
                to="/"
                className="biscuit block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowBiscuitList(true);
                  setShowBikeList(false);
                  setShowAppliancesList(false);
                }}
              >
                Biscuits
              </Link>
              <Link
                to="/"
                className="home-appliances block hover:bg-yellow-500 text-black px-3 py-4"
                onMouseEnter={() => {
                  setShowAppliancesList(true);
                  setShowBiscuitList(false);
                }}
              >
                Home Appliances
              </Link>
            </div>
          )}
          {showCarList && (
            <div className="car-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
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
          {showBiscuitList && (
            <div className="biscuit-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Good Day
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Parle G
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Britannia
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Sunfeast
              </Link>
            </div>
          )}
          {showAppliancesList && (
            <div className="appliance-list absolute bg-amber-100 w-40 ml-40 shadow-lg">
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                TV
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Refrigerator
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Washing Machine
              </Link>
              <Link
                to="/"
                className="block hover:bg-yellow-500 text-black px-3 py-4"
              >
                Air Conditioner
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
