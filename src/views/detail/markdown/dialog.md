```html
<template>
  <div>
    <bar-button @click="showDialog">Dialog</bar-button>
  </div>
</template>

<script>
  import { Button, Dialog } from 'bar-ui';

  export default {
    components: {
      [Button.name]: Button,
    },
    setup() {
      const showDialog = () => {
        Dialog.danger({
          type: 'notice',
          title: '你好',
          content: '你好你你好你好你好',
          onOk: () => {
            console.log(1);
          },
        });
      };
      return { showDialog };
    },
  };
</script>
```

## API

| 方法       | 说明                      | 参数          | 返回值 |
| :--------- | :------------------------ | :------------ | :----- |
| .show()    | 显示弹出框                | DialogOptions | void   |
| .notice()  | 显示 notice 类型的弹出框  | DialogOptions | void   |
| .success() | 显示 success 类型的弹出框 | DialogOptions | void   |
| .warn()    | 显示 warn 类型的弹出框    | DialogOptions | void   |
| .danger()  | 显示 danger 类型的弹出框  | DialogOptions | void   |

## DialogOptions

| 参数       | 说明           | 类型                        |
| :--------- | :------------- | :-------------------------- |
| title      | 标题           | string                      |
| content    | 内容           | string                      |
| onOk       | 点击确认       | (event: MouseEvent) => void |
| onCancel   | 点击取消       | (event: MouseEvent) => void |
| okText     | 确认按钮的文字 | string                      |
| cancelText | 取消按钮的文字 | string                      |
