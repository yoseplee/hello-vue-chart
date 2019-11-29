<template>
    <section class="container">
        <h1>Demo examples of vue-chartjs</h1>
        <div class="columns">
            <div class="column">
                <h3>Line Chart</h3> 
                <line-chart></line-chart>
            </div>
            <div class="column">
                <h3>Bar Chart</h3>
            </div>
        </div>
        <div class="columns">
            <div class="column">
                <h3>Bubble Chart</h3>   
                <Bubble-chart></Bubble-chart>
            </div>
            <div class="column">
                <h3>Reactivity - Live update upon change in datasets</h3>
                <reactive :chart-data="datacollection"></reactive>
                <button class="button is-primary" @click="fillData()">Randomize</button>
            </div>
        </div>
    </section>
</template>

<script>
import LineChart from '@/components/LineChart'
import BubbleChart from '@/components/BubbleChart'
import Reactive from '@/components/Reactive'
export default {
    name: 'VueChartJS',
    components: {
        LineChart, BubbleChart, Reactive
    },
    data() {
        return {
            datacollection: null
        }
    },
    created() {
        this.fillData()
    },
    methods: {
        fillData() {
            this.datacollection = {
                labels: ['Data'],
                datasets: [
                    {
                        label: 'Data One',
                        backgroundColor: '#f87979',
                        pointBackgroundColor: 'white',
                        borderWidth: 1,
                        pointBorderColor: '#249EBF',
                        //Data to be represented on y-axis
                        data: [
                            {
                                x: 50,
                                y: 50,
                                r: 10
                            },
                            {
                                x: 60,
                                y: 30,
                                r: 20
                            },
                            {
                                x: 40,
                                y: 60,
                                r: 25
                            },
                            {
                                x: 80,
                                y: 80,
                                r: 50
                            },
                            {
                                x: 20,
                                y: 30,
                                r: 25
                            },
                            {
                                x: 0,
                                y: this.getRandomInt(),
                                r: 5
                            },
                        ]
                    }
                ]
            }
        },
        getRandomInt() {
            return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
</script>