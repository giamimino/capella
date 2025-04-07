# Installing Webfonts
Follow these simple Steps.

## 1.
Put `amulya/` Folder into a Folder called `fonts/`.

## 2.
Put `amulya.css` into your `css/` Folder.

## 3. (Optional)
You may adapt the `url('path')` in `amulya.css` depends on your Website Filesystem.

## 4.
Import `amulya.css` at the top of you main Stylesheet.

```
@import url('amulya.css');
```

## 5.
You are now ready to use the following Rules in your CSS to specify each Font Style:
```
font-family: Amulya-Light;
font-family: Amulya-LightItalic;
font-family: Amulya-Regular;
font-family: Amulya-Italic;
font-family: Amulya-Medium;
font-family: Amulya-MediumItalic;
font-family: Amulya-Bold;
font-family: Amulya-BoldItalic;
font-family: Amulya-Variable;
font-family: Amulya-VariableItalic;

```
## 6. (Optional)
Use `font-variation-settings` rule to controll axes of variable fonts:
wght 300.0

Available axes:
'wght' (range from 300.0 to 700.0

