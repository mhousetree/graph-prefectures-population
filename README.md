# graph-prefectures-population(regional-division)

<img alt="regional-division版のスクリーンショット" src="https://user-images.githubusercontent.com/74708840/169999002-fbc28d97-c9cc-4a55-972d-978384c69327.png" width="600px">

PC幅のときに地方ごとに都道府県を分けて表示しているバージョンです。  
このバージョンが提出版ではない理由は `NOTE.md` (mainブランチと内容は同じです)に記載しています(以下抜粋)。

> - 地方の分類をスマホの画面サイズでやると高さが突き抜けてしまってグラフが見えづらく、使いにくくなってしまうと思ったため、分類されたチェックボックス群と分類されていないチェックボックス群を画面幅で表示だけ切り替えるように実装したが、いい実装なのかはわからない
>   - チェックを入れてから画面幅を変えるとまっさらなチェックボックスが現れてすごくよくない実装だった
>     - Javascript でゴリ押して一応動作上は正しく動くようになったが、それも良いコードではない感じがしたので、地方の分類があるバージョンを `regional-division` ブランチとして記録は残しておき、地方の分類のないものを最終的に製作したアプリケーションとして提出させていただきます

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
