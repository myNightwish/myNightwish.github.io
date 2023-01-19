/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","b8537d15174b8b03be0d5caf43dfeed4"],["/archives/2021/12/index.html","221fa973c038167b5b6678f191e45ab2"],["/archives/2021/12/page/10/index.html","31785ea0cf623b1a857ac50a0b2c4d45"],["/archives/2021/12/page/11/index.html","2430c9666385193e0fa13f5884861d17"],["/archives/2021/12/page/12/index.html","09f13872b836ed62c8045a562d222914"],["/archives/2021/12/page/13/index.html","6c688861b40f5984ae00064c8cf5ed4e"],["/archives/2021/12/page/14/index.html","85727f8b5500bd48ef4e3c7f1ff1fbbb"],["/archives/2021/12/page/2/index.html","c30a8485e870d47416c0d56e3807dfc2"],["/archives/2021/12/page/3/index.html","f1c6ac930e47b7bc0da7c972bb206311"],["/archives/2021/12/page/4/index.html","9cc0d298f37a6bdabb3cc89bb572a5f9"],["/archives/2021/12/page/5/index.html","6d5debaf94a20e05194ede759e7d7d11"],["/archives/2021/12/page/6/index.html","5f8f02b2c3b4e785d9b939d1d1c4bfb7"],["/archives/2021/12/page/7/index.html","88363943149de0abfe32ae5fd0a51b96"],["/archives/2021/12/page/8/index.html","87ed6bc79f817768bbd9a0892a571a79"],["/archives/2021/12/page/9/index.html","52493afa7798f014cfbec427d92bb38c"],["/archives/2021/index.html","a5d301eef077066ab155520744b3cde6"],["/archives/2021/page/10/index.html","428faae60cda0b5697617ba7c8ff2194"],["/archives/2021/page/11/index.html","2d4253913dde368f12ee15f49c6faa99"],["/archives/2021/page/12/index.html","b4e95c1015920eadd86af7bef8e89317"],["/archives/2021/page/13/index.html","766d72bba1ebfe8b0dd5e17b7e1b7139"],["/archives/2021/page/14/index.html","deee91c822fd50f72f8c4352aaf76954"],["/archives/2021/page/2/index.html","62d051de0277e45c8b145a6fa928bec8"],["/archives/2021/page/3/index.html","b769463ea968c80dbdfb6e6a7fa0747c"],["/archives/2021/page/4/index.html","f180a6164d5169ce0b58bb31aee39235"],["/archives/2021/page/5/index.html","86e7a5601d65b401bc47ed3d1e232afd"],["/archives/2021/page/6/index.html","70504833dfb9aca7daa5920378452223"],["/archives/2021/page/7/index.html","44e2fba462f61faee1a67e0ef14efde4"],["/archives/2021/page/8/index.html","18f44fa9b8ffff0d2d92d5bd65c68811"],["/archives/2021/page/9/index.html","c25dce0ec8429ab79b716ee79d3270a9"],["/archives/2022/01/index.html","71f5f0884e87fb205970e1afe9de5bdd"],["/archives/2022/03/index.html","6389c2a5bc8b9da7690961d5a6c1c005"],["/archives/2022/03/page/2/index.html","bd547168460e965983c025c419ad7f3b"],["/archives/2022/04/index.html","fb7bc39139968082263b9d03d2c21671"],["/archives/2022/04/page/2/index.html","f5981312439269e1fffd5d278f84fd15"],["/archives/2022/05/index.html","8c7368c44fe69c46b06bffed69f84ecf"],["/archives/2022/06/index.html","aa94ae900b2ab1ae3da319e25c78755e"],["/archives/2022/index.html","0da0e3b3873206f2f69d48ed96eacb7a"],["/archives/2022/page/2/index.html","b066e3d341605ed62fd99eb806a22f2f"],["/archives/2022/page/3/index.html","e305a6dc2e0e2018fd5e31921c2b4910"],["/archives/2022/page/4/index.html","98346fb2ac22f455911a2df0812012b9"],["/archives/2022/page/5/index.html","bb8cf8907f276818fa15319b0a1c9444"],["/archives/2022/page/6/index.html","128e0b94fefde239a501dc836b2c702d"],["/archives/2222/03/index.html","2fdc1511ed718f5729c65a33b4fac5f4"],["/archives/2222/index.html","446234fa996b112b2960479e69967477"],["/archives/index.html","352807425ac28a49a4c9f513459f0209"],["/archives/page/10/index.html","63c980b7577c485c9edb6d63432f06aa"],["/archives/page/11/index.html","fc20e78d9109896f648075ec29455f78"],["/archives/page/12/index.html","c381814f09ccc4d3166af7d1d81d4068"],["/archives/page/13/index.html","4184075f6a6ca75e0e76eed71180c4ec"],["/archives/page/14/index.html","a1de451c9ae0e354d8938c1a7a0de73b"],["/archives/page/15/index.html","d550b7fd04756fd2f7c21ed496322426"],["/archives/page/16/index.html","038160844e6f420faebe5b170b17916b"],["/archives/page/17/index.html","3b8103f0746bdd96a2bdcda75a3b1545"],["/archives/page/18/index.html","229f3cd159d68f97b311aea6526c7e99"],["/archives/page/19/index.html","3bcb37ad3e7482597e3158c998167d3c"],["/archives/page/2/index.html","7395c51b01d620e246cc318de9bcac46"],["/archives/page/3/index.html","23b8a0fccc7bb77d530deee261d8fd87"],["/archives/page/4/index.html","46cb2975bfce57bdccd7fea6e309a350"],["/archives/page/5/index.html","7172eb34f330fd6f0f75a12814292e62"],["/archives/page/6/index.html","507b6f07d0108aa416bdf69d2287e881"],["/archives/page/7/index.html","d4d8f6fa9f915939a3a2dd31485a0047"],["/archives/page/8/index.html","23dc3d93b149e564d053caf8c6adb66d"],["/archives/page/9/index.html","7d1425373b0368cdceb840f2101b6778"],["/books/index.html","e337f9804a75b88a272d822d6aace7d5"],["/categories/1-1-CSS/index.html","fe7bd2ae02a92a8ed1c706c113f47cf2"],["/categories/1-1-CSS/page/2/index.html","adf0d463bf7b85ddfb45c41e3de7a416"],["/categories/1-1-CSS/page/3/index.html","66d5d6f7402d738be8df3c34e120742c"],["/categories/1-2-JS/index.html","3423f8af2ef3bc6d237185a887d711a2"],["/categories/1-2-JS/page/2/index.html","4a4fd356135999aa9d308826af1d0928"],["/categories/1-2-JS/page/3/index.html","488a5dcd12a1b6644251c47e1425c1cc"],["/categories/1-2-JS/page/4/index.html","c2dec176d41554319ce6fe36d8e51bb4"],["/categories/1-2-JS/page/5/index.html","20751b2a5f220341656c137fcc87f551"],["/categories/1-3-Ajax/index.html","9f227f577bbbd9d9829af158d98a8100"],["/categories/1-4-框架/index.html","1f53b5460ea24ffe2a731e69427766d9"],["/categories/1-4-框架/page/2/index.html","27efad427609bf106541924ff0ce43f6"],["/categories/1-4-框架/page/3/index.html","d576fa31ccd33c5c2a8f78a160e3855d"],["/categories/2-1-组件库/index.html","ed2e42255269d144bc2aef3870e6fbb6"],["/categories/2-2-基建/index.html","c90ee7337df3a129e56bc9de18be04d8"],["/categories/2-3-实现Tricks/index.html","f049cdfb69cbd74bd82c9ffbe1b32907"],["/categories/2-4-项目/index.html","c68ca580bc0d3412a7a9e062cad83734"],["/categories/2-4-项目/page/2/index.html","350c4629fff337dedccd3bdd99bb54ad"],["/categories/3-1-记录/index.html","529ae8a87db7170e427925af627198ac"],["/categories/3-2-浏览器/index.html","d69d9ae5d6dd08a178401367d965257c"],["/categories/3-2-浏览器/page/2/index.html","ee584c911ead175a9f7fc4a56eb34af2"],["/categories/3-3-基础/index.html","fa7a44f27e02c255e6c1f284af812662"],["/categories/3-3-基础/page/2/index.html","2ea131238ca230355265b90646023e46"],["/categories/3-4-Tool/index.html","ff517f01a25291feb67a9529e894a7e0"],["/categories/index.html","d5812362ccbca9f759285430fe5e0719"],["/charts/index.html","5c7a4017f1c9106e13a0e2fd8fb587fa"],["/comments/index.html","75d341bb607fe01d13f54205785dd941"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","1684ee2dc3af92f576dc9eeb723ce713"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","9f59f86f67e67358700805ea8d9fdf85"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.woff2","b73f13e38628ef4e65f7b7073c70eb46"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","313793759d5d1b39128c675b3a598462"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","ac24928cb95da16601cc4cbab6c63290"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","00830a9c5c73af4298553d77c9435a19"],["/music/index.html","d61d7934e06864d9a52baaad077a3b59"],["/page/10/index.html","4c0f0304bb2e17530c9b1ac614a0cb6c"],["/page/2/index.html","3aa43be3dc5628342346a80f4e945303"],["/page/3/index.html","fc9ec0421363d7aaf9943dfe22afd111"],["/page/4/index.html","7c16448e1d2339388c5e4e43d44ed2ba"],["/page/5/index.html","e61d67f2f5bc55d3af17958a7f5588a1"],["/page/6/index.html","474ace969f149f237fe633ab364c71a5"],["/page/7/index.html","0d0d02981a0429e19228a3c12cede3da"],["/page/8/index.html","4bd39169d300598773f3cade41deb057"],["/page/9/index.html","2d63c56364dc91851ded95a710c6dc13"],["/posts/1003179605.html","09c4202453b2612fd092bc690e7b276c"],["/posts/1078088869.html","ddb1b093618b349b6c01173164edfd8c"],["/posts/1168384896.html","358a0559374f9f220af592750d989922"],["/posts/1174755164.html","ed7060297e64809599afbc19a28ed0ba"],["/posts/1207877865.html","7360a4288c79a142ebffc4eaa9eb4619"],["/posts/1322992885.html","16abf35bb7887cf909ff56d726bb33d9"],["/posts/1405183845.html","fbbb65c1ad8bdf142a6b6ae571adb383"],["/posts/1460941642.html","d89dbad6132271f327213df114d46e7d"],["/posts/159855229.html","0c529a740fbada9ebcd993f6e594277f"],["/posts/162997961.html","fa3b6d866ad177a9c8edd1de42a56b56"],["/posts/1634682499.html","f10b12b981a515d85907b894aaee8760"],["/posts/1720673220.html","e202175aadcffa25b97411f60dd716bd"],["/posts/1794184575.html","9152455c7023fc0f7dc72eb45c119ba9"],["/posts/179783341.html","a11466e570451bf7a97c8585a97dbd8c"],["/posts/2007769797.html","463f623c22c68945dec14262f8795715"],["/posts/2062301197.html","4880246cd9cecec94306adb3114fe335"],["/posts/2071449193.html","6bdd2d55a1f9b0dcbb6da44a195ed3c6"],["/posts/2075292597.html","a94497aec6a0d3d83732407954ba3d3d"],["/posts/2124882507.html","115ad715b82b58e9f529947c5e866726"],["/posts/2131155013.html","65f49d2b3122117f4700c05716d54998"],["/posts/2169143571.html","e9b7c7afa7b9a3d199b85d1d809a02f8"],["/posts/219349139.html","e0362b8c46c0bcbd336a1178229ae6b4"],["/posts/2217063026.html","74a91f3b75db5d808cd662aa382f110d"],["/posts/2218506745.html","6ac0c815d4e2fa0e61ce5729d5030a25"],["/posts/2292260110.html","f9ad02bcddce5ff4782629564397afa9"],["/posts/229643181.html","d1cfb0b46e9ae02fcc20b67e14f8e4bc"],["/posts/235914813.html","c6cdc127e2693f1ae16c8982c845bce6"],["/posts/2387908466.html","3fae7294969456f21afead6fcf522a05"],["/posts/2580568501.html","56fa55077ffa6419a8e61a5080a381e0"],["/posts/2621268747.html","7ce2c5041a4d0809d9fec2f51f210174"],["/posts/265724518.html","6cbdc73220f1ee54a57605efd72d1aa8"],["/posts/2716721158.html","fb6f7ca91f01dc3db3eb030bee46f95d"],["/posts/2747544176.html","76acfc1e08d99733fcffdbdbfd4c2e32"],["/posts/2799443321.html","d580bca41a67926065c91954981ff041"],["/posts/2803057116.html","e03835f79ef880ac01052949a974c1c4"],["/posts/2818550155.html","a541df66eba08ccd51e38f373ecbe4be"],["/posts/282252185.html","cb8b8e171466c36a281d6233b1a90bc8"],["/posts/2959925095.html","8cb1eefe5505947b348fd7d44e81ee74"],["/posts/2971665882.html","31769e6415fd8f051d5dc92df7c18601"],["/posts/3067404590.html","90c079dc0dcdffb9d275922075f7376a"],["/posts/310999178.html","aa91f5dba1d66e6d66540f997b9ccc27"],["/posts/3120977046.html","82d8674f3f90274d2ba3858d2a694578"],["/posts/3253065341.html","7929b2f22cbf8ffec3a553acbfc53e28"],["/posts/3253305718.html","0e6e5402127746cb320f85d70ef3e188"],["/posts/3384747987.html","8f4b39aa21e7902873c714f4c75048df"],["/posts/349024060.html","031de200473eb52828af7244fa497760"],["/posts/3598970227.html","c7f53c60f19941b963da536dc332aa19"],["/posts/3611094049.html","5d84ca043184a78d50fb93f1e9154a37"],["/posts/3631469724.html","9b87a05d94da3bf758882d18f9fe75ea"],["/posts/3691095479.html","255edf82751703ee9e144a3cc5cc2a5a"],["/posts/372934289.html","193c44bf0684a7a3f4e5810285d50d7f"],["/posts/3737997078.html","6dce1d9a44aa1e9882d4432038ba247d"],["/posts/3783644122.html","a6c1423bb503b1f6d60e0561d1a96ad0"],["/posts/3906205819.html","f620f57102ab733c96eb1478b777f423"],["/posts/3912543564.html","7f3cb2a24f7f98b755aa36659929a996"],["/posts/3998253138.html","d7fb5b96df385e4f5c33e21325317482"],["/posts/4075683688.html","4f15cc487de6ec595b12a3f19a5404aa"],["/posts/4184919567.html","74c27be82253af37b65c2be24d0097c1"],["/posts/428414458.html","45f814fbc3162d7bf2d86ebc790c2f64"],["/posts/4285860800.html","5b212d04ba4f87e7543b8ef4ed1271c7"],["/posts/50508479.html","c399a62d6d1b01dedcbd00724f0629f2"],["/posts/511687579.html","c5cdb1150da44fdf8798d06ef35a8661"],["/posts/611441247.html","6dfb507246a599c73d3adbe8045de98a"],["/posts/619926249.html","023c67b5c227f10573280ea1a6492361"],["/posts/656350506.html","800588063999578b399024587c72ffa8"],["/posts/680535600.html","07cddef2b19cab752496b52c355a9f1d"],["/posts/684607466.html","13a14d90155242240a7caec412758453"],["/posts/686254810.html","2173d88ecb5c8f70e5ea05dc9d8a1c14"],["/posts/710205459.html","90af9b3fc8a37dda271c0c5e2a12a509"],["/posts/775935900.html","7b4dd075424fc8e238eb5b5f7b50c6c8"],["/posts/854292428.html","ce0f030909b9bd3da30ff75a9c692064"],["/posts/855735627.html","6a8b680810aea8611e96ade6e857f482"],["/posts/867212230.html","c88b1fc830cc587b6df6776de4fa73ad"],["/posts/926905116.html","f90900ecd1ad6ee1237b724c3ddb5c6d"],["/posts/CSR_SSR_ISR.html","1d2a4f9c7c7ad11a7dc139c0393e9883"],["/posts/CSStricks-1.html","482189b856378959e0e2e588ab829f4c"],["/posts/CSStricks-2.html","dd064052fc05a6061fe877ffeda8ccd1"],["/posts/ES6.html","e2de6cb32fdcf929e332b7b492ed03c8"],["/posts/HTTPS.html","56ee289ba83ed249878e74498adf1fda"],["/posts/React's Component.html","58f0cff0f84fd2d7e3aa63b35f8b3d1b"],["/posts/React's key Concept-1.html","f75960a5dfa881f1c17082a9a0af70a5"],["/posts/React's key Concept-2.html","0d1f104a3f02e29819e1a070209616b8"],["/posts/ReactHooks.html","7e252d2f971ea153d8a8e8defc1fd932"],["/posts/React_lifecycle.html","6526b361f537387127a6fa2c0b3e7c9f"],["/posts/URL_URI.html","ef160f96e0719b7c4f8828b100d4f5e5"],["/posts/animation.html","28e9ed10cf55b95f8bf8098cc6764526"],["/posts/antd-data-show.html","6c8a183bd872d0e61f7025ab4b18e82b"],["/posts/basic_construct_1.html","bb286201ae05e97c71097af6b9c8b57d"],["/posts/basic_construct_2.html","e208adae6b3deeb5af797dbd1a579063"],["/posts/better_performance.html","dca3ef466350121a57547959f6efc8df"],["/posts/blogChange1.html","285754c4799990342c3221a3ae4c83b4"],["/posts/blogChange2.html","ee7172423c5c7687e8c7c086fc2ecd33"],["/posts/cat.html","8ef5aa38be05c6c871b7692a36df39d0"],["/posts/cookie&&session.html","13ee25bffbc750b82cb6d6d297bfd0a0"],["/posts/feature-tricks1.html","d417bfe68ab5851c5f56e47edc98a8ad"],["/posts/file-read.html","8cf87935d049b8b16f707f848455b2b0"],["/posts/gap-property.html","3cc2135da194909063de1571e3b3f721"],["/posts/hideElement.html","282368048fb3096028d67c177dd2ccf8"],["/posts/http-cache.html","ffedeb42408bfdcdbc60cadbfbe2a5ea"],["/posts/http_cache.html","3d973b013fc0da14bf9e2933b13a7591"],["/posts/privateGame.html","c97a705e499dfe6aee46d668c21931e0"],["/posts/prototype.html","eccd4b74ca8348bb30e5f1312d2b0149"],["/posts/react_components.html","6b6617ca5fae3dafaa6afefd960d260b"],["/posts/react_vue_data.html","99b17b2f44997c14b148facefbdd6dbe"],["/posts/requestAnimationFrame_1.html","3670d805052854f9279a42275a20b899"],["/posts/scroll.html","a9a6b48364c8fa9707966c9c2ece6338"],["/posts/toolsTest.html","0afea0a3d0eb35d2fd90ac5895fa9a00"],["/posts/vue_lifeCycle.html","645999382c463a88b49a64d3a829b658"],["/posts/what's Hook.html","7c3937cd236f37e46d1f8c8dbfb94918"],["/posts/why Hook.html","10dbe3a6f8e8b529cb96949035fea7c2"],["/posts/前端模块化.html","ca0e34d13cce01882fbf0e0a452abfb8"],["/posts/路由.html","e0b4d6f5e0ba65c623e1fb4c17cb651b"],["/tags/BFC/index.html","6c4d1e6c587bfb2554fb34113b01a082"],["/tags/BOM/index.html","f91b40431ca762dec5940d21280dd0aa"],["/tags/CDN/index.html","0ced1acf163d69e2d58724f937aab0d8"],["/tags/CSS-in-JS/index.html","ef0be00ca0fad04015ad47102c92f53c"],["/tags/CSS/index.html","171b65445cb89f508bbf81441c8667b2"],["/tags/CSS动画/index.html","99fbc3152652e6ba834c8b4e2cb8fe0b"],["/tags/CSS属性/index.html","b2d5c299d3f5f2f7b27f439ebc04d867"],["/tags/CommonJS/index.html","81900d8a82fabeea8d928c2dd15c6a7f"],["/tags/DOM/index.html","719c9550ab114d4f67e0fe9eed7126a9"],["/tags/ESModule/index.html","9b120e41cb11e5a5bbe31de2b535de62"],["/tags/EventLoop/index.html","3c86c60599ba0ad87e1fc1d56fe2a7db"],["/tags/Git/index.html","186faa9ccead17ba8a340fc67d6a424f"],["/tags/Github/index.html","1be069f6dcba51e416ffc90ac654d976"],["/tags/HTTP/index.html","bb5e51b8926bc24684394a99fa507b40"],["/tags/HTTPS/index.html","d82f9960338ec2db2b225352637696a3"],["/tags/Hook/index.html","30bdbe86b0e7bf29b9354833a4769406"],["/tags/Hooks/index.html","29694361dc9d83fac97946fc41363870"],["/tags/IFC/index.html","116c6b9ef8899e2333993766c577d552"],["/tags/JS/index.html","4579e3d7678607ab0d467704ad8f1d36"],["/tags/JS/page/2/index.html","916601ff2581e666166ae1c31b5f0fd8"],["/tags/JS/page/3/index.html","15a09383af1d995483531fb135398adf"],["/tags/JS/page/4/index.html","676208560cd825435c9e99721566b725"],["/tags/Node、Antd/index.html","8d0fe432a34e6e94f600296691f1c3cf"],["/tags/Node、MySQL2/index.html","683f467a26121656315f78b76f575d93"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","5ed8a03fcbb68fde3c0e500a420504dd"],["/tags/Promise/index.html","06540002f797ffa902d22e76a0b58075"],["/tags/Promsie、Async、await/index.html","02e1c34440de4082ebe3286897f12ba0"],["/tags/React文档/index.html","892b1a125be0851bfa9b39bc45a6d18e"],["/tags/TCP/index.html","039f7aacf476c457a697cce400761bbc"],["/tags/Tools/index.html","4994dddafe21ffe27cb915a5dd1b37ae"],["/tags/UDP/index.html","863d578e3cc4b14a2f91d5eb9269b9f2"],["/tags/URL、URI/index.html","eb66015dd86a4bd3c1af7abebf27ab1f"],["/tags/Vue/index.html","f40be602541e711d80a84fc71356fd9b"],["/tags/ajax/index.html","cee2a00d1cdd3db9a5f3591f89ab9dce"],["/tags/async/index.html","c544e3afede3cd6d42b76b4354736ab1"],["/tags/axios/index.html","2833dceef79bffa6f967cbf69c25d91b"],["/tags/codeReview/index.html","1ff6cd0644902d47922d262e507f99d0"],["/tags/cssModule/index.html","6edb812327542387159714930bacc0f2"],["/tags/defer/index.html","6a56fd74ffc51c91f174385228e48a3e"],["/tags/flex/index.html","c87887632a19be193a658531653fe79d"],["/tags/index.html","47524bda65c23601f8166c13c1d6b9a1"],["/tags/overflow、滚动/index.html","e044568e38de5d7f418bb667f332d60e"],["/tags/position/index.html","4d51b0a9d3f4cfd7cad5771d04bc1336"],["/tags/requestAnimationFrame/index.html","3c18802f52f5d9cf6cbcb7fa1a982386"],["/tags/webpack/index.html","d6ab302fe35e57490840d4e9b0f114a5"],["/tags/webpack插件/index.html","54f2179a8eef8e30ae934c355ccfc475"],["/tags/webp图片/index.html","990e97f27783685806a3e0cc274cbe28"],["/tags/二叉树遍历/index.html","ea3e1293cbda55ab7d7b530136eb668f"],["/tags/优化/index.html","95bd2bd3643cb1e0474bf02d713e462b"],["/tags/函数组件/index.html","8f95c9a573fa762f076ece460ca2e6a0"],["/tags/前端基建/index.html","f0b7a21e822cba6ef26dd06d8e81ce30"],["/tags/功能实现的tricks/index.html","cbd61a0b5b9376c22ecbdadafd5ea534"],["/tags/去重/index.html","07cd2884dae75a775e2a67a12a5533ec"],["/tags/双向绑定/index.html","d3aa9d14562ceb8b4f4978373bc56e97"],["/tags/响应式更新/index.html","b87fa87567c5aa18623db7584155f469"],["/tags/安全/index.html","21bfd392d1ff0f6bb828b7ee25a8b708"],["/tags/宏任务/index.html","0a1dac16637ccba930d894bb5d725385"],["/tags/帧动画/index.html","367c916d9eb4272f194e3a6a96fd696d"],["/tags/微任务/index.html","d364109ca92e4325c4883d752fc25631"],["/tags/性能优化/index.html","086edf3a2dd8712b691c34b4bbc82e63"],["/tags/懒加载/index.html","f6ce8bac8dc8a5730cc6c9328c6d0c91"],["/tags/扁平化/index.html","bac06a3e92ccf7d731db0f7ddae65d8c"],["/tags/排序算法/index.html","fb78d83ad9520ecaae78bdd2e281dd40"],["/tags/数据流管理/index.html","fb60088486fbc030b89e8c4d0f08a5e8"],["/tags/数组API/index.html","48c4614030ea9c4d107b7f4d495af0a6"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","1df0254042409b33c3e1a10542e99c72"],["/tags/文件上传/index.html","5b49c3ed09ba09da2320e8a6a4d1fd9d"],["/tags/样式污染/index.html","2ca4e2964e2435ac7c1ea4acd8d32e41"],["/tags/模块化/index.html","6668adc36917d94cd8bf27adb90d94cd"],["/tags/浮动/index.html","178a9293e6dd6c634b8cbda823091e5d"],["/tags/渲染解析/index.html","93b86ba5d3016ecfc71132f0c4eb42ab"],["/tags/生命周期/index.html","4fbb32c15913eebd96a2c29e930c5bfb"],["/tags/盒模型/index.html","16a7d5e93e70f5520a737b0c506a6924"],["/tags/移动端适配/index.html","bb9114c353fa8fe9ee648dfcddd8fc66"],["/tags/类组件/index.html","a2fafefa23d732bfec5a08bdd86f6d73"],["/tags/组件库-antd/index.html","422f4784e13ca502ffd64e44fed2d478"],["/tags/组件通信/index.html","92b44af3a4f3c867bb1d7c617801061b"],["/tags/编译执行/index.html","57422ffcf22c810bbc89fcc457120f0b"],["/tags/网络请求/index.html","8ac885e4ea7e7338856a4b0ac79441fd"],["/tags/虚拟DOM/index.html","a516ac7ec998a1a27ea87d3368dcee4c"],["/tags/表单提交/index.html","e5b3d0889508db37263e57c9806d51ca"],["/tags/计算机课程/index.html","efc4dcc06ba9e2701ccc1f68cc72a665"],["/tags/计网/index.html","10bdb0b03e4c98ca69a4607af4374572"],["/tags/跨域/index.html","50e292ea63abe164f2aceecd44be3da5"],["/tags/跨域解决方案/index.html","061616145e5c4bf18f6ffe62a79240c0"],["/tags/跨域问题/index.html","2af8789eedf7db42223fd19ae983ec27"],["/tags/路由管理/index.html","cdf06370ec1c22f40075e739bc3aa1a7"],["/tags/进程线程/index.html","63cfb7fca3536e87ea171bc51fa47dde"],["/tags/选择器/index.html","b6067ecbe374073e8becdf705e07760c"],["/tags/选择器优先级/index.html","27932f8c113a97fee3b6a471b15ac405"],["/tags/隐藏元素/index.html","51d714918f32c3b95e1962b2684bb8e6"],["/tags/页面解析渲染/index.html","c903d122901207a0650baef67d23a95a"],["/tags/预加载/index.html","8209e14ea97bb79dfa1a62e46a47dfa6"],["/tags/驼峰命名转换/index.html","51dff317d27e2b33c5e59d938b7d99b9"],["/tags/高度塌陷/index.html","888914833f62e48f865aa8ef6eb6037a"]];
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
