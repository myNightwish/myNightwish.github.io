/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b7d649eb8b4656022ae176e8f8e932c7"],["/archives/2021/12/index.html","46f36a1539c0b00e887bd884e1ea876b"],["/archives/2021/12/page/10/index.html","9c93387b2b083bffc22da7c16c313784"],["/archives/2021/12/page/11/index.html","84353974c6dbbeee5a6d53b9471c9697"],["/archives/2021/12/page/12/index.html","4747ffae59ede11fd3bd7d62966f6cc5"],["/archives/2021/12/page/13/index.html","9959b0ef9a44b09031ee7031780a2bc8"],["/archives/2021/12/page/14/index.html","f6c24313aecfe3419c3e7d7e129b11c0"],["/archives/2021/12/page/2/index.html","30f645374968efd0f65b2691294fc9e3"],["/archives/2021/12/page/3/index.html","f5868a5f029c80e0b730a2efade7af29"],["/archives/2021/12/page/4/index.html","570acf29c4b9bb1ef027e7d089480979"],["/archives/2021/12/page/5/index.html","b7f773f1c786e249f932ffd2754513f3"],["/archives/2021/12/page/6/index.html","bc690fdd2d880b016ad2c823387e9170"],["/archives/2021/12/page/7/index.html","31eb7d857cceacba423fa8b9a6aa8439"],["/archives/2021/12/page/8/index.html","ea7cef32ce45defbeb23f4de76392af9"],["/archives/2021/12/page/9/index.html","cea1859ac81c59ed4bc635a71207bbd0"],["/archives/2021/index.html","106786a9c30b14f2026bcbf7bfae1e8c"],["/archives/2021/page/10/index.html","4ad37676f150b7b198a32c8b40516102"],["/archives/2021/page/11/index.html","b7c8b3a39f70c87799c78f62007bb2f6"],["/archives/2021/page/12/index.html","2964cc7a86ca19158278c50c48ab8443"],["/archives/2021/page/13/index.html","1f2204302170f38ac26a38c042584877"],["/archives/2021/page/14/index.html","21be4506dc1b64b28e70a988f9201ade"],["/archives/2021/page/2/index.html","5d3584f49166d87416a75785b502a7eb"],["/archives/2021/page/3/index.html","ae659adb7b4e680c7697f870931ef4c0"],["/archives/2021/page/4/index.html","e73c9b334a0914eaa3916cacd22a7252"],["/archives/2021/page/5/index.html","88750aa684b8ff6912bd8b095971d9c2"],["/archives/2021/page/6/index.html","24c98b5cf970f64640fd19729ff8b032"],["/archives/2021/page/7/index.html","e4561ada40ce71e069277c3ff23e74bb"],["/archives/2021/page/8/index.html","8a514b267e614ed4eaecfc8ac431b015"],["/archives/2021/page/9/index.html","b804e2c539df0c9e886adf1d0af9d3f3"],["/archives/2022/01/index.html","ec901d5143b0893a1c87436714d7c232"],["/archives/2022/03/index.html","9673fcd1406834fc0fa80c02bbf8fb6e"],["/archives/2022/03/page/2/index.html","6b4a193353ef95180c5e2aed65918a62"],["/archives/2022/04/index.html","700980c540afa151ffef76798e5fa883"],["/archives/2022/04/page/2/index.html","571d5a2220c0b7ff21145e8ea381aa52"],["/archives/2022/05/index.html","0abe0edf159a730e6349f5dc1abb8842"],["/archives/2022/06/index.html","ab9d72691cdeb5134a956536070ad7ad"],["/archives/2022/index.html","9beb659905b0ef80e40ccba1237b13f5"],["/archives/2022/page/2/index.html","f708352191978f69694d77be33679a02"],["/archives/2022/page/3/index.html","56dbe639c43cfa0a9bf827abe946414d"],["/archives/2022/page/4/index.html","80d4a122536c949ccc33df48ef3a9274"],["/archives/2022/page/5/index.html","8af75cc7b93c1469c0224af986e6b945"],["/archives/2022/page/6/index.html","574a00d5d0a57ce83b9e0783cdf6c389"],["/archives/2222/03/index.html","c94a5e7486f69bab109bd7df30b8908d"],["/archives/2222/index.html","442f39e2a188f3d530c2480b93829943"],["/archives/index.html","666414e834be18c486162a6b17babc88"],["/archives/page/10/index.html","f166420093d0ce44493226dfcc1624f9"],["/archives/page/11/index.html","08285d19df72178237db17881c321c74"],["/archives/page/12/index.html","c3330d82922cb0b618a80eff3e3c97f2"],["/archives/page/13/index.html","5035875068613dd722fa110686ac8ba9"],["/archives/page/14/index.html","d8b8e5ac540b192989d6dd8a6d407ae4"],["/archives/page/15/index.html","b1495058b26d702ff09e75812ee12677"],["/archives/page/16/index.html","e8ad82c912701c98ca09837f9b12c834"],["/archives/page/17/index.html","605f5a91e85e5481131e262613f050b1"],["/archives/page/18/index.html","16e438848202138f04c762d0fc2ad530"],["/archives/page/19/index.html","c2469b9bc63a6500052a56486d8a3759"],["/archives/page/2/index.html","a4236b5a6db7002455c77f988e351756"],["/archives/page/3/index.html","273341496c53008bd68d2a67c94ad77e"],["/archives/page/4/index.html","8184ae187c7ab9a403bdd3078372208f"],["/archives/page/5/index.html","513dc7acb439d52be2568fc763a34540"],["/archives/page/6/index.html","7b677485d64c9bc9cda4c882cf6e75e5"],["/archives/page/7/index.html","71f48a49d31da15e6e6d15bf5d0627e0"],["/archives/page/8/index.html","98e65d88a0ec7f61df1898c15b3d588c"],["/archives/page/9/index.html","de1cfe3e10f7ffe5516d5c53507704a2"],["/books/index.html","9b2d3c368e9df53f30c633391fc1b913"],["/categories/1-1-CSS/index.html","e224ac4ebbf9a86cce73dceee8057750"],["/categories/1-1-CSS/page/2/index.html","eb74b3d825b3882c744f9ec7da703ed0"],["/categories/1-1-CSS/page/3/index.html","458e4aae6a5e6ebf96df51c3baae2f1e"],["/categories/1-2-JS/index.html","d1d3806fc030d31df77f3ced65e85c2a"],["/categories/1-2-JS/page/2/index.html","c9b6c589100b61bd6387e79afd338375"],["/categories/1-2-JS/page/3/index.html","97c207b1a825160543c4766b5cc1d02f"],["/categories/1-2-JS/page/4/index.html","7f6d4f3efa7327b6b0db8761ea607dcb"],["/categories/1-2-JS/page/5/index.html","6c9bfe0008ae6b0ddab1368940f4558e"],["/categories/1-3-Ajax/index.html","abe80869efbeb30f736fadfd7bcab7ad"],["/categories/1-4-框架/index.html","b9c5388779eab0cfb586c79642326f05"],["/categories/1-4-框架/page/2/index.html","03e5260a37b65d9585610092a9b5bb9f"],["/categories/1-4-框架/page/3/index.html","9f7397100e12d507d9dcc91fbd303bc6"],["/categories/2-1-组件库/index.html","f179e5f8f6d8f4b0aa7972c8515eb303"],["/categories/2-2-基建/index.html","1f01b29a78bc08f8f2e88c526e0dd6ed"],["/categories/2-3-实现Tricks/index.html","a34625d53750bdc100bf657bd9cc1c76"],["/categories/2-4-项目/index.html","fa9f07f248420a46d11e54cb17322637"],["/categories/2-4-项目/page/2/index.html","e25c89cd4d5d3a1111725a8a8be95b79"],["/categories/3-1-记录/index.html","fa1a43b63d973085941ddd40f5dc3579"],["/categories/3-2-浏览器/index.html","d908a267bbf5d8ed94dcc9a96044d718"],["/categories/3-2-浏览器/page/2/index.html","1fe21c030310fe4807d91c6652916a9f"],["/categories/3-3-基础/index.html","815769dfe5342089fb175ac271cda527"],["/categories/3-3-基础/page/2/index.html","d4e08a03230b951c777293415e7098c2"],["/categories/3-4-Tool-Shell/index.html","3b41719f4c9bf504c6d2347facdfb899"],["/categories/index.html","6287b2df9f3be0eadd3fac2689c45745"],["/charts/index.html","65c8ff3c61c91e15cb54872c03be33c6"],["/comments/index.html","5134d5ca6c0a62195aa6c634780a4194"],["/css/beautify.css","c1d5dcb537fa4e8b7b9ea13d8b866bec"],["/css/custom.css","1fbe1548cc2c03e6f962957c3b065a2b"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","5796fed26252130e2578e550011504f4"],["/css/lantern.css","8dc94ee3746aac617d1f7471d797514c"],["/css/lantern.html","d41d8cd98f00b204e9800998ecf8427e"],["/css/lastLoad.css","3cecb17b70c534134a0fe84c53aa6227"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/var.css","0cfc5d4d675e46eb86edf9fc419996b0"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","13a6bb76d233f32b383a58c54db37272"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cat.js","da5258e44c5d3ed32b83940fc7e41ddf"],["/js/clock/clock.css","3909036609b1299c4dab2bd50dee87dd"],["/js/clock/clock.js","868b2e51322f198ea01ff2f2ee9e36a0"],["/js/clock/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/js/custom/nav.js","62c332fa99d90ab196a3bb9d52eb2520"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","da128dcb13dea47958cf839267074d7e"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","cb7c2260cb5f8563b079ab2df3deede3"],["/music/index.html","3260d6b6e124af32dc4a16d69f3adc12"],["/page/10/index.html","ab097a67612c9123bc5e7bc500e4246f"],["/page/2/index.html","ea265bc296d1b6e1fe6514e7d850e5f4"],["/page/3/index.html","7fd3fd19c473e2b8eb867781b962c9d5"],["/page/4/index.html","22cc4888636827d6492b803639adb02e"],["/page/5/index.html","718b0a8565a91e5b427a0aa3e5366512"],["/page/6/index.html","0d0958aa9c94d7f3fe47495967bcb3f2"],["/page/7/index.html","b3ff26464eb655516702946d39cdf84e"],["/page/8/index.html","8bad5093e74ae3e2712170fffc22f3ef"],["/page/9/index.html","543586e3be5035b8441a54a2e9b4ab29"],["/posts/1003179605.html","68767caade270e64d3dd115809a97914"],["/posts/1078088869.html","47561499ed2a6824a6c0869f5fba5784"],["/posts/1168384896.html","d7408fbc50d9a3b0bd1a56e2151b476e"],["/posts/1174755164.html","26602c88b89eb6e2fe1043ca5f9edc4a"],["/posts/1207877865.html","4141416f111f3d93549408b0efb21e37"],["/posts/1322992885.html","9925f7d39817a6d33e4f3d8ca99efabc"],["/posts/1405183845.html","173ef540c9ae21cbe9b14a8aba1eee5e"],["/posts/1460941642.html","eab06f7e7026c0756c1b12c0c910255e"],["/posts/159855229.html","0e7e1c5dbc0d2305d462432204d9f21f"],["/posts/162997961.html","df803734d58eea55ac2e637c8f040fb4"],["/posts/1634682499.html","e4059eebf415f4fbf1cd4255851e1a1c"],["/posts/1720673220.html","3a2867d6e066bb12cdbb01fbe96e537e"],["/posts/1794184575.html","e782cdaa62152acc93a906aff6c16dcd"],["/posts/179783341.html","9181140526ffc903dc8bd55699410c67"],["/posts/2007769797.html","b4b61e8937970948113db4e67d6bf906"],["/posts/2062301197.html","7a5f9c9795f00536e41f69bcb3ed456f"],["/posts/2071449193.html","b9c9778c338b44f791ba2a0de204fada"],["/posts/2075292597.html","dd5c1049fcef03eacced3761c3d4f957"],["/posts/2124882507.html","7bb90b16591ee8acd8cafe075260d9f8"],["/posts/2131155013.html","7251426531498078c303e22bf3670f31"],["/posts/2169143571.html","ae4941abee85e5a6549669a0cd3d5fde"],["/posts/219349139.html","39bb45bf1528ee43aac5554ddc37fec3"],["/posts/2217063026.html","54668bd921435dbdb0adc28b83dd7d95"],["/posts/2218506745.html","a300330934606be5c5fec4d7b4e3e778"],["/posts/2292260110.html","d4a22490b9989eddbe688a7a72804286"],["/posts/229643181.html","5e68a95889fceb85b828ffe3cb4bcca0"],["/posts/235914813.html","02b2b045a043defabe58be79738ce4ef"],["/posts/2387908466.html","bf63da6583350ef3ac43b0671ad7ae86"],["/posts/2580568501.html","dcc3e3097104b70f2f66a61de1d45dba"],["/posts/2621268747.html","11992704e53f24a8b27af61bcfc30908"],["/posts/265724518.html","34e3dde973db51083aa89c114c7dc883"],["/posts/2716721158.html","8d9506a9c1a38262fde8b3417b54550e"],["/posts/2747544176.html","798aa4d81fbe3768005ab3598754d9cd"],["/posts/2799443321.html","f446b20b6db10f2d6b283481f2e8736e"],["/posts/2803057116.html","2471344cc41a66fa64037c97f45c74a7"],["/posts/2818550155.html","0cc0a161c68b04e6475156dcf58bb2e9"],["/posts/282252185.html","45c22bf5579b978477921123a2bcc52b"],["/posts/2959925095.html","8f463761f9ff20a2eae47734de20ab78"],["/posts/2971665882.html","7a25de3cf597e3dd7894351672ad69b3"],["/posts/3067404590.html","a130d72ea7a6c027b3d8892691707e16"],["/posts/310999178.html","5137c53a25a1e3a5d2262b4c727e31dc"],["/posts/3120977046.html","ae6812fa1505034398d2342efca676d9"],["/posts/3253065341.html","b66cf47e79aae3c5b110a09c65a9916f"],["/posts/3253305718.html","cf2ff8fa179ba21926ca9b70a3d41793"],["/posts/3384747987.html","1cd16823bb5e2db4759cf8c656dc8513"],["/posts/349024060.html","69136bfbd8ccf8ac5e2e048149ec7f69"],["/posts/3598970227.html","640e38ddaaeaed3d409efce282d86984"],["/posts/3611094049.html","d618ff070723653f8ded94e682e02352"],["/posts/3631469724.html","f3803dc4340035ebd6c6629cbffdbdeb"],["/posts/3691095479.html","438ecc51057a1f752dec7a4dcc09a792"],["/posts/372934289.html","a08d8285623f4ea0a8d7612e6a531ea4"],["/posts/3737997078.html","dbd75ec6b1396280ebca75e90442822d"],["/posts/3783644122.html","e2c6fa5d4c5e775839f3d04441660265"],["/posts/3906205819.html","a9361a7527b31b477a65e520aee78ae6"],["/posts/3912543564.html","d934fd646bfb7bcc2a4ad30d6840ff9f"],["/posts/3998253138.html","f072bc9fa8a51e31311ae991f9b1478c"],["/posts/4075683688.html","590f26b8cc2b97fa153419f1d21f25d0"],["/posts/4184919567.html","b985c9709d04b6171008a6f0fa6e38f8"],["/posts/428414458.html","c9b63f099da67fec45ec43b3180eebe7"],["/posts/4285860800.html","9bcbe63f7b2e2edadbf49659a3cece07"],["/posts/50508479.html","a927aadc1ee6962cd68f257988795f43"],["/posts/511687579.html","cc0a8058fde8ca511ced9514e1edbee6"],["/posts/611441247.html","10e59304078e5b7a373e4ff4d136edff"],["/posts/619926249.html","3f63e5e14dbbe3aa5be3c5911fa20fa8"],["/posts/656350506.html","d89cc3c02c011e8bde27908856661ebb"],["/posts/680535600.html","3b40913ae327d423db621b49431fc64a"],["/posts/684607466.html","ae000fee21057f55cd7220327f48479c"],["/posts/686254810.html","8238c94fece36ad6e2170c82227aa161"],["/posts/710205459.html","eb44d7366702d1dc953849b5c0b6e116"],["/posts/775935900.html","6ab37d1f5be4cd19c62e379cbda29661"],["/posts/854292428.html","c6d30ff8814507ed3b797cc7abd7ee44"],["/posts/855735627.html","1302220ab059343b979661e350e0d97c"],["/posts/867212230.html","93c1d3af82c72abbb18428a77a2cf966"],["/posts/926905116.html","b0cbde5d684e27ec9e81394ed4a7520c"],["/posts/CSR_SSR_ISR.html","aad17b38629669715034a7f7f10159e7"],["/posts/CSStricks-1.html","06c4bfed5edc1c04257dcf0eb50d2dff"],["/posts/CSStricks-2.html","6a387dba072a9f9c2d48d2fffc60900c"],["/posts/ES6.html","ba3affd9d4ded99482b165c9ba927095"],["/posts/HTTPS.html","be0c46c83a6d56343e58b41bc38f62fd"],["/posts/React's Component.html","b05b6dd71abf8fbfa52b231a62a8a11a"],["/posts/React's key Concept-1.html","b6706fac1ec1b7afd9f00f8399a26ec0"],["/posts/React's key Concept-2.html","20c584e945cc9ccc307c15f50781621f"],["/posts/ReactHooks.html","ceef990ba62115e51f369e19fb29a43a"],["/posts/React_lifecycle.html","40a6b95a86db5b91186e1f79fdfff46d"],["/posts/URL_URI.html","9f1a072168311a92c69625bf3ac52a60"],["/posts/animation.html","0cdd8e31f5f635cf1443aee47011a6ee"],["/posts/antd-data-show.html","6e771546e141f29fa2edd0ff16abcc8f"],["/posts/basic_construct_1.html","cf4f3bd15860a06670ebb928b12d347c"],["/posts/basic_construct_2.html","30c0249618b002d5f21d71e893bd2be9"],["/posts/better_performance.html","37a1404f8dd21f1300d5eb93d19b2c6b"],["/posts/blogChange1.html","845def98d15748b5a6aea8260310bb18"],["/posts/blogChange2.html","b246e45ffd6d38e60d1761fe52b17e03"],["/posts/cat.html","99a46c9cde62a85f8dff52ec7aaa2cac"],["/posts/cookie&&session.html","c4705e9d00d9d3d942a2eb6d8755a41d"],["/posts/feature-tricks1.html","1249e68f98c061bb8b33e3c52d2e0e40"],["/posts/file-read.html","847c835ee5e09046053ceb9a78fa2e06"],["/posts/gap-property.html","ff0e2e35afd38468bf36ab7caa3d07c1"],["/posts/hideElement.html","42b8c4856a57722e1d05fea8a3560956"],["/posts/http-cache.html","814acee798c89707fa67a9246fd518c2"],["/posts/http_cache.html","8e6151643525932edc9648c3c9167faf"],["/posts/privateGame.html","e36c4fa54e9c4c912a2fef50b55938c4"],["/posts/prototype.html","032ad3bd2d04225a3f678e007340043f"],["/posts/react_components.html","64619d0ad6fadd689f1d23e8a48f4995"],["/posts/react_vue_data.html","cb96bb01a0cbcf2019d0585dcbba06d0"],["/posts/requestAnimationFrame_1.html","7a815451a000127a357d44c20911d333"],["/posts/scroll.html","0e5f5e4fc85eabe2d91264e7c5b84dcc"],["/posts/toolsTest.html","450be72e351fd5ae7dffe1ce50247f5a"],["/posts/vue_lifeCycle.html","ae7cd2dd5f94017dc1bd3b6381f71d85"],["/posts/what's Hook.html","b25e07d3ec44f19ff20cb43fb48622d0"],["/posts/why Hook.html","e4be162e99ef916c0d75561d2fe8f82f"],["/posts/前端模块化.html","5d985b7ee84b7c0e93c39876624c0145"],["/posts/路由.html","96813dfd9d6b6a58ed4f40e79d0cc14e"],["/sw-register.js","f599d90ffa0ead07c3cd04a1bd8d8511"],["/tags/BFC/index.html","64f55c344ad2dbfa7c31e920e3dfe8f5"],["/tags/BOM/index.html","8f3b432f510e94db319f5d78681f5716"],["/tags/CDN/index.html","c46bff1fb552fbe3d3729dab2e1c6dc2"],["/tags/CSS-in-JS/index.html","5606f7311f4b1c36cb22fd8059fb7a72"],["/tags/CSS/index.html","94852d3a09a6f3a3ae43a6ffab6e8d3f"],["/tags/CSS动画/index.html","6b04eab44ad3f3ed731aea59acdf88be"],["/tags/CSS属性/index.html","bfa663a29cc1f7d01935d1e5475cf6b7"],["/tags/CommonJS/index.html","9b2ec92ddc0350374719b7f83f5baefa"],["/tags/DOM/index.html","51a9dce74a1b100036b11f1d487895ef"],["/tags/ESModule/index.html","3d2c86887ca52fa145b7b2b90f28cac4"],["/tags/EventLoop/index.html","94dd5ec7600c800aeb38b15fe2f86b98"],["/tags/Git/index.html","65a6d779b7f7ded7bab2c92e7d6253f8"],["/tags/Github/index.html","ca10850c91133b44ed7daba914011cd8"],["/tags/HTTP/index.html","3d21e0a824e1b737d696d071165cee69"],["/tags/HTTPS/index.html","ab61b63760d3d7ca114a5c91b458aa1f"],["/tags/Hook/index.html","260ae48c142913d72b0bfcdaa31294bb"],["/tags/Hooks/index.html","766af5a8042f121fe55be329c7fb016f"],["/tags/IFC/index.html","a7900433fda3dc23a419fbbc1ccb785d"],["/tags/JS/index.html","7cb55008d04482380cb204c14a13672d"],["/tags/JS/page/2/index.html","d0d4bc365af1aa7259a9a242f2133fef"],["/tags/JS/page/3/index.html","d7179c12e27d50fe4adc8498cf0d10f3"],["/tags/JS/page/4/index.html","230fc2a451902cb00020b85774d88596"],["/tags/Node、Antd/index.html","4a34ad862be70e144d9a3c1aa3b583ec"],["/tags/Node、MySQL2/index.html","4d75553850437d7013186d720aa1a83a"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","3152270d27aab9964521663f76d84d77"],["/tags/Promise/index.html","fcbc55e0e98f6686c18d8a6e46a669a4"],["/tags/Promsie、Async、await/index.html","dc7f99ea4c7c5f6def1193546536adc2"],["/tags/React文档/index.html","26e53e2bf0f69808d2d977871e762456"],["/tags/TCP/index.html","01ab6ef423e43b8f337d003a1ed45651"],["/tags/Tools-Shell/index.html","29467ea0da31e6220b971533731ee45f"],["/tags/UDP/index.html","d24c1a67d44beab97ed071c70cba7227"],["/tags/URL、URI/index.html","7b6a4c028f732d37f2da5d9c1e1e9521"],["/tags/Vue/index.html","2fc584e850d89dd9450e463ef8c3ae52"],["/tags/ajax/index.html","4c58f3b5a23393a5fa72c8e875a176bf"],["/tags/async/index.html","adf8f7edc34f556b936fd3b34bfa0c32"],["/tags/axios/index.html","4f04a7209db9d621cea92614fccbd74d"],["/tags/codeReview/index.html","9d39d197733813f7420bac4635f6c8e6"],["/tags/cssModule/index.html","3ead8740877514239c0c9d5f9ea64621"],["/tags/defer/index.html","d62086893db5128384bbac7073252921"],["/tags/flex/index.html","0121c06127c07027a760cb12257a2abe"],["/tags/index.html","09cebda3160cee2a7859396c1e08656a"],["/tags/overflow、滚动/index.html","a778a854d30e9f521a18a1185225070a"],["/tags/position/index.html","90a4c3d53b2bc887856948c61963b095"],["/tags/requestAnimationFrame/index.html","40142cef9a8fa8a9bfdb94b6d8617928"],["/tags/webpack/index.html","6cc60b6676932ac1ad63bf59aa2bf422"],["/tags/webpack插件/index.html","e8216df56f57a69a80e5da601b769f80"],["/tags/webp图片/index.html","e574c9250e0033e0c7fe43dd3c301a61"],["/tags/二叉树遍历/index.html","0079b4769e0f71017165965525ef24eb"],["/tags/优化/index.html","68c3ae90904e018e2aea1833bf0ef492"],["/tags/函数组件/index.html","cc684d8fcb3905840abf24f34af9b985"],["/tags/前端基建/index.html","1614cf39e73f80ed7eb61822bde2f4d0"],["/tags/功能实现的tricks/index.html","4420f4341243380e5620de93052f634a"],["/tags/去重/index.html","b567d4f8237a3975699f2f2bec6e8c54"],["/tags/双向绑定/index.html","05bda4153290782a5d9ea1585a202beb"],["/tags/响应式更新/index.html","65ff52548b630196b92a8a9beafb1aa1"],["/tags/安全/index.html","125251d2e925407c5b7112e311985112"],["/tags/宏任务/index.html","035f0d603e5db875821ed4f8ace5afd5"],["/tags/帧动画/index.html","a308503eba6c40e198ffd6d037058702"],["/tags/微任务/index.html","40c83d314fe43d0a6dfe377c604658c9"],["/tags/性能优化/index.html","74c8ab458c75bc77ce972fb938b0f13e"],["/tags/懒加载/index.html","a1f539fb1b9d371e3b165c4e9edfe244"],["/tags/扁平化/index.html","8f546a929ed2fa00c47a99624d37c948"],["/tags/排序算法/index.html","e2008b9dbf6b9b71a2315c7fb14e129d"],["/tags/数据流管理/index.html","200fb57c17a4cf263011dac8c30a03cf"],["/tags/数组API/index.html","1d9392dae921a724ac6fec67e239bf22"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","fa42a0bc68d73f5ec7f40854de94b8f0"],["/tags/文件上传/index.html","3d901fedebc58411363343c23ddd79e5"],["/tags/样式污染/index.html","fa243adaf938dab6bb03b67d7a7e31a0"],["/tags/模块化/index.html","6830abac6c3f4044a912914bceb79c2d"],["/tags/浮动/index.html","a253508933855e597ff88ac963c6a435"],["/tags/渲染解析/index.html","d27fe97f59a069259792b2cf607f904a"],["/tags/生命周期/index.html","cc148b461cd7797e7532f308c32adca9"],["/tags/盒模型/index.html","0f54b9446c1f4ac48703fd4a24fe2f23"],["/tags/移动端适配/index.html","6add4295a19e12bc12ed7b5a61590ddb"],["/tags/类组件/index.html","31894dee25e80d280157e0415b29099a"],["/tags/组件库-antd/index.html","f651465f6013296a3b1d8390ca54ea28"],["/tags/组件通信/index.html","11ab8f687276fe8b663ba3b3c34819ec"],["/tags/编译执行/index.html","1e6d9de787616fe073ed12d257fd8028"],["/tags/网络请求/index.html","7b3bf986bba03b1636169ccbe784796f"],["/tags/虚拟DOM/index.html","ea06e3bcd8ce79be683268655d5184f0"],["/tags/表单提交/index.html","9614f2b0f68ea578900a7df340e50e1d"],["/tags/计算机课程/index.html","9bead945898037408bc504a308f78448"],["/tags/计网/index.html","1cb615131337d950ec951897b3b78c1e"],["/tags/跨域/index.html","154643be774baa4ce67c70119af80f58"],["/tags/跨域解决方案/index.html","81e585e7a54b8248d03b784d87647082"],["/tags/跨域问题/index.html","c555b523ffd6b641fc78f8fced8bdacf"],["/tags/路由管理/index.html","f021ffc9861545d7978e182effbe765c"],["/tags/进程线程/index.html","a15bd3842100f916a5c01a838a9a5217"],["/tags/选择器/index.html","a9bbfd8a3dff8bfd3e917853dbb389ed"],["/tags/选择器优先级/index.html","3ba62efdb53ff2709f651dcd82f4195c"],["/tags/隐藏元素/index.html","fa40aad140db8224cefb97f15855c093"],["/tags/页面解析渲染/index.html","9849c05eb51a76de41456008d7c8528d"],["/tags/预加载/index.html","57984f876a8f9cb0d27631b9de1f25b8"],["/tags/驼峰命名转换/index.html","c97faf52e8f41e5c27c2a313b39f59a4"],["/tags/高度塌陷/index.html","764294689a4f4937c0ab6237d8767f17"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
