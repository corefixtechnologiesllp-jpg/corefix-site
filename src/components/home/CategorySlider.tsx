import CategoryCard from "./CategoryCard";
import { categories } from "@/data/categories/categories";

export default function CategorySlider() {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="font-semibold uppercase tracking-widest text-[#D97706]">
              Categories
            </p>

            <h2 className="mt-2 text-3xl font-black text-gray-900">
              Shop by Category
            </h2>
          </div>
        </div>

        <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}