'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "dea62b356b395c635e5bc38fe46210f1",
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
".git/index": "8de39cddb4bb4012a388aeb9abe98580",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "4ee02ef146b48b5ff63d06e1d2571dc2",
".git/logs/refs/heads/main": "50ca5a086d517c2b7d70e6e6afa3b168",
".git/logs/refs/remotes/origin/main": "7a063a65863d9bb849bd4cc8eb07eae8",
".git/objects/00/65f5323a2a9175ad52a5ceb94bc501ad723bc2": "fc1086115be21f07b7a275ba693dfc18",
".git/objects/02/1d4f3579879a4ac147edbbd8ac2d91e2bc7323": "9e9721befbee4797263ad5370cd904ff",
".git/objects/05/ade9b89e1a6b1d530ae7df440ee7fffa1a1371": "3817bde8f956542e73a16efd4b726d65",
".git/objects/06/8000d9f50da479fd3df27a58bb32080dbb745a": "7549c35f2c09cd262a21ddb5fde9a1cc",
".git/objects/08/3e9af7112a515933e506cb957b6bd29a124cc5": "32013130a8cf244399f6be0308d89efe",
".git/objects/11/8cc83e724668159815ec14d2a3f0c94804dafc": "330a1a01695ec489cfdfd68f2f226b7c",
".git/objects/12/510e34f722b2ec03ed586e0ca6a8d7d2b7aa77": "8c3170c73fc3574fce53ec05639f8491",
".git/objects/17/a4de0aa37da6ae5ee7d0d9c14d2f59bf44dc72": "9ea3daed8e42ae1e70aef767c8fa1119",
".git/objects/18/8fab1882dc826f9ad5758eb4627dc80ee02d1a": "68cc4d858adf04bbfdf92f182df953b2",
".git/objects/18/c35f493dcfc30c7107b84c8e7ca4fd71a1c9fd": "f45a7197e260b2ff2201d455d71d8556",
".git/objects/1b/1b62936fa7b75635fccc6f40745732c4b5261f": "625728bb0d14398403f3409904231fa3",
".git/objects/1d/4eca79b35d1963c08f072aaa056a642cf07383": "4cd35178f147c6399c8e8d52d69782f3",
".git/objects/1d/7dc079b3bf5aa9285e67722cb6bff6f050af06": "c47fe340fc72be693a7fe1cc2a2d5a61",
".git/objects/1f/ab9b1dd280d9f837763337b5b610f7d64df396": "15f3be25178f3790404fbc5a32d97f45",
".git/objects/20/3a3ff5cc524ede7e585dff54454bd63a1b0f36": "4b23a88a964550066839c18c1b5c461e",
".git/objects/20/8180a10143a4c069cafa131ad60b89df7bcddd": "2b9f3f4ffba79325ebaa796d932bf12b",
".git/objects/22/feb4c88aa2d3a62b86080b67cb0a90fcf04ad5": "4610ed83fe2b5853d909eac40642c136",
".git/objects/23/8209e3350ffd2158e6b0610bcdb0a92d8b83bd": "185cfbae734dd52afe753d663415e791",
".git/objects/27/315eed8e917f0f1841ec8c266c83e35b24cbf1": "367cc9d2913000b2292272fa3c446e5a",
".git/objects/28/f1e9389d22d0d6fa2cc919676e1345dcdeb3e5": "1d1518f01486ae7ac470b47fb48e489d",
".git/objects/29/f22f56f0c9903bf90b2a78ef505b36d89a9725": "e85914d97d264694217ae7558d414e81",
".git/objects/2a/b022196b0fad3910d38ae050ab6814be931799": "effb58727f53792624b2dede6a94285d",
".git/objects/2c/03e9bf5bc2e39d7442f18ff89d60bde9508abf": "ac8c4993e618273d9e00bf0d3093da67",
".git/objects/2c/0b4e94f68fe3537c9926f01fd96a497122a711": "582ae56c7671882ea32887b7c635d5c5",
".git/objects/2f/5feb732ab012f02f44fe3eb320e13321838f3d": "2d726040b06198741dc02a88a5d8cfba",
".git/objects/31/c6401e131a8235f8191e0c009558913c3bfb87": "1ef4a50ab6a356b4705f9a6cfa8e68b3",
".git/objects/33/0d370cf9c48fb55ab053efb7b55757113fb673": "cd5ab83a67b989d178def36eb266ec08",
".git/objects/34/2d1fec63fd7a5f7bec7bb36d2923e5ebfc451a": "3f4792ba9e3ee227fedbaee7bc04e8d0",
".git/objects/35/4fc51132e0eebd0ab72d0718a09d337bb6da91": "7b988cb11f1b6764912bc04e06f91942",
".git/objects/3c/30bf45fadd6c4351528cb7035c9b9307669135": "4d26fda86b34b48f5ae6d54077014c1e",
".git/objects/3c/ec8737d3756d876244fca09360638237922cee": "991a3c5e661d09097322619e8b379afe",
".git/objects/3e/09b6a1e9cf095f07aebfe4dc47273cb57d4d06": "616de16a59b94a1efaca7541b19974f0",
".git/objects/40/17c29c9fd025adee6fcfe7604f7e8607482f45": "b2c81d3d5e6f51c24b40e676be116232",
".git/objects/43/3203f96bc37257e6acedbc4877b6b95d56a66e": "d0f4ca7b3689cba9188b06327505772f",
".git/objects/46/203996d3943540d81e516dc03e54ed112aec36": "92f0c5d2d370b0d8748fc85b4c9fb64c",
".git/objects/48/6471dcf9aae821bf965dc1754d6a9f817b2397": "e6a8e97a9c7aea7da39f76ca4fa4d758",
".git/objects/49/f00c7ffa27e540c446230b25c14c58493c3dac": "7246158b8b71c89d5dc9c52cde91324b",
".git/objects/4a/bf44cc0a6588c983488acb49f0a94c0b374c3e": "d295478b618a8af1e2f647704d64bde4",
".git/objects/4d/4f1264a2a156bbdfbae70ce4ee3a28cdeb73de": "df373f982af7699cd7070adde498a05d",
".git/objects/4d/bf9da7bcce5387354fe394985b98ebae39df43": "534c022f4a0845274cbd61ff6c9c9c33",
".git/objects/4f/fbe6ec4693664cb4ff395edf3d949bd4607391": "2beb9ca6c799e0ff64e0ad79f9e55e69",
".git/objects/51/d490ed8420954992ade43f0bc68fc90d6c12cd": "f729b484dc3839de715c184a6dbbac5c",
".git/objects/52/de6669ed3ca1dd4fd285f5ef87de3f635d33c5": "4aa1fb325e18ebf663d6bf5767d24833",
".git/objects/56/7afd00bcf424cefd6587fa416ae8a665527976": "945873b4cb592d05db37eb5377b5b89d",
".git/objects/56/df9c43ac16d3ed139165823b0f975e9eb2e40d": "bf534bd1af8847f1bf56609c5dcc0b78",
".git/objects/59/a9ec07297f02d3f87803bc2bbd90a438b6c7bf": "4c1c7ff32da95e71e959c5ef19eca102",
".git/objects/5c/f3c2b616dcc9d1c9d0c13abd76954b8df51574": "1ce9ef949174fc7e080227f41eba0f47",
".git/objects/5d/57fecec3991e652593b3683049491c85701502": "64feea31f7c640aba25983042f3bbc93",
".git/objects/5e/049f3ce0047d2d81943c16d5d7ec65350a2e98": "dd6f547061832ddfb61b7bc056a2f4f4",
".git/objects/5e/6ea0ca520583b1d00973f8b5cc70afd0ad596c": "1023588950c7d031ea270dd312fc1af5",
".git/objects/5f/a8c91008288ce118509d21108196e55ffb0056": "25bfb4114c60377cdbe500b2f24a3f90",
".git/objects/61/90bf319daa810e49b5a800ddf19648c3915776": "0dbf45100d80f42161085676e85b35d8",
".git/objects/69/e2a67b24394b84853b8c264fc37a37bea8289f": "5d6361f956806dd3804b16a6787d40fd",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/ff2662ade4805bac91da413a0b38925663feac": "e0691d4038105446ab76dee530e9a9a2",
".git/objects/75/44d47f8c8bbd55d44fdf4577168a99f7013ea2": "33b6b7ed28eed550f56e0f7546368936",
".git/objects/79/cd883d769d33c5125932119669f19a6f49999f": "5ad073568d066515b9203c9be5ca1eca",
".git/objects/7a/6c1911dddaea52e2dbffc15e45e428ec9a9915": "f1dee6885dc6f71f357a8e825bda0286",
".git/objects/7f/1d2c184eec02bf21dcfdcaa645b22440dcebee": "7b053ff364285125d82178e1e86d8b67",
".git/objects/83/41944b213d68e4cd7331a740dcc4f15303b892": "c5ae2774bf0bf7fd3c06aea4788e2e21",
".git/objects/84/9bea7724ffa03ffdaf81fb7507176918509b0e": "42cef85901fc706bdf8c9ecd1aff33db",
".git/objects/85/ac5ef1992312dd39f3b09fc981dc5d42b03299": "033beab70f81ae3945ace3e3fffe9e12",
".git/objects/87/9acab3ffe2b2cd62a8906bfdf2d6e76f7aafe4": "00342f27e60dd7d3cf6c4b00099bfd19",
".git/objects/87/9c13e2883ed9e2c5b38a2aa77e870f75f88aee": "36493cedd89f5cc0c4dfba1e9d5b1f11",
".git/objects/87/dc5d8ceabbd3227eab5f24ac01975dd2ed174d": "86deb45fd2f6d6375c93ed5a4ba4a43a",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8d/443d5d56ac36091e9689cd5d1b1948d9124545": "eb1c5a32937a98bb8b8612d5fad02130",
".git/objects/95/2fa043dc4c14aa9d3d69073ab3f0f9b873c326": "a7e5afb45af29cbdb91cc1d4c4c89f13",
".git/objects/95/96051633124d7d0bc7ddbe0cb144133bf634d7": "497d1b27ba6829a47ccd89fd74a1888a",
".git/objects/98/0d49437042d93ffa850a60d02cef584a35a85c": "8e18e4c1b6c83800103ff097cc222444",
".git/objects/9a/e1ebcfa4ff0e50d8f795560571d99f12e08acd": "2a3695724d446ecdb9e9a1eaa94bbc6b",
".git/objects/9a/e75b5b34259a3d6d82728c80742c5659a8d513": "5ed3fa444db13f980c20f0b5c6e6832f",
".git/objects/9b/3ef5f169177a64f91eafe11e52b58c60db3df2": "91d370e4f73d42e0a622f3e44af9e7b1",
".git/objects/9c/72f0967221c414af9a5610dfbbe766c8004e59": "83c07b28f8addcd82a9a5b109ff7c4cc",
".git/objects/9d/f3fb2fc20f3b2c65a03ce01ff551515797ebee": "eb19f3063ce70d9c12c4be97d8af6821",
".git/objects/9e/3b4630b3b8461ff43c272714e00bb47942263e": "accf36d08c0545fa02199021e5902d52",
".git/objects/a2/1085d6878e867c2e744159d718a9d4963f8372": "239dd4a96d6a1f77bfd4e6fd36c59095",
".git/objects/a8/dd0ca5b2f9ab1e75c121a69dca716ac658bca6": "69f141f9d14db64d727cd2cd6abea37c",
".git/objects/ad/3ce18b74a1c506a77ddcbb57757050aa305892": "e02781b9e1e26a1574f2478aeba38a71",
".git/objects/b6/1556992a036f69c36930028b7ccc1d2c1cd417": "00a18977bf4f2abe08b3a5b167a81614",
".git/objects/b6/b8806f5f9d33389d53c2868e6ea1aca7445229": "b14016efdbcda10804235f3a45562bbf",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/6c41d11d194e031b14c906f3f0c84df3661a5e": "9fb85853f61fce2443d1b877dac60297",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/4d47f3af31505f3cfcba533da52b881b6a1b33": "ab777130815383dc41d27318b6ffbe0e",
".git/objects/b9/c2d610e4c0bda0684c4e0a150c465b8706db3c": "0961107f2070ca4536dc2999a9ae0964",
".git/objects/bd/924e1ef795ed0e89a6492d22a56c1454f77654": "179a081377611c6f5bffc1be5b26a3e5",
".git/objects/be/06e7fdca57d8fc360647d7b7a6a0c7b2da7e26": "bae1db93c8ff34b5d96b8a5eaf24771a",
".git/objects/bf/0cc8d12dc7225825fbf8e64a9d59d96c5fa5cc": "e99b87ce7262ccfb80e5df6f48c49243",
".git/objects/bf/f14e34cdba0624f05424dc06d94c8153fc2a75": "64f2f845f5c706d2f1ea63528edcd897",
".git/objects/c4/016f7d68c0d70816a0c784867168ffa8f419e1": "fdf8b8a8484741e7a3a558ed9d22f21d",
".git/objects/c6/2cb5ed0526bf70bc1435b877b221f090b36d2a": "8f7fa3739b36aed643e61ee166213784",
".git/objects/c9/6744579e94202b6373d8b29a5f6394a0019913": "2dab539413fbbef037f369e316350d6c",
".git/objects/c9/fffc92840206ff157a9a1211497dbbe0df1920": "7b49077d4e23bea6fb5bfc1f53783162",
".git/objects/ca/3bba02c77c467ef18cffe2d4c857e003ad6d5d": "316e3d817e75cf7b1fd9b0226c088a43",
".git/objects/cc/c34a4aa496c258f1fa5573ae3dd02487e29a00": "e73ba9b5584b000e9cc15f7389123425",
".git/objects/cf/dcbc189008fd660e6ee232fff8007ab1339896": "2c26a095164d88b04a1e2a8461f302b6",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/d37d3991202f5aa600f384154ce9f02ee28535": "7573c99281b9c3ed4fd88d7c93e86f91",
".git/objects/d9/c19b1eee07c8bd75c3f45a45361cf39584ad91": "8456505088a348d22604f43c3144a24c",
".git/objects/da/bf7c242e938c49fccd0cba88dc2fdccb2f65ee": "bbf7d12e4139b11a89628b8be2fcfda5",
".git/objects/db/d23409d3b0df0ef50c2cccbb32dadcc8a9304d": "7bba7f28c9134f225d3d1672d42863d1",
".git/objects/dc/830a0c05a563d38e4c3d5c06b7230cf4b4b6a5": "14b76a71091cdf95b003abd9b968d83b",
".git/objects/dc/9dc711b952c007411aa07667bf63a347c4f09f": "1b2d3151753e4e56b396a234dc67be30",
".git/objects/dd/7368975def0096cf1710538092ae48558f0b9e": "3a9bd647c3dfeffb3afa255454104134",
".git/objects/e0/082252bb4e456944a7518c30c782a550fbe84b": "d5c13df8f4ff5747a59c4ad7ef81e745",
".git/objects/e0/4de294698c835e97e1bed23d5ed0b7510e947d": "efd84b15f9b8346c1768010a879bb3f6",
".git/objects/e3/e9ee754c75ae07cc3d19f9b8c1e656cc4946a1": "14066365125dcce5aec8eb1454f0d127",
".git/objects/e8/a59023ee0c985a2671a3d600933f009a1edcc7": "a3a7a8db3dbdfdfc74de3cab1165d2a0",
".git/objects/e9/0e87ed69a7ebb8d965ec248fb86286423f103f": "4abcf8c77330fc7fd658318fc2374d78",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/ea/ba0c5e088000b49012647832aaabe5da3afba3": "ad22838b8bc6a7175af573d164ec20be",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ed/4c093c849bbf5fe7bb35ec42c4e27c45623c99": "0e056202df1424179faabe30450ac290",
".git/objects/ed/53521bbbbfd2cac75de0abf2c67def92fcc8fc": "5f9eb23694fc29a563342acdade54115",
".git/objects/ed/b55d4deb8363b6afa65df71d1f9fd8c7787f22": "886ebb77561ff26a755e09883903891d",
".git/objects/ee/771b77efc4ae698a95e5e859643b308ab6fe73": "468b6c856a9ea8d19f5fc76fbdcb1673",
".git/objects/f0/d898abe2fcb7f48f946db5a3d01e4a0c4f5c5f": "629b904766d773fb1ebea6eb5fea90d2",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/4b13b4609e6e875adbd2442888b317b6413351": "1aeb8e565d880b2e5b5a28b4a0ae82d5",
".git/objects/f2/8d867adbb731df1edca566bd456817e69720d6": "e43d06e2bfd3f0ea347b7b8c5bb6174e",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/f6/ea0f9e4794562b3ff2bdbac6d7bf439c119189": "85182ef69d44ea216f8b7e2941517cc1",
".git/objects/f9/a0f17f86f76867e46a50a6653813b29270d54e": "325580547acd8b1ca19080eaa15a22dc",
".git/objects/fe/3b987e61ed346808d9aa023ce3073530ad7426": "dc7db10bf25046b27091222383ede515",
".git/refs/heads/main": "181fe81e9b9a4ab7797c48cc18407ff4",
".git/refs/remotes/origin/main": "181fe81e9b9a4ab7797c48cc18407ff4",
"assets/AssetManifest.bin": "ecc623296d80b2a84d252acd7268ac4c",
"assets/AssetManifest.bin.json": "c4ca41702cfd45bfb4061d6bc1798721",
"assets/AssetManifest.json": "3cd552e82dad46f750df57ffadf9221b",
"assets/assets/apps/bata.png": "5fb3127f456cd437df7bdc5fc2647464",
"assets/assets/apps/linguamanta-logo.jpg": "6480a003aa09c5a308ed8cd64ec108a3",
"assets/assets/apps/linguamanta.png": "4a70a3d334dd7b964838a1ba3f993fa7",
"assets/assets/apps/not-much-logo.png": "87b5532cfc07344c0fa1e7d228813f46",
"assets/assets/apps/not-much.png": "e47eaf4bc6495466555a70be1fa29ae3",
"assets/assets/apps/tax-corp-logo.png": "55675591e1da46380fe8e343e68a247a",
"assets/assets/apps/tax-corp.png": "b959d8326984fa3aa347c4b02374910a",
"assets/assets/apps/together-logo.png": "8a821331c5def1fc199202af618f9d69",
"assets/assets/apps/together.png": "f20cb15529160b9e9dec2002f84a8642",
"assets/assets/apps/together1.png": "e10ddd4f6048992e727d473e62726a69",
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
"assets/assets/work/autop.jpg": "c44401d84dd50c3982177d082ec3c204",
"assets/assets/work/autop.png": "87d22af7486189697769c754e675e38a",
"assets/assets/work/cusit.png": "2f7bd1c6a006c97d9cae7bd9e3301ad0",
"assets/assets/work/encoder.png": "4ba8bfb608ddaa393aaa5109d2189960",
"assets/assets/work/extendztech.jpg": "4ad7ecb2b3c79f596e27ae01ac7031c3",
"assets/assets/work/freelancer.png": "748a26eac4c1b4fb2fcef2f1a0977521",
"assets/assets/work/growintern.png": "5ebd21402aa1956828f7aecb93cca813",
"assets/assets/work/internee.jpg": "b52d50b2163cc6b30f88a25e149528a6",
"assets/assets/work/tt.jpg": "8b663cd745bad1e65632f194f06d2b49",
"assets/assets/work/ttt.jpg": "d245af018c1b695890f70a407cd602f6",
"assets/data.json": "d8ac3d77560f5d01644da9feefa7376a",
"assets/FontManifest.json": "8344d41786f0f7089b897e98efe41924",
"assets/fonts/agustina/agustina.otf": "7b9833076716a8d14eec0cf885a3153c",
"assets/fonts/MaterialIcons-Regular.otf": "cfd4ed0c3ea42fd5a1db3b876dcc0304",
"assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/NOTICES": "b64e1c459f5bbc61df51cda6df6c5127",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Brands-Regular-400.otf": "719cd3356de84b6280d8dc87014f5c97",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Regular-400.otf": "df86a1976d76bd04cf3fcaf5add2dd0f",
"assets/packages/font_awesome_flutter/lib/fonts/Font%2520Awesome%25207%2520Free-Solid-900.otf": "a63565fc319a1502df6c6a2c3de01c0d",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "8061f5b30064ce3e2f37afb04c0fbe24",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "eeb7c5a2a27a8bd3a460254c6c78f6df",
"google2ba9c890cc843c11.html": "68c364a8719dd4d112903afae9139e50",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "fac8fdbc3356dfdf1ee2dc314b38e0ea",
"/": "fac8fdbc3356dfdf1ee2dc314b38e0ea",
"main.dart.js": "de9906ca46b0e92cdc0fb47a8088bb3e",
"manifest.json": "e18b4d6887eb01f5984e3ec0b10cb7fa",
"robots.txt": "462c7b1a47a5e41e39af0df712859f17",
"sitemap.xml": "f0ae6506885fc7cb83a5c188c0c081c5",
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
