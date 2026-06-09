import { getAffiliate } from "../config";

export function footer(page){

  const links =
    getAffiliate(page.kategori);

  const affiliateHtml =
    links.map(link => `
<a
href="${link.url}"
target="_blank"
rel="nofollow sponsored noopener">
${link.name}
</a>
`).join("");

  return `
footer

`;
}
