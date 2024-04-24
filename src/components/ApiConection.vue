<template>
    <h2>Aske about anything you want, only yes/no Questions</h2>
    <img :src="image" alt="bg"/>
    <div class="bg-dark">
        <div class="indesicion-container">
            <input type="text" placeholder="ask mother fucker" v-model="question"/>
            <p>Please use ? at the end</p>
            <div v-if="isValidQuestion">
                <h2>{{ question }}</h2>
                <h1>{{ answer }}</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            question:'',
            answer:null,
            image:'https://via.placeholder.com/250',
            isValidQuestion:false
        }
    },
    methods:{
        async getAnswer(){
            this.answer='Loading bro';
            const {answer,image}=await (await fetch('https://yesno.wtf/api')).json();
            this.answer=answer;
            this.image=image;
        }
    },
    watch:{
        question(value,olValue){
            if(value.includes('?')){
                this.isValidQuestion=true;
                this.getAnswer();
            }else{
                this.isValidQuestion=false;
                this.image='https://via.placeholder.com/250';
            }
        }
    }
}
</script>

<style>
    img, .bg-dark {
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
    }

    .bg-dark {
        background-color: rgba(0, 0, 0, 0.4);
    }

    .indecision-container {
        position: relative;
        z-index: 99;
    }
    
    input {
        width: 250px;
        padding: 10px 15px;
        border-radius: 5px;
        border: none;
    }
    input:focus {
        outline: none;
    }

    p {
        color: white;
        font-size: 20px;
        margin-top: 0px;
    }

    h1, h2 {
        color: white;
    }
    
    h2 {
        margin-top: 150px;
    }
</style>