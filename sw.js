/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","efe30aa7ec613900f9e5d21140294c0c"],["/archives/2021/12/index.html","b6d3f1179841b827dafdb50237b1ea67"],["/archives/2021/12/page/10/index.html","eeaa63f88f23f9d5f9c964204496aca5"],["/archives/2021/12/page/11/index.html","7c4672b9dba5aaafc1d3aac1345eab2d"],["/archives/2021/12/page/12/index.html","8e3e745bfad462d138ee2613bedf0f7c"],["/archives/2021/12/page/13/index.html","7d67dc8356f8bde966e6b486b7a834d2"],["/archives/2021/12/page/14/index.html","67631e8839ccd10b0a98950a05c84780"],["/archives/2021/12/page/2/index.html","a23442ba2d8ff6aa92170a38becc7896"],["/archives/2021/12/page/3/index.html","b44e34440a17c3e0b75792dbaa5f8804"],["/archives/2021/12/page/4/index.html","aa78a70ef06b8705c714a2f670494e51"],["/archives/2021/12/page/5/index.html","eadc884ab886147154ca46b95dc6e06a"],["/archives/2021/12/page/6/index.html","c15038e240d1467def626814d4eac497"],["/archives/2021/12/page/7/index.html","ac01b3077e3de66fd48a324451893ba3"],["/archives/2021/12/page/8/index.html","2406816819e2bc568a5eb26104baf80c"],["/archives/2021/12/page/9/index.html","5a5b3bf7a6bb95928f6d8e4e1d179841"],["/archives/2021/index.html","bb62556e7426a9fd8bc8e13b75c4185b"],["/archives/2021/page/10/index.html","83a28b29cc636bbb864ab9c4ed908018"],["/archives/2021/page/11/index.html","75f6e1574813c6de51a6cfa561102937"],["/archives/2021/page/12/index.html","55b338ba91d335dcf02b72e64abb9bed"],["/archives/2021/page/13/index.html","05a401fb7b88bb7b97fd1702b602ec0c"],["/archives/2021/page/14/index.html","c35f4d8b39dff1af1fe53f2872396fa6"],["/archives/2021/page/2/index.html","69a9a9d62746dec4388461b30b4c8798"],["/archives/2021/page/3/index.html","50c551e04517d79a48f673f0701b57c5"],["/archives/2021/page/4/index.html","0bff970d793a6b399a9c298592276647"],["/archives/2021/page/5/index.html","4ab7463b3927152eee315656147bb55b"],["/archives/2021/page/6/index.html","fbaaacabac5ab0781bb4c7ad11a63e23"],["/archives/2021/page/7/index.html","78e0bc43bd12aa8f7d52ac7bfdf3d96d"],["/archives/2021/page/8/index.html","cc37a0ba8f4955bf44782fe3322e1c0e"],["/archives/2021/page/9/index.html","dbc30f7d261e5e702e767b9247781ba0"],["/archives/2022/01/index.html","5a8448ce41b950c227b4bc3fe7c4483e"],["/archives/2022/03/index.html","7c8395c4f65c92287bfc81b1a4736beb"],["/archives/2022/03/page/2/index.html","6ee051cbf6cb6dd82dbcdc64feb459f7"],["/archives/2022/04/index.html","7fee2bc696c2bd464850fb577b9a2122"],["/archives/2022/04/page/2/index.html","b15ff7b4cafc11ba2abe4d0307bc83ef"],["/archives/2022/05/index.html","58d7db6635063a14113febfa2177530a"],["/archives/2022/06/index.html","4e630f9efa757e29b814b72983508388"],["/archives/2022/index.html","1d6b5194134379c42056ee1282d1baeb"],["/archives/2022/page/2/index.html","46dfa560f369f6e5476f6db90257448f"],["/archives/2022/page/3/index.html","35f872593d44e0f49c250b8854dbeede"],["/archives/2022/page/4/index.html","8b39bd7dbe71617780cec882e8efeceb"],["/archives/2022/page/5/index.html","506616028f00460d378f8e665a2f1f36"],["/archives/2022/page/6/index.html","0ac2334334cb46136f838711c7861afd"],["/archives/2222/03/index.html","3822b7c57199a457d62931a89954fb89"],["/archives/2222/index.html","515857d84daf886d47804a5db4411d6e"],["/archives/index.html","6ad5055f772da12a659c3c40814bf10f"],["/archives/page/10/index.html","2fa40f4fbb4fcf3c9898e99a8947cfec"],["/archives/page/11/index.html","15f6a4fd47df3e93481a4b64958f6862"],["/archives/page/12/index.html","b23ebb0ccea34aea2099d3df1d369536"],["/archives/page/13/index.html","cc63c80dd1fe6576ec1d2e5d3dd8ad90"],["/archives/page/14/index.html","baf221ce6d0a6096f5942da427c89275"],["/archives/page/15/index.html","0417dd032e47c084d382872e3abe02dd"],["/archives/page/16/index.html","e649bb8482136820a2b272d4e4f331c7"],["/archives/page/17/index.html","e6349c4277cc33f41e9cdd8d34b1f8d9"],["/archives/page/18/index.html","50c2ab3619f88ead68b4f6609e79eb35"],["/archives/page/19/index.html","295577ab71c8c259f1ab0222ffe1da35"],["/archives/page/2/index.html","c6d482524f38c2415a03ad15bcc760f4"],["/archives/page/3/index.html","f06349542c0716480e7afe9c30a828a5"],["/archives/page/4/index.html","54d8518439352fb3ff61df0872443b06"],["/archives/page/5/index.html","023f46b9bf42f2c385c42ea6e4646365"],["/archives/page/6/index.html","5378f0dde349ea37f0f3c22434d1c688"],["/archives/page/7/index.html","1d28de6fbffa74c1e67b3125232b8fb1"],["/archives/page/8/index.html","70f22fab9e24dfd4c133f52dacd7715b"],["/archives/page/9/index.html","1b47bceb779aa0a6b5844fa0ec074d97"],["/books/index.html","4128b0c6e8cccac393a9d9304600a3d3"],["/categories/1-1-CSS/index.html","63e8c2f3ecfd746ef8a38f31879a9ddb"],["/categories/1-1-CSS/page/2/index.html","2e5670d3ea0b17fb462ef4a70d812ce6"],["/categories/1-1-CSS/page/3/index.html","f210101475123cafe82bc8707cad25f1"],["/categories/1-2-JS/index.html","3cd015cb2b204839deeb781626dca507"],["/categories/1-2-JS/page/2/index.html","2924cfdc750f27fd12a54973cf7760a5"],["/categories/1-2-JS/page/3/index.html","049e38ab5b4db5a48f2ef540b046a514"],["/categories/1-2-JS/page/4/index.html","080b6af01c09e63a63754c774d7fa7e1"],["/categories/1-2-JS/page/5/index.html","730e599b9135a18cd20e717421f7ab67"],["/categories/1-3-Ajax/index.html","cb1c85249eadc819efb117b180895c4b"],["/categories/1-4-框架/index.html","a4b08b75697f96b305d7d60690c31a67"],["/categories/1-4-框架/page/2/index.html","cfac531ac593bb3651d3d1f2ec93f675"],["/categories/1-4-框架/page/3/index.html","b6de839ec85f4b2578914995d7d16851"],["/categories/2-1-组件库/index.html","182f0ef796401cb9339708260ae5ee22"],["/categories/2-2-基建/index.html","408ffca279d5b8cbe0f53f3af37ad0ab"],["/categories/2-3-实现Tricks/index.html","bc2100c831c9f460beea82dd278f32a2"],["/categories/2-4-项目/index.html","24631f4f2763e52e3e1dc0cfd9518052"],["/categories/2-4-项目/page/2/index.html","1e6cae91d96e50ac72e189c6a0931730"],["/categories/3-1-记录/index.html","87e5917fc72fb9fb93f2d3bcc4c192d9"],["/categories/3-2-浏览器/index.html","feeb053ae0b25f30911d2188ba5eac14"],["/categories/3-2-浏览器/page/2/index.html","957dc04378f5c4e2b0900676d45ff7e1"],["/categories/3-3-基础/index.html","09d425be1ad2d3113455f98e099bd504"],["/categories/3-3-基础/page/2/index.html","6a7a22a045a17bda0132046015a8c06e"],["/categories/3-4-Tool-Shell/index.html","28e3b9f2e168f3e82d5ef14419b277a9"],["/categories/index.html","23ac6854a3ea1d17f63e3f71513635dc"],["/charts/index.html","0b56d2713c5e2096c2fb1b7b2caff124"],["/comments/index.html","24c4f6c930c697fba67cda561e11286e"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","9229df9cece568c419b85e8e848da9c7"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e84987a00d3dd19e0ceb41861d85609a"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","e5835eb1a9c20de4d527bc4f6d638006"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","eb064c0bf0e468358ff5eac597605bfe"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","4d7ab18485b9becf10aceef67f6183dd"],["/music/index.html","c71bc6575d085366ebf844d0cf40be1b"],["/page/10/index.html","48d292fdc51145760954dc12bf09ec26"],["/page/2/index.html","cdfd4921041aa84f7d2f984dcb9a7f3b"],["/page/3/index.html","8733b56f57a2e252acc0184b8d541381"],["/page/4/index.html","84d7101155ce03eb8cac3ef3a4eaf89b"],["/page/5/index.html","a72645788524baf88f01fb32674b444c"],["/page/6/index.html","8e3a60b76704a04b014a622a8185c883"],["/page/7/index.html","fe4acd595f8932347f6a4591780d10b8"],["/page/8/index.html","272cf622fdd280959079b0792664ab45"],["/page/9/index.html","6b4b63f1527362f11b8d49ad7273d3e0"],["/posts/1003179605.html","d5625d9e11c4a36cce8d06b9b7ac7533"],["/posts/1078088869.html","2f8753b830d1518562280977066c8783"],["/posts/1168384896.html","db30e87749de96d5cffca3328909fe7a"],["/posts/1174755164.html","237a531c49a223ebf15d33b888f640fc"],["/posts/1207877865.html","9a5d965886c4420dca242a5096736635"],["/posts/1322992885.html","169ad7756d373735f0528bb88fa4a398"],["/posts/1405183845.html","780b7707540c23edffb3d5bcf5251d6b"],["/posts/1460941642.html","c83a0aca3009ec86a235e2171584ed89"],["/posts/159855229.html","663516cb963800ed87224b5cd0e5822a"],["/posts/162997961.html","2e8dc14e3045a28c82c09ccb4c0f2e60"],["/posts/1634682499.html","56689044210d6be63bb5db99e8f35021"],["/posts/1720673220.html","3518b7ae1f46e93ed6b589cd9bf314ce"],["/posts/1794184575.html","4cea25a00bc135147cfb5cb9ec8f69a1"],["/posts/179783341.html","6d456a9fb668099d75042f4d03a4853c"],["/posts/2007769797.html","9736de494d801f02710fa871f9f2364d"],["/posts/2062301197.html","86446cc569f8962d2d127e08317275d0"],["/posts/2071449193.html","c16165ae9218262d1fc0fbc82d233e9a"],["/posts/2075292597.html","591876f60e0565aa9fae5ef1cc610c56"],["/posts/2124882507.html","39f800043593e45800b2f29dc752ed06"],["/posts/2131155013.html","2940ae722baa2a46381862e4dfac19b5"],["/posts/2169143571.html","f5e6da1f2cd764b7cd3d3b5edb282173"],["/posts/219349139.html","7cfd9089a7a23955cd611a0476430e2c"],["/posts/2217063026.html","af58ab1b0eb72fe8a3c244f51a532ef7"],["/posts/2218506745.html","664c01f654841e2b2afd52ece8d71538"],["/posts/2292260110.html","0b1cc9b4117ecfa3043fe15c0f2cc7e3"],["/posts/229643181.html","e493919a62a8b6cd81a412746d9cd0ea"],["/posts/235914813.html","addfb6a274ed27022e40b9ab83cebdc2"],["/posts/2387908466.html","389476c82175665aa013b15bc327ff68"],["/posts/2580568501.html","ce5dc21429f625a3754ffff4e1b4c2bf"],["/posts/2621268747.html","caab1f7b520f38f02e1b410462f1cec9"],["/posts/265724518.html","51a26c15056892f540263076eb44521f"],["/posts/2716721158.html","b4785efa105a8659648484712b73ca60"],["/posts/2747544176.html","f3523b8756f694cb8d683613a8e17713"],["/posts/2799443321.html","077881247b81a1e6d2b65d790411b6af"],["/posts/2803057116.html","49f5b15883d63fff575344505cf2bf1e"],["/posts/2818550155.html","d686046252c6afbd4399473630d48a4d"],["/posts/282252185.html","1c93eeac39469954e8bf90a89b76a58c"],["/posts/2959925095.html","2d8b837f21ac8aa5f402e337fbac379f"],["/posts/2971665882.html","8c36fd5e6b35ee1428a42a5f24389438"],["/posts/3067404590.html","b420fc65476531f315fd83d278db01d4"],["/posts/310999178.html","8716520f89e216b01585d204f8401c40"],["/posts/3120977046.html","f2e49cfb4b67a108bf3edbda66af3581"],["/posts/3253065341.html","06f387b05c45858daa5796d7394b1435"],["/posts/3253305718.html","a2b6e9cfa222e4f4ca7506d32d756e63"],["/posts/3384747987.html","a30627851477dbe5900b8ab3047f0700"],["/posts/349024060.html","d43c98e37ad0c8292fd85f5df5943396"],["/posts/3598970227.html","629dcaaf27b5174a3bd9b7071f967514"],["/posts/3611094049.html","5798b85fa999a56d48c964e659d74059"],["/posts/3631469724.html","3e1a10b985ad10a3bb4888e928ed9459"],["/posts/3691095479.html","e3ab48bd03b669bb3119d8174c0c6a0b"],["/posts/372934289.html","94e45af16807ed6d84ef64d51c5fbf45"],["/posts/3737997078.html","47a222a8f77bbd1fe5364c39a5fa5f6f"],["/posts/3783644122.html","f801e76eaff1e084b127769ac984ea00"],["/posts/3906205819.html","4d04c11052b8e7dde6d649b3c04a3c5c"],["/posts/3912543564.html","e8453cafcb82ecff514c6fd91b84a667"],["/posts/3998253138.html","4404f6681046af88a0421642e3895cc2"],["/posts/4075683688.html","60e0cce8ef6e2858f153ee6c52b72e7c"],["/posts/4184919567.html","4612b7502700a2e9b9de4f003fb0a4c6"],["/posts/428414458.html","777613180346440ff15355ab6993b991"],["/posts/4285860800.html","c9afa1ca359bf6f9f8121cedd247d1e1"],["/posts/50508479.html","2f0f85387f8d4a27bb202ccc21612f8b"],["/posts/511687579.html","4f8a4886213372151b96d98dd33b53e2"],["/posts/611441247.html","7d81e45862e915c7b2f844df03f5b509"],["/posts/619926249.html","79a26190d0cfc1415543379faba6e690"],["/posts/656350506.html","1ef582754fa8f77b8c1d3c315300409b"],["/posts/680535600.html","3962989ef87a7cd0ff3bc75b6f80a61f"],["/posts/684607466.html","11fcc5a141807ef1c918dfaa1a024cae"],["/posts/686254810.html","48da7d2f6f57ec85780cbc22d2a291bc"],["/posts/710205459.html","ff0b973213337432cdcb3fe2b74b2f3f"],["/posts/775935900.html","eb693a95504e523e673af50cc228a389"],["/posts/854292428.html","2df010803a5a4e475b4daf3e89fc7121"],["/posts/855735627.html","7e2b06167dafba280b8daa2decf9f0fb"],["/posts/867212230.html","76ab9d6add18a3102d32532ecef201d5"],["/posts/926905116.html","c80cf1506dbd0f9230b720b6d8f84d38"],["/posts/CSR_SSR_ISR.html","c2c6e1ce8405c73b08ce61eb1ae7824e"],["/posts/CSStricks-1.html","9da54e4883b5277c13f49739161acba5"],["/posts/CSStricks-2.html","916c067cff071b560cc345ba74df34fc"],["/posts/ES6.html","5946eac2df95abe2791f186db9dcc9af"],["/posts/HTTPS.html","dd072e4f030f6b55b327de60fd3807a2"],["/posts/React's Component.html","2932ac95e1247a5b6901235ef8ceddce"],["/posts/React's key Concept-1.html","dec5d717bac6a65cd141f6c6f43763f6"],["/posts/React's key Concept-2.html","90671a207e2fd43e2123eeaca3f09269"],["/posts/ReactHooks.html","1ed6a74d87e0bd1bb6602e813e377cf1"],["/posts/React_lifecycle.html","0436f37919bd7b1c5ca68305990279e3"],["/posts/URL_URI.html","d4d3c8ce7af2df7c4e46081e5ffeb133"],["/posts/animation.html","637e2ab1453493ed10627450a327985b"],["/posts/antd-data-show.html","1f7751198f3f73b58fbd947bbec89779"],["/posts/basic_construct_1.html","c1148510269331040722681612ee4246"],["/posts/basic_construct_2.html","2abd4b98909dcb7d5efb55555403b83d"],["/posts/better_performance.html","a1702a618dbb9219aa43498cbb614ecf"],["/posts/blogChange1.html","8d7ebadf201f27e7c4beadc6b41b5a90"],["/posts/blogChange2.html","860fff4783512e7f0032f84987882a21"],["/posts/cat.html","037ee47957f384b1474adae2dd6ba274"],["/posts/cookie&&session.html","9147f0a185f4191ef9a9713fa204bd94"],["/posts/feature-tricks1.html","08774c7cb49155de2c1599e9814147f6"],["/posts/file-read.html","ca97f4c6a0bffbbf2498877252821044"],["/posts/gap-property.html","57348d0395918791cefd6c45ec3a7070"],["/posts/hideElement.html","3532c01996d9edc5f28341269eb037f7"],["/posts/http-cache.html","dcafff63742c8381decfb92f69278c68"],["/posts/http_cache.html","0f7443116b77da0ddc0fee265dae8d3d"],["/posts/privateGame.html","f000009a01beb81126de2dab228f9d52"],["/posts/prototype.html","b07054f50a65b0ba802c78624a6a76f9"],["/posts/react_components.html","c2491c96a7fec27e1b7bbe4cef9a61a2"],["/posts/react_vue_data.html","7682af3904664fd17e3613385b489648"],["/posts/requestAnimationFrame_1.html","bfbadd15498eff2e33783179a3af70b6"],["/posts/scroll.html","7eee2b40027f705d05b1917533f965cc"],["/posts/toolsTest.html","bef483a58cbaf056f991044e55613e18"],["/posts/vue_lifeCycle.html","66ee19676288d10862583bcf77a21b5a"],["/posts/what's Hook.html","70bb1733e7746a6cd4f61c89dd29c6c7"],["/posts/why Hook.html","8df02971eb537fcf213e07c472cd5953"],["/posts/前端模块化.html","d4dbcb8c7563bb7fddfaa4813644feee"],["/posts/路由.html","e4e459bca46ae4db5eb3482a9190d969"],["/tags/BFC/index.html","dd3db39fc4b16d0f9750770fe8bffd84"],["/tags/BOM/index.html","cf23673030b650dfcdd640eb5e02268d"],["/tags/CDN/index.html","f6add3fb3b5f2f6c787281df62b44643"],["/tags/CSS-in-JS/index.html","2fc384ab87a82720ff1857d29464cd25"],["/tags/CSS/index.html","929bb0a289ffd7d093e138b2ee1c5014"],["/tags/CSS动画/index.html","1608e5e7cd3cf877fa4d0cfba659e61e"],["/tags/CSS属性/index.html","431c0eea45127b17f4ed39dbbf89b48f"],["/tags/CommonJS/index.html","3e567190622fffe083be75cd34d583f5"],["/tags/DOM/index.html","d3a58a841f3731611cd21eed62902eb5"],["/tags/ESModule/index.html","7c369980cce750146cf936db2e4108ae"],["/tags/EventLoop/index.html","b280912cefbdd6b558a49f46d8f42ebe"],["/tags/Git/index.html","e614ba188a825cae5616684099a75fbd"],["/tags/Github/index.html","b2d2f31f4ef232e536ebfa4ca0c6e8d4"],["/tags/HTTP/index.html","c2f47ad07bda6dba4f9e6fb5d76c30ee"],["/tags/HTTPS/index.html","f1509e50024a19543f79415472971bcc"],["/tags/Hook/index.html","92347297a692040d14488495f1f30011"],["/tags/Hooks/index.html","2856b46f73715fde8a0210652c2d1092"],["/tags/IFC/index.html","121d2e9d532aaec7b0ee939901f754df"],["/tags/JS/index.html","a2f74bb37bdf9055207ca463173bf585"],["/tags/JS/page/2/index.html","14676fe8fab2b11ebff3f31de1b0bbc2"],["/tags/JS/page/3/index.html","5eaec78f22aa9141e00f9a20eb7d48d3"],["/tags/JS/page/4/index.html","a423e7ec4234c26eb4021eca849476f1"],["/tags/Node、Antd/index.html","3a9c23169b212c3bee2d024da5f73d6a"],["/tags/Node、MySQL2/index.html","68d076cb903e11c6708ee46bd1130cea"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","44e0976a77e535c8d6e1caf34224ae67"],["/tags/Promise/index.html","1cf1cdf990c62819eb531f8ad3af0043"],["/tags/Promsie、Async、await/index.html","c6143db580cd2b312699ced609d5ede3"],["/tags/React文档/index.html","700d3d4bc3fecda4665f1c523dc7b762"],["/tags/TCP/index.html","7f21fc29685130469fe89e8c1c3f5d43"],["/tags/Tools-Shell/index.html","85e1f2ee2de9102c7ac146e1d6ce6758"],["/tags/UDP/index.html","cda9b68061d37d71543af866fa811c9c"],["/tags/URL、URI/index.html","c539ebac2c66960ee5bbac0900fc0891"],["/tags/Vue/index.html","01adbaa4737305f84b014c6a0b84b3c7"],["/tags/ajax/index.html","91d5b9cc702c89a8fe8339f52cf669fb"],["/tags/async/index.html","9bd3cf7775e2788475c6e57c3538a203"],["/tags/axios/index.html","ee0c7a768107caa9c064073a7831c4ba"],["/tags/codeReview/index.html","ac6427e6867da129f68ea768c161c630"],["/tags/cssModule/index.html","e50d652021fd8cd91adc19d528613e92"],["/tags/defer/index.html","ce5e714a1a7ebef652b8a294aae2c273"],["/tags/flex/index.html","abd8c1f41e9e8a8c0b650cfad0ebe0b7"],["/tags/index.html","9af44c01aad43f68250b217972234aaa"],["/tags/overflow、滚动/index.html","ec5a44f1026d201f27feb5b28c320636"],["/tags/position/index.html","7271751595ca923f2d5d20b39f77fda3"],["/tags/requestAnimationFrame/index.html","a2b8cc6ead866bb612c5459d153a6a06"],["/tags/webpack/index.html","a33ee3b9841bb3afe04def0472a5a05c"],["/tags/webpack插件/index.html","2cd744c734ecf0634754ada17c25a2cd"],["/tags/webp图片/index.html","e7200866baec6920c3e8ba3cb7a187e5"],["/tags/二叉树遍历/index.html","c508082b9862a527692cff2aedb14b05"],["/tags/优化/index.html","7a26440386ec0e7c2b98d1e84fe385e7"],["/tags/函数组件/index.html","b4f2fba63b7cc8642bf5f6c5b2ca6f88"],["/tags/前端基建/index.html","c6f14dd014316b4bd08f07f264a92e03"],["/tags/功能实现的tricks/index.html","310e34068b40d94940a649926b522aa0"],["/tags/去重/index.html","95b0be3bc57842f12d766166bcb0de48"],["/tags/双向绑定/index.html","720f54a1fa363b43847798e0af056c87"],["/tags/响应式更新/index.html","377835f901203864609e4fdd84ce39b0"],["/tags/安全/index.html","272af6dc0fc38787ec84ad3e2723aadf"],["/tags/宏任务/index.html","7894b3408091a7355c5fd92b1a0b59f4"],["/tags/帧动画/index.html","5097975eba6b5857e06a99c30071e3ac"],["/tags/微任务/index.html","f0c156a186db7f8a8db53117b09e70f6"],["/tags/性能优化/index.html","2e6af2a7260cdd3725420f7bb3af7215"],["/tags/懒加载/index.html","a66ed7f7cdb3f49a28fd84d4cf855337"],["/tags/扁平化/index.html","deadc1f60e131b436c37e5e0936a8e90"],["/tags/排序算法/index.html","44adf7b02a4ae8fa6d7f3209b4c8a798"],["/tags/数据流管理/index.html","6c68f89c6045b88ddc7c75d584f95253"],["/tags/数组API/index.html","928f4d628b469da89dc564d5452ffe54"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","127677d93022de78aa8a133d1f699caa"],["/tags/文件上传/index.html","0699324004e97e55b131a4c6b96df232"],["/tags/样式污染/index.html","22df435f2a88060b0330da126b7f91b3"],["/tags/模块化/index.html","2a8aecdddd6d3fb297805c04d3219fcc"],["/tags/浮动/index.html","fe39f99941492510740e290b9e43628d"],["/tags/渲染解析/index.html","eff9ad84337755d5e72a02837190bbb7"],["/tags/生命周期/index.html","1d05938f32da508c0d4d62b60d2c5b5d"],["/tags/盒模型/index.html","c1c8eaba8efc87ee1b7467dcdcf2bbce"],["/tags/移动端适配/index.html","680a3f6c828e593bc4bb2397c7b08107"],["/tags/类组件/index.html","7388599a2ef5c61355276048dd983f23"],["/tags/组件库-antd/index.html","02c498fd4cd418755edcc105e6d0c4e5"],["/tags/组件通信/index.html","fc68c87da57ff390e973cd85cb658fa1"],["/tags/编译执行/index.html","fd32cc1b3a9d67ad2ab6a4e491feb02a"],["/tags/网络请求/index.html","4463acf2dccdeaa4d60cdce162923b6b"],["/tags/虚拟DOM/index.html","9fa2f43b40a459bf958199c4a6724dc3"],["/tags/表单提交/index.html","4239a9193ab847821affc4409b74dbe2"],["/tags/计算机课程/index.html","e3efdd472e8aabf997a9da8bbc529fea"],["/tags/计网/index.html","1a912f5cbaa09e78608c8a264d167468"],["/tags/跨域/index.html","7b6e6157fa49b1e29f59c2a545fd6579"],["/tags/跨域解决方案/index.html","d09d3dc702cc65e49bd107ae771e46b5"],["/tags/跨域问题/index.html","5f9bdc191d252dfc5d857e1c1898a9ba"],["/tags/路由管理/index.html","6c9a9ed873631a9a1e68e55ff11a5591"],["/tags/进程线程/index.html","c107f8955df820693bd4f128c965b6d3"],["/tags/选择器/index.html","173962a11396cfd366e111e35fa1ba8a"],["/tags/选择器优先级/index.html","70cc410cd73f0edb3dfed09a6b0bf502"],["/tags/隐藏元素/index.html","ea3f5a9db02c7ca17503e4a2d4994893"],["/tags/页面解析渲染/index.html","9d422208ab1d5e43b9e1b7d1b4eaeaf7"],["/tags/预加载/index.html","a05762389520ceb7a56933df2eb2d804"],["/tags/驼峰命名转换/index.html","3cf15e3497e98db2210bb16bc2c9e067"],["/tags/高度塌陷/index.html","5b5d2f92a2f26680e4775c39c0188595"]];
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
