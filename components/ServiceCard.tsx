import Link from "next/link";
import type { Service } from "@/lib/services-data";
export default function ServiceCard({service}:{service:Service}){
 return <Link href={`/services/${service.slug}`} className="group flex min-h-[138px] flex-row items-start gap-3 border border-white/10 bg-white/[.03] p-3.5 transition hover:-translate-y-1 hover:border-yellow-400/50 hover:bg-white/[.06] sm:min-h-[164px] sm:gap-5 sm:p-5">
  <div className="flex h-10 w-10 shrink-0 items-center justify-center border border-yellow-400/40 bg-yellow-400/10 text-[10px] font-black text-yellow-400 sm:h-12 sm:w-12 sm:text-xs">{service.icon}</div>
  <div className="min-w-0">
   <h3 className="text-base font-bold leading-5 text-white group-hover:text-yellow-400 sm:text-xl sm:leading-6">{service.title}</h3>
   <p className="mt-2 line-clamp-3 text-xs leading-5 text-white/55 sm:mt-3 sm:text-sm sm:leading-6">{service.description}</p>
   <div className="mt-3 text-xs font-bold text-yellow-400 sm:mt-4 sm:text-sm">View service →</div>
  </div>
 </Link>;
}
