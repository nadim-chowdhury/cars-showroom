import CustomFilter from "@/components/CustomFilter";
import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-10 padding-y" id="discover">
        <div className="home__text-container">
          <h3 className="text-3xl font-bold">Car Catalouge</h3>
          <p>Explore the cars You might like</p>
        </div>

        <div className="home__filters">
          <SearchBar />

          <div className="home__filter-container">
            <CustomFilter title="fuel" />
            <CustomFilter title="year" />
          </div>
        </div>
      </div>
    </main>
  );
}
