/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","7953d430c50bf6764dafb40bd158073f"],["/archives/2021/12/index.html","8482334ef21d2d31861e25e5ff962e74"],["/archives/2021/12/page/10/index.html","328fc4d4ccd19a54d78ec7ec8e38b09f"],["/archives/2021/12/page/11/index.html","60a47a12bb542d5657e597c379312582"],["/archives/2021/12/page/12/index.html","10055591308c7394d861294bb15f1a89"],["/archives/2021/12/page/13/index.html","a39e8215a18908b3812c419ca5031437"],["/archives/2021/12/page/14/index.html","c392737f273fed6c240071408b5c15e5"],["/archives/2021/12/page/2/index.html","c854499dea0988d4f5fecc886401a46b"],["/archives/2021/12/page/3/index.html","d8aaa167e9013684053f1371bf61c884"],["/archives/2021/12/page/4/index.html","0d32d3f2722a2d2ad91712de0428a625"],["/archives/2021/12/page/5/index.html","5823b8886dff5d61b7bf9bc58c6b0c8d"],["/archives/2021/12/page/6/index.html","b2386d407b86f8ba6f9477aa853002cf"],["/archives/2021/12/page/7/index.html","4adf5f81453b991a5372b643d0afcef4"],["/archives/2021/12/page/8/index.html","a6c7b5042f7cbc24163ff556a0f81285"],["/archives/2021/12/page/9/index.html","e738e922f3d92c15ec7f09c9673a56e2"],["/archives/2021/index.html","e8573d2a5e0afc48c505bc0fd55ddaa3"],["/archives/2021/page/10/index.html","c68de464a9f5eab54efbe52707c9cfb2"],["/archives/2021/page/11/index.html","213dc291015f17cf7e68b3b04ecddd1b"],["/archives/2021/page/12/index.html","3e0d1d88c0bdebc08e89c7ac809a3153"],["/archives/2021/page/13/index.html","bbabbe33b9e00f417d67caa644bdd77f"],["/archives/2021/page/14/index.html","3a460c2b598d20cf7f8ffbd7c0e33a7c"],["/archives/2021/page/2/index.html","6b285e3393d46e7a614ddc5cfb85c53d"],["/archives/2021/page/3/index.html","b977658349d261c0d826c939afeadcb5"],["/archives/2021/page/4/index.html","b76ee67e37d04cef1b2693f6bf908777"],["/archives/2021/page/5/index.html","2d84a5e653a7a020f641709f3c6cdaac"],["/archives/2021/page/6/index.html","0b32911bdcab5de2cb32cb5a18f46675"],["/archives/2021/page/7/index.html","5e4a8cabcc3996b37eea53e890734d58"],["/archives/2021/page/8/index.html","35e4ab1d5c0b052bf5a44246454f1163"],["/archives/2021/page/9/index.html","6312c779cdda323752886b91bc8c6d63"],["/archives/2022/01/index.html","8905e09df534304459a9e98e06106bad"],["/archives/2022/03/index.html","d44ea0e4e16a088cb4672738cf29cdd3"],["/archives/2022/03/page/2/index.html","dac7b857341ea2fde9adc26dd4442507"],["/archives/2022/04/index.html","1a70be0876461512602c73402a4d8396"],["/archives/2022/04/page/2/index.html","8f3cce488c86ed711f1e83b0c95711b9"],["/archives/2022/05/index.html","1c3dd2122ec24d52447f4b856891e665"],["/archives/2022/06/index.html","b87aa9dcfd759a1ce74be20798a31282"],["/archives/2022/index.html","51cfb608c472a574e33f35729c89d0b7"],["/archives/2022/page/2/index.html","ec31fbb8af56480cc466366fc6306aa5"],["/archives/2022/page/3/index.html","4bab3938598b464aa861d824f31f0ab7"],["/archives/2022/page/4/index.html","2f95ef5fdcc3cf62ec6351ab3da97f4a"],["/archives/2022/page/5/index.html","c210276db475696a0dd90fb8751fc7a7"],["/archives/2022/page/6/index.html","2376bf5194d0badfd9cfbd1c1ee8d2f9"],["/archives/2222/03/index.html","0fb167a0a9e11a25541a3f3b761373e5"],["/archives/2222/index.html","bd85c755d4959bcc7b201dbc8913b270"],["/archives/index.html","40e00498ece2ee05ad6cb94116b470a6"],["/archives/page/10/index.html","d52df96e14a13b2d39cc30dbd21c5c8f"],["/archives/page/11/index.html","74c29ddfd4cd18427098290a4bf52cd5"],["/archives/page/12/index.html","7fcad6021de2be5980a7968e2c43ef99"],["/archives/page/13/index.html","2421374a981eea2fb08e812428cc0950"],["/archives/page/14/index.html","1faa7298c7e6f6c1bc825515e4be6177"],["/archives/page/15/index.html","6698978221d6a3472536e62c7bc08e15"],["/archives/page/16/index.html","40afc265dc09055a7e5b65820d3a2703"],["/archives/page/17/index.html","2e49b4a2bfac9f3a66cb5eae8baf1271"],["/archives/page/18/index.html","b1d9cc9b27033cd4af36a2d6cd21fe26"],["/archives/page/19/index.html","2407aaf62963a3055500bf56f43df5af"],["/archives/page/2/index.html","621b00a535460cddc1cb293982731917"],["/archives/page/3/index.html","658b23d287abd8c782a8f09e79834a87"],["/archives/page/4/index.html","d1248abd1f4c3295f37f65121164ab0f"],["/archives/page/5/index.html","156c6fd67523c18c28c60c81e56a7bb8"],["/archives/page/6/index.html","6a41e4755e2361542bd85d71d1d4adbb"],["/archives/page/7/index.html","010d70f7296f42a232d40de4f7ee283c"],["/archives/page/8/index.html","225c87e74039502a5efe0dc5b10777b3"],["/archives/page/9/index.html","b839918c20a2ab585d39abbb15d42e49"],["/books/index.html","8f6eac459892cf4d30fefe8487713d26"],["/categories/index.html","09a25aae6fcdf6237dbbbdfe9157a3a6"],["/charts/index.html","7715e2a19b847be2f28c6f911c799fe1"],["/comments/index.html","c8f7d7fa090ec342fc0c50e28770369a"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","4ff0f6baddaa92cd4cd77ee6239f0b72"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","cdea330d5a71e6e20deb028da98267ba"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","bc4e6c41d04a457aa8ac0fbc5c36d0ea"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","9711a582b6ca22e471fc75d880b243e1"],["/music/index.html","74769ba23b1aa81a270d0ca0f5328d1e"],["/page/10/index.html","ac0f45badcd344534b26adb905326408"],["/page/2/index.html","e3ec5a4e78218471974be5c088e48669"],["/page/3/index.html","548c8dd15a6ca72001aa25ef8f5835ca"],["/page/4/index.html","50d985094fb744959c4c645368c7785c"],["/page/5/index.html","8b41277d5fa85afd636020256c5e4b17"],["/page/6/index.html","119b4bad5adf39309cdf13aa9e715d9c"],["/page/7/index.html","fba28c3b6bad5ae9d5196757a2afb54d"],["/page/8/index.html","882fb382bc1066a3ae16237aabfa2e46"],["/page/9/index.html","6c82348607f2a0d4921b1e62a130611b"],["/posts/1003179605.html","c80e511cf60ed5a968d4a05e37325736"],["/posts/1078088869.html","b8f8f0f248a08a1170fb931ed8d89d42"],["/posts/1168384896.html","7f23b43bdb740d645429112e749a64de"],["/posts/1174755164.html","5be5326416e818e1425a94970cd5b742"],["/posts/1207877865.html","23f2a6aa0d9b2f4316fe8ed0dd6619b3"],["/posts/1322992885.html","8f661ca6982b99bf49a1f492e84ad3d5"],["/posts/1405183845.html","d73d267978968517ef9d3f95c05fcbf3"],["/posts/1460941642.html","ac2fb88988239b92fd65ba28a2693359"],["/posts/159855229.html","251473d0a242c58f34b31847f599fa6f"],["/posts/162997961.html","7416bf026ac2bee47db3baa8abf6e7f0"],["/posts/1634682499.html","f4c2cab16f852199617f4ccb04092623"],["/posts/1720673220.html","61ede6a7fbd64b03ef86367f88faad5d"],["/posts/1794184575.html","cd20050a92da6ad852ecc5af2dcfc123"],["/posts/179783341.html","223a0515bda744780ee6ac9a9225059b"],["/posts/2007769797.html","29763471ec601d8ccaee8bbbc5f7796d"],["/posts/2062301197.html","82e3bc3ad2b4d47115ec7510a841d5c1"],["/posts/2071449193.html","00f98f2590b477e960608522656e01ed"],["/posts/2075292597.html","8b0d5735fd88779f58ebf7bb264904d0"],["/posts/2124882507.html","0656b25e2a48d8edecd79907a8541ecf"],["/posts/2131155013.html","8aafeef11a7597d39fdb885c3ab6f29b"],["/posts/2169143571.html","651ee34b02e39ecab8eb4a676c507ee8"],["/posts/219349139.html","5e4301cd322a391d4fb4fc512fef25ae"],["/posts/2217063026.html","9dc3e31ef7ba498db3cba84026e495dc"],["/posts/2218506745.html","e55fe8fc617e992445c6ad1ec2b1e491"],["/posts/2292260110.html","d7d5ce721257411c7267b241afb04eb1"],["/posts/229643181.html","9c49bccf5bda07aa2279eeab281300a0"],["/posts/235914813.html","574f6eb04bf338ca1f915d02d8e96460"],["/posts/2387908466.html","5f7c2ef181915da158384ca780e34e45"],["/posts/2580568501.html","3a30412a91d5a3e1df80e204011b262a"],["/posts/2621268747.html","7e1b6a04b3c8d30292f779f1afe95753"],["/posts/265724518.html","00986dbdcc51257164f1072843b4ba5b"],["/posts/2716721158.html","d68764e6cac20142de0384d68af5aed0"],["/posts/2747544176.html","bbb52078106ab1812f7d35e743532eb1"],["/posts/2799443321.html","5b2c99f27b0f907bb2db8f7125dbd676"],["/posts/2803057116.html","483f476b7a24ecce650e671517c0e759"],["/posts/2818550155.html","c5006356bdbe6d58d64dc4920a05eeda"],["/posts/282252185.html","ad813af3cd46e3f77146c6821fea3744"],["/posts/2959925095.html","4a0dfa22b63617d2ef4e7ad59e7964d5"],["/posts/2971665882.html","a57c923070d69951ff43eab4ae3059fd"],["/posts/3067404590.html","633c8de604899660ae099edcfcd2e864"],["/posts/310999178.html","ed3f345eabd52f683918ddd9ea2ed261"],["/posts/3120977046.html","1d68cdf6a757cb27229ab9bf5cf42550"],["/posts/3253065341.html","bf97553d23c542d6bf307d49a5606885"],["/posts/3253305718.html","1617209603e9a6e9f98e0e2e603733c1"],["/posts/3384747987.html","ede5d91f5b0d076ff52c574609399e87"],["/posts/349024060.html","1c681784fc5c8384319de172cc6baad0"],["/posts/3598970227.html","1b8edc2e1d33a91465a690f0faf255c5"],["/posts/3611094049.html","5be5855432d5fde36ed3cb7ee3ae0d3d"],["/posts/3631469724.html","9e6b65ed1cdd19efc85155180597565c"],["/posts/3691095479.html","7a13eeba7caaf6379ddf5843b759b223"],["/posts/372934289.html","7f3b4206ce59773308d34bc37605322b"],["/posts/3737997078.html","b5d5ce6b430a00b00e0e56ad85080380"],["/posts/3783644122.html","0ecae27648b4bda16a100058fe2675b6"],["/posts/3906205819.html","07e682841925a28208d9a7da0d53f052"],["/posts/3912543564.html","680c9356a0b00b12b442d5f8539f4f3c"],["/posts/3998253138.html","27bef273dfb13f77313e6e2388d971c6"],["/posts/4075683688.html","34e9c873b9d8a39d9eb7bd0f72384191"],["/posts/4184919567.html","34d3d0fc53f03a6750e82fc161faf78d"],["/posts/428414458.html","19541cad3153ab42d7bc48ea2f089df1"],["/posts/4285860800.html","ea71369e35bab93d9240e291a8b99e70"],["/posts/50508479.html","9efcd6a8c5df347f64d541ef11eabbfd"],["/posts/511687579.html","f295907668eb2e4170791d0166ac0478"],["/posts/611441247.html","cc6ccc3c864344b1af8d58d10b9f99e2"],["/posts/619926249.html","86746c10a9ccc1f7143997d1bd8344d0"],["/posts/656350506.html","e369ea132207a60519d7e224b3a13c6c"],["/posts/680535600.html","4356789fa81788a42c52d1066476b7df"],["/posts/684607466.html","8b295c771dab7ff898c2a687193c1545"],["/posts/686254810.html","5c550c807af11d7793f728f95f02ad2b"],["/posts/710205459.html","af2bbb239215f8af8d69cc45dd34dcae"],["/posts/775935900.html","a3e243798082289a0e21b98a8743a19e"],["/posts/854292428.html","44c6550b2285e3c1ab8572de4df0f3c8"],["/posts/855735627.html","b93cd0f49df0598de06282a39d4f2c16"],["/posts/867212230.html","09cec9a524e355e4c0fbe1140cd332b3"],["/posts/926905116.html","ab97a095ebd21257633f2caca8d913d0"],["/posts/CSR_SSR_ISR.html","b7d1db603666a4d23b3bd063007af1d9"],["/posts/CSStricks-1.html","e6de190260f8f534b0819d8f04912ad6"],["/posts/CSStricks-2.html","707aad34f7af76acc0bc0cd2f9aa8241"],["/posts/ES6.html","a57072b6c39e81d6cb07eea5695a99aa"],["/posts/HTTPS.html","973618729d34ceb8b8c6d76c3655cdfc"],["/posts/React's Component.html","5efd79ecb4de0030754df8501841ca9f"],["/posts/React's key Concept-1.html","9abd726bfdb107554b4b3cd55642e97e"],["/posts/React's key Concept-2.html","8d7957bf2808670a673e0536ebcc9d7d"],["/posts/ReactHooks.html","5de7bac29464eeb6e4de83ed21988a27"],["/posts/React_lifecycle.html","5edcf15899eb37fc96fb75f2c08044a0"],["/posts/URL_URI.html","cccd7e74aa4e144940959dd793cb9cff"],["/posts/animation.html","8c07b96e78dadb64a0e671140905498c"],["/posts/antd-data-show.html","1443e9e3da2f3285b812a11e681a058b"],["/posts/basic_construct_1.html","306a3bf3bd07ff66cb075a974d04dd1e"],["/posts/basic_construct_2.html","ad8eca06e58dc3b8acc4333f10f6b2db"],["/posts/better_performance.html","ef9e46a7e7e3524f468c087438f9533e"],["/posts/blogChange1.html","3d8b3a019e890e8a07b09ea028e7e909"],["/posts/blogChange2.html","70beeec6faea7f0b42f1ac63c5bd0509"],["/posts/cat.html","83d2d50fcbd0d28a90923d75c35e94fc"],["/posts/cookie&&session.html","17852a72d4417d89970d6d3626210162"],["/posts/feature-tricks1.html","74f846d4c321d7845e84058eafdc14e8"],["/posts/file-read.html","b4d1c9df218bb97e1df818f3b35727a0"],["/posts/gap-property.html","eb52ab9bc7fc9f9e8d73f607ad531efc"],["/posts/hideElement.html","5f107beaac5c79f7d821c51212c37000"],["/posts/http-cache.html","1865f1099a68a53f925b42db45874580"],["/posts/http_cache.html","eb1e40131620689fc3950435294f5953"],["/posts/privateGame.html","7fddec46a6eb749011997943a6259099"],["/posts/prototype.html","a291e913c4a20e90ffa968c2a7c55a77"],["/posts/react_components.html","5823b9277dd6519df3296d5f55d7f8b0"],["/posts/react_vue_data.html","087106db8cc2f87a8427444e6454e861"],["/posts/requestAnimationFrame_1.html","863ee8b3e2019c6c1564219e06ef59b5"],["/posts/scroll.html","4e480d43bbf70653b40777fa6b962715"],["/posts/toolsTest.html","a8eb630704e7b3d3e3f97344240fec7e"],["/posts/vue_lifeCycle.html","78583ccd79611db823bf5a3811286200"],["/posts/what's Hook.html","51dbd125dbc656998b97b5c31a4dcbf3"],["/posts/why Hook.html","58285ec065fa15b4f78b8fe8d0311ab7"],["/posts/前端模块化.html","e40860dcf4c96d09b36d01472baefc70"],["/posts/路由.html","e17355de4e9f09dea8fa0d2e6a91e4c4"],["/sw-register.js","e13b83307e14b3e48719712808d230db"],["/tags/BFC/index.html","99e1aa13e52419412d16bdea8cff23d4"],["/tags/BOM/index.html","ed34ecabecda43ea5196bc2a7724ff27"],["/tags/CDN/index.html","c1dbfcf1cfc6dca6e38e537915894d6c"],["/tags/CSS-in-JS/index.html","eae3b5f98d51843b1b45cadec45b3346"],["/tags/CSS/index.html","4d7b4769f6a431580d8951e3e703b67e"],["/tags/CSS动画/index.html","22ef36c3cae2435a18f9226a7b1f1864"],["/tags/CSS属性/index.html","3a5a4e880dca06e631f780dab7c54ec3"],["/tags/CommonJS/index.html","7079e92d480744e8c1713f43bda4f70b"],["/tags/DOM/index.html","a360825a433827c11f66e30c17046090"],["/tags/ESModule/index.html","65fc22d05e20994e64aad6613e7fd094"],["/tags/EventLoop/index.html","593f7cdb0e41f4cab8b660ae589ea062"],["/tags/Git/index.html","bfde4501fe1c03157f00b7903d961f9e"],["/tags/Github/index.html","1e672596c1411836849db4ed5b658423"],["/tags/HTTP/index.html","b5338c12dbccec858a9630c96bc5abd6"],["/tags/HTTPS/index.html","c7db27150171ea8b1a62daaee8545e6d"],["/tags/Hook/index.html","b8ebc9b0a2d055ea2d0d35d68e319558"],["/tags/Hooks/index.html","e0870f0ef14a5fd57ed825c46dcdb59e"],["/tags/IFC/index.html","9231f455ea364a3d58f9a91a1d634afb"],["/tags/JS/index.html","5b3450389e45bc99c52f50b9f9c9e487"],["/tags/JS/page/2/index.html","8321e763b00966a16ca57a70044e15bb"],["/tags/JS/page/3/index.html","c727c06f43537f308cc6ecbd167292e8"],["/tags/JS/page/4/index.html","08bdbc300e8df75f3df2cd470896258d"],["/tags/Node、Antd/index.html","6767576005fe9dff2be079daf5aff13f"],["/tags/Node、MySQL2/index.html","19fa068817f4f7afb5a227957a64317d"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","b7de4266bdbb46d0142d7d17637cc05b"],["/tags/Promise/index.html","04c0d430480886970e2e51cb9c87caa2"],["/tags/Promsie、Async、await/index.html","b5403c84f4b04ee1e29094cb2b124c95"],["/tags/React文档/index.html","154190b9c6a678e2bdd8118fe7da0193"],["/tags/TCP/index.html","c2dd372ff0a83130f2d3c2b8afead87d"],["/tags/Tools/index.html","8f39f3d3b20ebd35fb47b554c314910a"],["/tags/UDP/index.html","7d8b260244dd1bc6f09689576a7bdab4"],["/tags/URL、URI/index.html","1fc26393bbedb6c686cd928004ba884c"],["/tags/Vue/index.html","2d1a9544492e58921d1c34252f97c70c"],["/tags/ajax/index.html","85705e77993313385d060de250be0a5e"],["/tags/async/index.html","db015530820177326d39c5aac6cf59af"],["/tags/axios/index.html","18212b9695c72388701f30055212486e"],["/tags/codeReview/index.html","8d747a2bf1e6018da51720e21cc9a34f"],["/tags/cssModule/index.html","1a86822a0ac32c8d73ba140f7600a7fd"],["/tags/defer/index.html","f5e10f4d200885aef912804d197d68b4"],["/tags/flex/index.html","8e39eabb90483af4e2cb6913a96524fe"],["/tags/index.html","55308ab721de61fd32801c20e65ada43"],["/tags/overflow、滚动/index.html","4e990a31ec4f92e2f7e8902802da5d76"],["/tags/position/index.html","b3fd8e5f77695a2784f6f6d6f70fe613"],["/tags/requestAnimationFrame/index.html","2fb0c2a47fa0bab6f9451a652a803faf"],["/tags/webpack/index.html","2b1203f286e148cb80a085e838eb672e"],["/tags/webpack插件/index.html","e078199561106ccca18db6c8d9c3dfb4"],["/tags/webp图片/index.html","e0a2fa707f2d493a57cc72319c532b44"],["/tags/二叉树遍历/index.html","b324a2e11f2ac7b773054b7ffff5fe3b"],["/tags/优化/index.html","e93fb86ca72e4ce82529f36c831569ff"],["/tags/函数组件/index.html","1bc77bf857137c142ef7050cb953c19d"],["/tags/前端基建/index.html","81fb9166056a4cd3b521bad33a94df27"],["/tags/功能实现的tricks/index.html","e1f3c2c9fdae9e3c3233bb11cefb97d0"],["/tags/去重/index.html","fcefb1ac0eb98d7c16b33d1ba68926b0"],["/tags/双向绑定/index.html","91921bb067d48704eb7b8b97c7991cc0"],["/tags/响应式更新/index.html","49376ce2efcde328ec94d705e46c03ce"],["/tags/安全/index.html","9ad48b66d913a854fff425cda1e5f16f"],["/tags/宏任务/index.html","d2f3e457320be624645cf32087945715"],["/tags/帧动画/index.html","f49a2e24dcaf65f1e04444b5ff503425"],["/tags/微任务/index.html","178ad16e5afd21f49414ae87c2d4c442"],["/tags/性能优化/index.html","1ac251ee76b4b0f7c0a034b4f4327723"],["/tags/懒加载/index.html","c286a0f1c60ceec90590354c9b76c0c2"],["/tags/扁平化/index.html","c94cef089a8ad26574d2343977fd2fc1"],["/tags/排序算法/index.html","572f33cd00254ad70a1daf413ed06589"],["/tags/数据流管理/index.html","3fa39892d923080e7c87bd75de2c9af0"],["/tags/数组API/index.html","48d9e13a01f89e9cee8fa009b1b59635"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","a29d50f62437aade96098bcb1ccb025b"],["/tags/文件上传/index.html","4761e37d2dcbd5f6500b927a4279bc30"],["/tags/样式污染/index.html","be845f28f86a4ebc998a8b9e571d948f"],["/tags/模块化/index.html","1c08c85e70266097ad5312ce02a01541"],["/tags/浮动/index.html","6bd7c01bf6b916bab4450f2a615c4724"],["/tags/渲染解析/index.html","a6a9f8683f6d74aa524a03e66aec4f61"],["/tags/生命周期/index.html","bb40d747ec99f174a665dc5d7de62eb1"],["/tags/盒模型/index.html","a5c0ed130c7af07d660684e8cad140f0"],["/tags/移动端适配/index.html","a0d298c7e12c90b31a8b0c1150d45311"],["/tags/类组件/index.html","adbf03ddf45b9cf4bafd7a4cc282a06e"],["/tags/组件库-antd/index.html","41374be724193dc545461a47b85af0bd"],["/tags/组件通信/index.html","35ed6e264aa38b3dfe22d16a6ed95f51"],["/tags/编译执行/index.html","7c700e89642084f1df8dfcfa374f7303"],["/tags/网络请求/index.html","96b042b99b3eead7a597803927fac481"],["/tags/虚拟DOM/index.html","18fc5481b686e3428f14cbdbf083b88d"],["/tags/表单提交/index.html","3c933953c8294f3aef8339b3579a6a01"],["/tags/计算机课程/index.html","19aa3d7d70539e84e9825726cbf701f1"],["/tags/计网/index.html","48808f633acfabcdb56faca6cff1ca6d"],["/tags/跨域/index.html","5698dab05d55a0244d9b29b3d8217f6a"],["/tags/跨域解决方案/index.html","f6d1125483a0966aeb429d8db6249293"],["/tags/跨域问题/index.html","eb3fd320cb100b129f5bf8ec2234acca"],["/tags/路由管理/index.html","0801027f29d80842913b3f96de402016"],["/tags/进程线程/index.html","3691374e0ee96877ac8279fdd241965b"],["/tags/选择器/index.html","c2df88985104451aefaee1297d2667f9"],["/tags/选择器优先级/index.html","597a28944b2e954170d4e6887865a163"],["/tags/隐藏元素/index.html","c7f3bd55a6689c855c2945c03902faa5"],["/tags/页面解析渲染/index.html","d7fadae1456f052d82dba5c094a63303"],["/tags/预加载/index.html","0af43972f1c7e8b88894efcd018bb6ca"],["/tags/驼峰命名转换/index.html","c6349b90fcb591d9236ed6f333463fec"],["/tags/高度塌陷/index.html","c70d844057c180ae8e6f96c06bfd2c04"]];
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
