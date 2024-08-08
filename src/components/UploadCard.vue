<template>
    <div>
      <div class="card" @click="triggerFileInput">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="size-5">
          <path fill-rule="evenodd" d="M4.5 2A1.5 1.5 0 0 0 3 3.5v13A1.5 1.5 0 0 0 4.5 18h11a1.5 1.5 0 0 0 1.5-1.5V7.621a1.5 1.5 0 0 0-.44-1.06l-4.12-4.122A1.5 1.5 0 0 0 11.378 2H4.5Zm2.25 8.5a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Zm0 3a.75.75 0 0 0 0 1.5h6.5a.75.75 0 0 0 0-1.5h-6.5Z" clip-rule="evenodd" alt="Aadhar card"/>
        </svg>
        <input type="file" @change="onFileChange" accept="image/*" ref="fileInput" style="display:none" />
        <button @click="showImage">{{ buttonText }}</button>
        <div v-if="imageUrl && isImageVisible">
          <img :src="imageUrl" alt="Uploaded image" @click="showModal(imageUrl)" />
        </div>
      </div>
      <div v-if="isModalVisible" class="modal" @click="hideModal">
        <img :src="modalImageUrl" class="modal-content" @click.stop />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'UploadCard',
    props: {
      buttonText: {
        type: String,
        default: 'Upload Image'
      }
    },
    data() {
      return {
        imageUrl: null,
        isImageVisible: false,
        isModalVisible: false,
        modalImageUrl: ''
      };
    },
    methods: {
      triggerFileInput(){
        this.$refs.fileInput.click();
      },
      onFileChange(event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
          this.imageUrl = URL.createObjectURL(file);
          this.isImageVisible = false; // Hide the image until the button is clicked
        } else {
          this.imageUrl = null;
          this.isImageVisible = false;
          alert('Please select a valid image file.');
        }
      },
      showImage() {
        this.isImageVisible = true;
      },
      showModal(url) {
        this.modalImageUrl = url;
        this.isModalVisible = true;
      },
      hideModal() {
        this.isModalVisible = false;
        this.modalImageUrl = '';
      }
    }
  }
  </script>
  
  <style scoped>
  .card {
    width: 250px;
    margin: 10px;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    text-align: center;
    cursor: pointer;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  button {
    background-color: #4244b9;
    color: white;
    border: none;
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 20px;
  }
  
  button:hover {
    background-color: #38369a;
  }
  
  img {
    margin-top: 20px;
    max-width: 100px;
    height: 100px;
    cursor: pointer;
  }
  
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
  
  .modal-content {
    max-width: 90%;
    max-height: 90%;
  }
  </style>