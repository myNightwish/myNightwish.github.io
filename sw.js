/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","45390346d5fd1d2df0dd357f05a1ceae"],["/archives/2021/12/index.html","0692f97dade50e82a21e7b0aced10812"],["/archives/2021/12/page/10/index.html","e013f354c88aa6b844ea4a7d8a5b283c"],["/archives/2021/12/page/11/index.html","6c138524714f53a4bef74f9e89cc6d2b"],["/archives/2021/12/page/12/index.html","6ceb400c9712df9a4ffafcebbffc4eb3"],["/archives/2021/12/page/13/index.html","ee0f90d8e4457b630acd2f9363427a22"],["/archives/2021/12/page/14/index.html","dd6e8d3f75f44b7138e2e5a0050e9343"],["/archives/2021/12/page/2/index.html","ee9e14f1c5aab383dc9218aed2824abd"],["/archives/2021/12/page/3/index.html","85514997eecff28a85a39683eeb5ae67"],["/archives/2021/12/page/4/index.html","c59fc4c2f9e6c61745a8bd65d3ad1e47"],["/archives/2021/12/page/5/index.html","8ad120cc583c043900786ad78fa544a8"],["/archives/2021/12/page/6/index.html","53a1c5fe17c9cc67e583220da9cfa88a"],["/archives/2021/12/page/7/index.html","e3e68977323ca3bafd88abedf70002c2"],["/archives/2021/12/page/8/index.html","69781861567659062b6adaf632d68365"],["/archives/2021/12/page/9/index.html","8f2708acd08fd532c680e070a0018dcd"],["/archives/2021/index.html","d0f7174b30c03622b1144233920e3523"],["/archives/2021/page/10/index.html","7dac0f343bd83a269d22f71ad1f97bff"],["/archives/2021/page/11/index.html","bf72434a146f900ceb5e553e4d8e23dd"],["/archives/2021/page/12/index.html","8f32fc8eb69fe37b9af86bbf899df5ab"],["/archives/2021/page/13/index.html","21c286c8df3ed1b25c09335429db3682"],["/archives/2021/page/14/index.html","e5d38154cd0590d2778f14da319472c7"],["/archives/2021/page/2/index.html","2d96ec5a9ff94144be651cce364faad6"],["/archives/2021/page/3/index.html","a7dbdd45353688ea885e2371228798e3"],["/archives/2021/page/4/index.html","a11464998ef5af5cbcf46037d5404634"],["/archives/2021/page/5/index.html","6fdd9e5c3dc074e212c325c0e93a037d"],["/archives/2021/page/6/index.html","a3288d5ca645ababb0b0a06a9e8aba8a"],["/archives/2021/page/7/index.html","e3617f72f6b1f21521a7311e868da995"],["/archives/2021/page/8/index.html","30149344e38d6a5c49c2826367c41236"],["/archives/2021/page/9/index.html","2c0169cbbfeab1ae3556734da37a66e7"],["/archives/2022/01/index.html","8063f773c16cc43dda10e9c28310d5fb"],["/archives/2022/03/index.html","f8f131ecd5b8b64288a53194a6f04545"],["/archives/2022/03/page/2/index.html","eb01d3229cca8fcc591e9ee04f72d293"],["/archives/2022/04/index.html","61ee43be0160677d19e2408e4aa567f6"],["/archives/2022/04/page/2/index.html","ea6aa55b443e794aaf22445031804500"],["/archives/2022/05/index.html","43174d1f3da31c82635dbc50427d7c79"],["/archives/2022/06/index.html","27a878071c44b0b85166c9c0271da85b"],["/archives/2022/index.html","05782853a16f316f76f8caa7dae4febb"],["/archives/2022/page/2/index.html","2b00ce49b04bc85288269484d422a6e7"],["/archives/2022/page/3/index.html","61f0d03f7538ae461f03ef0fdce6aab3"],["/archives/2022/page/4/index.html","0e7af17f54bd8e238aa269289bb65f0a"],["/archives/2022/page/5/index.html","4bbbb2744767d537b6a2bcc0291c45b2"],["/archives/2022/page/6/index.html","acbb1dc6d50964770da8d1b596ef62e7"],["/archives/2222/03/index.html","3ac33332e2c94cfaab794e2b5a374553"],["/archives/2222/index.html","b3eef0c81eb880da0811196462f58f09"],["/archives/index.html","f81cb2dcdb5c6c81356401106b021e9b"],["/archives/page/10/index.html","a235ffd51420f51cdb8be2777083811e"],["/archives/page/11/index.html","be1adb03421bafb717d638878a22b7ed"],["/archives/page/12/index.html","a9044415a910e69fb47cb40c97ad393c"],["/archives/page/13/index.html","90c8da9e29746696265ac1c39a2416d3"],["/archives/page/14/index.html","7efd88ed82482380dd45dbd5b296c515"],["/archives/page/15/index.html","8abc2c2426cfe6cf2a980ba9b525fce9"],["/archives/page/16/index.html","4f9fefe363517c92b6f7a2dffbb2d925"],["/archives/page/17/index.html","080c252c3c1bb1d002f2c393c7a42f13"],["/archives/page/18/index.html","4dd29d6eb255fc6001ffe0412f12c61a"],["/archives/page/19/index.html","91b3f16b24fdabfcc64bb4018cae0c41"],["/archives/page/2/index.html","8f88b6e5de7636dd8e6ec091a8f8dfb9"],["/archives/page/3/index.html","ac3938a53118f300996f36757a2e10f6"],["/archives/page/4/index.html","a5fd11d0a579284ebfeee1206f2203a9"],["/archives/page/5/index.html","21e948fc79187614162b5ca5791e81e8"],["/archives/page/6/index.html","68a030e53d31079873ce513dd8571af8"],["/archives/page/7/index.html","b2524ae89a0c6fe33299462f22c670e9"],["/archives/page/8/index.html","c45bfa54fc5de56ce964d22de31e101a"],["/archives/page/9/index.html","df83283477006f57d795e962ac7cf145"],["/books/index.html","d9b0d96b5282ce5a3a278de263ed1a8f"],["/categories/1-1-CSS/index.html","cdd0bb0ef7af94024a3bb1e5304df51f"],["/categories/1-1-CSS/page/2/index.html","11172d6c66327e1c2b9a7621bcb97e90"],["/categories/1-1-CSS/page/3/index.html","e2030b10dde46865b24ebbed2aa04cb2"],["/categories/1-2-JS/index.html","c93d4611a6da75d2529a296e60825e47"],["/categories/1-2-JS/page/2/index.html","9099c514fccaa3dd24c551b844740d6e"],["/categories/1-2-JS/page/3/index.html","8c867f0164018683ed9f74d0f1a2616b"],["/categories/1-2-JS/page/4/index.html","536379d7c8261581dff219bd413bf87c"],["/categories/1-2-JS/page/5/index.html","ad9110c2500f0c0afd08565c075a2249"],["/categories/1-3-Ajax/index.html","daf1b73aca7223bdac84ce8c1dc83fd7"],["/categories/1-4-框架/index.html","4cc6a904ace8aacf5b6eecc7a73d03a0"],["/categories/1-4-框架/page/2/index.html","d51a6e442f1525e73dcd97fb975d3fba"],["/categories/1-4-框架/page/3/index.html","6270d4234e6e7e8263c17cb4c3b65d8e"],["/categories/2-1-组件库/index.html","c8eb25ebbe062502140f41fe3ea17e0a"],["/categories/2-2-基建/index.html","39f4e25adc397ea4e02a834bc5404467"],["/categories/2-3-实现Tricks/index.html","1a3fe2d1140b7212ec3d16049592ca05"],["/categories/2-4-项目/index.html","6931168ed0e75cfe4c7a6ab4e2231ae3"],["/categories/2-4-项目/page/2/index.html","bb7c2873091d1a70bd4a606efada10c1"],["/categories/3-1-记录/index.html","585d1751074385a7040a4ff4653ea223"],["/categories/3-2-浏览器/index.html","5a54179d0329de159cd31b9b5a9f9b92"],["/categories/3-2-浏览器/page/2/index.html","9739a51e93e36f02a23e7646fea573b7"],["/categories/3-3-基础/index.html","4c0517c0e323f63d13be68018882cd73"],["/categories/3-3-基础/page/2/index.html","0f833b426a5254142058524cead76990"],["/categories/3-4-Tool-Shell/index.html","e2099469cd44dcdcddb738940405658e"],["/categories/index.html","0f82f9d4a521be5e5cc82dea5556168c"],["/charts/index.html","bcb99de40f9745daf8b0f562c33b7513"],["/comments/index.html","76418c54ca70241753e593ffd64bc77d"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","9229df9cece568c419b85e8e848da9c7"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e84987a00d3dd19e0ceb41861d85609a"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","e1a9d78be5ec38b1a6fe57db93f4f532"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","eb064c0bf0e468358ff5eac597605bfe"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","035d0933e01fc653b658ff00ac74fc3b"],["/music/index.html","8f8c5e898e9ae8e286767bc79dbdc5f3"],["/page/10/index.html","f0d9435677330b572098eaa61a87c0c2"],["/page/2/index.html","19f38a0347ceda30a41b96f4b3dd8047"],["/page/3/index.html","b542270cd92b2fd93ef636107d0c58c3"],["/page/4/index.html","d0b77535e0b4342a777922ad7a73eb63"],["/page/5/index.html","cd09c1bcb9b0482a895ebe7fd10b302a"],["/page/6/index.html","b238fd9bed42d70b801667455d4a038e"],["/page/7/index.html","85cf257b51209b61249b561de7882a18"],["/page/8/index.html","234b1d3828462f6f175ad177adbbe402"],["/page/9/index.html","62cc15fd0d3f574bafea08371ecc6f4c"],["/posts/1003179605.html","d5625d9e11c4a36cce8d06b9b7ac7533"],["/posts/1078088869.html","2f8753b830d1518562280977066c8783"],["/posts/1168384896.html","db30e87749de96d5cffca3328909fe7a"],["/posts/1174755164.html","237a531c49a223ebf15d33b888f640fc"],["/posts/1207877865.html","9a5d965886c4420dca242a5096736635"],["/posts/1322992885.html","169ad7756d373735f0528bb88fa4a398"],["/posts/1405183845.html","780b7707540c23edffb3d5bcf5251d6b"],["/posts/1460941642.html","c83a0aca3009ec86a235e2171584ed89"],["/posts/159855229.html","663516cb963800ed87224b5cd0e5822a"],["/posts/162997961.html","2e8dc14e3045a28c82c09ccb4c0f2e60"],["/posts/1634682499.html","56689044210d6be63bb5db99e8f35021"],["/posts/1720673220.html","3518b7ae1f46e93ed6b589cd9bf314ce"],["/posts/1794184575.html","4cea25a00bc135147cfb5cb9ec8f69a1"],["/posts/179783341.html","6d456a9fb668099d75042f4d03a4853c"],["/posts/2007769797.html","9736de494d801f02710fa871f9f2364d"],["/posts/2062301197.html","86446cc569f8962d2d127e08317275d0"],["/posts/2071449193.html","c16165ae9218262d1fc0fbc82d233e9a"],["/posts/2075292597.html","591876f60e0565aa9fae5ef1cc610c56"],["/posts/2124882507.html","39f800043593e45800b2f29dc752ed06"],["/posts/2131155013.html","2940ae722baa2a46381862e4dfac19b5"],["/posts/2169143571.html","f5e6da1f2cd764b7cd3d3b5edb282173"],["/posts/219349139.html","7cfd9089a7a23955cd611a0476430e2c"],["/posts/2217063026.html","af58ab1b0eb72fe8a3c244f51a532ef7"],["/posts/2218506745.html","664c01f654841e2b2afd52ece8d71538"],["/posts/2292260110.html","0b1cc9b4117ecfa3043fe15c0f2cc7e3"],["/posts/229643181.html","e493919a62a8b6cd81a412746d9cd0ea"],["/posts/235914813.html","addfb6a274ed27022e40b9ab83cebdc2"],["/posts/2387908466.html","389476c82175665aa013b15bc327ff68"],["/posts/2580568501.html","ce5dc21429f625a3754ffff4e1b4c2bf"],["/posts/2621268747.html","caab1f7b520f38f02e1b410462f1cec9"],["/posts/265724518.html","51a26c15056892f540263076eb44521f"],["/posts/2716721158.html","b4785efa105a8659648484712b73ca60"],["/posts/2747544176.html","f3523b8756f694cb8d683613a8e17713"],["/posts/2799443321.html","077881247b81a1e6d2b65d790411b6af"],["/posts/2803057116.html","49f5b15883d63fff575344505cf2bf1e"],["/posts/2818550155.html","d686046252c6afbd4399473630d48a4d"],["/posts/282252185.html","1c93eeac39469954e8bf90a89b76a58c"],["/posts/2959925095.html","2d8b837f21ac8aa5f402e337fbac379f"],["/posts/2971665882.html","8c36fd5e6b35ee1428a42a5f24389438"],["/posts/3067404590.html","b420fc65476531f315fd83d278db01d4"],["/posts/310999178.html","8716520f89e216b01585d204f8401c40"],["/posts/3120977046.html","f2e49cfb4b67a108bf3edbda66af3581"],["/posts/3253065341.html","06f387b05c45858daa5796d7394b1435"],["/posts/3253305718.html","a2b6e9cfa222e4f4ca7506d32d756e63"],["/posts/3384747987.html","a30627851477dbe5900b8ab3047f0700"],["/posts/349024060.html","d43c98e37ad0c8292fd85f5df5943396"],["/posts/3598970227.html","629dcaaf27b5174a3bd9b7071f967514"],["/posts/3611094049.html","5798b85fa999a56d48c964e659d74059"],["/posts/3631469724.html","3e1a10b985ad10a3bb4888e928ed9459"],["/posts/3691095479.html","e3ab48bd03b669bb3119d8174c0c6a0b"],["/posts/372934289.html","94e45af16807ed6d84ef64d51c5fbf45"],["/posts/3737997078.html","47a222a8f77bbd1fe5364c39a5fa5f6f"],["/posts/3783644122.html","f801e76eaff1e084b127769ac984ea00"],["/posts/3906205819.html","4d04c11052b8e7dde6d649b3c04a3c5c"],["/posts/3912543564.html","e8453cafcb82ecff514c6fd91b84a667"],["/posts/3998253138.html","4404f6681046af88a0421642e3895cc2"],["/posts/4075683688.html","60e0cce8ef6e2858f153ee6c52b72e7c"],["/posts/4184919567.html","4612b7502700a2e9b9de4f003fb0a4c6"],["/posts/428414458.html","777613180346440ff15355ab6993b991"],["/posts/4285860800.html","c9afa1ca359bf6f9f8121cedd247d1e1"],["/posts/50508479.html","2f0f85387f8d4a27bb202ccc21612f8b"],["/posts/511687579.html","4f8a4886213372151b96d98dd33b53e2"],["/posts/611441247.html","7d81e45862e915c7b2f844df03f5b509"],["/posts/619926249.html","79a26190d0cfc1415543379faba6e690"],["/posts/656350506.html","1ef582754fa8f77b8c1d3c315300409b"],["/posts/680535600.html","3962989ef87a7cd0ff3bc75b6f80a61f"],["/posts/684607466.html","11fcc5a141807ef1c918dfaa1a024cae"],["/posts/686254810.html","48da7d2f6f57ec85780cbc22d2a291bc"],["/posts/710205459.html","ff0b973213337432cdcb3fe2b74b2f3f"],["/posts/775935900.html","eb693a95504e523e673af50cc228a389"],["/posts/854292428.html","2df010803a5a4e475b4daf3e89fc7121"],["/posts/855735627.html","7e2b06167dafba280b8daa2decf9f0fb"],["/posts/867212230.html","76ab9d6add18a3102d32532ecef201d5"],["/posts/926905116.html","c80cf1506dbd0f9230b720b6d8f84d38"],["/posts/CSR_SSR_ISR.html","c2c6e1ce8405c73b08ce61eb1ae7824e"],["/posts/CSStricks-1.html","9da54e4883b5277c13f49739161acba5"],["/posts/CSStricks-2.html","916c067cff071b560cc345ba74df34fc"],["/posts/ES6.html","5946eac2df95abe2791f186db9dcc9af"],["/posts/HTTPS.html","dd072e4f030f6b55b327de60fd3807a2"],["/posts/React's Component.html","2932ac95e1247a5b6901235ef8ceddce"],["/posts/React's key Concept-1.html","dec5d717bac6a65cd141f6c6f43763f6"],["/posts/React's key Concept-2.html","90671a207e2fd43e2123eeaca3f09269"],["/posts/ReactHooks.html","1ed6a74d87e0bd1bb6602e813e377cf1"],["/posts/React_lifecycle.html","0436f37919bd7b1c5ca68305990279e3"],["/posts/URL_URI.html","d4d3c8ce7af2df7c4e46081e5ffeb133"],["/posts/animation.html","637e2ab1453493ed10627450a327985b"],["/posts/antd-data-show.html","1f7751198f3f73b58fbd947bbec89779"],["/posts/basic_construct_1.html","c1148510269331040722681612ee4246"],["/posts/basic_construct_2.html","2abd4b98909dcb7d5efb55555403b83d"],["/posts/better_performance.html","a1702a618dbb9219aa43498cbb614ecf"],["/posts/blogChange1.html","8d7ebadf201f27e7c4beadc6b41b5a90"],["/posts/blogChange2.html","860fff4783512e7f0032f84987882a21"],["/posts/cat.html","037ee47957f384b1474adae2dd6ba274"],["/posts/cookie&&session.html","9147f0a185f4191ef9a9713fa204bd94"],["/posts/feature-tricks1.html","08774c7cb49155de2c1599e9814147f6"],["/posts/file-read.html","ca97f4c6a0bffbbf2498877252821044"],["/posts/gap-property.html","57348d0395918791cefd6c45ec3a7070"],["/posts/hideElement.html","3532c01996d9edc5f28341269eb037f7"],["/posts/http-cache.html","dcafff63742c8381decfb92f69278c68"],["/posts/http_cache.html","0f7443116b77da0ddc0fee265dae8d3d"],["/posts/privateGame.html","f000009a01beb81126de2dab228f9d52"],["/posts/prototype.html","b07054f50a65b0ba802c78624a6a76f9"],["/posts/react_components.html","c2491c96a7fec27e1b7bbe4cef9a61a2"],["/posts/react_vue_data.html","7682af3904664fd17e3613385b489648"],["/posts/requestAnimationFrame_1.html","bfbadd15498eff2e33783179a3af70b6"],["/posts/scroll.html","7eee2b40027f705d05b1917533f965cc"],["/posts/toolsTest.html","bef483a58cbaf056f991044e55613e18"],["/posts/vue_lifeCycle.html","66ee19676288d10862583bcf77a21b5a"],["/posts/what's Hook.html","70bb1733e7746a6cd4f61c89dd29c6c7"],["/posts/why Hook.html","8df02971eb537fcf213e07c472cd5953"],["/posts/前端模块化.html","d4dbcb8c7563bb7fddfaa4813644feee"],["/posts/路由.html","e4e459bca46ae4db5eb3482a9190d969"],["/sw-register.js","661558e1a4c6adb37857d41d306f41b2"],["/tags/BFC/index.html","b7f182fb138aa7997e9e403c2a04262a"],["/tags/BOM/index.html","8948c3d1a099ee3e7d0c929cb98c3ba6"],["/tags/CDN/index.html","4caaa7ca211de9d17df5b93b9a75c330"],["/tags/CSS-in-JS/index.html","fd73dc121e6dfd95cf67f0e19420e23f"],["/tags/CSS/index.html","d29a271769b2e3a6ac2eb135eaad3d0f"],["/tags/CSS动画/index.html","dca44788377b5bcd288c2087c7ee153e"],["/tags/CSS属性/index.html","3775d16ad3bdbfabeba9dd0524a5ae0e"],["/tags/CommonJS/index.html","71af09d96acbf5fe66addba1a039f796"],["/tags/DOM/index.html","0bab0e52a2c16390951148e937d54c14"],["/tags/ESModule/index.html","0ecca97cf61f862f9506e648e123c717"],["/tags/EventLoop/index.html","25b872bb6cf5f3678a8f52ced89c8f06"],["/tags/Git/index.html","e175dfd274891ca170c83610430bb774"],["/tags/Github/index.html","577c361733b3e6ef6b9c1f012cdbb43d"],["/tags/HTTP/index.html","2284fe4495ac665761e1da5fa052220e"],["/tags/HTTPS/index.html","ae4e9eae9ea61c1009df8a505d97b5dd"],["/tags/Hook/index.html","801a6327ae0e08de740e62926f4e6388"],["/tags/Hooks/index.html","ae5de3964e9486e630a2b31702e4ff36"],["/tags/IFC/index.html","468701f70970ab035ed4d5fe0b3d693f"],["/tags/JS/index.html","13c108c2e6f1aeb71732fd7812d061aa"],["/tags/JS/page/2/index.html","f97ee4f235bd72ca9173e8fbf9c03520"],["/tags/JS/page/3/index.html","01be9696c0971c183d019d408a43216d"],["/tags/JS/page/4/index.html","334868c03d293bd7971dc8bc1bfd84bb"],["/tags/Node、Antd/index.html","16c38a582d8c0a06f89183b157d65dfb"],["/tags/Node、MySQL2/index.html","926136247672fc370adb7b2db336c964"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","461161323dc6d58df913cc548e24f8d7"],["/tags/Promise/index.html","6f667a8c156b63c30047581dd42dd767"],["/tags/Promsie、Async、await/index.html","c96e51fb7d76d67d8db0fcf640f7121b"],["/tags/React文档/index.html","8487d4efc35bf5b874f15868d153bc0a"],["/tags/TCP/index.html","918e99e511c39682b7edfc540c5240fd"],["/tags/Tools-Shell/index.html","5a91927ead0ad4f088921cff204b7989"],["/tags/UDP/index.html","2ccd4b6f4a73b388722cb588ba1d7e1e"],["/tags/URL、URI/index.html","9f8e328bba5f38ff51d52069d188bbbd"],["/tags/Vue/index.html","36cad3b92e6acaa5d0134932da9a53e8"],["/tags/ajax/index.html","1bab496a0135182392e972f64efa8abe"],["/tags/async/index.html","df6f92cde6a8f8c37252e812de15dde9"],["/tags/axios/index.html","8eee726e42cb5c37608887ed6410373b"],["/tags/codeReview/index.html","a9727dd02d733cb139c76a149496c87d"],["/tags/cssModule/index.html","f9906bf047b7962f8bec87af0e5e0992"],["/tags/defer/index.html","6b1ebd9785eb2396882daf7810c524e7"],["/tags/flex/index.html","bcb5f3effef0d6e62aa56e74d80f631e"],["/tags/index.html","04c1dbea2f202861fd2932b8b8a068b1"],["/tags/overflow、滚动/index.html","b9965fbf9cf7e1deed933e104bfc6de4"],["/tags/position/index.html","f19dae0dfdfde1c335b852d5cbb2eecb"],["/tags/requestAnimationFrame/index.html","6c3850c113d423fc70c2ed483a05f176"],["/tags/webpack/index.html","58685f430d6af8c8cc4db8f84088de71"],["/tags/webpack插件/index.html","9b4da6b91ce26f407b3220a3ee70ab90"],["/tags/webp图片/index.html","3d240cea435ae292290cfc95ced22f8d"],["/tags/二叉树遍历/index.html","345434a9228801ff4c2ee23fa5f99180"],["/tags/优化/index.html","efca9f7365d8789ec5420585668ed93f"],["/tags/函数组件/index.html","a6a7516db288d5826411963b65c349bc"],["/tags/前端基建/index.html","2da939667ab76692090ce9cf37f440aa"],["/tags/功能实现的tricks/index.html","c6f4e5be56ce7139e8da87bc4d26f2b2"],["/tags/去重/index.html","9fa981dddbc75dbf3b59c5b66e5f6b32"],["/tags/双向绑定/index.html","bd9f4f64ff4266f27437582c5d9090f0"],["/tags/响应式更新/index.html","8f33d8a1aaeabce8603289bf8ecee353"],["/tags/安全/index.html","1b942ec6802bc2a200ad55199e51bbe5"],["/tags/宏任务/index.html","43ca2f9b4d1817606de2e76c3d2d17d9"],["/tags/帧动画/index.html","ba2deb0adda9105719000d7d2b07e117"],["/tags/微任务/index.html","c661b5af861ad73de921d22d89841c40"],["/tags/性能优化/index.html","ead91a0adc931fa25557a542ca61c002"],["/tags/懒加载/index.html","c9b21ced18ad66965c390ceeb9eb3170"],["/tags/扁平化/index.html","56fc68a402a6eb407fc4d2178e2c3a56"],["/tags/排序算法/index.html","7a35e8887f80bfca58c7ad794201e9c0"],["/tags/数据流管理/index.html","b271eb96679cea9e5736f156f6ae93e6"],["/tags/数组API/index.html","447d6fa0659571f0e44d72d09a9c0475"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","2305bd4468df08e062777b3c7c5a6cb1"],["/tags/文件上传/index.html","79f9d3ad49f33c47c639971b9be41557"],["/tags/样式污染/index.html","be3a262013eb66b99343eca46e5b82d6"],["/tags/模块化/index.html","db8ed905777a3b0d0ead0eda101ddf0b"],["/tags/浮动/index.html","412d361f0ae8dd9997f288265567aa43"],["/tags/渲染解析/index.html","8e21d03ccd9d5e4a58dd615ce6726802"],["/tags/生命周期/index.html","26b0cffe94b8b7d8684bb2978d954cc7"],["/tags/盒模型/index.html","7d3ded6667ee554863cdb21558137303"],["/tags/移动端适配/index.html","33852a0bf337b01cedbde82d051e22b5"],["/tags/类组件/index.html","969225f8170e3aa563d815012c051f97"],["/tags/组件库-antd/index.html","53e136fa0658498ad69a9a6b7e1d6ff2"],["/tags/组件通信/index.html","476a0153f030bb9932e965695cb228ee"],["/tags/编译执行/index.html","3ed4ae83b69b81ec29f903c40a5dabeb"],["/tags/网络请求/index.html","85b3beddc71b48723e2ee6aa6f3c287f"],["/tags/虚拟DOM/index.html","acdbda8fb51437398645e9772039a01f"],["/tags/表单提交/index.html","17826d2ccedcd01ba51d06f9e7a45061"],["/tags/计算机课程/index.html","95270320a48e55d5a56c282d237e2c68"],["/tags/计网/index.html","cb8e2c0a937dff194305472cf89221b4"],["/tags/跨域/index.html","8e23cc5b9f0837760d47031be61a98ae"],["/tags/跨域解决方案/index.html","f852975fde9d9ca0e5a08d5a5800434f"],["/tags/跨域问题/index.html","862cacea3c9033ef9e3381a4b5a66748"],["/tags/路由管理/index.html","fd3eec29186d215006c65ede4d91481d"],["/tags/进程线程/index.html","669a877dc87637ba83372a51bba1f2f8"],["/tags/选择器/index.html","db299d6e16635b1b27c7fc9526670ca4"],["/tags/选择器优先级/index.html","5f41d74da27b54aae529dc1b57e9b9d6"],["/tags/隐藏元素/index.html","97f60388b730e70930a277a16cbf09c9"],["/tags/页面解析渲染/index.html","b607d7f76bd204d1e0fd8cfe0f76d9d2"],["/tags/预加载/index.html","895fbaa8980a35b68f744e504201c760"],["/tags/驼峰命名转换/index.html","efaad87966b30a063d63d5bb8cf754b8"],["/tags/高度塌陷/index.html","0de8568bee62bf60fd79d41fa3c8beff"]];
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
