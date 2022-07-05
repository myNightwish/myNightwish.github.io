/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","5e6f483eb29618c004f9b6485e632d24"],["/archives/2021/12/index.html","e9ff3fde50aea6b4224ae068e76e665a"],["/archives/2021/12/page/10/index.html","8b51403e77cf00cc809f961ac583e5e5"],["/archives/2021/12/page/11/index.html","088e3256c8e20cd12aec4fa9f680c32d"],["/archives/2021/12/page/12/index.html","2d0c7970f795a7ba23169032685267eb"],["/archives/2021/12/page/13/index.html","ebd673c8f1c7a8d14fdb51d1209bb2f7"],["/archives/2021/12/page/14/index.html","41c1ab56bb7e32976e5c3468eb5080b0"],["/archives/2021/12/page/2/index.html","c0fab9d69cbfec6f6f4fe192274d0a70"],["/archives/2021/12/page/3/index.html","dcce45776b3c866f1a6271f6c921187e"],["/archives/2021/12/page/4/index.html","b9c616e14a2868e33bfd0fcfe39f9ee4"],["/archives/2021/12/page/5/index.html","220762a57c763126e2e4d3c213d6799e"],["/archives/2021/12/page/6/index.html","2e4259474fd04152891cf1d1e6573c3e"],["/archives/2021/12/page/7/index.html","486ef79b9ffa2fe593ebe239777eab09"],["/archives/2021/12/page/8/index.html","39d08a18b93acfc260796be766cafe48"],["/archives/2021/12/page/9/index.html","8c94d84806a1f85c13438d0f3f3a17d1"],["/archives/2021/index.html","37a51a8e0a3518cd76ae7646674047b1"],["/archives/2021/page/10/index.html","a437526d6b269c1bbd559c34c66e6cb3"],["/archives/2021/page/11/index.html","9937963958f2a93f79aeaf22f8bb9ce6"],["/archives/2021/page/12/index.html","00b317ca532d31a2f2fa5b29c13c95f2"],["/archives/2021/page/13/index.html","ae6c15eed79468bf00cab8bbb2784725"],["/archives/2021/page/14/index.html","7e1a98d67c2a17d7f43f3b9c0275f5f0"],["/archives/2021/page/2/index.html","ef2f57395caaf4dc2fb352257c2afa80"],["/archives/2021/page/3/index.html","689e4cf03377f61f38d207d1cfd9456b"],["/archives/2021/page/4/index.html","13062a2e1a9894426187a7c3d13ae62c"],["/archives/2021/page/5/index.html","3cc93160fa81e6ee611a16aa683f9cfa"],["/archives/2021/page/6/index.html","01a05063c78aa06fd8b94b08d1504967"],["/archives/2021/page/7/index.html","e01a42f15c284655d22ea911c2077c5e"],["/archives/2021/page/8/index.html","874ee1b1d75c0d44412a450454237a79"],["/archives/2021/page/9/index.html","19087023230107bd8198efa0bb7ab8ff"],["/archives/2022/01/index.html","8f5f1f33821ebfaab0e1870f168961d3"],["/archives/2022/03/index.html","cb3d7fef7b3198d44729144552c4a54e"],["/archives/2022/03/page/2/index.html","3d556a295c2ebd8c8757a03d013bda3b"],["/archives/2022/04/index.html","a1c51a66e9819f51b927db40b839312a"],["/archives/2022/04/page/2/index.html","f8534b69ae2e7a7584953b053667c258"],["/archives/2022/05/index.html","4fc8e14964fb6c0c527e10cf82138d75"],["/archives/2022/06/index.html","4c597ee1dca1fb194733cb78132d05d9"],["/archives/2022/index.html","721e03a52dd2b55e98dc18be5724cccf"],["/archives/2022/page/2/index.html","bdf632be329066d238b1d36e24a07d16"],["/archives/2022/page/3/index.html","5dae031710b2caa4c77e9854aea289b5"],["/archives/2022/page/4/index.html","51b4aefc7f2fede4315731706e7d5374"],["/archives/2022/page/5/index.html","13d2c2a49e37506c633c3667aa76afda"],["/archives/2022/page/6/index.html","981d7f9f1950fe2eb73a21c0ac4ead2b"],["/archives/2222/03/index.html","ebfa3e2660bdc82b874f0ecea4a6050a"],["/archives/2222/index.html","b219e24013a78e03b9b964c366440005"],["/archives/index.html","f8ec08b3c11e2dc40cd0b55700fab107"],["/archives/page/10/index.html","7e7326ff565a5840a5653391829168e4"],["/archives/page/11/index.html","82d6eb78529c2e9afb0c61a0d4831f44"],["/archives/page/12/index.html","bd3ed4b602bf229cd3e1de96dc34fd5b"],["/archives/page/13/index.html","f8a7ab66a0b73588bd61f245241b5c4c"],["/archives/page/14/index.html","e3dd1f9211780fdb2bab2516d22c1edc"],["/archives/page/15/index.html","27081f27b22f9f6e763d8d16ea995fe7"],["/archives/page/16/index.html","9e66943f6e9f6ca4e4260528c43da068"],["/archives/page/17/index.html","e430b5253e2f3fa881eb64e40c4218a4"],["/archives/page/18/index.html","c713941de8ec7b32464777ec64a55a5a"],["/archives/page/19/index.html","48891b762bc2cc1d3d58985303db9a50"],["/archives/page/2/index.html","3098ff2a33e22b0650070066fd5caafa"],["/archives/page/3/index.html","13ad486c3941ec254c4e344c0b759fe1"],["/archives/page/4/index.html","b926c3213851354d0d838b4983abf33c"],["/archives/page/5/index.html","d68e89ca4106b498b0622bab9fff272c"],["/archives/page/6/index.html","0874dc1ae5b66ca6630111135a08afb4"],["/archives/page/7/index.html","5c33974d2c5c55110f7354cbf8b7d870"],["/archives/page/8/index.html","8fb735e014db2f1c73c396235e710a55"],["/archives/page/9/index.html","ff219e8c27dab78298606ccfe9f8bce1"],["/books/index.html","16695e4d50fedda0a3dbd0ee62e1b5f3"],["/categories/1-1-CSS/index.html","022fc284bddc21cebe6dc57af2eb79c0"],["/categories/1-1-CSS/page/2/index.html","af2ba51a81e85d31af4c986bd6f9de18"],["/categories/1-1-CSS/page/3/index.html","9fe4e22fa62ded47616d4a4f5bb911d6"],["/categories/1-2-JS/index.html","518dcb879f891ed3c5c6489c2be1bc52"],["/categories/1-2-JS/page/2/index.html","455629b56b67ee729dc9f6b24206f92a"],["/categories/1-2-JS/page/3/index.html","1c91ce2578b7652f989ca50ba24b8e64"],["/categories/1-2-JS/page/4/index.html","09ec4f233ff99a78354eac03ba7543ec"],["/categories/1-2-JS/page/5/index.html","72598f4bc44c09dbffb7d08668aa6757"],["/categories/1-3-Ajax/index.html","470e70c347cde21a152b7dda2f7793fe"],["/categories/1-4-框架/index.html","2209a46f144ea60d62e3f1720bedd02e"],["/categories/1-4-框架/page/2/index.html","d05153c99dc4933eb0ea3f59b221556d"],["/categories/1-4-框架/page/3/index.html","750ad5cc79b2437c2c496f3116f9b275"],["/categories/2-1-组件库/index.html","2a12c6d013cb20058ea421c0913f5a83"],["/categories/2-2-基建/index.html","e891a37357247816a00a654c47cf5866"],["/categories/2-3-实现Tricks/index.html","5e945c0905f324eea9c1720a1c8d5674"],["/categories/2-4-项目/index.html","da5f2eade3fa4c34ba30dc817e82492f"],["/categories/2-4-项目/page/2/index.html","1cc37fb3b535b37abcc9166f518d491e"],["/categories/3-1-记录/index.html","919f1b885ddf0a19b8c45ae70bf7a699"],["/categories/3-2-浏览器/index.html","70fc9317645e590e88d4c069ca7686ce"],["/categories/3-2-浏览器/page/2/index.html","febd5e2cdd8ba96d3f23a149a989878b"],["/categories/3-3-基础/index.html","8ff85f4102aecf965bf06bc2143a8013"],["/categories/3-3-基础/page/2/index.html","6e6d723611d2a173f7730433c42ccb1a"],["/categories/3-4-Tool-Shell/index.html","e4d04aa9ca603edeb995d477c2b02c1a"],["/categories/index.html","8c50cdb778e9ccbc8fba38e3146456ae"],["/census/index.html","0a6d26fb537c0fc92652f74d2cc8ef82"],["/charts/index.html","28ce2c2d38ce1ba4fede6698e7a3bb39"],["/comments/index.html","35e77f8e6359b970d931a1c1f41a077b"],["/css/beautify.css","d837018de48a1287822945cb271f0ab1"],["/css/custom.css","919c11704cd9d23e232fd5700d381ba4"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1651df6ac3c02a05c0d56a5d4f1c5b53"],["/css/lastLoad.css","3cecb17b70c534134a0fe84c53aa6227"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/var.css","0cfc5d4d675e46eb86edf9fc419996b0"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","88450dd56ea1a00ba772424b30b7d34d"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","ed3c40d663546ad50ad764f1aa67bd2b"],["/js/beautify.js","243e03725a44ab6900859617c5633e20"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/clock/clock.css","3909036609b1299c4dab2bd50dee87dd"],["/js/clock/clock.js","b9ccb00f76b07e45d7d5fed8c2e6b8a2"],["/js/clock/loading.gif","b8c45314a21e9b46abcd38a3a69bd07d"],["/js/custom/nav.js","62c332fa99d90ab196a3bb9d52eb2520"],["/js/main.js","aa6bc91aaa085fe798a00ef78b6cd51f"],["/js/newAdd.js","2da62c4bec2ddbad03d6b7070495eff8"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","ab18439d73bbd708e1586a9223001d57"],["/music/index.html","6dfc4ffd2a05d12baa5207557acd12ff"],["/page/10/index.html","eaff9bf3b31a218e61dce77aac4edbe2"],["/page/2/index.html","07a3e46f3b23986c9e9d72ca8ca3685a"],["/page/3/index.html","4562ab04466e92d69524eb8ec87c6b5a"],["/page/4/index.html","91fbb0683689211e07d50a62922d5570"],["/page/5/index.html","ab0ff5636758ab4652f629f434dc37a0"],["/page/6/index.html","f5b37c0bae028bbbe9c67986577d9634"],["/page/7/index.html","9d9a03d2f3769973a7f2332c2d2171d7"],["/page/8/index.html","007ad385aaa355a8cf8f66e4aa619fb2"],["/page/9/index.html","b56983d265cf0f82bed3e557519008fd"],["/posts/1003179605.html","76737cc34c2f43e53080e92a083df67e"],["/posts/1078088869.html","3a2ea40402a9ced7659b0dc05e6bf280"],["/posts/1168384896.html","1a58f0f6910ef70c7e1f7c2873ebce2e"],["/posts/1174755164.html","4c50784077265e655ba860b1eb5d3f48"],["/posts/1207877865.html","08790112120332eb9ef6959e70894f04"],["/posts/1322992885.html","e82160c99f5c6765c3476ca0311210d1"],["/posts/1405183845.html","0899d6253fb3ded7db1c73b3ae2074ae"],["/posts/1460941642.html","bf815db8a5ccd56b7e7060d64e331823"],["/posts/159855229.html","e0568e370472117e3029477b1fcff9e6"],["/posts/162997961.html","b4ad652f7ffa1cd51aee8905119d1272"],["/posts/1634682499.html","d817d1ded802ceb9623698f02e28d4fd"],["/posts/1720673220.html","5f3394a846c81f298efef5147ae4a6a2"],["/posts/1794184575.html","0bd9a922941df885e7f325168c78fde0"],["/posts/179783341.html","6de14b00149872edaceeff0d92ae3d84"],["/posts/2007769797.html","7a6677d987d10ca029fcc0384fc7ba7c"],["/posts/2062301197.html","ec1838405bd34aefe67d5965f1961462"],["/posts/2071449193.html","1bd2b3f836c2f20b853decfa04a07bfe"],["/posts/2075292597.html","0edf53c3ad58e5cb57cabd646614a883"],["/posts/2124882507.html","2e14f87cd6b8844870c12af88c025232"],["/posts/2131155013.html","28e9115a5ce97ad0a82544d4da91909a"],["/posts/2169143571.html","c8127194d694439882796f61d5abe4b1"],["/posts/219349139.html","036ffbb057738c7dd8e7398ea4ff48ca"],["/posts/2217063026.html","117a7b773818781f505086f0a569ad47"],["/posts/2218506745.html","dd3f087bf6b83eaa80a4f9369cad4180"],["/posts/2292260110.html","afdcadb13244621ac2654d8c511008fc"],["/posts/229643181.html","e965875e684881e39c52b2b79ba5d91e"],["/posts/235914813.html","1f06ab5bb092f99ede2750e211f88263"],["/posts/2387908466.html","ffae2c4ebcf2e78c596727b1f9c307e7"],["/posts/2580568501.html","89c0cc69d855066e4de962c3c0998205"],["/posts/2621268747.html","18b0e34dbd3a1d7132f19f31f837a564"],["/posts/265724518.html","a0f858e24283d9ba1c0c8516b61e129e"],["/posts/2716721158.html","e78a98091246181d2d69562902c40e0a"],["/posts/2747544176.html","b59a0331e9ac6aeb1eed789f0efc25a9"],["/posts/2799443321.html","a7ef1a6df88dae9b5663b312c597abad"],["/posts/2803057116.html","a5d9878dda94ccaedf8b6602db400b9a"],["/posts/2818550155.html","1237d460f2d19bdbe4f4180908d7aa8f"],["/posts/282252185.html","1831081e19f3fa8b1816505586fb0585"],["/posts/2959925095.html","33cca0d4595ff15f21f16bc7fc6a25b0"],["/posts/2971665882.html","55f154526ec35ee2691d52765890d91b"],["/posts/3067404590.html","596ba74f4ebd1c13d3d3104b95d1a414"],["/posts/310999178.html","53becfcddb11ed5d9d042876e67ed6cf"],["/posts/3120977046.html","f504a0ad806d330072e47e26469c374e"],["/posts/3253065341.html","b2757ab823b45c1bfa52e0df99603fe9"],["/posts/3253305718.html","f42935dc83b5eebc1ec647c315e97403"],["/posts/3384747987.html","e0e4eb89805a4b38f16db0b739e1bb6d"],["/posts/349024060.html","2bf4902e2fe81d924f45c00644060dcc"],["/posts/3598970227.html","2af74611bbd92c30ed6ddbcade833015"],["/posts/3611094049.html","86c0d4a12ce696ab4e156c92d79a8e60"],["/posts/3631469724.html","45a7c138e326af273b108f198eaad09b"],["/posts/3691095479.html","11b94333821b46d143014da0678b0796"],["/posts/372934289.html","7bafcc4b7b2b0a7b405a2af544454e71"],["/posts/3737997078.html","2a93d0fb605e627a8ccb7ed82f0cb2fe"],["/posts/3783644122.html","596d50037f70b2a7096e54d303ebdb92"],["/posts/3906205819.html","cc9fac981b838dc36e0cbd11b2a64d8d"],["/posts/3912543564.html","6bff8d9cc5aecc20eaf6e16dd5a523f5"],["/posts/3998253138.html","0749242720129d79dd74a4781aed6f45"],["/posts/4075683688.html","e9dafddf3c5f6857280e5fc7dabfc04e"],["/posts/4184919567.html","fea9311e6f3df749b15b4a76953d596d"],["/posts/428414458.html","f8a0f69eb8d27b9431779b7232d44588"],["/posts/4285860800.html","8fc80f3b396e5fa9cf45f6c800d4a445"],["/posts/50508479.html","39a93ecb5eb08c320533f92f865593a1"],["/posts/511687579.html","d6972fb29764de1026b0ddac596479ad"],["/posts/611441247.html","dcc3d48a3bcafa0df90390cb4a176bb6"],["/posts/619926249.html","de3d3621660f97cc189ca39f18a78b74"],["/posts/656350506.html","efa3fb9a29da946867a5d40c31b1c65d"],["/posts/680535600.html","cfc1b0b1e8b7b3f2acedb045052b1b99"],["/posts/684607466.html","5546811971b5facf8851c2e307c11a7e"],["/posts/686254810.html","1aa29cfdaa7769c8bdfea96514b62478"],["/posts/710205459.html","39d05e8a85a212299271f1c4e44ccb20"],["/posts/775935900.html","c04573d6376c9ac2cb3e5595fbfccb5d"],["/posts/854292428.html","5609d7dbbd5c9fa7e31ef4bf1c5abef8"],["/posts/855735627.html","5ec5505baef27578aa33899f77da1c36"],["/posts/867212230.html","6fb4b8c614c056bddb91c692e687298b"],["/posts/926905116.html","01b228289ffb677d847ee41b54b10c25"],["/posts/CSR_SSR_ISR.html","f5d5866a7b6140c6715116d56416665f"],["/posts/CSStricks-1.html","cd7e039837b1e7882b0a1613e63e4a64"],["/posts/CSStricks-2.html","03fc732aa99791ec901b94e9edc0ab4c"],["/posts/ES6.html","aaa9ba50d20954011dd076cff2df724b"],["/posts/HTTPS.html","2319acf3357f7a2d684fcfa4432971fd"],["/posts/React's Component.html","c6eb8db9ded35eb28c1309d0c655a6c9"],["/posts/React's key Concept-1.html","d800eb9d3ed2eb9557ebffd5012b90f4"],["/posts/React's key Concept-2.html","9582da5faf5d40a19c2f5aadca4532af"],["/posts/ReactHooks.html","dcc20adb146df9ec0253a31d4675aaba"],["/posts/React_lifecycle.html","c0fcb9bf7b44cf67360d0a41e74f75de"],["/posts/URL_URI.html","b467e8048d9bd0491119c394ea8e0b37"],["/posts/animation.html","4c85e3281db6b7ee902209d0b2470372"],["/posts/antd-data-show.html","cd8e30a0863e13ff6b41bf41a4c3d3b2"],["/posts/basic_construct_1.html","9c2487641cd07f654b85f7e611fe8815"],["/posts/basic_construct_2.html","71824f46785b29c0ff546ea7fff7bcb9"],["/posts/better_performance.html","09620fbd626b34f9c995e062697de323"],["/posts/blogChange1.html","4da82375e7b17bfb7f0a0a85a9bf7197"],["/posts/blogChange2.html","264f007ec28e90603b3a85ed6e730c72"],["/posts/cat.html","2a5467af2876983e6a1fe4a25a7e02c0"],["/posts/cookie&&session.html","48a3310594c37f54a684b63b089e0328"],["/posts/feature-tricks1.html","408ef8f76ca768117ae1be03a72115fd"],["/posts/file-read.html","4608e1768575d40c5c2e8dc7c57e25b9"],["/posts/gap-property.html","f0e067ac8f799a2a29dd030f903f905d"],["/posts/hideElement.html","b44ca641c2f551eed10a42f1ed7f3dff"],["/posts/http-cache.html","9a0812f4e04e03423fc15c3858b0ebb0"],["/posts/http_cache.html","eb4e82220f9726c7c1ccf944e2b7d77a"],["/posts/privateGame.html","2042910a915c7b915e2fa8a01ccc9829"],["/posts/prototype.html","63c829c95e13c5fbf741e2896de2630c"],["/posts/react_components.html","0cc64a807b2029c79680bd291279cf0e"],["/posts/react_vue_data.html","a66e46f34698d91ee0804194fc8a2538"],["/posts/requestAnimationFrame_1.html","3d6650f4071c373c72406edac84e7b6b"],["/posts/scroll.html","23d4ae41057d36fd8af3115347b2fea7"],["/posts/toolsTest.html","115f9eb03ce538c3f50dfeb560bc5528"],["/posts/vue_lifeCycle.html","0c27fd4b840c29f9b1b727cf36daca84"],["/posts/what's Hook.html","9b131211bcbb25eb3838200d6fd2b9d7"],["/posts/why Hook.html","c36bf557a6c68b3e32c62402c7fc67bf"],["/posts/前端模块化.html","db732470e892f8d5d8d281fc2bbfe84c"],["/posts/路由.html","514c36ffb4712cc0ed25596cd87765ae"],["/sw-register.js","01c38900f2a0e8f9d63ce63271596844"],["/tags/BFC/index.html","87d254e552ef18b12e8a5650ebfb4260"],["/tags/BOM/index.html","dd3af085c2a196a7395972dd9dbe15be"],["/tags/CDN/index.html","bb78da590493404b35be31f37c69eaec"],["/tags/CSS-in-JS/index.html","d4367c45b3cceba2be944e2c05cb2341"],["/tags/CSS/index.html","12df8c9986bdcb590b7d8555a90b8ff4"],["/tags/CSS动画/index.html","257b4c8a6d9d4af1396db9611fbc950e"],["/tags/CSS属性/index.html","3c9fa5531cee34e5fe77722e77258f34"],["/tags/CommonJS/index.html","0ee172b0d132603ec563884347f01316"],["/tags/DOM/index.html","bd64e5c0397a3f896968236cf56fd469"],["/tags/ESModule/index.html","544306cb85484e28186f0003294c02a6"],["/tags/EventLoop/index.html","f5b67bb771ce252a011d9d21ad2bbeca"],["/tags/Git/index.html","82b5f086fa750155b7bb15d126235dd0"],["/tags/Github/index.html","1f3429b45657e00b41b4de93f966bf32"],["/tags/HTTP/index.html","03397586042ee4961a79b2ce7f3f5b44"],["/tags/HTTPS/index.html","42e3b6cf757f28169683eaf54aaad95a"],["/tags/Hook/index.html","f84acd35e27ceb1025a08099ac7bf8f9"],["/tags/Hooks/index.html","cf28fce994e7a6cc85b354d075a7b80c"],["/tags/IFC/index.html","a68738e6d217e42957f9c13fe29075c9"],["/tags/JS/index.html","314f7b5d90c101905f8cf55acadc31bb"],["/tags/JS/page/2/index.html","6893aa6db3e982662adea586eb022568"],["/tags/JS/page/3/index.html","21ba3c07593c44d2b53dbf4b71144437"],["/tags/JS/page/4/index.html","df807b64d22f12614fd4fa90887974fc"],["/tags/Node、Antd/index.html","dba12e4fd053f21ddc305943384e5d2a"],["/tags/Node、MySQL2/index.html","846981226a40b9098e60fc2f42e917a1"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","de9ea34f3bdcc6f6d53c2627610040c1"],["/tags/Promise/index.html","2cd57d210aa6938d0b3f3aeab2ca1a75"],["/tags/Promsie、Async、await/index.html","3a89249b73a85cfe2ef8ec9a4e47c351"],["/tags/React文档/index.html","068bd1adc74c8bc131aa1b034c9da457"],["/tags/TCP/index.html","0489f87797dcf0da76ebb25215ef5002"],["/tags/Tools-Shell/index.html","fa8cc4d7cb4eef58f5994ed1d2fb4ae5"],["/tags/UDP/index.html","88054146e2c3521f7197cb3993fa359a"],["/tags/URL、URI/index.html","d0f04d48f3ce684154dbe6f7e3790fa0"],["/tags/Vue/index.html","f27c9d4951c61d9937a19aef1e363e7a"],["/tags/ajax/index.html","edbf34da86e65d8d393aba2e1b186dcc"],["/tags/async/index.html","df7b8b3475746798a3d803c109be3005"],["/tags/axios/index.html","fc477e2a51fc3a51db413e629f192a0d"],["/tags/codeReview/index.html","39262b0ce432c20664e474ee7f092361"],["/tags/cssModule/index.html","fc5eaddca0b7e31a4a6f99b5c0513a0a"],["/tags/defer/index.html","7b470cef9c0bd96b3e3daa8d3660b131"],["/tags/flex/index.html","ba4e5bf8f9803f8c7149fed950cfcbd7"],["/tags/index.html","6fb43e7c5e6e30300c8fd13a951029d0"],["/tags/overflow、滚动/index.html","a79b3468865c4d31fe72cb72188ecefb"],["/tags/position/index.html","f955e8426bc97e00d218ab6dd040d7e6"],["/tags/requestAnimationFrame/index.html","3a80bb9968eef7de8942b443d033cc8c"],["/tags/webpack/index.html","1e6f817de2b4d304f7d2805d2031c85b"],["/tags/webpack插件/index.html","ce9583b3c15137331f2374ca76ff7d8a"],["/tags/webp图片/index.html","1ae814cd3f20da33ad0842204fd1d3e3"],["/tags/二叉树遍历/index.html","c618d9c4de1281eb98923d107862f8cd"],["/tags/优化/index.html","59cbc2ec1514fbf38dc3780c735b3d99"],["/tags/函数组件/index.html","10a11ff7a098b18dbd6854dd87263a7a"],["/tags/前端基建/index.html","5d65586e844d8e73a58a8d7569516d11"],["/tags/功能实现的tricks/index.html","cfa2cddf7eda874d9dda03b968ee53b7"],["/tags/去重/index.html","c68ecf1318397f7a60d4f759ca497fc8"],["/tags/双向绑定/index.html","22caaa707a721ad38c48731397ea31e6"],["/tags/响应式更新/index.html","9acf564d713c9466923c139fa3c6d3d6"],["/tags/安全/index.html","f0621d3091fb333fe96a9a63ffcb2ce7"],["/tags/宏任务/index.html","5d643b528e97514ef86cb13141afd6aa"],["/tags/帧动画/index.html","3a885c14aec24a1bb366e76b01b26123"],["/tags/微任务/index.html","1e4cdc286581f92a77b7767f72483673"],["/tags/性能优化/index.html","336f01a54647e1af4a30aac9795e7344"],["/tags/懒加载/index.html","c16aade16424376edd097c96d904cb50"],["/tags/扁平化/index.html","53a98005e53e2b2b280f2eee99a540fb"],["/tags/排序算法/index.html","91a56d9e9693bea4abe707b767fe9943"],["/tags/数据流管理/index.html","92530691ab8e76722ebc7937dfb6d4b3"],["/tags/数组API/index.html","c01e9d474b44bf345228bcbb66c12209"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","d9a180c1acc590d7e22a72b0827a52fb"],["/tags/文件上传/index.html","86536530ad9fc829cb5d93b346dd90a3"],["/tags/样式污染/index.html","5805fe14b6c432c82f25a6aaec8e23af"],["/tags/模块化/index.html","89f656eab4faff6fa53446a9db049c26"],["/tags/浮动/index.html","d3b28993b647d822e4bac577c38282c1"],["/tags/渲染解析/index.html","7cc65d468adc31f1b469640d48c33f96"],["/tags/生命周期/index.html","6071ddd099b213251cd366c715ba1855"],["/tags/盒模型/index.html","5a346b3a9d715b3d380545204ee09ce3"],["/tags/移动端适配/index.html","67d51dad6efafa4648a19843ae983fbf"],["/tags/类组件/index.html","acc8fe5499d03eb2628484e737d0563d"],["/tags/组件库-antd/index.html","f7960fcf360d5ea0d58e54082dd9a277"],["/tags/组件通信/index.html","fe4130b988d40dd14f0049af5bc5226d"],["/tags/编译执行/index.html","7b55c1b3b16ebda95051f1fcd2c33592"],["/tags/网络请求/index.html","caa04f0404c36c447f7a472387474bde"],["/tags/虚拟DOM/index.html","b4e715cff60db06a86f685867f51c6b4"],["/tags/表单提交/index.html","587a5d8e41859368df1d4ab4ab916119"],["/tags/计算机课程/index.html","f755b5030dce1cbd318a2985dfdc21a6"],["/tags/计网/index.html","3c2a92168be942a6979e30ef3c1c2d65"],["/tags/跨域/index.html","a3f3baf0db11e72598e5fa9ce6d542e0"],["/tags/跨域解决方案/index.html","43d0af0a2f29c99f24c1116cb638aa12"],["/tags/跨域问题/index.html","5cfddd320a6abc6e59681a780abd9bfb"],["/tags/路由管理/index.html","e9fda797686d3705615c12207124a159"],["/tags/进程线程/index.html","ae14b71c2bbd1ce77577b4605ffed838"],["/tags/选择器/index.html","4357ba4b4c43e3942f29598e2b1ee39e"],["/tags/选择器优先级/index.html","0675c7392685319acd1eb6c440197719"],["/tags/隐藏元素/index.html","e00f0cc3ff3d88d89402e55f84c26afe"],["/tags/页面解析渲染/index.html","b1c58277b910c0997669c7d1768f85bf"],["/tags/预加载/index.html","5bf94f6792a1107d060184baba54e2e7"],["/tags/驼峰命名转换/index.html","05392efdde5b541a333718096768583f"],["/tags/高度塌陷/index.html","3ac3a9a712a19dc8c42130eb7ae337da"]];
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
