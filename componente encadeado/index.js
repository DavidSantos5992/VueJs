Vue.component('lista-tarefas', {
    template: '<div><tarefa v-for="tarefa in tarefas"> {{tarefa.descricao}} <tarefa></div>',

    data() {
        return {
            tarefas:[
                {descricao: 'testanto componentes encadeados'},
                {descricao: 'testanto componentes encadeados'},
                {descricao: 'testanto componentes encadeados'},
            ]
        }
    }
});


Vue.component('tarefa', {
    template: '<p> texto padrão aqui  <slot></slot> </p>',
});

new Vue({
    el: '#app'
})
