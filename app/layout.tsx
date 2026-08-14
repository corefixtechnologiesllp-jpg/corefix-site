import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";
import "./globals.css";
export const metadata:Metadata={
 metadataBase:new URL(siteConfig.url),
 title:{default:"IT & Security Infrastructure in Haryana | Corefix Technologies",template:"%s"},
 description:siteConfig.description,
 applicationName:siteConfig.name,
 authors:[{name:siteConfig.name}],
 creator:siteConfig.name,publisher:siteConfig.name,
 robots:{index:true,follow:true},
 alternates:{canonical:siteConfig.url},
 openGraph:{type:"website",locale:"en_IN",siteName:siteConfig.name,title:"IT & Security Infrastructure in Haryana | Corefix Technologies",description:siteConfig.description,url:siteConfig.url,images:[{url:"/og-image.svg",width:1200,height:630,alt:"Corefix Technologies LLP"}]},
 twitter:{card:"summary_large_image",title:"IT & Security Infrastructure in Haryana | Corefix Technologies",description:siteConfig.description,images:["/og-image.svg"]}
};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="en-IN"><body><Header/><main>{children}</main><Footer/></body></html>;}
