<template lang="html">
  <input type="tel"
         :value="formattedValue"
         @change="change"
         v-money4="{precision, decimal, thousands, prefix, suffix}"
         class="v-money4" />
</template>

<script>
import money4 from './directive'
import defaults from './options'
import {format, unformat} from './utils'

export default {
  name: 'Money4',
  props: {
    value: {
      required: true,
      default: 0
    },
    masked: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number,
      default: () => defaults.precision
    },
    decimal: {
      type: String,
      default: () => defaults.decimal
    },
    thousands: {
      type: String,
      default: () => defaults.thousands
    },
    prefix: {
      type: String,
      default: () => defaults.prefix
    },
    suffix: {
      type: String,
      default: () => defaults.suffix
    }
  },

  directives: {money4},

  data () {
    return {
      formattedValue: ''
    }
  },

  watch: {
    value: {
      immediate: true,
      handler (newValue, oldValue) {

        if(!newValue){
          var formatted = '';
        }else{
          var formatted = format(newValue, this.$props)
        }
       
        if (formatted !== this.formattedValue) {
          this.formattedValue = formatted
        }
      }
    }
  },

  methods: {
    change (evt) {
      this.$emit('input', this.masked ? evt.target.value : ( (!evt.target.value) ? '' : unformat(evt.target.value, this.precision)))
    }
  }
}
</script>
