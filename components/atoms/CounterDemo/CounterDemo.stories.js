import Vue from 'vue'
import { storiesOf } from '@storybook/vue'
import CounterDemo from './CounterDemo'

storiesOf('CounterDemo', module)
  .add('As a component', () => ({
    components: { CounterDemo },
    template: '<CounterDemo />'
  }))
  .add('I don\'t work', () => '<List />')