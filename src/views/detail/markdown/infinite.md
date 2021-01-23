```html
<template>
  <div>
    <bar-infinite-scroll @load="load" :height="200" :finished="finished">
      <div class="scroll-card" v-for="(item, index) in list" :key="index">
        {{ item }}
      </div>
    </bar-infinite-scroll>
  </div>
</template>

<script>
  import { ref } from 'vue';
  import { InfiniteScroll } from 'bar-ui';

  export default {
    components: {
      [InfiniteScroll.name]: InfiniteScroll,
    },
    setup() {
      const list = ref([]);
      const finished = ref(false);
      const load = () => {
        return new Promise((resolve) => {
          setTimeout(() => {
            const n = list.value.length;
            if (n >= 60) {
              finished.value = true;
              return resolve();
            }
            for (let i = n + 1; i <= n + 20; i++) {
              list.value.push(i);
            }
            resolve();
          }, 1000);
        });
      };
      return { list, finished, load };
    },
  };
</script>
```

## API

| 参数          | 说明                                                     | 类型    | 可选值         | 默认值    |
| :------------ | :------------------------------------------------------- | :------ | :------------- | :-------- |
| finished      | 加载是否完成                                             | boolean |                | false     |
| offset        | 距离底边多少距离开始加载                                 | number  |                | 300       |
| height        | 盒子高度，如果不是监听 window 的滚动条加载，则需要写高度 |         | string\|number |           |
| loading-text  | 加载中的文字                                             | string  |                | 加载中... |
| finished-text | 加载完成的文字                                           | string  |                | 加载完成  |
| error-text    | 加载出错的文字                                           | string  |                | 加载出错  |
| inWindow      | 是否监听 window 的滚动条                                 | boolean |                | false     |

## Events

| 参数 | 说明     | 函数签名           |
| :--- | :------- | :----------------- |
| load | 加载函数 | () => Promise<`any`> |

## Slots

| 名称     | 说明           |
| :------- | :------------- |
| finished | 加载中的文字   |
| error    | 加载完成的文字 |
| loading  | 加载出错的文字 |
