# clone-deep

![Build Status](https://travis-ci.com/n0n3br/clone-deep.svg?branch=master)
[![Coverage Status](https://coveralls.io/repos/github/n0n3br/clone-deep/badge.svg)](https://coveralls.io/github/n0n3br/clone-deep)

clone-deep is a little library you can use to clone your objects, no matter how deep they are.

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install clone-deep

```bash
npm install @n0n3br/clone-deep
```

## Usage

#### ES6

```javascript
import cloneDeep from "@n0n3br/clone-deep";
let a = { a: [1, 2, 3], b: [4, 5, 6] };
let b = cloneDeep(a);
```

#### CommonJS

```javascript
var cloneDeep = require("@n0n3br/clone-deep").default;
var a = { a: [1, 2, 3], b: [4, 5, 6] };
var b = cloneDeep(a);
```

#### UMD in Browser

```html
<!-- to import non-minified version -->
<script src="clone-deep.umd.js"></script>

<!-- to import minified version -->
<script src="clone-deep.umd.min.js"></script>
```

After this the library will be available to the Global as clone-deep:

```javascript
let a = { a: [1, 2, 3], b: [4, 5, 6] };
let b = cloneDeep(a);
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## Authors

| ![Rogério Amorim](https://avatars2.githubusercontent.com/u/371808?s=100&v=4) |
| :--------------------------------------------------------------------------: |
|                 [Rogério Amorim](https://github.com/n0n3br)                  |

See also the list of [contributors](https://github.com/n0n3br/clone-deep/graphs/contributors) who participated in this project.

## License

[MIT](https://choosealicense.com/licenses/mit/)
