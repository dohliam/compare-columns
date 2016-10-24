# Compare columns - Quickly compare data across separate columns

This is a small JavaScript tool to compare two sets of data. Let's say you have two columns of data, and you want to quickly determine which values occur in the first column only, the second column only, or both columns. There are quite a few ways to do this, including variations of `sort` and `uniq` on the command-line, throwaway Ruby/Python/Perl scripts, etc. But if you already have a browser window open, this tool can do the same thing quickly and easily.

## Features

* Works offline (just clone or download this repository and open `index.html` in any browser)
* Sorting not required: values retain their original order
* [Online demo](https://dohliam.github.io/tiny_tools/compare/) available

## Usage

First enter some data in **Col 1** and **Col 2**. Then click on one of the three buttons at the bottom of the page:

* **Col 1 only** (display values that occur only in _Col 1_)
* **Col 2 only** (display values that occur only in _Col 2_)
* **Both cols** (display values appearing in both _Col 1_ **and** _Col 2_)

The result will be displayed in the third column.

## See also

"Compare columns" is part of the [**tiny tools**](https://dohliam.github.io/tiny_tools/) series.

Other tools for working with columns of data that might also be of interest:

* [Elements of _a_ in _b_](https://github.com/dohliam/elements)
* [Sort columns](https://github.com/dohliam/sort-columns)
* [Sum columns](https://github.com/dohliam/sum-columns)

## License

MIT.

[milligram](https://github.com/milligram/milligram) CSS by @cjpatoilo, prototyped using [dropin-minimal-css](https://github.com/dohliam/dropin-minimal-css)
