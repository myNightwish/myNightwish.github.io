/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","c77de62e9b7dff57e75e739f7dee9891"],["/archives/2021/12/index.html","4f11413a8a6b4e46488acbac9cb398f1"],["/archives/2021/12/page/10/index.html","008100c6918e495fd22840e6548bdbf3"],["/archives/2021/12/page/11/index.html","8837f0b3c1f7a8e43439642d65c09e6e"],["/archives/2021/12/page/12/index.html","d9e0f266b43303db6e73cff7dc8a0f39"],["/archives/2021/12/page/13/index.html","a86f8a61ead2720897113bd23e97bcbf"],["/archives/2021/12/page/14/index.html","43f7fb9ad3ac45a2a3740caec01e0fe6"],["/archives/2021/12/page/2/index.html","7b4d4234cfec6570be110a39f325503a"],["/archives/2021/12/page/3/index.html","456f549bb4fff03d26c960041a5c0367"],["/archives/2021/12/page/4/index.html","5bb8425eea77ccbf7bf6c2ff8153234e"],["/archives/2021/12/page/5/index.html","903fb8b5a9cfd24fc01f269bba616d1c"],["/archives/2021/12/page/6/index.html","f5a97b00a0ff70cbae4b0b66ad836cbb"],["/archives/2021/12/page/7/index.html","aba1964c0f2ef4a0743ae8653b6aa76e"],["/archives/2021/12/page/8/index.html","86e660b571b4d15a9ac997994bfec1db"],["/archives/2021/12/page/9/index.html","7884f738fe765650bd89854d7d217c0d"],["/archives/2021/index.html","534cb0584902778f054fbdf4fe1f66ff"],["/archives/2021/page/10/index.html","e85a672bd16ae9c5487187368a892739"],["/archives/2021/page/11/index.html","ffddb751bb8f1c9c97db3f3c3e006bac"],["/archives/2021/page/12/index.html","a51255a14567ce4ff64a6e3442348f51"],["/archives/2021/page/13/index.html","dc3ce25f74e9c12ab347b96fac826954"],["/archives/2021/page/14/index.html","bc9a4720e077dc4837e868eacaa38b3d"],["/archives/2021/page/2/index.html","d5e325bccef68278e9384f33cd71ebba"],["/archives/2021/page/3/index.html","4b522875bf1bf129fe9c5127e9a672e6"],["/archives/2021/page/4/index.html","2692a12f3f45b997fc5f3fc504e88249"],["/archives/2021/page/5/index.html","ab551d6baaceb914bd87372538cd43c1"],["/archives/2021/page/6/index.html","617068798bbcbfb5efd434530dc51650"],["/archives/2021/page/7/index.html","d3cefe7dae6382de68efc726a6197486"],["/archives/2021/page/8/index.html","d7e5d10b018528cecb5648cc365d3612"],["/archives/2021/page/9/index.html","fcbaf242b914e04a7e4c96bae2ad235a"],["/archives/2022/01/index.html","c7ef355bb7782e4e8fd5b66850ec4506"],["/archives/2022/03/index.html","d34ce1abd9e82da0b0e7cc8ed491d273"],["/archives/2022/03/page/2/index.html","7b6bac8b41e03647c4f47a391ac8e675"],["/archives/2022/04/index.html","ca56a56823349df91427e72e4dfccea4"],["/archives/2022/04/page/2/index.html","86212222ce257fde4642f49656de93fa"],["/archives/2022/05/index.html","b0092ccecb7fe1b7771a8abcaa4a5a6f"],["/archives/2022/06/index.html","06e8caa72ced96b79e35016675acfed3"],["/archives/2022/index.html","d732f2e825bba9d6a6d1fe09dc95d37c"],["/archives/2022/page/2/index.html","b5ab60adc9e4a38ad33a08b69dda0d3a"],["/archives/2022/page/3/index.html","90e3fd9cc2c324591c9c3d1238b97b9f"],["/archives/2022/page/4/index.html","89f8a9597502ff25432c6c9e7b22f486"],["/archives/2022/page/5/index.html","2280af2d28316199d7fafdf2afdf5044"],["/archives/2022/page/6/index.html","1779769f66e890909906bd87825b5f5e"],["/archives/2222/03/index.html","32e59e513562641b50523855efc57857"],["/archives/2222/index.html","453562f87b816dc1c42962e6ff29b76b"],["/archives/index.html","582b6f4db1a335250fb34f82f7b90789"],["/archives/page/10/index.html","5aaa21ed2d14b24e572683b89eb1f0f4"],["/archives/page/11/index.html","be91087994a9b4fe84b27fc09a568bcd"],["/archives/page/12/index.html","c442306aeaa98f4752bd6f4d1b728034"],["/archives/page/13/index.html","51d109ddcc0135c30cc91e927ad095fb"],["/archives/page/14/index.html","4063638c214cda07084ff0f5e7f0bac2"],["/archives/page/15/index.html","b10977e0e83ebb561fc864395f12337b"],["/archives/page/16/index.html","65c19f2af7ae22dfdca9adb70c0a3ae4"],["/archives/page/17/index.html","334ce4ae83c00726553824afbbd1e23f"],["/archives/page/18/index.html","5b63bb29fbe203a0d367db9d4e18af45"],["/archives/page/19/index.html","7c616c7a0e1b7e25dd18163fb12ad0c9"],["/archives/page/2/index.html","657cae4b5bae877f2cd0fffbcc246051"],["/archives/page/3/index.html","7ae5e0cda79e6ae4394bc3c457b7593d"],["/archives/page/4/index.html","b5459f3504c1bf9fcdd4c45b19f325af"],["/archives/page/5/index.html","764e20ae61766572b9cb8da9123c4e66"],["/archives/page/6/index.html","1a3449f29e85209363aa8012ea4db128"],["/archives/page/7/index.html","e345edc5e95b64c2e7ab94b310e45c6d"],["/archives/page/8/index.html","92db2c92a9520b83ae008cb793d518ce"],["/archives/page/9/index.html","785e5145ba9956eccb5e6b7471ba07e3"],["/books/index.html","bab3fe08e02020c161f19e1277236060"],["/categories/index.html","1df38cbbec4afcffa1b3c8bb2feb4f45"],["/charts/index.html","bb1f87cafc8d5cc43c46c25f4b269145"],["/comments/index.html","de10ed041564109a87ee5a594ecc95dd"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","1684ee2dc3af92f576dc9eeb723ce713"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","09f7e2918041ae842b0193f22a057ead"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.woff2","b73f13e38628ef4e65f7b7073c70eb46"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","8f72401f1ed7ef1f7ee65d1065fa49c9"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","285bb5a986a2892038957601905a6b53"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","e8bca312739fba9518834846edb288af"],["/music/index.html","025b6dd4946a3a35b861f5772ba11c20"],["/page/10/index.html","3f02f7ec7c62a4774dbe563295983fef"],["/page/2/index.html","7ff51f4afe05c4ecf36ee8cf173b7513"],["/page/3/index.html","6f597f6b011d6c82cbc200a71174fba4"],["/page/4/index.html","2fafab3997872bffc21c7e155440ebd1"],["/page/5/index.html","c23c74e5b85c3354471abf9722cc8b55"],["/page/6/index.html","d892c7595f3afa7c209ebda8ffa036c6"],["/page/7/index.html","e9ff5b2d16cda34729f1c68a060d9bc3"],["/page/8/index.html","98d14827f234b5b3ffd559d960d04195"],["/page/9/index.html","01025487b5a3604af2e0b90907164459"],["/posts/1003179605.html","333d3423a70518ef56552f18357ee465"],["/posts/1078088869.html","48cdef622ea62a39af6b3e0480e8b194"],["/posts/1168384896.html","600edc9e838a2082351c26030d2b2d56"],["/posts/1174755164.html","9c89f937d1dacc4ce6fc255b66006e46"],["/posts/1207877865.html","7c74e4aa06c92e0bbabd6b37c51522e8"],["/posts/1322992885.html","a571da3e5abfb5851f3f9973edf3f65f"],["/posts/1405183845.html","5f3aa8712c3f7e729b0d7463946d19cf"],["/posts/1460941642.html","4c5a0624e01e2a16e8d5314f0c188089"],["/posts/159855229.html","25817a75d042e6885dc2c3ed7b9b0ee2"],["/posts/162997961.html","12e9096589f596c04642bc4122cb68d8"],["/posts/1634682499.html","0880a614a4cfa9247ca85047af91bade"],["/posts/1720673220.html","d7e90731ff010f815ae840be6aa72c1e"],["/posts/1794184575.html","94c72c457e65ba23cd6f7e3eb6fbbb26"],["/posts/179783341.html","c61ac441ec51c40b57557434654f6567"],["/posts/2007769797.html","189fee10776833f999db794eda2d06bc"],["/posts/2062301197.html","253c6cb32841cf14eea485e09796fd07"],["/posts/2071449193.html","eca571226ef7a82926b34f10c2ab7d2b"],["/posts/2075292597.html","59e147dc4bed6ab6bf06c5a352bc274e"],["/posts/2124882507.html","b5288a6b80263f79ffe089b33e6b357c"],["/posts/2131155013.html","ed0aef76c6c5dcab85d864549b286a48"],["/posts/2169143571.html","6d75c2e561e5d640f58c5fe06db09a39"],["/posts/219349139.html","b141a86d13c20d717e5dd99d0a2c01a5"],["/posts/2217063026.html","e8f183b2f79ae68835b4ea49e26522a1"],["/posts/2218506745.html","88629abe94930078d914c371c4b34a0f"],["/posts/2292260110.html","7d672caf059fef78e1705c4e6701be0b"],["/posts/229643181.html","57b0dc4793bc551dc6d2576189760afe"],["/posts/235914813.html","8dd4faf437086d3b73afab76acfc7533"],["/posts/2387908466.html","c6b8ddca59311a7de8990f0d121ee531"],["/posts/2580568501.html","42919274fc325c15467deedaf0856a19"],["/posts/2621268747.html","72875007c782ac1bc25b0ef53bdbc4b4"],["/posts/265724518.html","7f06e8a88a67b11c379ea822a5cc0a21"],["/posts/2716721158.html","8ecb3ac46065970db61cde08bdba6c91"],["/posts/2747544176.html","2420fb0dd311ea7c83b66d188abb0ae7"],["/posts/2799443321.html","3d3fc91f205b104516abc76d3d5dc96f"],["/posts/2803057116.html","57a9ab71ad62052323bd0235aceda0af"],["/posts/2818550155.html","17a02b720d3bc7933dbc8bc079d4c84e"],["/posts/282252185.html","609614587e6f91cced3f3c369809c2c9"],["/posts/2959925095.html","ed8dd73b46187d34cbac99b4d32857d3"],["/posts/2971665882.html","72016c4e900508ee26138a8b9d74bbac"],["/posts/3067404590.html","9690ec6a133a39c3c55b87e860c966cb"],["/posts/310999178.html","203db51a879b26b6afae37f0eaad5d68"],["/posts/3120977046.html","6b9947ea4ec13c478924c9eafd9bff0f"],["/posts/3253065341.html","d190280ed95f7e29d6defab5616cd0a1"],["/posts/3253305718.html","4188d94d1b348779ef28ca930543f699"],["/posts/3384747987.html","fc6876d44188dd799cd285a53305e9e6"],["/posts/349024060.html","0981a0f525f99d5905784246d405420e"],["/posts/3598970227.html","11baa0b6013e5c47c67621460a22467d"],["/posts/3611094049.html","34233cb70080e290abc7d81d719dc7f1"],["/posts/3631469724.html","b34e1faedb38f361586f5d2970a383db"],["/posts/3691095479.html","d351a03af2732b4b791e6014c7239002"],["/posts/372934289.html","bb7e99789ee3d0dfbfd43ad36acc85b7"],["/posts/3737997078.html","6ea98d2b5c8ef498d98d3be40f77e78c"],["/posts/3783644122.html","b00020fedabe5084d91bdde9217a1f75"],["/posts/3906205819.html","d06632db72837f5b057767e6499acc38"],["/posts/3912543564.html","a8db19bbca8df889b4925e6fe22042cb"],["/posts/3998253138.html","c6ff4259ad7c732a6bd4991c672a5d57"],["/posts/4075683688.html","c1a2cbd6f2bbfc4e4543792ac0124a53"],["/posts/4184919567.html","9b96c4db84a75ca2e7fa70f26c4a42b9"],["/posts/428414458.html","b321eb59f5fa6467f47f02177043325d"],["/posts/4285860800.html","6fd1a4c6f926798645be5223f1d26d7f"],["/posts/50508479.html","6019a6a521d52a9495348f5feb86d274"],["/posts/511687579.html","5ffae324266ef6280283d1c1b0daa665"],["/posts/611441247.html","0fb25a4cf3c0a34eebe3df3c5253ddbb"],["/posts/619926249.html","de94a753974d57d2e0073a9eba63511f"],["/posts/656350506.html","7bbd5ae46b8619380d0cd76106a3941a"],["/posts/680535600.html","b15445e2dbe227b979e0d7d9889f5695"],["/posts/684607466.html","d211c9296478beb5199ebd7902381cb6"],["/posts/686254810.html","2b4495e7597e60662bf6f42e17f3504c"],["/posts/710205459.html","7e506089179137b883b19e61bf0d9dbc"],["/posts/775935900.html","6170a2bc8e456f8197b82ba12b2bd020"],["/posts/854292428.html","630efab718a7f7f5bb94bbc064e63951"],["/posts/855735627.html","b2f8a9cd9dbd72778561c8144dc9b8d9"],["/posts/867212230.html","e68f19676c4e5a04a47992b12dc45b05"],["/posts/926905116.html","40c56ea0c7411dded3c06b57c02bef17"],["/posts/CSR_SSR_ISR.html","f352413384588be3038c573e27b6828e"],["/posts/CSStricks-1.html","fb770d1542115c58d761905e0f30b6a5"],["/posts/CSStricks-2.html","31536e8661c7419edeece367b0b447a2"],["/posts/ES6.html","4a52716f851dd749142b30fd17591b5c"],["/posts/HTTPS.html","a8c61c3acf4fdfad90a277ba836e815e"],["/posts/React's Component.html","654e8c4c8244283a4516cc097128345a"],["/posts/React's key Concept-1.html","1ddbd272a3163fec7695d1e7fd7cb11d"],["/posts/React's key Concept-2.html","473c7c0f810509736d11e9fbf417dbb3"],["/posts/ReactHooks.html","4aacda7f3f56cfa42c9341591ad89139"],["/posts/React_lifecycle.html","5bdc64c268c9e0035bdc7fc392509f4a"],["/posts/URL_URI.html","e9fbe4b83b6cb8c438e24f1d72dda847"],["/posts/animation.html","6d24b6712984094b1ca4e5e30506b945"],["/posts/antd-data-show.html","8381e300609800bd096744f0dcc1bb5d"],["/posts/basic_construct_1.html","58dc36060466c4009518119e63d8fefa"],["/posts/basic_construct_2.html","8bcb2cbf84762a416f860e2d07f43ed1"],["/posts/better_performance.html","9855e730a181c336a9dc14fc46d5af88"],["/posts/blogChange1.html","7c5199456f6d1953662eed7fb8a224f4"],["/posts/blogChange2.html","e7950e533ed2399062cecb73bf43c34d"],["/posts/cat.html","6da4b1942eeadfbad299800d539f5cb9"],["/posts/cookie&&session.html","0f5e44852c00f4a2e802766a71a1729d"],["/posts/feature-tricks1.html","605d298466d1f7b1a471c43f193d694c"],["/posts/file-read.html","6b5a6771dabbfb0c74e85b312608a111"],["/posts/gap-property.html","d7c0842953c838f36b016747c0425897"],["/posts/hideElement.html","e3b2c010e1f1cc55499a471566ae7ab3"],["/posts/http-cache.html","57bcb90a8787fdfc7611a6dd6718806d"],["/posts/http_cache.html","6e46633b2cf2c0c17162f721f41e7b40"],["/posts/privateGame.html","dabe6b9e5ad8021bc74634b70ec40627"],["/posts/prototype.html","d703f9957b9bdff6a698aad1983653ef"],["/posts/react_components.html","ba4b353b1b9b4d1a069a8e2111b6c468"],["/posts/react_vue_data.html","5779152008f5ccaba5ed81b37fa598a8"],["/posts/requestAnimationFrame_1.html","dfdea3d342e695f5cad636704f07d1c5"],["/posts/scroll.html","6f8c41bbdd4ca90ce6b225cb81d99433"],["/posts/toolsTest.html","cd64be9242b4bfef675f2d66da9c3ee3"],["/posts/vue_lifeCycle.html","3ccc25eb191a41ddae7936e3448840f6"],["/posts/what's Hook.html","894d7732b99a69deeed5d5f20bdb3af3"],["/posts/why Hook.html","66a0dba917b4714014c93e1467bb9f30"],["/posts/前端模块化.html","f6e6be9aaeb5d765e12435277333d219"],["/posts/路由.html","35578141c36dc63c893a71b6a7408f06"],["/sw-register.js","a6403bd7f721c13baa1ad015278853fb"],["/tags/BFC/index.html","bde18afbdca26b41f3fcedf0c4d6d86b"],["/tags/BOM/index.html","b5856defd2127d3117b31295f8c42593"],["/tags/CDN/index.html","010cfdbbd11e9a1e2a098382e5199997"],["/tags/CSS-in-JS/index.html","9c4e21f4437622ae05132b37efa67a9c"],["/tags/CSS/index.html","11a88b40ffd089681e73c3ffc360380e"],["/tags/CSS动画/index.html","a7eeb7dfbfe9f3aa0f7c90d4102e7f15"],["/tags/CSS属性/index.html","128aa0e374d5e525d4fdcae2ec2af909"],["/tags/CommonJS/index.html","5b76cc494505c96a2356d31bdd6c64a4"],["/tags/DOM/index.html","840d59014a9041e2170b885602244a89"],["/tags/ESModule/index.html","779acae56859c2718ff485dc050b7e31"],["/tags/EventLoop/index.html","d5b2e989f87d69652fa847789eed5391"],["/tags/Git/index.html","266a51fbd31ea898ba5cad1a4f2d7a01"],["/tags/Github/index.html","456d18afb3e8e981884a928bd28b3be3"],["/tags/HTTP/index.html","0d662d8da1f69d33cc6465e1fefa9445"],["/tags/HTTPS/index.html","cdfdf499bd75142f378629af658a8af7"],["/tags/Hook/index.html","2e474d43ad7a893df49c2f93603e7868"],["/tags/Hooks/index.html","58acc1faeb67c4f363e474506bc2d023"],["/tags/IFC/index.html","3a429f12f86ce672e9493f1e0e8175bf"],["/tags/JS/index.html","f843d2d158d1dbea05a99765f2296cde"],["/tags/JS/page/2/index.html","a29776b806e3e246007bcda4ff0cc362"],["/tags/JS/page/3/index.html","def0dd2fd8e3f979e58f2457f487b0cf"],["/tags/JS/page/4/index.html","47348921342e32a64bd7b42e3601bd8f"],["/tags/Node、Antd/index.html","398803af2b9b1057be440fc264117968"],["/tags/Node、MySQL2/index.html","8d3fbbee2d0fa33ca9f62668680cfe79"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","f687196a8683eb774585a4b55d301664"],["/tags/Promise/index.html","7b2076b256d5f0a173ed5fffe9b7272c"],["/tags/Promsie、Async、await/index.html","ab707f0984a1880ff5c506a88249bb6d"],["/tags/React文档/index.html","4017995d87b105062210b376ec38ff37"],["/tags/TCP/index.html","2aebd1e57e70d0f40e72f5745d20d899"],["/tags/Tools/index.html","2e23fec5f33a083b735676027bcc8dfe"],["/tags/UDP/index.html","0c4b51fece461ed12971735f47d9f832"],["/tags/URL、URI/index.html","32378cff2bb0aa9d066b6c77ce91f982"],["/tags/Vue/index.html","d6f98179509d4d57912f0d81be63fc52"],["/tags/ajax/index.html","17a5921f06a463ae7ed30e70b13f90a4"],["/tags/async/index.html","cd4fbc91c9a95640731b80cdc7679556"],["/tags/axios/index.html","5dfbc901be5b88e25cea466bad11c565"],["/tags/codeReview/index.html","568e34e97e362ba0403484830a85e24b"],["/tags/cssModule/index.html","6a96b0a0d9b574760b56658f674777dd"],["/tags/defer/index.html","de93f313bc35488e07c1043b99a561f2"],["/tags/flex/index.html","b5d35ef1434c89d2332af8fcb9b0a45d"],["/tags/index.html","252fec2b3c712153f777a63af21b8832"],["/tags/overflow、滚动/index.html","2e9f0f7eeb7adcb8bbc69b6a3ef8258f"],["/tags/position/index.html","f33a128b75b8bef15dc4aa714c2687b1"],["/tags/requestAnimationFrame/index.html","d669e2ba7c72d83efea07de03143ece1"],["/tags/webpack/index.html","3fbba5ee5e9212eef3392e18dfdba8f9"],["/tags/webpack插件/index.html","c32f62cba5c834975e8c41b13b482d24"],["/tags/webp图片/index.html","446620c9647b23e5d4be63176424859f"],["/tags/二叉树遍历/index.html","687d4a01afa154f0ea0bba317fdaf8f8"],["/tags/优化/index.html","ed860478ba466a609dec92061f8ae050"],["/tags/函数组件/index.html","75aac05abd738ddf0d008f148da28449"],["/tags/前端基建/index.html","1dd2687dff3fec629ad240744363dbfc"],["/tags/功能实现的tricks/index.html","1a816322274d59aea260e644904fa238"],["/tags/去重/index.html","b7e9b178840a5b62ccbe22068ab8c65a"],["/tags/双向绑定/index.html","75131c941074657e6848260dd2be2ccb"],["/tags/响应式更新/index.html","32cfafea762445e08f5d66e04e976e32"],["/tags/安全/index.html","0711de4317bb12eb67909ed8ac0af969"],["/tags/宏任务/index.html","22a3122645f66018ae6e9b00ade2c15c"],["/tags/帧动画/index.html","eee7ed508eca3af469151cd73e975375"],["/tags/微任务/index.html","8af085dda05300a3794cc1dec5fb597c"],["/tags/性能优化/index.html","75f9c5986233202a5b443a39a6b02db5"],["/tags/懒加载/index.html","49b67bf348e6432bcbb2aba99c917ea2"],["/tags/扁平化/index.html","f7ac934f30d7f5e0d498e6cb080b95a3"],["/tags/排序算法/index.html","94203d62d51cfca72beee4efe23fc880"],["/tags/数据流管理/index.html","b74c18a9649db6460a3da3a13fbf9d3c"],["/tags/数组API/index.html","1aef9e5add9ac6dc7f081fd838841077"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","75a3cfa7f32d7c292cc9dea6de97e1cf"],["/tags/文件上传/index.html","b02e9fc709e2acc60626823ad498de70"],["/tags/样式污染/index.html","36630854a6d96ef83806ed9a880777f9"],["/tags/模块化/index.html","e694e44ad06c472cb9cc5c4b384bd0ee"],["/tags/浮动/index.html","49ae94cd3bc0283f7bae2fa4c928bed2"],["/tags/渲染解析/index.html","61e160dc2e83054a53d32c2e8204cc65"],["/tags/生命周期/index.html","f772d6e47add4af37ad7d26c00fcfbdc"],["/tags/盒模型/index.html","e93fd43aedf24a042d88565cdc0603fd"],["/tags/移动端适配/index.html","a89464c25f6df8d53a9fe06a405cd9ff"],["/tags/类组件/index.html","cca0808634726226c5028e861d083f0e"],["/tags/组件库-antd/index.html","9c47c58461268f524a036a49c70fd9de"],["/tags/组件通信/index.html","9f9b87ae9c17274ff65ac861fded4fc3"],["/tags/编译执行/index.html","7ba7a15aabc1394adbdc55cdfd2ff2f1"],["/tags/网络请求/index.html","b281fa76569333a5e7998fd118881c84"],["/tags/虚拟DOM/index.html","dfbc63dfa3e6de70fe77bcdd4b2e5837"],["/tags/表单提交/index.html","5921ae50b1585b23bdfc313f4fc454aa"],["/tags/计算机课程/index.html","a6228861d6a94cc193dca2ca0fcaf883"],["/tags/计网/index.html","36f2e91bcbb0c8d7e0243c2a965bbb31"],["/tags/跨域/index.html","3052db0d44204b47620bb7701649a3f2"],["/tags/跨域解决方案/index.html","34a6ad869e5c7ba12bb0c720e5b920a6"],["/tags/跨域问题/index.html","b3e3b013c4c0382abc385e1af2d66061"],["/tags/路由管理/index.html","e2d88afc61f514c359cc676f5e58b836"],["/tags/进程线程/index.html","fac1b0e1b2e672ea605cd97d7bfe4183"],["/tags/选择器/index.html","a341fb2211a8e6d873c8f08aab5745bf"],["/tags/选择器优先级/index.html","0773a60b63ac032a2ac71dba6d5d9fba"],["/tags/隐藏元素/index.html","7366fd62f14c7d8f786ef0affc9ceacc"],["/tags/页面解析渲染/index.html","55e1c068e21a8087ee4c237e074508a6"],["/tags/预加载/index.html","f15fc430f04ac2dd1e5358d5a235cb8b"],["/tags/驼峰命名转换/index.html","c9ae8ff7f3a17003d343e0e3b1d4b95a"],["/tags/高度塌陷/index.html","e3ae8e566a4dda1918c3bdad54682020"]];
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
