/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","674c6058b20762466296fd0b384d655b"],["/archives/2021/12/index.html","6855b85f31232605bf4c8a3ab409073e"],["/archives/2021/12/page/10/index.html","f96f0ebb02bdc38b468e8205a558053c"],["/archives/2021/12/page/11/index.html","f196670ad0e32f319ff17c2b83476274"],["/archives/2021/12/page/12/index.html","120b91c166232eaaa4339ff0a4f345ea"],["/archives/2021/12/page/13/index.html","50870d7b5c7a8bebf43f24a232af6cac"],["/archives/2021/12/page/14/index.html","8051e81bbe791c8414a8b18ab33fd6f5"],["/archives/2021/12/page/2/index.html","2fa01ca4d34cdff3dcc0b407b797ccd9"],["/archives/2021/12/page/3/index.html","52c0fa6b71b4c9a7913662a653942249"],["/archives/2021/12/page/4/index.html","12b1585b23bc078da49eb4007cfb2b05"],["/archives/2021/12/page/5/index.html","26f54988ce534602f2654d9d973b8cea"],["/archives/2021/12/page/6/index.html","7eb70e0e7cd51c149469cc4c2402ea0a"],["/archives/2021/12/page/7/index.html","62785b6a1077d21b98b54defa808efed"],["/archives/2021/12/page/8/index.html","030dde6654973e6b45099f4553257b5a"],["/archives/2021/12/page/9/index.html","174ce46727f71ecaa88b4ff5a8940405"],["/archives/2021/index.html","64e4e34908397257190be775131c898c"],["/archives/2021/page/10/index.html","4bb8be304e3abd717cd0baa0ac037205"],["/archives/2021/page/11/index.html","16bad441475eaea4663ffda3a5fac802"],["/archives/2021/page/12/index.html","102bb568a7b785d8d4110265bc996e68"],["/archives/2021/page/13/index.html","ff3daf47477196178270126a179cd25b"],["/archives/2021/page/14/index.html","a4951fc82c83cb307b7003ddbcba8c9f"],["/archives/2021/page/2/index.html","91bba430f44fbac572183367bdedaab8"],["/archives/2021/page/3/index.html","b78df6085d51df20d5f87f97580f9599"],["/archives/2021/page/4/index.html","c995a57eaa4ee885c9599c4196c36eb2"],["/archives/2021/page/5/index.html","68e23a80dc03f7aba2cd769ddd34eb9e"],["/archives/2021/page/6/index.html","a1d9b6106642225788fb69b66e7d1f99"],["/archives/2021/page/7/index.html","20b2c968bc6a445f0d23c1c658930483"],["/archives/2021/page/8/index.html","de05708efc69ccfc2384133333eac48d"],["/archives/2021/page/9/index.html","8bc83870f5d0aab3e8ef15927b013d82"],["/archives/2022/01/index.html","92ca204405be2cbe28a0b4119b228872"],["/archives/2022/03/index.html","2b7b8a33a83eca98970c4ff8b2fd187c"],["/archives/2022/03/page/2/index.html","a49e5317373b1019c51e8569eacfd370"],["/archives/2022/04/index.html","03cf683db5ec52bdeec3bac8bf0050de"],["/archives/2022/04/page/2/index.html","abae18446d38cc753b524be865da59c4"],["/archives/2022/05/index.html","b8f39f4a344cbe8f9b20943ea22d8d98"],["/archives/2022/06/index.html","e09ddb1cfa309a734cc292bbd8eb9ade"],["/archives/2022/index.html","7186808047b8454c51a860496923a75c"],["/archives/2022/page/2/index.html","830a72f4edaf62446e419e8ebfc0e1f9"],["/archives/2022/page/3/index.html","084d12776367511db4b38b4091bdf47c"],["/archives/2022/page/4/index.html","5da20ccdd0b240bd4ba0e441b4b9170f"],["/archives/2022/page/5/index.html","b227a21927935b48c8a13ebd94fecd80"],["/archives/2022/page/6/index.html","030dfed1f2011a028fd981eefd8614fe"],["/archives/2222/03/index.html","2c017c5bd8865ca6fb0e4fb0301cfbb9"],["/archives/2222/index.html","853797955b1ab6192eaa84eacde2e1ad"],["/archives/index.html","17328560f7ae5a591ef98deb586306b8"],["/archives/page/10/index.html","865f39e410c8b77dfdac0afc5cf40476"],["/archives/page/11/index.html","3cb73c497eea02a52c08a4a7871d9d6b"],["/archives/page/12/index.html","3065923779afb455e83f70ed70f43482"],["/archives/page/13/index.html","9cc31421dda1860b574ae5660b8bd79d"],["/archives/page/14/index.html","f2546b388a8058c8fc08cbb49081fbfe"],["/archives/page/15/index.html","fbe5afd441d721de8a6fe5e0971a9381"],["/archives/page/16/index.html","a92712f9127ee8807e56c5d18f9d671a"],["/archives/page/17/index.html","b77bb07dbcaaa2b69292673a063bba9e"],["/archives/page/18/index.html","ec2e463515a7f517ece839227153c7a0"],["/archives/page/19/index.html","4c526560cf16427f9d1516b8a0e889f2"],["/archives/page/2/index.html","60b8d22eb66eb4f1485c949a6c29e725"],["/archives/page/3/index.html","5b50ab7427e46cb6d927942e686d091d"],["/archives/page/4/index.html","f311b84f0f27ec2ed784322aaeb3f992"],["/archives/page/5/index.html","c935c40bd15eb7f8ce2841cf10aadae6"],["/archives/page/6/index.html","352dc8900ec98753de6755630c85565b"],["/archives/page/7/index.html","f482cd94d1858944224061e6f8a9f3a1"],["/archives/page/8/index.html","8c7647597ca53730eb88b3ffa0db32da"],["/archives/page/9/index.html","0670ae314b601fb0aa062325156d0108"],["/books/index.html","c6b0ce7046ea556059819313df2b49c5"],["/categories/1-1-CSS/index.html","8c50d172ae572b0aed1cc5d3e86b40c5"],["/categories/1-1-CSS/page/2/index.html","2b7100b4770de1a833fb83cbe9a90787"],["/categories/1-1-CSS/page/3/index.html","38062566dd32e20d9dd77f3ddc4edac5"],["/categories/1-2-JS/index.html","3c0814e9f688727d4c7b7ca0bbcb1a1e"],["/categories/1-2-JS/page/2/index.html","f15a458bfa1de48eb2d131bc218fd800"],["/categories/1-2-JS/page/3/index.html","4e39b6cf4a7b7a9327cca0f874f9dfa7"],["/categories/1-2-JS/page/4/index.html","ae88e87a29cca3099c039e6455aa6d3f"],["/categories/1-2-JS/page/5/index.html","4bc9854272f0cc322bcf960ae7e49f43"],["/categories/1-3-Ajax/index.html","61fedf57b8529e89f0f77712698788cb"],["/categories/1-4-框架/index.html","b9c98a043e916807351ed85fdd9bdff5"],["/categories/1-4-框架/page/2/index.html","df1d559e663531c46bdd495c7196439c"],["/categories/1-4-框架/page/3/index.html","b16abf807bf1d76bd90488d39ca86fd0"],["/categories/2-1-组件库/index.html","24dd2adc33c270ccbf428913d1e52cb3"],["/categories/2-2-基建/index.html","23b1a2e8df2b0ff318340b97c9e9016b"],["/categories/2-3-实现Tricks/index.html","f676476ee36f4ad18949a16944eab1e0"],["/categories/2-4-项目/index.html","0ecb3d5ef1050a48c45dc9f2a1ee0fb8"],["/categories/2-4-项目/page/2/index.html","499c43a116a325a2848f6ba67cb5f2a4"],["/categories/3-1-记录/index.html","f63a8b497af363c7e0bf6717571e51ff"],["/categories/3-2-浏览器/index.html","bb315abed854c68e0e6690bb759aba17"],["/categories/3-2-浏览器/page/2/index.html","c92c4d9ce7cfaf6d0f7adb87d4968ded"],["/categories/3-3-基础/index.html","9c5ecfbb0af685ca695f8fe0e92b6b8b"],["/categories/3-3-基础/page/2/index.html","33c81f9794e07747884ceb318c02465a"],["/categories/3-4-Tool-Shell/index.html","c477bda69884e8a0cd7dc700f03ade51"],["/categories/index.html","206057ecb4fc32ce6031e6e05835a5e0"],["/charts/index.html","a3c56334c7a0cbe89777fec98b7bd8d3"],["/comments/index.html","50f90cf2df4973b3062e32bec883ad6d"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","243b2ac14b65d388beac9b5c891d7ea0"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","b660f47bf8ae3ce2193cd7149b709ee3"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","2ca0747338277f84d24d23ea85182428"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","f9043c3719277e0978d9349ed971fa6a"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","8b56519074cdaeb42cb7f224e1e4ed6e"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","401c4bae190e6475f6a33f5b6d9fc85d"],["/music/index.html","112d246a52f9ae454cc35f6363931cba"],["/page/10/index.html","3f77e4f597fa3f96b49190787e919b10"],["/page/2/index.html","dd07a2f239ad87993261533b002a1091"],["/page/3/index.html","8ba914db3ed31c0a1d0f142f2d350a88"],["/page/4/index.html","7657aaae4e3d2cc9c00d6b3fcfa6e186"],["/page/5/index.html","2e18d12ab523246c82e70be5a701ef3c"],["/page/6/index.html","9346de6af25bc8d83ead858a059d9250"],["/page/7/index.html","689bb723f3e3ff654aa636ffc9f60402"],["/page/8/index.html","be1b5323c293a900b88325bf0ac2ca48"],["/page/9/index.html","cf0747ed4329f8e1525c170a3d4fc03e"],["/posts/1003179605.html","a697f9fe1bdf898cb7dc5cc80f7265b6"],["/posts/1078088869.html","d9b7d4ded57599afd21cb4126dd201cd"],["/posts/1168384896.html","8702be3dddc93db196f50226234864a5"],["/posts/1174755164.html","93ae22c3a33283aa1eb5a1ed7123819f"],["/posts/1207877865.html","8aa4e721c73c0adf7b0e090372664f97"],["/posts/1322992885.html","932d664d75bb341c6da1c27d55c3f864"],["/posts/1405183845.html","d16e1551a5870eeab93d2095bef079c3"],["/posts/1460941642.html","51f5959244fbae9433e2c864e550d0fc"],["/posts/159855229.html","4012c8f6aa61e22d558f5aa753fbc1c5"],["/posts/162997961.html","dd2722c77185585688399f8ba16a6490"],["/posts/1634682499.html","244be8871e7bc07d2f6b285ffbdcb3ff"],["/posts/1720673220.html","ff426dc5354808a5b444c35db71b36a4"],["/posts/1794184575.html","cade2d11365830b6861c0ead0e5175af"],["/posts/179783341.html","577c0eae2cb34259ca09cf97f784703b"],["/posts/2007769797.html","f3f1d1d8b23de63c88ac8241d3b8127f"],["/posts/2062301197.html","ac766e9d1cd706a8df2b6310bf3c08cc"],["/posts/2071449193.html","734fc5f7166f4564c93d396fd7453260"],["/posts/2075292597.html","f58af79c0e19321afab824650584fc3e"],["/posts/2124882507.html","b7a031de30f9c00abc5598ab3e666ec0"],["/posts/2131155013.html","79a7559072147d9812971d3c6e959916"],["/posts/2169143571.html","b3c25de9f6ccbd586ade1f7c0e88c287"],["/posts/219349139.html","39aebe31bd376034b655bc896cb2c5ec"],["/posts/2217063026.html","f1e63864e251fc2dcc882c0fa41b25e8"],["/posts/2218506745.html","d28deba17044068418634fa73b6c3c63"],["/posts/2292260110.html","7677cecd018d65f57f528acefdc6af2e"],["/posts/229643181.html","21c3fe7879d3f49dc4da5c9cb0761723"],["/posts/235914813.html","b7789f94cf0edc3f6820fe8f909996b7"],["/posts/2387908466.html","9677573e3a24b2e111d0e3da4c8697ea"],["/posts/2580568501.html","f41eedcec7665a7006b679d9b0fda371"],["/posts/2621268747.html","5a7d241a3225b4fbd7faa7db61e965fa"],["/posts/265724518.html","55182389072ec684a88efebdc9008ccf"],["/posts/2716721158.html","48e2753fadc6be0770c533d3de3cedce"],["/posts/2747544176.html","148e508eabf831ea71967c8851277e73"],["/posts/2799443321.html","9ebb564c2fa31c1c8b42b8acdbf289b4"],["/posts/2803057116.html","08644914e96e1852651eaa251b97bf85"],["/posts/2818550155.html","51998f39bbe538af2a0a11d66c6382f5"],["/posts/282252185.html","a02e1206e3711c534cddc81437694f2b"],["/posts/2959925095.html","5d6148ed1dab2c689a01c122e368949e"],["/posts/2971665882.html","d75aaf1f2a6cadcfafeb8178a975717c"],["/posts/3067404590.html","3429b751946e0ca0c78ab7209078e423"],["/posts/310999178.html","e5693b18192ee16526bfb8b5291d2270"],["/posts/3120977046.html","ddc81d3b42e5c139cfa7c30edd8a0ef2"],["/posts/3253065341.html","269040e9f5de8ee209f93b87eb499d0e"],["/posts/3253305718.html","b1c9de64af1e3160bc96fa369f03e8d8"],["/posts/3384747987.html","9bafb3219fee8d2242a3501b72247da8"],["/posts/349024060.html","8859c1031a2c8e22c0e7037975af92db"],["/posts/3598970227.html","664d4929e5987cd3561613bdeab0d416"],["/posts/3611094049.html","8f0c91b1d38f49aea0a0e6560ebad1df"],["/posts/3631469724.html","4ee47bc6cb42cfd130564b841055d74b"],["/posts/3691095479.html","383e4850987ee826c6f1ff8293aaa9e4"],["/posts/372934289.html","ce91c800499cdaa70df6e02826013c8a"],["/posts/3737997078.html","2b52f82282c6b4c58f2b17ce781999dc"],["/posts/3783644122.html","c808732915003ba2d973d8c9b1bf38fa"],["/posts/3906205819.html","a92dfe4c1fd87323d1c072302d7cff2d"],["/posts/3912543564.html","540a55df208cbde6bcda83775d25ec27"],["/posts/3998253138.html","c7c3fb8d097254b992de39ff315a7fd1"],["/posts/4075683688.html","6b03b894003959383f880bbec088df6a"],["/posts/4184919567.html","fb507c202cab5d08089d63b2a41982f9"],["/posts/428414458.html","33918360ec1758adfb753feefd3f13aa"],["/posts/4285860800.html","b67fc691ab24a296fdf02b4989fff061"],["/posts/50508479.html","d32a4be36943ed672c22321527e25f5e"],["/posts/511687579.html","cad4d13e3956c834fd60967353e9aeb1"],["/posts/611441247.html","9dceaf366da04189b42782b81d5a7659"],["/posts/619926249.html","6838cc8614ea0c900e21fb428da3c1af"],["/posts/656350506.html","fbdd35d89a24dd4408265dfb39e49e2c"],["/posts/680535600.html","b172e4187200a26d35536a2f5bfa2b06"],["/posts/684607466.html","247ead13c90b49d78bdbbd28c263e421"],["/posts/686254810.html","79bf92eb1fbaabe8ef56e1779e6d0212"],["/posts/710205459.html","b7c09ecbcef20cd5531a60b914651590"],["/posts/775935900.html","2eed95a612c26f59c853fc2dfa191ce4"],["/posts/854292428.html","3212d619b94ffc732222682866097da7"],["/posts/855735627.html","5df2b8b289a28278a646a6bca65c48d5"],["/posts/867212230.html","442d7fa5693588cf9d9832d5ab2325d7"],["/posts/926905116.html","eed37aab64d6e069a1263b2ac97e6ea8"],["/posts/CSR_SSR_ISR.html","e842ea10910554d5ffb87df10e8d3259"],["/posts/CSStricks-1.html","19c7377849366b341dbb6c241ac9b800"],["/posts/CSStricks-2.html","c768d59524c5758164d2a3132d3af359"],["/posts/ES6.html","e5a5b02884d3f09dfdb5a128d9c7b835"],["/posts/HTTPS.html","2ad7c38b6339045fe81b8b742b3bcc4c"],["/posts/React's Component.html","ff690c9b62fcb78b3942f7690abe0ed6"],["/posts/React's key Concept-1.html","35f07b9580b7df625d7db7546e8b4320"],["/posts/React's key Concept-2.html","b7889f42e3fff30cd8df8313c6538701"],["/posts/ReactHooks.html","3eba98928ba26ef10b8a1d33c32b62ce"],["/posts/React_lifecycle.html","2f51ebde4c70b41161d035ecf77caae4"],["/posts/URL_URI.html","80e4b1a936d2f1896aef17b67c6dc79b"],["/posts/animation.html","7607363302be9dcd6b4be0409e3d39e9"],["/posts/antd-data-show.html","0c5c2558cd03c7cf7f39da8bbb5bd278"],["/posts/basic_construct_1.html","5cbe7f8f81ec144c04d20bb893b23e9d"],["/posts/basic_construct_2.html","e3845d24a57e4aba41908206da52cf1a"],["/posts/better_performance.html","c6641676bac54dab0274b5b7977db726"],["/posts/blogChange1.html","d28ff9800347394c3a0bbdb8c2496a08"],["/posts/blogChange2.html","46e5da491f97f1298608d5deaa15ddf6"],["/posts/cat.html","0bb2193d52cbaec727c1af8ece0c57da"],["/posts/cookie&&session.html","8d7c38013fbffb17fa123a293803161f"],["/posts/feature-tricks1.html","bd9fd1e4f0c73004bb566df8436e4128"],["/posts/file-read.html","288b58b6f0f3dda4a4af7e2521183969"],["/posts/gap-property.html","9829ff288110f86872d427cd9490fb45"],["/posts/hideElement.html","320b0af6e9c4121344d27091c63f4c25"],["/posts/http-cache.html","90f7deea2f299f22f10acf5b90a2404f"],["/posts/http_cache.html","1e86873b66ba465336ab990ace53268d"],["/posts/privateGame.html","53fc7131251a8dd12eb2725157b2a499"],["/posts/prototype.html","ca8e2c5ecff7a5fad156529565fe34b2"],["/posts/react_components.html","73479a3b5c2cb22def3fe016853d808a"],["/posts/react_vue_data.html","16f09bc1cd2d8f0c6a1089e56c87beb5"],["/posts/requestAnimationFrame_1.html","5fd1f36f4b7852bfc697ed1155cfc781"],["/posts/scroll.html","62a3af754937f160a5c0fbfc0006d15b"],["/posts/toolsTest.html","78ca7d1f88206ee83280594c19a5f2b5"],["/posts/vue_lifeCycle.html","9923a1357b51356ccab40782f0d5c886"],["/posts/what's Hook.html","822b8079df79dbe444f3be2ac1e66274"],["/posts/why Hook.html","595268b2ca375de67cba724d728ebc0c"],["/posts/前端模块化.html","a53a939d47e8b8c6eb49b1c386b82dd9"],["/posts/路由.html","f381cc4b578c632e2547dfc22dfb5509"],["/sw-register.js","cb79eabeb0455bf69ed17ec03ab79036"],["/tags/BFC/index.html","095be4ca3a74b6ac75dfad5eeff03771"],["/tags/BOM/index.html","101e1aec6c2d76b558decf79315834bb"],["/tags/CDN/index.html","a0d7734d0d2ea3063e28dcab701fac8c"],["/tags/CSS-in-JS/index.html","d631a60b6f2f6cbdcbe36924055b3cbd"],["/tags/CSS/index.html","2bef98c77a193c26d4a0427e53e88f6f"],["/tags/CSS动画/index.html","6121902d1a4ccc5672033f7932157e9e"],["/tags/CSS属性/index.html","8419465812026f120d0e2be7c7b84322"],["/tags/CommonJS/index.html","e85b53e6ff9064a6f64174f8b107918a"],["/tags/DOM/index.html","3f196cd238639b1e6f64e89bec14f923"],["/tags/ESModule/index.html","b791b6af87b0f5212421252ada33ad75"],["/tags/EventLoop/index.html","f571a4295c158a8df9fa7a7b5983ab46"],["/tags/Git/index.html","f9ff734677bef9ea97ecf2b3664d1203"],["/tags/Github/index.html","c6667ea3900587137d90ff35cb461579"],["/tags/HTTP/index.html","e42a6e8af8936b5d7d72149f14361e4a"],["/tags/HTTPS/index.html","fbd64c22aa63d79e9f1ad8592e0fbd99"],["/tags/Hook/index.html","644863181a1cd27d5785daacad9f8fad"],["/tags/Hooks/index.html","e299de19380a61e92a19492d9caec482"],["/tags/IFC/index.html","a3251564f60cd6db3e8a4ee17086ff5a"],["/tags/JS/index.html","28b7300e953c1f91c1c72f0bb2347f22"],["/tags/JS/page/2/index.html","003ee01ded2bae28d2c7c21b31e42da8"],["/tags/JS/page/3/index.html","01095ca7fb964c71ddd3d757f7cc6104"],["/tags/JS/page/4/index.html","10957122187f30c22a7eabd285d3059c"],["/tags/Node、Antd/index.html","e305c84cea153df1d601fbf97eb5e973"],["/tags/Node、MySQL2/index.html","fde16b1a1ee4e4d0a40e07f48a113573"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","5bc9c8f809a627705180651d5942af16"],["/tags/Promise/index.html","855fb64ada40a0ab61ccb656281b370e"],["/tags/Promsie、Async、await/index.html","e445efeaceda9790efa7d442d379ced2"],["/tags/React文档/index.html","536df968c0f6824cb9cd96553496473b"],["/tags/TCP/index.html","1884a157ff7e075b9552b3491d16cc3b"],["/tags/Tools-Shell/index.html","7fd81c3d162ed09c60d64438186c9859"],["/tags/UDP/index.html","a594091759880648a5d501d52842562c"],["/tags/URL、URI/index.html","71e8097ecf9a28f606889d29385a266b"],["/tags/Vue/index.html","14905a268332f7f000666e85b8926fe5"],["/tags/ajax/index.html","2bb254c88f1e05d46be00a21f48134c7"],["/tags/async/index.html","4cffaee6b1ccd344aec011772c6cf78d"],["/tags/axios/index.html","a6a231046696271558f65ee771c3fc03"],["/tags/codeReview/index.html","f4fb4e91ec8d8c07823428cdf4c70b31"],["/tags/cssModule/index.html","37a5689830f3c2c8c4c7f7b9bbe5e17a"],["/tags/defer/index.html","34d0a888524118193a2c4bd794696555"],["/tags/flex/index.html","f955f686c3ff27f29d005a1afa48f447"],["/tags/index.html","72126dc31ebb3caece55132ed53a9b6b"],["/tags/overflow、滚动/index.html","206f11617e29bfb9f2ca81923c6bf40f"],["/tags/position/index.html","70297ab3d8174653b2f35d39b4cc756b"],["/tags/requestAnimationFrame/index.html","4f2815af732db05dd778cd743c0b4304"],["/tags/webpack/index.html","aceb15ea20c1d2a16721e426d75e7789"],["/tags/webpack插件/index.html","14b7b69fa70338fe2a9f7b48847d3393"],["/tags/webp图片/index.html","8fe236f28162461379d8ebe090241fb6"],["/tags/二叉树遍历/index.html","97f8405aae57a2dee03977e20aead817"],["/tags/优化/index.html","8d8dc83d3a7af16bced42a145f185694"],["/tags/函数组件/index.html","e24d3b09e1e9548ce9c1609ea7fa6856"],["/tags/前端基建/index.html","f130074a5cc76f6c270da8e81961407d"],["/tags/功能实现的tricks/index.html","862da20cfac908e0343d1389f40e14ed"],["/tags/去重/index.html","f620044e4a915cacfcb7a6b987377a0d"],["/tags/双向绑定/index.html","156bae6adb14099a2d39559c55113e8c"],["/tags/响应式更新/index.html","5ded334a0bdc4354225bb02c55be1a41"],["/tags/安全/index.html","aa093224f899d02bde71584c8d906db3"],["/tags/宏任务/index.html","37cd99efb0ebaf3d10e872574dc53735"],["/tags/帧动画/index.html","b8c5fca541bca8a74846b4a785314919"],["/tags/微任务/index.html","ab2d20e291aa9f1dcb2feb02cfb33965"],["/tags/性能优化/index.html","bc5033f6d17c3945709c8a82a6f0d778"],["/tags/懒加载/index.html","f9513381b8f4fd9049f8902626fd6ae2"],["/tags/扁平化/index.html","0a5377142539ee9194a26a49f2b64e34"],["/tags/排序算法/index.html","577c4d90e62494ca0e882e1cfeea3160"],["/tags/数据流管理/index.html","0fdfcf088223c0939b374c1806f96a74"],["/tags/数组API/index.html","8d5e6f86b6a8035261f52fe6157b7e68"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","393d0a2da7f52f1a18b120c5ef9c26e3"],["/tags/文件上传/index.html","820f35eb512d74c290f625359f5ac2dd"],["/tags/样式污染/index.html","80da538d52eeaf8d5121692da217abee"],["/tags/模块化/index.html","a4415d48023d2a50618a2c79491479c8"],["/tags/浮动/index.html","b80554149a130b9927dc3e816072f5c4"],["/tags/渲染解析/index.html","6b2ee68cd9a53011efb1018bd113c070"],["/tags/生命周期/index.html","f4efb4d18b0ecd5deb520ec4b6e53cc5"],["/tags/盒模型/index.html","374f628ec447f72784e1a714553b3e6c"],["/tags/移动端适配/index.html","28a95ebb9b640c70b9f08623a3b3a494"],["/tags/类组件/index.html","2d0e189b42a79c95bbcec1d2a6b15b90"],["/tags/组件库-antd/index.html","57729f0587960a5ff984024f53819cbd"],["/tags/组件通信/index.html","b7c981cab302af53c361650ff90a19c3"],["/tags/编译执行/index.html","d2c85cd4123cea25d299c43f61de9b07"],["/tags/网络请求/index.html","de3b17a995c997e886600f3bd03a4949"],["/tags/虚拟DOM/index.html","ddabeef437f92128b8dabdc0bd2f0a58"],["/tags/表单提交/index.html","f1b11fe829c0a4a8e06b554d8d8e4627"],["/tags/计算机课程/index.html","a30ec113f67068608520aab39e1c5db0"],["/tags/计网/index.html","59ee2ac88a980833fe94def17bfe40b8"],["/tags/跨域/index.html","d1d290df28d7e5623b40d14531ae9e56"],["/tags/跨域解决方案/index.html","6baf20d1906de8e52a5866aa0cf1c941"],["/tags/跨域问题/index.html","0a4ec59a85a1ae690e6ec5ba54fe5012"],["/tags/路由管理/index.html","62bf1d5bfb959d1113eb7072be6b8124"],["/tags/进程线程/index.html","256f190cd7afcc747462958b294f3368"],["/tags/选择器/index.html","7fcde27f03651b24eb575af10295777a"],["/tags/选择器优先级/index.html","1c446394eee85d8b2eba64c9baa334c6"],["/tags/隐藏元素/index.html","46b74b3cfbc891aef3cdda541ab203c2"],["/tags/页面解析渲染/index.html","75a73ff5beca2d67e94ad68622ce182b"],["/tags/预加载/index.html","d97b790c019007e9057abbc3315de564"],["/tags/驼峰命名转换/index.html","ec47721cc4985fde38864d78cbbbbe98"],["/tags/高度塌陷/index.html","717ec94d0012cd100038cc0010482750"]];
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
