```html
<template>
  <div>
    <bar-section title="分区1">
      <div>内容1</div>
    </bar-section>
    <bar-section title="分区2">
      <div>内容2</div>
    </bar-section>
    <bar-section title="分区3">
      <div>内容3</div>
    </bar-section>
  </div>
</template>

<script>
  import { Section } from 'bar-ui';

  export default {
    components: {
      [Section.name]: Section,
    },
  };
</script>
```

## API

| 参数  | 说明     | 类型   | 可选值 | 默认值 |
| :---- | :------- | :----- | :----- | :----- |
| title | 分区标题 | string |        |        |
