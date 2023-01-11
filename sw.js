/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","af3ddf192bc41efc3f324bc95759baac"],["/archives/2021/12/index.html","af78f2f66b428bf22114050fc4803db9"],["/archives/2021/12/page/10/index.html","709e30aaa736a0d8f5af863757540a30"],["/archives/2021/12/page/11/index.html","c7890a1194c0ebf13b3c10aedebcf28a"],["/archives/2021/12/page/12/index.html","82b59d5b305f8b2e7e8ad9df2325f76c"],["/archives/2021/12/page/13/index.html","4df37859a50354e82b37cba26964be35"],["/archives/2021/12/page/14/index.html","b9697fbc9dcf510ae1f7929438387487"],["/archives/2021/12/page/2/index.html","083869e7e3fadc499e2074294dca9182"],["/archives/2021/12/page/3/index.html","82dff7b18905ed2bbf0d6cca32ea4eb6"],["/archives/2021/12/page/4/index.html","4695c3749f9ad5a9d625a285d1836cf9"],["/archives/2021/12/page/5/index.html","e97dbbcea6cb8b71ca86994e7f3ef146"],["/archives/2021/12/page/6/index.html","914bb60ca1450df2c01b1aab4f2c528b"],["/archives/2021/12/page/7/index.html","62dbc8e92c750106c4112f2b7eaaaa29"],["/archives/2021/12/page/8/index.html","067d7d247af13c7ee81929dd8882e7ad"],["/archives/2021/12/page/9/index.html","02c5441cebb4148c9e43ecb9e6760a66"],["/archives/2021/index.html","725f5ac488689d18d7bbc607134d3279"],["/archives/2021/page/10/index.html","a6e594fc834c200ddf1d9740dfed6395"],["/archives/2021/page/11/index.html","1f2c75d3d868beaae1e805c6f372f8ed"],["/archives/2021/page/12/index.html","a78e80212cfbd040293a19c61a7f5498"],["/archives/2021/page/13/index.html","7012e5b7d7942737ed7374266a36d7b1"],["/archives/2021/page/14/index.html","866d185b1c9c7f904316aeb2c0b9f89f"],["/archives/2021/page/2/index.html","294628c540e72b9f2c114bac8f326ecf"],["/archives/2021/page/3/index.html","e0c12b896900fa391ef0672bfdb1b060"],["/archives/2021/page/4/index.html","0c98c27603f87406b5cd8667253fc182"],["/archives/2021/page/5/index.html","3ba9391db5e9ffbc78d357031e35e2da"],["/archives/2021/page/6/index.html","3b9559c15f18230d7fea7e4f6cbe41d2"],["/archives/2021/page/7/index.html","a090b1bd4529461477e33e0a363a842c"],["/archives/2021/page/8/index.html","beeabe595a6648781268a4e8ee44fa68"],["/archives/2021/page/9/index.html","cd6fad617bf857714969d45c2a895ab1"],["/archives/2022/01/index.html","02a91c7fe8377aded4512427ea6319c3"],["/archives/2022/03/index.html","108dc3f862199691d8dad9c231ea45cc"],["/archives/2022/03/page/2/index.html","c682e7fda32a37141a68a3d46e58bfaf"],["/archives/2022/04/index.html","d3a6efc768c7bde98d475c0340d7c645"],["/archives/2022/04/page/2/index.html","673ea2d8e4c43401da6fb38c461fa138"],["/archives/2022/05/index.html","d6a39db063fff9098eade60e2b7b33f4"],["/archives/2022/06/index.html","25f18177d0e2fd1a6d978e06e8a0052a"],["/archives/2022/index.html","f05ae038add0cdf3f5bb4680d9784f4a"],["/archives/2022/page/2/index.html","55d710fde1d78fd425a1d4814d92ae23"],["/archives/2022/page/3/index.html","6dbc806565e251d4859486fa54d8a54e"],["/archives/2022/page/4/index.html","97a3279f50101ba2e6822fda99bf6ec0"],["/archives/2022/page/5/index.html","f19b2152449c0dc4f527629149976e67"],["/archives/2022/page/6/index.html","5f2882c505a1fcde4ca9b476552fb5c9"],["/archives/2222/03/index.html","d37c810a5a66ca06d4ccd0330c15ce5b"],["/archives/2222/index.html","53556d1152d0d4775d4bd6f3d8fa8146"],["/archives/index.html","154e11cfe09f16b5503970d24c9c0a5e"],["/archives/page/10/index.html","2cda63a69de1a6e235baa727ffb17cf4"],["/archives/page/11/index.html","9737bd1f9f5b5f7a3fd8aeba84a95828"],["/archives/page/12/index.html","78d5fec74b826d267244259b5fc39b34"],["/archives/page/13/index.html","91242fd9e8208af4acbfb304961272ba"],["/archives/page/14/index.html","b09124410d7a3928bff119b24d63be2a"],["/archives/page/15/index.html","e8b42d6ec89d08f73ca8d49f17af675d"],["/archives/page/16/index.html","0de2124fcfe1583c310cbb591a529204"],["/archives/page/17/index.html","bb56e92015320957e10b33f01b806410"],["/archives/page/18/index.html","9962a59e194e2b30e47e1633e870d99e"],["/archives/page/19/index.html","d0999d5c52d2891d28b42c96c4f00e2b"],["/archives/page/2/index.html","33dce959d0b64a6c471952d83868edf0"],["/archives/page/3/index.html","e066858f8389d5db913c75305c5c02c9"],["/archives/page/4/index.html","0d2411bd105306e3ec290d5e50bbbac8"],["/archives/page/5/index.html","0cc30b6f1b26d33c3f694ebf8e0166fd"],["/archives/page/6/index.html","d17ff33d0ff7f89f943fac3fffc77b38"],["/archives/page/7/index.html","88e06e8f08b49ec3700736e4bb945542"],["/archives/page/8/index.html","235444597a448cf4ac4e40171d318f27"],["/archives/page/9/index.html","118e14c498ba3132b8c7a9ff7257340e"],["/books/index.html","820849910684dec3dd2b07a3990580a8"],["/categories/1-1-CSS/index.html","62a5ac7229ef068b950bcb2567aad5b7"],["/categories/1-1-CSS/page/2/index.html","df42d0370c290f6feb97bbd0efd05d52"],["/categories/1-1-CSS/page/3/index.html","5add2d2a1206b47bcf7f3bb5114e51e6"],["/categories/1-2-JS/index.html","d4bf482cdb7703bea253bb76f104eb04"],["/categories/1-2-JS/page/2/index.html","ca8df38497fdff3c1f55fefe348b896f"],["/categories/1-2-JS/page/3/index.html","add7d94e66c651bcf3158d8bd1a0b931"],["/categories/1-2-JS/page/4/index.html","90cd78e7c27a8731210fe6c425246fd0"],["/categories/1-2-JS/page/5/index.html","fb81d653ef9e0c4869660bd0ba4a933f"],["/categories/1-3-Ajax/index.html","c55836541f7cf78a82786ab8dd83e02b"],["/categories/1-4-框架/index.html","3ca75a0b2851e2614a19e50eac9a5be2"],["/categories/1-4-框架/page/2/index.html","510a9357c1cc840039c71ef85cefce15"],["/categories/1-4-框架/page/3/index.html","836a14a3f95470347a735c28649763cb"],["/categories/2-1-组件库/index.html","497adc64e9bfd0f3a81743e82f3c30c5"],["/categories/2-2-基建/index.html","8f1e2a976ccb8a685e148ffd75f6ec18"],["/categories/2-3-实现Tricks/index.html","cb79732ab53db67dc523f50c40354f15"],["/categories/2-4-项目/index.html","bcdb6c9d2274bf394ceb6075b4a27f62"],["/categories/2-4-项目/page/2/index.html","eda6248c9ec811c8ca97b146447b43c7"],["/categories/3-1-记录/index.html","7f30437f66dc0ff1cf1bd9ca7c7f84dd"],["/categories/3-2-浏览器/index.html","68c8db0dcf2cc78d226fc74bc391835c"],["/categories/3-2-浏览器/page/2/index.html","f35b11a5e0e09a84999524b2ccd1fc7e"],["/categories/3-3-基础/index.html","d34535e7ca29dd07ab39c1e64f567d0b"],["/categories/3-3-基础/page/2/index.html","c41d26fb8cdd2a26ee18f46b3c2c694d"],["/categories/3-4-Tool-Shell/index.html","47534b6b5f2b6c31f4a04a6798c4e5a9"],["/categories/index.html","cd2f8fdfea90347b28b6c1958500ba79"],["/charts/index.html","c617f1851a568207e69740a236c5756d"],["/comments/index.html","4cebd55f20853a7eddc25086e9a68a3a"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","243b2ac14b65d388beac9b5c891d7ea0"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e3963b705db7983ccdb23a943539dcb6"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","2ca0747338277f84d24d23ea85182428"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","b197017ef6a97a6d83330324166b97bf"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","37956fee02f4f67ae22cf73bd1f4a4db"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","e04d690a05bc91f9f281841685aba23e"],["/music/index.html","70522d1352acc474cf925b2743715a75"],["/page/10/index.html","4540ba8656be935aa906e9f940e284d3"],["/page/2/index.html","d551d2aab575e634edbeeac560ee0aec"],["/page/3/index.html","d714d3e823ece2335155e86caa086205"],["/page/4/index.html","ae6bb106884069a5dbb64f7b79da19f0"],["/page/5/index.html","9cccd0f174d4de4d7f3615507dcd6a85"],["/page/6/index.html","f0c3cb8e4fadf3cdd39ee7c9eec80b66"],["/page/7/index.html","418d0e1520f718d7920f5e872c04c88d"],["/page/8/index.html","4ef32b0b9c7872d2706c17c3f6642e3b"],["/page/9/index.html","54f9f5a310cd807fa795cf97da8c18dc"],["/posts/1003179605.html","bef69bfcf9d923c5ce41ec59fa2ff9de"],["/posts/1078088869.html","e01c75f4fe4bbc8f0fda45077c4e5a49"],["/posts/1168384896.html","c5c3e0029595ee1c4872c2e2ec400dee"],["/posts/1174755164.html","01e51e24591956bf1a9510a1b97ca98a"],["/posts/1207877865.html","d186d44d5bb0bd3fd0d1a1d70a66a2a6"],["/posts/1322992885.html","cabc47f55f9c411ab4fae3ee43560327"],["/posts/1405183845.html","d9cb91faea06a5931a161bd83ad2713b"],["/posts/1460941642.html","c5f2f5df7b55961526baf080ed01d4e6"],["/posts/159855229.html","c4498b29566ec7a60b7650eaee2e0095"],["/posts/162997961.html","7b42875a232c825b5742b09f512c9204"],["/posts/1634682499.html","0de40e0da8bf3cfc86cb8524fed66d9a"],["/posts/1720673220.html","4bed66dc8f7cb47e5851124ae2c8061b"],["/posts/1794184575.html","987fb953bc01954c1c33549f669bdcff"],["/posts/179783341.html","801c1ac3f707113ac5410298d16bc0d6"],["/posts/2007769797.html","1d48af1b9f460365a7d93a109a48da96"],["/posts/2062301197.html","5c35612e64152dcaf3ca9bad8eb388d0"],["/posts/2071449193.html","3a61c9f53957e8edec63230390226542"],["/posts/2075292597.html","ff0219307cb04e9f6c6edbc9a675a99b"],["/posts/2124882507.html","a44ef3d2e0eaf3bfa2501a079d24e42e"],["/posts/2131155013.html","a33c1fcffb67c0a8ccb0fa73bd42f77a"],["/posts/2169143571.html","19ae33236cb145697bb84d352db163cf"],["/posts/219349139.html","571046639cfd438c24f0b25c5f546024"],["/posts/2217063026.html","2abec820107f4cc35085b24742cc551e"],["/posts/2218506745.html","92350b08a4bada8736ca1bb84c06d06a"],["/posts/2292260110.html","46d586f0b31eb3b5daf3a30c4d77b66e"],["/posts/229643181.html","0d19d076983ea2eef076aa88e280d7c7"],["/posts/235914813.html","8f02a0c621f64e28f188b41f45f907cd"],["/posts/2387908466.html","42d2293c492f3e94778d174e6c96164f"],["/posts/2580568501.html","4c3484b37ae518aa92d9d324f5c3e48f"],["/posts/2621268747.html","64edfe78cb3b4afca6e5a3ed51902d60"],["/posts/265724518.html","5e5ab4744bf571b2fbf68dbd1c45f294"],["/posts/2716721158.html","130572b29b2ef538ed3d3415cc3be434"],["/posts/2747544176.html","f61fa45477115605158666b04b41d38c"],["/posts/2799443321.html","dc6ae231a164053a76062a4e6c06f94c"],["/posts/2803057116.html","1460ec64f62562e2dac6a237e2fc3032"],["/posts/2818550155.html","f90233796ebb5bdecb30834d6bf57867"],["/posts/282252185.html","6aedc99f4baa67b60a00efc9fa56af0c"],["/posts/2959925095.html","e71913f798bb4cf73be6d557c90965c7"],["/posts/2971665882.html","f645812eb6f739d9d1e9bfc439e69aee"],["/posts/3067404590.html","b3b703988bd2258466e426cd323c7592"],["/posts/310999178.html","933c152889db846d5d8c7d2f194e6138"],["/posts/3120977046.html","d98847bfea87a179df0a4dac8f96388f"],["/posts/3253065341.html","1d30d0a2844e49a546b6e2e25f0e1b40"],["/posts/3253305718.html","9db91417858784612afd28cc3554b7c1"],["/posts/3384747987.html","4a65ba4718ad115d6a85b4e5f76f88f5"],["/posts/349024060.html","0b796b6f97c9a75c3ad44e718cca0ca6"],["/posts/3598970227.html","404b28a2d40b63f916d2f3bab56bfcf7"],["/posts/3611094049.html","24c394383f252291e1344eb19bde7a8a"],["/posts/3631469724.html","2291230a125d1eac3baa59ff4d33a865"],["/posts/3691095479.html","06aa40bedb974f53a6f67766fdaf3847"],["/posts/372934289.html","353a4c9db67f48068c09096c3af0ab57"],["/posts/3737997078.html","4c274cb956010d497c10c976217496b1"],["/posts/3783644122.html","98b73c1595b1f99f74d8157b0f1cb9e8"],["/posts/3906205819.html","10e8f8f68a80c65e7690347edf1291fe"],["/posts/3912543564.html","a1b8aa13859dc80e194828dc22968c17"],["/posts/3998253138.html","77002a68e5d124adfee7cdfb75b7372f"],["/posts/4075683688.html","c2c09d621cf8ce4416df9d83de2eb378"],["/posts/4184919567.html","2f123179015c61c934ef844c603bb233"],["/posts/428414458.html","1dc67d3bc2f2ab534f2bcac1f0e318ad"],["/posts/4285860800.html","4096375581e5ba030e67dfe98a09021f"],["/posts/50508479.html","963381c9e49eb94bac34b0e9340feacc"],["/posts/511687579.html","9786b4366a8aeb818015c2b6277f7d9a"],["/posts/611441247.html","e192e60da68ad7da5ca2e571ef26c1e2"],["/posts/619926249.html","948cf9837af9d3bb5bfb962e18c0cb7c"],["/posts/656350506.html","5edecbc4c27655bef5ac4444e6bd9f38"],["/posts/680535600.html","dd572ab02b14ab8b302943dbe826102a"],["/posts/684607466.html","af9d2335762bc8fb4bd87681d9e66e6c"],["/posts/686254810.html","7ae2882014bf1427faf0e3089b1d7540"],["/posts/710205459.html","b9ee30fad4fcacc5338ef00aeae4da0d"],["/posts/775935900.html","cdeb60e38995b8b2443b93df15faf16e"],["/posts/854292428.html","a384787b0a4f36bad53e763db364959c"],["/posts/855735627.html","9dd918aa78f47342089ba733ea0f7795"],["/posts/867212230.html","683e6c66a2aa4556ee548c5f9d14d3cc"],["/posts/926905116.html","b6f33c5eac9810ca20fa68295ffb0980"],["/posts/CSR_SSR_ISR.html","ce03b85185c052aa72e1b1bc1b25df16"],["/posts/CSStricks-1.html","28b585d2e82b853e5bbfd99cb712f7ad"],["/posts/CSStricks-2.html","5e7482f24b92a095673a37271fa24296"],["/posts/ES6.html","2e9430fe59ad186d40b6168f43392492"],["/posts/HTTPS.html","953212ce36b3f07593e9378aad32e6c8"],["/posts/React's Component.html","ebe3d528e0abfe197f46968f1d832b3f"],["/posts/React's key Concept-1.html","88bfc205ef5214cd2e94fdcf2b696e2c"],["/posts/React's key Concept-2.html","46681589f497607ca95648edc022226d"],["/posts/ReactHooks.html","61255e696c3c2f9f4de8a90aaad28e1e"],["/posts/React_lifecycle.html","08eb124206dcce40624189e1a2b04e90"],["/posts/URL_URI.html","33b09b0261169a80123619b9a27b0b3f"],["/posts/animation.html","4693173af6469485091617b173374de2"],["/posts/antd-data-show.html","baa21ddd2bd87139eee2b8d2f4c52fc4"],["/posts/basic_construct_1.html","df32f96e42a46f7b00e21f4729f04414"],["/posts/basic_construct_2.html","bc4508c950f9beaf96eb54b7afb3dd16"],["/posts/better_performance.html","127b3719738dfdaddd36244072e14b99"],["/posts/blogChange1.html","256da7e6e616ecfa3016e8e9864921a0"],["/posts/blogChange2.html","11841113a271badde30d39f90ef29973"],["/posts/cat.html","2f320edc744b78f36447b835aa717ce7"],["/posts/cookie&&session.html","24e75368e133d4256a65c41ee0903a3c"],["/posts/feature-tricks1.html","d67da9dad37071137729ba8cd0bd888a"],["/posts/file-read.html","181a6dac941dbb002ffc8b9102d35243"],["/posts/gap-property.html","cb49b3e235ad56594a2d5e2a7753cf58"],["/posts/hideElement.html","ef579d6e278a46740fe0cae1e56cdc82"],["/posts/http-cache.html","992f5a5e6d23f78abb9e53242a694648"],["/posts/http_cache.html","35e65620bfb3aa97123562cfb0048fa7"],["/posts/privateGame.html","aafd2a20adf7b177cf4e7dd1c7cecf8f"],["/posts/prototype.html","6ef084952ecebcb02ce41950fcc7a82a"],["/posts/react_components.html","d5e2e494fe76280a70f1c91ca9cd00b9"],["/posts/react_vue_data.html","c6ecc53c1035eaf19025c9528babf2ce"],["/posts/requestAnimationFrame_1.html","492828eb831801c23285f3c6f828289c"],["/posts/scroll.html","b34e8b8d6f4cce78a94cab357ca961c6"],["/posts/toolsTest.html","998218223694d354ed5bb6587d9099d7"],["/posts/vue_lifeCycle.html","eabca75766b81afa84d1b774bab8159f"],["/posts/what's Hook.html","f4caf3b28a62c384a223a2f375c20f43"],["/posts/why Hook.html","b12a3511ff162fee8a2f91a812bc98bb"],["/posts/前端模块化.html","15e5bd0ad8e2ff7da4af7a68f278357b"],["/posts/路由.html","18f46eebec656f0cc8608560f0e818aa"],["/sw-register.js","1d7dee1810c61d0bb12b7c5a54c8ed71"],["/tags/BFC/index.html","54082056429d3542ed68aa94f41fa595"],["/tags/BOM/index.html","22f75a8d4235cdc7a3a0515370d8885f"],["/tags/CDN/index.html","b68689d0ac9a14f82b4c9bd57e9d49e8"],["/tags/CSS-in-JS/index.html","e6e4eecafb0a33689215bec3125c28c5"],["/tags/CSS/index.html","2fe7282f9d4ca43c3500501b2a8e1474"],["/tags/CSS动画/index.html","56bb090892ae4cc48ffbabca53af0ab1"],["/tags/CSS属性/index.html","97c93f4fdae476e9b232ca0ee343bf63"],["/tags/CommonJS/index.html","2834506c6885def51f7332a7755101b3"],["/tags/DOM/index.html","41e85c8a0bdd927cc406e939c8fa1704"],["/tags/ESModule/index.html","b8e74a222421b3396aaa8964650724c4"],["/tags/EventLoop/index.html","6fc69d1f53cce7a91d21adaa2d888b46"],["/tags/Git/index.html","b38e60d8b22500071099d427b41a9421"],["/tags/Github/index.html","5e99dae0c01423dc3241e0f433e0b17e"],["/tags/HTTP/index.html","0c804af95bc947a8235ad80f0f0b724a"],["/tags/HTTPS/index.html","d1390db8705647cff9e0d7a71d8251fa"],["/tags/Hook/index.html","479b07cec8d181275415772c4dda230d"],["/tags/Hooks/index.html","7fe40ff4ef824348558f8dee9bdf2f22"],["/tags/IFC/index.html","d5444908befd1468748d3422bfc32a12"],["/tags/JS/index.html","8e4b51a135a5cac9084909ddc6cb3aa0"],["/tags/JS/page/2/index.html","9b3cc54080ca0e98f2caf2ca1834350e"],["/tags/JS/page/3/index.html","09663d9ffc96f1981c346f849643995a"],["/tags/JS/page/4/index.html","3d36f23894c19796546790d5013e6e26"],["/tags/Node、Antd/index.html","60410490e7bc75cc02992e8b1eec0ebd"],["/tags/Node、MySQL2/index.html","6f4d003a166bd2451ea1e0d41033f027"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","64a59d4e64fcca87b3a0038df144399f"],["/tags/Promise/index.html","2b309cf6954f296a938c6f66991e36e6"],["/tags/Promsie、Async、await/index.html","e83cc08ea8ce6d1ff358c908b40de12c"],["/tags/React文档/index.html","d40449bedf3f02f20321a33e48fb1bf7"],["/tags/TCP/index.html","35a43ebf40b6a89351edcdb81753f690"],["/tags/Tools-Shell/index.html","680448e534074c41a015379d758e06bc"],["/tags/UDP/index.html","ba11a51aea313cb4a3622e51ac6c808d"],["/tags/URL、URI/index.html","c242d9ead5fb7a4e86d8f05dfcebd50e"],["/tags/Vue/index.html","ef1c3e84e36c4fb5a184b3d8fe9fe1b1"],["/tags/ajax/index.html","ef84f9aa5f1a9a377ad155cef24b3a2b"],["/tags/async/index.html","063d4d8ffc71fb4eda9078a3e26f3b5e"],["/tags/axios/index.html","3f1a6c8dd30de746bf2f6c5425dbebc8"],["/tags/codeReview/index.html","3a92098a1b15a8c8a900167733251c77"],["/tags/cssModule/index.html","d2cd478f7d46ee6526409701ff712ce7"],["/tags/defer/index.html","64eaa64182fa79ff5530a63a7d315e4f"],["/tags/flex/index.html","2859c10a7edebb9c2959d10897b843da"],["/tags/index.html","daba0299cdec7a3a3bf67b5b21989d00"],["/tags/overflow、滚动/index.html","4537417245b9b04b17496373d72542d0"],["/tags/position/index.html","ef2283d0f9744d0d5a59f0e3b03e627c"],["/tags/requestAnimationFrame/index.html","4a5b21b6b3ab7a3e51b93103151b7e9b"],["/tags/webpack/index.html","685b01f10da8dbdb536636365ed8636b"],["/tags/webpack插件/index.html","84b1f15f9fa7dff7fd49e3c9a9348c3f"],["/tags/webp图片/index.html","3d5dbb8c822fbcf6fe376c26b1ba9f32"],["/tags/二叉树遍历/index.html","99f2656e13ea15d91c6d5603eb773c65"],["/tags/优化/index.html","b5f0b3586c695712bfc3b2af23ab53e1"],["/tags/函数组件/index.html","5c416543c8ff352156e2e86c93b4ce34"],["/tags/前端基建/index.html","9d0b4f21b4f487752aae02a6345ff5f5"],["/tags/功能实现的tricks/index.html","a0dc859c90962470e2549040cac99aa9"],["/tags/去重/index.html","31eb2705c34e84cf14b125b308609189"],["/tags/双向绑定/index.html","c6d281d31192c56bdedbd83c94909871"],["/tags/响应式更新/index.html","d76a9cd9a7546909c184e75ef2e710f5"],["/tags/安全/index.html","e42d0f1eec8f7d98f090d870f452627b"],["/tags/宏任务/index.html","fee291b8e3174578b198e04d87912781"],["/tags/帧动画/index.html","1986a9b5eb5d63c89ecf600d4557c60e"],["/tags/微任务/index.html","f5b53abb27447cf12f33bfb6467d9d37"],["/tags/性能优化/index.html","1d1e6d324be97219071b20ab4e7edf7e"],["/tags/懒加载/index.html","e6019b1edd54e2db172d3f587331f624"],["/tags/扁平化/index.html","52b6d529a9d4af7aca4b7e810b90898d"],["/tags/排序算法/index.html","f12e75ee9d6d5d0da2df97c29d823af9"],["/tags/数据流管理/index.html","86fcfd39f11bde85fcba23c2c876ae55"],["/tags/数组API/index.html","6d4dcdb1e2bd464caa41194dc85469a1"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","28d2bde569215eb4eb07766e6009ead3"],["/tags/文件上传/index.html","f2837e0c801ab1f9997fda7707c18654"],["/tags/样式污染/index.html","40f73fc2575a34696a82455f83f0678e"],["/tags/模块化/index.html","ee2ea90f04f1ba264a90a75e91b3f705"],["/tags/浮动/index.html","26627c0cc15cc66afb16b243f42e5a9a"],["/tags/渲染解析/index.html","d50afe2017a64887c9c89c239d3eb4f0"],["/tags/生命周期/index.html","49b2fdf75735a2cc863f6f164274f79b"],["/tags/盒模型/index.html","a502d09dfddff027765f0fe44a1362aa"],["/tags/移动端适配/index.html","2666a3a16841879194aafd8e3cd77e6e"],["/tags/类组件/index.html","e8d7ca4df73f0eed7cabf37edc4b3aea"],["/tags/组件库-antd/index.html","a73406659afe0f2a6915320e34c2a4ac"],["/tags/组件通信/index.html","7e336b86c9db984f7ad4ac49f1b6f4a5"],["/tags/编译执行/index.html","81e41c970daee1874829da89e4138b25"],["/tags/网络请求/index.html","c4c53c3fb205278fcf6071fdefb72a4d"],["/tags/虚拟DOM/index.html","b1cbcfa65339a05fdc014e24e221c5e9"],["/tags/表单提交/index.html","11a209cd803395394f6e34b92e6e4fa3"],["/tags/计算机课程/index.html","8b1c87308de3c265b0f140d9b55b11e4"],["/tags/计网/index.html","ff77ae80a26714fcb09451c4d9e10309"],["/tags/跨域/index.html","f7302dd09106fff45756c525df8d7ec9"],["/tags/跨域解决方案/index.html","dd4755dbb22dcee4d468063bfc6d9400"],["/tags/跨域问题/index.html","022c650bfeeb248646cefd2d77238c70"],["/tags/路由管理/index.html","bade8a0610b2c4a4820afdfae377fe31"],["/tags/进程线程/index.html","a39ca4b560643ab05cf7984c70df4a63"],["/tags/选择器/index.html","26c1c54a8ad20e713e83715efd87ae06"],["/tags/选择器优先级/index.html","bcd73f6688c6cc29b1126d7f83a77058"],["/tags/隐藏元素/index.html","31f9e6aa9930593db02862d5f10e6c30"],["/tags/页面解析渲染/index.html","32dfc36efbac8703c648ee2cd10f7ed0"],["/tags/预加载/index.html","904dbf0528da937f8d293988ec936710"],["/tags/驼峰命名转换/index.html","bc3f5de80e1519eedfa60f62509090ea"],["/tags/高度塌陷/index.html","e58962d28870bdcfb2323a6abcb92658"]];
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
