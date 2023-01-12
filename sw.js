/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","890c34bfa5b639c9b70700caa243bcab"],["/archives/2021/12/index.html","667d6c85d84250c0ee3165ee6ae02203"],["/archives/2021/12/page/10/index.html","c2d44831f4456466ce967eddb073b451"],["/archives/2021/12/page/11/index.html","fc7cf9665f95bb9a2a524acd38e94f75"],["/archives/2021/12/page/12/index.html","c316117efbb339017a813e334a462c6c"],["/archives/2021/12/page/13/index.html","ecb5938468813ba73e88a216b5651970"],["/archives/2021/12/page/14/index.html","feacaf0f27bd149b83c72266e6c9683a"],["/archives/2021/12/page/2/index.html","4657f28280bd48cbd7b47610c8c20e9e"],["/archives/2021/12/page/3/index.html","0b1e76fec2a57023d3cd887ae8ab2812"],["/archives/2021/12/page/4/index.html","ab9ff39af8ac00f44d96aeaae2836e5d"],["/archives/2021/12/page/5/index.html","0e4f6703b0917143fd568399062d94e8"],["/archives/2021/12/page/6/index.html","afe6eaef3d6f7b91c864e9725e46d94a"],["/archives/2021/12/page/7/index.html","918076c5567f0f45b066b8c355c858e6"],["/archives/2021/12/page/8/index.html","d7f59ddd35ae55e16bae279be3375623"],["/archives/2021/12/page/9/index.html","f376e549b1a6683f389e42dc3cb1f5f5"],["/archives/2021/index.html","298ed20d490d5343b23445caabd62c4b"],["/archives/2021/page/10/index.html","ae3581bf2f3d866fe175811bb9f1112f"],["/archives/2021/page/11/index.html","0a9de79e96faa20eb857cd341dc11e9a"],["/archives/2021/page/12/index.html","83acc05c0e2d3cc3fc8fdbf6a51f2f00"],["/archives/2021/page/13/index.html","0648ac16fbf37689f248b2b6b352fc43"],["/archives/2021/page/14/index.html","e2c85d11841844d43cda0364e45dd41e"],["/archives/2021/page/2/index.html","9909e75679bfe2e66e1f577f7ff9d06d"],["/archives/2021/page/3/index.html","ec6576ceb03b8bfd59a8841a568443ef"],["/archives/2021/page/4/index.html","19a2e3d37d01dc09dc3d38395dfbffa1"],["/archives/2021/page/5/index.html","827fbe778848cce90803c3bdb01e0b9e"],["/archives/2021/page/6/index.html","ab3d400f43581b3951a60aaa83b28d3e"],["/archives/2021/page/7/index.html","9afdd8fc9bcac223a43d53fac22341ce"],["/archives/2021/page/8/index.html","dcafb33e65b2b5051799a4e688cd0027"],["/archives/2021/page/9/index.html","214ddcea4402fa5ead8affb429cd0a4d"],["/archives/2022/01/index.html","92734c1d1484597c13c8fa4307a847c8"],["/archives/2022/03/index.html","b4f4101906987cb23b250d610914334d"],["/archives/2022/03/page/2/index.html","5070888c52523fef38500a6473d9fbd6"],["/archives/2022/04/index.html","6ed326ee0a7b9274615566ed8b39523c"],["/archives/2022/04/page/2/index.html","22da163fd271dff0be24484eb7cf7672"],["/archives/2022/05/index.html","faadea04feddff6f13bc4e70f84e6734"],["/archives/2022/06/index.html","68d0e13eb8be1df01caefb930ff1f5d6"],["/archives/2022/index.html","aac5e2c3619bf1ae0a7b3d0e8a6707b9"],["/archives/2022/page/2/index.html","fd665135c19be14b5e7d0df4840c1b34"],["/archives/2022/page/3/index.html","3b586b73361bde70c23c141cb9802640"],["/archives/2022/page/4/index.html","ba2402fec0ad5ad1d888dedf937b96e4"],["/archives/2022/page/5/index.html","14c47dae26ad7413f5bd6607d461a1d0"],["/archives/2022/page/6/index.html","9c09e58ae1a3810fcf70a57f66d4b21f"],["/archives/2222/03/index.html","fc9f250fb575b937e981ba8916cd8b6e"],["/archives/2222/index.html","9ba6fb45c4a58e90f9c4424650ce4572"],["/archives/index.html","94a1c0b396c36dc929b853de33e2ef1f"],["/archives/page/10/index.html","f14795edc4d7d6a5d2383c15657d51e5"],["/archives/page/11/index.html","3dffbc365897c4614b95b3b519179247"],["/archives/page/12/index.html","17c184167533e069ecee05da771a061a"],["/archives/page/13/index.html","e47ca2563607516cdad1afa6a31c88a2"],["/archives/page/14/index.html","3be0b270b4d4cb5b283e22d5f91cc682"],["/archives/page/15/index.html","b613989a5b0997c464aa88f73325e709"],["/archives/page/16/index.html","c9422bb7eb08b15e24264c6c66c01d34"],["/archives/page/17/index.html","9988814b7dd6412b6c11991b11cfcd4a"],["/archives/page/18/index.html","85bc4c4d610dfec46234342cefcf1101"],["/archives/page/19/index.html","88f1eeac88c0ef27d31c22417292bee7"],["/archives/page/2/index.html","384fcd04c0f778d35013ce416b4826dd"],["/archives/page/3/index.html","b1991ded24115a192d7fec296eda2a9b"],["/archives/page/4/index.html","94f5253982b0240e60ddb1e0b2bb8253"],["/archives/page/5/index.html","bf0d08240651bb38f3e6405f0f73d467"],["/archives/page/6/index.html","bf0fef5cfcfc6bdbc0cee0fd5878bd65"],["/archives/page/7/index.html","a4e6d623d7fe2d0834221983a6b9f09f"],["/archives/page/8/index.html","fb35f14102c648122a2a343fcefe7941"],["/archives/page/9/index.html","96cc48ed01e7a84afebdc47d14e69eeb"],["/books/index.html","d10d9af538fa16afbc3178586699365e"],["/categories/1-1-CSS/index.html","a18183e63a206dd9251730682cff7d2e"],["/categories/1-1-CSS/page/2/index.html","8a433cf59a8a1e721c7fe47508850989"],["/categories/1-1-CSS/page/3/index.html","f1db7d74501365cd3f65066a7fc1d8a3"],["/categories/1-2-JS/index.html","06efcd07acb6c6887122bba28e782666"],["/categories/1-2-JS/page/2/index.html","36da3a5d82d18ad1f5055a6a99ace27e"],["/categories/1-2-JS/page/3/index.html","07fafbc1901ccf4fd59b1ed28bdeace7"],["/categories/1-2-JS/page/4/index.html","e4bad0303972f4c6c7ea9a7591064c92"],["/categories/1-2-JS/page/5/index.html","3c18352f1e06ccc81cfa68b094997754"],["/categories/1-3-Ajax/index.html","221723bac6837986348e85c2df26e856"],["/categories/1-4-框架/index.html","f79228b835b87c2ed5faef157a42eac9"],["/categories/1-4-框架/page/2/index.html","65cbe6070820767e45cc6d38f6afed80"],["/categories/1-4-框架/page/3/index.html","2901183c046437ed955f964469b21993"],["/categories/2-1-组件库/index.html","404d5e748413b31fa42a077800438ebb"],["/categories/2-2-基建/index.html","fa4cc55f4e607798e04b754d3df025a5"],["/categories/2-3-实现Tricks/index.html","0cbbe45c84d3d8b960ca86520a89644e"],["/categories/2-4-项目/index.html","e6a59b62a20edf238662856269c1b73b"],["/categories/2-4-项目/page/2/index.html","d382e27102b3e5cb16b00240c529cf59"],["/categories/3-1-记录/index.html","116807d56340bfeefa97abb4a886895f"],["/categories/3-2-浏览器/index.html","e57cdfc8cc2a5da36b2726eac009324a"],["/categories/3-2-浏览器/page/2/index.html","8c0d7a72b249dbc50d7cb9d11bf44659"],["/categories/3-3-基础/index.html","b8aba85890bb9b33901223c38906dee7"],["/categories/3-3-基础/page/2/index.html","803665be5cd6ce953abb9f8e1ac4489e"],["/categories/3-4-Tool-Shell/index.html","54ed0e893cd6a2f7ce0d68c238f523bc"],["/categories/index.html","98f31e1c00ea2826e9499d3ca794e549"],["/charts/index.html","9079f6347facff0fe4389887b64aecad"],["/comments/index.html","afdaea27f829386a990fa481c9b34b3d"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","243b2ac14b65d388beac9b5c891d7ea0"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","9d14bb4686699cfea8adbb01e7f671ad"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","2ca0747338277f84d24d23ea85182428"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","4144b79802fc10e2dd498adbe30574f9"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","51818381fcf20e0325e0d665026bd2d7"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","5c8e20cd5661eaf344b3152e982e4ca7"],["/music/index.html","8237d85780ec0ebbe0a91f5a5fff12ab"],["/page/10/index.html","736e81eb722d5afafeffa5d9041d5b0a"],["/page/2/index.html","06896011f0f98574f7d43dde859ed198"],["/page/3/index.html","b6ab1af71b49656d605abc7080d073ce"],["/page/4/index.html","56f770d03439a38b2480a298a8f06d96"],["/page/5/index.html","42b9fe0521219c9e6de3fc11ef9d2847"],["/page/6/index.html","f1b5b8c0522d6cacf34965f57460136f"],["/page/7/index.html","5adb03365cd3be3c438acc0dd8e0b575"],["/page/8/index.html","bb143943707b3037c8d04e13895f223c"],["/page/9/index.html","0338093d041cd078da146aa04ef21ebf"],["/posts/1003179605.html","a697f9fe1bdf898cb7dc5cc80f7265b6"],["/posts/1078088869.html","d9b7d4ded57599afd21cb4126dd201cd"],["/posts/1168384896.html","8702be3dddc93db196f50226234864a5"],["/posts/1174755164.html","93ae22c3a33283aa1eb5a1ed7123819f"],["/posts/1207877865.html","8aa4e721c73c0adf7b0e090372664f97"],["/posts/1322992885.html","932d664d75bb341c6da1c27d55c3f864"],["/posts/1405183845.html","d16e1551a5870eeab93d2095bef079c3"],["/posts/1460941642.html","51f5959244fbae9433e2c864e550d0fc"],["/posts/159855229.html","4012c8f6aa61e22d558f5aa753fbc1c5"],["/posts/162997961.html","dd2722c77185585688399f8ba16a6490"],["/posts/1634682499.html","244be8871e7bc07d2f6b285ffbdcb3ff"],["/posts/1720673220.html","ff426dc5354808a5b444c35db71b36a4"],["/posts/1794184575.html","cade2d11365830b6861c0ead0e5175af"],["/posts/179783341.html","577c0eae2cb34259ca09cf97f784703b"],["/posts/2007769797.html","f3f1d1d8b23de63c88ac8241d3b8127f"],["/posts/2062301197.html","ac766e9d1cd706a8df2b6310bf3c08cc"],["/posts/2071449193.html","734fc5f7166f4564c93d396fd7453260"],["/posts/2075292597.html","f58af79c0e19321afab824650584fc3e"],["/posts/2124882507.html","b7a031de30f9c00abc5598ab3e666ec0"],["/posts/2131155013.html","79a7559072147d9812971d3c6e959916"],["/posts/2169143571.html","b3c25de9f6ccbd586ade1f7c0e88c287"],["/posts/219349139.html","39aebe31bd376034b655bc896cb2c5ec"],["/posts/2217063026.html","f1e63864e251fc2dcc882c0fa41b25e8"],["/posts/2218506745.html","d28deba17044068418634fa73b6c3c63"],["/posts/2292260110.html","7677cecd018d65f57f528acefdc6af2e"],["/posts/229643181.html","21c3fe7879d3f49dc4da5c9cb0761723"],["/posts/235914813.html","b7789f94cf0edc3f6820fe8f909996b7"],["/posts/2387908466.html","9677573e3a24b2e111d0e3da4c8697ea"],["/posts/2580568501.html","f41eedcec7665a7006b679d9b0fda371"],["/posts/2621268747.html","5a7d241a3225b4fbd7faa7db61e965fa"],["/posts/265724518.html","55182389072ec684a88efebdc9008ccf"],["/posts/2716721158.html","48e2753fadc6be0770c533d3de3cedce"],["/posts/2747544176.html","148e508eabf831ea71967c8851277e73"],["/posts/2799443321.html","9ebb564c2fa31c1c8b42b8acdbf289b4"],["/posts/2803057116.html","08644914e96e1852651eaa251b97bf85"],["/posts/2818550155.html","51998f39bbe538af2a0a11d66c6382f5"],["/posts/282252185.html","a02e1206e3711c534cddc81437694f2b"],["/posts/2959925095.html","5d6148ed1dab2c689a01c122e368949e"],["/posts/2971665882.html","d75aaf1f2a6cadcfafeb8178a975717c"],["/posts/3067404590.html","3429b751946e0ca0c78ab7209078e423"],["/posts/310999178.html","e5693b18192ee16526bfb8b5291d2270"],["/posts/3120977046.html","ddc81d3b42e5c139cfa7c30edd8a0ef2"],["/posts/3253065341.html","269040e9f5de8ee209f93b87eb499d0e"],["/posts/3253305718.html","b1c9de64af1e3160bc96fa369f03e8d8"],["/posts/3384747987.html","9bafb3219fee8d2242a3501b72247da8"],["/posts/349024060.html","8859c1031a2c8e22c0e7037975af92db"],["/posts/3598970227.html","664d4929e5987cd3561613bdeab0d416"],["/posts/3611094049.html","8f0c91b1d38f49aea0a0e6560ebad1df"],["/posts/3631469724.html","4ee47bc6cb42cfd130564b841055d74b"],["/posts/3691095479.html","383e4850987ee826c6f1ff8293aaa9e4"],["/posts/372934289.html","ce91c800499cdaa70df6e02826013c8a"],["/posts/3737997078.html","2b52f82282c6b4c58f2b17ce781999dc"],["/posts/3783644122.html","c808732915003ba2d973d8c9b1bf38fa"],["/posts/3906205819.html","a92dfe4c1fd87323d1c072302d7cff2d"],["/posts/3912543564.html","540a55df208cbde6bcda83775d25ec27"],["/posts/3998253138.html","c7c3fb8d097254b992de39ff315a7fd1"],["/posts/4075683688.html","6b03b894003959383f880bbec088df6a"],["/posts/4184919567.html","fb507c202cab5d08089d63b2a41982f9"],["/posts/428414458.html","33918360ec1758adfb753feefd3f13aa"],["/posts/4285860800.html","b67fc691ab24a296fdf02b4989fff061"],["/posts/50508479.html","d32a4be36943ed672c22321527e25f5e"],["/posts/511687579.html","cad4d13e3956c834fd60967353e9aeb1"],["/posts/611441247.html","9dceaf366da04189b42782b81d5a7659"],["/posts/619926249.html","6838cc8614ea0c900e21fb428da3c1af"],["/posts/656350506.html","fbdd35d89a24dd4408265dfb39e49e2c"],["/posts/680535600.html","b172e4187200a26d35536a2f5bfa2b06"],["/posts/684607466.html","247ead13c90b49d78bdbbd28c263e421"],["/posts/686254810.html","79bf92eb1fbaabe8ef56e1779e6d0212"],["/posts/710205459.html","b7c09ecbcef20cd5531a60b914651590"],["/posts/775935900.html","2eed95a612c26f59c853fc2dfa191ce4"],["/posts/854292428.html","3212d619b94ffc732222682866097da7"],["/posts/855735627.html","5df2b8b289a28278a646a6bca65c48d5"],["/posts/867212230.html","442d7fa5693588cf9d9832d5ab2325d7"],["/posts/926905116.html","eed37aab64d6e069a1263b2ac97e6ea8"],["/posts/CSR_SSR_ISR.html","e842ea10910554d5ffb87df10e8d3259"],["/posts/CSStricks-1.html","19c7377849366b341dbb6c241ac9b800"],["/posts/CSStricks-2.html","c768d59524c5758164d2a3132d3af359"],["/posts/ES6.html","e5a5b02884d3f09dfdb5a128d9c7b835"],["/posts/HTTPS.html","2ad7c38b6339045fe81b8b742b3bcc4c"],["/posts/React's Component.html","ff690c9b62fcb78b3942f7690abe0ed6"],["/posts/React's key Concept-1.html","35f07b9580b7df625d7db7546e8b4320"],["/posts/React's key Concept-2.html","b7889f42e3fff30cd8df8313c6538701"],["/posts/ReactHooks.html","3eba98928ba26ef10b8a1d33c32b62ce"],["/posts/React_lifecycle.html","2f51ebde4c70b41161d035ecf77caae4"],["/posts/URL_URI.html","80e4b1a936d2f1896aef17b67c6dc79b"],["/posts/animation.html","7607363302be9dcd6b4be0409e3d39e9"],["/posts/antd-data-show.html","0c5c2558cd03c7cf7f39da8bbb5bd278"],["/posts/basic_construct_1.html","5cbe7f8f81ec144c04d20bb893b23e9d"],["/posts/basic_construct_2.html","e3845d24a57e4aba41908206da52cf1a"],["/posts/better_performance.html","c6641676bac54dab0274b5b7977db726"],["/posts/blogChange1.html","d28ff9800347394c3a0bbdb8c2496a08"],["/posts/blogChange2.html","46e5da491f97f1298608d5deaa15ddf6"],["/posts/cat.html","0bb2193d52cbaec727c1af8ece0c57da"],["/posts/cookie&&session.html","8d7c38013fbffb17fa123a293803161f"],["/posts/feature-tricks1.html","bd9fd1e4f0c73004bb566df8436e4128"],["/posts/file-read.html","288b58b6f0f3dda4a4af7e2521183969"],["/posts/gap-property.html","9829ff288110f86872d427cd9490fb45"],["/posts/hideElement.html","320b0af6e9c4121344d27091c63f4c25"],["/posts/http-cache.html","90f7deea2f299f22f10acf5b90a2404f"],["/posts/http_cache.html","1e86873b66ba465336ab990ace53268d"],["/posts/privateGame.html","53fc7131251a8dd12eb2725157b2a499"],["/posts/prototype.html","ca8e2c5ecff7a5fad156529565fe34b2"],["/posts/react_components.html","73479a3b5c2cb22def3fe016853d808a"],["/posts/react_vue_data.html","16f09bc1cd2d8f0c6a1089e56c87beb5"],["/posts/requestAnimationFrame_1.html","5fd1f36f4b7852bfc697ed1155cfc781"],["/posts/scroll.html","62a3af754937f160a5c0fbfc0006d15b"],["/posts/toolsTest.html","78ca7d1f88206ee83280594c19a5f2b5"],["/posts/vue_lifeCycle.html","9923a1357b51356ccab40782f0d5c886"],["/posts/what's Hook.html","822b8079df79dbe444f3be2ac1e66274"],["/posts/why Hook.html","595268b2ca375de67cba724d728ebc0c"],["/posts/前端模块化.html","a53a939d47e8b8c6eb49b1c386b82dd9"],["/posts/路由.html","f381cc4b578c632e2547dfc22dfb5509"],["/sw-register.js","b23b88c9ce158861f433f54f11c21b72"],["/tags/BFC/index.html","93484112037936d51eff8186b1d48fbf"],["/tags/BOM/index.html","1609eb2c28e4bcad2042103e600ab3e1"],["/tags/CDN/index.html","90ff5c595bcd4c7c0a3cd2e6f58aecb5"],["/tags/CSS-in-JS/index.html","417146b424f98686bef518e7cbaad0ad"],["/tags/CSS/index.html","bab86816a7605cd722ff5d89bb399b97"],["/tags/CSS动画/index.html","36d698bba929dd5285d7c60d70340fcf"],["/tags/CSS属性/index.html","e84e8f98219e80c0053a3ceffcbaf9e8"],["/tags/CommonJS/index.html","f67a3e81be7ae346c2b1e39116c580e3"],["/tags/DOM/index.html","544adfa8fc5b330bf790b078197fb158"],["/tags/ESModule/index.html","499ed61ff1bd660a4278040c73dd4c48"],["/tags/EventLoop/index.html","af4c4d08de8e6815259fe8f886138288"],["/tags/Git/index.html","fb496a3385cc601235a3bdb9d489954b"],["/tags/Github/index.html","542d877077faa1751314d988033ad506"],["/tags/HTTP/index.html","00ae8f8ed7b6b01c3c99ee408b7fbf8d"],["/tags/HTTPS/index.html","bb0fb7fa46c4cbab9b019a8b27dda269"],["/tags/Hook/index.html","9cd921f441be194500e103b0ec3e2eef"],["/tags/Hooks/index.html","84eb9e9bde99137036b3ba8fd306136e"],["/tags/IFC/index.html","c68b6761ef71ace5fd9e7b69dd92ce75"],["/tags/JS/index.html","536c9450802e8ebc7864b11a82515f06"],["/tags/JS/page/2/index.html","a31246c39cf87ecb971517deef6c8dbf"],["/tags/JS/page/3/index.html","7aab7cfb3d7cf92a65dc27bf682397e4"],["/tags/JS/page/4/index.html","8e13e561f42b316fd37a319bc9ee4f49"],["/tags/Node、Antd/index.html","dd2c2f951874bec3853a109dbd57b2a5"],["/tags/Node、MySQL2/index.html","4ed7b3e86a3825bd1f6f9b1543153b7d"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","e0a8cc73465fe68b2ec5149e246e430c"],["/tags/Promise/index.html","3bf57aeb0d7c7c3dd8b034350b9fb31a"],["/tags/Promsie、Async、await/index.html","cdb9dd466a3d8301bb133f6b7b68a873"],["/tags/React文档/index.html","b5a1371c8cd7adb150f1bb0a8ce3347f"],["/tags/TCP/index.html","736378ebedf984535242a7eda61720b4"],["/tags/Tools-Shell/index.html","a7c412c31ccab60bd05629837c0ff167"],["/tags/UDP/index.html","3b6c9600ee8f82ec8c955358fc9a6176"],["/tags/URL、URI/index.html","38b2a02c41c5676717a5ee52b3314035"],["/tags/Vue/index.html","ade041470b07eee0eb5a80c2ff63f5c6"],["/tags/ajax/index.html","2f18166a2fb537ec8519ce5f31c45622"],["/tags/async/index.html","228448f54756b546ef5636770bfd6756"],["/tags/axios/index.html","b432e85a6d20dcc57104a4a227512dd4"],["/tags/codeReview/index.html","4d6db8009e7a91ac4ad0c2cb56f64b4d"],["/tags/cssModule/index.html","234a7c1807957f7966dbc905ea4d7499"],["/tags/defer/index.html","b83cf563956bd50fbe5a4b7ba76746fc"],["/tags/flex/index.html","cd0c6464ebfb5f8f44adbe1da2feab68"],["/tags/index.html","77f0fb0bed72257ddddc4d32a5ac6d55"],["/tags/overflow、滚动/index.html","8b8b7a4d023bcff03b9951a68c60a099"],["/tags/position/index.html","e12359b4597b66f7cda8c6c93afb9c3d"],["/tags/requestAnimationFrame/index.html","28a869197a24c87a28a0aaadf1633425"],["/tags/webpack/index.html","5d1d5ea2ed014a9c23f341dafce99726"],["/tags/webpack插件/index.html","683a122454e9ce9dad61327bb0bd1529"],["/tags/webp图片/index.html","ff4a18fb9e711825c06eb7666a0236f2"],["/tags/二叉树遍历/index.html","25b053c3b10325fe6569d29312116762"],["/tags/优化/index.html","0265e571501f7630f9e88a76c7f5c32d"],["/tags/函数组件/index.html","93fd9c431756c891b03afd5b0492d48f"],["/tags/前端基建/index.html","09c6447b969aa6850baae1bd993e7b66"],["/tags/功能实现的tricks/index.html","eb39cd84cbfcd1da2b02c0890b408d38"],["/tags/去重/index.html","a4971be08632d81da3d93a2b265ff3af"],["/tags/双向绑定/index.html","a510d352e82dc50d4b9c234c8fdfe3e8"],["/tags/响应式更新/index.html","19276a4a2f1e29321a4f0b4938996f94"],["/tags/安全/index.html","f4f12b91ecb854ff7a4ca52cca07bbf5"],["/tags/宏任务/index.html","2a8a50ea8ae3ec40f9ab92c31bfc9eb0"],["/tags/帧动画/index.html","7895591ef818517b37b3c77090132899"],["/tags/微任务/index.html","2fe17614ee163e1e153933bb56099598"],["/tags/性能优化/index.html","872ced74af004bd8eaba1bde7cfafdf6"],["/tags/懒加载/index.html","5c5fd1024a1ada86b194a07ed184e308"],["/tags/扁平化/index.html","bc4ae8477270be83c15c0be2b22a7eea"],["/tags/排序算法/index.html","e4a25a2eb73711c2cdd08115d5fa6396"],["/tags/数据流管理/index.html","b2a46cd496c862d003e2e97a85581cd3"],["/tags/数组API/index.html","f570f55ebc8ee7ec1a239b7c0b8b01ea"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","e5dd27b9fd200685b0da100e103fbcbc"],["/tags/文件上传/index.html","50cae4d3cd8cea42a22b58cb9e84cb70"],["/tags/样式污染/index.html","c3dfc1156e3458b0b37833175cb134e4"],["/tags/模块化/index.html","eee11a7667ee0cc0278a2a31f963ffec"],["/tags/浮动/index.html","fedeb69a6ca00eb28652e43e6a22634a"],["/tags/渲染解析/index.html","02c63d9bae2d3b075950923f4d88676a"],["/tags/生命周期/index.html","d2e45e9f7f65dd61fc4ad9e0ec75b361"],["/tags/盒模型/index.html","3b98f45e7264e758a6f9c1e28be88c27"],["/tags/移动端适配/index.html","5e6d67dc05bb84656e972a2584e3b4b8"],["/tags/类组件/index.html","f6cce21690a9c001fbfe742588b70b73"],["/tags/组件库-antd/index.html","47e96eaa1e56ff8bffc4bdcc3af14e01"],["/tags/组件通信/index.html","7ca8ffefade5db971f29a0e238c5aad6"],["/tags/编译执行/index.html","1625daae8ab576ff9a405687829a688c"],["/tags/网络请求/index.html","3641469a0a1d24f7043f571b3d841486"],["/tags/虚拟DOM/index.html","77b96d675206b62e8911f0c543425cc7"],["/tags/表单提交/index.html","869fac2e8ca72729e00523333e9d79e0"],["/tags/计算机课程/index.html","b50dd533641c9035918eac92cd0ef17e"],["/tags/计网/index.html","a60f34a34eb417d227a3f0f3ed1c3577"],["/tags/跨域/index.html","fcd034f2903733fe246844e37a89cec7"],["/tags/跨域解决方案/index.html","344a449f2171c8bc59b5a1e2988e7dea"],["/tags/跨域问题/index.html","07bdd0a44391f45259b6974d825f5638"],["/tags/路由管理/index.html","f2bede98bb82215c8df7f14597ff2445"],["/tags/进程线程/index.html","46a039fd61caf232fea0270276de98ba"],["/tags/选择器/index.html","37c766692e23cdc8d8caa3be70dc1122"],["/tags/选择器优先级/index.html","e63840cc4857e80fe52b42314f7b7fd1"],["/tags/隐藏元素/index.html","71cdb1bee5ff7a2d84d66f7470a0a275"],["/tags/页面解析渲染/index.html","f89a0b403e1c043019b58a4676c8acc3"],["/tags/预加载/index.html","97abd8e9d057313601863569eb241384"],["/tags/驼峰命名转换/index.html","141cbc8464df3d90f8679e756aaf76b5"],["/tags/高度塌陷/index.html","50d751143be7522f138d0afae1442ce9"]];
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
