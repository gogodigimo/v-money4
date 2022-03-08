*Forked from v-money and altered to allow for blank inputs*

# v-money Mask for Vue.js

![The Mask Money](https://cdn-images-1.medium.com/max/600/1*Rpc289FpghuHrnzyVpOUig.gif)

## Features

- Lightweight (<2KB gzipped)
- Dependency free
- Mobile support
- Component or Directive flavors
- Accept copy/paste
- Editable

For other types of mask, use [vue-the-mask](https://vuejs-tips.github.io/vue-the-mask)

## Usage

### A. Globally

```js
import Vue from 'vue'
import money4 from 'v-money4'

// register directive v-money4 and component <money>
Vue.use(money4, {precision: 4})
```

### B. Use as component: https://jsfiddle.net/auom8st8/

```html
<template>
  <div>
    <money4 v-model="price" v-bind="money"></money> {{price}}
  </div>
</template>

<script>
  import {Money4} from 'v-money4'

  export default {
    components: {Money4},

    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false
        }
      }
    }
  }
</script>
```

### C. Use as directive: https://jsfiddle.net/nj3cLoum/2/
Must use `vmodel.lazy` to bind works properly.
```html
<template>
  <div>
    <input v-model.lazy="price" v-money4="money" /> {{price}}
  </div>
</template>

<script>
  import {VMoney4} from 'v-money4'

  export default {
    data () {
      return {
        price: 123.45,
        money: {
          decimal: ',',
          thousands: '.',
          prefix: 'R$ ',
          suffix: ' #',
          precision: 2,
          masked: false /* doesn't work with directive */
        }
      }
    },

    directives: {money4: VMoney4}
  }
</script>
```

## Properties

| property  | Required | Type    | Default | Description                                             |
|-----------|----------|---------|---------|---------------------------------------------------------|
| precision | **true** | Number  | 2       | How many decimal places                                 |
| decimal   | false    | String  | "."     | Decimal separator                                       |
| thousands | false    | String  | ","     | Thousands separator                                     |
| prefix    | false    | String  | ""      | Currency symbol followed by a Space, like "R$ "         |
| suffix    | false    | String  | ""      | Percentage for example: " %"                            |
| masked    | false    | Boolean | false   | If the component output should include the mask or not  |

### References

- https://en.wikipedia.org/wiki/Decimal_mark
- https://docs.oracle.com/cd/E19455-01/806-0169/overview-9/index.html
- http://www.xe.com/symbols.php
- https://github.com/kevinongko/vue-numeric
- https://github.com/plentz/jquery-maskmoney
