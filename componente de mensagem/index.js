Vue.component('message', {

    props: ['title', 'body'], /* para a propriedade do html ser lida no vue */

    data() {

        return {
            visible: true
        };/* funçao precisa ter ; */

    },
    
    template: 
    ` 
        <article v-show=" visible " class="message is-link">

            <div class="message-header">

            <p>{{title}}</p>

            <button @click="hideMessage" class="delete" aria-label="delete"></button>

            </div>
            <div class="message-body">
                {{body}}
            </div>

        </article>
    `,

    methods: {
        hideMessage() {
            this.visible = false;
           /*  alert(this.visible) */
        },
    }
})


new Vue ({
    el: '#app',
})