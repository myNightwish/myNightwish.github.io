/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/404.html","573c1506b64ad406f666c3accd6cb786"],["/archives/2021/12/index.html","725d31a483ec2991f20ff0365a82d55c"],["/archives/2021/12/page/10/index.html","7e4721759c28433b416c453bd449ea86"],["/archives/2021/12/page/11/index.html","f10a45962511afe01abea8c60221019c"],["/archives/2021/12/page/12/index.html","194a31a281973fdc1a0ae0f059add90f"],["/archives/2021/12/page/13/index.html","9c6f0160f394e9e1ad2a38b1d4cc5699"],["/archives/2021/12/page/14/index.html","8f56b9f07ed35d48709d585c2b8150cc"],["/archives/2021/12/page/2/index.html","98ee4372c5a75e5c8d426dceabb74205"],["/archives/2021/12/page/3/index.html","f9d95c0fb64c45119851f2166b63236a"],["/archives/2021/12/page/4/index.html","2726514b470cf59dc75ac4bcd0b0d4a3"],["/archives/2021/12/page/5/index.html","6669031912d443dd683c9b976437f6dd"],["/archives/2021/12/page/6/index.html","41be5df0dce7bd028c6b9bda7d6b41ce"],["/archives/2021/12/page/7/index.html","26fc4481a46e79dc4479451b34498c85"],["/archives/2021/12/page/8/index.html","18c9b803931a84e7ce9a4ae76645a5a2"],["/archives/2021/12/page/9/index.html","c03bb9b3523fd6b9c0bc4f802dcd0c59"],["/archives/2021/index.html","29fc5bd87e1058fab6f86e2d98d0b9f2"],["/archives/2021/page/10/index.html","22246a157a3a004af4bfd923fc30e2b4"],["/archives/2021/page/11/index.html","6f6065283076872fd0cca68e6ab008d4"],["/archives/2021/page/12/index.html","6c1cdccb0b7f8838d3f3ffbf1ee1a308"],["/archives/2021/page/13/index.html","1c3270c7727be54f2466885b5bfdcf8b"],["/archives/2021/page/14/index.html","45957f32f8a24f5acebd62c825bc0e91"],["/archives/2021/page/2/index.html","cc760abdd6aaa028e72ddc3c6683dec3"],["/archives/2021/page/3/index.html","4def4e475bd1129e9e28b806cdcd07be"],["/archives/2021/page/4/index.html","f3a951572072825a5e5afa7f7e5accc5"],["/archives/2021/page/5/index.html","e940a734c6521b346bb4dfcf962c3e6a"],["/archives/2021/page/6/index.html","84120c1eb9964f1fb73033a4e6157842"],["/archives/2021/page/7/index.html","f2eb824ca864a45456f402acf66878b3"],["/archives/2021/page/8/index.html","574c7bab4317c15334f76f219c1a1851"],["/archives/2021/page/9/index.html","e5a33904dc7a5f9dfba5a75711b5aa5b"],["/archives/2022/01/index.html","1cb0980543169e36c9cb3615f09298e8"],["/archives/2022/03/index.html","5cb7b95d0bce87d5e58255f506331732"],["/archives/2022/03/page/2/index.html","67b7e70fde8fe3730335d6c0b47ea905"],["/archives/2022/04/index.html","3bec5036243959fa63091fc36bbb2315"],["/archives/2022/04/page/2/index.html","a3f7fe66b1267123d92086252c2e88b7"],["/archives/2022/05/index.html","377fda1bc01631484fd3bedbb1f9a79c"],["/archives/2022/06/index.html","b5a892d197a81539585292f60237c96b"],["/archives/2022/index.html","22eab6469de914c9374f156870842973"],["/archives/2022/page/2/index.html","617977c2d60978018e4298898a39b420"],["/archives/2022/page/3/index.html","caf4ee7b514631eb2e4048d011ada801"],["/archives/2022/page/4/index.html","6551229290662248e502afd74bd161ef"],["/archives/2022/page/5/index.html","c9ef14a80a3093d8faf8e5a59607440f"],["/archives/2022/page/6/index.html","c040b36cf2553db0a70d740ae25d7fa7"],["/archives/2222/03/index.html","02fb28188644715ef9d99381b4c01239"],["/archives/2222/index.html","b802adb055317f582833d9a5a4384ccf"],["/archives/index.html","df60b40b839870fdb492565cb8d85d19"],["/archives/page/10/index.html","92cb246f3ff0574d79e0a59226f7eeb8"],["/archives/page/11/index.html","51a5fb4818164c9fdc5f31708a04fd12"],["/archives/page/12/index.html","c2ab0d6ffaa33529f6574fced3450d7d"],["/archives/page/13/index.html","76a07be67789f6de4f2134c3a5937df5"],["/archives/page/14/index.html","e83332ee9ab04850a7bdf9c247f92d65"],["/archives/page/15/index.html","ea00b53e30595319d81b6cc34b209b63"],["/archives/page/16/index.html","1dc38c0a937dfaf67dee3635f81be9d9"],["/archives/page/17/index.html","19ef26253e9feaacdad6632c3d6bdb41"],["/archives/page/18/index.html","bbb5216283d14012a39cdf4559d92e2b"],["/archives/page/19/index.html","25264575e2e7b78be284a717d8c70f4b"],["/archives/page/2/index.html","59736b6e5e10279e81a7d31d80b913af"],["/archives/page/3/index.html","0e0a8cb344f0a8aef97090469fa1b979"],["/archives/page/4/index.html","7bf98ed727df92e5aeac26e2a8aef1c0"],["/archives/page/5/index.html","32285247fb9e9b7207a0434d931d2cc6"],["/archives/page/6/index.html","8c30129dc800f8d2adaafafb01d93257"],["/archives/page/7/index.html","6a44eb4edccdefbcf787899b38ac1bf4"],["/archives/page/8/index.html","2129813d4c6dad73195fd9cf043dd342"],["/archives/page/9/index.html","b2fda65c7a458aebf7166c6b3c86fbb3"],["/books/index.html","54f64dfb2abadaecf4c3576d45edbc37"],["/categories/1-1-CSS/index.html","253e8634694d80f468907afe8b4c67d4"],["/categories/1-1-CSS/page/2/index.html","73b6915fe3f478de959bbcf50bd60a2f"],["/categories/1-1-CSS/page/3/index.html","bd32c1b776162948f2a4f97884a6b85a"],["/categories/1-2-JS/index.html","dd8d181a4625ab12dbb8e735706c0c0a"],["/categories/1-2-JS/page/2/index.html","0628c28fbe375d2e8eb76f1ea23b757e"],["/categories/1-2-JS/page/3/index.html","333843e4b905dd5bd6be79ce142508ae"],["/categories/1-2-JS/page/4/index.html","72c3efa8c626208c7db0db053b1be446"],["/categories/1-2-JS/page/5/index.html","858dda8a61d9864f198e326de14fe342"],["/categories/1-3-Ajax/index.html","6507ca6e7ce88d428896567ac0079754"],["/categories/1-4-框架/index.html","b1d38b9efd557cb73c13ecb069e9813e"],["/categories/1-4-框架/page/2/index.html","669d223e18ec41654c72e07e559019c5"],["/categories/1-4-框架/page/3/index.html","4a8fdf70f4537118f21a374c5785f2a2"],["/categories/2-1-组件库/index.html","e12e8d4b509f607538bc04553cac6dd5"],["/categories/2-2-基建/index.html","07cdca76a249004e1be8b62b1caf9fbc"],["/categories/2-3-实现Tricks/index.html","b2443755f3abbb14de51870a8ca113f9"],["/categories/2-4-项目/index.html","9cbd54f8d7b3e661b9d5ba663d447c57"],["/categories/2-4-项目/page/2/index.html","a04ed7f69700c850546b6b4e4727b4af"],["/categories/3-1-记录/index.html","220555de6a189399ad5f241802f2ed1c"],["/categories/3-2-浏览器/index.html","733291394026ac1868ed4bad8bbf4c8b"],["/categories/3-2-浏览器/page/2/index.html","70d4ba8d0ba08e17a57d6d6a11926826"],["/categories/3-3-基础/index.html","ff0130c97c658cfbeedf84b6294ca949"],["/categories/3-3-基础/page/2/index.html","67a4be99e227c66becc04b9716e8649a"],["/categories/3-4-Tool/index.html","e7ff7e8049fe3190854e3d732314352b"],["/categories/index.html","e323ecf57656ac79f11488fc2e102bea"],["/charts/index.html","6773ed8a727ab6e16953907729086acc"],["/comments/index.html","673603b21eba84f424ff6ba0f2a90398"],["/css/beautify.css","6d866a33118938bc08fac087124729fe"],["/css/custom.css","1684ee2dc3af92f576dc9eeb723ce713"],["/css/double.css","3419d63b142d67c376292256d80e7ade"],["/css/hbe.style.css","a8bc819e01e001d3bc6ae03a2afad957"],["/css/index.css","86a617d54d2dec9a46d159c08feda2ed"],["/css/lastLoad.css","43447edd51fafb5cf351c0f66c2793b6"],["/css/progress_bar.css","75ee841f50186cf741ee00392ef3d9a5"],["/css/readPercent.css","0ba25e13ae43eb9df56781d25e5d4129"],["/css/swiperFix.css","77feb30b06e999892c08468532874167"],["/css/universe.css","9378093e59fabbc01f9bdc9845bc5356"],["/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["/img/friend_404.gif","68af0be9d22722e74665ef44dd532ba8"],["/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["/index.html","96586c42782052bdfb3259a508136250"],["/js/beautify.js","1da400c22f63cdf148866998e6529417"],["/js/bottomTime.js","0e8c762fe4cba441a7d49b5cdc2d20d3"],["/js/cursor.js","1c96fba58542f67598bba2d133643984"],["/js/emoji.js","7b6befd37a8ae0902ce5b35ae0ca5d2b"],["/js/main.js","8ef9c67ffd06d2d27cc29015dd20cb6e"],["/js/meihua.js","285bb5a986a2892038957601905a6b53"],["/js/nav.js","07a6430d58d1d7e679ee17d02b5a3662"],["/js/search/algolia.js","533d980c0d50a0d0d7fe34c41a3e2100"],["/js/search/local-search.js","33b3c0e197c029d5b198059220bbd5ab"],["/js/sun_moon.js","4f871e202ff2634f784d4bd519a5bac5"],["/js/swiperFix.js","797c9a9a476b1a004c49ff7744149c76"],["/js/tw_cn.js","b3810513e04b13b2d18c6b779c883f85"],["/js/universe.js","cbebf18071e8b76c5a65562caa272b26"],["/js/utils.js","12cef07c2e9bc8841a5380df4fd342f5"],["/lib/hbe.js","4a7e94ac7224adfce4b0572ca5c57fef"],["/movies/index.html","850e6f962d2305616e0d1c4d5573dfc2"],["/music/index.html","1ff1facf5c220259c4e80f1751f59ee4"],["/page/10/index.html","e26d1e6f9a296af4b8c2e6b11abc240f"],["/page/2/index.html","bb87bd56573b1dac044089f3e42be383"],["/page/3/index.html","19726a2ae72e9754d576eb983af909e6"],["/page/4/index.html","6208c9e38ddebf5b617ded86097103c2"],["/page/5/index.html","3414ec26e35d8e0ed7f555283de836d3"],["/page/6/index.html","576156c3ea317e01c9e5122dcd26ba86"],["/page/7/index.html","1eaeb58205efc9f56383251f4878580d"],["/page/8/index.html","4164f73ea221a2f45b149b9c17ad16ea"],["/page/9/index.html","5e4f9e9db7b8fbb2134981bc9b8bccf9"],["/posts/1003179605.html","751c3ed8c9fec4f606e7469e916276c9"],["/posts/1078088869.html","198ec09b58f87e2bb60fe26dca433d02"],["/posts/1168384896.html","7a4fbd9c2afd0159dabc2cce3b55b64f"],["/posts/1174755164.html","c7f1a2ca028cdf2c788219a05d2be730"],["/posts/1207877865.html","ba1d90348749a813cc43cd2e7176d1cc"],["/posts/1322992885.html","16abf35bb7887cf909ff56d726bb33d9"],["/posts/1405183845.html","c6747711c78ba3e14f88a6c9a9fd0a06"],["/posts/1460941642.html","e6688e2e9622a66f0f12bb056cfe74cf"],["/posts/159855229.html","ffdfd38a094649b39bb4305c8c65dad0"],["/posts/162997961.html","e50fdb84d433dd7820f1f53571bf6389"],["/posts/1634682499.html","c59547e9facfd9477c1c0422d38bff19"],["/posts/1720673220.html","7161e5237b433dab59209dd7e83c94a3"],["/posts/1794184575.html","ba97811228a5481650202e75d57e8b0e"],["/posts/179783341.html","8e23acbda9beec4968cea788bd92ba1d"],["/posts/2007769797.html","db7f2eef15d2f7af12ab922420e654bc"],["/posts/2062301197.html","ff59c6079a7cfae784330de7ad8fd946"],["/posts/2071449193.html","0567cbe81bcab9b6554c6c7ac8c6bc9d"],["/posts/2075292597.html","9238609f8e801a84be18f584d903d0ad"],["/posts/2124882507.html","267e5b50f939145d6f5f37131b2e6f66"],["/posts/2131155013.html","003c8ad04de089f5fc41da432dfeda65"],["/posts/2169143571.html","489648397b2c9ffbede8eae6024d5667"],["/posts/219349139.html","e790f1dd9fa905480128ed8df548b39e"],["/posts/2217063026.html","e373faa03f56b2d6e858e10940f6ea46"],["/posts/2218506745.html","76cac93ee1dc7a3dcc5b357d6f753356"],["/posts/2292260110.html","02dae64c9db3decf9b98bde92a7cba8f"],["/posts/229643181.html","c5316b61b51cab8c562e16f980a11153"],["/posts/235914813.html","598c078fa9f82f59e8068c9b16304187"],["/posts/2387908466.html","586d8e558bfb664c2e955ef50677922a"],["/posts/2580568501.html","b9461d890fd77bea890b4eecd6852ffa"],["/posts/2621268747.html","b57e0decb5d38b0e956702b072e89dca"],["/posts/265724518.html","6cbdc73220f1ee54a57605efd72d1aa8"],["/posts/2716721158.html","81c38aebca161a7125a1c7b1cc1340cc"],["/posts/2747544176.html","18b895385fd27db072fcd505c796cf56"],["/posts/2799443321.html","aaa767742ad5295386ec9661ce436133"],["/posts/2803057116.html","f696387342b87d61e52355c5a128f1a6"],["/posts/2818550155.html","0ca25e54630a9520010e2b050d7e2f1e"],["/posts/282252185.html","15820f53a2a1aba006be5e17782ce9e8"],["/posts/2959925095.html","26868e9b53c027dce18c6c359269ccd9"],["/posts/2971665882.html","2a7c1358f73cbb84b9c20a3163fcbabb"],["/posts/3067404590.html","c75982a5b6b9d4028e80117735e780e5"],["/posts/310999178.html","138338e0d1f28b79999e1ead2db1002c"],["/posts/3120977046.html","1dc336ee3c4aa6ca0589fe7de9139bbe"],["/posts/3253065341.html","765b6f9d05b18098ec0163e356185e9d"],["/posts/3253305718.html","c11f01b1bddb5a2fd6eef62de41d901e"],["/posts/3384747987.html","c9092a31e6951b74d3e599beca24ba7b"],["/posts/349024060.html","921ef88c4c81a9b4da471013eaeb70f6"],["/posts/3598970227.html","f7bfba2a3e9a3773dcb8a4c90c4b3ad6"],["/posts/3611094049.html","f5e6fcfb69a094f6f516fb5d550ff945"],["/posts/3631469724.html","6fcb9e8e97622df549b21860bf883a23"],["/posts/3691095479.html","66efcc3af1e917eec777b11a85b89ea3"],["/posts/372934289.html","a6329091239e554dba3ff0e30cdde1ed"],["/posts/3737997078.html","f8c2a04bc1ff14919dede3a774f8379f"],["/posts/3783644122.html","3280e922516a14de2839b00ea624edeb"],["/posts/3906205819.html","84866f2f4c419855dcba8f371e571159"],["/posts/3912543564.html","1a8ed08ea788b9b216f2416d59a0ebe4"],["/posts/3998253138.html","8f9ee74086190d74bb01d0d99b6c6204"],["/posts/4075683688.html","36206d85601d40c037536517eaf747c3"],["/posts/4184919567.html","526507ece277cbe5e809dec94be6a68f"],["/posts/428414458.html","5965d0983e5f42fe4d66e3c7d937d609"],["/posts/4285860800.html","4169c5ca9f62c1252be5ac436d5c3ad7"],["/posts/50508479.html","b7dd44cba8f62f152d924a129633598b"],["/posts/511687579.html","8dc7d40fc522c2f9eee81248047124db"],["/posts/611441247.html","1cf90a09d710ed575e9a88823c24d065"],["/posts/619926249.html","2d03522c5f96e76319af031be87c7677"],["/posts/656350506.html","86fab4f726d84639509049f7cf4b002b"],["/posts/680535600.html","cae993a9f0acbf897b00b382acd3ce33"],["/posts/684607466.html","b51a7c88928be7e3688bd4359e93d337"],["/posts/686254810.html","d9dd0450e3bce29ca6371272373c3c97"],["/posts/710205459.html","76ad15578edda72d8a596a7dc2a2122c"],["/posts/775935900.html","bb6efe796a1e31251b14c1fc011a85fd"],["/posts/854292428.html","92f33aba23611a30889f6388a61dcc0f"],["/posts/855735627.html","6cb2ac89dde0a9bc96604fa8447ae5e8"],["/posts/867212230.html","0be4879f6a925585ccfde969b19123ad"],["/posts/926905116.html","82429b88861cc0db17a411573f916a76"],["/posts/CSR_SSR_ISR.html","2076e6e173425e3ef07597fe205630c8"],["/posts/CSStricks-1.html","c16fa563811d9cff5c93f09a9431ce9d"],["/posts/CSStricks-2.html","b66cfd5eab2446fc7749b406a7b126d4"],["/posts/ES6.html","576decb407a3d776880d2424068592dc"],["/posts/HTTPS.html","9ed0dce0967d4b022c69769e0235dd79"],["/posts/React's Component.html","a6eb1a84b0d11963a890869dbf2d439d"],["/posts/React's key Concept-1.html","e353a926b59ed706c32316da20fab768"],["/posts/React's key Concept-2.html","69e4b9aa05caa576f668d5fb88815ad7"],["/posts/ReactHooks.html","506d997102747faa754425aac4f8e57e"],["/posts/React_lifecycle.html","304e44f03118da0e8b2061becbca05d6"],["/posts/URL_URI.html","78db0f6cf14cc709bbab6bd11c100b44"],["/posts/animation.html","c3108431db531188a52949534b9070ae"],["/posts/antd-data-show.html","aa04f4fc318cbd7ad0b5e527c8024d94"],["/posts/basic_construct_1.html","d1037fa178c89cec59cf6f931237c134"],["/posts/basic_construct_2.html","e43fb3211f6a1bd779be43b4406c8fb6"],["/posts/better_performance.html","1449adec282b74e5d06e33cb6b142489"],["/posts/blogChange1.html","51cd588098c0edf65171de7d4898d8e0"],["/posts/blogChange2.html","98b89112e7ee0518208848da4475a99c"],["/posts/cat.html","29bba5f956174c2d79e81710b83cda77"],["/posts/cookie&&session.html","6873cc5dc0a2ff3477705a6060f7ee11"],["/posts/feature-tricks1.html","9f95041e956bdc7dd8c04828589f9ca5"],["/posts/file-read.html","c310c34acf285350a72f98fb4d5e2886"],["/posts/gap-property.html","9c1ddd805cbed886c4ffe20e289b2e27"],["/posts/hideElement.html","aa6ea28c1c4659f618f2c726459ef00d"],["/posts/http-cache.html","31b63b1743b7bdee3988f310ca125dc9"],["/posts/http_cache.html","88d9e915539d00d155547992d406ed2d"],["/posts/privateGame.html","c97a705e499dfe6aee46d668c21931e0"],["/posts/prototype.html","15cf2ac7b37be4928b01abb7edf9a236"],["/posts/react_components.html","f821879543486735dd54914f49394b84"],["/posts/react_vue_data.html","992b5cc916fceaf0da1321c77b2905c4"],["/posts/requestAnimationFrame_1.html","d556b0351bad2e8244550725cf8b5e17"],["/posts/scroll.html","ec011310a998593b4b59b468bd31f8d7"],["/posts/toolsTest.html","0afea0a3d0eb35d2fd90ac5895fa9a00"],["/posts/vue_lifeCycle.html","32cb786f8ac3a990d966ee1c7fcc0033"],["/posts/what's Hook.html","40850cf4af7d3c80055b345bb09e1431"],["/posts/why Hook.html","a8f4adba2bec9aa092d581cb8b4ba882"],["/posts/前端模块化.html","cead827822c2d8fb00e5f8fa77eb417e"],["/posts/路由.html","fde7776e9273c011c4db29582e5aca1f"],["/tags/BFC/index.html","0215e711dae3b7d67cf9ada02b3fb3a6"],["/tags/BOM/index.html","e750a3a3432cd24edae1a68fa093f563"],["/tags/CDN/index.html","cbcf7fce47086bd38a7c91d9de121b15"],["/tags/CSS-in-JS/index.html","5df125a42eb13c34015715b3eee344f4"],["/tags/CSS/index.html","fc4845ef882098becaa62984ce2315eb"],["/tags/CSS动画/index.html","1fe6f174f450b6dd52b229b83b35543a"],["/tags/CSS属性/index.html","7d2b5df204eeacb1a5f4daba3617756c"],["/tags/CommonJS/index.html","448dcfeb3f2867bf35be1028e0ae2110"],["/tags/DOM/index.html","e31547ef6b0c94160d1f3604359ca3cb"],["/tags/ESModule/index.html","d541dc9dd6e15ebd49daee19e142d932"],["/tags/EventLoop/index.html","0310bf5efaaf154476f9dfeb6b69058e"],["/tags/Git/index.html","ef4929759e9b79bceb406ccb3df676c1"],["/tags/Github/index.html","7251d53e158d2017ef935de197e27c1d"],["/tags/HTTP/index.html","a228c513e311ccefca03db4c5463bbe2"],["/tags/HTTPS/index.html","04eb281e59d4e2df302a85282eff1f53"],["/tags/Hook/index.html","78efe107831398b16e3d14ccb787fdf4"],["/tags/Hooks/index.html","539ad0ff3cce510c7b60c9542e1548af"],["/tags/IFC/index.html","1511de817a8252a113622afa81cdd03e"],["/tags/JS/index.html","9529b985a31f00620eb8bd189c67021b"],["/tags/JS/page/2/index.html","79981810f261f137f93b6e6e0e62f9ae"],["/tags/JS/page/3/index.html","e7d4c03c82fcaae500b34c9ead809fae"],["/tags/JS/page/4/index.html","2356c4641b41aad8ba723c18303680ba"],["/tags/Node、Antd/index.html","4d3259e204382c937396a9d986adca7a"],["/tags/Node、MySQL2/index.html","f074302ba83f71938a331a3a44608627"],["/tags/PicGo、cdn-jsdelivr、githubPages、Hexos/index.html","691dfd9adf559ae2971dc83e853c59a6"],["/tags/Promise/index.html","61612d9f1fa98c91d9ca71eaafc3113f"],["/tags/Promsie、Async、await/index.html","915d0a64e0008e2796f08eef8d794c5f"],["/tags/React文档/index.html","3ac0502007b754b9e74898d014f8508d"],["/tags/TCP/index.html","6b34633ca680a0749b6195ff92bd57d9"],["/tags/Tools/index.html","c33c99a393b840bf41dcc8cc2646bd1c"],["/tags/UDP/index.html","aeee54c36b21983674ed2d2b81f61439"],["/tags/URL、URI/index.html","ede26d13f2929174eca61720e9d338bd"],["/tags/Vue/index.html","40dd0a22894512a89d035c158ddcdd91"],["/tags/ajax/index.html","498306caaa08d326551d02925a3038b1"],["/tags/async/index.html","a06cd33df3f55b551aecb4ed2eb13eb2"],["/tags/axios/index.html","59df296082985ebae91579c24032e386"],["/tags/codeReview/index.html","4265573e95dd7c0f33e37c9c9dd3a6ec"],["/tags/cssModule/index.html","b87381ff44d00a23737e11b7b7a3a86c"],["/tags/defer/index.html","42cddf1d08f2b31b046352ec17a4fb2e"],["/tags/flex/index.html","6d8140d60029fa78b702afb9b2218c69"],["/tags/index.html","3fa430b8cefbffd3448f9919c1404482"],["/tags/overflow、滚动/index.html","02b0f5cfec7810ca25a4c04c3533bb24"],["/tags/position/index.html","8530b358563ee240fc26b570c36fda65"],["/tags/requestAnimationFrame/index.html","e4a33bb34223e9b779f9caefb70df5ac"],["/tags/webpack/index.html","a3ec25c4a380510f4daa9d2744ee2ae5"],["/tags/webpack插件/index.html","5ddb819e44d8fbf72bded77e5673c40b"],["/tags/webp图片/index.html","d13640edd7c0d8eb77b2f3e7ec46f376"],["/tags/二叉树遍历/index.html","db35deac0d52c16b61bba5db050c9f03"],["/tags/优化/index.html","296835e67d2da2ce83c32e9bf5810c10"],["/tags/函数组件/index.html","feda38f61c52eb5df71789cf40ba683c"],["/tags/前端基建/index.html","bb14b75bf8249612a31904e218874def"],["/tags/功能实现的tricks/index.html","643422c228f7f02d3ef9e63d8f23691d"],["/tags/去重/index.html","76e9bae646980f0c22e42224ca8e270d"],["/tags/双向绑定/index.html","e445af2a0d5fb0bbb0682e45cca4f777"],["/tags/响应式更新/index.html","b912875b085d4324cdc3e51ea0281b7c"],["/tags/安全/index.html","4cdcfd2d0eb4ee64b6ff9054d3159674"],["/tags/宏任务/index.html","c92af5621ece26f575a2635123e293e5"],["/tags/帧动画/index.html","7d30ace2bada70c9e256207cdeccc17a"],["/tags/微任务/index.html","a9ad607628dfc57d55c1a6fcf85ad5bb"],["/tags/性能优化/index.html","4a8ab369b527f7574cd15c7126a00498"],["/tags/懒加载/index.html","e26a4b00399b92781539b9207e8d4fee"],["/tags/扁平化/index.html","070dca7b4a2a589677c78a367d308bcd"],["/tags/排序算法/index.html","a8f650ae46375bc5a0058dd955771d6b"],["/tags/数据流管理/index.html","b8e669f5d05c2acc7c948c717df1883c"],["/tags/数组API/index.html","25308ae2f80fab9402fd5c55d8db5a07"],["/tags/数组去重、虾皮一面、虾皮二面/index.html","c4fc724126ea3d59b42a79ddbb9f5594"],["/tags/文件上传/index.html","54debf4aa6b55171565d1f88482afd7e"],["/tags/样式污染/index.html","50b58a60131dda66317ca26fc01bc718"],["/tags/模块化/index.html","a316d95e7807286cf895c54cf750f91e"],["/tags/浮动/index.html","aa437f838f396d8a63efa5befd15554d"],["/tags/渲染解析/index.html","7720cd88b34ec473f65c145ac113c359"],["/tags/生命周期/index.html","8a88626e8e47a0998f172bd5c1df9108"],["/tags/盒模型/index.html","2c3c95c2de61c04c9acac6139eaea377"],["/tags/移动端适配/index.html","fa960baae3ea242bd5ac70998c06caef"],["/tags/类组件/index.html","f7f4d49664cf12713260a5001b90ce6a"],["/tags/组件库-antd/index.html","68ecdffb7dce960689dfef7664e8bceb"],["/tags/组件通信/index.html","f9e177aa04da9db1d3018142595d3d7e"],["/tags/编译执行/index.html","13c9a5df366a6aba7e6c27b16a64a075"],["/tags/网络请求/index.html","8013a1d17ce3f3a1527910d98807f34e"],["/tags/虚拟DOM/index.html","89941f3075c7cce7695866d9799a5ceb"],["/tags/表单提交/index.html","62d467ce4d340e6c11217efc65b8108c"],["/tags/计算机课程/index.html","ac6e3a8ac764996d18e44bbf0e4a072f"],["/tags/计网/index.html","3636ab99074513c69cfee986311ce72f"],["/tags/跨域/index.html","b4bab1aad8963b165fc10b06c7d6567f"],["/tags/跨域解决方案/index.html","a4b9523b7efaf657e655cd656be82692"],["/tags/跨域问题/index.html","85ec04f372ebf1ddb94ce95eb1b52408"],["/tags/路由管理/index.html","7610f98a94da2f5b5787ec21450e354c"],["/tags/进程线程/index.html","2343974219f8a65fc1d939151d132582"],["/tags/选择器/index.html","278329ae596d536ffc39e47f48a2db2a"],["/tags/选择器优先级/index.html","6459710876c7191a406cc6a76c6d4603"],["/tags/隐藏元素/index.html","abf838fd1d57c0820ae357073421e3b2"],["/tags/页面解析渲染/index.html","0ad91ea0cbb8a85a15cd8ef55b93a387"],["/tags/预加载/index.html","e8fdc0d3afb166a8a608bd8deb15bd74"],["/tags/驼峰命名转换/index.html","84540dc380832dff1e739c84bb877106"],["/tags/高度塌陷/index.html","fc813318cbbabc746af87daf79f09ec8"]];
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
