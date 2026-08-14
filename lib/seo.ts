import type { Metadata } from "next";
import { siteConfig } from "./site";

type SEOInput = { title:string; description:string; path:string; keywords?:string[] };

function optimizeDescription(description:string) {
  let value=description.trim().replace(/\s+/g," ");
  if(value.length>160) value=value.slice(0,157).replace(/\s+\S*$/,"")+"...";
  const ctas=[" Contact Corefix Technologies today."," Request a project consultation today."," Contact our team for a project consultation."];
  let i=0;
  while(value.length<150 && i<ctas.length) value+=ctas[i++];
  if(value.length>160) value=value.slice(0,157).replace(/\s+\S*$/,"")+"...";
  return value;
}
export function createMetadata({title,description,path,keywords=[]}:SEOInput):Metadata {
  const optimizedDescription=optimizeDescription(description), url=`${siteConfig.url}${path}`;
  return {
    title,description:optimizedDescription,keywords,metadataBase:new URL(siteConfig.url),
    alternates:{canonical:url},
    openGraph:{type:"website",locale:"en_IN",url,siteName:siteConfig.name,title,description:optimizedDescription,images:[{url:"/og-image.svg",width:1200,height:630,alt:"Corefix Technologies LLP"}]},
    twitter:{card:"summary_large_image",title,description:optimizedDescription,images:["/og-image.svg"]},
    robots:{index:true,follow:true,maxImagePreview:"large",maxSnippet:-1,maxVideoPreview:-1}
  };
}
