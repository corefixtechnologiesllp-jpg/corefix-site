import Image from "next/image";
import Link from "next/link";
const navigation=[{href:"/",label:"Home"},{href:"/about",label:"About"},{href:"/services",label:"Services"},{href:"/products",label:"Products"},{href:"/projects",label:"Projects"},{href:"/blog",label:"Blog"},{href:"/contact",label:"Contact"}];
export default function Header(){
 return <header className="sticky top-0 z-50 border-b border-core-700 bg-core-950/95 backdrop-blur">
  <div className="mx-auto flex h-16 max-w-7xl items-center gap-3 px-3 sm:h-[72px] sm:px-4 lg:px-8">
   <Link href="/" aria-label="Corefix Technologies LLP home" className="flex min-w-0 items-center">
    <Image src="/images/corefix-logo.png" alt="Corefix Technologies LLP logo" width={190} height={54} priority className="h-auto w-[132px] object-contain sm:w-[160px] lg:w-[185px]"/>
   </Link>
   <nav aria-label="Main navigation" className="ml-auto hidden items-center gap-5 lg:flex">
    {navigation.map(item=><Link key={item.href} href={item.href} className="text-sm font-semibold text-white/80 hover:text-yellow-400">{item.label}</Link>)}
    <Link href="/contact" className="border border-yellow-400 bg-yellow-400 px-5 py-2 text-sm font-bold text-black hover:bg-yellow-300">Request Quote</Link>
   </nav>
   <Link href="/contact" className="ml-auto border border-yellow-400 px-3 py-2 text-xs font-bold text-yellow-400 sm:px-4 sm:text-sm lg:hidden">Quote</Link>
  </div>
 </header>;
}
