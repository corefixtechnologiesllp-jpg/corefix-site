import { notFound } from "next/navigation";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/SEO/JsonLd";
import { getProductCategory, productCategories } from "@/lib/products-data";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export const dynamicParams=false;
export function generateStaticParams(){return productCategories.map(category=>({category:category.slug}));}
export async function generateMetadata({params}:{params:Promise<{category:string}>}){
 const {category:slug}=await params; const category=getProductCategory(slug); if(!category)return {};
 return createMetadata({title:category.seoTitle,description:`${category.name} supplied for commercial, industrial and institutional projects in Haryana, Delhi NCR and across India. Request a project quote from Corefix.`,path:`/products/${category.slug}`,keywords:category.keywords});
}
export default async function ProductCategoryPage({params}:{params:Promise<{category:string}>}){
 const {category:slug}=await params; const category=getProductCategory(slug); if(!category)notFound();
 const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,name:"Home",item:siteConfig.url},{"@type":"ListItem","position":2,name:"Products",item:`${siteConfig.url}/products`},{"@type":"ListItem","position":3,name:category.name,item:`${siteConfig.url}/products/${category.slug}`}]};
 const serviceMap:Record<string,string>={"cctv-security":"/services/cctv-installation","dashcams-car-cameras":"/services/car-camera-dashcam-wholesale","networking":"/services/networking-system-integration","perimeter-security":"/services/electric-fencing-perimeter-security","pa-systems":"/services/pa-broadcasting-systems","fire-alarm-systems":"/services/fire-smoke-alarm-systems","smart-classroom":"/services/smart-classroom-setup","conference-room-av":"/services/conference-room-av-setup"};
 const serviceLink=serviceMap[category.slug];
 const collectionSchema={"@context":"https://schema.org","@type":"CollectionPage","name":category.name,"description":category.description,"url":`${siteConfig.url}/products/${category.slug}`,"isPartOf":{"@type":"WebSite","name":siteConfig.name,"url":siteConfig.url}};
 const faqSchema={"@context":"https://schema.org","@type":"FAQPage","mainEntity":category.faqs.map(f=>({"@type":"Question",name:f.question,acceptedAnswer:{"@type":"Answer",text:f.answer}}))};
 const keywordText=category.keywords.slice(0,10).join(", ");
 return <>
  <JsonLd data={breadcrumb}/><JsonLd data={collectionSchema}/><JsonLd data={faqSchema}/>
  <section className="bg-core-950"><div className="mx-auto max-w-7xl px-3 py-14 sm:px-4 sm:py-20 lg:px-8"><Link href="/products" className="text-xs font-bold text-yellow-400 sm:text-sm">← All Products</Link><div className="mt-6 max-w-4xl"><p className="text-xs font-black uppercase tracking-[.18em] text-yellow-400 sm:text-sm">Product Category</p><h1 className="mt-3 text-3xl font-black leading-tight sm:text-4xl md:text-5xl">{category.name}</h1><p className="mt-5 max-w-3xl text-sm leading-6 text-white/65 sm:text-base sm:leading-7 lg:text-lg">{category.description}</p></div></div></section>
  <section className="bg-black"><div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-20 lg:px-8"><div className="max-w-4xl space-y-5 text-sm leading-7 text-white/65 sm:text-base sm:leading-8"><h2 className="text-2xl font-black text-white sm:text-3xl">{category.name} for Commercial & Project Supply</h2><p>Corefix Technologies supplies and integrates {category.name.toLowerCase()} for {category.focus}. Product selection is based on application, environment, compatibility, quantity, installation conditions and future expansion. This makes the category suitable for project procurement rather than only individual retail purchases.</p><p>For buyers searching for terms such as {keywordText}, the requirement can be converted into a practical product and infrastructure specification. Corefix can coordinate equipment supply with installation, configuration and related systems where required. For bulk quantities, customers can share the required model, technical specification, quantity and delivery location so the quotation can be prepared around the actual project.</p><p>The same product category may serve very different environments. A factory, school, warehouse, office or government facility can have different coverage, capacity, mounting, connectivity and operating requirements. Corefix therefore focuses on project-specific selection and integration rather than recommending a single configuration for every customer.</p></div><div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">{category.features.map(f=><div key={f} className="border border-white/10 bg-white/[.03] p-4 text-sm text-white/75">✓ {f}</div>)}</div><div className="mt-8 flex flex-wrap gap-3"><Link href="/contact" className="bg-yellow-400 px-6 py-3 text-sm font-black text-black">Request Product Quote</Link>{serviceLink&&<Link href={serviceLink} className="border border-white/20 px-6 py-3 text-sm font-bold text-white">View Related Service</Link>}</div></div></section>
  <section className="bg-core-950"><div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-20 lg:px-8"><h2 className="text-2xl font-black sm:text-3xl">Frequently Asked Questions</h2><div className="mt-6 grid gap-3 md:grid-cols-2">{category.faqs.map(f=><details key={f.question} className="border border-white/10 bg-white/[.03] p-4"><summary className="cursor-pointer text-sm font-bold">{f.question}</summary><p className="mt-3 text-sm leading-6 text-white/60">{f.answer}</p></details>)}</div></div></section>
  <CTASection/>
 </>;
}
