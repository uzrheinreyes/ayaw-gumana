<template>
    <div class="read">
         <div class="content">
            <h2 class="title">Your blogs</h2>
            <a href="/create-blog" class="btn btn-success mt-4">New Blog +</a>
            <div class="card mt-4">
                <div class="card-body">
                    <div id="card-content">
                        <div>
                            <img :src="pic1" class="pic1">
                        </div>
                        <div class="mt-1">
                            <h4 class="card-title">{{ blog.title }}</h4>
                            <h5 class="card-subtitle">{{ blog.desc }}</h5>
                            <h5 class="card-subtitle">{{ blog.mkdown }}</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            blog: []
        }
    },
    created() {
        let apiURL = 'http://localhost:4000/api/';
        axios.get(apiURL).then((res) => {
            this.blog = res.data;
        }).catch(error => {
            console.log(error)
        })
    },
    methods: {
        deleteBlog(id) {
            let apiURL = 'http://localhost:4000/api/delete-blog/$(id)';
            let indexOfArrayItem = this.blog.findIndex(i => i._id === id);
            if (window.confirm("Confirm Delete")) {
                axios.delete(apiURL).then(() => {
                    this.blog.splice(indexOfArrayItem, 1);
                }).catch(error => {
                    console.log(error)
                })
            }
        }
    }
}
</script>

<style scoped>

</style>