import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import JsonLd from "@/components/SEO/JsonLd";
import { services } from "@/lib/services-data";
import { createMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
export const metadata=createMetadata({title:"IT & Security Services in Haryana | Corefix Technologies",description:"Explore CCTV, IT setup, networking, dashcam, perimeter security, fire alarm, PA and educational technology services across Haryana and India.",path:"/services",keywords:["CCTV installation","IT setup","networking solutions","dashcam wholesale","fire alarm installation","Haryana","Pan-India"]});
export default function ServicesPage(){const breadcrumb={"@context":"https://schema.org","@type":"BreadcrumbList","itemListElement":[{"@type":"ListItem","position":1,name:"Home",item:siteConfig.url},{"@type":"ListItem","position":2,name:"Services",item:`${siteConfig.url}/services`}]};return <><JsonLd data={breadcrumb}/><Hero eyebrow="Corefix Services" title="IT, Security & Infrastructure Services" description="Complete technology services for businesses, factories, schools, colleges, warehouses, commercial buildings and institutional projects."/><section className="bg-core-950"><div className="mx-auto max-w-7xl px-3 py-12 sm:px-4 sm:py-20 lg:px-8"><div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">{services.map(s=><ServiceCard key={s.slug} service={s}/>)}</div></div></section><CTASection/></>;}
