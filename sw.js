/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","1c54b8e0fbe9e6cc5229532e10fc8c23"],["/archives/2021/12/index.html","3425339ffa4874da5817b7e06a0674c7"],["/archives/2021/12/page/10/index.html","a66e67e9288f062e1a1d1952c0cd4e34"],["/archives/2021/12/page/11/index.html","b060e0640c501251c04dd1828aa47459"],["/archives/2021/12/page/12/index.html","78bcfa8fed385051b8285d84fd3f38a8"],["/archives/2021/12/page/13/index.html","ae7d5808edf8ada1f1da60411ef7cd24"],["/archives/2021/12/page/14/index.html","515529596da1cc26f71a0b9212657e92"],["/archives/2021/12/page/2/index.html","19bf5c2c1601420e0da1d0fe04f79f6a"],["/archives/2021/12/page/3/index.html","38c78b8d074176207edceaa449a5be91"],["/archives/2021/12/page/4/index.html","1fc1227a0d0f3c56971ae6813636aad9"],["/archives/2021/12/page/5/index.html","c5cfb64a02276fdf55c77756b8aa2930"],["/archives/2021/12/page/6/index.html","44f2e8e260f0c32c04af65089e1416fa"],["/archives/2021/12/page/7/index.html","cc75ba79b906b17ca3284a5baab6ec73"],["/archives/2021/12/page/8/index.html","3a2bd29f79be7feb66a87ddb8646cf53"],["/archives/2021/12/page/9/index.html","0e301ac7103df66aa44bb1de47080918"],["/archives/2021/index.html","cb7de4e0e77672d6027d7e40da4c0d1d"],["/archives/2021/page/10/index.html","f2564977118da42356a3ce037900a44a"],["/archives/2021/page/11/index.html","163154b1a697052648f549c2d39fdc39"],["/archives/2021/page/12/index.html","687c53bc2caa2261a152d9603e98ab2c"],["/archives/2021/page/13/index.html","d6c23adfe6d2f964ae0cab588bce00db"],["/archives/2021/page/14/index.html","e9dc2937300f2082513972473d6c95ac"],["/archives/2021/page/2/index.html","6d1f1f60884eb1ff41350f93db1ebf19"],["/archives/2021/page/3/index.html","8d530fcefc64e3cbe2c3adb887a20421"],["/archives/2021/page/4/index.html","d7171e7d4d581ec441d18dbce4023d46"],["/archives/2021/page/5/index.html","8a14b51ed6016fbee8b8f7e382f654cd"],["/archives/2021/page/6/index.html","3e6bc8bc20fecc7533ef8394714fed1f"],["/archives/2021/page/7/index.html","1ef1af27573534d9327ffe7a9f2dae5c"],["/archives/2021/page/8/index.html","166fbb0d15a5c1efd4bee4776362eb01"],["/archives/2021/page/9/index.html","a47781b96973cc030e0adf54d112639b"],["/archives/2022/01/index.html","9342f99fda739a5de8c6a7ae7f41d97b"],["/archives/2022/03/index.html","280eaec47244e7f8f7a28ed200860c91"],["/archives/2022/03/page/2/index.html","e1d7ba21be523b62a49953e9a04682e9"],["/archives/2022/04/index.html","47dc4d22e0634c9b35e96794b22c32ac"],["/archives/2022/04/page/2/index.html","2efd30f9d4729886b22ceb670c339713"],["/archives/2022/05/index.html","5d840d81ce9275b8cc963f01a47adecc"],["/archives/2022/06/index.html","8859d2c573bb44d6355380472d2cb4c3"],["/archives/2022/index.html","9a3033a35916725ed45554c43a32bcd6"],["/archives/2022/page/2/index.html","5ab564a210d2fafe2d5e436ee56f8f35"],["/archives/2022/page/3/index.html","d527c7d7955ddd3fa5ea26dca2d9b8b0"],["/archives/2022/page/4/index.html","4cba30dd0af2dcfce6b36fec75bf4563"],["/archives/2022/page/5/index.html","52f7f00cdc09a6e3c9236d63fe3d9338"],["/archives/2022/page/6/index.html","4c2b70e38d72f64479abe7d8799bb43d"],["/archives/2222/03/index.html","3f10360143b8dd7b0954c5788ab5d1e3"],["/archives/2222/index.html","7c35735e6d164c190c7aa2e632800abb"],["/archives/index.html","778508bf4c7e13d25bf56b122c105262"],["/archives/page/10/index.html","3059d20dc2b59a496f9d82425ad41887"],["/archives/page/11/index.html","fe5a21976afcbd22130ebad0eef30df9"],["/archives/page/12/index.html","1b8990dfc9c4250ed63da306ca0349eb"],["/archives/page/13/index.html","17d05cd4b718474da3cf3cbfc90a7ee5"],["/archives/page/14/index.html","856f9163b158e9747948f0d630d8cb0f"],["/archives/page/15/index.html","3e94d827cc62a9e02f8f080afd46d2bb"],["/archives/page/16/index.html","48d3dce016a3ec0ff37fe8a26324a957"],["/archives/page/17/index.html","ce3c97cb1346e5d2de45ee871511a28f"],["/archives/page/18/index.html","b7466f8f5d9c8d40c208707795eb5a3d"],["/archives/page/19/index.html","6b54f78a0470a0a679dba526e2898739"],["/archives/page/2/index.html","3fa2c81349f4e157101998dd6ec0efeb"],["/archives/page/3/index.html","cb647670b7368b892d5a6e1fd1cf9d85"],["/archives/page/4/index.html","6ee6e278d34f9c695f2d1b09757dc9bd"],["/archives/page/5/index.html","3ae14f94c3aa868e49094dca3b8ad463"],["/archives/page/6/index.html","c04c5c3da7aa175bd94a2939438622f6"],["/archives/page/7/index.html","952e5fa641b07958d524480a3f744e78"],["/archives/page/8/index.html","6475cd3add752b68962ba58cae62a313"],["/archives/page/9/index.html","7d1dfc14c87be59e88722f135c3b7f55"],["/books/index.html","844e3608d5659aa90bfa2d88ed68add6"],["/categories/1-1-CSS/index.html","61cd7ce9c9188e9596cfaad6c7023581"],["/categories/1-1-CSS/page/2/index.html","79ee84a0b153633c4320609c55114f5e"],["/categories/1-1-CSS/page/3/index.html","40bc2bc14b7d4045c5cee5bdf755ee34"],["/categories/1-2-JS/index.html","e9a071216906237272d3368bc1eb7d45"],["/categories/1-2-JS/page/2/index.html","7055d701e946c0e561b69a5579e81fab"],["/categories/1-2-JS/page/3/index.html","b75ff465aa327f95d97a63897a58bf05"],["/categories/1-2-JS/page/4/index.html","63d3d2675710706aeb0c0700e9615672"],["/categories/1-2-JS/page/5/index.html","159f36f6f7e4028ad3b52de29dc183d9"],["/categories/1-3-Ajax/index.html","ea4e2b33c6a70a77a50b2b64841aa0bc"],["/categories/1-4-框架/index.html","405bdf49aa2b65fc37d3b258dbb67d34"],["/categories/1-4-框架/page/2/index.html","df9f835db3bf045119be1585da13fe30"],["/categories/1-4-框架/page/3/index.html","991f1250bfd8d2191592e53a1416485d"],["/categories/2-1-组件库/index.html","ce6fd0129f58685870e91c8ad92a82ee"],["/categories/2-2-基建/index.html","46b546d85aa794dd09f4ef0e2918e2a9"],["/categories/2-3-实现Tricks/index.html","63ac9a8a66b2e8b9daa76e8eafb5036e"],["/categories/2-4-项目/index.html","2d70fdbbbb63cb590b7c45fec13bbc5e"],["/categories/2-4-项目/page/2/index.html","db6c7cacab8b1e1b564d2d10c09be8e6"],["/categories/3-1-记录/index.html","03dcaf4e2cc95906adeb2267dc5b0ecd"],["/categories/3-2-浏览器/index.html","f3e67f2048a39c37ab2f87cc62c0ea7c"],["/categories/3-2-浏览器/page/2/index.html","6957bf3f1cc4f38a0e14c1cf7507c0e9"],["/categories/3-3-基础/index.html","4e88a964b6df94179a1a7438340a13d9"],["/categories/3-3-基础/page/2/index.html","baf56d606cf9a1d859a0e595e97d867f"],["/categories/3-4-Tool/index.html","b7eb33733e654ee0fcad0343f86aa22a"],["/categories/index.html","0e5611f6666e3e4b96e1aa7fcb0c9d57"],["/charts/index.html","626b4774e1f970288f90d644bb1d2dd5"],["/comments/index.html","7d86768dde94447dd5923c560e174549"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","4ff0f6baddaa92cd4cd77ee6239f0b72"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","1cf1bd799b81c9753f4f9d030ba97c7e"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/fonts/CandyC.ttf","c8af9e0033898b1eb9f8d81c6e53d485"],["/fonts/MiSans.woff2","fa85ff069c6699f2f874cff557e885b3"],["/fonts/ZhuZiAWan2.woff2","2ab010e1b517f83ae76a3ec792bc4242"],["/fonts/tangMeiRen.woff2","6f6242b814ed09f8e128eb98ab7d6348"],["/fonts/霞鹜文楷.woff2","3def0c4a72e47f483d6412e1ad97cb0e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/img/testPic.jpg","56568ffd04a3ac274f91931c4d6dafd5"],["/index.html","9f624b3d3ba9148f9efaedffa7099fd0"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","0db56e27359a090bf1d8a21a5dca9e4d"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/newAdd.js","635aac500d28a2193c1aba4dfc9c86ed"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","49e2cb812fc45e6b506d57dbcd14bc41"],["/music/index.html","c65405fe3e7cbd0c1a3b268fb0505f09"],["/page/10/index.html","bbd04ed36741327c01d7f1432dec712d"],["/page/2/index.html","540f88a6c9459ae5eebc80cf2fedad5c"],["/page/3/index.html","3f9afa27c09f1ef755b1dfa2bde7d99a"],["/page/4/index.html","063e29d003c6f5bcabcbdc4655ac3ba7"],["/page/5/index.html","ac87fad978779318ba78bb89f5f76792"],["/page/6/index.html","e1389d496fc30f6200d9676768aa1f77"],["/page/7/index.html","ab4440d3d6b6bf22af0c78370fbd837c"],["/page/8/index.html","621c1d645b6b28f9171be105d930f42a"],["/page/9/index.html","018bb08b5e3708f33452d582b4702fcd"],["/posts/1003179605.html","61832763354e77072a342a370c1b500c"],["/posts/1078088869.html","753f157083056f8ab9b48c7e872e3338"],["/posts/1168384896.html","58436ea8f0c1b13d6f697b1542d30dbc"],["/posts/1174755164.html","2fc2f57a360f1753e07631987fefe009"],["/posts/1207877865.html","a2f201502316d323f4eb1d030591186e"],["/posts/1322992885.html","69eb3e053673d91b00abafbf31c8f188"],["/posts/1405183845.html","1ce4b2e94c60e3cbf912f533b823d2e0"],["/posts/1460941642.html","180efc79bc78df12fc529228c7d1ed92"],["/posts/159855229.html","3c4e4472c206a02e17d905e4613dcad3"],["/posts/162997961.html","145a9181709e2f05adaede16b7b22a56"],["/posts/1634682499.html","3e10c0af1dd28607d7e4dab529aaaba4"],["/posts/1720673220.html","5fb197e0f4fd648cdf05a54f757e85ce"],["/posts/1794184575.html","fc9f2f14af5fc5567961d37840fbf339"],["/posts/179783341.html","06654bade1aaa4c5d95fe035b0bc2435"],["/posts/2007769797.html","503c1fa5f6baea5e7e9c165abf40ad5d"],["/posts/2062301197.html","7ce7f24737a973a4c2545427ce6bd84d"],["/posts/2071449193.html","3f50805223fc2d993ff52ea811bd62af"],["/posts/2075292597.html","564d885f4b8164f102009780e2074f68"],["/posts/2124882507.html","0aae7d2c408bddce322f4ae947b64eef"],["/posts/2131155013.html","2bdeb19abe7cf650ec9aad4d32a3d850"],["/posts/2169143571.html","90f5e04582832033c5fed2ee4308b14c"],["/posts/219349139.html","35c2011209afe36e21f739283c2cfe2b"],["/posts/2217063026.html","6943bd870c7ed62dd94f4509c9670971"],["/posts/2218506745.html","8ca3f91568b1c53b1cd17207861a2433"],["/posts/2292260110.html","4f87d669029c54c2d09eea4fbcabf179"],["/posts/229643181.html","3ded645c60d4cc29367456bdf47d9838"],["/posts/235914813.html","af3c93b9becc0d6a4d5311f759533d7a"],["/posts/2387908466.html","574d42258f2d3ea774d7baedf862d5c9"],["/posts/2580568501.html","3382b7e1a0b0e4f568e9c03db62ad49d"],["/posts/2621268747.html","394d5870892eda7a8ab80bbc281e6bcc"],["/posts/265724518.html","9ac8c6e2568817afff532aa5e0f5deba"],["/posts/2716721158.html","be79290a2f8a6754894eba046d520fef"],["/posts/2747544176.html","e3cf3ddd5291c40c5079f2bcf4eb33ae"],["/posts/2799443321.html","daebc40f279dd3a1df9625c89020ec95"],["/posts/2803057116.html","7d9102dac286a36746b0cdefc7d8bd89"],["/posts/2818550155.html","7910b1d01b639c8bee95ddea9837ba0e"],["/posts/282252185.html","8f4436b7f2cb58a94fa9964b494ce916"],["/posts/2959925095.html","bcc924fd35537a33994c9fbc8e7f5e7c"],["/posts/2971665882.html","21b603d87dc29e352592de8017aa7fe9"],["/posts/3067404590.html","9f06ca12a0613475aad55afdc151e20d"],["/posts/310999178.html","e1d03f237d7c3425e7cd6d3acf2bbb8c"],["/posts/3120977046.html","8f1cf116a248bf3565c86b47c9511aec"],["/posts/3253065341.html","787856069cc1ad4f9583ed8946829c07"],["/posts/3253305718.html","67696cc8e968aee4c1b7a17e423286a8"],["/posts/3384747987.html","f79cc40dd3b6da6c3aefc4a4b1386bd2"],["/posts/349024060.html","4c78ca48402831ee27e66c917e4ab05a"],["/posts/3598970227.html","6fb9479c2669249afbfd9d900c01742e"],["/posts/3611094049.html","a1a3bb03702ba843d669233303c8e3b3"],["/posts/3631469724.html","a2c0db293a11e581bc5e6034d492af77"],["/posts/3691095479.html","0fa3a7e4750efe00c0a2c9937416919c"],["/posts/372934289.html","014c618a34b4982442145706ce0fe751"],["/posts/3737997078.html","d811d74461e9452534d38d47f932f6cc"],["/posts/3783644122.html","23421e347e1791d29efb2d348588c3f6"],["/posts/3906205819.html","00308a7aff6f5ee8c8ede8ff3a335819"],["/posts/3912543564.html","127a8da9879aadcf45e72ab464f73148"],["/posts/3998253138.html","50ea11f29288b25b9a1fc2f3ec24e317"],["/posts/4075683688.html","ccb182506eba11fdf10124daf8260e9d"],["/posts/4184919567.html","477d4e306073cd3b17e0912c2fefb1c2"],["/posts/428414458.html","074a7bddcd70d298094e9c9cdf606aef"],["/posts/4285860800.html","231f40e154f5045e231a69dec43e0280"],["/posts/50508479.html","b017418d09f1e192f5bc539210cf26bd"],["/posts/511687579.html","a4f3bbdc3dd6f825ee7fde3d15229962"],["/posts/611441247.html","5a3e9a8cc00f072ea448bec331f2693f"],["/posts/619926249.html","0b522a6253183a786f6fe2ac25ad3b8e"],["/posts/656350506.html","40dbd4082b418f72ab28a69c5a3efe0e"],["/posts/680535600.html","d4c859f4bb2c85552d427c8438c8e993"],["/posts/684607466.html","b43ff1ab8eb1aae2e02b776f4bab9f05"],["/posts/686254810.html","c93e9f4d395b63432bef388630325afc"],["/posts/710205459.html","49eaad220608fbc9b114ad2a5b313109"],["/posts/775935900.html","5a43d48c1d35767ef4ba9ee859067260"],["/posts/854292428.html","218e0eeff7e895ee8a54c4d39b68c4f1"],["/posts/855735627.html","72870a264d6ffc579a6a3518b1e44715"],["/posts/867212230.html","b56536938dce5bdbdbff2fd8b2db658c"],["/posts/926905116.html","0f73e18db86c6de3e682566a6740539f"],["/posts/CSR_SSR_ISR.html","69981d4a2a956adce77c4bb6b032600d"],["/posts/CSStricks-1.html","88387ce3762587a15a5884ddeee4b120"],["/posts/CSStricks-2.html","ccdef2dbaa769972f8bcc730af9bc6df"],["/posts/ES6.html","7360bc0f1886ef315ab34ed6916429b8"],["/posts/HTTPS.html","0894f497ddd934be7f83a6d6ccad36ee"],["/posts/React's Component.html","82d1d7552e1555240c2006adbf63d28f"],["/posts/React's key Concept-1.html","4b094a42e2a0541c58ac9ae4e05f353d"],["/posts/React's key Concept-2.html","52edfaa962f7eb7a253207bc03fa71db"],["/posts/ReactHooks.html","c7064b760d585121e6bb4b7f51912fcb"],["/posts/React_lifecycle.html","3389a131c4fd6199cf27b80f9338e2ea"],["/posts/URL_URI.html","a911515991f36e988b4a04a0e32bd053"],["/posts/animation.html","128125166e3de88ca6b5c15d84a881f1"],["/posts/antd-data-show.html","efa18a292e8b88197eb5e1e479621332"],["/posts/basic_construct_1.html","7cc47bad8143054ed64f0ec017247d80"],["/posts/basic_construct_2.html","cdfd071c58c4639976d57dd5fdeca8ab"],["/posts/better_performance.html","8488245a91d3965aa079f3e34fb6dfd5"],["/posts/blogChange1.html","cf1b37dcade5e3416e09711d110a4f3c"],["/posts/blogChange2.html","53492a8a86b56409dc99c20a538047a1"],["/posts/cat.html","489cdf94ee671ea523b96b023874c42d"],["/posts/cookie&&session.html","cee574c769ef3576f9c245ee9018ed3a"],["/posts/feature-tricks1.html","3a1d0b628926ab349b66f7681e9504bb"],["/posts/file-read.html","5ddb09daad82b5d78742fcb217303017"],["/posts/gap-property.html","e231238b2e2e593b69647bc0ca4a0358"],["/posts/hideElement.html","6c49cfc12ad28a6f8d388724a8bf4729"],["/posts/http-cache.html","44885afe94a30d4cc5422dd1d47e576c"],["/posts/http_cache.html","defdf72782428ac088ea780ff2fd829e"],["/posts/privateGame.html","12c8974b4f9e2295e7253d16d511c312"],["/posts/prototype.html","0e7532124ea99b1ffb3b94ad48676207"],["/posts/react_components.html","de0e33445fd5b38d713aa4b9f6e1f62d"],["/posts/react_vue_data.html","96335e93de42e9cbc3f0a2ce0066961a"],["/posts/requestAnimationFrame_1.html","88e4a9f60a680eaccc653e7a2f63c19f"],["/posts/scroll.html","1b598beb2e5f9f0d588f80adf2b95ab5"],["/posts/toolsTest.html","3a29c7f0d649727ccf25853e6d4cf6ad"],["/posts/vue_lifeCycle.html","2d92ce5c99d2d930a36747af3974af17"],["/posts/what's Hook.html","07ff1d5e152b6831a263eea903126e00"],["/posts/why Hook.html","5c9775beb0954dab8ee9d57e6f9bcce2"],["/posts/前端模块化.html","c2f65fef8e0b68b8f92214fecae1c600"],["/posts/路由.html","99282181f1435e77def4568822350890"],["/sw-register.js","e2b9b8d48c3fc23106191bac09cfb5f7"],["/tags/BFC/index.html","c2eaa786fafad9824ed144dc603a1bb5"],["/tags/BOM/index.html","333320745325caed625584923b5fa58e"],["/tags/CDN/index.html","c38be0fa83626205983f3efe0f25e515"],["/tags/CSS-in-JS/index.html","3ee6ee6ab7053f15e7fa559e0303be16"],["/tags/CSS/index.html","ea064dbd06ec8078e99cbe773995cfd9"],["/tags/CSS动画/index.html","a75b2db000f427d9d29cc909892e0520"],["/tags/CSS属性/index.html","069dad2afb553a38062712db6bdff789"],["/tags/CommonJS/index.html","57b562276ef9f256e443f1277fe8858e"],["/tags/DOM/index.html","ab742309ce3303fa40c8fbfba0b2933a"],["/tags/ESModule/index.html","4b2d7dd97f5e5e11bccff77e5425dd89"],["/tags/EventLoop/index.html","cd772c73b88b75968277b421697e5a5d"],["/tags/Git/index.html","32653545a5e2c42c9f275b18c014a6df"],["/tags/Github/index.html","0b4ff6b696228218fd73cfde0e57d78c"],["/tags/HTTP/index.html","37d3d555a4330255c3ddfe4669ab5159"],["/tags/HTTPS/index.html","41af1410ad77aa8d87c7edb7f95c8d43"],["/tags/Hook/index.html","7c6f86a8f457042faaa3edc396d733eb"],["/tags/Hooks/index.html","16604868fb5dbf74a1fbea7478daeee6"],["/tags/IFC/index.html","8933576086e4a62062fdec0413845ed9"],["/tags/JS/index.html","3ef6d2e672b0b97a49dc2f1aac0e29ac"],["/tags/JS/page/2/index.html","c35cef05b5ad2dadea15b24a5ef75445"],["/tags/JS/page/3/index.html","4df08188e727cc69b2b606dfe539b518"],["/tags/JS/page/4/index.html","996210b0a43b132091b53ca26d40ba00"],["/tags/Node、Antd/index.html","765f999f8304bcd065ef0d55f62137bb"],["/tags/Node、MySQL2/index.html","7af08c3881ac34ea5d200c7f53f1cba1"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","4fccd9800b7cfb96555ea690d60ad599"],["/tags/Promise/index.html","c95a6d4a6f828b56d86b375ee5d81afa"],["/tags/Promsie、Async、await/index.html","eba97c995db6214ea208875980becbfd"],["/tags/React文档/index.html","8b797bba99bac39e5b7dca924a98826c"],["/tags/TCP/index.html","66a498ae33ec5efbb25f50fcb7f4544d"],["/tags/Tools/index.html","ad84c86d0c53e4f8d7242956e522e80f"],["/tags/UDP/index.html","06784f6ffcf380c27bc655fa3216c097"],["/tags/URL、URI/index.html","3afa6eaf9a471dea8476e20574c27094"],["/tags/Vue/index.html","f9f3988b61ec2066f28c89ca822aab7c"],["/tags/ajax/index.html","f640ab9a58d4a70869439c0cb5ee8caf"],["/tags/async/index.html","af3f2cfca0a6cabfe44f09a5b7d200ca"],["/tags/axios/index.html","e6aa6b16d490dc8f12f850066b262217"],["/tags/codeReview/index.html","f3c6183e74f9211e004d77660ea297de"],["/tags/cssModule/index.html","a997947f3e6c374f21f6fcdcb5fcd7ea"],["/tags/defer/index.html","4f0d292b7ed5f205a9e4bdbc3edaf01e"],["/tags/flex/index.html","020cd5da0edc2e05377bc0241c6d039b"],["/tags/index.html","5ef09dc95a6d69a29bf2a147f2c41209"],["/tags/overflow、滚动/index.html","3a01f924b0188013c038aa2cf4c076a6"],["/tags/position/index.html","db458ef3cd22da1ba1c1a5ab0203980f"],["/tags/requestAnimationFrame/index.html","b0b5b29817044738e491e28c04868d4b"],["/tags/webpack/index.html","138dbd52af2795ab715ec75da8d056c1"],["/tags/webpack插件/index.html","7d80ba2c9dbada721a655ace3f997141"],["/tags/webp图片/index.html","dd685e01a6f7547e84fa75316016992c"],["/tags/二叉树遍历/index.html","2ad111821d802dcc7481807db1f61e79"],["/tags/优化/index.html","f913b4766f82770202d5d7ca6933507a"],["/tags/函数组件/index.html","7c471ae24ff630969784f67c01d8946f"],["/tags/前端基建/index.html","aa92107186814032f05a9a4e3e9d9148"],["/tags/功能实现的tricks/index.html","6172408b48e22edeb811b2534b0d896d"],["/tags/去重/index.html","309b6a8601a7619591b4bc05fc105d0b"],["/tags/双向绑定/index.html","5a625270bb36cd5b688096cc81488bf8"],["/tags/响应式更新/index.html","d4ba4890737b281826e03fe2a2f8268f"],["/tags/安全/index.html","2318dbf48e44ad799d50e30bd7547d08"],["/tags/宏任务/index.html","581b7d0bb7e85032e6cb997485105285"],["/tags/帧动画/index.html","a848fe4ecc328338efc565c45c947448"],["/tags/微任务/index.html","2907449759bcc89f1aaa36a0b81363b6"],["/tags/性能优化/index.html","5ab12857040345ed2b707c57947e9e15"],["/tags/懒加载/index.html","91978e2d91a93361e670ebf2cfaef272"],["/tags/扁平化/index.html","dcb9e2bb2a5af9194a8b63ee877db1f2"],["/tags/排序算法/index.html","ddbe1ca341524c8e4d93512675678d72"],["/tags/数据流管理/index.html","870af4df08cb43b79b66c746525b840e"],["/tags/数组API/index.html","eeb313b936d62e29b91fdba1b5cc54d7"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","6358d4749489e36c0c1af3960c103277"],["/tags/文件上传/index.html","111606a42cee08b308cd4f18682b1c3d"],["/tags/样式污染/index.html","d1a40b1018587e619e4a57fa08c510f2"],["/tags/模块化/index.html","8c537988a1ff06fb9266c2d9f3367a75"],["/tags/浮动/index.html","163bd220fd7a0caa47be4f4d9736fd4b"],["/tags/渲染解析/index.html","09cdb53784fdb0a884a2eae186344e93"],["/tags/生命周期/index.html","d239ec4e8e91b19a0b1760aec4f087b0"],["/tags/盒模型/index.html","4f20650f71800836767f2d262dda4377"],["/tags/移动端适配/index.html","ad404c79e2694d6b037f759bc6f7fb1c"],["/tags/类组件/index.html","376c3954aa5852c0c729af4ae71e2912"],["/tags/组件库-antd/index.html","b055dffc8e1472bccba548bc9d053b69"],["/tags/组件通信/index.html","0c483e1dbd2982535ea0c8dafcaebdaf"],["/tags/编译执行/index.html","e713ce658bcab857437600ef5151aadd"],["/tags/网络请求/index.html","3f1c5ad4c808f4e0c77168a38973e26f"],["/tags/虚拟DOM/index.html","3bf4ce705579f77fbdc1176d0bd1550f"],["/tags/表单提交/index.html","5eab02f4d36b21b0ca09cc2c6fed92fa"],["/tags/计算机课程/index.html","e07af895dab2cf7a22a61e879648a9ad"],["/tags/计网/index.html","7e808ce16c8878b9b5cf16bf72e8f67d"],["/tags/跨域/index.html","c1c33e8753832013f7b6c49439c16a01"],["/tags/跨域解决方案/index.html","1faa1244272da421dc5bf74101d04192"],["/tags/跨域问题/index.html","03133a14d7265703c537413880d93efa"],["/tags/路由管理/index.html","70a65da972df06565c2d4d984d6248c3"],["/tags/进程线程/index.html","93aea97a71b32121d71f1ce9988e920e"],["/tags/选择器/index.html","02c42af9c66edafc85e735a3217893f0"],["/tags/选择器优先级/index.html","a4bef56994809ba71f2b1d640a6c5e5b"],["/tags/隐藏元素/index.html","de8e08e012741aff10f5f7e91d70d7a9"],["/tags/页面解析渲染/index.html","207935955c43bccee07708f6302d310f"],["/tags/预加载/index.html","3d74d4e23ad8e139601edade5f018309"],["/tags/驼峰命名转换/index.html","f0e15d5c4ec6e0b2bde8a1d99e2bbdda"],["/tags/高度塌陷/index.html","2a385fdfee73f1369fc022f4ca226ca1"]];
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
