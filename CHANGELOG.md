## [1.29.1](https://github.com/wmfs/pg-model/compare/v1.29.0...v1.29.1) (2022-02-21)


### 🐛 Bug Fixes

* issue with updating with multiple keys ([4ef2cfe](https://github.com/wmfs/pg-model/commit/4ef2cfe5c4f7978d0358498cb25997af432d3c17))


### 🛠 Builds

* **deps-dev:** update dependency [@wmfs](https://github.com/wmfs)/hl-pg-client to v1.29.0 ([413e440](https://github.com/wmfs/pg-model/commit/413e44002010d90ce938efd5653d4502cb83a318))
* **deps-dev:** update dependency chai to v4.3.5 ([8c8e4a9](https://github.com/wmfs/pg-model/commit/8c8e4a91060f5ea9f5a25e1994d74ab24c54f06f))
* **deps-dev:** update dependency chai to v4.3.6 ([73d06c6](https://github.com/wmfs/pg-model/commit/73d06c6e16a86ca91b604f94ca04663e02b9c62e))
* **deps-dev:** update dependency mocha to v9.2.1 ([40d5244](https://github.com/wmfs/pg-model/commit/40d5244e366caf6e7d5c001d35d52a8472661b68))


### 💎 Styles

* standard fix ([3bb74a2](https://github.com/wmfs/pg-model/commit/3bb74a2b05065303c7ca2028746d0b4536076851))

# [1.29.0](https://github.com/wmfs/pg-model/compare/v1.28.1...v1.29.0) (2022-01-25)


### 🛠 Builds

* **deps-dev:** update dependency mocha to v9.1.4 ([e47c043](https://github.com/wmfs/pg-model/commit/e47c043f33449f07cc9f4721347442e54669de0a))
* **deps-dev:** update dependency mocha to v9.2.0 ([f8baed9](https://github.com/wmfs/pg-model/commit/f8baed9ca29be08752dd41b0ad9cc103572ca0e9))
* **deps-dev:** update dependency semantic-release to v19 ([4304a19](https://github.com/wmfs/pg-model/commit/4304a19c7d09ee8b473668353adc23141842a04b))
* **deps:** update dependency async to v3.2.3 ([3c1a7f3](https://github.com/wmfs/pg-model/commit/3c1a7f3ac7b7b5271355de5ff2a2f816ce5424af))


### ⚙️ Continuous Integrations

* **circle:** CircleCI update next gen PostgreSQL image [sc-11442] ([ade3b0d](https://github.com/wmfs/pg-model/commit/ade3b0d27f68c7708a806f593687f90bd0a6c0d0))

## [1.28.1](https://github.com/wmfs/pg-model/compare/v1.28.0...v1.28.1) (2021-11-25)


### 🐛 Bug Fixes

* check fields is not empty array ([4d1387e](https://github.com/wmfs/pg-model/commit/4d1387e0fdb2bb177fd20233490cf83ddefbaac3))

# [1.28.0](https://github.com/wmfs/pg-model/compare/v1.27.0...v1.28.0) (2021-11-25)


### ✨ Features

* ability to search model ([6b865ee](https://github.com/wmfs/pg-model/commit/6b865ee5155c1ef1f55b5d86b6e73390ead4133c))


### 🛠 Builds

* **deps-dev:** update dependency mocha to v9.1.3 ([d50db58](https://github.com/wmfs/pg-model/commit/d50db58341ebb2e2eefea7388f256676b1633652))
* **deps-dev:** update dependency standard to v16.0.4 ([aa9609d](https://github.com/wmfs/pg-model/commit/aa9609dc6c71d7c275968c255e2e7cbec1fd95dd))
* **deps-dev:** update semantic-release monorepo ([b0d613c](https://github.com/wmfs/pg-model/commit/b0d613c318564b1a799991de5ac438cb6ce46337))
* **deps-dev:** update semantic-release monorepo ([1496c46](https://github.com/wmfs/pg-model/commit/1496c465f8851643b81af343ad12021e9c9cdc96))

# [1.27.0](https://github.com/wmfs/pg-model/compare/v1.26.3...v1.27.0) (2021-11-24)


### ✨ Features

* model and view functions to find counts ([8f61864](https://github.com/wmfs/pg-model/commit/8f6186440ee6797b1ce2f32b388e06f0bde6902e))

## [1.26.3](https://github.com/wmfs/pg-model/compare/v1.26.2...v1.26.3) (2021-11-24)


### 🐛 Bug Fixes

* check where is not empty object ([110901f](https://github.com/wmfs/pg-model/commit/110901f5e26fbc70f19ef43df95c24527432cd45))


### ⚙️ Continuous Integrations

* **travis:** remove old travis config ([5f2980a](https://github.com/wmfs/pg-model/commit/5f2980a7a84571e9e025a4f17a00cde901ef5343))

## [1.26.2](https://github.com/wmfs/pg-model/compare/v1.26.1...v1.26.2) (2021-08-04)


### 🐛 Bug Fixes

* default options and fix typo ([f1c6644](https://github.com/wmfs/pg-model/commit/f1c66449a95507b7c5fdf1e0992d939287fbd879))


### 🚨 Tests

* add tests to ensure dates can be queried ([47b0a01](https://github.com/wmfs/pg-model/commit/47b0a01e3d4a0d9df3167dd137775e46c554bcb6))

## [1.26.1](https://github.com/wmfs/pg-model/compare/v1.26.0...v1.26.1) (2021-08-02)


### 🐛 Bug Fixes

* apply the modified col update on upsert ([d0b4464](https://github.com/wmfs/pg-model/commit/d0b4464089aa28fe527c3c1e41a32976c7e84594))
* check modified column on upsert tests ([89a2d07](https://github.com/wmfs/pg-model/commit/89a2d07e4cd68d0799cb80747965a2ab1bf04e92))
* Issue [#292](https://github.com/wmfs/pg-model/issues/292) modified column not updating ([e7e78c5](https://github.com/wmfs/pg-model/commit/e7e78c5a199254f1b91fe912787b1da688a156ef))


### 🛠 Builds

* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.27.0 to 1.28.0 ([da67f3c](https://github.com/wmfs/pg-model/commit/da67f3c1b0a15cc3cf4fc68dd3d8c9385fd7fef1))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.24.0 to 1.25.0 ([abed61d](https://github.com/wmfs/pg-model/commit/abed61dfb49c3b3710f9b5473940106094ec4543))
* **deps-dev:** bump chai from 4.3.0 to 4.3.1 ([75eb3bf](https://github.com/wmfs/pg-model/commit/75eb3bfccfef038b94ea57232465058ea4768650))
* **deps-dev:** bump chai from 4.3.1 to 4.3.2 ([ee978e6](https://github.com/wmfs/pg-model/commit/ee978e69fe0a64cb30c77024ada2c008b96d2d66))
* **deps-dev:** bump chai from 4.3.2 to 4.3.3 ([084f52b](https://github.com/wmfs/pg-model/commit/084f52b67ab9c73e16906ecfbd8addc3371b4a91))
* **deps-dev:** bump chai from 4.3.3 to 4.3.4 ([d2d4921](https://github.com/wmfs/pg-model/commit/d2d49219698f27a2a7d08a1c950593f9ef232d5a))
* **deps-dev:** bump codecov from 3.8.1 to 3.8.2 ([6661438](https://github.com/wmfs/pg-model/commit/66614386c6ba21feccd7ea891d45dfca8feb2821))
* **deps-dev:** bump codecov from 3.8.2 to 3.8.3 ([24475b2](https://github.com/wmfs/pg-model/commit/24475b2b2715633be1d3c39830494a9e65f94bc2))
* **deps-dev:** bump mocha from 8.3.0 to 8.3.1 ([a3cd81d](https://github.com/wmfs/pg-model/commit/a3cd81d91b2d2578cdb2fe7f20eec12ac19d085e))
* **deps-dev:** bump mocha from 8.3.1 to 8.3.2 ([4de4cb6](https://github.com/wmfs/pg-model/commit/4de4cb6894ad9e5189cd3855648f0ad03f3032f6))
* **deps-dev:** bump mocha from 8.3.2 to 8.4.0 ([8b085ea](https://github.com/wmfs/pg-model/commit/8b085ea97587937ee7f45bfafb7de819a3c5649f))
* **deps-dev:** bump mocha from 8.4.0 to 9.0.0 ([1eedb12](https://github.com/wmfs/pg-model/commit/1eedb1281b3a1ec4123226600879c66d5a1ca66b))
* **deps-dev:** bump mocha from 9.0.0 to 9.0.1 ([45c0f0b](https://github.com/wmfs/pg-model/commit/45c0f0b5965e57f6ef56ae2dd6f0fb69c4abaeee))
* **deps-dev:** bump mocha from 9.0.1 to 9.0.2 ([c8321fe](https://github.com/wmfs/pg-model/commit/c8321feda016dbef9b97dc40a129509ca8fe03ef))
* **deps-dev:** bump mocha from 9.0.2 to 9.0.3 ([b8df0fa](https://github.com/wmfs/pg-model/commit/b8df0fa8526943ec9a78a738b4a3eccabbfed2fd))
* **deps-dev:** bump semantic-release from 17.3.9 to 17.4.0 ([2b4e988](https://github.com/wmfs/pg-model/commit/2b4e9881d8b98f765c5f0929b83ec885b0bb086c))
* **deps-dev:** bump semantic-release from 17.4.0 to 17.4.1 ([d421f57](https://github.com/wmfs/pg-model/commit/d421f578d2c091d98f3d4c01e80ea4a857ed307c))
* **deps-dev:** bump semantic-release from 17.4.1 to 17.4.2 ([8d8d7de](https://github.com/wmfs/pg-model/commit/8d8d7de06e575e524f2d85112c8acab405e4d13f))
* **deps-dev:** bump semantic-release from 17.4.2 to 17.4.3 ([c9ff021](https://github.com/wmfs/pg-model/commit/c9ff0213ff9062b33fb01dba2141a1658e0286b6))
* **deps-dev:** bump semantic-release from 17.4.3 to 17.4.4 ([909c2cd](https://github.com/wmfs/pg-model/commit/909c2cd0eb91c836c2feb93a693dad0cabb66bca))


### 🚨 Tests

* Issue [#292](https://github.com/wmfs/pg-model/issues/292) modified column not updating - update expects ([165bfa3](https://github.com/wmfs/pg-model/commit/165bfa316c8cc0f6db0dd6fda716cb2817266842))
* Issue [#292](https://github.com/wmfs/pg-model/issues/292) modified column not updating - update expects ([82a8352](https://github.com/wmfs/pg-model/commit/82a83524d660040cf02bce1ae743fecc1822bdaf))


### ⚙️ Continuous Integrations

* **circle:** update postgres config to 13.2 ([faecb3f](https://github.com/wmfs/pg-model/commit/faecb3fb81dbfd9ccd9bf0d01979615dfcac41fe))


### ♻️ Chores

* add renovate config [ch6600] ([91b261e](https://github.com/wmfs/pg-model/commit/91b261e37e49ab2830ce557cd293af42e08cd8e0))

# [1.26.0](https://github.com/wmfs/pg-model/compare/v1.25.0...v1.26.0) (2021-02-24)


### 🛠 Builds

* **deps:** bump lodash from 4.17.20 to 4.17.21 ([213a029](https://github.com/wmfs/pg-model/commit/213a029fa834800906a8067809d0f875fdabc52b))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.25.0 to 1.26.0 ([2b3dc31](https://github.com/wmfs/pg-model/commit/2b3dc319fd6408c753eb5083f0d7b895fa24e748))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.26.0 to 1.27.0 ([decb984](https://github.com/wmfs/pg-model/commit/decb98470305950d0b993be6b80a4ca8239c8fa5))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.23.0 to 1.24.0 ([1404f29](https://github.com/wmfs/pg-model/commit/1404f2905f37ebef117c8d9d9159422e72342d8e))
* **deps-dev:** bump chai from 4.2.0 to 4.3.0 ([4c3054b](https://github.com/wmfs/pg-model/commit/4c3054b009d39a443b718e503c3df6dd31c55885))
* **deps-dev:** bump codecov from 3.8.0 to 3.8.1 ([e4fb66f](https://github.com/wmfs/pg-model/commit/e4fb66ff5dce9de4ef70a2a4accf5d39925e5dba))
* **deps-dev:** bump mocha from 8.2.0 to 8.2.1 ([2d1b366](https://github.com/wmfs/pg-model/commit/2d1b366bc29b92f5deca0916c2316e049cddae79))
* **deps-dev:** bump mocha from 8.2.1 to 8.3.0 ([ebc53b0](https://github.com/wmfs/pg-model/commit/ebc53b099c077f88dac4b1ef31773548655ee1b6))
* **deps-dev:** bump semantic-release from 17.2.1 to 17.2.2 ([c4ef8d0](https://github.com/wmfs/pg-model/commit/c4ef8d0137dd154eb3ee036fe9425eee16a9eb35))
* **deps-dev:** bump semantic-release from 17.2.2 to 17.2.3 ([41b8856](https://github.com/wmfs/pg-model/commit/41b8856a8c2d7c0af64db481a833e9c8e69b1aed))
* **deps-dev:** bump semantic-release from 17.2.3 to 17.2.4 ([7fef81b](https://github.com/wmfs/pg-model/commit/7fef81be399c480c40405d4771bb51f546bc8a6a))
* **deps-dev:** bump semantic-release from 17.2.4 to 17.3.0 ([f00ae45](https://github.com/wmfs/pg-model/commit/f00ae45c632fb79cd9619adfab833b2fd0ac8e6a))
* **deps-dev:** bump semantic-release from 17.3.0 to 17.3.1 ([f6ad19e](https://github.com/wmfs/pg-model/commit/f6ad19e7c373ba383ffa1f8df5d671b2e9d6da5d))
* **deps-dev:** bump semantic-release from 17.3.1 to 17.3.2 ([950dab8](https://github.com/wmfs/pg-model/commit/950dab85f836c6de2122308702a2d1f705dd7cfc))
* **deps-dev:** bump semantic-release from 17.3.2 to 17.3.3 ([ae02b29](https://github.com/wmfs/pg-model/commit/ae02b29e210a68acbe68123f8810f149505c559c))
* **deps-dev:** bump semantic-release from 17.3.3 to 17.3.4 ([e42ac26](https://github.com/wmfs/pg-model/commit/e42ac26ccaacab4c7ecdd4c7bc23bd594f408d79))
* **deps-dev:** bump semantic-release from 17.3.4 to 17.3.5 ([b2c53f8](https://github.com/wmfs/pg-model/commit/b2c53f8be54b17ac0607ad8edbcef6da4e163a39))
* **deps-dev:** bump semantic-release from 17.3.5 to 17.3.6 ([9cca082](https://github.com/wmfs/pg-model/commit/9cca082ad042800c113eb98c2e4b818f3a1b4ddb))
* **deps-dev:** bump semantic-release from 17.3.6 to 17.3.7 ([07002b6](https://github.com/wmfs/pg-model/commit/07002b63c0b9747626a87460ecd5aff691d27d04))
* **deps-dev:** bump semantic-release from 17.3.7 to 17.3.8 ([7a34768](https://github.com/wmfs/pg-model/commit/7a347687b68c78d581396c106e1954b9c8ef8911))
* **deps-dev:** bump semantic-release from 17.3.8 to 17.3.9 ([0fc578f](https://github.com/wmfs/pg-model/commit/0fc578f0312bc8d0fb12cf94fdabbc321b308c99))
* **deps-dev:** bump standard from 14.3.4 to 15.0.0 ([d1f886c](https://github.com/wmfs/pg-model/commit/d1f886c6580dff5586ae5e8c708e3afac7f737ca))
* **deps-dev:** bump standard from 15.0.0 to 15.0.1 ([e696781](https://github.com/wmfs/pg-model/commit/e696781e0a8886f78b06f403ef2b8418db827aa7))
* **deps-dev:** bump standard from 15.0.1 to 16.0.0 ([01f3e12](https://github.com/wmfs/pg-model/commit/01f3e129072ddca00ab9390d561a73cbb0a3121f))
* **deps-dev:** bump standard from 16.0.0 to 16.0.1 ([e06ccc7](https://github.com/wmfs/pg-model/commit/e06ccc72665fe60d4ef973c30f498e1c4d3724e9))
* **deps-dev:** bump standard from 16.0.1 to 16.0.2 ([22ee436](https://github.com/wmfs/pg-model/commit/22ee436eb88e66397355ce5f797bb9487db896bb))
* **deps-dev:** bump standard from 16.0.2 to 16.0.3 ([a754c25](https://github.com/wmfs/pg-model/commit/a754c25db6a51cf2c9e0dc025d723e75c925991d))


### ⚙️ Continuous Integrations

* **circle:** authenticate Docker image pull [ch2767] ([4ad76cc](https://github.com/wmfs/pg-model/commit/4ad76cca9859f738cf92fec9377e46c4fcaf4498))
* **circle:** cache dependencies [ch2770] ([5e54f83](https://github.com/wmfs/pg-model/commit/5e54f8313b6907b50fb528df08a530d9c6c9f51f))
* **circle:** separate linting job [ch1009] ([4e3a7fc](https://github.com/wmfs/pg-model/commit/4e3a7fc2d37e2fce88d4b5489a313e6baf5c40ac))
* **circle:** update build environment variable context name [ch2771] ([0c7b9cd](https://github.com/wmfs/pg-model/commit/0c7b9cd32a7b460d6f0b9294bb5872e4b2531cc5))
* **circle:** use tmpfs postgres image [ch2769] ([5bb9fd2](https://github.com/wmfs/pg-model/commit/5bb9fd2a78b4c27ca2ba7b74fe9d0e4b2209b505))

# [1.25.0](https://github.com/wmfs/pg-model/compare/v1.24.0...v1.25.0) (2020-10-21)


### ✨ Features

* option for notEquals ([2836684](https://github.com/wmfs/pg-model/commit/28366843bb091f116e4eb98e894412019085418a))


### 🛠 Builds

* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.22.0 to 1.23.0 ([f75fe67](https://github.com/wmfs/pg-model/commit/f75fe679c8f0fe78927ec7e3063bdddbd8994480))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.23.0 to 1.25.0 ([2b05c64](https://github.com/wmfs/pg-model/commit/2b05c64413eeafc8cf732f7760c7f0673e31421d))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.21.0 to 1.22.0 ([fa74f88](https://github.com/wmfs/pg-model/commit/fa74f889baca2da3f8e778e068a82120a83333c0))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.22.0 to 1.23.0 ([e6a526a](https://github.com/wmfs/pg-model/commit/e6a526ad16ec2d0f8ddc7d0a819582cae39d7bd0))
* **deps-dev:** bump codecov from 3.7.2 to 3.8.0 ([79435fc](https://github.com/wmfs/pg-model/commit/79435fcf3b8c3bee27b23bc5c1b8a81d610628e6))
* **deps-dev:** bump cz-conventional-changelog from 3.2.0 to 3.2.1 ([91362cd](https://github.com/wmfs/pg-model/commit/91362cda25bf0a93ff820068045544dd9fff215e))
* **deps-dev:** bump cz-conventional-changelog from 3.2.1 to 3.3.0 ([e5c05c4](https://github.com/wmfs/pg-model/commit/e5c05c4d3c0b97af20f2bfd530371408061629e2))
* **deps-dev:** bump mocha from 8.1.1 to 8.1.2 ([21aebdc](https://github.com/wmfs/pg-model/commit/21aebdcb09f1398fcade403de776ca4df9df75d9))
* **deps-dev:** bump mocha from 8.1.2 to 8.1.3 ([e88d5d8](https://github.com/wmfs/pg-model/commit/e88d5d8365705198b2cbfdc87125661945dca4b3))
* **deps-dev:** bump mocha from 8.1.3 to 8.2.0 ([f0a1143](https://github.com/wmfs/pg-model/commit/f0a11433929558af6704fe83470e51651426bd61))
* **deps-dev:** bump semantic-release from 17.1.1 to 17.1.2 ([182ecf9](https://github.com/wmfs/pg-model/commit/182ecf90b3744e908f23ced517363398f49a122e))
* **deps-dev:** bump semantic-release from 17.1.2 to 17.2.0 ([f4fe012](https://github.com/wmfs/pg-model/commit/f4fe012fa7e4e67cff78ec0551b8b54c687c285c))
* **deps-dev:** bump semantic-release from 17.2.0 to 17.2.1 ([bac2964](https://github.com/wmfs/pg-model/commit/bac29641e165d6378515c1184c99784d0521db17))

# [1.24.0](https://github.com/wmfs/pg-model/compare/v1.23.0...v1.24.0) (2020-08-17)


### 🛠 Builds

* **deps:** bump lodash from 4.17.19 to 4.17.20 ([a7a163a](https://github.com/wmfs/pg-model/commit/a7a163a6e1071a08b32f0f7fef69aec91f347a03))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.21.0 to 1.22.0 ([c46ac24](https://github.com/wmfs/pg-model/commit/c46ac24d93c55e4eb1e1dbc23b61e367f50eeedf))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.19.1 to 1.20.0 ([4a6ffb0](https://github.com/wmfs/pg-model/commit/4a6ffb0524f6b75538e5ff53fb0561fd76fd311e))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.20.0 to 1.21.0 ([383cf54](https://github.com/wmfs/pg-model/commit/383cf54401e182c5d20c70cd1f5393c4303c9816))
* **deps-dev:** bump codecov from 3.7.0 to 3.7.1 ([3f97549](https://github.com/wmfs/pg-model/commit/3f97549524860177f3cc3f9961eb085f9a6640ad))
* **deps-dev:** bump codecov from 3.7.1 to 3.7.2 ([d25e4fe](https://github.com/wmfs/pg-model/commit/d25e4fe514958e8d088268b7cc0d5f99777cdbae))
* **deps-dev:** bump mocha from 8.0.1 to 8.1.0 ([410b48c](https://github.com/wmfs/pg-model/commit/410b48c649e624d9dbb49fc201711f652e9358c9))
* **deps-dev:** bump mocha from 8.1.0 to 8.1.1 ([21f3e69](https://github.com/wmfs/pg-model/commit/21f3e69d96bd7d3d3b2add5b293a63a45b4654ed))


### ⚙️ Continuous Integrations

* **circle:** separate lint job [ch1009] ([cb2ff5e](https://github.com/wmfs/pg-model/commit/cb2ff5e173b74fcce6de590b3ade78dc67cddb70))

# [1.23.0](https://github.com/wmfs/pg-model/compare/v1.22.1...v1.23.0) (2020-07-13)


### 🛠 Builds

* **deps:** bump lodash from 4.17.15 to 4.17.19 ([859d8c8](https://github.com/wmfs/pg-model/commit/859d8c838f1764526a231bd91e03ea6d4bb4e900))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.20.0 to 1.21.0 ([2abd46d](https://github.com/wmfs/pg-model/commit/2abd46dac2b1f915e383f86f0226b04c406f753f))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.19.0 to 1.19.1 ([007c30c](https://github.com/wmfs/pg-model/commit/007c30c054f8291194344c2df5f7fd35a7fe585b))
* **deps-dev:** bump codecov from 3.6.5 to 3.7.0 ([15d8136](https://github.com/wmfs/pg-model/commit/15d8136f4b0e01728b34f0304af165d0f0ba87c4))
* **deps-dev:** bump cz-conventional-changelog from 3.1.0 to 3.2.0 ([6e687a4](https://github.com/wmfs/pg-model/commit/6e687a4c19a2e78d60c25c82ac1f2c31fd8099d6))
* **deps-dev:** bump mocha from 7.1.2 to 7.2.0 ([c814d87](https://github.com/wmfs/pg-model/commit/c814d875a2b3749164bcde1d5e7063463aebeaae))
* **deps-dev:** bump mocha from 7.2.0 to 8.0.1 ([c98eeff](https://github.com/wmfs/pg-model/commit/c98eeff2d8f2e61e3b29b4f0d228020a5d42a8df))
* **deps-dev:** bump nyc from 15.0.1 to 15.1.0 ([1a81a48](https://github.com/wmfs/pg-model/commit/1a81a48983ccf46886aec8c5055c6aed535445ba))
* **deps-dev:** bump semantic-release from 17.0.7 to 17.0.8 ([2cfe7f1](https://github.com/wmfs/pg-model/commit/2cfe7f1ebedc4f3d0048f3e5e15b36b4f4bef070))
* **deps-dev:** bump semantic-release from 17.0.8 to 17.1.0 ([ca25867](https://github.com/wmfs/pg-model/commit/ca258673275556a7629741a7a8ffc41776636447))
* **deps-dev:** bump semantic-release from 17.1.0 to 17.1.1 ([9e5f4e7](https://github.com/wmfs/pg-model/commit/9e5f4e78fec0a205882ebc25bb7832f2b3bd4c74))
* **deps-dev:** bump standard from 14.3.3 to 14.3.4 ([61eeb95](https://github.com/wmfs/pg-model/commit/61eeb95fe10a4d7dc411115b72010ef493e48fe8))


### ⚙️ Continuous Integrations

* **circle:** use updated circle node image [skip ci] ([9472976](https://github.com/wmfs/pg-model/commit/94729765ec2bf32bb5138c6f0c7277be2432f38a))

## [1.22.1](https://github.com/wmfs/pg-model/compare/v1.22.0...v1.22.1) (2020-04-30)


### 🐛 Bug Fixes

* check rows has elements before attempting to access entries ([00858c1](https://github.com/wmfs/pg-model/commit/00858c12aa1670e0111dfc81d1a44e7cd05560a9))


### 🛠 Builds

* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.18.0 to 1.19.0 ([2f84cfb](https://github.com/wmfs/pg-model/commit/2f84cfb9c5b7d201ae0199670453089b131bf42b))
* **deps-dev:** bump mocha from 7.1.1 to 7.1.2 ([ae69a57](https://github.com/wmfs/pg-model/commit/ae69a5743f9fe87b30e6e0fa54c6a5fe69977442))


### 📦 Code Refactoring

* **Creator:** Prefer builtins to lodash methods ([88e16ec](https://github.com/wmfs/pg-model/commit/88e16ecddd6aa79d38e2ec94ca3104b7aef05977))
* **Destroyer:** Use Array.map in preference to a for loop ([0f7635a](https://github.com/wmfs/pg-model/commit/0f7635a60681672b7d705013c4b240e9abb4b384))
* **Finder:** Added findOne and findAll to Finder, simplify model ([89262e8](https://github.com/wmfs/pg-model/commit/89262e80ac043a889cda6e6d13b84069d05daa50))
* **Finder:** Eliminate use of async package. Move to async/await ([a0be44a](https://github.com/wmfs/pg-model/commit/a0be44a7721de1dfd253af58bc8025f5992c81e5))
* **Finder:** Replaced lodash methods with builtins. ([d12ce1c](https://github.com/wmfs/pg-model/commit/d12ce1cc6338382dcf1eb8c9f20750d26132be63))
* **Model:** Switch implementation from callback first to promise first. ([feb1304](https://github.com/wmfs/pg-model/commit/feb1304dd3f1614c6cd3515b2e51b8775e770ae6))
* **pre-statement-hook:** Prefer builtins to lodash methods ([3b9244f](https://github.com/wmfs/pg-model/commit/3b9244ff338101929bf6e77bc8ee5ae412a3325d))
* **tests:** Remove use of 'async' package ([6a8dc49](https://github.com/wmfs/pg-model/commit/6a8dc49320744d3b84e86e3f460b53fc30b9db8c))
* **Updater:** Prefer builtins to lodash methods. Split out named functions to clarify flow. ([3cf1b8b](https://github.com/wmfs/pg-model/commit/3cf1b8b6d4304234412ed10d83a55095f3d30276))


### 💎 Styles

* **Updater:** Lint fixes ([35cf1bc](https://github.com/wmfs/pg-model/commit/35cf1bc8b124e91914ea8cc5b18a7f4b165eac3f))

# [1.22.0](https://github.com/wmfs/pg-model/compare/v1.21.0...v1.22.0) (2020-04-22)


### 🛠 Builds

* **deps:** Removed unused boom and debug dependencies ([dbc2a49](https://github.com/wmfs/pg-model/commit/dbc2a4976d749ce3c19056f82f7bc27ff94ea1ac))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/changelog from 5.0.0 to 5.0.1 ([b0eeb5f](https://github.com/wmfs/pg-model/commit/b0eeb5fe55663958b6d9a7b6f202a70f09f5fff0))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/git from 7.0.18 to 9.0.0 ([5a4833f](https://github.com/wmfs/pg-model/commit/5a4833fe53269c443007c1e7b73435a278fb438b))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.17.0 to 1.18.0 ([f6ec0c3](https://github.com/wmfs/pg-model/commit/f6ec0c37998e4ef504e2f84c7ecead3115acddc3))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.18.0 to 1.19.0 ([f05f5ba](https://github.com/wmfs/pg-model/commit/f05f5bae90b9ce632beb5d4f5468e5ac36b3b693))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.19.0 to 1.20.0 ([bbc9343](https://github.com/wmfs/pg-model/commit/bbc93431b962d92cd490f65582a6b39860eb0e6d))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.17.0 to 1.18.0 ([5736717](https://github.com/wmfs/pg-model/commit/57367170ebdc67cf63df5308f34b2306fbb39b08))
* **deps-dev:** bump conventional-changelog-metahub from 4.0.0 to 4.0.1 ([dd95f92](https://github.com/wmfs/pg-model/commit/dd95f92ea7732b146094bfc117201331f9e25e7a))
* **deps-dev:** bump mocha from 7.0.1 to 7.1.0 ([158449c](https://github.com/wmfs/pg-model/commit/158449c280a4eb42ac72e38ff65646560d2f0d38))
* **deps-dev:** bump mocha from 7.1.0 to 7.1.1 ([baf87cb](https://github.com/wmfs/pg-model/commit/baf87cbf3bd6fc08bd8564d785d38e1727e6c0a6))
* **deps-dev:** bump nyc from 15.0.0 to 15.0.1 ([e5f10c5](https://github.com/wmfs/pg-model/commit/e5f10c50f5f027949a22f686a27c67588eb42a65))
* **deps-dev:** bump semantic-release from 15.14.0 to 17.0.4 ([958de57](https://github.com/wmfs/pg-model/commit/958de5741de3bbe9085fcc635146ab775f1aa47b))
* **deps-dev:** bump semantic-release from 17.0.4 to 17.0.5 ([244e6e8](https://github.com/wmfs/pg-model/commit/244e6e8e70495d34cc4bc35f5476cc70d1f96d28))
* **deps-dev:** bump semantic-release from 17.0.5 to 17.0.6 ([55fde78](https://github.com/wmfs/pg-model/commit/55fde78b543b9bb93ffc8acc7ca3d8090f6b8c1b))
* **deps-dev:** bump semantic-release from 17.0.6 to 17.0.7 ([08adfb5](https://github.com/wmfs/pg-model/commit/08adfb5e2341a1755be678ff26ac1c3840d12edc))
* **deps-dev:** bump standard from 14.3.1 to 14.3.2 ([ddbe73e](https://github.com/wmfs/pg-model/commit/ddbe73e95de2e19abdaabdd7e3d5a843b1b2dee1))
* **deps-dev:** bump standard from 14.3.2 to 14.3.3 ([bbe4276](https://github.com/wmfs/pg-model/commit/bbe42765921cd47c55fe5c52840ed99fb18b1f28))


### ⚙️ Continuous Integrations

* **circle:** add context env var config to config.yml ([870fbbb](https://github.com/wmfs/pg-model/commit/870fbbb2976a3ac942ef8e37d90610fc903b8585))

# [1.21.0](https://github.com/wmfs/pg-model/compare/v1.20.0...v1.21.0) (2020-02-26)


### 🛠 Builds

* **deps:** bump async from 3.1.1 to 3.2.0 ([c495e0f](https://github.com/wmfs/pg-model/commit/c495e0f9629340384e1a015b2ff42a0022934072))
* **deps-dev:** bump [@semantic-release](https://github.com/semantic-release)/changelog from 3.0.6 to 5.0.0 ([2b5f0dc](https://github.com/wmfs/pg-model/commit/2b5f0dc8e398f4eb1b3bbd361e276063f2ea5c9f))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.14.0 to 1.15.0 ([34b41ea](https://github.com/wmfs/pg-model/commit/34b41ea5e4904ff74454ca0cefca2965ad06b1cc))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.15.0 to 1.16.0 ([1e7849e](https://github.com/wmfs/pg-model/commit/1e7849ebcf369b1d9a5dec2b1c3bffb38573b06d))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.16.0 to 1.17.0 ([b16c723](https://github.com/wmfs/pg-model/commit/b16c72363d63495f999e1c6382629fd669076e0b))
* **deps-dev:** bump codecov from 3.6.2 to 3.6.3 ([da517a9](https://github.com/wmfs/pg-model/commit/da517a92cd79cff8b92d455df3c581393850081f))
* **deps-dev:** bump codecov from 3.6.3 to 3.6.4 ([de29e1b](https://github.com/wmfs/pg-model/commit/de29e1bdfd10b70831ed783ea9e5cd58fc36d26d))
* **deps-dev:** bump codecov from 3.6.4 to 3.6.5 ([362f86b](https://github.com/wmfs/pg-model/commit/362f86b7cd04cd514d54e50dd9c88551d2dbc1ab))
* **deps-dev:** bump cz-conventional-changelog from 3.0.2 to 3.1.0 ([5358e36](https://github.com/wmfs/pg-model/commit/5358e369a85b753b698a4a3aa383e00ef2b0b5dc))

# [1.20.0](https://github.com/wmfs/pg-model/compare/v1.19.0...v1.20.0) (2020-01-27)


### 🛠 Builds

* **deps:** bump async from 2.6.3 to 3.1.1 ([34c7bb2](https://github.com/wmfs/pg-model/commit/34c7bb2f09a15f4e2836a56a3cf1a3a5bc0d1419))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.15.0 to 1.16.0 ([890282a](https://github.com/wmfs/pg-model/commit/890282ad16a61f9a364289cbdae247f067b47a2d))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/pg-diff-sync from 1.16.0 to 1.17.0 ([2201f59](https://github.com/wmfs/pg-model/commit/2201f598e1d58856a67e718a735454e6465403f1))
* **deps-dev:** bump codecov from 3.6.1 to 3.6.2 ([090d465](https://github.com/wmfs/pg-model/commit/090d465369450780bf72c53191dc502e39a73064))
* **deps-dev:** bump conventional-changelog-metahub from 3.0.0 to 4.0.0 ([14536bf](https://github.com/wmfs/pg-model/commit/14536bfcf8a5377add5bf3ccf4768a39226d47ca))
* **deps-dev:** bump mocha from 7.0.0 to 7.0.1 ([fcddb4d](https://github.com/wmfs/pg-model/commit/fcddb4d66bb4c27274d03b0256f7be3d93d0b85e))
* **deps-dev:** update standard requirement from 12.0.1 to 14.3.1 ([e040f86](https://github.com/wmfs/pg-model/commit/e040f86e09fe2abc87f61fec48749fa2cd6cac6c))


### 💎 Styles

* Do not access Object.prototype method 'hasOwnProperty' from target object ([10ceee9](https://github.com/wmfs/pg-model/commit/10ceee9ce2057ff6829828cb29353b20faf3bb29))
* standard --fix ([9972fcf](https://github.com/wmfs/pg-model/commit/9972fcf6f55a464c6d4906601fc01001985e2203))
* typo ([80a538b](https://github.com/wmfs/pg-model/commit/80a538b7c8190a55a3cc152915f35a18ba927381))

# [1.19.0](https://github.com/wmfs/pg-model/compare/v1.18.0...v1.19.0) (2020-01-07)


### 🛠 Builds

* **deps:** bump dottie from 2.0.1 to 2.0.2 ([c91ba35](https://github.com/wmfs/pg-model/commit/c91ba35877293b2010e8521ac7238def127b6078))

# [1.18.0](https://github.com/wmfs/pg-model/compare/v1.17.0...v1.18.0) (2020-01-07)


### 🛠 Builds

* **deps:** update async requirement from 2.6.1 to 2.6.3 ([196ab93](https://github.com/wmfs/pg-model/commit/196ab932685844481619511113f734c27fcb6c59))
* **deps-dev:** bump [@wmfs](https://github.com/wmfs)/hl-pg-client from 1.13.0 to 1.14.0 ([d510ffb](https://github.com/wmfs/pg-model/commit/d510ffb3391045160e19df91815b182a77435caf))
* **deps-dev:** bump mocha from 6.2.2 to 7.0.0 ([b8e7f15](https://github.com/wmfs/pg-model/commit/b8e7f153d6a56e1a18e3dd997066c76ef868752c))
* **deps-dev:** bump packages ([529df42](https://github.com/wmfs/pg-model/commit/529df42b95b5816d44839f5d3ec19b5818206b84))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([ab6a239](https://github.com/wmfs/pg-model/commit/ab6a239410260fdaa7a886eae56ec890ee5cbdb5))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([b9b2c05](https://github.com/wmfs/pg-model/commit/b9b2c053ea4df03f5fe3ef82287785dfe444c1df))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([7db8651](https://github.com/wmfs/pg-model/commit/7db86513be68efdf3529ac7d5e39c5012b3457fd))
* **deps-dev:** update cz-conventional-changelog requirement ([d0ee3ad](https://github.com/wmfs/pg-model/commit/d0ee3adf5dbb4af22f8f9ae3ad4e301cb766379b))
* **deps-dev:** update mocha requirement from 6.1.4 to 6.2.0 ([f4300e0](https://github.com/wmfs/pg-model/commit/f4300e0d1240dd61fb7c4c5416e5d734a4364537))
* **deps-dev:** update semantic-release requirement ([5db4f9c](https://github.com/wmfs/pg-model/commit/5db4f9c25481674384097d1aae10bb933eeac36e))

# [1.17.0](https://github.com/wmfs/pg-model/compare/v1.16.0...v1.17.0) (2019-09-09)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.14 to 4.17.15 ([cffa641](https://github.com/wmfs/pg-model/commit/cffa641))

# [1.16.0](https://github.com/wmfs/pg-model/compare/v1.15.0...v1.16.0) (2019-07-11)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.11 to 4.17.14 ([59c55bd](https://github.com/wmfs/pg-model/commit/59c55bd))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([82a7bf7](https://github.com/wmfs/pg-model/commit/82a7bf7))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([da09341](https://github.com/wmfs/pg-model/commit/da09341))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([bee3623](https://github.com/wmfs/pg-model/commit/bee3623))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([c42d504](https://github.com/wmfs/pg-model/commit/c42d504))
* **deps-dev:** update codecov requirement from 3.1.0 to 3.5.0 ([4915560](https://github.com/wmfs/pg-model/commit/4915560))
* **deps-dev:** update mocha requirement from 5.2.0 to 6.1.4 ([a92051e](https://github.com/wmfs/pg-model/commit/a92051e))
* **deps-dev:** update nyc requirement from 13.2.0 to 14.1.1 ([afdbaf9](https://github.com/wmfs/pg-model/commit/afdbaf9))

# [1.15.0](https://github.com/wmfs/pg-model/compare/v1.14.0...v1.15.0) (2019-04-09)


### ✨ Features

* Model.find options can now take fields array ([1a338c4](https://github.com/wmfs/pg-model/commit/1a338c4))


### 💎 Styles

* remove an empty line ([da4f907](https://github.com/wmfs/pg-model/commit/da4f907))

# [1.14.0](https://github.com/wmfs/pg-model/compare/v1.13.0...v1.14.0) (2019-04-05)


### ✨ Features

* find filter - passing an array of values generates an OR subclause ([cb43876](https://github.com/wmfs/pg-model/commit/cb43876))


### 📦 Code Refactoring

* Pull out buildWhereClause in option-parser ([a5469ee](https://github.com/wmfs/pg-model/commit/a5469ee))
* Swapped out _.forOwn in favour of for...of ([deef9d7](https://github.com/wmfs/pg-model/commit/deef9d7))

# [1.13.0](https://github.com/wmfs/pg-model/compare/v1.12.0...v1.13.0) (2019-02-08)


### 🛠 Builds

* **deps:** update debug requirement from 4.1.0 to 4.1.1 ([b429b9f](https://github.com/wmfs/pg-model/commit/b429b9f))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([983c1c4](https://github.com/wmfs/pg-model/commit/983c1c4))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([21accd0](https://github.com/wmfs/pg-model/commit/21accd0))
* **deps-dev:** update nyc requirement from 13.1.0 to 13.2.0 ([41908d6](https://github.com/wmfs/pg-model/commit/41908d6))
* **deps-dev:** update semantic-release requirement ([7a1aedc](https://github.com/wmfs/pg-model/commit/7a1aedc))

# [1.12.0](https://github.com/wmfs/pg-model/compare/v1.11.0...v1.12.0) (2018-12-21)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.2 to 7.3.0 ([2760fdf](https://github.com/wmfs/pg-model/commit/2760fdf))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([beb3327](https://github.com/wmfs/pg-model/commit/beb3327))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([77179e1](https://github.com/wmfs/pg-model/commit/77179e1))
* **deps-dev:** update semantic-release requirement ([5b42b31](https://github.com/wmfs/pg-model/commit/5b42b31))
* **deps-dev:** update semantic-release requirement ([640c3f0](https://github.com/wmfs/pg-model/commit/640c3f0))
* **deps-dev:** update semantic-release requirement ([0635da3](https://github.com/wmfs/pg-model/commit/0635da3))
* **deps-dev:** update semantic-release requirement ([915f655](https://github.com/wmfs/pg-model/commit/915f655))
* **deps-dev:** update semantic-release requirement ([ef9838f](https://github.com/wmfs/pg-model/commit/ef9838f))


### ⚙️ Continuous Integrations

* **circle:** fix the env for postgres ([63066fc](https://github.com/wmfs/pg-model/commit/63066fc))

# [1.11.0](https://github.com/wmfs/pg-model/compare/v1.10.0...v1.11.0) (2018-11-03)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.1 to 7.2.2 ([1ee4fa0](https://github.com/wmfs/pg-model/commit/1ee4fa0))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([e4456ee](https://github.com/wmfs/pg-model/commit/e4456ee))
* **deps-dev:** update semantic-release requirement ([56a8cd4](https://github.com/wmfs/pg-model/commit/56a8cd4))

# [1.10.0](https://github.com/wmfs/pg-model/compare/v1.9.0...v1.10.0) (2018-11-01)


### 🛠 Builds

* **deps:** update boom requirement from 7.2.0 to 7.2.1 ([4db5861](https://github.com/wmfs/pg-model/commit/4db5861))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([f807a22](https://github.com/wmfs/pg-model/commit/f807a22))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([32aa4a4](https://github.com/wmfs/pg-model/commit/32aa4a4))
* **deps-dev:** update semantic-release requirement ([ec5bbd7](https://github.com/wmfs/pg-model/commit/ec5bbd7))

# [1.9.0](https://github.com/wmfs/pg-model/compare/v1.8.0...v1.9.0) (2018-10-23)


### 🛠 Builds

* **deps:** update dottie requirement from 2.0.0 to 2.0.1 ([e5c4e6f](https://github.com/wmfs/pg-model/commit/e5c4e6f))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement ([670c049](https://github.com/wmfs/pg-model/commit/670c049))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([b293d14](https://github.com/wmfs/pg-model/commit/b293d14))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([4545ed8](https://github.com/wmfs/pg-model/commit/4545ed8))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([55366c3](https://github.com/wmfs/pg-model/commit/55366c3))
* **deps-dev:** update nyc requirement from 13.0.1 to 13.1.0 ([bda6f47](https://github.com/wmfs/pg-model/commit/bda6f47))
* **deps-dev:** update semantic-release requirement ([e6d74a9](https://github.com/wmfs/pg-model/commit/e6d74a9))
* **deps-dev:** update semantic-release requirement ([59a93d3](https://github.com/wmfs/pg-model/commit/59a93d3))
* **deps-dev:** update semantic-release requirement ([e158898](https://github.com/wmfs/pg-model/commit/e158898))

# [1.8.0](https://github.com/wmfs/pg-model/compare/v1.7.0...v1.8.0) (2018-10-08)


### 🛠 Builds

* **deps:** update debug requirement from 4.0.1 to 4.1.0 ([01358ad](https://github.com/wmfs/pg-model/commit/01358ad))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([05e59f4](https://github.com/wmfs/pg-model/commit/05e59f4))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([af48f55](https://github.com/wmfs/pg-model/commit/af48f55))
* **deps-dev:** update chai requirement from 4.1.2 to 4.2.0 ([3914d90](https://github.com/wmfs/pg-model/commit/3914d90))
* **deps-dev:** update semantic-release requirement ([70f4131](https://github.com/wmfs/pg-model/commit/70f4131))
* **deps-dev:** update semantic-release requirement ([f930c68](https://github.com/wmfs/pg-model/commit/f930c68))

# [1.7.0](https://github.com/wmfs/pg-model/compare/v1.6.0...v1.7.0) (2018-09-12)


### 🛠 Builds

* **deps:** update lodash requirement from 4.17.10 to 4.17.11 ([a7a2dfb](https://github.com/wmfs/pg-model/commit/a7a2dfb))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([17266a2](https://github.com/wmfs/pg-model/commit/17266a2))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([18f7ab3](https://github.com/wmfs/pg-model/commit/18f7ab3))
* **deps-dev:** update semantic-release requirement ([854f93b](https://github.com/wmfs/pg-model/commit/854f93b))

# [1.6.0](https://github.com/wmfs/pg-model/compare/v1.5.0...v1.6.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 4.0.0 to 4.0.1 ([6234eb8](https://github.com/wmfs/pg-model/commit/6234eb8))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement ([650d66c](https://github.com/wmfs/pg-model/commit/650d66c))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([b7d73b9](https://github.com/wmfs/pg-model/commit/b7d73b9))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([216b3fc](https://github.com/wmfs/pg-model/commit/216b3fc))

# [1.5.0](https://github.com/wmfs/pg-model/compare/v1.4.0...v1.5.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.2.3 to 4.0.0 ([441db49](https://github.com/wmfs/pg-model/commit/441db49))

# [1.4.0](https://github.com/wmfs/pg-model/compare/v1.3.0...v1.4.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.2.2 to 3.2.3 ([170bb54](https://github.com/wmfs/pg-model/commit/170bb54))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/pg-diff-sync requirement ([572203f](https://github.com/wmfs/pg-model/commit/572203f))

# [1.3.0](https://github.com/wmfs/pg-model/compare/v1.2.0...v1.3.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.2.1 to 3.2.2 ([abe249c](https://github.com/wmfs/pg-model/commit/abe249c))
* **deps-dev:** update [@wmfs](https://github.com/wmfs)/hl-pg-client requirement ([8ed85da](https://github.com/wmfs/pg-model/commit/8ed85da))

# [1.2.0](https://github.com/wmfs/pg-model/compare/v1.1.2...v1.2.0) (2018-09-11)


### 🛠 Builds

* **deps:** update debug requirement from 3.1.0 to 3.2.1 ([c5c0839](https://github.com/wmfs/pg-model/commit/c5c0839))
* **deps-dev:** update semantic-release requirement ([3e1a550](https://github.com/wmfs/pg-model/commit/3e1a550))

## [1.1.2](https://github.com/wmfs/pg-model/compare/v1.1.1...v1.1.2) (2018-09-05)


### 🐛 Bug Fixes

* If there are no update columns, don't add the modifiedByField ([adb9438](https://github.com/wmfs/pg-model/commit/adb9438))


### 🛠 Builds

* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.1 to 7.0.2 ([d8b86c6](https://github.com/wmfs/pg-model/commit/d8b86c6))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement from 7.0.2 to 7.0.3 ([6b9b9ad](https://github.com/wmfs/pg-model/commit/6b9b9ad))
* **deps-dev:** update codecov requirement from 3.0.4 to 3.1.0 ([19d8cd7](https://github.com/wmfs/pg-model/commit/19d8cd7))
* **deps-dev:** update nyc requirement from 12.0.2 to 13.0.1 ([146aea6](https://github.com/wmfs/pg-model/commit/146aea6))
* **deps-dev:** update semantic-release requirement from 15.9.11 to 15.9.12 ([8a360d9](https://github.com/wmfs/pg-model/commit/8a360d9))
* **deps-dev:** update semantic-release requirement from 15.9.3 to 15.9.5 ([214d139](https://github.com/wmfs/pg-model/commit/214d139))
* **deps-dev:** update semantic-release requirement from 15.9.5 to 15.9.6 ([4f5095a](https://github.com/wmfs/pg-model/commit/4f5095a))
* **deps-dev:** update semantic-release requirement from 15.9.6 to 15.9.7 ([0277dbb](https://github.com/wmfs/pg-model/commit/0277dbb))
* **deps-dev:** update semantic-release requirement from 15.9.7 to 15.9.8 ([60b020b](https://github.com/wmfs/pg-model/commit/60b020b))
* **deps-dev:** update semantic-release requirement from 15.9.8 to 15.9.9 ([374da3b](https://github.com/wmfs/pg-model/commit/374da3b))
* **deps-dev:** update semantic-release requirement from 15.9.9 to 15.9.11 ([7f3a701](https://github.com/wmfs/pg-model/commit/7f3a701))
* **deps-dev:** update semantic-release requirement to 15.9.2 ([aa0d19e](https://github.com/wmfs/pg-model/commit/aa0d19e))
* **deps-dev:** update semantic-release requirement to 15.9.3 ([b7776da](https://github.com/wmfs/pg-model/commit/b7776da))
* **dev-deps:** move to standard 12.0.1 ([314dca5](https://github.com/wmfs/pg-model/commit/314dca5))


### ♻️ Chores

* codecov 3.0.3 -> 3.0.4 ([97e1f95](https://github.com/wmfs/pg-model/commit/97e1f95))

## [1.1.1](https://github.com/wmfs/pg-model/compare/v1.1.0...v1.1.1) (2018-07-30)


### 🐛 Bug Fixes

* Fix upsert when on conflict do nothing ([3483d8f](https://github.com/wmfs/pg-model/commit/3483d8f))


### 🛠 Builds

* **deps-dev:** update semantic-release requirement to 15.9.1 ([78309e8](https://github.com/wmfs/pg-model/commit/78309e8))

# [1.1.0](https://github.com/wmfs/pg-model/compare/v1.0.2...v1.1.0) (2018-07-28)


### ✨ Features

* Initial work to pull userId into inserts and update ([3f124e4](https://github.com/wmfs/pg-model/commit/3f124e4))
* Set createdBy and modifiedBy for upserts ([6f219d4](https://github.com/wmfs/pg-model/commit/6f219d4))


### 🛠 Builds

* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 2.1.2 ([6cf9d40](https://github.com/wmfs/pg-model/commit/6cf9d40))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/changelog requirement to 3.0.0 ([037dc66](https://github.com/wmfs/pg-model/commit/037dc66))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 6.0.2 ([360ba24](https://github.com/wmfs/pg-model/commit/360ba24))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.0 ([da06d9f](https://github.com/wmfs/pg-model/commit/da06d9f))
* **deps-dev:** update [@semantic-release](https://github.com/semantic-release)/git requirement to 7.0.1 ([6e8e5a0](https://github.com/wmfs/pg-model/commit/6e8e5a0))
* **deps-dev:** update semantic-release requirement to 15.7.2 ([3ca454c](https://github.com/wmfs/pg-model/commit/3ca454c))
* **deps-dev:** update semantic-release requirement to 15.8.0 ([4459351](https://github.com/wmfs/pg-model/commit/4459351))
* **deps-dev:** update semantic-release requirement to 15.8.1 ([d006b83](https://github.com/wmfs/pg-model/commit/d006b83))


### ⚙️ Continuous Integrations

* remove deps-dev scoping release ([2a83bd3](https://github.com/wmfs/pg-model/commit/2a83bd3))


### 💎 Styles

* Standards fix ([d3d0c67](https://github.com/wmfs/pg-model/commit/d3d0c67))
