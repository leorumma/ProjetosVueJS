<template>

    <div class="taskGrid">
        <template v-if="tasks.length" class="task">
            <task v-for="task in tasks" :key="task.name" :task="task" ></task>
        </template>
        <p v-else class="no-task"> nenhuma tarefa! bora produzir!!</p>
    </div>

</template>

<script>
    import Task from "./Task";
    export default {
        components:{Task},
        props: {
            tasks: {type: Array, require: true}
        }
    }

</script>

<style>
    .taskGrid{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
    .taskGrid .task{
        margin: 10px;
    }

    .no-task {
        color: #AAA;
        font-size: 1.7rem;
    }
</style>