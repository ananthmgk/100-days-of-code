<div className="category-list absolute left-0 bg-amber-100 w-40 shadow-lg">
            {category.map((categories) => {
              return (
                <Link
                  to={"/"}
                  key={categories.id}
                  className="car block hover:bg-yellow-500 text-black px-3 py-4"
                >
                  {categories.name}
                </Link>
              );
            })}
          </div>
