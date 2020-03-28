<template>
  <div class="cell" @click="getDetail">
         <h2> <span v-show="index!=null">{{index+1}}.</span>{{data.title}}</h2>
         <p>{{data.des}}</p>
  </div>
</template>

<script>
export default {
  name: 'cell',
  props: {
    data:{
		type:Object,
		required:true,
		default:function(){
			return {}
		}
	},
	index:{
		type:Number,
		default:null
	},
	apiName:{
		type:String
	}
  },
  methods:{
		getDetail(){
			if(this.apiName){
			this.$router.push(`/detail/${this.data._id}?apiName=${this.apiName}`).catch(err => {err})
		}
	}
  }
}
</script>

<style scoped>
 .cell{ color:#494d4d; padding:0.2rem 0; border-bottom:1px dashed #ccc;text-align: left;}
 .cell h2{max-height:0.9rem; font-size:0.33rem; overflow:hidden;}
 .cell p{max-height:1.8rem; margin-top:0.05rem;overflow:hidden;}
 .cell{clear: both;}

</style>