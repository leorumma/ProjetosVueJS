new Vue({
    el: '#app',
    data:{
        playerLife: 100,
        mobLife: 100,
        running: false,
        logs: []
    },
    computed: {
        hasResult(){
            return this.playerLife == 0 || this.mobLife == 0
        }
    },
    methods: {
        startGame(){
            this.running = true,
            this.playerLife = 100
            this.mobLife = 100
        },
        attack(especial){
            this.hurt('mobLife',5,10, false, 'Jogador', 'Monstro', 'player')
            if (this.mobLife > 0){
                this.hurt('playerLife',7,12, especial,'monstro','Jogador','monster')

            }

        },
        hurt(atr,min,max,especial, source, target, cls){
            const plus  = especial ? 5 : 0 
            const hurt  = this.getRandom(min + plus, max + plus)
            this[atr] = Math.max(this.playerLife - hurt, 0)
            this.registreLog(`${source} atingiu ${target} com ${hurt}.`, cls)

        },
        getRandom(min,max){
            const value = Math.random() * (max - min) + min
            return Math.round(value)
        },
        heal(min,max){
            const heal = this.getRandom(min,max)
            this.playerLife = Math.min(this.playerLife + heal, 100)
            this.registreLog(`Jogador ganhou energia no valor de ${heal}.`,'player')
        },
        healAndHurt(){
            this.heal(10,15)
            this.hurt('playerLife',7,12,false, 'Monstro', 'Jogador', 'monster')
        },
        registreLog(text, cls){
            this.logs.unshift({text, cls})
        },
    },
    watch: {
        hasResult(value){
            if (value){
                this.running = false
            }
        }
        
    },
})