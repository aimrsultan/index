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
