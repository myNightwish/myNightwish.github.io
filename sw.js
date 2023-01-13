/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","afb883b000c9f9ac156774aa84167edf"],["/archives/2021/12/index.html","1b915df39fc62f17356bc9d070a87bde"],["/archives/2021/12/page/10/index.html","cc86c72f2b5d6220da4c09dcaf9da14d"],["/archives/2021/12/page/11/index.html","052f6b6a031728a8e8c2f24ebe3a917e"],["/archives/2021/12/page/12/index.html","549464f8882d34eefdb4a8375ecccc96"],["/archives/2021/12/page/13/index.html","cf0b47e6bbae2630c61f807e375c5409"],["/archives/2021/12/page/14/index.html","7a22037bce5d07f364890ec5dd772841"],["/archives/2021/12/page/2/index.html","0dba10d8ee0b92cb6ad9d09e9992ac34"],["/archives/2021/12/page/3/index.html","6958d688fc5262a1181f07e530e849c7"],["/archives/2021/12/page/4/index.html","06ff4d1ebd638217f59e80732f603379"],["/archives/2021/12/page/5/index.html","8911ea3edd71d9141953d491a525926d"],["/archives/2021/12/page/6/index.html","bac51735797ee5c3656fef69e438f830"],["/archives/2021/12/page/7/index.html","3c0b782f3990a2be0b81c90c5e85357c"],["/archives/2021/12/page/8/index.html","d34f493b17bf04253d37fc267919e600"],["/archives/2021/12/page/9/index.html","f3d7030beb06bccfdf495266a9cbe6ca"],["/archives/2021/index.html","d02d73311a22102b87b3aa7480232310"],["/archives/2021/page/10/index.html","dd8a69a36dc7348e46aebc536e19fcd8"],["/archives/2021/page/11/index.html","c01e249807fd12f0f8637e8d4b9b8278"],["/archives/2021/page/12/index.html","18db46ba96bad82c9f566e87bf89ef23"],["/archives/2021/page/13/index.html","588b2f7aa7569aa8dbd8f75be9ce071c"],["/archives/2021/page/14/index.html","d887d3a6de71132205792fdbd4228050"],["/archives/2021/page/2/index.html","8ddbc97ce93427dbf21327a0d1b1450f"],["/archives/2021/page/3/index.html","b3eb63b9e8461226e1d7547fc22b583e"],["/archives/2021/page/4/index.html","27ca758503261339101b012563bd4ac9"],["/archives/2021/page/5/index.html","9866fd93997fed8c262e971bac188177"],["/archives/2021/page/6/index.html","efa1bb7bf56f90af8a67a916c5d46e45"],["/archives/2021/page/7/index.html","318ddf6a64b07a5efbdd8a5c89785b51"],["/archives/2021/page/8/index.html","daaf28d934270a9edf7b38d9bf458ee0"],["/archives/2021/page/9/index.html","a7014bd5a061dcbe3dca784aa904b6f6"],["/archives/2022/01/index.html","8da0affd44e0d13ed0402a457e771fac"],["/archives/2022/03/index.html","a982273cf37657029fc7871a6887fa9f"],["/archives/2022/03/page/2/index.html","d2dbcdd8ecad6b409b833446015d4657"],["/archives/2022/04/index.html","e426079f1b83effdc4b504ea60e05a64"],["/archives/2022/04/page/2/index.html","e825e8e818e7a05146c37adea9feb00a"],["/archives/2022/05/index.html","f0b668a220c7621fdacb53109119e7ca"],["/archives/2022/06/index.html","26c7948d10a33d3697ff3468992a27cc"],["/archives/2022/index.html","cc0ba57880425a35ccdcc54a9bf35824"],["/archives/2022/page/2/index.html","60b158708f6d529f8e312d2c25af8d03"],["/archives/2022/page/3/index.html","f9232c2c4c12e1684915f8aa9fd0896e"],["/archives/2022/page/4/index.html","4b88fb401f2c6e1905016e8326b4fefe"],["/archives/2022/page/5/index.html","d1731bc488a8a1404daa9cf90534901c"],["/archives/2022/page/6/index.html","03fac7cb33b63928192f01dfe0edc571"],["/archives/2222/03/index.html","cfc763c6e8d69e6f54f73b17d83b2d94"],["/archives/2222/index.html","429825eae9b3bbaa9c7b6a763436462d"],["/archives/index.html","900a65954263b3634e24558785e9cea1"],["/archives/page/10/index.html","4bda03de5a35380c1109ed84edf3e318"],["/archives/page/11/index.html","5697df0c91238b79506e0b6f0ba7d020"],["/archives/page/12/index.html","8397fbddeeec359762459a48ba26fd04"],["/archives/page/13/index.html","a8afe280196474d86c152387d8b0127d"],["/archives/page/14/index.html","19a4773869a19bf198adcb1260350f4e"],["/archives/page/15/index.html","3a1b5c2711bbba1f37094c44ddc73879"],["/archives/page/16/index.html","e74c7f3c4ec8357b57a698c7c3056422"],["/archives/page/17/index.html","2292c041389b6d547b686e61dcc3050d"],["/archives/page/18/index.html","c8cb81d1b1a5909b75d68f08ce62c9db"],["/archives/page/19/index.html","29ac32c97187cc494f6425b6ccffe13e"],["/archives/page/2/index.html","fa45b59ed51f12ddf7e9906c51cc3254"],["/archives/page/3/index.html","80ce3576e24614738d2f7f287871652e"],["/archives/page/4/index.html","a3bc6f68da30afcaa85c05e29d956996"],["/archives/page/5/index.html","f3342e99b0a2cf3337eb93f0170bb1a0"],["/archives/page/6/index.html","cc293fe7fc175d9946164b91a5da2c70"],["/archives/page/7/index.html","3155aedbb8605ff5975fb41f83d3809e"],["/archives/page/8/index.html","fdd9c8fc5031e93a10b78f67b5632c74"],["/archives/page/9/index.html","7482b2ab02be4b3a4e325c82c656d0b5"],["/books/index.html","ffe89fbbe3a9b8c2c9fd397f62851e76"],["/categories/1-1-CSS/index.html","2f87b266a065451d4bacc84e1f7838a7"],["/categories/1-1-CSS/page/2/index.html","eb4234154267f9c07ca80064e14804f0"],["/categories/1-1-CSS/page/3/index.html","e4900a5698a9a018cf270d64337c7ae4"],["/categories/1-2-JS/index.html","cc031652af7393486ae4ad2531d7813d"],["/categories/1-2-JS/page/2/index.html","a4854b2cd0c04ee1dba5efba43fe2257"],["/categories/1-2-JS/page/3/index.html","ef820615a845a946b5f6716b440275ee"],["/categories/1-2-JS/page/4/index.html","499408c9bda3b73fb02c7cebb348765e"],["/categories/1-2-JS/page/5/index.html","f38a05991b2750a0d78f5f5344ba45ac"],["/categories/1-3-Ajax/index.html","ea14c0b79b01ccd56b8c70f740537963"],["/categories/1-4-框架/index.html","abc574373d98b5e2465aaa06bc2609bb"],["/categories/1-4-框架/page/2/index.html","39279c72108a110ba836669acbc33bcd"],["/categories/1-4-框架/page/3/index.html","8dc0ae104f9894ebcc7b56ea3ea9be50"],["/categories/2-1-组件库/index.html","2ebb45b3ef6296c2a3381a6819407e85"],["/categories/2-2-基建/index.html","cb3eb1ee23d0e874f29d33d3743caa5b"],["/categories/2-3-实现Tricks/index.html","3094a2080a2b651b9af2c72a99740ac5"],["/categories/2-4-项目/index.html","8ed720db966dfdc1f39bc652003eb659"],["/categories/2-4-项目/page/2/index.html","0332ae8ab10ff2892970ae376d8c5806"],["/categories/3-1-记录/index.html","3176817c4e496a30a8af208f0e79c8c3"],["/categories/3-2-浏览器/index.html","70ed328deeca1a1dc6e32ec4ec95237c"],["/categories/3-2-浏览器/page/2/index.html","66e125fced328b6960666b87d0b14feb"],["/categories/3-3-基础/index.html","c87931dd152bd76e3d9ca4b98171cd0e"],["/categories/3-3-基础/page/2/index.html","1fecc643b4acdffb78279871a290e88f"],["/categories/3-4-Tool-Shell/index.html","ec18c85985901e5debd5ce4fcd1cc5de"],["/categories/index.html","aa00ca9dd7f3fcad7e12c3d1b176a010"],["/charts/index.html","fce0154c5dbcf22918e167a0c62e1ee2"],["/comments/index.html","9e0427f743dbd55ffaebb3c38ca112a5"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","9229df9cece568c419b85e8e848da9c7"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e84987a00d3dd19e0ceb41861d85609a"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","84ba87a63bca365207f318f5b7a6aa21"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","ce50802137ab41932aaa5bd77c2f0c97"],["/music/index.html","9ed4867e46560a56b47f9b000302e70a"],["/page/10/index.html","88696f4fcb5cd2cd49502945c29b70ee"],["/page/2/index.html","9c8d3fc5378324fd1b221e2a8a09d137"],["/page/3/index.html","e31d4d1d2874cffb8ada6a59ba1b885c"],["/page/4/index.html","bfbf22943bfef05ba6bcca838d3bbf0a"],["/page/5/index.html","a62f6c819925db9e4bae9734bc6cc95a"],["/page/6/index.html","e37590108edf7cf47eade626569f7a3d"],["/page/7/index.html","9754332abe7f67c40b63118022fb2054"],["/page/8/index.html","de21bc6443d9f644442d2c2b9d49d966"],["/page/9/index.html","69cd4f6645f2204b83e5bdcadc80a20f"],["/posts/1003179605.html","3305c8482e47dc9dda33611322ee44c5"],["/posts/1078088869.html","346ff29b483ea63d9b0080e85d85b05c"],["/posts/1168384896.html","e82624785017fa57dde5d8617ebf9e9b"],["/posts/1174755164.html","b2996ed4e9539b96135d6af1a07ca078"],["/posts/1207877865.html","1496122cc6377af50116ff62bd28790f"],["/posts/1322992885.html","169ad7756d373735f0528bb88fa4a398"],["/posts/1405183845.html","57c7ebe1108a3da09927e929f949aef2"],["/posts/1460941642.html","f0405979ff6de9b1ecb0d2f72c16ceb9"],["/posts/159855229.html","feb25511cd0e7cac924c83a6d77289e7"],["/posts/162997961.html","9997d8812e1a0946cbff0e07d2f39489"],["/posts/1634682499.html","256e5854f3fbfea7509bdcdbee6bba30"],["/posts/1720673220.html","40acdd706e511df6ce2e308565ca4262"],["/posts/1794184575.html","1e8aabcc09f41111b15970924371bba6"],["/posts/179783341.html","5bd2b725011a71f4009c9a619b722446"],["/posts/2007769797.html","98ef1e1d4f76ea4d010561b00c28593b"],["/posts/2062301197.html","11b6a4f1734041e14fd3ca8891afec60"],["/posts/2071449193.html","d5a9a4888b4c93558e7cfae683939696"],["/posts/2075292597.html","86d0edc2129ab000a0efad9780088fef"],["/posts/2124882507.html","5fc17a88924d63eaa50f6d984ed1feb2"],["/posts/2131155013.html","9b756492728af54df596cb5f739f64eb"],["/posts/2169143571.html","55957b5969692540d0edf1d3640b361e"],["/posts/219349139.html","1f4d3f628681e45aecc467180166a13d"],["/posts/2217063026.html","ecb14c9b3c80a2f16f299b0edc92c86d"],["/posts/2218506745.html","1d7afe1708956dafb57af55f21cf7cf0"],["/posts/2292260110.html","2df263343d9567d13cf7e074361cd402"],["/posts/229643181.html","5217cbdfefdfe0ff19fa4ce9ea4f1de9"],["/posts/235914813.html","6586f98a861b65671b25486ae3ed4f53"],["/posts/2387908466.html","5a44e2c7980f4be592c963783f6f11e8"],["/posts/2580568501.html","5f31d83dfd4a4b725db39f66ff2dc7a4"],["/posts/2621268747.html","33795507389935300c6a9e55104b58c5"],["/posts/265724518.html","51a26c15056892f540263076eb44521f"],["/posts/2716721158.html","669bb0cdfe9e0474be957e58af0ee359"],["/posts/2747544176.html","e7fed13fc6ea28c132d3dc40eb75cc5c"],["/posts/2799443321.html","28f118c7c2d2e121c28976a69d29eaa0"],["/posts/2803057116.html","20f9373bde6e25cd9354041f20fb026c"],["/posts/2818550155.html","9723037921a30f26469721dc9cfccb8b"],["/posts/282252185.html","ad348b9f34a88d677643b64459db5f50"],["/posts/2959925095.html","16569f9464a9de78f43272d4f7c98c00"],["/posts/2971665882.html","6b3036175738c1a732e3f52f252ac315"],["/posts/3067404590.html","f0c5dcab868616773314c2440c30c6cd"],["/posts/310999178.html","73dacbae5e51d726e46494e9a9a15873"],["/posts/3120977046.html","b09d7c56831749fcc5a0922b3f61b914"],["/posts/3253065341.html","e2d500de8bcf87d627191c2baabb5931"],["/posts/3253305718.html","e3f4213c703249660a83d3bea0f06d36"],["/posts/3384747987.html","d7165c96e5a9841c033fec46ebaf3760"],["/posts/349024060.html","9a6f167aab939d05556ce82d7a9ba5f2"],["/posts/3598970227.html","ca2dcbc26fbb8b960519ebe70f818d92"],["/posts/3611094049.html","40cb9444944024694ea35ea41fe61a12"],["/posts/3631469724.html","2025a0d84263cda96ec790a98996163f"],["/posts/3691095479.html","786d720cb6154aa4b620320be72ccedb"],["/posts/372934289.html","4b9a2fca9fb9db3fa112d32f697d138f"],["/posts/3737997078.html","234bf3e9addd47f9f9a8c78f75b9dad5"],["/posts/3783644122.html","2c8620b379cdd9ad6d4ff9cb22aa8d0e"],["/posts/3906205819.html","31762198e1cfe8a1025b532931f975c9"],["/posts/3912543564.html","b93d712bc9ca8edcf9c7b82931bca8c5"],["/posts/3998253138.html","e91752f2f88f6e0a75dd6dfcf8ae5aa7"],["/posts/4075683688.html","2d52b1f95f1c91b12c4005c9aa1b8616"],["/posts/4184919567.html","613026908bd2cacfc8d3618c1749b10b"],["/posts/428414458.html","903178daca7024dfa26523d03dc71001"],["/posts/4285860800.html","831eeeed76a684882c72e111082744e4"],["/posts/50508479.html","9f213d3c0fbbbd41c5da41574cf5f571"],["/posts/511687579.html","17144b5f974ec7236ac2b2335873bed9"],["/posts/611441247.html","3331e98bfc7db187911a863101619aea"],["/posts/619926249.html","1e365ac4ecc627e2feccc3ba33f6cfd3"],["/posts/656350506.html","db00f013a5db5cf13fb1571140831f27"],["/posts/680535600.html","4226b09e1059311a31bf444755124cb7"],["/posts/684607466.html","9db3b53f913fca2c6a2dcd0fb5cac26d"],["/posts/686254810.html","9a21924580c591bf3498e9c62c3d0109"],["/posts/710205459.html","ae8b856e7ac2ddfee40874cf502034c0"],["/posts/775935900.html","1b3ef8ff32248c3890095a758c6918a5"],["/posts/854292428.html","58f99192f291a45dc03f99339d524d42"],["/posts/855735627.html","d479028179315a92021b281f68c58413"],["/posts/867212230.html","8f11a2bd8de59e5b4f6b81d78bd8bcb0"],["/posts/926905116.html","5162fa115cef9a1c4206ba0a6aba36de"],["/posts/CSR_SSR_ISR.html","c1283f4715d41ac62031369326a3adf6"],["/posts/CSStricks-1.html","4a1cfc7fca8c5a8c85734a06381641b0"],["/posts/CSStricks-2.html","9fa8de6b1db2e52a66e8118055fce661"],["/posts/ES6.html","fabdff2ec8614d8281912ceff35fbd51"],["/posts/HTTPS.html","8a297e728274095a3ebeb2104a9de1dd"],["/posts/React's Component.html","0024f57c1cd5752828808913c61739a1"],["/posts/React's key Concept-1.html","cd414a855b788700fc5f5b3c31de1a67"],["/posts/React's key Concept-2.html","eaabd5fe8d654a0f9c4add2b8b9a345b"],["/posts/ReactHooks.html","43db03249bb25970f68d3c73364da110"],["/posts/React_lifecycle.html","428a8948b6c1352a4d6bae47c6d02cb5"],["/posts/URL_URI.html","acc63d1cb5d588b2b50a38ac79fb7a07"],["/posts/animation.html","6032f8d7abcba1ac6211b7f47b12d2be"],["/posts/antd-data-show.html","ad5da869e34a4c283c3378e4e00299dc"],["/posts/basic_construct_1.html","3e27d0227e2893dbf1f05e9af9e1b0d7"],["/posts/basic_construct_2.html","e406cac01147b5f3d90085436c25d82a"],["/posts/better_performance.html","871934ef535edef6b8839565530717e1"],["/posts/blogChange1.html","775accf45f77c1ec268eb81876b07cf9"],["/posts/blogChange2.html","4051f70d8e2c7d08f472623727be5aed"],["/posts/cat.html","93592839ec7a7b4a3039b63809c44b67"],["/posts/cookie&&session.html","3a01f42f7f4810a646492992655321b7"],["/posts/feature-tricks1.html","358170c61b6f467bf8f42c93324d6632"],["/posts/file-read.html","e2777c2017dad99e0904aba3ebbb970e"],["/posts/gap-property.html","fd9a6071a174fc4a29e7179b173b59ab"],["/posts/hideElement.html","ff9b75a5c8e013bd65387913d554c45c"],["/posts/http-cache.html","7aee867368b066148e95845e2ffe344c"],["/posts/http_cache.html","ea1c2aeb43f05ca1df876ee57e845d43"],["/posts/privateGame.html","f000009a01beb81126de2dab228f9d52"],["/posts/prototype.html","d4697cdff188dc27b4c0f5a229f0671f"],["/posts/react_components.html","c9a563835a658147348930b3695a44df"],["/posts/react_vue_data.html","def33c84f12058ab6a23d0f373464b39"],["/posts/requestAnimationFrame_1.html","e72b2b67091e8e295c610035f4c96f61"],["/posts/scroll.html","2a1a67d40642dd6f676c4ddc44f5e2b0"],["/posts/toolsTest.html","bef483a58cbaf056f991044e55613e18"],["/posts/vue_lifeCycle.html","7380bda9613fa51d9d6cb47b93d78f1b"],["/posts/what's Hook.html","8184cef4c6cfd5572d6e6e498be74a83"],["/posts/why Hook.html","b11d1af3b605978a4b4af652b795d22f"],["/posts/前端模块化.html","3308aadb3969e31e1735e8f75b2ff0c4"],["/posts/路由.html","5e7590f6c18785c0a3c65e18edec18a3"],["/sw-register.js","4d15f10a6ec3b5d3b68f15537fe6ca58"],["/tags/BFC/index.html","7c7ac44b8f6eeeee6fbef077a3ed2486"],["/tags/BOM/index.html","638dddb10555632920c53b60fa4b44d0"],["/tags/CDN/index.html","1fca59316d64a996e8a66c39ec856104"],["/tags/CSS-in-JS/index.html","bbebaaacf7c08bd972765cec34c8c5b3"],["/tags/CSS/index.html","bdbba7b48bb7c458342283c871374964"],["/tags/CSS动画/index.html","08d9f483458f12162992ef3b1b6a79e5"],["/tags/CSS属性/index.html","466ca483b62e74b145221fccc35df015"],["/tags/CommonJS/index.html","cf989d1a5df3836e68d3d096510304e7"],["/tags/DOM/index.html","e8d338b08e4b973e0c60bf647c705295"],["/tags/ESModule/index.html","580ac10a8afb93652ac8404d5867298b"],["/tags/EventLoop/index.html","34aee99e31077afaffddd65be979a412"],["/tags/Git/index.html","475f80ff1a54441fddf8503ad23bb46b"],["/tags/Github/index.html","95b54c1cb1462b0e48b965643ff77c41"],["/tags/HTTP/index.html","d9463d82ccc97b13e7ea6172521747f5"],["/tags/HTTPS/index.html","80fe2cbbe58b68d7d76ae71ab6364107"],["/tags/Hook/index.html","10167575ea6d7f9c906c88407e752661"],["/tags/Hooks/index.html","a001af5311839291d84de176d1138fe2"],["/tags/IFC/index.html","b508cc866f5819a25309d3064e10ab6f"],["/tags/JS/index.html","2353cd3bd5e0df4dfa7de7264aa6656a"],["/tags/JS/page/2/index.html","f0621e1b38d988cf18b2f76f62b47068"],["/tags/JS/page/3/index.html","67a25d313a47c7d78ae46abbb53c15f1"],["/tags/JS/page/4/index.html","7663bdd2bda2d60936e853941c5f2e38"],["/tags/Node、Antd/index.html","3db5ce125f721c4f069bd0f6f2ad0a0b"],["/tags/Node、MySQL2/index.html","79eb5c62a51b6fb394ce19165bf83a22"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","750ae6ac4792f14d5c1ce9587687f913"],["/tags/Promise/index.html","84ffe819a71c6546b8f809558c19f6ad"],["/tags/Promsie、Async、await/index.html","a9695e338f917dd7ffa3848f3e1ea529"],["/tags/React文档/index.html","2f047bae5e13bab9f258d674513fa197"],["/tags/TCP/index.html","6b6d9fb0a291227d25c8cb79375dd01e"],["/tags/Tools-Shell/index.html","52934bb35c854ae6dba2f29fa7b73e54"],["/tags/UDP/index.html","d2fac0e296803729fc59fcfa41d22999"],["/tags/URL、URI/index.html","1b69741a3cd6d096c1ca31e878fad03c"],["/tags/Vue/index.html","d8c4a0ab4e9331d6f71a1b8b759e8d1d"],["/tags/ajax/index.html","0ad1b1f4fccd4f8058c3be99fae7bd81"],["/tags/async/index.html","d742c14e62bbd26dfab6f9603e9bae22"],["/tags/axios/index.html","4d8c920a09db620cb5f583b0e59d0dd3"],["/tags/codeReview/index.html","4fd3383cc16401547ef5df08d77c0577"],["/tags/cssModule/index.html","dfcff49e6f7f172c06da7900e3e01e57"],["/tags/defer/index.html","2e18511cea3450d2f5ed0113ef3fde4c"],["/tags/flex/index.html","0c0e59c4e4ca1f5dc4b06b62724b407a"],["/tags/index.html","19dbdcbe82f9325f511c7fc9cc69dbb1"],["/tags/overflow、滚动/index.html","55195752a2989702a229df8156450076"],["/tags/position/index.html","09edac12ddce873c826df4a75ab67088"],["/tags/requestAnimationFrame/index.html","21031fec8664901331c4b75f5df77798"],["/tags/webpack/index.html","0a6455721e25443c9b37f93d3f50b6a4"],["/tags/webpack插件/index.html","e21f4e0d2d16e66df25ef8b512e526d7"],["/tags/webp图片/index.html","efa68ebff4ab3dc6ac4ffae5e40b4398"],["/tags/二叉树遍历/index.html","d3786504d1661867b8eba588f044478b"],["/tags/优化/index.html","7a4fc20b13042f696cb4fb18395489d8"],["/tags/函数组件/index.html","afbfa1baa4fcbc266deacf39a5ec0d0d"],["/tags/前端基建/index.html","e86236e696d99b0635299a44ff3070ca"],["/tags/功能实现的tricks/index.html","00f0c2a0239a1f352c5980b247e18e02"],["/tags/去重/index.html","870ecbb519d1eb464b3beb2f323bb0c9"],["/tags/双向绑定/index.html","8780d00fd38f64825f44d539464c20ac"],["/tags/响应式更新/index.html","fbd7cbd67aece203a9b8a8214645a472"],["/tags/安全/index.html","9c8325b1ae1aaf09312d1268939d4e93"],["/tags/宏任务/index.html","c1ba49552894269a2dff96fb78029570"],["/tags/帧动画/index.html","2866ec19641922e560c62e1a227a5c78"],["/tags/微任务/index.html","b78643c17cb01e440d92fedf799347d3"],["/tags/性能优化/index.html","b1066c832f02c34b1dd2b510d11394ac"],["/tags/懒加载/index.html","6f906b8b03ec0b97becd1e8137007faa"],["/tags/扁平化/index.html","9b766bd3032a71157d048fdffbdadf9b"],["/tags/排序算法/index.html","dd4d8444fe41675da30ddcf9b69cc68c"],["/tags/数据流管理/index.html","eba69ed3e1d82ed0e7a070442ac9beb6"],["/tags/数组API/index.html","1899b2aa5f7c359aa04d98be5a5f00e7"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","fe7abf50846d6ac9edf901f2667133c0"],["/tags/文件上传/index.html","0c6cceaf587dbee28940e0c9a05ae4ca"],["/tags/样式污染/index.html","0f4452b77229153b861a472c2695ef9e"],["/tags/模块化/index.html","10f436b04048ead92a5826bf6ec40c25"],["/tags/浮动/index.html","458b68d279ce0b1db981e2ba89d27798"],["/tags/渲染解析/index.html","9c586822de32ed2cf1ae586608253fdd"],["/tags/生命周期/index.html","441744b25e384d3d28ec660e1ce1df6d"],["/tags/盒模型/index.html","2544cfffe8211ca00c8d9c729b113ccc"],["/tags/移动端适配/index.html","5f898a65b17967eeca9ced4f0474a69f"],["/tags/类组件/index.html","8842e9ea37e1b0d6fa7f517efac18bcd"],["/tags/组件库-antd/index.html","4132764832472645084f309d359ebebc"],["/tags/组件通信/index.html","04ef5029a7c4954d9edb070d75239540"],["/tags/编译执行/index.html","b6799fe9018afe96e4aac472cf51e7d8"],["/tags/网络请求/index.html","fd39167108c699361f3a11dbb6aa63df"],["/tags/虚拟DOM/index.html","40113e1a343265b4cd03bbcae8ea968e"],["/tags/表单提交/index.html","f1bfb064778a1caa99ab28c155860a73"],["/tags/计算机课程/index.html","165f2f18482171a40b75cda99acb0245"],["/tags/计网/index.html","7ea426e773de88155e71005657b79aa5"],["/tags/跨域/index.html","1fdcf4bcad9309753bbe738a61c4db49"],["/tags/跨域解决方案/index.html","af815ab32515adb9522132cd4b419a1a"],["/tags/跨域问题/index.html","eb47be53ff0dc6240e55bddbc98cc167"],["/tags/路由管理/index.html","4c39a5fd7a5b9a60a075960f5f141427"],["/tags/进程线程/index.html","5000e3943de7b9ed9c7a8235726ec7af"],["/tags/选择器/index.html","75fcfb5144df17e40f9c38d8b729481e"],["/tags/选择器优先级/index.html","b4dc1b1ce23a27ca2620803b5d8a4147"],["/tags/隐藏元素/index.html","c61f4edd765797437fb9877b6ec199eb"],["/tags/页面解析渲染/index.html","11c1248081ef135f3d56c1506ce45289"],["/tags/预加载/index.html","e8ac835f3f220b1b5a6d6be692770ce9"],["/tags/驼峰命名转换/index.html","fec6796ac9777fea674bdc68fd972e62"],["/tags/高度塌陷/index.html","a8e2620863c3f1060f80d9d4a4b2f21e"]];
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
