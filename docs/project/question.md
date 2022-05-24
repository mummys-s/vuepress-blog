---
prev: ./way
next: false
---
## Vue3中的问题

### 1、需要在组件更新完成后获取DOM对象

- 解决方案：`watch+nextTick`

```js
watch(
  () => state.bannerList,
  (newVal, oldVal) => {
    const SwiperRefs = mySwiper.value;
    nextTick(() => {
      var mySwiper = new Swiper(SwiperRefs, {
        loop: true, // 循环模式选项
        // 如果需要分页器
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        // 如果需要前进后退按钮
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });
    });
  }
);
```

### 2、在watch中如何获取ref对象

### 3、vue3中vuex的getters数据使用

```js
const getters = {
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  },
  attrsList(state) {
    return state.searchList.attrsList || []
  }
}

state.trademarkList = computed(() => store.getters["search/trademarkList"]);
state.attrsList = computed(() => store.getters["search/attrsList"]);
```

### 4、监听路由的变化

```js
watch(
  () => route,
  (newVal, oldVal) => {
    console.log('数据变化')
  },
  { deep: true }
);
```

### 5、vue3全局事件总线

### 6、Vue3自定义事件（子给父数据）

- 父组件

```js
<SearchSelector @trademarkInfo="trademarkInfo" />
const trademarkInfo = (data)=>{
  console.log('-------',data);
}
```

- 子组件

```js
export default {
  name: "SearchSelector",
  emits: ["trademarkInfo"],
  setup(props, context) {
    const tradeMarkhandle = (trademark) => {
      context.emit("trademarkInfo", trademark);
    };
    return {};
  },
};
```

### 7、自定义分页器

### 8、路由跳转滚动行为

```js
export default createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // return 期望滚动到哪个的位置
    return { top: 0 } 
  }
})
```

### 9、兄弟组件传值(mitt)

- 声明全局属性

```js
import mitt from 'mitt'
app.config.globalProperties.$mitt = new mitt()
```

- 父组件

```js
import { getCurrentInstance } from "vue";
export default {
  setup() {
    let { proxy } = getCurrentInstance();
    const getMessage = (index)=>{
      proxy.$mitt.emit("getIndex", index);
    }
    return {
      getMessage
    };
  },
};
```

- 子组件

```js
import { getCurrentInstance } from "vue";
export default {
  setup() {
    let { proxy } = getCurrentInstance();
    onMounted(() => {
      proxy.$mitt.on("getIndex", (index) => {
        state.currentIndex = index;
      });
    });
    return {};
  },
};
```

