/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","f07da023dcb715ccb96f2645890874d9"],["/archives/2021/12/index.html","d06cafc24e1885c075f98af49f931725"],["/archives/2021/12/page/10/index.html","3c6460fd1f3d2c7e20df4a67b28e2961"],["/archives/2021/12/page/11/index.html","215cef5c728e6237591eaa1964fb50b9"],["/archives/2021/12/page/12/index.html","e98bde6f02542b8c7691dbe8ee0a645f"],["/archives/2021/12/page/13/index.html","193c961a476100b0af27da92a21cd876"],["/archives/2021/12/page/14/index.html","e58e73ee80aaf1b76f9f75453d960044"],["/archives/2021/12/page/2/index.html","90650ce7dffcbaf5855933723b9c2f1c"],["/archives/2021/12/page/3/index.html","c6f60bb9e1a2406552e61838f66965ad"],["/archives/2021/12/page/4/index.html","db632091633089a265bc9f48c95575d8"],["/archives/2021/12/page/5/index.html","a691a8b9072df83fd7ec758fb55ba52f"],["/archives/2021/12/page/6/index.html","ae1c57ffa5d4f2adbd5cc642fb7c49e1"],["/archives/2021/12/page/7/index.html","161b5f16b778740f796bf0c2d433ff1f"],["/archives/2021/12/page/8/index.html","5b23f98ebd197796e4fd2e47b0d35969"],["/archives/2021/12/page/9/index.html","2a76809939a7a55939bf35ae3450ac8b"],["/archives/2021/index.html","f556ae4d38414baaa4267624a8ed4fbf"],["/archives/2021/page/10/index.html","3790c3c9e8d822dec0876144967b1d28"],["/archives/2021/page/11/index.html","21f985599bba38958a6b785f4fff22d0"],["/archives/2021/page/12/index.html","62b2d42c67f24384380d730f9bf204cf"],["/archives/2021/page/13/index.html","d5ca39b36f6abe6ad4d81e514b4e97a9"],["/archives/2021/page/14/index.html","766f77640385f365030598b29ac9e3ef"],["/archives/2021/page/2/index.html","1f064b6b896451865eb3d56475a766c1"],["/archives/2021/page/3/index.html","73cb813baedd3cc552f7c2db48797198"],["/archives/2021/page/4/index.html","5a01bf92824f2babd6d05372fb9ed2cd"],["/archives/2021/page/5/index.html","ae9081e1ad8de62cfc0d71846b96d300"],["/archives/2021/page/6/index.html","c44f0a294703b579f3cda17ca0d2b5fb"],["/archives/2021/page/7/index.html","574c47a8a0708aacc32057b4dba82d10"],["/archives/2021/page/8/index.html","65a1bbc470fa40b6a77c674d0bc1efe5"],["/archives/2021/page/9/index.html","53825aa2e472aefce5271adf24186b2b"],["/archives/2022/01/index.html","cbdc509367a168d35a09241f25154c46"],["/archives/2022/03/index.html","bd4b81efd47d34c8b1be7943a588ad30"],["/archives/2022/03/page/2/index.html","0fdeb5a2ab3b23054378aad0fdb11768"],["/archives/2022/04/index.html","3ce8b4280064406a18ccda8aa2286546"],["/archives/2022/04/page/2/index.html","65ed968c36260a180c2146a191437833"],["/archives/2022/05/index.html","7f38c520efb844cc5136bbc73f8576b5"],["/archives/2022/06/index.html","6a0d739569dedcf0455b3fb6c5b8fd87"],["/archives/2022/index.html","bff2bd92b2a8cc1b4c4cf8c718c99706"],["/archives/2022/page/2/index.html","012cbb7838e2c7faa566a525e17ad967"],["/archives/2022/page/3/index.html","69a5774f72bdcd3aa62525e135fbd3bc"],["/archives/2022/page/4/index.html","9e79094cc9d84186f6a32ecc594fd1d0"],["/archives/2022/page/5/index.html","32d9ebb3700db68df61dcc4d16881ea9"],["/archives/2022/page/6/index.html","23a6d9b06018fbeebe4a2e1bfd15015b"],["/archives/2222/03/index.html","3c658f7268dfb427c85d67cc7c9c68aa"],["/archives/2222/index.html","1842ed07714af5f52a6aff69792eb50d"],["/archives/index.html","92be409752b4c03b2b0370eba487622e"],["/archives/page/10/index.html","6f9eb6ca6c3ae39aabfded920bcaccb4"],["/archives/page/11/index.html","1961fd07093b133b0136a898a8e03e42"],["/archives/page/12/index.html","938a01d3428228a2508616baee4d8ed3"],["/archives/page/13/index.html","dfbce19070ff45f656ad90ff87276288"],["/archives/page/14/index.html","8faadb3c380ba617b85822ff72231966"],["/archives/page/15/index.html","e92abb354781b5da8b1524cf7fab4506"],["/archives/page/16/index.html","f18eb0ab2852585946431f0764556621"],["/archives/page/17/index.html","d1f4b191f512b40adb1c979c1e52e51d"],["/archives/page/18/index.html","2faaf829b5ba30d955a51f4f138022e3"],["/archives/page/19/index.html","03f582bc4a499430f4d1c23e09469d9d"],["/archives/page/2/index.html","4bc89739f3ed555dd93fc515db910a37"],["/archives/page/3/index.html","593c02cd51d496633f67b78eb2e25d36"],["/archives/page/4/index.html","f7fed2ea6ee9b70455b144432b3d505a"],["/archives/page/5/index.html","d95e7842428aaf32bfb84c90957a2b40"],["/archives/page/6/index.html","7504ffcf5a8fa0cd21f917fb206e6649"],["/archives/page/7/index.html","23a2a5d1583bd72e30d0f64f15fc43dd"],["/archives/page/8/index.html","cfb025ded078a80fcb7baeb9b8f6190a"],["/archives/page/9/index.html","5f5d06b9425286ed443ebb94e9762079"],["/books/index.html","67385d4e5e5cba2a74ca06b99b05f3ac"],["/categories/index.html","1a3f30bedeb78cb08ab72e8d27cac8c4"],["/charts/index.html","28dd00b2bd5d58ba2068512a889e6463"],["/comments/index.html","27c485090a217af252fad6e5e68002c8"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","4ff0f6baddaa92cd4cd77ee6239f0b72"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","cdea330d5a71e6e20deb028da98267ba"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","99ee1446b58c97203e7d5096f48f903f"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","eb064c0bf0e468358ff5eac597605bfe"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","9cc9f8378953fd46f7be5925054a1b71"],["/music/index.html","0e5d977506f1977e73cd2158c4d507f5"],["/page/10/index.html","62f064fe81ea9be5da22e92d56ea5fc7"],["/page/2/index.html","2cf521a6335dd6c20f2d0892af9396be"],["/page/3/index.html","becdb8cedd4e484ad742ec639e4413c9"],["/page/4/index.html","d420094d67cba77555f24e6e3bee5b90"],["/page/5/index.html","f849a86ee19eb3af57c30abdf49700ec"],["/page/6/index.html","55a0fd8e85cc23360b7c66edcb2090eb"],["/page/7/index.html","93824241ec050ba0997e8a9c62002701"],["/page/8/index.html","a8aa8e7ae8110288a9a9309460c03756"],["/page/9/index.html","6c7c90b46df2186b1d07937a2a774cc5"],["/posts/1003179605.html","328e98674f014c50b5e786e081e17aa0"],["/posts/1078088869.html","24cd9bcece5022a3df9120f7861bd672"],["/posts/1168384896.html","984a51e7294918addf7629080c324a47"],["/posts/1174755164.html","abff671961ec5f5a0df15be27c0c0046"],["/posts/1207877865.html","ee1ed3d9696e2e03f648c070e6e1d995"],["/posts/1322992885.html","d41755cc7381c4e8ad34007efd791f19"],["/posts/1405183845.html","8b6246b7858603b89cb51d991b7b4eb1"],["/posts/1460941642.html","09e92ecfb2a97d7b7dbc2ad92225f178"],["/posts/159855229.html","0235c3dc01d1edb5ebf29eb79311d4f2"],["/posts/162997961.html","0c1be8a80803eba71bf1c5bab32a0c20"],["/posts/1634682499.html","3291086bfdb14b62132f224d9afe8542"],["/posts/1720673220.html","781afcef683587a9f93d7d9633100257"],["/posts/1794184575.html","4bbe4bf1c70764f16906568869e9b895"],["/posts/179783341.html","22d842a4e48a09cd2c8eef7cef9f00b0"],["/posts/2007769797.html","c74ef255a4d68c39f983a55c914e8106"],["/posts/2062301197.html","aa9ae11f96c11c45f01780f9ddba1268"],["/posts/2071449193.html","ae1284dcdaa8933b22cfecbb15c35113"],["/posts/2075292597.html","8d75ee11bb2baec3b40eeed990a9dc69"],["/posts/2124882507.html","cfad590dbfe36bffe583562f9ab2083a"],["/posts/2131155013.html","4b8e12665cebf6e06de0c8fd867b0c3b"],["/posts/2169143571.html","eae002374cc9d63e4a5607da55e26e1a"],["/posts/219349139.html","a9b2de399b04f73cfefd8d6d746ae05c"],["/posts/2217063026.html","a76b3dfc92670ea70b9d70764985e09b"],["/posts/2218506745.html","7fbed3cd8220e23fc344940572cc7bbe"],["/posts/2292260110.html","3ec3e041f0f218c96a1c658dd806e839"],["/posts/229643181.html","813234f59f77b2232784965439c6636e"],["/posts/235914813.html","f4b872d2b80705a2768807ceeec56178"],["/posts/2387908466.html","3c2e08b699c5e7b2051201fb6c7b140f"],["/posts/2580568501.html","b4549fac047573b44e352f0e2a5baf34"],["/posts/2621268747.html","698c04eb4b6178910a7a84fee54f7dd0"],["/posts/265724518.html","f8c9a3276fa0846b7a9997052e8f836a"],["/posts/2716721158.html","5b508d3c7f92ee8bb4b017cc889ef9e1"],["/posts/2747544176.html","3a46b2ca42971af1acfd5241e3e3c34d"],["/posts/2799443321.html","19b0d99e9c21214e6b84a71b1ea142be"],["/posts/2803057116.html","544443473b35c4678ea0f9acdb602183"],["/posts/2818550155.html","533ce0ef2c7994645e5d2708f92f77e5"],["/posts/282252185.html","0645a49892f32bd32d1ea9ed6d64539d"],["/posts/2959925095.html","8b88821ec730d7455b1cb796679daf61"],["/posts/2971665882.html","af84d22ea41dd1ef6e9a20cbd4e9c4ec"],["/posts/3067404590.html","9173b6a937e0314eba580dbdffc1417f"],["/posts/310999178.html","769a16c127d9b25073c50e4c254849fc"],["/posts/3120977046.html","e615e074bcab5e0951ce607f2dd07200"],["/posts/3253065341.html","c7eb19a66ebcb5b6fef4a8e17e472af5"],["/posts/3253305718.html","5b05a9400d7df1c9ddb8848b149a76f3"],["/posts/3384747987.html","d00c06f0fcf85de9596587608970e270"],["/posts/349024060.html","4b229cb29b452272a2d8043d1c46bfa4"],["/posts/3598970227.html","71b11e15b6e45da617d49f8a698506ef"],["/posts/3611094049.html","b2db8f61ee37c73bced242efdf0247fc"],["/posts/3631469724.html","a40f6ccd6f7bc42a5c843b912226618b"],["/posts/3691095479.html","867ffb7af33e78cb96c05ee96e6b23ab"],["/posts/372934289.html","b43198a4c856a6d49da7f21fea4df59e"],["/posts/3737997078.html","c6e987b589d9610e65aef5cc12f02bdf"],["/posts/3783644122.html","401981d96e05aaea835de029de04adca"],["/posts/3906205819.html","f0354f7e8ec55f262bcfa1ed0a87b212"],["/posts/3912543564.html","a1f6f5a8c76bb86180657bac09ba00f8"],["/posts/3998253138.html","b2e5365b7b0a92f832fba950a46cc9ee"],["/posts/4075683688.html","b7958a86015b2ee6ac36a9d0fe12a156"],["/posts/4184919567.html","f0be3fb3e9f57da5d8235addbd1e83c1"],["/posts/428414458.html","fc34b5ba33be8a43c8a4c9ceb6dd47f9"],["/posts/4285860800.html","2fa62a7510b620e384de5f06cf3024cc"],["/posts/50508479.html","2ba9748087b0c8b89e901c804b883959"],["/posts/511687579.html","1bcb5e0550d0eab99822d008216f486e"],["/posts/611441247.html","b198bbe2f209e8b42e3e63e0edd2961a"],["/posts/619926249.html","c73616799fc6baf5a854417e527f8004"],["/posts/656350506.html","7ebc59a0eee053e0688f78e6c9945688"],["/posts/680535600.html","813782749838eec30af5001afd2d2e83"],["/posts/684607466.html","5e95fe0270e5868cc653ab0dc9bc0838"],["/posts/686254810.html","eb85af874bdf96f352a0bc3874196524"],["/posts/710205459.html","a627a71ed4462a32b86ad0d320146e3e"],["/posts/775935900.html","af0bbae6970e59142548995baf3fdfbe"],["/posts/854292428.html","13ce957ed87294ba3f5a00adfe6860e1"],["/posts/855735627.html","20ad4f756c51a9e3daeaf395c5e35fff"],["/posts/867212230.html","2f3628f9e213b42650b208c89b4165d8"],["/posts/926905116.html","5b331f923dc0aa70b90d543cbfcaadcb"],["/posts/CSR_SSR_ISR.html","8691c222f479c9fbeb74b1eb8b4d79d8"],["/posts/CSStricks-1.html","3363678d3abe2c0d4d29fc537d176a8a"],["/posts/CSStricks-2.html","5513b4b287d9d0370dc38af353529538"],["/posts/ES6.html","304459271b4a97ce353d558216469871"],["/posts/HTTPS.html","e1911fc9aad653eaa5fc9e81362c6204"],["/posts/React's Component.html","151333babd3857fdc81b2148f25af160"],["/posts/React's key Concept-1.html","d570965a12840018eebb9fea9697dffb"],["/posts/React's key Concept-2.html","e25b5ed321a03297f393bfe500efe221"],["/posts/ReactHooks.html","3924b64e142461c5ee5fe2639452b2b7"],["/posts/React_lifecycle.html","751260c1f005c3f5a7d7544a2148f737"],["/posts/URL_URI.html","4b66a784ae514c7a8cd5ea7ee7e78ffd"],["/posts/animation.html","cfff658b3cccd728be96c7fb0250a89c"],["/posts/antd-data-show.html","5e6588e1e93fa5fc7db2ac5ac6a5c9d7"],["/posts/basic_construct_1.html","6eacf990fbdad5815a303c68d97f0e6a"],["/posts/basic_construct_2.html","26f50993327d4f63828dba657251898c"],["/posts/better_performance.html","ff6ac85d039f1c0a555e36ea9f74faeb"],["/posts/blogChange1.html","c4311fee2c9af2733a28ffd81eff8ea8"],["/posts/blogChange2.html","bcffeec6f0bb5ff3b264cee0778bada3"],["/posts/cat.html","3e989800b1f3ba09940b96b81f075421"],["/posts/cookie&&session.html","b49a1da480ef40877039917bab8451f8"],["/posts/feature-tricks1.html","51fc58fe012a677f23bbd323a0eb3f25"],["/posts/file-read.html","066ded4ff03ab0c7de351a877ff9e5b0"],["/posts/gap-property.html","956462a43519dea593e42ad4771c4e11"],["/posts/hideElement.html","5e4bf35822f92f7d1d3212dc8233ff35"],["/posts/http-cache.html","b87824b50eaf45ce47b789155fe192e6"],["/posts/http_cache.html","9e54b5d645e8e81dfbd6a56638fd8eaf"],["/posts/privateGame.html","ff93469e748d8c2bd2436298dd0256b6"],["/posts/prototype.html","3a2e13300ba097a7b51d9ccb987a3820"],["/posts/react_components.html","bf685246595118c13cc723c67a1684b6"],["/posts/react_vue_data.html","d351b568d141049a09b1ba2ea88c6070"],["/posts/requestAnimationFrame_1.html","1a5114e987f2a4e6c7a3da36349aad15"],["/posts/scroll.html","de827b3faf9df0224872de3f1dc2390a"],["/posts/toolsTest.html","fe804319d5e1806b5b3cc1ad39958270"],["/posts/vue_lifeCycle.html","b7e60cd269d12ffb78266aff32678f5c"],["/posts/what's Hook.html","b8d2af9ed8bfb9a05a9a192bd84ee9db"],["/posts/why Hook.html","d1945d180344be6014a02e8c1db89b85"],["/posts/前端模块化.html","8891ed092857671c41ea6bcae8419cd8"],["/posts/路由.html","0444289cbfe68501ffde83339d6ba4d1"],["/tags/BFC/index.html","10f9526f84b57d684348784b1ed6fa5a"],["/tags/BOM/index.html","ebbdb4d6dc16525e0539c710d71c250b"],["/tags/CDN/index.html","c26ee78b832a14f07afac4b5425d168b"],["/tags/CSS-in-JS/index.html","a1cb5d244ac7e5147a049558d2342b86"],["/tags/CSS/index.html","ecc12aaa6ca72a69a1c96c4d2a7dde7a"],["/tags/CSS动画/index.html","bc602ce13b996301bb3ceb92674642de"],["/tags/CSS属性/index.html","38e0817586f4d011f54ece5affd12831"],["/tags/CommonJS/index.html","fd59c11bec801ba36ad5708b3fe3085b"],["/tags/DOM/index.html","61dd0816fd902df6c24869ad8e9ca832"],["/tags/ESModule/index.html","8a13777885595634be9bc964c4b46d38"],["/tags/EventLoop/index.html","4abfed37a99e381fbfaee752d791f8c2"],["/tags/Git/index.html","af63639a59081a2b514a558dd4c348d4"],["/tags/Github/index.html","1de761bf027b30478be7d5c30f8b4782"],["/tags/HTTP/index.html","df5ab273410d15a2b484aa0aeb496572"],["/tags/HTTPS/index.html","6cd3ca8654ab1235cc1eeb640d572e6d"],["/tags/Hook/index.html","79802530e500c3de0355e96e2d3743d9"],["/tags/Hooks/index.html","385e92d159002c2d47a3178f3455e0cc"],["/tags/IFC/index.html","0fa87bd0862341278e166ad440da3fd6"],["/tags/JS/index.html","b274345858777684ea7d7b82be90db54"],["/tags/JS/page/2/index.html","8290eb3ff01a212e5a525cd1a932c004"],["/tags/JS/page/3/index.html","907ef9e7009a59bc461b604b321f9d8b"],["/tags/JS/page/4/index.html","b28c4a373de0d12c3d8e7b73ad78f17e"],["/tags/Node、Antd/index.html","f27e5579badc84e6d2889588e5455bfa"],["/tags/Node、MySQL2/index.html","87831e21eea7b81e7e9e6677608a58be"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","586241b3c1528569451a4ac0ddaad4f5"],["/tags/Promise/index.html","3f3a140a99c05799adf97c403ff20f6a"],["/tags/Promsie、Async、await/index.html","b36672aeead01bfd8c2edd863abaa021"],["/tags/React文档/index.html","5a1c2ebed678214a166160a3e29b243a"],["/tags/TCP/index.html","523ad374698cda4420a9de04723bc3db"],["/tags/Tools/index.html","f2533723ca38035b1973441304cc8fb0"],["/tags/UDP/index.html","e76d896c37affcbfd2c192d84b18306e"],["/tags/URL、URI/index.html","bb606671aef7d5339e305253f1aea7fc"],["/tags/Vue/index.html","ecebb7340807a31457ff0ff3c0e5b981"],["/tags/ajax/index.html","57d627618f5724584a214fedcfb4fb76"],["/tags/async/index.html","422560317c0517d2080320a11bf72a0c"],["/tags/axios/index.html","67f06e62abd9527c88a99321d6e85540"],["/tags/codeReview/index.html","f2778834da823e8d63df3dbe65404435"],["/tags/cssModule/index.html","cf350dd560fabac3356ac2b78202470a"],["/tags/defer/index.html","33b2288d354c705bd9f37037f00b6ca1"],["/tags/flex/index.html","846916b47b8e5e76f326130f7f011a4d"],["/tags/index.html","ad9b340525a380dabf8450693e4b0a74"],["/tags/overflow、滚动/index.html","84221afe19f69e9dee62c9b9e82cea29"],["/tags/position/index.html","3f7251327dce1bd008abcf92ee46a272"],["/tags/requestAnimationFrame/index.html","459a44f5fc59c03b562b87936f1f624c"],["/tags/webpack/index.html","66b8b60ccb4e7246c5c18ac932ca8c64"],["/tags/webpack插件/index.html","60b890e95984b3adc99fa4c0b1177859"],["/tags/webp图片/index.html","22e3bc8e92dfcb8fd6b042aa7daf90ad"],["/tags/二叉树遍历/index.html","1c37e8f5ae4a043b98f142c3c5094c56"],["/tags/优化/index.html","51aeef3c616817833cb677c404806107"],["/tags/函数组件/index.html","480908ecf725004ca7b9bf02fbdc9dff"],["/tags/前端基建/index.html","8fc7961471a13a13c016f132969b9b37"],["/tags/功能实现的tricks/index.html","a811af507634d1c2b9bbe05dcd0b7a14"],["/tags/去重/index.html","5c14474c39de81a307e7538315b42f1c"],["/tags/双向绑定/index.html","4661a0d667f7d21a776b6eeba0004377"],["/tags/响应式更新/index.html","491e2245c729634320ff364750f51f93"],["/tags/安全/index.html","fe6ff3285330ba5263571ef5a7deadc8"],["/tags/宏任务/index.html","37a8511147afee841998ff8995ee4439"],["/tags/帧动画/index.html","29398ded58c3f67af186a64ed0c41e0d"],["/tags/微任务/index.html","b80b4727bf5904f080da235054ac1ed4"],["/tags/性能优化/index.html","4617d9a0bdba5c8918d42fffb861f8b1"],["/tags/懒加载/index.html","2f7a0f095944570dab1001336a79a256"],["/tags/扁平化/index.html","25023c34912e6e8f8e0d860683dddb46"],["/tags/排序算法/index.html","c8e4ffc5c87581531e4cf0e26da703b3"],["/tags/数据流管理/index.html","37f50814b2f3c61b49617783d9de7c25"],["/tags/数组API/index.html","35e204822b08e693dfbd2e18cc0056c4"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","68f8d97d9685c548e971319922b0b726"],["/tags/文件上传/index.html","43f61542ecccac1368d7ffb8174577bc"],["/tags/样式污染/index.html","9eceb188b0435ae5559a39d951f15a7b"],["/tags/模块化/index.html","98b088cff3affd6844a913fc143b5a74"],["/tags/浮动/index.html","423e53b8c48333759ee8763cbff7faed"],["/tags/渲染解析/index.html","747b795593ca042258730111fdadd2a6"],["/tags/生命周期/index.html","a3861cdddcd362f2e882cf40620e874c"],["/tags/盒模型/index.html","db1e8cca054a8e126c66c31c695660f1"],["/tags/移动端适配/index.html","a384ae5772b74f1c05b73fc4b2ac2280"],["/tags/类组件/index.html","a6b66a4e7310016e372a9a615818cf1a"],["/tags/组件库-antd/index.html","6229a44391299b5f37f4cec41b2bac56"],["/tags/组件通信/index.html","41c8f387f047454441ea0496315fd716"],["/tags/编译执行/index.html","aa8f0c3b174251774b91607d9129f519"],["/tags/网络请求/index.html","2eaea0d584a792fab0792467ae18387c"],["/tags/虚拟DOM/index.html","34bc002fa8c1bca8877eb615d3c318e4"],["/tags/表单提交/index.html","221844fe3205793233550b71ad6faa49"],["/tags/计算机课程/index.html","6277e039c9e6105c5c0fc0160bd12e67"],["/tags/计网/index.html","5200eb323297bc0d79b0f0d073fda983"],["/tags/跨域/index.html","354bfe16deaf8dfd179e8327467980cc"],["/tags/跨域解决方案/index.html","c1a06eab45d8cfd527f74956d288c86b"],["/tags/跨域问题/index.html","7dc6c501ae2a36b23f605585ddee395e"],["/tags/路由管理/index.html","4adf82b71a35b94c1faa72437d61a14b"],["/tags/进程线程/index.html","4c331f59017876997aa6595db59ae7f9"],["/tags/选择器/index.html","a686aedf1e1a5f50841fce88746c652e"],["/tags/选择器优先级/index.html","6abf37515d83b5fa5921920806a52e94"],["/tags/隐藏元素/index.html","9aa474c5f33f481b78d60e9715f33078"],["/tags/页面解析渲染/index.html","7b3fe32906df6114fee6b44c3de95158"],["/tags/预加载/index.html","1fac3626b71256d16dfc3818d79df8b0"],["/tags/驼峰命名转换/index.html","36886bf3a0d36fb803baadd6b7369b5e"],["/tags/高度塌陷/index.html","e65822c6c137aa271f9535292dd8e84c"]];
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
