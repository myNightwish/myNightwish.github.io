/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","61493121152ec7ac5b4162b948091002"],["/archives/2021/12/index.html","a7c856c0d3cd76c73b0011c9607273ea"],["/archives/2021/12/page/10/index.html","03a60c77b8952d1c9a357cb31ef0c3c9"],["/archives/2021/12/page/11/index.html","692fe2dfb8f9c8b3f31e4e52637e6a60"],["/archives/2021/12/page/12/index.html","aeaa0bec085a03a1df22be8eadcc3d88"],["/archives/2021/12/page/13/index.html","a038540b22d62f20aba5e340ec916f8d"],["/archives/2021/12/page/14/index.html","0b496cd6fee7549f92674ac37a8780e4"],["/archives/2021/12/page/2/index.html","a1c5424f162314e81e97e98c43018628"],["/archives/2021/12/page/3/index.html","9b74468bbaaccef5caf4ccbdb23f1296"],["/archives/2021/12/page/4/index.html","d07901b55931cb1c936968b2eea37594"],["/archives/2021/12/page/5/index.html","a1f9bce96ced4128385daff3c8b1343f"],["/archives/2021/12/page/6/index.html","55e73226a241e8708bd4bc12834dc6df"],["/archives/2021/12/page/7/index.html","ccea44bd9d4cbf48b997607b588d656b"],["/archives/2021/12/page/8/index.html","72a6629775f7d71b4d8b6fd159869f4c"],["/archives/2021/12/page/9/index.html","2d0915b44aebd1a5f7b1ac532dab9d3e"],["/archives/2021/index.html","8e87dac71eb2ead61e6310a1f0ca6ddc"],["/archives/2021/page/10/index.html","8bbc70eb5e81d63d7a1f5534da5d6541"],["/archives/2021/page/11/index.html","9c18b578828d9a6d979f59b418a6fb0c"],["/archives/2021/page/12/index.html","3f55f93947436b8b8c3a4b724ee7b41e"],["/archives/2021/page/13/index.html","0bc5e97f33c045555acf7cf2f8b2975c"],["/archives/2021/page/14/index.html","49f30439a26a1c446bf266e26abbf2a1"],["/archives/2021/page/2/index.html","66e4a943e75447a558d484d36a207557"],["/archives/2021/page/3/index.html","2260df443451b765934a15a7bac1029a"],["/archives/2021/page/4/index.html","80d7f68d965f6e8b6a2df37a2fe95c10"],["/archives/2021/page/5/index.html","00e1cec95bd7df1bad9d453bbee4d39a"],["/archives/2021/page/6/index.html","979c0e12a0fe27511ab4854bd86baa98"],["/archives/2021/page/7/index.html","c7f30ed150f51de6898a61f375ba6f49"],["/archives/2021/page/8/index.html","88f64c04147cd11cc3156fc7508063f3"],["/archives/2021/page/9/index.html","b35fa1e848bdda9c6997c2b8d5e27ba2"],["/archives/2022/01/index.html","01bdc5154d6fe23577cf25efa232d5ce"],["/archives/2022/03/index.html","0fbdda582d309eee7d9163353ee19e2d"],["/archives/2022/03/page/2/index.html","b7dbf08e62d6b8012e3bd3c3a9dc1cc3"],["/archives/2022/04/index.html","b6e146a4d5dc8d6b827e546b788b2fed"],["/archives/2022/04/page/2/index.html","de933f2e356d83eebaf90351670ca485"],["/archives/2022/05/index.html","067d1916250ffcba84c648a485fbc0a4"],["/archives/2022/06/index.html","f5a0e967fcd12af17dd9826b9b24aa5a"],["/archives/2022/index.html","8590142880173e1ca215b3685ddfa85d"],["/archives/2022/page/2/index.html","21935598aaa9fb06d1f3fba1d71e9163"],["/archives/2022/page/3/index.html","f2a006fc34d94d4806be35ec2c739fd9"],["/archives/2022/page/4/index.html","707288ad2f2e266d3c5da49f64832ce6"],["/archives/2022/page/5/index.html","24e8174e9993d94b8eaeeb0d04c88b86"],["/archives/2022/page/6/index.html","888ec96adb364ee84b30da39e98db581"],["/archives/2222/03/index.html","e157dbc0959eb8b51645aa7fbd8b2fbf"],["/archives/2222/index.html","e63ce9996a36f7fe89e7e5236dd1144b"],["/archives/index.html","b8a420c52ff462c53811f8faa737bd7e"],["/archives/page/10/index.html","9d356e80a51ee1d29ac65bae791cc776"],["/archives/page/11/index.html","7ba8901ac444ceb8cbba12983ddd1ee3"],["/archives/page/12/index.html","f6b623215eefef82c2ca32f5b51dd2f0"],["/archives/page/13/index.html","f178443cfd3308571c75d5729159f07c"],["/archives/page/14/index.html","ee09be11267999938be63711062164a2"],["/archives/page/15/index.html","0be9c24e43e87fbfb8712a74d86d5eec"],["/archives/page/16/index.html","0d9b06a7d3227e4c8b719f09aca5a40d"],["/archives/page/17/index.html","226772e45ccffeff01f32aabc0aeb470"],["/archives/page/18/index.html","e5035425f843968d83c3ac71548568d3"],["/archives/page/19/index.html","32fdc4fb4ad782e325735c0ce0d9f035"],["/archives/page/2/index.html","aeefde01a5ad6b361cdd3510fc64ddaa"],["/archives/page/3/index.html","3b5d6a55aba38225e058789028d54a3f"],["/archives/page/4/index.html","dc9c306602e9912183590538e33ce514"],["/archives/page/5/index.html","bfe9c598684c8acaa5fd110f76a6a9b5"],["/archives/page/6/index.html","460ee6448efa6ee386c86ec46f32a8ed"],["/archives/page/7/index.html","5122f3bf7c341b31ab8cde567fda31b4"],["/archives/page/8/index.html","22ef3bedbad3d588f92d98140d0ceac5"],["/archives/page/9/index.html","e19aec4fd2330a5a59950e3f2fadea0d"],["/books/index.html","b8db873fb155d741e04913270948c224"],["/categories/1-1-CSS/index.html","0072293be8d1ca99882057b3de3042a6"],["/categories/1-1-CSS/page/2/index.html","9082509bcef3ce310aa2fb4d21ae6426"],["/categories/1-1-CSS/page/3/index.html","1ed52febc729528431eab347e3218199"],["/categories/1-2-JS/index.html","9d88857eddd7c62aa55b5a22e6158e1c"],["/categories/1-2-JS/page/2/index.html","4c528ec9b92f9c60328521d40ff176e0"],["/categories/1-2-JS/page/3/index.html","79a2cf1db211674fda061b5c0cdb06fe"],["/categories/1-2-JS/page/4/index.html","6110bdb8e34790f035f95e8acd1aa828"],["/categories/1-2-JS/page/5/index.html","b2c38a8a0cc7c7b1ee0dd8bf5aada0c5"],["/categories/1-3-Ajax/index.html","50ff45270918f852cb6d295c958b9fff"],["/categories/1-4-框架/index.html","00f384086a3fd45bbb029ee080e81c2a"],["/categories/1-4-框架/page/2/index.html","ab5b847b2b3dfaca05e64e6c45173f4f"],["/categories/1-4-框架/page/3/index.html","1f8fff998cfc70a200b496d00f2db145"],["/categories/2-1-组件库/index.html","c954e546cd972051921b13e5b1ee4bf3"],["/categories/2-2-基建/index.html","c1a8b2aafe1ddab19adb014c164ae9da"],["/categories/2-3-实现Tricks/index.html","5e1b8612f241899720eb28126b8023a9"],["/categories/2-4-项目/index.html","6e89fb224e4e8454fd0aacd8dd19b7c1"],["/categories/2-4-项目/page/2/index.html","db744fd01e45f80b794c4cea22e6a891"],["/categories/3-1-记录/index.html","c65c044c84134c5db9bcaf03667847fb"],["/categories/3-2-浏览器/index.html","153aa06e2f0a2efdcceeb473e3ee6e56"],["/categories/3-2-浏览器/page/2/index.html","2bff2e594847376d7d0e004ed0cf8c7d"],["/categories/3-3-基础/index.html","0dcf339425b2260a8e7d7638687848cd"],["/categories/3-3-基础/page/2/index.html","25c883ae69ef94239579eb8b1cb56d6b"],["/categories/3-4-Tool-Shell/index.html","18099c68f594281aea870f2d1ab141ed"],["/categories/index.html","7c77fd5137e16e61c7efc497491e857c"],["/charts/index.html","b2083d01c9a87edfd99768080b3dbd8e"],["/comments/index.html","d9e365f9a9803c2fc53c4a7a0796f37e"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","9229df9cece568c419b85e8e848da9c7"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","e84987a00d3dd19e0ceb41861d85609a"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","e7dba33b6a20677888debd873d30ae25"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","71a4f72fe1f3d9591a33a3811ff967d8"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","a93dc9cf4b62d0b7edb9693bb8b0ebaf"],["/music/index.html","c7582012dc6a5854d071d1d687dd3110"],["/page/10/index.html","c6039641c2cadba99d2af90ae63ad1ec"],["/page/2/index.html","c8cc2eaa23fd28ce45b8ecf8b3c11146"],["/page/3/index.html","cd04ad5a5247d57aad0f60377fd07af3"],["/page/4/index.html","80febf71c8c94968a31141f34ac0dd00"],["/page/5/index.html","4df640f13dfdec20844d58fb273a5931"],["/page/6/index.html","0162657fc64f0b41b8a30bcaa41ede8d"],["/page/7/index.html","f9396f8126d76bdc2df37a63fd0029e9"],["/page/8/index.html","d3c4aba2bab6fa6db0ab3582330b5a5e"],["/page/9/index.html","fcdaf7de004b21baa7556d0621284b25"],["/posts/1003179605.html","3305c8482e47dc9dda33611322ee44c5"],["/posts/1078088869.html","346ff29b483ea63d9b0080e85d85b05c"],["/posts/1168384896.html","e82624785017fa57dde5d8617ebf9e9b"],["/posts/1174755164.html","b2996ed4e9539b96135d6af1a07ca078"],["/posts/1207877865.html","1496122cc6377af50116ff62bd28790f"],["/posts/1322992885.html","169ad7756d373735f0528bb88fa4a398"],["/posts/1405183845.html","57c7ebe1108a3da09927e929f949aef2"],["/posts/1460941642.html","f0405979ff6de9b1ecb0d2f72c16ceb9"],["/posts/159855229.html","feb25511cd0e7cac924c83a6d77289e7"],["/posts/162997961.html","9997d8812e1a0946cbff0e07d2f39489"],["/posts/1634682499.html","256e5854f3fbfea7509bdcdbee6bba30"],["/posts/1720673220.html","40acdd706e511df6ce2e308565ca4262"],["/posts/1794184575.html","1e8aabcc09f41111b15970924371bba6"],["/posts/179783341.html","5bd2b725011a71f4009c9a619b722446"],["/posts/2007769797.html","98ef1e1d4f76ea4d010561b00c28593b"],["/posts/2062301197.html","11b6a4f1734041e14fd3ca8891afec60"],["/posts/2071449193.html","d5a9a4888b4c93558e7cfae683939696"],["/posts/2075292597.html","86d0edc2129ab000a0efad9780088fef"],["/posts/2124882507.html","5fc17a88924d63eaa50f6d984ed1feb2"],["/posts/2131155013.html","9b756492728af54df596cb5f739f64eb"],["/posts/2169143571.html","55957b5969692540d0edf1d3640b361e"],["/posts/219349139.html","1f4d3f628681e45aecc467180166a13d"],["/posts/2217063026.html","ecb14c9b3c80a2f16f299b0edc92c86d"],["/posts/2218506745.html","1d7afe1708956dafb57af55f21cf7cf0"],["/posts/2292260110.html","2df263343d9567d13cf7e074361cd402"],["/posts/229643181.html","5217cbdfefdfe0ff19fa4ce9ea4f1de9"],["/posts/235914813.html","6586f98a861b65671b25486ae3ed4f53"],["/posts/2387908466.html","5a44e2c7980f4be592c963783f6f11e8"],["/posts/2580568501.html","5f31d83dfd4a4b725db39f66ff2dc7a4"],["/posts/2621268747.html","33795507389935300c6a9e55104b58c5"],["/posts/265724518.html","51a26c15056892f540263076eb44521f"],["/posts/2716721158.html","669bb0cdfe9e0474be957e58af0ee359"],["/posts/2747544176.html","e7fed13fc6ea28c132d3dc40eb75cc5c"],["/posts/2799443321.html","28f118c7c2d2e121c28976a69d29eaa0"],["/posts/2803057116.html","20f9373bde6e25cd9354041f20fb026c"],["/posts/2818550155.html","9723037921a30f26469721dc9cfccb8b"],["/posts/282252185.html","ad348b9f34a88d677643b64459db5f50"],["/posts/2959925095.html","16569f9464a9de78f43272d4f7c98c00"],["/posts/2971665882.html","6b3036175738c1a732e3f52f252ac315"],["/posts/3067404590.html","f0c5dcab868616773314c2440c30c6cd"],["/posts/310999178.html","73dacbae5e51d726e46494e9a9a15873"],["/posts/3120977046.html","b09d7c56831749fcc5a0922b3f61b914"],["/posts/3253065341.html","e2d500de8bcf87d627191c2baabb5931"],["/posts/3253305718.html","e3f4213c703249660a83d3bea0f06d36"],["/posts/3384747987.html","d7165c96e5a9841c033fec46ebaf3760"],["/posts/349024060.html","9a6f167aab939d05556ce82d7a9ba5f2"],["/posts/3598970227.html","ca2dcbc26fbb8b960519ebe70f818d92"],["/posts/3611094049.html","40cb9444944024694ea35ea41fe61a12"],["/posts/3631469724.html","2025a0d84263cda96ec790a98996163f"],["/posts/3691095479.html","786d720cb6154aa4b620320be72ccedb"],["/posts/372934289.html","4b9a2fca9fb9db3fa112d32f697d138f"],["/posts/3737997078.html","234bf3e9addd47f9f9a8c78f75b9dad5"],["/posts/3783644122.html","2c8620b379cdd9ad6d4ff9cb22aa8d0e"],["/posts/3906205819.html","31762198e1cfe8a1025b532931f975c9"],["/posts/3912543564.html","b93d712bc9ca8edcf9c7b82931bca8c5"],["/posts/3998253138.html","e91752f2f88f6e0a75dd6dfcf8ae5aa7"],["/posts/4075683688.html","2d52b1f95f1c91b12c4005c9aa1b8616"],["/posts/4184919567.html","613026908bd2cacfc8d3618c1749b10b"],["/posts/428414458.html","903178daca7024dfa26523d03dc71001"],["/posts/4285860800.html","831eeeed76a684882c72e111082744e4"],["/posts/50508479.html","9f213d3c0fbbbd41c5da41574cf5f571"],["/posts/511687579.html","17144b5f974ec7236ac2b2335873bed9"],["/posts/611441247.html","3331e98bfc7db187911a863101619aea"],["/posts/619926249.html","1e365ac4ecc627e2feccc3ba33f6cfd3"],["/posts/656350506.html","db00f013a5db5cf13fb1571140831f27"],["/posts/680535600.html","4226b09e1059311a31bf444755124cb7"],["/posts/684607466.html","9db3b53f913fca2c6a2dcd0fb5cac26d"],["/posts/686254810.html","9a21924580c591bf3498e9c62c3d0109"],["/posts/710205459.html","ae8b856e7ac2ddfee40874cf502034c0"],["/posts/775935900.html","1b3ef8ff32248c3890095a758c6918a5"],["/posts/854292428.html","58f99192f291a45dc03f99339d524d42"],["/posts/855735627.html","d479028179315a92021b281f68c58413"],["/posts/867212230.html","8f11a2bd8de59e5b4f6b81d78bd8bcb0"],["/posts/926905116.html","5162fa115cef9a1c4206ba0a6aba36de"],["/posts/CSR_SSR_ISR.html","c1283f4715d41ac62031369326a3adf6"],["/posts/CSStricks-1.html","4a1cfc7fca8c5a8c85734a06381641b0"],["/posts/CSStricks-2.html","9fa8de6b1db2e52a66e8118055fce661"],["/posts/ES6.html","fabdff2ec8614d8281912ceff35fbd51"],["/posts/HTTPS.html","8a297e728274095a3ebeb2104a9de1dd"],["/posts/React's Component.html","0024f57c1cd5752828808913c61739a1"],["/posts/React's key Concept-1.html","cd414a855b788700fc5f5b3c31de1a67"],["/posts/React's key Concept-2.html","eaabd5fe8d654a0f9c4add2b8b9a345b"],["/posts/ReactHooks.html","43db03249bb25970f68d3c73364da110"],["/posts/React_lifecycle.html","428a8948b6c1352a4d6bae47c6d02cb5"],["/posts/URL_URI.html","acc63d1cb5d588b2b50a38ac79fb7a07"],["/posts/animation.html","6032f8d7abcba1ac6211b7f47b12d2be"],["/posts/antd-data-show.html","ad5da869e34a4c283c3378e4e00299dc"],["/posts/basic_construct_1.html","3e27d0227e2893dbf1f05e9af9e1b0d7"],["/posts/basic_construct_2.html","e406cac01147b5f3d90085436c25d82a"],["/posts/better_performance.html","871934ef535edef6b8839565530717e1"],["/posts/blogChange1.html","775accf45f77c1ec268eb81876b07cf9"],["/posts/blogChange2.html","4051f70d8e2c7d08f472623727be5aed"],["/posts/cat.html","93592839ec7a7b4a3039b63809c44b67"],["/posts/cookie&&session.html","3a01f42f7f4810a646492992655321b7"],["/posts/feature-tricks1.html","358170c61b6f467bf8f42c93324d6632"],["/posts/file-read.html","e2777c2017dad99e0904aba3ebbb970e"],["/posts/gap-property.html","fd9a6071a174fc4a29e7179b173b59ab"],["/posts/hideElement.html","ff9b75a5c8e013bd65387913d554c45c"],["/posts/http-cache.html","7aee867368b066148e95845e2ffe344c"],["/posts/http_cache.html","ea1c2aeb43f05ca1df876ee57e845d43"],["/posts/privateGame.html","f000009a01beb81126de2dab228f9d52"],["/posts/prototype.html","d4697cdff188dc27b4c0f5a229f0671f"],["/posts/react_components.html","c9a563835a658147348930b3695a44df"],["/posts/react_vue_data.html","def33c84f12058ab6a23d0f373464b39"],["/posts/requestAnimationFrame_1.html","e72b2b67091e8e295c610035f4c96f61"],["/posts/scroll.html","2a1a67d40642dd6f676c4ddc44f5e2b0"],["/posts/toolsTest.html","bef483a58cbaf056f991044e55613e18"],["/posts/vue_lifeCycle.html","7380bda9613fa51d9d6cb47b93d78f1b"],["/posts/what's Hook.html","8184cef4c6cfd5572d6e6e498be74a83"],["/posts/why Hook.html","b11d1af3b605978a4b4af652b795d22f"],["/posts/前端模块化.html","3308aadb3969e31e1735e8f75b2ff0c4"],["/posts/路由.html","5e7590f6c18785c0a3c65e18edec18a3"],["/sw-register.js","f6af40d3e1585c2cb2c312aec2e11f3d"],["/tags/BFC/index.html","3532950bceb558c39199643eca0b5149"],["/tags/BOM/index.html","1b1508781c71dba67220a7b581ae7623"],["/tags/CDN/index.html","d52af2d1e4fc5216fa213d706381c93d"],["/tags/CSS-in-JS/index.html","af1fe91c078c5a04c6a01e0c53c19261"],["/tags/CSS/index.html","f2a9cbc3cfbd117e11442403cdf1796e"],["/tags/CSS动画/index.html","347a98d12badcd13b31b55d58ae02684"],["/tags/CSS属性/index.html","1dc68dbcc481726f083c2d706b6eefe1"],["/tags/CommonJS/index.html","3031cc54c3b24b01b06a4599669ba990"],["/tags/DOM/index.html","a6a7c420d6cf1501e83024d174d8836d"],["/tags/ESModule/index.html","3cba088ddf27eebfd81f2a7c5d871d86"],["/tags/EventLoop/index.html","400de921abfb2452a8ae8042447f22ba"],["/tags/Git/index.html","a90cbaf30553634732b8dfa884f259ee"],["/tags/Github/index.html","3d344045dd09e6c7ea84e9140490431e"],["/tags/HTTP/index.html","696cccddb208458e78024244374198d5"],["/tags/HTTPS/index.html","e5ad74da75295ab33b979fdd48cffcf2"],["/tags/Hook/index.html","965416f8cc1a4224ab95567e5d2b22b6"],["/tags/Hooks/index.html","1ddeec74af960d0931e97b40d90129d7"],["/tags/IFC/index.html","225497367d21a91257a50454df117efe"],["/tags/JS/index.html","d7d7834621ec1941f5963458087e0b96"],["/tags/JS/page/2/index.html","4a5793db4c0404105655d9a2548de20b"],["/tags/JS/page/3/index.html","5908e2bb50df2b882f88a0e15f17e2db"],["/tags/JS/page/4/index.html","a76a75b2cfa7d4bdecb1909ee9fff41e"],["/tags/Node、Antd/index.html","81b4ac9657660604a1319d226d65a5dd"],["/tags/Node、MySQL2/index.html","f2b6c77d745df76665b797360e2b7f2e"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","fc05ac2541a0066c80bb62abea12b718"],["/tags/Promise/index.html","07e394ef34c42179b57f9596b5891c1c"],["/tags/Promsie、Async、await/index.html","f6272d2d90ce4b3d61061598c9bd718b"],["/tags/React文档/index.html","7b8c5df991b2bacca8645738728f5226"],["/tags/TCP/index.html","b4e45d699d7806e99d7cc1b85b9a2678"],["/tags/Tools-Shell/index.html","98a4deb251732717eaf841453f37b9c8"],["/tags/UDP/index.html","3f3dc7212408981cf99159c1684a16b3"],["/tags/URL、URI/index.html","ab83b2b5cc24d09e86890decdcf32acc"],["/tags/Vue/index.html","7bf73a07e5728cdc73ae09795ae82ae3"],["/tags/ajax/index.html","2e8931fbee5dc3b4ca54eb7f42d104c9"],["/tags/async/index.html","97f8cf3f516782af3ec61a0c9bf7d78a"],["/tags/axios/index.html","bc92b232ddc93f5e7f77f42e6769ff8f"],["/tags/codeReview/index.html","f256f6f090813884a7b1e8975933991b"],["/tags/cssModule/index.html","4c56cae5950ec54c4c0e3e94b47e5e67"],["/tags/defer/index.html","47a0895147fca4279fb7c9733aefee33"],["/tags/flex/index.html","298c397021f1ee0f7eb9f052b7c9bcef"],["/tags/index.html","292243ecbb88f6ae424daa0948021d7a"],["/tags/overflow、滚动/index.html","8a8034f812320052e309d49019ee5650"],["/tags/position/index.html","88b783bf68d62b7732551cd4cb9b9195"],["/tags/requestAnimationFrame/index.html","0ff85d2f232dacf5b23b35e665553ffc"],["/tags/webpack/index.html","58b6f7dbec101cf641d7b70d8b5bbddd"],["/tags/webpack插件/index.html","554b190567a28509b3ed86ca0fc89488"],["/tags/webp图片/index.html","9aa92a04bdff7380cd350b5d27ffca1b"],["/tags/二叉树遍历/index.html","6377aed5f015e9daef4a8716bcc3d91f"],["/tags/优化/index.html","9a5ae2309e01d3b40a5d589844d2e7e5"],["/tags/函数组件/index.html","6c0540acfc7d3c912be28e3d0ca534f7"],["/tags/前端基建/index.html","60fdd652e300fab4c1505bdb6d07b2ad"],["/tags/功能实现的tricks/index.html","66a07bf7a4448dc76fc85848706710aa"],["/tags/去重/index.html","a7279573fc5a668f20818f45af17f1d9"],["/tags/双向绑定/index.html","76779f0742cb87baa307264f39d7f0d1"],["/tags/响应式更新/index.html","976cce2c938df4991ff28db366d59054"],["/tags/安全/index.html","49095c2177a756251e98fa6f3d6925cf"],["/tags/宏任务/index.html","1936d38e484485a965d447ca7063a2fc"],["/tags/帧动画/index.html","7ef0dccdfbb17317215ccc3854a62700"],["/tags/微任务/index.html","072e56013bcc693424a9042db83c05b7"],["/tags/性能优化/index.html","6c1780be8cae6cee38f40d0dd847f1c3"],["/tags/懒加载/index.html","d09a5f645d605b09de20c41ba925e0c2"],["/tags/扁平化/index.html","deb91b376b592b95b190cdf35e26f7d0"],["/tags/排序算法/index.html","c6f13093c697945051e24a4fed01c184"],["/tags/数据流管理/index.html","ad63a1a750e942242648c5c39f4afc3c"],["/tags/数组API/index.html","e603ffdb65ba690bf9ff2412fed1afaa"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","72b91d867db97520565ca09801728bac"],["/tags/文件上传/index.html","eb5a89bf546e13cbf52cb53a68baa459"],["/tags/样式污染/index.html","ce9659d89f06ce4144569db565ae2fd7"],["/tags/模块化/index.html","37df79193ad0f8872e19d52fc101be82"],["/tags/浮动/index.html","4146441a0fa0efde30a062b10c1dc083"],["/tags/渲染解析/index.html","67b648dbc185072a1db6b570f1be93d6"],["/tags/生命周期/index.html","09313800ebada77a17c808be0a719eed"],["/tags/盒模型/index.html","e412ecf815339cb0f20d1f755250e52e"],["/tags/移动端适配/index.html","7f365970488da56b94f7f8965f52c8b6"],["/tags/类组件/index.html","ebd39b3ce09e1dbb2ce3dfe379b108ba"],["/tags/组件库-antd/index.html","1cd0d8c21646c0fdc2437381705d8335"],["/tags/组件通信/index.html","0c44af6b1cc01cfe82e446cd8f6e9b2b"],["/tags/编译执行/index.html","42235f2171fabc4a82e11d877356298c"],["/tags/网络请求/index.html","f7f5176bb7cb8aef3c4e7e6b80b87e35"],["/tags/虚拟DOM/index.html","026c5fb2c8515ec165abc44e8744db73"],["/tags/表单提交/index.html","2aa1d86dc13d36200d40ef14dacc8030"],["/tags/计算机课程/index.html","4299e743e1daef87b63a118cc984930b"],["/tags/计网/index.html","d2e81b35b0f34e09b6a132e5c98184ef"],["/tags/跨域/index.html","c8927d41b5eea75efda155532af92feb"],["/tags/跨域解决方案/index.html","9fed8154999992cf64e401f97fd8d6d3"],["/tags/跨域问题/index.html","7b0ed110bf260003dd7f4d6f6ca642ee"],["/tags/路由管理/index.html","08eab0bfb0452110911779c38543f4eb"],["/tags/进程线程/index.html","33cce46d1349866bb16d3dec21fe75c6"],["/tags/选择器/index.html","7457c6314871ab7add5fd239efac7fd7"],["/tags/选择器优先级/index.html","f3344a71cadb5ba56ef68eab26569fae"],["/tags/隐藏元素/index.html","27ed0bed06a3deb10239f9beea05b52b"],["/tags/页面解析渲染/index.html","7f4c3034005a4d440d72622bfadee689"],["/tags/预加载/index.html","0acb7399c5357659c8cc7a551089de30"],["/tags/驼峰命名转换/index.html","0d3c6346f831cdfe044bc84a0b6ae791"],["/tags/高度塌陷/index.html","538cc169de9003dfe7c64332184b4160"]];
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
