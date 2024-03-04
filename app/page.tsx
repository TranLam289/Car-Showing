"use client";
import { Hero } from "@/components";
import SearchBar from "@/components/SearchBar";
import { CustomFilter, CarCard } from "@/components";
import { fetchCars } from "@/utils/index";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Home() {
  // const allCars = fetchCars();
  const [allCars, setAllCars] = useState<any[]>([]);
  // console.log(allCars);

  useEffect(() => {
    fetchCars().then((data) => {
      setAllCars(data);
    });
    // fetchCars(setAllCars);
  }, []);

  const isDataEmpty = !Array.isArray(allCars) || allCars.length < 1 || !allCars;

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Car Catalogue</h1>
          <p>Explore out cars you might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars?.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">No results found</h2>
            {/* <p>{allCars?.message}</p> */}
          </div>
        )}

        <Link
          className="text-blue-500 hover:text-blue-700 font-bold underline"
          href="https://nextjs.org/docs/app"
        >
          Dashboard
        </Link>
      </div>
    </main>
  );
}
