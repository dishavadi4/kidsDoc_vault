<template>
  <div class="max-w-7x1 mx-auto grid grid-cols-3 gap-4">
    <div class="main-left">
      <div class="header">
        <div class="p-12 bg-white border border-gray-200 rounded-lg">
          <upload-card button-text="Aadhar Card" />
          <upload-card button-text="Birth Certificate"/>
          <upload-card button-text="Health"/>
        </div>
      </div>
    </div>
    <div class="main-center">
      
      <div class="header">
        <div class="p-12 bg-white border border-gray-200 rounded-lg">
          <upload-card button-text="Education"/>
          <upload-card button-text="Finance"/>
          <upload-card button-text="school- certificate"/>
        </div>
      </div>

    </div>
    <div class="main-right">
      <div class="center">
        <div class="header">
          <div class="p-12 bg-white border border-gray-200 rounded-lg">
            <upload-card button-text="vehicle" />
            <upload-card button-text="Travel" />
            <upload-card button-text="other"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UploadCard from '@/components/UploadCard.vue';

export default {
  name: 'HomeView',
  components: {
    UploadCard
  }
}
</script>