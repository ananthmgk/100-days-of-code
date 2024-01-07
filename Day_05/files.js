
{
  showCategoryList && (
    <div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
      <Link
        to="/"
        className="car block hover:bg-yellow-500 text-black px-3 py-4"
        onMouseEnter={() => {
          setTimeout(() => {
            setShowCarList(true);
            setShowBikeList(false);
            setShowBiscuitList(false);
            setShowAppliancesList(false);
          }, 100);
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
          setTimeout(() => {
            setShowBikeList(true);
            setShowCarList(false);
            setShowBiscuitList(false);
            setShowAppliancesList(false);
          }, 100);
        }}
        // onMouseLeave={() => setShowBikeList(false)}
      >
        Bikes
      </Link>
      <Link
        to="/"
        className="biscuit block hover:bg-yellow-500 text-black px-3 py-4"
        onMouseEnter={() => {
          setTimeout(() => {
            setShowBiscuitList(true);
            setShowBikeList(false);
            setShowAppliancesList(false);
          }, 100);
        }}
      >
        Biscuits
      </Link>
      <Link
        to="/"
        className="home-appliances block hover:bg-yellow-500 text-black px-3 py-4"
        onMouseEnter={() => {
          setTimeout(() => {
            setShowAppliancesList(true);
            setShowBiscuitList(false);
          }, 100);
        }}
      >
        Home Appliances
      </Link>
    </div>
  );
}
