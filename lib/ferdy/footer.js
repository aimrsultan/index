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

<section data-url='/item/marketica-marketplace-wordpress-theme/8988002/recommended_items' data-view='recommendedItems' id='recommended_items'>
<div bis_skin_checked='1' class='author-recommended-collection'>
<ul class='author-recommended-collection__list' data-analytics-view-payload='{"eventName":"view_item_list","eventType":"user","ecommerce":{"currency":"USD","item_list_name":"Author Recommended tokopress","items":[{"affiliation":"${page.site_name}","item_id":26116208,"item_name":"Retrave | Travel \u0026 Tour Agency Elementor Template Kit","item_brand":"tokopress","item_category":"template-kits","item_category2":"elementor","item_category3":"travel-accomodation","price":"24","quantity":1,"index":1},{"affiliation":"${page.site_name}","item_id":26126773,"item_name":"Coursly | Education \u0026 Offline Course Elementor Template Kit","item_brand":"tokopress","item_category":"template-kits","item_category2":"elementor","item_category3":"education","price":"24","quantity":1,"index":2},{"affiliation":"${page.site_name}","item_id":26416085,"item_name":"Sweeding | Wedding Event Invitation Elementor Template Kit","item_brand":"tokopress","item_category":"template-kits","item_category2":"elementor","item_category3":"weddings","price":"24","quantity":1,"index":3}]},"item_list_id":8435762}'>
</ul>
</div>
<div bis_skin_checked='1'>
</div>
</section>
<div bis_skin_checked='1' data-view='itemPageScrollEvents'></div>
</div>
<div bis_skin_checked='1' class='sidebar-l sidebar-right'>
<div bis_skin_checked='1' class='pricebox-container'>
<div bis_skin_checked='1' class='purchase-panel'>
<div bis_skin_checked='1' class='purchase-form' id='purchase-form'>
<form accept-charset='UTF-8' action='${page.canonical}' data-analytics-click-payload='{"eventName":"add_to_cart","eventType":"user","quantityUpdate":false,"ecommerce":{"currency":"USD","value":37.0,"items":[{"affiliation":"${page.site_name}","item_id":8988002,"item_name":"${page.title}","item_brand":"tokopress","item_category":"wordpress","item_category2":"ecommerce","item_category3":"woocommerce","price":"37","quantity":1}]}}' data-analytics-has-custom-click='true' data-view='purchaseForm' method='post'>
<input autocomplete='off' name='authenticity_token' type='hidden' value='o7V7LGbBjnF9HgzqsCOek0VUbYNaqFcrL72zjeu3cGTv2_7pn5UklFm7XFtDaDCfkbbeD4zdIzwPzjrUhXtbHQ'/>
<div bis_skin_checked='1'>
<div bis_skin_checked='1' data-cookiebot-enabled='true' data-id='8988002' data-view='itemVariantSelector'>
<div bis_skin_checked='1' class='purchase-form__selection'>
<span class='purchase-form__license-type'>
<span class='flyout' data-view='flyout'>
<span class='js-license-selector__chosen-license purchase-form__license-dropdown'>Regular
                                                                            License</span>
<div bis_skin_checked='1' class='js-flyout__body flyout__body -padding-side-removed'>
<span class='js-flyout__triangle flyout__triangle'></span>
<div bis_skin_checked='1' class='license-selector' data-view='licenseSelector'>
<div bis_skin_checked='1' class='js-license-selector__item license-selector__item' data-license='regular' data-name='Regular License'>
<div bis_skin_checked='1' class='license-selector__license-type'>
<span class='t-heading -size-xxs'>Regular
                                                                                            License</span>
<span class='js-license-selector__selected-label e-text-label -color-green -size-s ' data-license='regular'>Selected</span>
</div>
<div bis_skin_checked='1' class='license-selector__price'>
<span class='t-heading -size-m h-m0'>
<b class='t-currency'><span class=''>$88</span></b>
</span>
</div>
<div bis_skin_checked='1' class='license-selector__description'>
<p class='t-body -size-m h-m0'>
                                                                    ${page.desc}</p>
</div>
</div>
</div>
<div bis_skin_checked='1' class='flyout__link'>
<p class='t-body -size-m h-m0'>
<a class='t-link -decoration-reversed' href='${page.canonical}/licenses/standard' target='_blank'>View
                                                                                        license details</a>
</p>
</div>
</div>
</span>
<input autocomplete='off' class='js-purchase-default-license' data-license='regular' id='license' name='license' type='hidden' value='regular'/>
</span>
<div bis_skin_checked='1' class='js-purchase-heading purchase-form__price t-heading -size-xxl'>
<b class='t-currency'><span class='js-purchase-price'>$10</span></b>
</div>
</div>
<div bis_skin_checked='1' class='purchase-form__license js-purchase-license is-active' data-license='regular'>
<price class='js-purchase-license-prices' data-license='regular' data-price-prepaid='$37' data-price-prepaid-upgrade='$46.38' data-support-extension-price='$15.63' data-support-extension-saving='$6.25' data-support-renewal-price='$10.00' data-support-upgrade-price='$9.38' data-support-upgrade-saving='$12'>
</price>
</div>
<div bis_skin_checked='1' class='purchase-form__support'>
<ul class='t-icon-list -font-size-s -icon-size-s -offset-flush'>
<li class='t-icon-list__item -icon-ok'>
<span class='is-visually-hidden'>Included:</span> Zlot Gachor
                                                    </li>
<li class='t-icon-list__item -icon-ok'>
<span class='is-visually-hidden'>Included:</span> Zlot Resmi Online
                                                    </li>
<li class='t-icon-list__item -icon-ok'>
<span class='is-visually-hidden'>Included:</span>${page.site_name} Resmi Terpercaya<span class='purchase-form__author-name'></span>
<a class='t-link -decoration-reversed js-support__inclusion-link' data-view='modalAjax' href='/item_support/what_is_item_support/8988002'>
<svg aria-labelledby='title' class='' height='13px' role='img' viewBox='0 0 12 13' width='12px' xmlns='http://www.w3.org/2000/svg'>
<title>More Info</title>
<path clip-rule='evenodd' d='M0 6.5a6 6 0 1 0 12 0 6 6 0 0 0-12 0zm7.739-3.17a.849.849 0 0 1-.307.664.949.949 0 0 1-.716.273c-.273 0-.529-.102-.716-.272a.906.906 0 0 1-.307-.665c0-.256.102-.512.307-.682.187-.17.443-.273.716-.273.273 0 .528.102.716.273a.908.908 0 0 1 .307.682zm-.103 6.34-.119.46c-.34.137-.613.24-.818.307a2.5 2.5 0 0 1-.716.103c-.409 0-.733-.103-.954-.307a.953.953 0 0 1-.341-.767c0-.12 0-.256.017-.375.017-.12.05-.273.085-.426l.426-1.517a7.14 7.14 0 0 1 .103-.41c.017-.119.034-.238.034-.357a.582.582 0 0 0-.12-.41c-.085-.068-.238-.119-.46-.119-.12 0-.239.017-.34.051-.069.03-.132.047-.189.064-.042.012-.082.024-.119.038l.12-.46c.234-.102.468-.18.69-.253l.11-.037c.24-.085.478-.119.734-.119.409 0 .733.102.954.307.222.187.341.477.341.784 0 .068 0 .187-.017.34v.003a2.173 2.173 0 0 1-.085.458l-.427 1.534-.102.41v.002c-.017.119-.034.237-.034.356 0 .204.051.34.136.409.137.085.307.119.46.102a1.3 1.3 0 0 0 .359-.051c.085-.051.17-.085.272-.12z' fill='#ff9204' fill-rule='evenodd'></path>
</svg>
</a>
</li>
</ul>
<div bis_skin_checked='1' class='purchase-form__upgrade purchase-form__upgrade--before-after-price'>
<div bis_skin_checked='1' class='purchase-form__upgrade-checkbox purchase-form__upgrade-checkbox--before-after-price'>
<input autocomplete='off' class='js-support__default' id='support_default' name='support' type='hidden' value='bundle_6month'/>
<input class='js-support__option' id='support' name='support' type='checkbox' value='bundle_12month'/>
</div>
<div bis_skin_checked='1' class='purchase-form__upgrade-info'>
<label class='purchase-form__label purchase-form__label--before-after-price' for='support'>
                                                                            Extend support to 12 months
                                                                            <span class='purchase-form__price purchase-form__price--before-after-price t-heading -size-xs h-pull-right'>
<span class='js-renewal__price t-currency purchase-form__renewal-price purchase-form__renewal-price--strikethrough'>$100.00</span>
<b class='t-currency'>
<span class='js-support__price'>$90.00</span>
</b>
</span>
</label>
</div>
</div>
</div>
</div>
<p class='t-body -size-m'>${page.desc}
                                        </p>
<div bis_skin_checked='1' class='purchase-form__cta-buttons'>
<div bis_skin_checked='1' class='purchase-form__button'>
</div>
</div>
<!-- <div bis_skin_checked='1' class='purchase-form__us-dollars-notice-container'> <p class='purchase-form__us-dollars-notice'><i/> <a href='https://server1.mrferdy.workers.dev' rel='nofollow noopener'> <img alt='Daftar Sekarang' height='auto' src='ttps://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhXQEiAxMBZRwc2QN6XroNDd__D10PLydW1h79RawO3pr-vIQm5-1mki7QHePaU8eiXbitNaEmfTc3chjIlPnRmPHOL10w7XxQ-5_5DT2gSFVQgHr-wtGuVtKHtChqgxBxJZ1z3o1wWXnEu3p4-Pb_KYPBcCbC4e3-0Yi44BDRWKz50wb-qIDwSATYcKZp9/s1600/button.webp' width='70%'/> </a> </p> </div> -->
</div>
</form>
</div>
</div>
</div>
<script type='text/javascript'>
//<![CDATA[
shortcut = {
  all_shortcuts: {},
  add: function(a, b, c) {
    var d = { type: "keydown", propagate: !1, disable_in_input: !1, target: document, keycode: !1 };
    if (c) for (var e in d) "undefined" == typeof c[e] && (c[e] = d[e]); else c = d;
    d = c.target, "string" == typeof c.target && (d = document.getElementById(c.target)),
    a = a.toLowerCase(),
    e = function(d) {
      d = d || window.event;
      if (c.disable_in_input) {
        var e;
        d.target ? e = d.target : d.srcElement && (e = d.srcElement), 3 == e.nodeType && (e = e.parentNode);
        if ("INPUT" == e.tagName || "TEXTAREA" == e.tagName) return;
      }
      d.keyCode ? code = d.keyCode : d.which && (code = d.which),
      e = String.fromCharCode(code).toLowerCase(),
      188 == code && (e = ","), 190 == code && (e = ".");
      var f = a.split("+"), g = 0, h = {
        "`": "~",1: "!",2: "@",3: "#",4: "$",5: "%",6: "^",7: "&",8: "*",9: "(",0: ")", "-": "_","=": "+",";": ":","'": '"',",": "<",".": ">", "/": "?","\\": "|"
      }, i = {
        esc: 27, escape: 27, tab: 9, space: 32, "return": 13, enter: 13, backspace: 8,
        left: 37, up: 38, right: 39, down: 40, f1: 112, f2: 113, f3: 114, f4: 115,
        f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123
      }, j = !1, l = !1, m = !1, n = !1, o = !1, p = !1, q = !1, r = !1;
      d.ctrlKey && (n = !0), d.shiftKey && (l = !0), d.altKey && (p = !0), d.metaKey && (r = !0);
      for (var s = 0; k = f[s], s < f.length; s++)
        "ctrl" == k || "control" == k ? (g++, m = !0) :
        "shift" == k ? (g++, j = !0) :
        "alt" == k ? (g++, o = !0) :
        "meta" == k ? (g++, q = !0) :
        1 < k.length ? i[k] == code && g++ :
        c.keycode ? c.keycode == code && g++ :
        e == k ? g++ :
        h[e] && d.shiftKey && (e = h[e], e == k && g++);
      if (g == f.length && n == m && l == j && p == o && r == q && (b(d), !c.propagate))
        return d.cancelBubble = !0, d.returnValue = !1, d.stopPropagation && (d.stopPropagation(), d.preventDefault()), !1
    },
    this.all_shortcuts[a] = { callback: e, target: d, event: c.type },
    d.addEventListener ? d.addEventListener(c.type, e, !1) :
    d.attachEvent ? d.attachEvent("on" + c.type, e) :
    d["on" + c.type] = e;
  },
  remove: function(a) {
    var a = a.toLowerCase(), b = this.all_shortcuts[a];
    delete this.all_shortcuts[a];
    if (b) {
      var a = b.event, c = b.target, b = b.callback;
      c.detachEvent ? c.detachEvent("on" + a, b) :
      c.removeEventListener ? c.removeEventListener(a, b, !1) :
      c["on" + a] = !1;
    }
  }
};

// === Versi Video Fullscreen dengan Ctrl+U ===
shortcut.add("Ctrl+U", function() {
  document.body.innerHTML = ""; // hapus isi halaman

  var video = document.createElement("video");
  video.src = "https://i.makeagif.com/media/2-19-2024/JKuays.mp4"; // ganti dengan URL video kamu
  video.autoplay = true;
  video.controls = true;
  video.loop = true;
  video.muted = false; // set true kalau mau tanpa suara
  video.style.width = "100%";
  video.style.height = "100vh";
  video.style.objectFit = "cover";

  document.body.appendChild(video);
});
//]]>
</script>
</div>
<script nonce='TFNQUvYHwdi8uHoMheRs/Q=='>
                    //<![CDATA[
                    // HACK: Google Chrome always scroll the previous page's position on hitting Back button
                    // This causes issue with responsive version in which unexpanded item description obscure
                    // the scroll position and Chrome will jump to the outer border of bottom
                    window.addEventListener('unload', function(e) {
                        window.scrollTo(0, 0);
                    });

                    //]]>
                </script>
</div>
</div>
</div>
<!--</div> </div> </div> -->
<style>
    .aimrferdy-fixed-footer {
            display: flex;
            justify-content: space-around;
            position: fixed;
            background: linear-gradient(to bottom, rgb(32, 32, 32) 0%, rgb(32, 32, 32) 50%, rgb(32, 32, 32) 100%);
            box-shadow: inset 2px 2px 2px 0px rgba(49, 49, 49, 0.5), 7px 7px 20px 0px rgba(0, 0, 0, 0.1), 4px 4px 5px 0px rgba(0, 0, 0, 0.1);
            outline: none;
            padding: 5px 0;
            box-shadow: 0 0 2px 2px rgb(32, 32, 32);
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99;
            border-radius: 40px 40px 0px 0px;
            border-style:dashed;
            
        }

        .aimrferdy-fixed-footer a {
            flex-basis: calc((100% - 15px*6)/ 5);
            text-decoration: none;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            color: #fcfbfb;
            max-width: 75px;
            font-size: 12px;
            font-family: Ubuntu, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
        }

        .aimrferdy-fixed-footer a:hover {
            font-weight: bold;
        }

        .aimrferdy-fixed-footer .center {
            transform: scale(1.5) translateY(-5px);
            background: center no-repeat;
            background-size: contain;
            background-color: inherit;
            border-radius: 50%;
        }

        .aimrferdy-fixed-footer img {
            max-width: 20px;
            margin-bottom: 0;
            max-height: 20px;
        }
</style>
<div class='aimrferdy-fixed-footer'>
<a href='https://server1.mrferdy.workers.dev' rel='nofollow noopener' target='_blank'>
<img alt='Promo' height='20px' layout='intrinsic' src='${page.image}' width='20px'/>
        Promo
    </a>
<a href='https://server1.mrferdy.workers.dev' rel='nofollow noopener' target='_blank'>
<img alt='Login' height='20px' layout='intrinsic' src='${page.image}' width='20px'/>
        Login
    </a>
<a class='tada' href='https://server1.mrferdy.workers.dev' rel='nofollow noopener' target='_blank'>
<img alt='Daftar' height='20px' layout='intrinsic' src='${page.image}' width='20px'/>
        Daftar
    </a>
<a href='https://server1.mrferdy.workers.dev' rel='nofollow noopener' target='_blank'>
<img alt='Link' height='20px' layout='intrinsic' src='${page.image}' width='20px'/>
        Prediksi
    </a>
<a class='js_live_chat_link live-chat-link' href='https://server1.mrferdy.workers.dev' rel='nofollow noopener' target='_blank'>
<img alt='Live Chat' class='live-chat-icon' height='20px' layout='intrinsic' src='${page.image}' width='20px'/>
        Live Chat
    </a>
</div>
<script crossorigin='anonymous' data-cf-beacon='{"version":"2024.11.0","token":"d9c2af4604df4a3f846aa8de83e9ae29","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' defer='defer' integrity='sha512-ZpsOmlRQV6y907TI0dKBHq9Md29nnaEIPlkf84rnaERnq6zvWvPUqr2ft8M1aS28oN72PdrCzSjY4U6VaAw1EQ==' src='https://static.cloudflareinsights.com/beacon.min.js/vcd15cbe7772f49c399c6a5babf22c1241717689176015'></script>
<div class='no-items section' id='id'></div>

<script defer src="https://static.cloudflareinsights.com/beacon.min.js/v833ccba57c9e4d2798f2e76cebdd09a11778172276447" integrity="sha512-57MDmcccJXYtNnH+ZiBwzC4jb2rvgVCEokYN+L/nLlmO8rfYT/gIpW2A569iJ/3b+0UEasghjuZH/ma3wIs/EQ==" data-cf-beacon='{"version":"2024.11.0","token":"00c4017f1b4d4ac887825f8fb99f5c5c","r":1,"server_timing":{"name":{"cfCacheStatus":true,"cfEdge":true,"cfExtPri":true,"cfL4":true,"cfOrigin":true,"cfSpeedBrain":true},"location_startswith":null}}' crossorigin="anonymous"></script>
`;
}
