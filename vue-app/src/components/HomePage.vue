<template>
  <div>
    <img
      src="https://www.thespruce.com/thmb/Xb4aZlD4-FAvreSOKpAYeau2fj8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/king-eider-drake-5b2a91a33418c60036872a30.jpg"
    />
    <div class="navigation">
      <router-link to="/page1">Page 1</router-link>
      <router-link to="/page2">Page 2</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {}
}
</script>