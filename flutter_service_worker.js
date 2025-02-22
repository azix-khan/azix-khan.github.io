'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "cf71acd7583ac4030793fce442bbd101",
".git/config": "0d91826c3a32d272da0f2a5c06f9a43c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "002c0762720815f95a4916ba1bf75350",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e743a98e1148a976d6be2d9ba72edbdc",
".git/logs/refs/heads/main": "94fb7f2231ffab512c6c33a65a2373dc",
".git/logs/refs/remotes/origin/main": "ecae661c6fec37e3ac8b64d8702639ba",
".git/objects/00/65f5323a2a9175ad52a5ceb94bc501ad723bc2": "fc1086115be21f07b7a275ba693dfc18",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/11/8cc83e724668159815ec14d2a3f0c94804dafc": "330a1a01695ec489cfdfd68f2f226b7c",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/c35f493dcfc30c7107b84c8e7ca4fd71a1c9fd": "f45a7197e260b2ff2201d455d71d8556",
".git/objects/1b/1b62936fa7b75635fccc6f40745732c4b5261f": "625728bb0d14398403f3409904231fa3",
".git/objects/1c/726254592a71e9c6b32039d0c88d038aa96623": "30bcdb40fd979b5d14b02d5e531d3d0d",
".git/objects/1d/4eca79b35d1963c08f072aaa056a642cf07383": "4cd35178f147c6399c8e8d52d69782f3",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/ab9b1dd280d9f837763337b5b610f7d64df396": "15f3be25178f3790404fbc5a32d97f45",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/24/493b2e7a94e641033f7edee6ebc7bbcf43daa2": "3811e14e162d0659024a19faee492890",
".git/objects/27/0bfa977964725f03fb572c74d05716fe2b55ea": "2490b0c3e2cba67b7b989cc1a709bf3b",
".git/objects/27/315eed8e917f0f1841ec8c266c83e35b24cbf1": "367cc9d2913000b2292272fa3c446e5a",
".git/objects/28/b6d54519047d6b9e7fb5160ab2d411ee349636": "ea303b253263e48400f488973a5fa3c8",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2f/5feb732ab012f02f44fe3eb320e13321838f3d": "2d726040b06198741dc02a88a5d8cfba",
".git/objects/2f/9a5c9356c30fa0dc442a2c0ff763e9fe998ca5": "6d78a55a787440b5e5f42065923a8b16",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/cf9e362cf604f1d05b80bfd67d6d5e563b4c4a": "7eba8541c400f6206fbaa3219fa44585",
".git/objects/34/2d1fec63fd7a5f7bec7bb36d2923e5ebfc451a": "3f4792ba9e3ee227fedbaee7bc04e8d0",
".git/objects/35/4fc51132e0eebd0ab72d0718a09d337bb6da91": "7b988cb11f1b6764912bc04e06f91942",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/30bf45fadd6c4351528cb7035c9b9307669135": "4d26fda86b34b48f5ae6d54077014c1e",
".git/objects/3e/303bfda9d50abb1b427f64a335177a40efa9db": "91d1dba484d637c8fd112762e20bb66d",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/0e29deb869bf8a2bd40bd458f54f0b784f226e": "3cc02e7de298c89186ac2b49a30a57f9",
".git/objects/42/a0bcd8bb490270983afbd7314279b20be288cc": "e5f2e67624382f45b21d8bf8361135ee",
".git/objects/43/3203f96bc37257e6acedbc4877b6b95d56a66e": "d0f4ca7b3689cba9188b06327505772f",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/d746f731abd48b36c4261f0efab841cbd1405f": "488294823338b63cad37eae3f2bd9925",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/49/83eaed99cb2d5301c2617334a9095697889a1c": "4d426507dd772298911be5e0c68c4bc9",
".git/objects/49/f00c7ffa27e540c446230b25c14c58493c3dac": "7246158b8b71c89d5dc9c52cde91324b",
".git/objects/49/f7fbf534608f38d42a844180850ba102801f69": "dff2804fc000aeaba231e560f26ffcf8",
".git/objects/4a/bf44cc0a6588c983488acb49f0a94c0b374c3e": "d295478b618a8af1e2f647704d64bde4",
".git/objects/4a/c93b4b39efb4e741709718b778bd06ee7c771e": "ea2d9ebba023e79e0416da3e27f1a126",
".git/objects/4b/fe94c13b57f0b9fa5cc5b529fb913626c5e4b0": "248dcb0aba8603b5a99ea90609f4ba3b",
".git/objects/4d/4f1264a2a156bbdfbae70ce4ee3a28cdeb73de": "df373f982af7699cd7070adde498a05d",
".git/objects/4d/afdfe71d4d3e5596374d9673ca7a9e346c1042": "2a6a7f7f78ead9c9c8d387a23c68f645",
".git/objects/4f/d1ad5943303159ff49daee7504b5dabc213f22": "b3431de6b78e3acbdf9b417ab891aed2",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/59/a9ec07297f02d3f87803bc2bbd90a438b6c7bf": "4c1c7ff32da95e71e959c5ef19eca102",
".git/objects/5c/05f9cbd63ceeffb0e0ae576ff2c599d3aa7049": "62d531aedf3e45624a53f8cf3781edcb",
".git/objects/5d/57fecec3991e652593b3683049491c85701502": "64feea31f7c640aba25983042f3bbc93",
".git/objects/5e/049f3ce0047d2d81943c16d5d7ec65350a2e98": "dd6f547061832ddfb61b7bc056a2f4f4",
".git/objects/5e/6ea0ca520583b1d00973f8b5cc70afd0ad596c": "1023588950c7d031ea270dd312fc1af5",
".git/objects/61/083838c65d610f77e557fcdd85e5c789dc75c8": "7f9b20ce31d6daaf2ed5b9d7fc112c19",
".git/objects/61/90bf319daa810e49b5a800ddf19648c3915776": "0dbf45100d80f42161085676e85b35d8",
".git/objects/65/32733f06443f6a134bc98092993f1098c947e2": "4e2404423fdbc71838e88771501af887",
".git/objects/67/640f6e32066ba18315c6dc5adc66e05ae0be32": "75550009d04dd18d4825078c2a9e4853",
".git/objects/69/2f20751030c4928576112dd36703233631b9c4": "b62dad7ea8839abdf748010697b0324e",
".git/objects/69/326c5f9608a9d0b4513f9fe4f615ddb274179f": "f893aa107495bf868c9c793803ee93c0",
".git/objects/6a/8bcfbb4d54902c598c27211156b22a2edbe321": "882fefe82184e1488a6de2b40b71270d",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/75/44d47f8c8bbd55d44fdf4577168a99f7013ea2": "33b6b7ed28eed550f56e0f7546368936",
".git/objects/77/b5701254b0bd78c6f24d94e91212fc5782b576": "b41110004e95ba39f344fe04285dbef2",
".git/objects/78/dd9c83a591ef493be4ee9a49ef3c782073f3bd": "101ed36e92ce0cf89782c1b7ea01b64c",
".git/objects/79/cd883d769d33c5125932119669f19a6f49999f": "5ad073568d066515b9203c9be5ca1eca",
".git/objects/7a/d6a5ab724ccfac453c16594d58ce6d14b0d9b3": "df83a4fae75e068f4f24f694910dd718",
".git/objects/83/41944b213d68e4cd7331a740dcc4f15303b892": "c5ae2774bf0bf7fd3c06aea4788e2e21",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/87/9acab3ffe2b2cd62a8906bfdf2d6e76f7aafe4": "00342f27e60dd7d3cf6c4b00099bfd19",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/8e/2d09b6ba618e083fd3083466fbeccd047f4674": "81b0d825fcb96d80ff29c2a0dff1a1d4",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/93/d2d0387eb1060d86c198c7357de75f1705ca3f": "cbdc374ef853a3f7316993b233d93039",
".git/objects/95/2fa043dc4c14aa9d3d69073ab3f0f9b873c326": "a7e5afb45af29cbdb91cc1d4c4c89f13",
".git/objects/95/96051633124d7d0bc7ddbe0cb144133bf634d7": "497d1b27ba6829a47ccd89fd74a1888a",
".git/objects/95/f4bced47c2f708b152175caa5bc0bf81b83ed5": "cdac906542e98531f7c6fe66eb83c2b0",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/9a/e1ebcfa4ff0e50d8f795560571d99f12e08acd": "2a3695724d446ecdb9e9a1eaa94bbc6b",
".git/objects/9c/18822406260b93aba93d207ac58e318b1e5927": "ae836f61a04c1e0e5a68f11d57dee12e",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9e/8d648f93b9340e099fae3adba41d5a4b4f10cf": "b2b090fdadfa330d3cbd28b18ca15bb2",
".git/objects/a0/9691c59f09fd6be723891259a2f97b94633787": "ecfeafcdbf147ee5377da41b2c8baebd",
".git/objects/a2/1085d6878e867c2e744159d718a9d4963f8372": "239dd4a96d6a1f77bfd4e6fd36c59095",
".git/objects/a8/7460a3bcf443f51b86f443eacbab8f34646bf3": "73bf1fd1505200fd71b5640be5987c37",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/a9/e0b6b8203f4a98f35c49d72372aa912338f82e": "067d38da72caa85a918af64f6dc281d1",
".git/objects/aa/0a7bd653ec20b94f49b64f9b71f9ac286398e6": "9de4a2178aac294ebbfb7a5013dac4d5",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/ad/3ce18b74a1c506a77ddcbb57757050aa305892": "e02781b9e1e26a1574f2478aeba38a71",
".git/objects/ae/027639a5095b8fccf9f9278908b662a6848789": "121218ef8fc45f028fbf15ddb6dff36e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b3/4d22d38e060629c1292c9df1f4d5ec28ff1d0a": "79bbeceaea03df0b4960e94665f96481",
".git/objects/b6/1556992a036f69c36930028b7ccc1d2c1cd417": "00a18977bf4f2abe08b3a5b167a81614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/c2d610e4c0bda0684c4e0a150c465b8706db3c": "0961107f2070ca4536dc2999a9ae0964",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/86c5eb654a153d6b89f4e79fcc04fd460231f7": "4bd062c75319de20a39a861dd9dd0867",
".git/objects/bc/0cff99d64b7e8de94c36e1ef43af8c5d1a8b75": "774651e535fcb1cb7cd473c868ec792c",
".git/objects/bd/924e1ef795ed0e89a6492d22a56c1454f77654": "179a081377611c6f5bffc1be5b26a3e5",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/bf/0cc8d12dc7225825fbf8e64a9d59d96c5fa5cc": "e99b87ce7262ccfb80e5df6f48c49243",
".git/objects/c1/5b6051c4002c18c04d7cd730589615f49424a3": "e8fa6ba80687d6b30aca29e9961061cc",
".git/objects/c3/70d6e8aa60b05ce0ccd297d488a3d862727085": "f08dd35549d473827165cc1c2522b8a8",
".git/objects/c6/2cb5ed0526bf70bc1435b877b221f090b36d2a": "8f7fa3739b36aed643e61ee166213784",
".git/objects/c6/42c4407383040e2118b9f130c5b37015cb90a8": "0a650bda2019ff9d87abba2cdfd41bc7",
".git/objects/c9/6744579e94202b6373d8b29a5f6394a0019913": "2dab539413fbbef037f369e316350d6c",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/cf/1c57f448c116da4b4910a8656332dc1e3f139a": "5efeb8b8d1d5c07d7058ff41463a1e4e",
".git/objects/cf/381240a1cecc4cf83e6600f984996cf730b42c": "b44c34ba861f8cc30fc60201185c0297",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/f148a578f171ab1810fb9f8ba005cb80946598": "9d822059e4f51b51cae7265d57624a05",
".git/objects/d6/ff26ea56af225bf5019779451f9110f748433e": "cf7985aaddf4ca6ecdd35d1078369310",
".git/objects/d8/d37d3991202f5aa600f384154ce9f02ee28535": "7573c99281b9c3ed4fd88d7c93e86f91",
".git/objects/d9/8b2ab795119e7fd8b2e85dfd59dfa3721c5951": "e2c3b78598701bc83988486c88d1cb4d",
".git/objects/d9/c19b1eee07c8bd75c3f45a45361cf39584ad91": "8456505088a348d22604f43c3144a24c",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/dc/9dc711b952c007411aa07667bf63a347c4f09f": "1b2d3151753e4e56b396a234dc67be30",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e4/4e16e08a5d4c6d02f7617c4035f83ac10106a6": "8ee510863aa2617a0e22ed39108488fe",
".git/objects/e7/34aca4d5f2fc7aca32ecd3eda51a053af6d464": "4477c8b3fdb294fb2614f5c42f0ae49f",
".git/objects/e8/04c742d5271e0923243598d37e58bf8ff4e0bd": "d565aadc9b3cf640f112863a7d22f4b5",
".git/objects/e8/8345f292a1cbd961e19e907a14c445620ed605": "4bcf1b609f2fdc2f6bf28f7d072cf881",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/d898abe2fcb7f48f946db5a3d01e4a0c4f5c5f": "629b904766d773fb1ebea6eb5fea90d2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/c378e85a53765ed78f9c98384d3d4a2865908a": "2f6a2cd2301b1e23d506576233dd41ba",
".git/objects/f6/ea0f9e4794562b3ff2bdbac6d7bf439c119189": "85182ef69d44ea216f8b7e2941517cc1",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/refs/heads/main": "fbc51826334ab6aa5b508d54f6ff1128",
".git/refs/remotes/origin/main": "fbc51826334ab6aa5b508d54f6ff1128",
"assets/AssetManifest.bin": "2247382b81721e5049621492b2e56388",
"assets/AssetManifest.bin.json": "f3031ef12efb7393945e862fa3fe8033",
"assets/AssetManifest.json": "f54905e278bf1504ff006f6441e0ff2e",
"assets/assets/apps/bata.png": "5fb3127f456cd437df7bdc5fc2647464",
"assets/assets/apps/linguamanta-logo.jpg": "6480a003aa09c5a308ed8cd64ec108a3",
"assets/assets/apps/linguamanta.png": "4a70a3d334dd7b964838a1ba3f993fa7",
"assets/assets/apps/not-much-logo.png": "87b5532cfc07344c0fa1e7d228813f46",
"assets/assets/apps/not-much.png": "e47eaf4bc6495466555a70be1fa29ae3",
"assets/assets/apps/tax-corp-logo.png": "55675591e1da46380fe8e343e68a247a",
"assets/assets/apps/tax-corp.png": "b959d8326984fa3aa347c4b02374910a",
"assets/assets/apps/tourism-pakistan-logo.jpg": "ed27a4b3c106bf66b397e8ca9e5b1a34",
"assets/assets/apps/tourism-pakistan.jpg": "0e99c16045c48b47bd51f520f96a14f0",
"assets/assets/apps/tradex.png": "62571b86270eaf29b425fa3d84e240f4",
"assets/assets/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"assets/assets/photos/black-white.png": "724841ca2dc3589d86ce304d7d0ef08c",
"assets/assets/photos/color-light.png": "7fd7aa141e6c226b74ed5533f0c99896",
"assets/assets/photos/colored.png": "f5125d349d58cdfac902763654824e82",
"assets/assets/photos/mobile.png": "27725bd3334e44ca8d6b2b22a7f96bb4",
"assets/assets/projects/covid.png": "39d6f264f51ddc3d12060b75e4e12a68",
"assets/assets/projects/covidB.png": "f7cc0d2aadaa5f7bb2ab2b4c969c0f05",
"assets/assets/projects/easytransfer.png": "590a3206db49eb10329854a37ddafe11",
"assets/assets/projects/linkedin.png": "3576a8de8fe8ee0ac5d854d8bccbbbf4",
"assets/assets/projects/linkedinB.png": "c2246d688f61019bf497c46cef0e3967",
"assets/assets/projects/multiroleapp.png": "cc363a35599f6f97f6b3e381b7d770e6",
"assets/assets/projects/mytasks.png": "8ee49459e10ac102762ab50bc2ee7385",
"assets/assets/projects/mytasksB.png": "0361fcc5f8f915b4ab25db9ded5b9ca0",
"assets/assets/projects/newsapp.png": "129b40d36631ffe0bdd8d04843148cab",
"assets/assets/projects/newsappB.png": "91e71b58754ad1556b0ae8159114557f",
"assets/assets/projects/selfevalution.png": "685c4fbeeda6ae7ddf9fddcbc4084f0c",
"assets/assets/projects/signup.png": "c178541e3bdacf9c4aca284f076203bf",
"assets/assets/projects/threads.png": "0a46ef1b798a9285041decd4f6cf5bb3",
"assets/assets/projects/todoapp.png": "40cb7a7bc488b0389ab916095d8af7b3",
"assets/assets/projects/todoappB.png": "b0442a549863916cf895a1ff6eb29068",
"assets/assets/services/app.png": "9d2da88edb7f550ef24874b306b4ae12",
"assets/assets/services/eurowings.png": "0d9be0a0329f89bac8900d5eef288864",
"assets/assets/services/fiverr.png": "9d4018924e1f0e983a86e7eaf8a0958b",
"assets/assets/services/ios-desktop.png": "80db3045fec69dfe56eda733aecd46a4",
"assets/assets/services/open.png": "4a5996597d32b06d91183f0860c29aab",
"assets/assets/services/open_b.png": "b65517dd1a07922b014409bb8dcb1e81",
"assets/assets/services/rapid.png": "8d3ff9fbdddae77403af46662f011ee8",
"assets/assets/services/ui.png": "3cf727247752b730a05f51fe0177036f",
"assets/assets/work/1.png": "8eb847effbdf068233f64710bb669d37",
"assets/assets/work/2.png": "b980c78bd84cb707a0b5fef25ac7069a",
"assets/assets/work/3.jpg": "a4620e03a7c20e9662388e65f8b717db",
"assets/assets/work/4.jpg": "692811619b16edc2df9d03c46e169a83",
"assets/assets/work/5.jpg": "c0f19c40c0ec8ce6383eaa2d2410ef36",
"assets/assets/work/autop.jpg": "c44401d84dd50c3982177d082ec3c204",
"assets/assets/work/cusit.png": "2f7bd1c6a006c97d9cae7bd9e3301ad0",
"assets/assets/work/encoder.png": "4ba8bfb608ddaa393aaa5109d2189960",
"assets/assets/work/extendztech.jpg": "4ad7ecb2b3c79f596e27ae01ac7031c3",
"assets/assets/work/growintern.png": "5ebd21402aa1956828f7aecb93cca813",
"assets/assets/work/internee.jpg": "b52d50b2163cc6b30f88a25e149528a6",
"assets/data.json": "d8ac3d77560f5d01644da9feefa7376a",
"assets/FontManifest.json": "eb13a0d169d41e78994c5d6eb9075409",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "22d49a01ed32e58341f7fe1a0bbaf5c7",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "89a58af1ffc9c9315843f41031c9d0ca",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "00a0d5a58ed34a52b40eb372392a8b98",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "3ca5dc7621921b901d513cc1ce23788c",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "a2eb084b706ab40c90610942d98886ec",
"assets/packages/wakelock_web/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "8061f5b30064ce3e2f37afb04c0fbe24",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "76567bc856b7f718b10a5c59dc91bf8c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8c0bea7bf9f718ad9ed7aa1ae9310b00",
"/": "8c0bea7bf9f718ad9ed7aa1ae9310b00",
"main.dart.js": "bd2f00264c7d5b304cde8b6df325fccc",
"manifest.json": "a04f73279b7db0f77956cc2b3b489d65",
"version.json": "48345a1c142d52f3e9f1bcad806aa487"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
