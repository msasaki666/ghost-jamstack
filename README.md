# ghost-jamstack

## 覚え書き

- ヘッドレスCMSの一つである[ghost](https://github.com/TryGhost/Ghost)を使ってみた

## 起動方法

- [公式のDockerイメージ](https://hub.docker.com/_/ghost)を元にローカルでghostのサーバーを起動(詳細は忘れた)
- プロジェクトルートの`.env`に変数を定義([必要な変数はここ](https://github.com/msasaki666/ghost-jamstack/blob/master/nuxt.config.js#L74))
- `yarn dev`

## Build Setup

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev

# build for production and launch server
$ yarn build
$ yarn start

# generate static project
$ yarn generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).
