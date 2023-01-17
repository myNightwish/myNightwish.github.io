/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","2bbe77e5af730b9b3e49d72915642776"],["/archives/2021/12/index.html","86826a264b79527353ca9466afd20f18"],["/archives/2021/12/page/10/index.html","c1510c761d2cbb287adc7f8ea0b485db"],["/archives/2021/12/page/11/index.html","420be8090a9d9b8b3e54f7ca66883eb1"],["/archives/2021/12/page/12/index.html","d829e97f530928be5d81e241549df997"],["/archives/2021/12/page/13/index.html","1cc58e0d63d6d032c934569a4897c806"],["/archives/2021/12/page/14/index.html","c4ce8de4792645364aadd3009fa664b6"],["/archives/2021/12/page/2/index.html","54fd2e306dc9ab98748f42588522223a"],["/archives/2021/12/page/3/index.html","1ac29cece243dc73d7ba522b4e45aab6"],["/archives/2021/12/page/4/index.html","e18b5cd79f7f285e3820dd10aec434b4"],["/archives/2021/12/page/5/index.html","0d3bc358906e4e8cee84abdb85f52360"],["/archives/2021/12/page/6/index.html","3d049194914d5e78fadc0a0a41f039ba"],["/archives/2021/12/page/7/index.html","82e25cc91b4318eb7eb5e90e5ecbdcfc"],["/archives/2021/12/page/8/index.html","d6797668100e519b14ea2ae3f89f9640"],["/archives/2021/12/page/9/index.html","93024eb0744d8aab234aa357a020462b"],["/archives/2021/index.html","6562f51a950c2cd41cd051df0aa64709"],["/archives/2021/page/10/index.html","6379317006d7e3333dc52204058d9acb"],["/archives/2021/page/11/index.html","2c20bd7bbd080ba035406a2187f61f9f"],["/archives/2021/page/12/index.html","3d919ad937595f3e1fef514dc9a55130"],["/archives/2021/page/13/index.html","72040d060b2b24631a1740dc15adee07"],["/archives/2021/page/14/index.html","334c29cc496213f4be43fbb7322b5818"],["/archives/2021/page/2/index.html","5eb2e538d455821ac44f0841eb1e80af"],["/archives/2021/page/3/index.html","e20fd7820dcf40c9ca0ca5d551be1551"],["/archives/2021/page/4/index.html","ca1f341c34ac9deddb9cc7b0490534d2"],["/archives/2021/page/5/index.html","9470906ba1b076177110090b38e4f791"],["/archives/2021/page/6/index.html","c57f340d79b5cdfab2a3056f70939c8f"],["/archives/2021/page/7/index.html","a3b86ea382cd7c6df153488ef8fa6be5"],["/archives/2021/page/8/index.html","c631e6aa09be83e10315156dda6d0f69"],["/archives/2021/page/9/index.html","8ef4f00d1645af71a2c3398f05d997a0"],["/archives/2022/01/index.html","a24e911156cb6df99bdb3f201d4d4ae2"],["/archives/2022/03/index.html","397b6e5cf43f7f05ae66e7ad5482995e"],["/archives/2022/03/page/2/index.html","90a3aa3a556bad0d001d78f15db0c32c"],["/archives/2022/04/index.html","5fcaa98a881919f0427414a92ad9a24c"],["/archives/2022/04/page/2/index.html","69291792f5cae7bd1b2533a62844b954"],["/archives/2022/05/index.html","a258fde5414d09f7b9587c080e9d38a5"],["/archives/2022/06/index.html","2bcd8bc9558fcb26beeb432ac5f703d0"],["/archives/2022/index.html","fa9007283ae75b95e72651f399d502a8"],["/archives/2022/page/2/index.html","de7931e741187a259c3ba30cb3b93931"],["/archives/2022/page/3/index.html","7abd881f97cbb73c10459f63b4481fb4"],["/archives/2022/page/4/index.html","853354200708fdd5fd888413952bdff3"],["/archives/2022/page/5/index.html","6e41f759cf1251927ed19f5e27928283"],["/archives/2022/page/6/index.html","c830f6b65297205027bc46d2b63ca0b6"],["/archives/2222/03/index.html","919582d967b4e77246d56fae7c8c08e0"],["/archives/2222/index.html","0f3c9041c9aad64e272776ad434c222c"],["/archives/index.html","742d052e812e78009dec1878d1b13727"],["/archives/page/10/index.html","8ec054a70718e230b6b7f8a15f4f87c3"],["/archives/page/11/index.html","87a8ef42d7efb2b021cc88882f9c361a"],["/archives/page/12/index.html","9d12d746efb714e0018eca825741d5f7"],["/archives/page/13/index.html","ee88a03c204fcb4873c977606d0f202e"],["/archives/page/14/index.html","8ace72d678d7d393aaf37ff8bdb97eba"],["/archives/page/15/index.html","4d3139bf51b56f0668ac4a82e048e408"],["/archives/page/16/index.html","3bd0d29d819a1b27ca2baabb23382c4a"],["/archives/page/17/index.html","c0bdde13bced92a5b36888fa3e8c631e"],["/archives/page/18/index.html","e73933761ee804782fa8129418b2bec3"],["/archives/page/19/index.html","446fc7d0c10e679bfd0f07e24df26d02"],["/archives/page/2/index.html","257408fe8acf964e3bfc60f9dae2358e"],["/archives/page/3/index.html","f4c8e38feaca7f6b8cf58dce0b2238c2"],["/archives/page/4/index.html","a4d1dc4ef7e9d4a1817beb75fe04c50b"],["/archives/page/5/index.html","24699a03f9ab69d805a50622a57a7cef"],["/archives/page/6/index.html","b3d0b81eee7574274c7b8de24ad104f5"],["/archives/page/7/index.html","95a4e89b409179b2acf6bd8e12f80b5a"],["/archives/page/8/index.html","8c0ce5aabd007d07471d156f4f6163dc"],["/archives/page/9/index.html","3c01b9f2b384eabb17a5d90fe34152f6"],["/books/index.html","7170412d386134ccc220ff25f7511dad"],["/categories/index.html","0ff8e368470b8d73d9b3f5648870ab13"],["/charts/index.html","1c313416feb49ef0982660850f953a15"],["/comments/index.html","a6a4a7ae05526b92d72a41049a889817"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","4ff0f6baddaa92cd4cd77ee6239f0b72"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","cdea330d5a71e6e20deb028da98267ba"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","d9af347d297e8c94bb87315d57e92d62"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","16e3d35174035c5c810aa4361d6fa7e3"],["/music/index.html","0ffeed81c5b9296b118edafdcdb70778"],["/page/10/index.html","9295016d6adeaf7e3ac010574caf2f7c"],["/page/2/index.html","4b4454273e747c761962236cc4b1ea46"],["/page/3/index.html","2d97e1d03fba81f74945e5baf0d010e0"],["/page/4/index.html","2cb88b4038f5838ef3ef73af637c8aa3"],["/page/5/index.html","3cc26b2b1ecc449908953d126db61bf4"],["/page/6/index.html","2c9e7a904df60805233754269d4c702c"],["/page/7/index.html","e0f6d228545320efdba34dd5d6e8a467"],["/page/8/index.html","4ff09c1ff43bcf45bcaf35bed1b43362"],["/page/9/index.html","98f976d72978a3a7f6e4e8f565663f13"],["/posts/1003179605.html","b8fc0d362ca316a81b1cfa9658f88164"],["/posts/1078088869.html","419ea4cd9762c7819f80fe44c1a1fdcf"],["/posts/1168384896.html","c2b70f9b5cb4cdd2c87166c511d29a76"],["/posts/1174755164.html","9099733616a45b8ffccf4721da00aa0b"],["/posts/1207877865.html","80803303e81f3625961db3db2d38ace4"],["/posts/1322992885.html","8a5f3ced1e15eae6f312ef80055a0ce5"],["/posts/1405183845.html","8d15e6dd50ba4de8b86282c601c2d641"],["/posts/1460941642.html","0831d447eb2463d9bdafcd62c60eefb9"],["/posts/159855229.html","0d6d10cc8b6e636670d503cff04e0b24"],["/posts/162997961.html","ca6bb53e6626d4cf992be7a6aa1705fd"],["/posts/1634682499.html","1ded3b5305e69af84d1e4284a863c89d"],["/posts/1720673220.html","5c0007e3d6fa07b2f19d141890ba094e"],["/posts/1794184575.html","0c4f0061c6ad573a2a86faaa9a134d35"],["/posts/179783341.html","1474582a566c2b33bad3e841107f728b"],["/posts/2007769797.html","18ecb39f666cae3e7224980b092b29e4"],["/posts/2062301197.html","e3463927e7ab3419ab8514d025eabbd7"],["/posts/2071449193.html","182d9ab4f386a0ceac7cc2ae4472ba69"],["/posts/2075292597.html","c8e3b32de19fe1161e37240a85dff4b1"],["/posts/2124882507.html","c61d344c107de249e9071c327caeb46a"],["/posts/2131155013.html","f1284d6f2e5a47e452b4e3d1dcc89158"],["/posts/2169143571.html","ea288e2ec260b0272e42070eefe5840a"],["/posts/219349139.html","9df0e9c3d3c29fbd25979d6dcbf5cd6c"],["/posts/2217063026.html","a13b4ce4de04a961eff179a6777f6ec8"],["/posts/2218506745.html","a9bfc9db7f63586b7047f497a78f5e5b"],["/posts/2292260110.html","46c4eb18088a01615b3e6ac9646d3d89"],["/posts/229643181.html","81181c75afd07e8c1437865b9ecc7dcc"],["/posts/235914813.html","e6b96699ca78fc86483520d4c808db28"],["/posts/2387908466.html","b0ffc6555abc864ac4222e7fb6a03f0e"],["/posts/2580568501.html","a76b2c49198a85e8126334a18ff33566"],["/posts/2621268747.html","06defb1ee6e7eec8e7acf82e74bb3edc"],["/posts/265724518.html","305fb00a34e59fe26f21764c1cbf0a85"],["/posts/2716721158.html","ea447af74908d256de0975ab7e46a3bb"],["/posts/2747544176.html","2b20ec927d1e2e481f6e0323505f9fb5"],["/posts/2799443321.html","c2bc5a94c51e30509db9ceb5c1d4d944"],["/posts/2803057116.html","07431736390cd8d053043d873c92f271"],["/posts/2818550155.html","a0966ca816e49d4d8517ac0c63daf97b"],["/posts/282252185.html","6ed19f3a8c6655bd885687a9fe687a49"],["/posts/2959925095.html","a8814eb912f9666dd673382c45831538"],["/posts/2971665882.html","d19215bfbf1e48a5edc623a7c9eaaf59"],["/posts/3067404590.html","5a0a0ef9eaf7fcc5e272361667604205"],["/posts/310999178.html","ba807e0fce9602fbc648a348325d6311"],["/posts/3120977046.html","bcc6899b44322abad6c60d654fc93b3e"],["/posts/3253065341.html","6a94670fc9a4d8dad5a5aee87bd1f3f0"],["/posts/3253305718.html","c39622fb345664ffc4032552442ed53b"],["/posts/3384747987.html","d4f639bab0ddf2ea86b4c485998bf64a"],["/posts/349024060.html","23f474f985b7cbe55a5dbff4fcf7bc97"],["/posts/3598970227.html","7581ea7921bb4d5ee77b5ad8e11c8443"],["/posts/3611094049.html","1f66b1d98b89071499baa10e779dae1c"],["/posts/3631469724.html","f72674d650b75f2795c4bc669b86fe94"],["/posts/3691095479.html","2e1492d5b88c03c624dd4b481ac29959"],["/posts/372934289.html","4344685ef857830f87bc551105ea2e68"],["/posts/3737997078.html","753bb8f24237467a4a28d7466fc17dc1"],["/posts/3783644122.html","051f6ee88b060d1f0e1c8ef7b6ec6fe4"],["/posts/3906205819.html","4fe3198dfaa78242b008ae2d8df30605"],["/posts/3912543564.html","4cc7018e041647e9eb9acd27e8ade042"],["/posts/3998253138.html","8f3f52ab7854373c24f672aa8f5adef5"],["/posts/4075683688.html","28996d306c1acfe6972ba91a47289e84"],["/posts/4184919567.html","8f22e78f51423985323c24850da200a6"],["/posts/428414458.html","c516410e5e3344c03fc8e9bf5b031151"],["/posts/4285860800.html","1ab972aaf9ed60d611af7149da2116c3"],["/posts/50508479.html","a7d5719635748eab6e6b6f6092dae477"],["/posts/511687579.html","d20683b100a765be95b70c4b772cd78d"],["/posts/611441247.html","d4d01f23fb5589a04bb3dcea973a1776"],["/posts/619926249.html","816b98a5b8663c32387ba56ac345f4d0"],["/posts/656350506.html","f0f1157ed8f4cd02cc344f6213cb19a4"],["/posts/680535600.html","7399a00b40c6a61b93a335ec61901150"],["/posts/684607466.html","6e25a949b3c4a26b856218ad0e7bee11"],["/posts/686254810.html","d5d1139b0816317985a78d88263557b2"],["/posts/710205459.html","584a2f9fa333c8da74e0efbd0c6a9c95"],["/posts/775935900.html","4ce3c0f1f315fe3a02bc8174310784ed"],["/posts/854292428.html","f1c2b881bc8d6aa3c76a19de21f92d36"],["/posts/855735627.html","820675dfc98844dc9406c64c7d24eb62"],["/posts/867212230.html","4fa92cb211f465b53ea4d7890f4ade96"],["/posts/926905116.html","ca7b14d7c3822754a450e9a28cc461d1"],["/posts/CSR_SSR_ISR.html","6e09dbfab056c21b41a30ea107ac3938"],["/posts/CSStricks-1.html","360c364eece66ce7fb13a5e9b4678c75"],["/posts/CSStricks-2.html","b36ee4714707356f351693120ebe4828"],["/posts/ES6.html","7b0f6998cdc5afc0f798f22c7fb65327"],["/posts/HTTPS.html","789c095c9505464560b5d76b29aecfc9"],["/posts/React's Component.html","f57cc7de008200bbbee9a5cf3804c226"],["/posts/React's key Concept-1.html","58db6f0a69387c7c6b9644eb0d15bdd9"],["/posts/React's key Concept-2.html","78edb01ffeb3946cb26da77a11a3e4dc"],["/posts/ReactHooks.html","da6ccf850883730b41c5dd2927580477"],["/posts/React_lifecycle.html","c366446fb886e5345442cee4024286ae"],["/posts/URL_URI.html","efc8da7bad4c327253268d94530860ac"],["/posts/animation.html","4a6f5598b99e9e17f2e74590578d73a1"],["/posts/antd-data-show.html","a50188d4e93d535645147240c634a0f7"],["/posts/basic_construct_1.html","d1ad6988b837a7037e155e035805cb9e"],["/posts/basic_construct_2.html","6e0d5a605431eab6a16c0343e0a7f04e"],["/posts/better_performance.html","f2d2aa141441d670a8724379237b095f"],["/posts/blogChange1.html","efdb75b456b89ad78ead7983fbf163bd"],["/posts/blogChange2.html","34bc7a99fe1d94311d278ec79a7c7dd3"],["/posts/cat.html","383071cd3ac7ff740cbe334e6a887566"],["/posts/cookie&&session.html","cf72bf9836141744611d04ce6518eca9"],["/posts/feature-tricks1.html","5f7acee4527e26cb0b32c178a4b3a63b"],["/posts/file-read.html","32eedf93f8402806641ab83df9a3f546"],["/posts/gap-property.html","4ab76cdc156478fc47f00ec8386753a9"],["/posts/hideElement.html","23624694b0cc55aec4cb2c3a2fe2bb64"],["/posts/http-cache.html","0a5d5ed51701d66bc78eebb81a6bdc3c"],["/posts/http_cache.html","f1fd8a756826c3365c9c181a9cd7cc04"],["/posts/privateGame.html","571a78587c0d9e58df12ad629aa02c40"],["/posts/prototype.html","4ec3ef888a9124f582c3188c185a4331"],["/posts/react_components.html","69af809e66d890f4777b5b4a073dba6e"],["/posts/react_vue_data.html","725c0f6d543f034b21e7c3b6fdb618e2"],["/posts/requestAnimationFrame_1.html","1412f72e4118c7eebb6ed1c2358ff620"],["/posts/scroll.html","c88c0c5aaa8b1f5567f720f90e603546"],["/posts/toolsTest.html","20adeb87fc3380b67a3732d16d30d367"],["/posts/vue_lifeCycle.html","7bf1b4804eb190fa7eed7973d508836e"],["/posts/what's Hook.html","cace59b5a84fd6f13c53d45d9e63aa54"],["/posts/why Hook.html","3eb40d4b1816f1963af270f62b4b727d"],["/posts/前端模块化.html","31b0532764b57e22a088a05207f7c845"],["/posts/路由.html","cb8b9573aea98eec3da9fe9395bffa89"],["/sw-register.js","d1d20a0b5b8c583406914eb9c65dbfda"],["/tags/BFC/index.html","4940f3335982d19f8963949999e7b8c3"],["/tags/BOM/index.html","6a63d1def90792776c48585b1b5549ba"],["/tags/CDN/index.html","764fad336d007230cc2a02bdbeb19623"],["/tags/CSS-in-JS/index.html","2684401261163ad5af3beae723a6c121"],["/tags/CSS/index.html","33c13f6bd08a9074ae0779b6cc81bc42"],["/tags/CSS动画/index.html","eb9846042d9a2b53e122c687c54ca32b"],["/tags/CSS属性/index.html","a2fde68d1e282fc20fa6d2ab5e03819c"],["/tags/CommonJS/index.html","420fff5688d9d00821a2de692a54a070"],["/tags/DOM/index.html","aa595bceb0dd537f08d138e63125e406"],["/tags/ESModule/index.html","0894c80d0f3e137279c6d6b7b8e4cb70"],["/tags/EventLoop/index.html","be68aa68d95e5c85cee065f5848cb213"],["/tags/Git/index.html","37d9b7105e2064225ae47fad80f64731"],["/tags/Github/index.html","06f17cc5e8d75078b75cf4e2aef178a5"],["/tags/HTTP/index.html","b288c8cdff50f6732dd86c9d6c4de426"],["/tags/HTTPS/index.html","c623c38b2b37989049c6a651ebdfebba"],["/tags/Hook/index.html","2382cabb897c6f44aa161f2d02223dfb"],["/tags/Hooks/index.html","b3886714897b59f6af09f32e7c346bef"],["/tags/IFC/index.html","f29303a2e8773e2804de0513cad67581"],["/tags/JS/index.html","e3fff74c010d3a9a32fed17986332e7e"],["/tags/JS/page/2/index.html","0a711592d3e775913a6e66cf158deb3d"],["/tags/JS/page/3/index.html","151b5d0c5b7c7d3a636b4d3115aa249d"],["/tags/JS/page/4/index.html","eef7da0e09843a30a3a3510245b41acf"],["/tags/Node、Antd/index.html","55ab3fe97b51bc64ea6309f4e7d9d7fe"],["/tags/Node、MySQL2/index.html","ce06886b2a32ab79d4148da2b42b763d"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","9032adfc92ce34e246e1fa58c44a81bd"],["/tags/Promise/index.html","b482904a93de9fa6512d692d0c9d1541"],["/tags/Promsie、Async、await/index.html","6c31f9630770bb69e995f87993d1931f"],["/tags/React文档/index.html","3efb367d55368127d85831b8fa6e68b8"],["/tags/TCP/index.html","9f43e1ff3804ab5199acca0c14326b61"],["/tags/Tools/index.html","b7feaddfd2b1dcf744d5a37bb6cef44c"],["/tags/UDP/index.html","806c1ee7fab5483c78aea5c373a6ac21"],["/tags/URL、URI/index.html","71e70cbba66959d6f605515a0784b506"],["/tags/Vue/index.html","5e88f51b71797a7dbb163f40ba2edae8"],["/tags/ajax/index.html","f9c6585c64cae63db57ed1d3c9ebdf0b"],["/tags/async/index.html","759293fc215fb743654b1f9710e013b2"],["/tags/axios/index.html","926e34bbe823768d24ce43ae3b2b283c"],["/tags/codeReview/index.html","4aea53c9758745c968774899bbfa264f"],["/tags/cssModule/index.html","98872365f046dec0f5a1393ce05a7ff7"],["/tags/defer/index.html","4514b83ff5311c8b2bded5dc325b08dc"],["/tags/flex/index.html","3243d774f90a7b23cbac394282e4acf2"],["/tags/index.html","f7e9636f441b34b1238eaabb92799fd7"],["/tags/overflow、滚动/index.html","0e2120a2040ed094043a3c57ca797596"],["/tags/position/index.html","d62ad6468121f5e78f50f3e205a1c6f1"],["/tags/requestAnimationFrame/index.html","ced15428e1b86345c7b32ba05d3b15a1"],["/tags/webpack/index.html","88434d63870b3aba68af5d078c859c23"],["/tags/webpack插件/index.html","8a4f9a411f5228212b76453dc4d1bf02"],["/tags/webp图片/index.html","11a7f273ab3e0dd84c12c4f58b8ea56f"],["/tags/二叉树遍历/index.html","af175c999170a797e0e632b2846b9f09"],["/tags/优化/index.html","f2f3dc8e32789bd63ffdf802f56aefba"],["/tags/函数组件/index.html","d9a649e09206102dbbb3a59fc3c15fd8"],["/tags/前端基建/index.html","61c1db14fd54bfb500d81ad619ea5125"],["/tags/功能实现的tricks/index.html","27c55ea3e188e2a8ea46d8e21e253efc"],["/tags/去重/index.html","da198a1776226367c24e62b640e41fa4"],["/tags/双向绑定/index.html","e9f99353d9235cf4c752ca6c9287247b"],["/tags/响应式更新/index.html","c9cd2aa72d0672a6d3be4969448ad713"],["/tags/安全/index.html","4b5f0c3831db7ad318819903fedb921c"],["/tags/宏任务/index.html","944e4b96072378cf6efc27ed9d7e978f"],["/tags/帧动画/index.html","e071eddf5caa9e29606a383cfb363fa4"],["/tags/微任务/index.html","3b2d019d66d51e26608b550ca472734d"],["/tags/性能优化/index.html","bfdf6699e77d2c344e7d1fd130b56feb"],["/tags/懒加载/index.html","aad1e2e4a45dd5a9a83956595adfc690"],["/tags/扁平化/index.html","83e11dd3205ca4a9c708a3161f61d4f0"],["/tags/排序算法/index.html","5e01ab30a768be110deea2fc467eafea"],["/tags/数据流管理/index.html","a49b942b9458ede37af371061e88c0db"],["/tags/数组API/index.html","9c9be23a86356377b4d4a0f93429c881"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","6cebb3aa15c22ca964e94c565aff3eeb"],["/tags/文件上传/index.html","65f6be46487de651f37901ab3871e3b5"],["/tags/样式污染/index.html","864a5659f746e024863b99a663091356"],["/tags/模块化/index.html","74124101672a85107cc7717fb7edfab2"],["/tags/浮动/index.html","699ed9586870d5441bd72bff64359529"],["/tags/渲染解析/index.html","cf92292e3119750b1c8960e2b6ad204a"],["/tags/生命周期/index.html","1d617d6bef0e2c7fc0bdf974c24fc12c"],["/tags/盒模型/index.html","68aa9bf12eb47692426a4f5e6723ed3c"],["/tags/移动端适配/index.html","45a66054988533af15e09bb63ccad823"],["/tags/类组件/index.html","e179d85b809387f8895543f4ac6a4e15"],["/tags/组件库-antd/index.html","83d4b751b1cc6706e6b7031103f5a96a"],["/tags/组件通信/index.html","00ee80d284329e3519b8ab1d5deafd47"],["/tags/编译执行/index.html","af9b004adc30a58fb5480d8a4e89577a"],["/tags/网络请求/index.html","70adf358dff8c4281ec8f2d40b464134"],["/tags/虚拟DOM/index.html","7fb7ee26fa313a7d70457fcc58948af7"],["/tags/表单提交/index.html","52942a6db3951becc5da868aff54bd36"],["/tags/计算机课程/index.html","71d23365b02090bc2ccb9f96598ce433"],["/tags/计网/index.html","6f400687c29ff63826d31637fdc79093"],["/tags/跨域/index.html","4279a99a8ee24c13e452feb5dae936db"],["/tags/跨域解决方案/index.html","1ebd7fb34057e30812e44bf9fb5e3345"],["/tags/跨域问题/index.html","da2b3b084b2a103f96db18b5e9528a33"],["/tags/路由管理/index.html","0a5cc1730f203c5b56116a94075f7134"],["/tags/进程线程/index.html","0519826d809a018c37ea02e9f3f5ab7b"],["/tags/选择器/index.html","35fc9e9053a3254a34b2594edcf7c902"],["/tags/选择器优先级/index.html","ff03bf0a99f6440f30bd963d241bbfd2"],["/tags/隐藏元素/index.html","e8d93923f7ae275eb368fb2a429b6d3a"],["/tags/页面解析渲染/index.html","9810f79dfd85778ecbeffc62b113ad07"],["/tags/预加载/index.html","df07db74e6a5e7a7429d9a7b20a7940e"],["/tags/驼峰命名转换/index.html","3e9df7c26d45829cd9e635d8d198d90c"],["/tags/高度塌陷/index.html","63a30cf23f4ba54aa2f13e8ff8db2d03"]];
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
