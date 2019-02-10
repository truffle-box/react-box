# nano-react-app-template

The template project for [nano-react-app](https://github.com/adrianmcli/nano-react-app).

- `npm start` — This will spawn a development server with a default port of `1234`.
- `npm run build` — This will output a production build in the `dist` directory.

## Custom port

You can use the `-p` flag to specify a port for development. To do this, you can either run `npm start` with an additional flag:

```
npm start -- -p 3000
```

Or edit the `start` script directly:

```
parcel index.html -p 3000
```

## Adding styles

You can use CSS files with simple ES2015 `import` statements in your Javascript:

```js
import "./index.css";
```

## Using class properties

If you want to use class properties, add the following to `.babelrc` or your `package.json` under the `babel` property:

```json
{
  "plugins": [["@babel/plugin-proposal-class-properties", { "loose": true }]]
}
```

## Using React fragments

If you want to use React fragments, add the following to `.babelrc` or your `package.json` under the `babel` property:

```json
{
  "plugins": [
    ["@babel/plugin-transform-react-jsx", { "pragmaFrag": "React.Fragment" }]
  ]
}
```
