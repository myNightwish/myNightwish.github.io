/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","8ff06627e742a9271066cb03d4b9f4a6"],["/archives/2021/12/index.html","18b49a3e0c394ca768a6b72d2868a4c8"],["/archives/2021/12/page/10/index.html","c8eec5cc25caf5980eabac9a5a0011d8"],["/archives/2021/12/page/11/index.html","5527e4b837c14387508a6e3516e7d93b"],["/archives/2021/12/page/12/index.html","a9073aa1545e980af9d2d425c6280115"],["/archives/2021/12/page/13/index.html","e5114c08a15752b9cf7b3b89469bae25"],["/archives/2021/12/page/14/index.html","817a2a8d9bcb29979195ce6a08b07249"],["/archives/2021/12/page/2/index.html","5f900b22debe6a19a22ca331cebf6318"],["/archives/2021/12/page/3/index.html","bfb2d8f20ffe29d2c6b2244fd1e078d4"],["/archives/2021/12/page/4/index.html","02674592e896de130581e799576d6c19"],["/archives/2021/12/page/5/index.html","94f86ef740ddc6084220b2005b7b5263"],["/archives/2021/12/page/6/index.html","ec4fb3e5e738eb6c715776b8c4ccfb27"],["/archives/2021/12/page/7/index.html","525c4bd6e8efeacb3bbeda6776866a07"],["/archives/2021/12/page/8/index.html","e6348eabf40a979a2e844426cb8e3b9d"],["/archives/2021/12/page/9/index.html","c4aff9429147b833ae0e5334d304f1cc"],["/archives/2021/index.html","9543755c3116405fc8fec85b36a741df"],["/archives/2021/page/10/index.html","5aa4b0100d9b5931c93edd99f989ffc9"],["/archives/2021/page/11/index.html","b24a1710fad97ca65e1b817063d83521"],["/archives/2021/page/12/index.html","24cd8000bd581b61747087bfa1a8e5f2"],["/archives/2021/page/13/index.html","d8aad2a03564cfc6dd1be7a58093e519"],["/archives/2021/page/14/index.html","d64201a1a347db94b1ff9dd4e97f4045"],["/archives/2021/page/2/index.html","eae009a5fabbf885fe1ef29ec26f437d"],["/archives/2021/page/3/index.html","345e1bec33bbb653ad4c89c9bd79dc90"],["/archives/2021/page/4/index.html","16abfedf1342b76947ac944e27e34bbb"],["/archives/2021/page/5/index.html","7f0010bc3de03d87578bd190b4ecfc96"],["/archives/2021/page/6/index.html","6524094c83ad78e67fdd2cc231754a0d"],["/archives/2021/page/7/index.html","412b7be94bab6b5e61042e324c8634ad"],["/archives/2021/page/8/index.html","1d99923d68fc3f80ffc4f8ddfe841801"],["/archives/2021/page/9/index.html","ad5b636343574872c57edd604c3c16f3"],["/archives/2022/01/index.html","cfa99c7ca584e56b7985fe7f001fcca6"],["/archives/2022/03/index.html","a87ba242a19a66ef838e30abee10fa18"],["/archives/2022/03/page/2/index.html","c87bd4e1db1943aef3d50f82dd7af28a"],["/archives/2022/04/index.html","8a5b7b4bd6753087d651f2db6986385c"],["/archives/2022/04/page/2/index.html","07339a885ddea933c7a0e41b5fd4f1b2"],["/archives/2022/05/index.html","4e7deb62312739c0570536d94904c208"],["/archives/2022/06/index.html","07ededf722a534264cee0a03a5c2882c"],["/archives/2022/index.html","014173c0317df88777611186847b3273"],["/archives/2022/page/2/index.html","bb699fcc49282350f739ede7da9f34f7"],["/archives/2022/page/3/index.html","78707c4a225844135b4a5fb7f035cf52"],["/archives/2022/page/4/index.html","f57814048060869b5d408911c78a403a"],["/archives/2022/page/5/index.html","84e82a1cb61f3b16f39c21f7e7297865"],["/archives/2022/page/6/index.html","7a15667adfc75a5557779fa5b95f9f50"],["/archives/2222/03/index.html","e29ec8f83920383cf0f09650090b1356"],["/archives/2222/index.html","94ee2c9b8362a2cbedbf0526689a55a1"],["/archives/index.html","684b64db226a8fe9b478f3557a9a52f3"],["/archives/page/10/index.html","1a4d858d9a2eb012049d2c17db93e266"],["/archives/page/11/index.html","830963a89f04f0c077a8281ac3645f51"],["/archives/page/12/index.html","969edc71d79efb5368c7e00a7e34c56d"],["/archives/page/13/index.html","c1173444e81c6e71ec8973bdec9a3235"],["/archives/page/14/index.html","07776bfe1cb1afad7faf5bc21d3d81a8"],["/archives/page/15/index.html","d65b7b9bdbc0960275c92792349b4ff9"],["/archives/page/16/index.html","c0917b0fb30fe313bbf3fc364b822eda"],["/archives/page/17/index.html","13b81c82fa3254bd279d3de0d789f2bb"],["/archives/page/18/index.html","a8e59736bb324478bb8d6eef6deb8284"],["/archives/page/19/index.html","4b2a868bcea3afa030a4c2cb8be16779"],["/archives/page/2/index.html","6fb194d55f30be4360be70f8822c69b4"],["/archives/page/3/index.html","726a63fbf2e8e889de0669f8cbe2cc82"],["/archives/page/4/index.html","12890399b17038826033c21b0ffcccab"],["/archives/page/5/index.html","e6cc1cbe413bae2c20463edf409e128f"],["/archives/page/6/index.html","4f3c70e0b794ac9ff2d5e8cfd96c309a"],["/archives/page/7/index.html","e0ce7d2245432783a16ab237f0d13d5f"],["/archives/page/8/index.html","3eb01e649f2f635963a6c7dc80d4cd80"],["/archives/page/9/index.html","30b622989785485256be3473df4e6d7f"],["/books/index.html","207530dc9f82545112148a5b3c4ab17e"],["/categories/1-1-CSS/index.html","25b580dc9014c35a395cf7f57970f578"],["/categories/1-1-CSS/page/2/index.html","4c0b955cdf06ef03a8423f5d1ba1a93e"],["/categories/1-1-CSS/page/3/index.html","fbd094379d7f003e203dd35d2d0af08c"],["/categories/1-2-JS/index.html","dd149c1ab91ff9404a8a0cb34e3e8aab"],["/categories/1-2-JS/page/2/index.html","b0f8d4c4bb404579fa10c7661bd99ca3"],["/categories/1-2-JS/page/3/index.html","86deec560fa832a762508e769f43bb47"],["/categories/1-2-JS/page/4/index.html","0b522750a5012d7696f338fa1718a45a"],["/categories/1-2-JS/page/5/index.html","5c90d1f5e75f7e12c156397fffc1a3c7"],["/categories/1-3-Ajax/index.html","c059439e414c11324b173087eab5083d"],["/categories/1-4-框架/index.html","aeabcd929d11b488510492879609b05e"],["/categories/1-4-框架/page/2/index.html","9c876ad6d91a871eb55f1fb3e90c7b1b"],["/categories/1-4-框架/page/3/index.html","7eac1b2ff04037f5c9dc56a6dc03a412"],["/categories/2-1-组件库/index.html","b2801e06d94e6301e57c470a77cbd6e9"],["/categories/2-2-基建/index.html","31f41657f62d807cc51fb07400a7a614"],["/categories/2-3-实现Tricks/index.html","1537922875950ff56760cab92796e39e"],["/categories/2-4-项目/index.html","070aa9847896af56c769c19afc00167d"],["/categories/2-4-项目/page/2/index.html","fdad6f03ed7b51fad212c81d1415dfdc"],["/categories/3-1-记录/index.html","c5a7d0ca3bc304f4c6db6d959b0abf72"],["/categories/3-2-浏览器/index.html","1fe68ddd0a5756165cc3160272064972"],["/categories/3-2-浏览器/page/2/index.html","30ebb0325889b4c76ad43ad5f71d6476"],["/categories/3-3-基础/index.html","590ed05495b894e78be9e7df8791a93c"],["/categories/3-3-基础/page/2/index.html","549e67b189478832740edc95aad38906"],["/categories/3-4-Tool-Shell/index.html","e9d29cf41a593c952ae9758c861e5700"],["/categories/index.html","019f1095172e13f09eacdad0e1243cd1"],["/charts/index.html","cf1e52d5ed0c88463ec24606952d9680"],["/comments/index.html","7fc1649ab25631a06d04f0cb8435f4f9"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","d0fc32ac960f71cc4312f49b170412ce"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e3963b705db7983ccdb23a943539dcb6"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","2ca0747338277f84d24d23ea85182428"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/HYTangMeiRen55W.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/ZhuZiAYuanJWD.woff2","5d3a54462adf28c19897e7292a33e399"],["/fonts/优设好身体.woff2","7df93f62b521a6309c469be8a7c4eb62"],["/fonts/筑紫A丸by宁静之雨.woff2","b114944bd478cc1686de09fbade2ee1c"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","7ba796ff06be0e0d082f4bcc75dadb5d"],["/js/beautify.js","f1f2d10b673f13c1cacdf499aa21ea2d"],["/js/bottomTime.js","4f17884f1ebec8b3956d17a35e18ba78"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","18d1dc36123237ee6634e61251c8198e"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/readPercent.js","faf684e8984df510278342f7704b9420"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","64880aa8f37cd8ec720a02c1b099c913"],["/music/index.html","63fc6803b738df52e8705d7928533862"],["/page/10/index.html","87ae065426f5b4e2c7e1beec63e0c7a9"],["/page/2/index.html","6dd8514b253c427c8c95fd8e08ef5699"],["/page/3/index.html","803ab3c351821985b59d0c2866896198"],["/page/4/index.html","7d90e2f029f6b25e6fb8e1540a902b05"],["/page/5/index.html","0b7521622bf9a236b9f8a0d639547027"],["/page/6/index.html","3c2101b07e8053c7d6f1f54a99bcd953"],["/page/7/index.html","43920256359aa680c77993b66e5a89fe"],["/page/8/index.html","3d098171011946b0375910ff06041f35"],["/page/9/index.html","58c3f83faccb6d9ed3c6f8ba2198d1e8"],["/posts/1003179605.html","c706202eda84d22f261a089f7a9c3bfe"],["/posts/1078088869.html","130cfcf47ef944c37eb6c12225ed9075"],["/posts/1168384896.html","39d841dfc9dc05bceb85baf44141b88b"],["/posts/1174755164.html","0b4f3427323852974f14959abbc8190d"],["/posts/1207877865.html","ef2ccb90299d06289b2fd1cd880edc4e"],["/posts/1322992885.html","79a724f0a26904e353a25de94ea6f495"],["/posts/1405183845.html","f4396e1ac117cc6709bc704f2e23ba97"],["/posts/1460941642.html","3439318a382df5948a8d4d15370a71b6"],["/posts/159855229.html","1b771f79767870596edd6dc2c5435c0f"],["/posts/162997961.html","24e386338317e704900f4c78bf951139"],["/posts/1634682499.html","3cdecf88cf2006a779e7cf085e01c306"],["/posts/1720673220.html","df2a5bcd27ccdb9e442ddd9b4c46ed7a"],["/posts/1794184575.html","f43b12f6ae2c14f50cce754bdd8bc522"],["/posts/179783341.html","c9494c187a1f6039c66ee158f10d58d8"],["/posts/2007769797.html","f283b32d4cf60905fd1f80ad991b13ad"],["/posts/2062301197.html","43dcb82576cdcca1f3c5029582a5e76c"],["/posts/2071449193.html","2073dedf5b2dfdd337f3e508d25d5bd6"],["/posts/2075292597.html","d63dc301d3217b7bf1a870b7ecae5fc7"],["/posts/2124882507.html","e4cec13e6e0afbcda265a7130a1a5670"],["/posts/2131155013.html","023c2f504a0c88ebb0216052f7077da0"],["/posts/2169143571.html","bae5a7eccc397346d9399abd1a9dec37"],["/posts/219349139.html","53b533ee1ab0755df6748d1fbbb40c94"],["/posts/2217063026.html","2a5460ecb74b2d6d2c563276805e0c55"],["/posts/2218506745.html","e4779a9dd7f62252196bde2d0bccf8a0"],["/posts/2292260110.html","6f159e0c285e263b9ad6c0f59bf5f4f3"],["/posts/229643181.html","b82c38a27a46b48a16c310a1754ecd6e"],["/posts/235914813.html","396231d0b46f6b46c0647c9f3067f437"],["/posts/2387908466.html","39540b954a63b0ab829751e7349eae55"],["/posts/2580568501.html","3fa7b7954d5720fb54355d6842ecafc2"],["/posts/2621268747.html","b2ce289545fd0cc2d80547d2ba78898b"],["/posts/265724518.html","aa3e4d4b1c9f8eb61025ba94bd06d14d"],["/posts/2716721158.html","23db04c5b870684b5709fbc2edc119e7"],["/posts/2747544176.html","964818c4105fe2dc090e6d1229cdc9ec"],["/posts/2799443321.html","3ca7fb313d694e50b3b073cf4f3ae396"],["/posts/2803057116.html","ef376308807d702be79cda2ccb9628d1"],["/posts/2818550155.html","ee210050dbeaa983bf4d304d251ced91"],["/posts/282252185.html","d4396dc258ad85ca4464f15f72ef837b"],["/posts/2959925095.html","645275a81a86ccc8df8ea7487fb46135"],["/posts/2971665882.html","e84c78bf453a123ec686aa5ced975a1c"],["/posts/3067404590.html","7e5c608efc3aa49b4b392f465b48e92f"],["/posts/310999178.html","5582c0e71494af27536420d9a6672fac"],["/posts/3120977046.html","488bfa15cfe632dd004f1ee2542ae26c"],["/posts/3253065341.html","cc3cb0a1bf3901abeeac17320610d8a9"],["/posts/3253305718.html","429aa732f34178fbcf762dccf9c65680"],["/posts/3384747987.html","3d5de5b8df2e5e4970444c1ef4286f48"],["/posts/349024060.html","55fd65d0b82c6b61fda63257ed3e4d61"],["/posts/3598970227.html","fe05f1a19e2e31472d67b9151b4e5066"],["/posts/3611094049.html","dc21d95c692ce35e662532535ae9e13f"],["/posts/3631469724.html","77b029d62d42e0b4116fe4bc6736f04f"],["/posts/3691095479.html","12525862d7bbbf3ae80b735b725785f1"],["/posts/372934289.html","fc2551d9b02a0e73b331e28994513e70"],["/posts/3737997078.html","9432e9ee27fc23e224faf7a43bfbb21b"],["/posts/3783644122.html","5894c64ff787852d0bfa5c9501143dae"],["/posts/3906205819.html","75014fbcd51cfdb79ceeacb1866d9b65"],["/posts/3912543564.html","82f391b7292e96eca03b6e4f185c0a5f"],["/posts/3998253138.html","fede89d18a39dd2a7faeed58482e3adf"],["/posts/4075683688.html","e66bdeb12d1dbc1b1344d093965cadcb"],["/posts/4184919567.html","718eb117f5618aa21333cea95892b531"],["/posts/428414458.html","a2cd7949bf6d37023f1222438f700ca4"],["/posts/4285860800.html","89a2c2b0f7c5cc4cf3b0a7595268f735"],["/posts/50508479.html","77160a6cf8f01cc89704937f3ff40ce1"],["/posts/511687579.html","f43265fa212e3033e5f5c575019d4fb0"],["/posts/611441247.html","e4625a5f2fc4378ace88239d01bce77e"],["/posts/619926249.html","75a4c05157bb7ee8a10c1b8b0f813110"],["/posts/656350506.html","96ce5c99c1a22ca901451b6f5bdb0fb2"],["/posts/680535600.html","8b44520306937fb45b2bc23280e2e2fd"],["/posts/684607466.html","8e8e646979f4131e5ec562e00736df04"],["/posts/686254810.html","3fd67b573858c2740ab7d735818b6572"],["/posts/710205459.html","0344625a3544baa892604ffd37a31b4a"],["/posts/775935900.html","d5ed8be5a6827435b6b77c6a403db81f"],["/posts/854292428.html","4e380b7a3c61efca5671ef1ae5e1bb93"],["/posts/855735627.html","1d5c21c73aaf4fff557a748043720d25"],["/posts/867212230.html","5013ae563c32c7543e8bf9c951e88170"],["/posts/926905116.html","f117c38fdaada4a3791a7c80563d0a4b"],["/posts/CSR_SSR_ISR.html","914c5d40f6a48313704bce0336cf6d9a"],["/posts/CSStricks-1.html","f76430e66825284eb7df72baae822ca0"],["/posts/CSStricks-2.html","8e72b3dc1201a89af7be08617e14a3fe"],["/posts/ES6.html","d1eea908a04c086a1b9a0b4da721aaf9"],["/posts/HTTPS.html","f222a7c2764c02b18ff8994e2ea67cef"],["/posts/React's Component.html","2ac47d8d7f82bd07e3a08cddb0fdeefb"],["/posts/React's key Concept-1.html","abdea049405d544326898d4047ce6fc0"],["/posts/React's key Concept-2.html","98f961ca6a062416596443d4d9265e12"],["/posts/ReactHooks.html","3627d767ea6d5d3bee6c1844425af184"],["/posts/React_lifecycle.html","2457464da9af965d5b47bfb9dba63e37"],["/posts/URL_URI.html","3905cbd0dde25f641c9c3f1d6ac54237"],["/posts/animation.html","ebb78c7638ff400fd256ef6ad8955d35"],["/posts/antd-data-show.html","366dbb919babe044ff0b0197db2edc36"],["/posts/basic_construct_1.html","f717e47daebdf14008bbb8e9fb58d20a"],["/posts/basic_construct_2.html","13e50ffc453e4110b286f27ac2e2959b"],["/posts/better_performance.html","99366ec6a3398288e438f224748a3d06"],["/posts/blogChange1.html","1cfeed1cd5cb15369ec3bbcbe6787e46"],["/posts/blogChange2.html","909877f79a3480c43aa2291039b447f9"],["/posts/cat.html","cbca7542bb0b36e855444b59f09a2a25"],["/posts/cookie&&session.html","df65ca2800c0c58cfc1eab90565b5091"],["/posts/feature-tricks1.html","fe9bda2e1533c5884dcee404e81dab3d"],["/posts/file-read.html","75bd3c850cbc814c83b9f4def09e682c"],["/posts/gap-property.html","e3e088656282146fa200087005005f40"],["/posts/hideElement.html","12f5a9c75aa4970a0e629de64e467bb4"],["/posts/http-cache.html","3cf5dbfc81cbcf86cfe8f0d3ea8817fb"],["/posts/http_cache.html","e14aa340def91d748a0a297fc7876358"],["/posts/privateGame.html","ee89ce42c79c4c14acac6fd4cf2280c5"],["/posts/prototype.html","b89b9de7b33e34745fced876911ace76"],["/posts/react_components.html","66d17b44f5f7a4f66034a582e1a64090"],["/posts/react_vue_data.html","6b79cdae37b71b541e725b64e2fe5b42"],["/posts/requestAnimationFrame_1.html","854969499dfbce3b13d4dddde0150560"],["/posts/scroll.html","1f5820a5542ec3117c4a2ed7b9d6fa92"],["/posts/toolsTest.html","9343f22fe18806f2080304ba3179de5b"],["/posts/vue_lifeCycle.html","47fd5f481c7a96fce70497ae81ebc103"],["/posts/what's Hook.html","07e6e4d9ccc850313f5bfaa23cf8d78e"],["/posts/why Hook.html","e382bdd7c5ec4a2a0298ba47956ae5bb"],["/posts/前端模块化.html","7731de7f6720d48fab2df85964e7aa7c"],["/posts/路由.html","02bcf1bc48a850b614959a79f5b492b1"],["/sw-register.js","12c2e8704528608a275218b747572bb5"],["/tags/BFC/index.html","bad5645ff2ae9d3bd2879fb0c8277668"],["/tags/BOM/index.html","216b3fde21eca5aa2daca38e0c83b6b2"],["/tags/CDN/index.html","09c32c1e2041f781c15f12a348309a97"],["/tags/CSS-in-JS/index.html","f2f7fadd15387d0c2aedf54ee42e9d57"],["/tags/CSS/index.html","9557d1307d3eb790c8be029f484a5c5d"],["/tags/CSS动画/index.html","fdc0dd9fce1bff2b8ca2777d49e324ec"],["/tags/CSS属性/index.html","24b3106f33e1d79ddbcfae24200d7562"],["/tags/CommonJS/index.html","00eb8ddb4b1da971c9b5a417bfe9295c"],["/tags/DOM/index.html","e27b6458362e635e7e22725d7f9991e9"],["/tags/ESModule/index.html","bc0a64fbce5f7e96902d94af5cc60516"],["/tags/EventLoop/index.html","81fd772d213a3dfdbae1e7f6d0ee384e"],["/tags/Git/index.html","9e28c214fbe5c02c621918a20e760b36"],["/tags/Github/index.html","0296b3ed09154d71b358fdf0f249a387"],["/tags/HTTP/index.html","c578125f3db7b99feebd7e95a7204d68"],["/tags/HTTPS/index.html","89b410ce5d532bead4e1fdce159d7c69"],["/tags/Hook/index.html","2139703bd6c6ac6275013954312e3678"],["/tags/Hooks/index.html","a95fd7739174e1fd7d73daeb337b1f13"],["/tags/IFC/index.html","e7f868e81bb0e64aef6fb4b7f02f9741"],["/tags/JS/index.html","8a623ea7a6795ba70a832608b7a0ae15"],["/tags/JS/page/2/index.html","a8d7207bbcd12ca3c180d6c74eb1057b"],["/tags/JS/page/3/index.html","552905678e568f62171933ee8dd763f3"],["/tags/JS/page/4/index.html","fa1ca23c77a57efa3bcb9f09b14522df"],["/tags/Node、Antd/index.html","85eef8824cc3672547191c1d853e93ed"],["/tags/Node、MySQL2/index.html","70c372e3896f0747fd1a2f4446de58fd"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","b1dcdab4422a1bb7c837ac8425978dae"],["/tags/Promise/index.html","8fca0efd85ff79813bc62a23baff042b"],["/tags/Promsie、Async、await/index.html","dca4dfd0b8cb81f49302478ffce97f4b"],["/tags/React文档/index.html","3874a1967f9646b3c7b21d306bf00e62"],["/tags/TCP/index.html","df7ac65356e7a51e65b5f136fd491a51"],["/tags/Tools-Shell/index.html","36b65228e453f932a07e8a7e253ff22e"],["/tags/UDP/index.html","3eef57f562a73d51d6540f3d160d3404"],["/tags/URL、URI/index.html","779696fe60952c5884bef0801ddbe7b9"],["/tags/Vue/index.html","ca006ad6c61e5f62ade415b3c0117750"],["/tags/ajax/index.html","283221a64b990803f9bfa7d54b017758"],["/tags/async/index.html","13f5afda27d6f80b1446467f613e172c"],["/tags/axios/index.html","48c88cf832250336957fe7e861ed9a6c"],["/tags/codeReview/index.html","b625b076af1ab221f437a5b502d5f172"],["/tags/cssModule/index.html","94657d53ae5c923ad648c996fc9ed090"],["/tags/defer/index.html","20c42724ea88d3d0b4b0b3fa7bc63d90"],["/tags/flex/index.html","2367e84aca76a42552d45dde54f6f20e"],["/tags/index.html","ffc9124aa0102b0fb1ae0032aadbb2b0"],["/tags/overflow、滚动/index.html","991a51607ac136a795edf1cedaa5673d"],["/tags/position/index.html","7be9605f6d2be37f6aa67de36ebced9a"],["/tags/requestAnimationFrame/index.html","a0129dc347c0ac874329e5e26f532bd8"],["/tags/webpack/index.html","6b76d7c9f06e44215834abe93f0fb62d"],["/tags/webpack插件/index.html","597f2db4c380374e53c0dccd972d9aab"],["/tags/webp图片/index.html","d29d106f3d568c626adca2f2a6ae8406"],["/tags/二叉树遍历/index.html","fe48aaf6a2104f186cc1909fe430289b"],["/tags/优化/index.html","e50502b0d523103bbe961b635ff99e33"],["/tags/函数组件/index.html","f38794fc6be48afb02a92f7e8498067f"],["/tags/前端基建/index.html","eb751efd23e3922ab849c297e2e0c866"],["/tags/功能实现的tricks/index.html","3ea115aeb63ceb21bcaa62cb0bce428f"],["/tags/去重/index.html","4bd3e2ef7c8f98b2aaf02b2752a7df83"],["/tags/双向绑定/index.html","cfd0175fb5f2b03c77739ade3cc788c5"],["/tags/响应式更新/index.html","86fead206f8ae9543057cd51e0f1e2d5"],["/tags/安全/index.html","924d99e3f018b0dcacb02084641750d0"],["/tags/宏任务/index.html","37054e61753513f1c32fdf653bc95492"],["/tags/帧动画/index.html","0e764791c69a718fb0c0cb928be287d2"],["/tags/微任务/index.html","8f80e90f7e48dfc456308c46c415deab"],["/tags/性能优化/index.html","45ade4bde3e0b2bfcf597390053a3e37"],["/tags/懒加载/index.html","1ffcf4f2c53a32bbb475cb1ca5bfba1e"],["/tags/扁平化/index.html","f4056ff974d22c297b7d10decd85eb97"],["/tags/排序算法/index.html","859ea164d1a64c18a8bed5c0a4424c57"],["/tags/数据流管理/index.html","8571f9fca392e3226303d9cf0f4a723e"],["/tags/数组API/index.html","302b8e2c4626fbe9d37fb83f93110530"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","a4f86c1c925059f02f5c1293e63bc808"],["/tags/文件上传/index.html","1b8542f46b6c817848faf6b7d37c92a8"],["/tags/样式污染/index.html","725607eed0dd1446f5174aae1c5b22b0"],["/tags/模块化/index.html","d41d261b320a3ef5f6b40a6541d56c60"],["/tags/浮动/index.html","3d2b8cd22784c92ce8f9ce7a1a7e81c4"],["/tags/渲染解析/index.html","7289ce0060cf0c39979dd9f4f76e2309"],["/tags/生命周期/index.html","1fac8a3a717d5999ec52c94bfa0736d7"],["/tags/盒模型/index.html","6545276637b9a20d45adee14dd63460f"],["/tags/移动端适配/index.html","e59662bf663b6723b025bb443aea2ba4"],["/tags/类组件/index.html","61085802155a11bc072928dc292a9ea0"],["/tags/组件库-antd/index.html","41b5599f3c163f491db590a36c4e71b6"],["/tags/组件通信/index.html","e477a346a42e213b43eef815a4ed2500"],["/tags/编译执行/index.html","e495dc9d5710da96761a7fa4ce52a8f9"],["/tags/网络请求/index.html","94cc8bdf8d9594327680e3ac00ea4597"],["/tags/虚拟DOM/index.html","fa613f84c2d5b4c8f6ea8aecaf0a3b1a"],["/tags/表单提交/index.html","58cf0b8e47f5faa0fe60e8aa5dc1dddd"],["/tags/计算机课程/index.html","3932d5b011de540b2b0db7090c113702"],["/tags/计网/index.html","a8a610da93fc1a6af05cbe7378eb8bad"],["/tags/跨域/index.html","3a0823480e970560ca13f7e24e5090a8"],["/tags/跨域解决方案/index.html","f1647e9f21844c0b34fb6ddedda881c6"],["/tags/跨域问题/index.html","bf7b153265fc0c0caf525f4c0d4ed52e"],["/tags/路由管理/index.html","ab2a244f725de9a62750d11fa9e87b26"],["/tags/进程线程/index.html","9b71d9146247fb090e524a6e76857fad"],["/tags/选择器/index.html","bfa83f83c9609862eb2cc3696d7c9919"],["/tags/选择器优先级/index.html","bb076f7349546d12d8f342efcdba36f7"],["/tags/隐藏元素/index.html","2f630bba562ccf51f43956b97567c83f"],["/tags/页面解析渲染/index.html","a71b27ba4f8aaf68de898c9cdb98542a"],["/tags/预加载/index.html","7cd838714744027b85b97f4670b11b9b"],["/tags/驼峰命名转换/index.html","ce64c2cca2d7cafed676bb6b5f73e947"],["/tags/高度塌陷/index.html","b70edb8afa0cb6a804d1574facf62884"]];
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
