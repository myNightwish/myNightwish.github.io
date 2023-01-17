/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","3fe43792578f45e832469548eebfae04"],["/archives/2021/12/index.html","82e2abafe7a2313a57c2fb68cf25bbb1"],["/archives/2021/12/page/10/index.html","caf34ecd791ccee2402f1db91d6be48e"],["/archives/2021/12/page/11/index.html","b24201430723f490ffbe47772ef9874f"],["/archives/2021/12/page/12/index.html","61a10826907c2ae5cfdf39e4e092d91e"],["/archives/2021/12/page/13/index.html","048cfad8552fb6f02d1eda5ba71b849c"],["/archives/2021/12/page/14/index.html","2409345bac380ba992d3bf7860ceb70c"],["/archives/2021/12/page/2/index.html","e2caf5e54a3cd350401b12aa33da2cd2"],["/archives/2021/12/page/3/index.html","71a6b42f3ce444110dd839d1ceb61ab1"],["/archives/2021/12/page/4/index.html","997367bd56c377d4df0484e79ef9cb4f"],["/archives/2021/12/page/5/index.html","a38b57404b8a66f45fd9cb7b835832a7"],["/archives/2021/12/page/6/index.html","c51eea8db5a8c0aaa82660c47dc5e7f7"],["/archives/2021/12/page/7/index.html","b5fee043f38c2758ff2f31665e3cca82"],["/archives/2021/12/page/8/index.html","8847ba063f7735d4d4b41043b415bac0"],["/archives/2021/12/page/9/index.html","9f31f2f03396da41968ffd435e670350"],["/archives/2021/index.html","b7381b60f862e1b8b0f51f51557f8692"],["/archives/2021/page/10/index.html","ea8b9dc66789dadfb288ac7e58325ece"],["/archives/2021/page/11/index.html","bda4017a8927535d53f610f360522843"],["/archives/2021/page/12/index.html","8cfac295eca5ddab194f89922d6d96d6"],["/archives/2021/page/13/index.html","b5fda3b355d93a60e798744e7166a4c7"],["/archives/2021/page/14/index.html","828dcd14ef4ec8aa56372c3f72ac8667"],["/archives/2021/page/2/index.html","552e674dbf7c68473e60069b13d21c07"],["/archives/2021/page/3/index.html","5ab3e5a999f0266f6d4b6deedd61cba5"],["/archives/2021/page/4/index.html","80ba2dbb17620ac9206a563d124d85bc"],["/archives/2021/page/5/index.html","9d637c68accf8091eab76fb290a90020"],["/archives/2021/page/6/index.html","5109c5e9231ed78f3ff8ade7b88dde56"],["/archives/2021/page/7/index.html","5493906f6c0523fea501f8729b0c974c"],["/archives/2021/page/8/index.html","ecb0fd402609ba9750e7222349aeade9"],["/archives/2021/page/9/index.html","65eaca9f46a8851b88ab0b56b22b1496"],["/archives/2022/01/index.html","fdd4884c2a5e188c28be9095286ca2a9"],["/archives/2022/03/index.html","1122eaa785ead6be35f51e1ff2b2433a"],["/archives/2022/03/page/2/index.html","7fed8b56cc429453a135a989125dab8b"],["/archives/2022/04/index.html","76bc30deebbf044f8de0908562ae192b"],["/archives/2022/04/page/2/index.html","740c3577688ee182db5373a72d3a0d27"],["/archives/2022/05/index.html","11b862d9fe558353c250b606bb7db6e7"],["/archives/2022/06/index.html","8eaac5369d2861a0697587710fc639a0"],["/archives/2022/index.html","80ad1c006230542af7714ce2392d4dca"],["/archives/2022/page/2/index.html","126fb7bee0170fd664dcb1669f779306"],["/archives/2022/page/3/index.html","3f7e047093f9c649aed92d81b7614a93"],["/archives/2022/page/4/index.html","1261e65f08514b2923933e08ba7ce645"],["/archives/2022/page/5/index.html","ec5f9e153d8cc8887d46a126c54da7a6"],["/archives/2022/page/6/index.html","194c255a45dbf0f71f11822f0be31478"],["/archives/2222/03/index.html","322c82d24e507af31adcbcd2b2e7cf04"],["/archives/2222/index.html","5ed5e67fb21e252ce8dee6b5064a92c4"],["/archives/index.html","040323191113594adc4c4cdd9dba9ba9"],["/archives/page/10/index.html","2a2a7f8000873bcce450c1c0d73b7ed4"],["/archives/page/11/index.html","e2492b115ccd248eb4c8f59f8a85cf6d"],["/archives/page/12/index.html","b085d24ab6bd9d80a5ec3512d0f53308"],["/archives/page/13/index.html","93cdf026714944e90a5453b4342927d7"],["/archives/page/14/index.html","37e50f7120d8d3dd7347deffd87b5603"],["/archives/page/15/index.html","f49f4f946f1bd59f372e803e7af17f63"],["/archives/page/16/index.html","2115f50fcfb732911e8f6bb5f654b1d8"],["/archives/page/17/index.html","ac99ac54f56077e874298b7130adf533"],["/archives/page/18/index.html","665b395e5da0942f995c50d6a104cf6b"],["/archives/page/19/index.html","1e05f6dffe433bd3bee9ab4b6a293525"],["/archives/page/2/index.html","4be250602dfcae20c3089ca8a7925351"],["/archives/page/3/index.html","7c14bc568d8c8341681f000c358ad58d"],["/archives/page/4/index.html","ad39532d5edf010fd9cbbe3fd9a0c949"],["/archives/page/5/index.html","1d8caa17a20e2dbb544fc95359d1f534"],["/archives/page/6/index.html","81a5bf31982e6094680f676f7e272d38"],["/archives/page/7/index.html","399fd7e5097fa912aacdb233d1f93366"],["/archives/page/8/index.html","e00ec1a77830789005f25fa5d2c0465e"],["/archives/page/9/index.html","57c0d28081bed7779456810868533556"],["/books/index.html","378d7c87caf3116c787f972f0f6d3077"],["/categories/index.html","2408e371f8931c2a50ab05d287ef8eab"],["/charts/index.html","cf82cb7706a4e78d880ba77a264dad89"],["/comments/index.html","b4165d40d2fec81c1d8b610e06be30fb"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","4ff0f6baddaa92cd4cd77ee6239f0b72"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","cdea330d5a71e6e20deb028da98267ba"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","26bcf6f82e99da8717f550ad625613bf"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","8d242f82509a0112998a438dee5d7b93"],["/music/index.html","ff7e54e19a69c15c4727b0f12f8a41e4"],["/page/10/index.html","b0895ea623778f9ba557f97abe37c409"],["/page/2/index.html","92bf46eb998ce98afdc1fc27cb6cb1d6"],["/page/3/index.html","2e40c2202764d3906dfba3ba78f73157"],["/page/4/index.html","d6d7494ca6bf9a660f50045e43adc9f6"],["/page/5/index.html","52696f53568de710fb454b97cdad2dc2"],["/page/6/index.html","cbbf2da6c7bbfb5a02aa6ef550ce0f35"],["/page/7/index.html","8c75f4e133987bdd74d9db00afe27c13"],["/page/8/index.html","53d5e18a5ec80b6bdf49ea55a85ebaf9"],["/page/9/index.html","890dc653a4a5905d7a646670b571cd27"],["/posts/1003179605.html","265d5443fa37ae4c5ab96f6a6ae10c52"],["/posts/1078088869.html","97e5d276b4586d87a7f8e050afb4d499"],["/posts/1168384896.html","1655da3260fa0e83a8c886cb99017780"],["/posts/1174755164.html","7a9149243dec3e360801929e907314f8"],["/posts/1207877865.html","c25be0c8868e024c55b21a5c7fb5fd30"],["/posts/1322992885.html","86b8517161f457ab1228b81be03d85ef"],["/posts/1405183845.html","717e6e7a888654342e629b2c04898650"],["/posts/1460941642.html","f03f1271ea73a26c7846a04e533469ed"],["/posts/159855229.html","d034930d5fcce33c57b810db4228d890"],["/posts/162997961.html","a5d051d70e8fb30762737509febc1f59"],["/posts/1634682499.html","9d10e6b119bea6b3457f4be92b99e9e4"],["/posts/1720673220.html","d0ef54a8f7afbb424895608ab00df8bb"],["/posts/1794184575.html","ca9c5950c11cbba32d648e1f6c2ad622"],["/posts/179783341.html","5c80e504ae71fd9e406c174d232296f5"],["/posts/2007769797.html","61fb1c5881d0186c954a280211d52e26"],["/posts/2062301197.html","e0a2204a74f950ed71ab6fb7a384050b"],["/posts/2071449193.html","d9ab68006142f4490e66631af6b7cc1f"],["/posts/2075292597.html","d97e22b4ddb410b2abe908687843417c"],["/posts/2124882507.html","a54bf5dad5bbf62fd4edeea0f92f14a2"],["/posts/2131155013.html","14b2a0cea0545aa7081df5e892640f3a"],["/posts/2169143571.html","7fbf838b9a44e43a4d3a1440debeabf8"],["/posts/219349139.html","db03df8cd39354d1bda95d5c776d4a80"],["/posts/2217063026.html","f9c33e509bbb59ada13b0edde5e1db02"],["/posts/2218506745.html","a9f41105c8ffe4c123b5de6502921890"],["/posts/2292260110.html","4f482099ac5903369513a26a5c7094bc"],["/posts/229643181.html","4a25d99b7bc84d6105bd64c24eb176d0"],["/posts/235914813.html","7e130937eaaa11d5306db2d63eff3033"],["/posts/2387908466.html","f083689ff03a72b72132551a6598ddbb"],["/posts/2580568501.html","5c418596d2e30eea30a6ea3de144f802"],["/posts/2621268747.html","5add2eab8c0079623dac5fe6a3cfa3a1"],["/posts/265724518.html","f8c9a3276fa0846b7a9997052e8f836a"],["/posts/2716721158.html","1e15fe54cedde8d8ca6703ed587857c5"],["/posts/2747544176.html","ab9cbc097a6a2085a0e7d696fc327448"],["/posts/2799443321.html","6ff4c7129c3bbf4f78d6745962521278"],["/posts/2803057116.html","8a755f04cfa1610193c5bacec3d02887"],["/posts/2818550155.html","299f74e6e1cecfc6b77ddb2a492d3a52"],["/posts/282252185.html","d519c378d0fa2e1066fc6f520f7eecde"],["/posts/2959925095.html","9d8d1b569b527b39111fd3a93ac17c63"],["/posts/2971665882.html","2d375515fe2bacd336a526883907de17"],["/posts/3067404590.html","22966cff0bc59cdd85daa6411b2b7a88"],["/posts/310999178.html","2fee7e3876caf6f2522736e79d9be78e"],["/posts/3120977046.html","d12fa62dcefbf2462778851d85337e33"],["/posts/3253065341.html","89bc2d9ac888d8a887f6d91d6c49f916"],["/posts/3253305718.html","91da3aa5b579d87cb2b74af115309a07"],["/posts/3384747987.html","bbaa445d4e39d646ba6fa625a10d3393"],["/posts/349024060.html","582872c034368c8078751002801d1c82"],["/posts/3598970227.html","c04680ea58f90d885c59b44ea202d3d5"],["/posts/3611094049.html","5526c4f6e6ac12885372a70a457c790a"],["/posts/3631469724.html","085f06f6802449db3792580ca2c5d4eb"],["/posts/3691095479.html","4614e9d87afaa8f7c9f5a3f5dd53ddee"],["/posts/372934289.html","d0e298a0a5d0a9db2bc1dc8f5cbc7c11"],["/posts/3737997078.html","ded3cbd5383a0264b69566343529c586"],["/posts/3783644122.html","fd10469acdc4a505ba5832ebdc047c48"],["/posts/3906205819.html","9a6128962782b34f30acb946a72ecff7"],["/posts/3912543564.html","39ff053514c00760d3e0c5eb485b7968"],["/posts/3998253138.html","4ebcc315a68f8eedfb02c6cfc9d12eb1"],["/posts/4075683688.html","d4fcfa3ebeae9ab052bc37b7d668a52b"],["/posts/4184919567.html","1770e9569401b7c401eae09153c44599"],["/posts/428414458.html","facdaa02879977f9a5ecebd896715cf3"],["/posts/4285860800.html","59fb03d3e3555f731cd056378943f873"],["/posts/50508479.html","80894fe2ba693191f8811bc9a401daab"],["/posts/511687579.html","c949aa39e2cc2c5211fd61686eedc9f0"],["/posts/611441247.html","e033ef118d0637cbf7ef319c39293b68"],["/posts/619926249.html","a80130a0dee9d7afceeb4e4cd5e28d97"],["/posts/656350506.html","5e952e0cce3ff3aa63096753365b6692"],["/posts/680535600.html","71be7f2faa922e8f8556c3e70f873f2e"],["/posts/684607466.html","2c88f9e4b2a8995c1a7899cb22dc26cb"],["/posts/686254810.html","f6842294bc4bd29c70590878a15b8d7d"],["/posts/710205459.html","cb824bfecbee5a9b876c87f3b4f4919d"],["/posts/775935900.html","c43efa59350d215f55a05bc7783f4fd2"],["/posts/854292428.html","53ad1f3248b83ade579923078dd7ecd4"],["/posts/855735627.html","85b4874734a771fe0e5cb1a8cf45ac93"],["/posts/867212230.html","c28bcc95637615c1ed7bdc4f03d609be"],["/posts/926905116.html","b8f731cfb483821e973a93610fcbf4b2"],["/posts/CSR_SSR_ISR.html","5142e256fd98da6fa9a18785cc48b1ce"],["/posts/CSStricks-1.html","b4708a4d4fac7ae4ebeadd710b419d5a"],["/posts/CSStricks-2.html","15cf6fd59f421fb2a8a6a2bef6ede9d4"],["/posts/ES6.html","eb1992bb832ddc2f2f23aff4f9167af3"],["/posts/HTTPS.html","626a067158b5bc9096d761dc76287a06"],["/posts/React's Component.html","f5afba3450a2ac73bf09979fa2e8d104"],["/posts/React's key Concept-1.html","4d9e8b29f94be925620aa671dc27ccd7"],["/posts/React's key Concept-2.html","082545dfdb7096310e2749cfa137e8fe"],["/posts/ReactHooks.html","24009e2ca289316215238cb3b4875064"],["/posts/React_lifecycle.html","a1bad53c97383d0149c01677aab65f43"],["/posts/URL_URI.html","86019910f1bbe6ccf6f37518edc3c592"],["/posts/animation.html","75e9179417843258845a976368a6e3b0"],["/posts/antd-data-show.html","1d69f3017e7a95be1d37aa95db18575a"],["/posts/basic_construct_1.html","1a83c9e4b92b04b5ca9716ad4fe79af4"],["/posts/basic_construct_2.html","24a358cb44c0b81041ba5953ca51de65"],["/posts/better_performance.html","0dc5c9f6508544cce97da7be62302496"],["/posts/blogChange1.html","70d8d51f71c01418cb7411a6d591af80"],["/posts/blogChange2.html","9f118d24eeafad2e81e1a540ea286fd4"],["/posts/cat.html","9712032eeabb1ca5ff49ad6d20aa58a7"],["/posts/cookie&&session.html","066c1260b13acd28d5c2c3aba314d1f1"],["/posts/feature-tricks1.html","caa6afb6a1dda24164894565e1c52441"],["/posts/file-read.html","f1b7b85dc65b8239cded69dc3802589f"],["/posts/gap-property.html","da0e7cb2c441cffcc19f1903cd209291"],["/posts/hideElement.html","5dda7a922657baff5d2377417dfaf042"],["/posts/http-cache.html","23e92f5d22fd7fc81ee2c4c178ecd20e"],["/posts/http_cache.html","3405f99fe0472e845945fb2ebaf7f59f"],["/posts/privateGame.html","ff93469e748d8c2bd2436298dd0256b6"],["/posts/prototype.html","68d8516815e8067db8e8be91f3f79bb2"],["/posts/react_components.html","8db51ae9ee249b9a49155d42f74dd832"],["/posts/react_vue_data.html","a03dac41943ccef30df38868a15fcec1"],["/posts/requestAnimationFrame_1.html","60d34954fba6add454f084dfe4b4ff5f"],["/posts/scroll.html","5bdd8da04e18b5fc4157cbe4ab92464b"],["/posts/toolsTest.html","fe804319d5e1806b5b3cc1ad39958270"],["/posts/vue_lifeCycle.html","573e603abcde1c527513cf97c393135c"],["/posts/what's Hook.html","6cbe230fcdb3be8df555d9e778fe73cc"],["/posts/why Hook.html","830098a9b352242a6a0599dc5f8d4e54"],["/posts/前端模块化.html","2d67040de128355e1fb9ccd423fa34a7"],["/posts/路由.html","ca68e9debdc4a8a8eb8cc9050b484da9"],["/sw-register.js","ba04b2e1e5e5f16dca83c223476f9b72"],["/tags/BFC/index.html","041d3612d84b8cc9dafd604f62f1080c"],["/tags/BOM/index.html","6c12b32569e2aa0fecde3e142cfeb250"],["/tags/CDN/index.html","4d68eb824687f5c8f6d6c7829ff36f55"],["/tags/CSS-in-JS/index.html","a0d66a4f3bd0a6086cf65c60c8976e0d"],["/tags/CSS/index.html","2770b4e41dc4eec453cbb4e1b967a3b3"],["/tags/CSS动画/index.html","55fb72e7718dada4881174aa89817cfa"],["/tags/CSS属性/index.html","6a6d5db1ca65964a347a1f66395028b5"],["/tags/CommonJS/index.html","6da602644a1f602547801e4fb623ab9b"],["/tags/DOM/index.html","f9dfd508d60641550084fbf68d76ff44"],["/tags/ESModule/index.html","a4b2f4e5f5574bce6bef3157d665b345"],["/tags/EventLoop/index.html","5329eefababc3aa13b9cac3d0abb51f4"],["/tags/Git/index.html","64e6af9f9a018268d53af3cabe13607c"],["/tags/Github/index.html","3e89af67ed7698724c1930a45669e8fe"],["/tags/HTTP/index.html","00b6a0cc497d9b453b056232870131e9"],["/tags/HTTPS/index.html","dc6952a144ad873935170d11fdcbc89e"],["/tags/Hook/index.html","2d07ff94deaf7d00cbcbc43abf0a4026"],["/tags/Hooks/index.html","90c1197ff8324f689d3b2c95250e097e"],["/tags/IFC/index.html","eff399ae32cfd69431b4d0d2be9d4ac1"],["/tags/JS/index.html","fd73112c37c47ae08c6fd9facd73e028"],["/tags/JS/page/2/index.html","d417e8541221f0d64dd87cb02169dbb2"],["/tags/JS/page/3/index.html","401a5c1ab22ba4d04a1f4720a1305720"],["/tags/JS/page/4/index.html","53ffff8f4e2817074ec59280e508d818"],["/tags/Node、Antd/index.html","aaf8cbb519f51cd0106a2097c6627852"],["/tags/Node、MySQL2/index.html","46286c78bf3d9c1b9e52db9e4dab7b92"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","4ff96fcd1438ab555817d731712dab9d"],["/tags/Promise/index.html","7f60ac192840ab1f9174cc77978421dc"],["/tags/Promsie、Async、await/index.html","904a897a43b39b39fafb0a5190445562"],["/tags/React文档/index.html","abbc74e2d69f68e7f307a85291f56d28"],["/tags/TCP/index.html","fb7f8dfa518715c6e98343aadc9b1745"],["/tags/Tools/index.html","3531d32cdd6db1f9b05f313796a679e9"],["/tags/UDP/index.html","9fb6ec1b7b2cd170ab333594cd83435d"],["/tags/URL、URI/index.html","2527381148c63eb024a32fd4807e4c18"],["/tags/Vue/index.html","48a446f4bf794da2972d8f46d793a0eb"],["/tags/ajax/index.html","c91f84193923c51584c14065fea80f49"],["/tags/async/index.html","f13f72819f674d171cf91decfd616d85"],["/tags/axios/index.html","50b0cc9f30d984ab8368fbc320f84aee"],["/tags/codeReview/index.html","65d1e093e93d5989190678fd494df71e"],["/tags/cssModule/index.html","0ec815b857b4dc499e57dd3feb251452"],["/tags/defer/index.html","7ba10f58817e2de010c51177498cf1ab"],["/tags/flex/index.html","0711f75c5674c3e6897432acb7805885"],["/tags/index.html","68342e72ff74cf6fdac2a1a4105afdff"],["/tags/overflow、滚动/index.html","c3afa25d084a2038ba4ee456e065f86a"],["/tags/position/index.html","07523b1a44247ba7a02b03cb33df9d84"],["/tags/requestAnimationFrame/index.html","69cd01ae03cd1c65916bf395fc86c8c1"],["/tags/webpack/index.html","af5cc242523965c061c37ea309f11bf0"],["/tags/webpack插件/index.html","72c30b4c0a32a9609cd4e63a02a45e33"],["/tags/webp图片/index.html","57cec58042089a6389005b640ef7d2c4"],["/tags/二叉树遍历/index.html","5226217b1b9d909e66323ea1e3a523fa"],["/tags/优化/index.html","5a0bd531fc4d59f34b7e269fa74b405d"],["/tags/函数组件/index.html","288d47869388e09bc59a48762a972543"],["/tags/前端基建/index.html","1adbdd3fa7bd972ae595d9b59f55d07b"],["/tags/功能实现的tricks/index.html","cf33e87b79e5cf23759ef32bf5af4dea"],["/tags/去重/index.html","d9af106f1064f68c64a302d7d578845d"],["/tags/双向绑定/index.html","6a27daf96c616778b5446f8c7ac9f88a"],["/tags/响应式更新/index.html","3f95151a80f83645584203d883f5f1b1"],["/tags/安全/index.html","d8c5f211bc65f1cf8d66d6a923d044dc"],["/tags/宏任务/index.html","6ac86c7d7367a51002b5380fe74b1c62"],["/tags/帧动画/index.html","8ed461eec06485957d7c5be6f0f28955"],["/tags/微任务/index.html","be7d562a1e49a20f77ce12d58eaea3f4"],["/tags/性能优化/index.html","8114c46bb156dd01520a93836b4336c0"],["/tags/懒加载/index.html","06c40134d1151b7fa7cd6c3d578af30f"],["/tags/扁平化/index.html","0968a0dc4137bcd8088ed25ce7eed365"],["/tags/排序算法/index.html","c393f9b5082fea2fd3f91e151650cff0"],["/tags/数据流管理/index.html","4c4c9422379da998d6724b98394e7a81"],["/tags/数组API/index.html","496c391bfe4a74128c6aa186c56d85bf"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","577a501c24cedb1d2f742f45cf7a02eb"],["/tags/文件上传/index.html","ceb68aa847cdc4fe50e9cf94b10b521a"],["/tags/样式污染/index.html","14dd3c9182ae8213ad1b3fd6757f60ce"],["/tags/模块化/index.html","02dc7b6793ee810a7f71c826dfb5f04f"],["/tags/浮动/index.html","e530982aaa6f7ee9c427a8be082443d6"],["/tags/渲染解析/index.html","ae967e644b49eb4c23f18a791086b7ce"],["/tags/生命周期/index.html","9ec654addf7983b6a0676f7bb9dfa798"],["/tags/盒模型/index.html","43018c0e0a5eec2ee12526df5ff7ce42"],["/tags/移动端适配/index.html","0e7263b96f01e597f1ad4749caba4be5"],["/tags/类组件/index.html","82a917a9c95ae692f93e2c3868a0f9af"],["/tags/组件库-antd/index.html","f1ea45537426d2eb0e700a8dcbdcc812"],["/tags/组件通信/index.html","1da535a5f445e708b196fd3d516b593b"],["/tags/编译执行/index.html","4544b2c2fb5ef43a72b825a6eeaaee2c"],["/tags/网络请求/index.html","e5521d42b1e92a253f67fded92621c82"],["/tags/虚拟DOM/index.html","9ffec33edaabf67847c633d269f466bc"],["/tags/表单提交/index.html","05074829a66c67959192143b650ae329"],["/tags/计算机课程/index.html","ddef13dd72b5fc573227d6439ba7a4bd"],["/tags/计网/index.html","060a483c0d3327af5544203f3bc03f0a"],["/tags/跨域/index.html","c827099b8fc2308c2b3e6a903b0cba8c"],["/tags/跨域解决方案/index.html","5815566d1bb178c452ee3a7181669965"],["/tags/跨域问题/index.html","7e876fc7f61cdfe5570aafc8aac52233"],["/tags/路由管理/index.html","bed5d161e307a8a7ab1d51d16b7ce9ea"],["/tags/进程线程/index.html","1398c0521b1de87cbc0e811d5be4cac1"],["/tags/选择器/index.html","60c7fd539f60bded63bdb0d2fdfb8569"],["/tags/选择器优先级/index.html","1f9a9160d2e0411ad7abf46ccad4edb8"],["/tags/隐藏元素/index.html","5ff8b420ddbe9cc82cd0b5fe307e556f"],["/tags/页面解析渲染/index.html","3593813a6b492dba520c1e7889b27dea"],["/tags/预加载/index.html","9aa72fc55d7cfe14ec66190d05078128"],["/tags/驼峰命名转换/index.html","61df39e0ec829230bc8c7d4b11b5c751"],["/tags/高度塌陷/index.html","a16b24592218103799161251bdd5c15e"]];
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
