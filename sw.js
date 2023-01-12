/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","570a38dc446c223d314af1a3cccf8273"],["/archives/2021/12/index.html","a9996c7554a0c6fcb60bbc2edcd507c6"],["/archives/2021/12/page/10/index.html","70a270e1e2a589d4e4369569a79e0889"],["/archives/2021/12/page/11/index.html","b6d7f01f88b06b5534803a7fc5ba9201"],["/archives/2021/12/page/12/index.html","18927a8ec336c6f2f0aa42f2988c929e"],["/archives/2021/12/page/13/index.html","b73d4e591dbac611be69585df91b1cca"],["/archives/2021/12/page/14/index.html","ecbddb0a770d1dcf8177e2df58e91979"],["/archives/2021/12/page/2/index.html","4e7aacbb63f1104eae9de68db210842b"],["/archives/2021/12/page/3/index.html","2829ee4f79f06a8d4bae6353b4980d72"],["/archives/2021/12/page/4/index.html","01e352f025b283736ee978966e91e302"],["/archives/2021/12/page/5/index.html","6504220b2e94da3dcc40ecec77cac2b8"],["/archives/2021/12/page/6/index.html","e548edf135564ba3171cde86cece0297"],["/archives/2021/12/page/7/index.html","7c5e51863bdc8a7413a7a921fc46f3fa"],["/archives/2021/12/page/8/index.html","c10432e355e8fd967043fb5c97a40c83"],["/archives/2021/12/page/9/index.html","4ba7ea48cb33c8ff7e8f9b2c93301644"],["/archives/2021/index.html","b6a35a6dd36123c2d7f8109ff4daab05"],["/archives/2021/page/10/index.html","efd902c91d91df9e11db1555d847f6d8"],["/archives/2021/page/11/index.html","83488ad046dda3f034a83459999e16d4"],["/archives/2021/page/12/index.html","51420c05a9d2838d1053cfdda8dad3fa"],["/archives/2021/page/13/index.html","9919e73f07e9cb38a9bbefbadb8f2f8a"],["/archives/2021/page/14/index.html","313f593b526e43c669522ad7a773537c"],["/archives/2021/page/2/index.html","b62eed8cd0f51d56f6860f51959b7a93"],["/archives/2021/page/3/index.html","93aff7083f772349757bfb37464eb676"],["/archives/2021/page/4/index.html","44739b5bf6cf2801fbeb644cae8b13b1"],["/archives/2021/page/5/index.html","61d644a05b8d75f3d24e9a50d0875e7f"],["/archives/2021/page/6/index.html","8b2922e84f7a630b837da239a012aacf"],["/archives/2021/page/7/index.html","b549df3e08fbc101f053842440ebfff0"],["/archives/2021/page/8/index.html","351aeb1961dc3055f2c4cbf331518fb8"],["/archives/2021/page/9/index.html","765aade5baf9a07b923521498153befc"],["/archives/2022/01/index.html","4099af37e742022425b1d19a2bd8dcf2"],["/archives/2022/03/index.html","7571bef5d6dd83859a4e62a78e365d3d"],["/archives/2022/03/page/2/index.html","58534d48a3855d7fcd72937005ccb710"],["/archives/2022/04/index.html","e50175c29f4a783438dad730a839a7b5"],["/archives/2022/04/page/2/index.html","a2a53d8964dc5a4614d951c4237d14fc"],["/archives/2022/05/index.html","b943a4d5090b0ff88f8ffb256f76448b"],["/archives/2022/06/index.html","816a6be9eff3c6f914438166ce4e87ec"],["/archives/2022/index.html","5fbdbc25d32ebe6c3cd5005387e9e809"],["/archives/2022/page/2/index.html","54dd115a1403800118792f1e4a83c523"],["/archives/2022/page/3/index.html","3f20b2bdc18c29286832d6dc130fe351"],["/archives/2022/page/4/index.html","a3fc231db1b06f89f69fc8a3720b96b3"],["/archives/2022/page/5/index.html","4c185393ddf74eb7d8428ed3388965e4"],["/archives/2022/page/6/index.html","be9d7f9d474f90b8aea3b079cea3b971"],["/archives/2222/03/index.html","f7b1fbb3b7ead783c3e4e400156666d7"],["/archives/2222/index.html","c870e236c52a456adcedd573ed8f5f5b"],["/archives/index.html","c0b13512981f2258a8717a5be67969e8"],["/archives/page/10/index.html","daa0e8721f08fec59b4495ff174bb9d4"],["/archives/page/11/index.html","3f93f1720be6039c5c77c0cbf3140755"],["/archives/page/12/index.html","dd1e12215f1b9e82bd250678ef2babcf"],["/archives/page/13/index.html","dd458986056bcc9f9dbfcf4f3ba90381"],["/archives/page/14/index.html","061d26abbe5735f45fc9c16b4b48f2a5"],["/archives/page/15/index.html","d896a25f55626e5e8ace69adb6786536"],["/archives/page/16/index.html","8272bf5fae721e7f5a5d22561acaed21"],["/archives/page/17/index.html","861b8dbd450cb75085cdba182d68cc68"],["/archives/page/18/index.html","2f0357a41a0628f80637f49662daa19e"],["/archives/page/19/index.html","b1b771695d404d4f30dc80ee5997b456"],["/archives/page/2/index.html","92bbe5f5a2df3df3bf2cc1faceeab776"],["/archives/page/3/index.html","b0005c30375a9a5dd2fd8aaf979e0bd9"],["/archives/page/4/index.html","0bf50fd52318110b87ccbc1e166a6134"],["/archives/page/5/index.html","090214dea8fffbeb839625c47a8a63c2"],["/archives/page/6/index.html","4d77591613129770f39201ccbbcea0cd"],["/archives/page/7/index.html","c26ef5ae57487652b90062001bb73ba2"],["/archives/page/8/index.html","2372dd9e1538d847b3d46c249f7074b9"],["/archives/page/9/index.html","05885d3f5ea98116ac07a54ec3d70c7a"],["/books/index.html","fd52cd5a0106cfad9f0b73ab883ac585"],["/categories/1-1-CSS/index.html","63c89b0733974241f1461e92806876ab"],["/categories/1-1-CSS/page/2/index.html","b0f93c63525e697997212d04d33c52bd"],["/categories/1-1-CSS/page/3/index.html","4b3bdad07692abaa1b08b7740716d76d"],["/categories/1-2-JS/index.html","306894e74a35f34b90b07757c26fb63c"],["/categories/1-2-JS/page/2/index.html","5844fc30ef42fec3d6e8be5a09aa7bff"],["/categories/1-2-JS/page/3/index.html","90bd5dd2098e5157ec3548ca6e379d7a"],["/categories/1-2-JS/page/4/index.html","e21a46f2c985ae0a9aa64efe45822ea0"],["/categories/1-2-JS/page/5/index.html","b5a44a7ea16f585eaa8bc3b59c91acfb"],["/categories/1-3-Ajax/index.html","0cd9d7de3f82ca50dcb8914f3841c0cc"],["/categories/1-4-框架/index.html","a29ab502ac2a289f5c1010040868392e"],["/categories/1-4-框架/page/2/index.html","443b8b4fff33071c5291ff78f6a8703f"],["/categories/1-4-框架/page/3/index.html","424732e2cc50fda6d45c58676bc1b59b"],["/categories/2-1-组件库/index.html","5f5cbdd052a9523edeb3225dd7331953"],["/categories/2-2-基建/index.html","ccfcc9c4e197c5155694cddd0214d359"],["/categories/2-3-实现Tricks/index.html","ec6ca48def343da51dcaa3f762080494"],["/categories/2-4-项目/index.html","f0a5808df359e468291d9631fe96acc8"],["/categories/2-4-项目/page/2/index.html","82e7e2b1ae33a8120ba640941d7dfd27"],["/categories/3-1-记录/index.html","7db3ab76e24b346bb38396ef25e087e5"],["/categories/3-2-浏览器/index.html","2c490761ab66c3edfc38de67d16e78f4"],["/categories/3-2-浏览器/page/2/index.html","cd8a5c7855308c1db8791da6714f7f17"],["/categories/3-3-基础/index.html","d51f93d13295485d60e2d0ccf4337437"],["/categories/3-3-基础/page/2/index.html","d6cc958914e017b229723960175e4ee9"],["/categories/3-4-Tool-Shell/index.html","933a80f7e6015d845bc0f1fb22c12272"],["/categories/index.html","076b6150ff10485f506866823c00a5d4"],["/charts/index.html","622db73434a332df19a816eca8d67eff"],["/comments/index.html","0b3e2030eed7d12611050688f01acbab"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","243b2ac14b65d388beac9b5c891d7ea0"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","56ffe550a6c453b1ca71e3b4c6dd95e1"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","2ca0747338277f84d24d23ea85182428"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","84a7dbcc6fc94d42ad2fcce4099ac0fa"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","51818381fcf20e0325e0d665026bd2d7"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","8fa54e68e0cbc815a68ee4ea86bc42a7"],["/music/index.html","57d248a2f33fedc9c9564dadd769fad9"],["/page/10/index.html","f8414492f8e4cf838405ca4a87a393bd"],["/page/2/index.html","5eff8dc8f84babede828185563ca6f81"],["/page/3/index.html","930380ccfead81f9d3dce886161937a0"],["/page/4/index.html","1d94ccbdcea55e4de08bf1d7a19c5cf4"],["/page/5/index.html","2cc35c991e2cc3dc1b2d7febcca1d04b"],["/page/6/index.html","275b9f47488f573e64d79aba987d0fed"],["/page/7/index.html","529ee1880e944db629207e8118627996"],["/page/8/index.html","c3c6d0d25b018cace588bf1aa6e05ec3"],["/page/9/index.html","be34366b141ae108dae984988975cb74"],["/posts/1003179605.html","a697f9fe1bdf898cb7dc5cc80f7265b6"],["/posts/1078088869.html","d9b7d4ded57599afd21cb4126dd201cd"],["/posts/1168384896.html","8702be3dddc93db196f50226234864a5"],["/posts/1174755164.html","93ae22c3a33283aa1eb5a1ed7123819f"],["/posts/1207877865.html","8aa4e721c73c0adf7b0e090372664f97"],["/posts/1322992885.html","932d664d75bb341c6da1c27d55c3f864"],["/posts/1405183845.html","d16e1551a5870eeab93d2095bef079c3"],["/posts/1460941642.html","51f5959244fbae9433e2c864e550d0fc"],["/posts/159855229.html","4012c8f6aa61e22d558f5aa753fbc1c5"],["/posts/162997961.html","dd2722c77185585688399f8ba16a6490"],["/posts/1634682499.html","244be8871e7bc07d2f6b285ffbdcb3ff"],["/posts/1720673220.html","ff426dc5354808a5b444c35db71b36a4"],["/posts/1794184575.html","cade2d11365830b6861c0ead0e5175af"],["/posts/179783341.html","577c0eae2cb34259ca09cf97f784703b"],["/posts/2007769797.html","f3f1d1d8b23de63c88ac8241d3b8127f"],["/posts/2062301197.html","ac766e9d1cd706a8df2b6310bf3c08cc"],["/posts/2071449193.html","734fc5f7166f4564c93d396fd7453260"],["/posts/2075292597.html","f58af79c0e19321afab824650584fc3e"],["/posts/2124882507.html","b7a031de30f9c00abc5598ab3e666ec0"],["/posts/2131155013.html","79a7559072147d9812971d3c6e959916"],["/posts/2169143571.html","b3c25de9f6ccbd586ade1f7c0e88c287"],["/posts/219349139.html","39aebe31bd376034b655bc896cb2c5ec"],["/posts/2217063026.html","f1e63864e251fc2dcc882c0fa41b25e8"],["/posts/2218506745.html","d28deba17044068418634fa73b6c3c63"],["/posts/2292260110.html","7677cecd018d65f57f528acefdc6af2e"],["/posts/229643181.html","21c3fe7879d3f49dc4da5c9cb0761723"],["/posts/235914813.html","b7789f94cf0edc3f6820fe8f909996b7"],["/posts/2387908466.html","9677573e3a24b2e111d0e3da4c8697ea"],["/posts/2580568501.html","f41eedcec7665a7006b679d9b0fda371"],["/posts/2621268747.html","5a7d241a3225b4fbd7faa7db61e965fa"],["/posts/265724518.html","55182389072ec684a88efebdc9008ccf"],["/posts/2716721158.html","48e2753fadc6be0770c533d3de3cedce"],["/posts/2747544176.html","148e508eabf831ea71967c8851277e73"],["/posts/2799443321.html","9ebb564c2fa31c1c8b42b8acdbf289b4"],["/posts/2803057116.html","08644914e96e1852651eaa251b97bf85"],["/posts/2818550155.html","51998f39bbe538af2a0a11d66c6382f5"],["/posts/282252185.html","a02e1206e3711c534cddc81437694f2b"],["/posts/2959925095.html","5d6148ed1dab2c689a01c122e368949e"],["/posts/2971665882.html","d75aaf1f2a6cadcfafeb8178a975717c"],["/posts/3067404590.html","3429b751946e0ca0c78ab7209078e423"],["/posts/310999178.html","e5693b18192ee16526bfb8b5291d2270"],["/posts/3120977046.html","ddc81d3b42e5c139cfa7c30edd8a0ef2"],["/posts/3253065341.html","269040e9f5de8ee209f93b87eb499d0e"],["/posts/3253305718.html","b1c9de64af1e3160bc96fa369f03e8d8"],["/posts/3384747987.html","9bafb3219fee8d2242a3501b72247da8"],["/posts/349024060.html","8859c1031a2c8e22c0e7037975af92db"],["/posts/3598970227.html","664d4929e5987cd3561613bdeab0d416"],["/posts/3611094049.html","8f0c91b1d38f49aea0a0e6560ebad1df"],["/posts/3631469724.html","4ee47bc6cb42cfd130564b841055d74b"],["/posts/3691095479.html","383e4850987ee826c6f1ff8293aaa9e4"],["/posts/372934289.html","ce91c800499cdaa70df6e02826013c8a"],["/posts/3737997078.html","2b52f82282c6b4c58f2b17ce781999dc"],["/posts/3783644122.html","c808732915003ba2d973d8c9b1bf38fa"],["/posts/3906205819.html","a92dfe4c1fd87323d1c072302d7cff2d"],["/posts/3912543564.html","540a55df208cbde6bcda83775d25ec27"],["/posts/3998253138.html","c7c3fb8d097254b992de39ff315a7fd1"],["/posts/4075683688.html","6b03b894003959383f880bbec088df6a"],["/posts/4184919567.html","fb507c202cab5d08089d63b2a41982f9"],["/posts/428414458.html","33918360ec1758adfb753feefd3f13aa"],["/posts/4285860800.html","b67fc691ab24a296fdf02b4989fff061"],["/posts/50508479.html","d32a4be36943ed672c22321527e25f5e"],["/posts/511687579.html","cad4d13e3956c834fd60967353e9aeb1"],["/posts/611441247.html","9dceaf366da04189b42782b81d5a7659"],["/posts/619926249.html","6838cc8614ea0c900e21fb428da3c1af"],["/posts/656350506.html","fbdd35d89a24dd4408265dfb39e49e2c"],["/posts/680535600.html","b172e4187200a26d35536a2f5bfa2b06"],["/posts/684607466.html","247ead13c90b49d78bdbbd28c263e421"],["/posts/686254810.html","79bf92eb1fbaabe8ef56e1779e6d0212"],["/posts/710205459.html","b7c09ecbcef20cd5531a60b914651590"],["/posts/775935900.html","2eed95a612c26f59c853fc2dfa191ce4"],["/posts/854292428.html","3212d619b94ffc732222682866097da7"],["/posts/855735627.html","5df2b8b289a28278a646a6bca65c48d5"],["/posts/867212230.html","442d7fa5693588cf9d9832d5ab2325d7"],["/posts/926905116.html","eed37aab64d6e069a1263b2ac97e6ea8"],["/posts/CSR_SSR_ISR.html","e842ea10910554d5ffb87df10e8d3259"],["/posts/CSStricks-1.html","19c7377849366b341dbb6c241ac9b800"],["/posts/CSStricks-2.html","c768d59524c5758164d2a3132d3af359"],["/posts/ES6.html","e5a5b02884d3f09dfdb5a128d9c7b835"],["/posts/HTTPS.html","2ad7c38b6339045fe81b8b742b3bcc4c"],["/posts/React's Component.html","ff690c9b62fcb78b3942f7690abe0ed6"],["/posts/React's key Concept-1.html","35f07b9580b7df625d7db7546e8b4320"],["/posts/React's key Concept-2.html","b7889f42e3fff30cd8df8313c6538701"],["/posts/ReactHooks.html","3eba98928ba26ef10b8a1d33c32b62ce"],["/posts/React_lifecycle.html","2f51ebde4c70b41161d035ecf77caae4"],["/posts/URL_URI.html","80e4b1a936d2f1896aef17b67c6dc79b"],["/posts/animation.html","7607363302be9dcd6b4be0409e3d39e9"],["/posts/antd-data-show.html","0c5c2558cd03c7cf7f39da8bbb5bd278"],["/posts/basic_construct_1.html","5cbe7f8f81ec144c04d20bb893b23e9d"],["/posts/basic_construct_2.html","e3845d24a57e4aba41908206da52cf1a"],["/posts/better_performance.html","c6641676bac54dab0274b5b7977db726"],["/posts/blogChange1.html","d28ff9800347394c3a0bbdb8c2496a08"],["/posts/blogChange2.html","46e5da491f97f1298608d5deaa15ddf6"],["/posts/cat.html","0bb2193d52cbaec727c1af8ece0c57da"],["/posts/cookie&&session.html","8d7c38013fbffb17fa123a293803161f"],["/posts/feature-tricks1.html","bd9fd1e4f0c73004bb566df8436e4128"],["/posts/file-read.html","288b58b6f0f3dda4a4af7e2521183969"],["/posts/gap-property.html","9829ff288110f86872d427cd9490fb45"],["/posts/hideElement.html","320b0af6e9c4121344d27091c63f4c25"],["/posts/http-cache.html","90f7deea2f299f22f10acf5b90a2404f"],["/posts/http_cache.html","1e86873b66ba465336ab990ace53268d"],["/posts/privateGame.html","53fc7131251a8dd12eb2725157b2a499"],["/posts/prototype.html","ca8e2c5ecff7a5fad156529565fe34b2"],["/posts/react_components.html","73479a3b5c2cb22def3fe016853d808a"],["/posts/react_vue_data.html","16f09bc1cd2d8f0c6a1089e56c87beb5"],["/posts/requestAnimationFrame_1.html","5fd1f36f4b7852bfc697ed1155cfc781"],["/posts/scroll.html","62a3af754937f160a5c0fbfc0006d15b"],["/posts/toolsTest.html","78ca7d1f88206ee83280594c19a5f2b5"],["/posts/vue_lifeCycle.html","9923a1357b51356ccab40782f0d5c886"],["/posts/what's Hook.html","822b8079df79dbe444f3be2ac1e66274"],["/posts/why Hook.html","595268b2ca375de67cba724d728ebc0c"],["/posts/前端模块化.html","a53a939d47e8b8c6eb49b1c386b82dd9"],["/posts/路由.html","f381cc4b578c632e2547dfc22dfb5509"],["/sw-register.js","a9e4a724110a80e89b73b6b52279463f"],["/tags/BFC/index.html","039e4b68c36330701b4ab4674bc3006d"],["/tags/BOM/index.html","8e056d5f5dba5a9d99d229e33a01689b"],["/tags/CDN/index.html","7b6222cfd2e61ddbe56fbf700f2da210"],["/tags/CSS-in-JS/index.html","c25c7b43c7fb2bd412aac419dfabf1a7"],["/tags/CSS/index.html","9bc4f7562960cd2b99c7e790fd76475d"],["/tags/CSS动画/index.html","ce86eba58c52ad9d879c37c6dcd74f0e"],["/tags/CSS属性/index.html","d9e38adc42f4252d6427001e91638d2a"],["/tags/CommonJS/index.html","2c7d8d830f8bc41c36ca5da48fa2a5bd"],["/tags/DOM/index.html","7d2c3def0caa98eb54c843c27238ed49"],["/tags/ESModule/index.html","05e2fc68b8d766d05058309325176fd1"],["/tags/EventLoop/index.html","de9ba08c4306b38791d74e527ae51dae"],["/tags/Git/index.html","9373ca5cb714f91b466a2e85a3ebda32"],["/tags/Github/index.html","4706dd3c648fb5d0c974fd474cf05079"],["/tags/HTTP/index.html","5cf24b8981680429d46d9232aab71b82"],["/tags/HTTPS/index.html","8ed88e8edc322e4ed6710f276ff6d3ec"],["/tags/Hook/index.html","058306cecb91f581a5906b5c45d26982"],["/tags/Hooks/index.html","e696f702999a80fcce120a90ec4eaf16"],["/tags/IFC/index.html","2b85d55969c188444dc8c31a9bbd8314"],["/tags/JS/index.html","59ad12074aaa29fe97faf16923aeb6f2"],["/tags/JS/page/2/index.html","af16332b74270e5728ea12ee59a970f4"],["/tags/JS/page/3/index.html","3a3ea691f9cb27c85ce749cfe7040fe0"],["/tags/JS/page/4/index.html","a86ff11d96ea451e1a1d5dece4f236bd"],["/tags/Node、Antd/index.html","641e12f5c620d585955e351edfb583fc"],["/tags/Node、MySQL2/index.html","f81956b89a7d419ade7e44af5c5b1309"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","8fb65e26cf9ae136852b3e32d4d7fa6e"],["/tags/Promise/index.html","9727d8e5365b1d3099edce078db1af22"],["/tags/Promsie、Async、await/index.html","b7671999d74b4775d79171b7005bba55"],["/tags/React文档/index.html","218f048df66084f55985a9cddc779d89"],["/tags/TCP/index.html","3f2245770a80bf6f3d370244f8d39425"],["/tags/Tools-Shell/index.html","0dd4cf3b84cc622a5da68379d9a9ebce"],["/tags/UDP/index.html","1819900181eff4df658edd4197dcb851"],["/tags/URL、URI/index.html","8176e2b1abcb0d60e84cdd2496927902"],["/tags/Vue/index.html","3a9a949acfe706a2c60d7dc9897a8c09"],["/tags/ajax/index.html","d7bb6f15d52919269150e784b644ae0d"],["/tags/async/index.html","bb3a8ef290691fa36695db02039c7df1"],["/tags/axios/index.html","7936bd8d18944a5e4909e127aeb819ed"],["/tags/codeReview/index.html","f5912f852aaacd02ee4e19fa1ede0b6a"],["/tags/cssModule/index.html","49541bd3bf94371c82c8a57421b3f270"],["/tags/defer/index.html","4d09133782589e4b00a4fe2bf836f320"],["/tags/flex/index.html","c434f289d1869cd21dcf650ee4837a82"],["/tags/index.html","8d9c954e0bea90e0dfaf8a5c4ca81053"],["/tags/overflow、滚动/index.html","caec73c91a29e574a39564275cadac6e"],["/tags/position/index.html","7e8e4ae687a18e1e8d748764eac5deb5"],["/tags/requestAnimationFrame/index.html","e892d8abe736062cd5bf8814d3ba088a"],["/tags/webpack/index.html","5c06e0868b830d9b36022b5de04c5bd5"],["/tags/webpack插件/index.html","d5f17db5b8ccb41a7b75ab1514ffdf44"],["/tags/webp图片/index.html","97a1e477f8b52fee3fe1fbe53e31a1d0"],["/tags/二叉树遍历/index.html","4d4a3a82a573b5a3304f513c92d16ee3"],["/tags/优化/index.html","c2e7b086a2a0c764ac754630eee69836"],["/tags/函数组件/index.html","31696fc098cd3063e547d7057d552011"],["/tags/前端基建/index.html","dcac414b2fa291052f50f681dbb5c8ec"],["/tags/功能实现的tricks/index.html","b7e3c8f9fcff0d797f3b9e2b63576148"],["/tags/去重/index.html","cd5a974739724495dc3b069653253f2a"],["/tags/双向绑定/index.html","4459e874ba99f25f88cfd38191c000d3"],["/tags/响应式更新/index.html","3fc36e4939b4697a42797fbf10b8eff3"],["/tags/安全/index.html","338c274c71f0c6086a8e5053caf4ecc5"],["/tags/宏任务/index.html","8ee42655322b1fa31d7223280ea45ea6"],["/tags/帧动画/index.html","ec48c99e2ae26d63a9fa1918fd4e5815"],["/tags/微任务/index.html","72fcf3e2f97b148aedd24c600607bf0b"],["/tags/性能优化/index.html","510a1e2ad0b3f15b0767b48f9f9368ec"],["/tags/懒加载/index.html","7444d8856a7f47eb2419b53e726d479b"],["/tags/扁平化/index.html","383fd021a6372ced553e0cd264d2506e"],["/tags/排序算法/index.html","db543bbc24b90821a72b22c8546ff7e7"],["/tags/数据流管理/index.html","70c762d779da8fc4b57b8cd4ffaefc01"],["/tags/数组API/index.html","286723c6734395916b87d3973fb93d43"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","ae0d8aa0e627366ef37d368ec0ae3d85"],["/tags/文件上传/index.html","7d9a418fc95b4bd4900d7343b716f66a"],["/tags/样式污染/index.html","0c97fd2de585609333adf9271d4170a7"],["/tags/模块化/index.html","e85822d827c2db78617549884c691917"],["/tags/浮动/index.html","6c6d50101eb82addcc8deec7340fd7d8"],["/tags/渲染解析/index.html","54d61e3bc7748bee64437348154ff19e"],["/tags/生命周期/index.html","9c41e2a0ae9bad7db27ff711e1ed498c"],["/tags/盒模型/index.html","b030e8f6d872fba6f09bf32fe3865471"],["/tags/移动端适配/index.html","e1a0034cba4e443ee0a68fca1e97d034"],["/tags/类组件/index.html","ea7240a7a3542fdbfac37cf8d2150db5"],["/tags/组件库-antd/index.html","75979c2a26b1685bea762e310c7a5d17"],["/tags/组件通信/index.html","0da037ec829284fe695e8066865af3ea"],["/tags/编译执行/index.html","67abce09f82b4b9ca98d913857bae028"],["/tags/网络请求/index.html","f0ac31a754496281fa036009128ab560"],["/tags/虚拟DOM/index.html","ae3083097c1c9fdb660ab2034403667a"],["/tags/表单提交/index.html","645db23fc7f28bafab31942952dd02b8"],["/tags/计算机课程/index.html","f2be2c45b13f0a28261637376d5305fc"],["/tags/计网/index.html","bcc1ac133c01bcee9d3addc92514a208"],["/tags/跨域/index.html","17396e2453c170cf7955f47bbb5cf771"],["/tags/跨域解决方案/index.html","b9439582e6777ed21c6b9e089a0c3da0"],["/tags/跨域问题/index.html","9864bfc1723c4bd1d8a3669abd369710"],["/tags/路由管理/index.html","4a643543fd5b5ecef729b84dde6d96a2"],["/tags/进程线程/index.html","cb69cbcf3e0069d8d8a7c33fe82db6ce"],["/tags/选择器/index.html","8a8a5e4def9cf4cf8ae155fbfa2c378b"],["/tags/选择器优先级/index.html","d1db06d74442a546a14f1532f537f318"],["/tags/隐藏元素/index.html","59dbf51a18a2dfd5be22d7af329bc887"],["/tags/页面解析渲染/index.html","11b88560a009bbe022884610542ffb54"],["/tags/预加载/index.html","4a78c17640913ecbee6774def61bcace"],["/tags/驼峰命名转换/index.html","6ebf3758097a112816984bed74415c1b"],["/tags/高度塌陷/index.html","f1d0215b479f8b13df82b7b4e0c229a4"]];
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
