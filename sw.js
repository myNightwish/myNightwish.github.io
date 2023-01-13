/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","4ccc8350feffa5ff79d3862355534ec0"],["/archives/2021/12/index.html","f4bf37272f2074b1a95a5655dd9d7b54"],["/archives/2021/12/page/10/index.html","c52dd6bd29fa0b3e46363a5757a471e0"],["/archives/2021/12/page/11/index.html","f4630b0d7a9fe018a623c88d920801c6"],["/archives/2021/12/page/12/index.html","06b890f6d9593e6222920dbd7812b49c"],["/archives/2021/12/page/13/index.html","2e0531a1b646dea7ec1c8cbb5bb4ab70"],["/archives/2021/12/page/14/index.html","c95e15516ff357df27e82d7ad2a20843"],["/archives/2021/12/page/2/index.html","03b49dedc078acf116963e3abd883103"],["/archives/2021/12/page/3/index.html","ada74a42616d09f7e382acdfa69aa295"],["/archives/2021/12/page/4/index.html","36b9ef06bd3c91c49afd195cc5e279e9"],["/archives/2021/12/page/5/index.html","0be519787e3600ec42b353344d8772df"],["/archives/2021/12/page/6/index.html","3f9ce11acb269258ae901bd31d3f5347"],["/archives/2021/12/page/7/index.html","28ff8f010dbb79e30d42f463b4b323bd"],["/archives/2021/12/page/8/index.html","5baa584539f073e4d49f4a64cd4d35f7"],["/archives/2021/12/page/9/index.html","dd74dfb26e265c74aedf3e1ad4c7618a"],["/archives/2021/index.html","f1cd9b92864977f656bde76c352269f7"],["/archives/2021/page/10/index.html","afc370229b79128c0a4e0115b0de0716"],["/archives/2021/page/11/index.html","0345ef7bff04ed1df58a2a5a766badc3"],["/archives/2021/page/12/index.html","f474280ea27a48a3742c640b46af97c5"],["/archives/2021/page/13/index.html","e087e66a4edab8ae5967c9cb29877224"],["/archives/2021/page/14/index.html","b6726fb9f0642abd2196bb5904522cb5"],["/archives/2021/page/2/index.html","b4728edfb4d30cd9e3fef3a6b43ee096"],["/archives/2021/page/3/index.html","c13340bc7ba800fcc1f649789b4e4790"],["/archives/2021/page/4/index.html","698e502a9def6b23f19f31a3b937156f"],["/archives/2021/page/5/index.html","37aa2e7ed669b03d06f38fd78a886062"],["/archives/2021/page/6/index.html","633f729979e7b572d884d67f27d14f2b"],["/archives/2021/page/7/index.html","f5d2abc2b09ca2e7e13678c7ae7ff7c5"],["/archives/2021/page/8/index.html","abea058a937bc9a370aac20822ea8bf3"],["/archives/2021/page/9/index.html","27e0eb42416b2ccea076c45014b9811a"],["/archives/2022/01/index.html","71fdf7dc9807131083d225b56095a713"],["/archives/2022/03/index.html","65d00b7be6b204a3cc6023a9c59b8486"],["/archives/2022/03/page/2/index.html","db49343952823630ceb7b61b92829515"],["/archives/2022/04/index.html","16ca200ac8d64faadb6eaf3aa86b18c3"],["/archives/2022/04/page/2/index.html","7d6612a5edc205782a3b6733e3f904ab"],["/archives/2022/05/index.html","b89b08a2356e779835b984f74b2ecf7c"],["/archives/2022/06/index.html","e784c8cf9d87eefc8c0e18494f2b2d33"],["/archives/2022/index.html","c586c176e1a24ef2da2a3c342178b605"],["/archives/2022/page/2/index.html","ff8aa63baae5564c8f0aa374b093cbc6"],["/archives/2022/page/3/index.html","f1eccf3fbfe667f8b52c229ba8b8ddae"],["/archives/2022/page/4/index.html","860f9d9b06904935db664566575c8990"],["/archives/2022/page/5/index.html","a99a8f07fd9457d1eb3de7a46ea7b586"],["/archives/2022/page/6/index.html","d13e3e655f5169609a4c56ffe207d70d"],["/archives/2222/03/index.html","9f1fc94d2070ec5ecf33739acb3cee4f"],["/archives/2222/index.html","b88b1779fa6b47cd09d5cc46338930ca"],["/archives/index.html","1722a1c5b857ec9479b5a2fa5d5c3c73"],["/archives/page/10/index.html","bcbe2cce0450ccbdaf850d2276251fd2"],["/archives/page/11/index.html","d22b0e7dc61d9dd6c745bde9043824c0"],["/archives/page/12/index.html","6820bc113e37cd91e029fa9c3f765a12"],["/archives/page/13/index.html","21b94fcc0fc1f02b8da0e2db3c7a5d4f"],["/archives/page/14/index.html","a008599d61231eb8163345de79be9cea"],["/archives/page/15/index.html","2b7d80a1fc21c004cca43e78216be753"],["/archives/page/16/index.html","f19faedec3757b6ab0f38f99c837d76f"],["/archives/page/17/index.html","1f7ddcfc7421c0b6cae7a4356d36b896"],["/archives/page/18/index.html","e132650da61baded287b6365c3f1cba2"],["/archives/page/19/index.html","9d3d3917680f9c3b7d5ce5bcab1951e2"],["/archives/page/2/index.html","7f5417cc4651128d9e6152768a62e0d6"],["/archives/page/3/index.html","631016ec9d8859362bcbf2fcce52a719"],["/archives/page/4/index.html","28e8c3ff7cdedc5e9f2614e84c26dcf0"],["/archives/page/5/index.html","0220be859c6e7694406b6fa36a4d186d"],["/archives/page/6/index.html","5ba09cee27bcf91f2dd7d51b4ed1b7ed"],["/archives/page/7/index.html","aff8ef59e8caeedb64eee89b6f77e65c"],["/archives/page/8/index.html","2fc36d9ebaab088fe24fa3d6a77f234c"],["/archives/page/9/index.html","de8fc78c7b594f3909393c0109630981"],["/books/index.html","3f0f30d2f8ebc15d3a5e9e813bc546d8"],["/categories/1-1-CSS/index.html","d9fa047e21af798bcc68de3a0406bde5"],["/categories/1-1-CSS/page/2/index.html","1b47b8758d2aedd2bd676d310df80ef3"],["/categories/1-1-CSS/page/3/index.html","9fc1027f639b28af4d90fde655851ad9"],["/categories/1-2-JS/index.html","f675e362aa108b71f03160cd67c0e2b4"],["/categories/1-2-JS/page/2/index.html","21a42b611346590b5c4446ca87514303"],["/categories/1-2-JS/page/3/index.html","cb7c07d126e570675a000590d93c0064"],["/categories/1-2-JS/page/4/index.html","494930a8236312e03df83db10fa77631"],["/categories/1-2-JS/page/5/index.html","7355e9373f9e060d58005f0e1760a85c"],["/categories/1-3-Ajax/index.html","ad42f00235037e7c0f7c1501a16de206"],["/categories/1-4-框架/index.html","893229ecc73b9aa4be6b7ae1a4a0e0d2"],["/categories/1-4-框架/page/2/index.html","563702955487f88e618672c92bc054f5"],["/categories/1-4-框架/page/3/index.html","3883ee8816a8d93d2d6e45cbc1e4e978"],["/categories/2-1-组件库/index.html","86a93073ba0e29cf31c3b974233e9f6d"],["/categories/2-2-基建/index.html","b383cd05153275b89e7f614df2004af7"],["/categories/2-3-实现Tricks/index.html","ec36f83f12a6bfe0bbe459d009d08359"],["/categories/2-4-项目/index.html","e5f635276302a90c832e106de1ff6c61"],["/categories/2-4-项目/page/2/index.html","10e81a9d20009fedbddca22abb928cd0"],["/categories/3-1-记录/index.html","375247a6acc163126935a4b4375c47cf"],["/categories/3-2-浏览器/index.html","f0e52426c32930bc9b3557d51f850802"],["/categories/3-2-浏览器/page/2/index.html","88b7947521176e5ee9b87ba3d5fc95a6"],["/categories/3-3-基础/index.html","cddea7faabc0f51421777c8b6e05feec"],["/categories/3-3-基础/page/2/index.html","7cdfee54a2ce91e291b75a9131438fb5"],["/categories/3-4-Tool-Shell/index.html","306471be37b8474dd07bed07c8fac161"],["/categories/index.html","19e0be2fe4e80ec2c865bd2c8ebb38b8"],["/charts/index.html","a31c9697e5f79716bfc7e68a22eef033"],["/comments/index.html","aa0a3bfd24ca9a491db4a7037ed0ef34"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","01cc04794e28f71f7003b4f4e016316c"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","d1886ab5fe09ab39d5e72fb7307fee53"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","920d53be1d2359537786afd566ce33d4"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","747c8b38e855958e28d517319c69126b"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","51818381fcf20e0325e0d665026bd2d7"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","47b4a4e96396bba85324adf4a6b9372c"],["/music/index.html","97891c24fc9bf714ef313137abd6e5ba"],["/page/10/index.html","4cafcafbf4590e061e8ae06042bdb2b4"],["/page/2/index.html","ca531a4f6f8b32c3b93131a9aa7296df"],["/page/3/index.html","a2b1f7fc8d978a8d5b47110d6aa92a11"],["/page/4/index.html","d2cf9dd6e580716eafb6cf49232f3a3f"],["/page/5/index.html","13e3482ee05a7ed5273fe1215d4db9b7"],["/page/6/index.html","eecae33fca19a57df2c71e608d02a1fd"],["/page/7/index.html","a6483e41bf2af596376a60173e1189b9"],["/page/8/index.html","c9b01a96e26c1cfcd166382e84835215"],["/page/9/index.html","790fd74a073eb86b74ab26f954deecd0"],["/posts/1003179605.html","b6c07ea5c67481e9fe09c13598a18b76"],["/posts/1078088869.html","2d1d7a003b4e22d641ca535c57dbbf95"],["/posts/1168384896.html","cbc1e4871bd18e6938681368ee055ccc"],["/posts/1174755164.html","6cf0ce4fd5a91809b5a7527ae87eb71d"],["/posts/1207877865.html","1b7a9244885785160c11677e4c1f68da"],["/posts/1322992885.html","cdcf271e71dfd0c3d22cfa76bca46f54"],["/posts/1405183845.html","d3ac1ba895211e837b2d8e8f4dbdb23c"],["/posts/1460941642.html","f5c8c907e0cebfc565a416bf531d274d"],["/posts/159855229.html","6a79227c26cf187226ba1dc9bace24aa"],["/posts/162997961.html","2fe1699fff5802202aa702856579152b"],["/posts/1634682499.html","57bf4924cfe99a33378cbf79bf5b43d8"],["/posts/1720673220.html","acf57246f32ac26a969b9f6ee64dec05"],["/posts/1794184575.html","d5cdf354959816c22019f78d438b89a8"],["/posts/179783341.html","4a5ae5e806e5259a6cea5b0274811057"],["/posts/2007769797.html","7113116f1c0514a24db0f75c72c87539"],["/posts/2062301197.html","3ed8cc87da535c7d201d131c3ae6e7b0"],["/posts/2071449193.html","b875e66c6949d7bf17d1a8d313a1c8a7"],["/posts/2075292597.html","4dced4fb2b6f257cd686933383d0564f"],["/posts/2124882507.html","8dcdcf0996ee36505fd8f465ade84c26"],["/posts/2131155013.html","3d0ebe1f2758d732c6e59f1d824afff4"],["/posts/2169143571.html","2a6768da63201c01fe48b645d83b3069"],["/posts/219349139.html","74f97647424b8b8e0b41622080eac487"],["/posts/2217063026.html","a6128c324abc322be9bce83c7bd7dff2"],["/posts/2218506745.html","531f016f3342d448d75d80f75e253502"],["/posts/2292260110.html","6d3b622db80ca17699427a7cc5dfe880"],["/posts/229643181.html","20ff70ca471a47c2c1f89ca7c29f0208"],["/posts/235914813.html","f80fdbf237bb10176190fa14ada9c1cb"],["/posts/2387908466.html","37bd6478f241f9a5ca0cf24939959005"],["/posts/2580568501.html","0bb93b71f0dde4b607a258ec8a6f3736"],["/posts/2621268747.html","7ac5a012b444290eedc0ab0f49d09e76"],["/posts/265724518.html","6527d79d5ad88a4a6ad53e3ed37df93a"],["/posts/2716721158.html","0ce5f9e4db17a6c521d15a35f1461280"],["/posts/2747544176.html","a5d24668944dd42abc12063ff9cc7626"],["/posts/2799443321.html","2a4d568c12d4c48a4fe34ca7f723fcb9"],["/posts/2803057116.html","029648250b6f538c7c553e42ac1fed1f"],["/posts/2818550155.html","7846426cd5c5704e0573717dd99ead3b"],["/posts/282252185.html","3e3c83f02426b9db928e944bac9b1a3a"],["/posts/2959925095.html","5bacd353ca22696e654680cd5d5db61d"],["/posts/2971665882.html","6f560df8ab17dccec97790be10e853e1"],["/posts/3067404590.html","39e4192d51469fbe60d72c9eee60f6e4"],["/posts/310999178.html","7b879657fbe6b96d89a64b522573985e"],["/posts/3120977046.html","8773476df4fceec31b87ce43037491a2"],["/posts/3253065341.html","b5fc5df323d103814124a9e2e7166675"],["/posts/3253305718.html","8ef63f0656cb241916824d0ad0c1843c"],["/posts/3384747987.html","3a5a4dc2c4cee3454b21dd1bb60b5319"],["/posts/349024060.html","48d26439768f4d3b4b5283745597f662"],["/posts/3598970227.html","fdb5dca4f34682551e07213d6585584c"],["/posts/3611094049.html","51384349f699cee29c0d63206cbb0016"],["/posts/3631469724.html","bcbf6404111ec5ad8c924ef2af9b2ae2"],["/posts/3691095479.html","1ac64e5b8b0aee3ccf2a2612830d3287"],["/posts/372934289.html","b54b2536f0ef25993a08c4c7999b26e1"],["/posts/3737997078.html","049b765bf5e5663e943ced1b13329d78"],["/posts/3783644122.html","ad93c78f15b65e78d70c527a065b0515"],["/posts/3906205819.html","77d2fe24f7600ff88cf32d0713ac4fa1"],["/posts/3912543564.html","21937f497071418fbc26847b4b7ee88b"],["/posts/3998253138.html","9d54fe5b7bc066e520dd32be206ee081"],["/posts/4075683688.html","99c533938fe94f0b0df2a009c1a328c8"],["/posts/4184919567.html","f4bb76181e891f04c8a1079bb3b0c878"],["/posts/428414458.html","786f52e6abb7552af32f10544378bb5f"],["/posts/4285860800.html","07aff7903fec3e0ff69b23f0aa8680af"],["/posts/50508479.html","f67a50bd3d796afecd6d7506f306ea60"],["/posts/511687579.html","12c73d81af4e3d4dfaa86bcd3dd887b0"],["/posts/611441247.html","3d47c127ce1b4e9c7b79fb0294e12949"],["/posts/619926249.html","e0429eab4e32f9e5b7997c48794ae8b7"],["/posts/656350506.html","cab5b4fc0a66de39c3a3704d70437217"],["/posts/680535600.html","c396c9c4050d2226e34a1517a8d5b2a3"],["/posts/684607466.html","37e5ea0474a5c957294e0e7a07e527e4"],["/posts/686254810.html","7ba86286e71c66568c93ea775a425991"],["/posts/710205459.html","96022aedb41ea077b0f67aeb1a92981c"],["/posts/775935900.html","a4cd236fb69856ac6be0ace6d2976fd5"],["/posts/854292428.html","bc5da90f40110fd543c23869324a9d15"],["/posts/855735627.html","d190618ffe0a5d2c5e2592318780c715"],["/posts/867212230.html","c4eb9ff30e4e62ae87bc8f54b9e7bc4c"],["/posts/926905116.html","25472cab89f509b9284dcddbfacfc17b"],["/posts/CSR_SSR_ISR.html","c5b35aa6b11eb28d3680531b001c9d1e"],["/posts/CSStricks-1.html","3d0716b79570af392af3ae6610446899"],["/posts/CSStricks-2.html","037520878e1b6d983dc6307a4284bd46"],["/posts/ES6.html","e48c685f8d790a72c9f46a425c1e7e38"],["/posts/HTTPS.html","766ec72a214ba43c763df2d4456c5f6d"],["/posts/React's Component.html","17ece1b46f7478ff60ce9f38e0379597"],["/posts/React's key Concept-1.html","b75493962e0c2f5f337b114a70d9695a"],["/posts/React's key Concept-2.html","b4f3025d453e5129acc6f158662740b5"],["/posts/ReactHooks.html","4ed56022efb52d311076a7b2307330e2"],["/posts/React_lifecycle.html","1d864b88c01097457c5da7bc62ebbe27"],["/posts/URL_URI.html","96a10de62ab98ec0357512994c41da79"],["/posts/animation.html","0d5f997cc1eceeb7f472ca02c898b297"],["/posts/antd-data-show.html","fef22b300b6d63716f00e3ad4a6b2b9a"],["/posts/basic_construct_1.html","3953125fd52027e2a77de57bb7b91d6a"],["/posts/basic_construct_2.html","46dcc9a4d61b35b5a0ef1bf9f973dc9d"],["/posts/better_performance.html","2dd451d20372c75cdec516b153e42373"],["/posts/blogChange1.html","7689365b127ee48f7ac9e75a50db288f"],["/posts/blogChange2.html","5ed157b5b9a222ea2972e3aaa76f991b"],["/posts/cat.html","67f3ea6d7a42f54aed89920df321ce17"],["/posts/cookie&&session.html","1b543dace1eaf2587c69f2b4f5447ea1"],["/posts/feature-tricks1.html","fd2c69293e1b299cde72c636e9df8e3e"],["/posts/file-read.html","27fa567c49c6234f080e80645f41df14"],["/posts/gap-property.html","5d7c178819540a5f1c33776f93ca1d46"],["/posts/hideElement.html","d3dc9b14daa2ae87dfb33e6709c8f726"],["/posts/http-cache.html","954e734fe9149729efe2938d5ff5069c"],["/posts/http_cache.html","f162df8492e8a32c31f0eb821ebb53c9"],["/posts/privateGame.html","55f866269b4ef056961f3916fed22369"],["/posts/prototype.html","d11f3c905d96cb7637251ea64afeb2cd"],["/posts/react_components.html","48cd17587c7b6a489c274bdf13028521"],["/posts/react_vue_data.html","82298512b0ec12f4d3c13b8d8079267c"],["/posts/requestAnimationFrame_1.html","bf897a5074cdbae9ba2fa9543b519afd"],["/posts/scroll.html","309beec7f813393a517490abd1ba8bd2"],["/posts/toolsTest.html","578a03701f92c168723e59e3ecdfc985"],["/posts/vue_lifeCycle.html","1c6b9f32af32f1b761daef730d2dee99"],["/posts/what's Hook.html","9d469a5b0434371dd334e59fde3a4772"],["/posts/why Hook.html","01d926b8c1ece66813ae0d3ac96ece24"],["/posts/前端模块化.html","97e59c73046040454e0f18f2fac9464c"],["/posts/路由.html","721a59d3598497735eeb74c7dd57f898"],["/sw-register.js","e5c46844c9ce0255a3cf08a1a171d72b"],["/tags/BFC/index.html","ae0f26b8bedaa22b457609ef615a7584"],["/tags/BOM/index.html","bca3a15b51f2229b9f78f3ae454888ae"],["/tags/CDN/index.html","3ebdeba5f4f7798f47b396871982fa2b"],["/tags/CSS-in-JS/index.html","533416bf887f96b0df42da6ccb58687d"],["/tags/CSS/index.html","60ec6adb692bfd1cb016013af0c1306e"],["/tags/CSS动画/index.html","e8717a263d3ebbaa2abbfd8aaa9f94c4"],["/tags/CSS属性/index.html","048dafdfd979e3ed86ec1faf4dc6e157"],["/tags/CommonJS/index.html","0597d981147edcc02fadfdd1d8ce16bf"],["/tags/DOM/index.html","febbd0f0dc4bf3d86c9012323df5daf7"],["/tags/ESModule/index.html","8a460b3c86b30ddcbec26e362a56db1c"],["/tags/EventLoop/index.html","eeb32720eebd6763497f8589e3e012d4"],["/tags/Git/index.html","eb04bb1a23d42a900adecdc5a40dd2cd"],["/tags/Github/index.html","c75a14ebc22f38097e1f5a9176b32c95"],["/tags/HTTP/index.html","bc2d422b36c03f11c5eb42d2e22b13fc"],["/tags/HTTPS/index.html","c08f17b7f90112a1373b968c0a126302"],["/tags/Hook/index.html","be2261aeca3da582ed74b16eabd59449"],["/tags/Hooks/index.html","c58bcaac322ee3358e3dd40cd3c48625"],["/tags/IFC/index.html","f2700dd982dceb04366d19880ae0401d"],["/tags/JS/index.html","8db081a67f97c2cf97924435e31b25e2"],["/tags/JS/page/2/index.html","b32df82663906944d605f8145a335d08"],["/tags/JS/page/3/index.html","9e00506f44859eafc64d133785d1841a"],["/tags/JS/page/4/index.html","277f63a18699eb03ce0ef5dd28b78f12"],["/tags/Node、Antd/index.html","f1ba25c50a74bb54f90d06bfdabd5692"],["/tags/Node、MySQL2/index.html","ececa23be003218aa1885c54ad3be2d0"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","f837febe7e1d3d200a77e5b62f6bbe91"],["/tags/Promise/index.html","74f3ffc53884c7a2fafd0a271d217eb8"],["/tags/Promsie、Async、await/index.html","8f77b51ebca43afadfead34aff7b6a11"],["/tags/React文档/index.html","a355adb6581fd7400fc1a3141fa9252a"],["/tags/TCP/index.html","1dc9f9c43e4ddf9321804634b876aa70"],["/tags/Tools-Shell/index.html","3f7508e5065bd7baa0cb9ad2a839316c"],["/tags/UDP/index.html","59c04b05ba0b260a7f8439f787d055df"],["/tags/URL、URI/index.html","a57e2cc0b59d5e672646777cd52306c3"],["/tags/Vue/index.html","926297f0c95c11ff9f62e912daeff60b"],["/tags/ajax/index.html","201206326a64bbadc8d196ee7989d150"],["/tags/async/index.html","b769be00ec204326cdf215aaf2ca3146"],["/tags/axios/index.html","989d70e0c02904f631c1fc449d78803e"],["/tags/codeReview/index.html","adb1e3bc292e251165c5549631da6d81"],["/tags/cssModule/index.html","66394ceb630cd30eda010daa41a71f16"],["/tags/defer/index.html","a871e081ddf7fe8474f4ada3e74377e0"],["/tags/flex/index.html","0f60798aed27832dab3b811debb1e654"],["/tags/index.html","a1e02782ade5b803ba3d6defa722dc62"],["/tags/overflow、滚动/index.html","4207eaa2e16188d7ad3b57b565892c66"],["/tags/position/index.html","031dac4a61236a5764b3c3263662ded1"],["/tags/requestAnimationFrame/index.html","3cc80393c1234a654a3a433ad9aca545"],["/tags/webpack/index.html","6d98b7e5c60e5b4638665399c44d796b"],["/tags/webpack插件/index.html","f32946877be7f76ae98057fdebb28f46"],["/tags/webp图片/index.html","33374be7f83215d4a4e563e42bbf968b"],["/tags/二叉树遍历/index.html","9d6f4f10e86fac5e59c6411e91e013ed"],["/tags/优化/index.html","2fb06d901a9e309fd9b45170b64d49d4"],["/tags/函数组件/index.html","72f841406a1434fdbb653a62002f0d8d"],["/tags/前端基建/index.html","309fbd0cb9e3d9dc8031310f1691ad77"],["/tags/功能实现的tricks/index.html","a8f8b032826c127c30edf8901889f3c1"],["/tags/去重/index.html","7d6a9151366c39eb4dc658f4f4ffa7d6"],["/tags/双向绑定/index.html","cd1d93d9ed5d9f19a41a42d93801b646"],["/tags/响应式更新/index.html","b20fbefcc846876c2347bec6b65e6224"],["/tags/安全/index.html","4c4ad5ec8ff168f133fc88abe4af6894"],["/tags/宏任务/index.html","5fa44035e47b1a13312a4ddaf4f3b92c"],["/tags/帧动画/index.html","fc885c2727faa0f57a525420d34389e6"],["/tags/微任务/index.html","131071069f2d3e2ab6e7e28c27fcc4d1"],["/tags/性能优化/index.html","dcbb7be60e76f209ff75463bd5b775e6"],["/tags/懒加载/index.html","a9d0cb0229341a0003e7e2313abea671"],["/tags/扁平化/index.html","b07dc77af3ff75b55120db6d7e740cd4"],["/tags/排序算法/index.html","9a4e7ef0ba263d290cb46aee193b636f"],["/tags/数据流管理/index.html","8e1d794ba6c4c95f708a0310c6a7920b"],["/tags/数组API/index.html","482ffe4c7a56295f3daf55cbd5964b93"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","111310efc02989d433fb32e1dc20f797"],["/tags/文件上传/index.html","e9a9b0e7d90939d4da67085d7d0fccab"],["/tags/样式污染/index.html","3eda45d59124bbb99e500bae18f9f741"],["/tags/模块化/index.html","8aa597f492fbc1e1f29d4de70f20d6c9"],["/tags/浮动/index.html","a286862a0996092912169060a51531e4"],["/tags/渲染解析/index.html","5c14e664c37fb2b0ec17a9b0e5a81222"],["/tags/生命周期/index.html","a31c138b2b82dc7cc66041b24ebfc3a9"],["/tags/盒模型/index.html","d45077c0e6aa2678529be45a69b2ab36"],["/tags/移动端适配/index.html","9706a41e7b9fac322be1b9583295579b"],["/tags/类组件/index.html","ceca5be985d0d25beea5b4b9675c42c2"],["/tags/组件库-antd/index.html","0478d381c494503ea822876319f41fb5"],["/tags/组件通信/index.html","dbba53a839412a6134ae5a46ed0c3624"],["/tags/编译执行/index.html","cb39026dcb502013ca5981e48425fa63"],["/tags/网络请求/index.html","0eacb311e8c10263d50eeef31443abf2"],["/tags/虚拟DOM/index.html","3e633ff437b6c82676bf8e047a79bd3a"],["/tags/表单提交/index.html","447505dfc017b34fd9a52f891bc431c3"],["/tags/计算机课程/index.html","e5b42586963aa4edb41fb8c3367d9c50"],["/tags/计网/index.html","b86d77c7e829baf42a3a086b9f2c11e4"],["/tags/跨域/index.html","9239aee65c86233a06e652508ba051f4"],["/tags/跨域解决方案/index.html","d6908cc960236efc20f36eeafd5f7974"],["/tags/跨域问题/index.html","19f7b23a509c1a74ec3410a313704b67"],["/tags/路由管理/index.html","19ca69ea0b096e554a466480a03c8471"],["/tags/进程线程/index.html","7625e465b89579013ebed9b70ca3bd79"],["/tags/选择器/index.html","77ca772ce7b9a86e6afb8f7749e5fb23"],["/tags/选择器优先级/index.html","2eacc4b44605aca11d5bb9104e930607"],["/tags/隐藏元素/index.html","8e4d926bd01f7b9d16c4b2046ea8d60b"],["/tags/页面解析渲染/index.html","a9c0f1b4539ccdcb6c1d640df4af529e"],["/tags/预加载/index.html","da7ac47ed5dd8a1ac5e51c3e7d3051ee"],["/tags/驼峰命名转换/index.html","7e77810fb73e8d61a4469a3419deaf51"],["/tags/高度塌陷/index.html","a32c8cb61dfb5be9e19612e751941a6e"]];
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
