<template>
<yandex-map :zoom="zoom" :coords="coords" >
    <ymap-marker 
      marker-id="123"
      :coords="coords"
      :balloon-template="balloonTemplate"
      :icon="markerIcon"
    />
  </yandex-map>
  
</template>


<script>
export default {
  data: () => ({
    coords: [51.958117, 85.962245],
    zoom: 15,
    markerIcon: {
      layout: 'default#imageWithContent',
      imageHref: 'https://image.flaticon.com/icons/svg/1180/1180754.svg',
      imageSize: [48, 48],
      imageOffset: [0, 0],
      
      contentOffset: [15, 30],
      contentLayout: '<div style="background: red; width: 50px; color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
    }
  }),
  computed: {
    balloonTemplate() {
      return `
          <p style="font-size: 20px"> Яма на проезжей по ул. Вавилова </p><span style="color:#FC636B; font-size:14px">ПРОБЛЕМА</span>  <br> <br>
       <img src="https://auto-dor.com.ua/wp-content/uploads/2019/11/yamy-na-doroge.jpg"  width="340"> <br/>
        <span class="description">06.06.2020 в 18:45</span> <br>
         <p style="color:#1AAFD0; font-size:16px;">Иванов Иван Иванович</p>
        <a href="/initiative">ПОДРОБНЕЕ</a>`
    }
  },
  methods: {
    
  }  
};
</script>

<style lang="css" scoped>

.home .ymap-container {
  width: 100%;
  height: 1000px;
}

.description {
  display: block;
  color: #FC636B;
  font-size: 10px;
  line-height: 17px;
}

a, a:visited {
    color: #04b;
    text-decoration: none !important;
}

</style>