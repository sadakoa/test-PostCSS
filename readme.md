PostCSS-sample
====================

## What postCSS

watch url.

[https://github.com/postcss/postcss](https://github.com/postcss/postcss)

## Usage

1.gulp task

2.postcss plugin install

3.postcss update

4.compile

## postcss update
this error...


   Your current PostCSS version is 4.1.16, but postcss-for uses 5.0.8. Perhaps this is the source of the error below.

resolution

    $ cd node_modules/gulp-cssnext/node_modules/cssnext

    $ npm i postcss@5.0.8 --save

## result

src/css

    `@for $i from 1 to 5 { .test-$i { margin: $(i)px; } }`


build/css

    `.test-1 {
        margin: 1px
    }
    .test-2 {
        margin: 2px
    }
    .test-3 {
        margin: 3px
    }
    .test-4 {
        margin: 4px
    }
    .test-5 {
        margin: 5px
    }`
