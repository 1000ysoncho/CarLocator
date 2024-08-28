# Parking Locator Project
このプロジェクトは、商業施設やテーマパークなどの顧客体験を最大化することを目標にしています。<br>
その一環でこのソフトウェアでは商業施設やテーマパークにて駐車した位置を忘れても良いことを目指しています。<br>
機能としては、利用者の駐車位置を地図上に表示するものにとどまります。<br>
静的なコンテンツで作成しているので、各クラウドプラットフォームのオブジェクトストレージで公開することが可能です。<br>
また、アクセス数もとても多いわけではないと思うので、ランニングコストも安く済む想定です。<br>
このソフトウェアを利用する場合、ウェブページのどこかに下記の著作権表示を入れて貰えれば利用できます。<br>

> © 2024 Parking Locator by Tomoya.M. All rights reserved.

## 使用技術

このプロジェクトでは、以下の技術やライブラリを使用しています。

- **HTML/CSS/JavaScript**: フロントエンドの構築に使用
- **Leaflet.js**: インタラクティブな地図表示のためのオープンソースライブラリ
- **Bootstrap**: レスポンシブデザインを容易に実装するためのフロントエンドフレームワーク

## インストール方法

1. リポジトリをクローンします
3. 駐車場の画像を入れ替えます
3. ハイライトする場所を変更します
4. 公開webサーバや、AWSやAzureなどのクラウドストレージに公開します

## 使用方法
### 画像を差し替える
asset\images配下に画像を配置します
画像ファイル名は何でも良いです。後述のParkArea.jsonファイルにて指定します。

### エリアを定義する
\data\ParkArea.jsonを修正します

|値|説明|
|----|----|
|parkingBlock|駐車ブロックを書いてください。3~4台ほどの「見ればわかる」程度のまとまりが好ましいです|
|hilightColor|16進数で指定してください。ブロックをハイライトする枠の色が変わります。|
|apartment|建屋のことです。なければ何も書かなくて大丈夫です。|
|floor|階数のことです。|
|block|駐車ブロックを書きます。|
|imageUrlPath|相対パスで画像のファイル名を書いてください。<br>例：./asset/images/ファイル名|
|coordinates|座標位置です。左上を頂点として、時計回りに書いてください。<br>３つ書けば三角形が、４つ書けば四角形が生成されます。斜めな場所も対応できます。|
|||
      
## ライセンス
このプロジェクトはMITライセンスのもとでライセンスされています。詳細はLICENSEファイルを参照してください。

### 使用しているライブラリのライセンス

   - **Leaflet.js**: BSD 2-Clause Licenseのもとでライセンスされています。詳細は[Leaflet.jsの公式サイト](https://leafletjs.com/)またはLICENSEファイルを参照してください。

   - **Bootstrap**: MIT Licenseのもとでライセンスされています。詳細は[Bootstrapの公式リポジトリ](https://github.com/twbs/bootstrap/blob/main/LICENSE)またはLICENSEファイルを参照してください。

## ディレクトリ構造
<pre>
.
│  index.html
│  README.md
│
├─asset
│  │  script.js
│  │
│  ├─css
│  │      bootstrap*
│  │      styles.css #カスタムcss
│  │
│  ├─data
│  │      ParkArea.jason #駐車ブロックに関する定義ファイル
│  │
│  ├─images
│  │      parking_lot_map.png #駐車場の画像
│  │
│  ├─js
│  |      bootstrap*
│  │
│  └─leaflet
│          leaflet
├─LICENSE
│
└─src
    ├─components
    │      imageMapBuild.js #マップ描画のコンポーネント
    │
    └─utils
            loadJson.js #Json読み込みユーティリティ
            getUrlParameter.js #URL取得ユーティリティ
            </pre>

## 著作権表示
© 2024 Parking Locator by Tomoya.M. All rights reserved.

## コンタクト
導入に際しての問い合わせやご相談、またシステムへの改善提案などは下記までお願いします。<br>
ご要望に応じて、柔軟にご対応しています（サブスクリプション形式での提供・構築代行・コンサルティング等）

+ Email: muraosakobo@gmail.com

## About Me
+ X:[1000ysoncho](https://x.com/1000ysoncho)
+ Email: muraosakobo@google.com
+ profile: [TMWorks](https://profile.ikuratarako.net/)
