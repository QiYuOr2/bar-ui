> 锚点效果演示请查看[移动端演示](https://tuzilow.github.io/bar-ui)

> 演示代码请查看[移动端演示代码](https://github.com/Tuzilow/bar-ui/blob/main/src/views/example.vue)

## 函数签名

```typescript
function useAnchor(
  selector: string,
  listenContainer: HTMLElement,
  offset: number
): {
  active: Ref<number>;
  scrollTo: (index: number) => void;
};
```

## 参数与返回值

参数

| 参数名          | 说明              | 类型        |
| :-------------- | :---------------- | :---------- |
| selector        | 打下的锚点 (类名) | string      |
| listenContainer | 监听滚动的容器    | HTMLElement |
| offset          | 滚动偏移量        | number      |

返回值

| 返回值名 | 说明             | 类型                    |
| :------- | :--------------- | :---------------------- |
| active   | 现在在第几个锚点 | Ref< number >           |
| scrollTo | 滚动到第几个锚点 | (index: number) => void |
