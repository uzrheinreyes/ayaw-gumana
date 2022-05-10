<template>
    <div class="create">
        <img :src="logo" class="logo">
        <h1 class="title">Create Blog</h1>
        <form @submit.prevent = handleSubmitForm>
        <div class="form-group">
            <label for="file" class="image">Choose a photo +</label><br>
            <input type="file" id="file" accept="image/*"><br>

            <label for="title" class="mt-4">Title</label>
            <input type="text" name="title" id="title" class="form-control" v-model="blog.title" required>

            <label for="description">Description</label>
            <textarea name="description" id="description" class="form-control" v-model="blog.desc" required></textarea>

            <label for="markdown">Markdown</label>
            <textarea type="text" name="markdown" id="markdown" class="form-control" v-model="blog.mkdown" required></textarea>
        </div>
        </form>
        <a href="/" class="btn btn-secondary mt-4">Cancel</a>
        <button type="submit" class="btn btn-primary mt-4">Save</button>
    </div>
</template>

<script>
import axios from 'axios';
export default ({
    data() {
        return {
            blog: {
                title : '',
                desc  : '',
                mkdown: ''
            },
            logo: require('../assets/odyssey-logo.png')
        }
    },
    methods: {
        handleSubmitForm() {
            let apiURL = 'http://localhost:4000/api/create-blog'

            axios.post(apiURL, this.blog).then(() => {
                this.$router.push('/view')
                this.blog = {
                    title : '',
                    desc  : '',
                    mkdown: ''
                }
            }).catch(error => {
                console.log(error)
            });
        }
    }
})
</script>


<style scoped>
    .logo {
        position: absolute;
        z-index: -1;
        width: 700px;
        margin: 50px 400px;
    }

    .create {
        max-width: 800px;
        margin: 100px auto;
    }

    input[type="file"] {
        display: none;
    }

    .image {
        color: white;
        height: 40px;
        width: 150px;
        background-color: rgb(212, 212, 86);
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto;
        border-radius: 6px;
        cursor: pointer;
        position: absolute;
        margin-top: 20px;
    }
</style>