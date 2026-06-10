import { getPosts, getPost } from "../lib/api";
import {
  SITE,
  canonical,
  ogImage,
  sanitizeSlug,
  stripHTML,
  readingTime,
  cleanDescription,
  postImage,
  cardImage,
  escapeHTML
} from "../lib/config";
import { seo } from "../lib/seo";
import { withCache } from "../lib/cache";

export async function onRequest(context) {
  return withCache(context, 300, async () => {
    try {
      let { slug } = context.params;
      slug = sanitizeSlug(slug);

      const post = await getPost(slug);

      if (!post) {
        return new Response("404 Not Found", {
          status: 404
        });
      }

      let layout;

      switch (post.kategori) {
        case "aimrferdy":
          ({ layout } = await import("../lib/ferdy/render"));
          break;

        case "robopragma":
          ({ layout } = await import("../lib/robo/render"));
          break;

        default:
          ({ layout } = await import("../lib/render"));
      }

      const posts = await getPosts();

      const related = posts
        .filter(
          p =>
            sanitizeSlug(p.slug) !== slug &&
            p.kategori === post.kategori
        )
        .slice(0, 6);

      const linkedContent = String(post.content || "")
        .replace(/"\s*>/g, ">");

      const { toc, content } = generateTOC(linkedContent);

      const read = readingTime(content);

      let desc = stripHTML(content).slice(0, 160);
      desc = cleanDescription(desc);

      const url = canonical("/" + slug);
      const og = ogImage(slug);

      const page = {
        name: SITE.name,
        canonical: url,
        description: desc,
        image: og
      };

const breadcrumb = `
<nav class='breadcrumbs h-text-truncate'>
<a href="/">Home</a>
<span>›</span>
<a class='js-breadcrumb-category' href='${url}'>
${page.name} Resmi
</a>
<span>›</span>
<a class='js-breadcrumb-category'
href="/kategori/${sanitizeSlug(post.kategori)}">
${escapeHTML(post.kategori)}
</a>
<span>›</span>
<span>${postImage(og, post.title)}</span>
</nav>
`;

      const relatedHTML = related
        .map(
          p => `
<div class="card">
<a href="/${p.slug}">
${cardImage(ogImage(p.slug), p.title)}
<h3>${escapeHTML(p.title)}</h3>
</a>
</div>
`
        )
        .join("");

      return layout({
        title: post.title,
        description: desc,
        canonical: url,
        image: og,
        schema: seo({
          title: post.title,
          description: desc,
          slug,
          kategori: post.kategori,
          published: post.created,
          updated: post.updated
        }),
        content: `

<div bis_skin_checked='1' class='js-canvas__body canvas__body'>
<div bis_skin_checked='1' class='grid-container'></div>
<div bis_skin_checked='1' class='context-header '>
<div bis_skin_checked='1' class='grid-container '>
${breadcrumb}
<div bis_skin_checked='1' class='item-header' data-view='itemHeader'>
<div bis_skin_checked='1' class='item-header__top'>
<div bis_skin_checked='1' class='item-header__title'>
<h1 class='t-heading -color-inherit -size-l h-m0 is-hidden-phone'>${postImage(og, post.title)}</h1>
<h1 class='t-heading -color-inherit -size-xs h-m0 is-hidden-tablet-and-above'> ${postImage(og, post.title)} </h1>
</div>
<div bis_skin_checked='1' class='item-header__price is-hidden-desktop'>
<a class='js-item-header__cart-button e-btn--3d -color-primary -size-m' data-view='modalAjax' href='${url}' rel='nofollow' title='Add to Cart'>
<span class='item-header__cart-button-icon'>
<i class='e-icon -icon-cart -margin-right'></i>
</span>
<span class='t-heading -size-m -color-light -margin-none'>
<b class='t-currency'><span class='js-item-header__price'>$88</span></b>
</span>
</a>
</div>
</div>
<div bis_skin_checked='1' class='item-header__details-section'>
<div bis_skin_checked='1' class='item-header__author-details'>
                                        By: <a class='js-by-author' href='${url}' rel='author'>AI MR FERDY</a>
</div>
<div bis_skin_checked='1' class='item-header__sales-count'>
<svg aria-labelledby='title' class='item-header__sales-count-icon' height='16px' role='img' viewBox='0 0 16 16' width='16px' xmlns='http://www.w3.org/2000/svg'>
<title>Cart</title>
<path d='M 0.009 1.349 C 0.009 1.753 0.347 2.086 0.765 2.086 C 0.765 2.086 0.766 2.086 0.767 2.086 L 0.767 2.09 L 2.289 2.09 L 5.029 7.698 L 4.001 9.507 C 3.88 9.714 3.812 9.958 3.812 10.217 C 3.812 11.028 4.496 11.694 5.335 11.694 L 14.469 11.694 L 14.469 11.694 C 14.886 11.693 15.227 11.36 15.227 10.957 C 15.227 10.552 14.886 10.221 14.469 10.219 L 14.469 10.217 L 5.653 10.217 C 5.547 10.217 5.463 10.135 5.463 10.031 L 5.487 9.943 L 6.171 8.738 L 11.842 8.738 C 12.415 8.738 12.917 8.436 13.175 7.978 L 15.901 3.183 C 15.96 3.08 15.991 2.954 15.991 2.828 C 15.991 2.422 15.65 2.09 15.23 2.09 L 3.972 2.09 L 3.481 1.077 L 3.466 1.043 C 3.343 0.79 3.084 0.612 2.778 0.612 C 2.777 0.612 0.765 0.612 0.765 0.612 C 0.347 0.612 0.009 0.943 0.009 1.349 Z M 3.819 13.911 C 3.819 14.724 4.496 15.389 5.335 15.389 C 6.171 15.389 6.857 14.724 6.857 13.911 C 6.857 13.097 6.171 12.434 5.335 12.434 C 4.496 12.434 3.819 13.097 3.819 13.911 Z M 11.431 13.911 C 11.431 14.724 12.11 15.389 12.946 15.389 C 13.784 15.389 14.469 14.724 14.469 13.911 C 14.469 13.097 13.784 12.434 12.946 12.434 C 12.11 12.434 11.431 13.097 11.431 13.911 Z'>
</path>
</svg>
<strong>888.888</strong> sales
                                    </div>
<div bis_skin_checked='1' class='item-header__envato-highlighted'>
<strong>SITUS CHEAT Zlot RESMI</strong>
<svg aria-labelledby='title' class='item-header__envato-checkmark-icon' height='16px' role='img' viewBox='0 0 14 14' width='16px' xmlns='http://www.w3.org/2000/svg'>
<title></title>
<path clip-rule='evenodd' d='M0.333252 7.00004C0.333252 3.31814 3.31802 0.333374 6.99992 0.333374C8.76803 0.333374 10.4637 1.03575 11.714 2.286C12.9642 3.53624 13.6666 5.23193 13.6666 7.00004C13.6666 10.6819 10.6818 13.6667 6.99992 13.6667C3.31802 13.6667 0.333252 10.6819 0.333252 7.00004ZM6.15326 9.23337L9.89993 5.48671C10.0227 5.35794 10.0227 5.15547 9.89993 5.02671L9.54659 4.67337C9.41698 4.54633 9.20954 4.54633 9.07993 4.67337L5.91993 7.83337L4.91993 6.84004C4.85944 6.77559 4.77498 6.73903 4.68659 6.73903C4.5982 6.73903 4.51375 6.77559 4.45326 6.84004L4.09993 7.19337C4.03682 7.25596 4.00133 7.34116 4.00133 7.43004C4.00133 7.51892 4.03682 7.60412 4.09993 7.66671L5.68659 9.23337C5.74708 9.29782 5.83154 9.33439 5.91993 9.33439C6.00832 9.33439 6.09277 9.29782 6.15326 9.23337Z' fill='#79B530' fill-rule='evenodd'></path>
</svg>
</div>
</div>
</div>
<!-- Desktop Item Navigation -->
<div bis_skin_checked='1' class='is-hidden-tablet-and-below page-tabs'>
<ul>
<li class='selected'><a class='js-item-navigation-item-details t-link -decoration-none' href='${url}'>Item Details</a>
</li>
<li><a class='js-item-navigation-reviews t-link -decoration-none' href=''><span>Reviews</span><span>
<div bis_skin_checked='1' class='rating-detailed-small'>
<div bis_skin_checked='1' class='rating-detailed-small__header'>
<div bis_skin_checked='1' class='rating-detailed-small__stars'>
<div bis_skin_checked='1' class='rating-detailed-small-center__star-rating'>
<i class='e-icon -icon-star'>
</i>
<i class='e-icon -icon-star'>
</i>
<i class='e-icon -icon-star'>
</i>
<i class='e-icon -icon-star'>
</i>
<i class='e-icon -icon-star'>
</i>
</div>

        5.00<span class='is-visually-hidden'>5.00 stars</span>
</div>
</div>
</div>
</span><span class='item-navigation-reviews-comments'>999</span></a></li>
<li><a class='js-item-navigation-comments t-link -decoration-none' href=''><span>Comments</span><span class='item-navigation-reviews-comments'>8.888</span></a></li>
<li><a class='js-item-navigation-support t-link -decoration-none'>Support</a>
</li>
</ul>
</div>
</div>
</div>
</div>
<style>
                                .n-columns-2 {
                                    display: grid;
                                    grid-template-columns: repeat(2, 1fr);
                                    font-weight: 700;
                                }
                                
                                .n-columns-2 a {
                                    text-align: center;
                                    margin: 3px;
                                }
                                
                                .login,
                                .register {
                                    color: #fff;
                                    padding: 10px 10px;
                                }
                                
                                .login,
                                .login-button {
                                    text-shadow: 2px 2px #0c0f12;
                                    border-radius: 10px 10px;
                                    border: 1px solid #000000;
                                    background: linear-gradient(to bottom, rgb(68, 64, 64) 0, rgb(68, 64, 64) 50%);
                                    color: #fff;
                                }
                                
                                .register,
                                .register-button {
                                    text-shadow: 2px 2px #000000;
                                    border-radius: 10px 10px;
                                    background: linear-gradient(to bottom, rgb(68, 64, 64) 0, rgb(68, 64, 64) 50%);
                                    border: 1px solid #000000;
                                }
                            </style>
<!-- Section 2 -->
<div class='section-2-container section-container section-container-gray-bg'>
<div class='container mt-1 pt-1'>
<div class='col-12'>
<div class='w-100 mt-4 mb-4 text-center'>
<div class='n-columns-2'>
<a class='login' href='https://server1.mrferdy.workers.dev' rel='nofollow noreferrer'>LOGIN</a>
<a class='register' href='https://server1.mrferdy.workers.dev' rel='nofollow noreferrer'>DAFTAR</a>
</div>
</div>
<!-- Section 2 -->
</div>
</div>
</div>
</div>
</div>
</div>
<!-- Tablet or below Item Navigation -->
<div bis_skin_checked='1' class='page-tabs--dropdown' data-target='.js-remote' data-view='replaceItemNavsWithRemote'>
<div bis_skin_checked='1' class='page-tabs--dropdown__slt-custom-wlabel'>
<div bis_skin_checked='1' class='slt-custom-wlabel--page-tabs--dropdown'>
<label>
<span class='js-label'> Item Details </span>
<span class='slt-custom-wlabel__arrow'>
<i class='e-icon -icon-arrow-fill-down'></i>
</span>
</label>
<select class='js-remote'>
<option data-url='/item/marketica-marketplace-wordpress-theme/8988002' selected='selected'>Item Details</option>
<option data-url='/item/marketica-marketplace-wordpress-theme/reviews/8988002'> Reviews (75)</option>
<option data-url='/item/marketica-marketplace-wordpress-theme/8988002/comments'> Comments (802)</option>
<option data-url='/item/marketica-marketplace-wordpress-theme/8988002/support'> Support</option>
</select>
</div>
</div>
</div>
<div bis_skin_checked='1' class='page-tabs'>
<ul class='right item-bookmarking__left-icons_hidden' data-view='bookmarkStatesLoader'>
<li class='js-favorite-widget item-bookmarking__control_icons--favorite' data-item-id='8988002'><a class='t-link -decoration-none' data-view='modalAjax' href='${url}'><span class='item-bookmarking__control--label'>Add to Favorites</span></a>
</li>
<li class='js-collection-widget item-bookmarking__control_icons--collection' data-item-id='8988002'><a class='t-link -decoration-none' data-view='modalAjax' href='${url}'><span class='item-bookmarking__control--label'>Add to Collection</span></a>
</li>
</ul>
</div>
<!-- </div> </div> -->
<div bis_skin_checked='1' class='content-main' id='content'>
<div bis_skin_checked='1' class='grid-container'>

<div bis_skin_checked='1'>
<link href='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiS42kjRyCZC-HH1uXEGs5jVqoty0flsNSEbhilzUVIfrHeAsSY4wgRsSeuww0rwSNTNvuudOaOTvw-6CjkJzVcNE31FGMsiCHKEx3IeYgsQhBVcakFtG9LbJcKXjC-2AhYVsr9VDqtUwzj-uMiq2YP-w7IODO-ZDOqLYA3TDMXZdY0YnTcUCI0mkqSae9n/s1600/logomrferdys.png'/>
<div bis_skin_checked='1' class='content-s '>
<div bis_skin_checked='1' class='item-bookmarking__left-icons__wrapper'>
<ul class='item-bookmarking__left-icons' data-view='bookmarkStatesLoader'>
<li class='item-bookmarking__control_icons--favorite'>
<span>
<a data-view='modalAjax' href='${url}' title='Add to Favorites'><span class='item-bookmarking__control--label'>Add to
                                                            Favorites</span></a>
</span>
</li>
<li class='item-bookmarking__control_icons--collection'>
<span>
<a data-view='modalAjax' href='${url}' title='Add to Collection'>
<span class='item-bookmarking__control--label'>Add to
                                                            Collection</span>
</a>
</span>
</li>
</ul>
</div>
<div bis_skin_checked='1' class='box--no-padding'>
<div bis_skin_checked='1' class='item-preview live-preview-btn--blue -preview-live'>
<a href='https://server1.mrferdy.workers.dev' target='_blank'>

<img alt='- WooCommerce eCommerce' height='500' sizes='(min-width: 1024px) 590px, (min-width: 1px) 100vw, 600px' src=${postImage(og,post.title)} srcset=${postImage(og,post.title)} width='500'/></a>
<div bis_skin_checked='1' class='js- item-preview-image__gallery' data-title=${postImage(og, post.title)} data-url='marketica-marketplace-wordpress-theme/screenshots/modal/8988002'>



<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/00-marketica-preview-sale37.jpg'>MARKETICA_PREVIEW/00-marketica-preview-sale37.jpg</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/01_marketica2_homepage.png'>MARKETICA_PREVIEW/01_marketica2_homepage.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/02_marketica2_shop_page.png'>MARKETICA_PREVIEW/02_marketica2_shop_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/03_marketica2_single_product_page.png'>MARKETICA_PREVIEW/03_marketica2_single_product_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/04_marketica2_cart_page.png'>MARKETICA_PREVIEW/04_marketica2_cart_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/05_marketica2_checkout_page.png'>MARKETICA_PREVIEW/05_marketica2_checkout_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/06_marketica2_myaccount_login_page.png'>MARKETICA_PREVIEW/06_marketica2_myaccount_login_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/07_marketica2_plan_and_pricing_page.png'>MARKETICA_PREVIEW/07_marketica2_plan_and_pricing_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/08_marketica2_team_members_page.png'>MARKETICA_PREVIEW/08_marketica2_team_members_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/09_marketica2_contact_page_template.png'>MARKETICA_PREVIEW/09_marketica2_contact_page_template.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/10_marketica2_blog_page.png'>MARKETICA_PREVIEW/10_marketica2_blog_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/11_marketica2_blog_post_formats.png'>MARKETICA_PREVIEW/11_marketica2_blog_post_formats.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/12_marketica2_single_product_page.png'>MARKETICA_PREVIEW/12_marketica2_single_product_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/13_marketica2_theme_customizer.png'>MARKETICA_PREVIEW/13_marketica2_theme_customizer.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/14_marketica2_visualcomposer_templates.png'>MARKETICA_PREVIEW/14_marketica2_visualcomposer_templates.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/15_marketica2_tablet_view.png'>MARKETICA_PREVIEW/15_marketica2_tablet_view.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/16_marketica2_tablet_view_offcanvas_menu.png'>MARKETICA_PREVIEW/16_marketica2_tablet_view_offcanvas_menu.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/17_marketica2_themeoptions_header.png'>MARKETICA_PREVIEW/17_marketica2_themeoptions_header.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/18_marketica2_themeoptions_footer.png'>MARKETICA_PREVIEW/18_marketica2_themeoptions_footer.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/19_marketica2_themeoptions_contact.png'>MARKETICA_PREVIEW/19_marketica2_themeoptions_contact.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/20_marketica2_themeoptions_woocommerce.png'>MARKETICA_PREVIEW/20_marketica2_themeoptions_woocommerce.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/21_marketica2_wcvendors_user_page.png'>MARKETICA_PREVIEW/21_marketica2_wcvendors_user_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/22_marketica2_wcvendors_vendor_page.png'>MARKETICA_PREVIEW/22_marketica2_wcvendors_vendor_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/23_marketica2_wcvendors_vendor_dashboard.png'>MARKETICA_PREVIEW/23_marketica2_wcvendors_vendor_dashboard.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/24_marketica2_wcvendors_shop_settings.png'>MARKETICA_PREVIEW/24_marketica2_wcvendors_shop_settings.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/25_marketica2_dokan_vendor_store_page.png'>MARKETICA_PREVIEW/25_marketica2_dokan_vendor_store_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/26_marketica2_dokan_vendor_review_page.png'>MARKETICA_PREVIEW/26_marketica2_dokan_vendor_review_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/27_marketica2_dokan_vendor_dashboard_page.png'>MARKETICA_PREVIEW/27_marketica2_dokan_vendor_dashboard_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/28_marketica2_dokan_vendor_dashboard_products_page.png'>MARKETICA_PREVIEW/28_marketica2_dokan_vendor_dashboard_products_page.png</a>
<a class='is-hidden' href='https://s3.envato.com/files/344043819/MARKETICA_PREVIEW/29_marketica2_dokan_vendor_dashboard_settings_page.png'>MARKETICA_PREVIEW/29_marketica2_dokan_vendor_dashboard_settings_page.png</a>
</div>
<div bis_skin_checked='1' class='item-preview__actions'>
<div bis_skin_checked='1' class='item-preview__preview-buttons' id='fullscreen'>
<a class='btn-icon live-preview' href='https://server1.mrferdy.workers.dev' rel='noopener nofollow' role='button' target='_blank'>
                                                        LOGIN
                                                    </a>
<a class='btn-icon screenshots' data-view='screenshotGallery' href='https://server1.mrferdy.workers.dev' rel='noopener' role='button' target='_blank'>
                                                        DAFTAR
                                                    </a>
</div>
</div>

<div class="post-content">
${toc}
${content}
</div>

<div class="related-posts">
${relatedHTML}
</div>



</div>
</div>
`
      });
    } catch (e) {
      return new Response(
        "Error: " + e.message,
        {
          status: 500
        }
      );
    }
  });
}

function escapeRegex(str = "") {
  return str.replace(
    /[.*+?^${}()|[\]\\]/g,
    "\\$&"
  );
}

function generateTOC(html = "") {
  const headings = [];

  const content = html.replace(
    /<h2>(.*?)<\/h2>/gi,
    (match, title) => {
      const clean = stripHTML(title);
      const id = sanitizeSlug(clean);

      headings.push({
        id,
        title: clean
      });

      return `<h2 id="${id}">${title}</h2>`;
    }
  );

  if (!headings.length) {
    return {
      toc: "",
      content
    };
  }

  const toc = `
<details class="toc">
<summary class="toc-title">
<span>📑 Daftar Isi</span>
<span class="toc-toggle"></span>
</summary>

<ul>
${headings
  .map(
    h => `
<li>
<a href="#${h.id}">
${escapeHTML(h.title)}
</a>
</li>
`
  )
  .join("")}
</ul>

</details>
`;

  return {
    toc,
    content
  };
}
