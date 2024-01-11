 {showCategoryList && (
            <div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
              {categories.map((category) => {
                return (
                  <Link
                    to={"/"}
                    key={category.id}
                    className="block hover:bg-yellow-500 text-black px-3 py-4"
                    onMouseEnter={(e) => {
                      if (e.target.innerText === category.name) {
                        
                      }
                    }}
                  >
                    {category.name}
                  </Link>
                );
              })}
            </div>
          )}
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
