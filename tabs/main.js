Vue.component('tabs', {
    template: `
        <div>

            <div class="tabs">
                <ul>
                  <li v-for="tab in tabs" :class="{'is-active': tab.isActive}">  
                   <a href="#" @click="selectedTab(tab)"> {{tab.name}}  </a> 
                  </li>
                </ul>
            </div>

            <div class="tabs-detail"> 
                <slot></slot>
            </div>
            
        </div>

    `,

    data() {

        return {
            tabs:[],
        };

    },

    created() {
        this.tabs = this.$children;
    },

    methods: {
        selectedTab(selectedTab) {

            this.tabs.forEach(tab => {/* laço vai rodar e os que forem == tab name ira receber true e os demais false */

                tab.isActive = tab.name == selectedTab.name
               /*  alert('porra') */
            });

            /* quando cliclar vai chamar a funçao e deixar todas posiçoes falsas
            this.tabs.forEach(tab => {
                tab.selected = false;
            });
            selectedTab.selected = true;  e aqui recebe o true */
        }
    },

    /* mounted() {
        console.log(this.$children); retorna quantidade de filhos dentro do component
    } */



});

/* populando o componet atraves deste outro component */
Vue.component('tab', {

    props: {
        name: { requires: true},
        selected: {default: false}
    },

    data() {
        return {
            isActive:false
        }
    },

    mounted() {
        this.isActive = this.selected;
    },

    template:`

        <div v-show="isActive"> 
            <slot></slot>
        </div>

    `,


    
});

new Vue ({
    el:'#root',
})