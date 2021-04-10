
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

export default function Seo({ title, description, image }) {
  const router = useRouter();
  const canonicalURL = "https://readblog.netlify.app" + router.asPath;
  return (
    <NextSeo
      title={`${title} | Read Blog`}
      description={description}
      canonical={canonicalURL}
      openGraph={{
        url: canonicalURL,
        title: title,
        description: description,
        images: [{ url: image }],
        site_name: "Read Blog",
      }}
      twitter={{
        handle: "@null",
        site: "@null",
        cardType: "summary_large_image",
      }}
    />
  );
}