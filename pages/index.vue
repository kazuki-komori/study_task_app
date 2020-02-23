<template>
  <div class="container row">
    <div class="row m-5">
      <div class="col-md">
        <logo />
      </div>
      <div class="col-md mt-5">
        <h1>
          laravel_task_app
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="d-flex mb-5">
        <h1 class="mr-5 bg-warning">
          push this button=>
        </h1>
        <a class="button--green mr-5" href="#" @click="sendApi">send API</a>
        <h3 class="mr-5">
          ADD TASK =>
        </h3>
        <input type="text" v-model="apiValue"/>
      </div>
      <div class="d-flex mb-5">
        <h1 class="mr-5 bg-warning">
          push this button=>
        </h1>
        <a class="button--green mr-5" href="#" @click="getData">Update Tasks</a>
      </div>
      <div class="d-flex mb-5">
        <h1 class="mr-5 bg-warning">
          push this button=>
        </h1>
        <a class="button--green mr-5" href="#" @click="deleteTask(taskId)">send API</a>
        <h3 class="mr-5">
          DELETE TASK ID =>
        </h3>
        <input type="text" v-model="taskId"/>
      </div>
    </div>
    <div class="c-container row p-title">
      <h2>task一覧</h2>
    </div>
    <div class="c-container mb-5">
      <div class="row border-bottom">
        <div class="col-md">id</div>
        <div class="col-md">name</div>
        <div class="col-md">created_at</div>
      </div>
      <div v-for="task in data.tasks" class="row">
        <div class="col-md">
          {{task.id}}
        </div>
        <div class="col-md">
          {{task.name}}
        </div>
        <div class="col-md">
          {{task.created_at}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'


export default {
  data() {
    return{
      apiValue: null,
      taskId: null
    }
  },
  async asyncData({$axios}){
    const response = await $axios.$get('/tasks')
    return{
      data: response
    }
  },
  methods: {
    async sendApi(){
      await this.$axios.$post('/task', {"name": this.apiValue})
      const response = await this.$axios.$get('/tasks')
      this.data = response
    },
    async getData(){
      const response = await this.$axios.$get('/tasks')
      this.data = response
    },
    async deleteTask(id){
      await this.$axios.$delete('/task/' + id)
      const response = await this.$axios.$get('/tasks')
      this.data = response
    }
  },
  components: {
    Logo
  }
}

</script>

<style lang="scss" scoped>
  @import "assets/valu";
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.p-title{
  border-bottom: #47494E 1px solid;
}
.links {
  padding-top: 15px;
}
</style>
