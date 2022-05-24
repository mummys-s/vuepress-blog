---
prev: ./
next: ./question
---

## 组件的通信方式

### 1、 props方式

- 适用场景：父子组件通信
- 父组件给子组件传递数据（函数），本质是子组件给父组件传递数据
- 父组件给子组件传递数据（非函数），本质是父组件给子组件传递数据
- 书写方式
  - `props:['userList']`
  - `props:{type:Array}`
  - `props:{type:Array,default:[]}`

- 路由的*props*
  - 布尔值
  - 对象
  - 函数

### 2、自定义事件

- 父组件

```html

```

- 子组件

#### 备注：v-model

用于自定义组件时，`v-model` prop 和事件默认名称已更改：

- prop：`value` -> `modelValue`；
- 事件：`input` -> `update:modelValue`；

**父组件**

```html
<child-component v-model="username"></child-component>
<!-- 是以下的简写: -->
<child-component 
     :modelValue="username" 
     @update:modelValue="username = $event">
</child-component>
```

**子组件**

```vue
<input
  type="text"
  :modelValue="modelValue"
  @input="context.emit('update:modelValue', $event.target.value)"
/>
    
props:['modelValue'],
emits: ["update:modelValue"],    
```

### 3、全局事件总线

- 适用场景：万能

- **vue3**中适用`mitt插件`

### 4、pubsub-js（发布与订阅）

- 适用场景：万能
- 在vue中不经常使用

### 5、vuex

- 适用场景：万能

### 6、插槽

- 适用场景：父子组件
- 类型
  - 默认插槽
  - 具名插槽
  - 作用域插槽

### 7、v-model

