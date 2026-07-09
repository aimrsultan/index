import {
	SITE,
	canonical,
	amphtml,
	ogImage,
	sanitizeSlug,
	escapeHTML,
	escapeJSON,
	cleanDescription
} from "./config";

export function seo({
	title = "",
	description = "",
	slug = "",
	image = "",
	type = "article",
	published = "",
	updated = "",
	kategori = "",
	kategoriSlug = ""
}) {

	const cleanDesc = cleanDescription(description);
	const safeSlug = sanitizeSlug(slug);

	const isHome = !safeSlug;

	const url = canonical(isHome ? "/" : "/" + safeSlug);
	const amp = amphtml(isHome ? "/" : "/" + safeSlug);
	const og = image || ogImage(safeSlug);

	const datePublished = published || new Date().toISOString();
	const dateModified = updated || datePublished;

	// ---------- Breadcrumb ----------
	let breadcrumb = `
{
	"@type":"ListItem",
	"position":1,
	"name":"Home",
	"item":"${SITE.domain}"
}
`;

	if (!isHome && kategori && kategoriSlug) {
		breadcrumb += `,
{
	"@type":"ListItem",
	"position":2,
	"name":"${escapeJSON(kategori)}",
	"item":"${canonical(`/kategori/${kategoriSlug}`)}"
},
{
	"@type":"ListItem",
	"position":3,
	"name":"${escapeJSON(title)}",
	"item":"${url}"
}`;
	} else if (!isHome) {
		breadcrumb += `,
{
	"@type":"ListItem",
	"position":2,
	"name":"${escapeJSON(title)}",
	"item":"${url}"
}`;
	}

	// ---------- Structured Data ----------
	const schema = isHome
		? `
{
	"@context":"https://schema.org",
	"@type":"WebSite",
	"name":"${escapeJSON(SITE.name)}",
	"url":"${SITE.domain}",
	"potentialAction":{
		"@type":"SearchAction",
		"target":"${SITE.domain}/search?q={search_term_string}",
		"query-input":"required name=search_term_string"
	}
},
{
	"@context":"https://schema.org",
	"@type":"WebPage",
	"name":"${escapeJSON(title)}",
	"url":"${url}",
	"description":"${escapeJSON(cleanDesc)}"
}
`
		: `
{
	"@context":"https://schema.org",
	"@type":"BlogPosting",
	"headline":"${escapeJSON(title)}",
	"description":"${escapeJSON(cleanDesc)}",
	"image":"${og}",
	"url":"${url}",
	"mainEntityOfPage":"${url}",
	"datePublished":"${datePublished}",
	"dateModified":"${dateModified}",
	"articleSection":"${escapeJSON(kategori || "Artikel")}",
	"author":{
		"@type":"Organization",
		"name":"${escapeJSON(SITE.name)}"
	},
	"publisher":{
		"@type":"Organization",
		"name":"${escapeJSON(SITE.name)}",
		"logo":{
			"@type":"ImageObject",
			"url":"${canonical("/logo.png")}"
		}
	}
}
`;

	return `
<title>${escapeHTML(title)}</title>

<meta name="description" content="${escapeHTML(cleanDesc)}">

<link rel="canonical" href="${url}">
<link rel="amphtml" href="${amp}">

<meta name="robots" content="index,follow,max-image-preview:large">

<meta property="og:type" content="${isHome ? "website" : type}">
<meta property="og:site_name" content="${SITE.name}">
<meta property="og:title" content="${escapeHTML(title)}">
<meta property="og:description" content="${escapeHTML(cleanDesc)}">
<meta property="og:url" content="${url}">
<meta property="og:image" content="${og}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHTML(title)}">
<meta name="twitter:description" content="${escapeHTML(cleanDesc)}">
<meta name="twitter:image" content="${og}">

<script type="application/ld+json">
[
${schema}
]
</script>

<script type="application/ld+json">
{
	"@context":"https://schema.org",
	"@type":"BreadcrumbList",
	"itemListElement":[
${breadcrumb}
	]
}
</script>
`;
}
