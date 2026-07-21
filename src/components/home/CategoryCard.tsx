import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Category } from "@/types/category";

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({
  category,
}: CategoryCardProps) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group block min-w-[220px] sm:min-w-[240px] lg:min-w-[260px]"
    >
      <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
          <Image
            src={category.image}
            alt={category.name}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
        </div>

        <div className="border-t-4 border-[#F59E0B] p-5">
          <h3 className="text-lg font-bold text-gray-900">
            {category.name}
          </h3>

          <p className="mt-2 line-clamp-2 text-sm text-gray-600">
            {category.description}
          </p>

          <div className="mt-4 flex items-center gap-2 font-semibold text-[#D97706]">
            Explore
            <ArrowRight
              size={18}
              className="transition group-hover:translate-x-1"
            />
          </div>
        </div>
      </article>
    </Link>
  );
}