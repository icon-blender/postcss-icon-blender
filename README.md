# PostCSS Icon Blender

[PostCSS](https://github.com/postcss/postcss) plugin to allow creating customized SVG icon collections from over 80,000 free and open-source icons.


## Usage

Before
```css
@icon fa align-left;
```

After
```css
.ib-fa-align-left{
	--url: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e');
}
```

Then, include or import [icon-blender.css](https://github.com/icon-blender/icon-blender/blob/main/css/icon-blender.css) and the following html will display FontAwesome's align-left icon without having to include the entire FontAwesome icon colleciton.

```html
<i class="ib ib-fa-align-left"></i>
```

## Custom Class Names

When using the ```@icon``` rule, generated class names will take the form ```.ib-{collection_prefix}-{icon_name}```.
If you'd prefer alternate class names, you can use the ```@iconUrl``` rule instead.


Before
```css
.my-class-name{
	@iconUrl fa align-left;
}
```

After
```css
.my-class-name{
	--url: url('data:image/svg+xml,%3csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 1792 1408"%3e%3cpath d="M1792 1216v128q0 26-19 45t-45 19H64q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1664q26 0 45 19t19 45zm-384-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 960V832q0-26 19-45t45-19h1280q26 0 45 19t19 45zm256-384v128q0 26-19 45t-45 19H64q-26 0-45-19T0 576V448q0-26 19-45t45-19h1536q26 0 45 19t19 45zM1280 64v128q0 26-19 45t-45 19H64q-26 0-45-19T0 192V64q0-26 19-45T64 0h1152q26 0 45 19t19 45z" fill="currentColor"/%3e%3c/svg%3e');
}
```


## PostCSS Setup

**Step 1:** Install plugin:

```sh
npm install --save-dev postcss postcss-icon-blender
```

**Step 2:** Check you project for existed PostCSS config: `postcss.config.js`
in the project root, `"postcss"` section in `package.json`
or `postcss` in bundle config.

If you do not use PostCSS, add it according to [official docs](https://github.com/postcss/postcss#usage)
and set this plugin in settings.

**Step 3:** Add the plugin to plugins list:

```diff
module.exports = {
  plugins: [
+   require('postcss-icon-blender'),
    require('autoprefixer')
  ]
}
```
