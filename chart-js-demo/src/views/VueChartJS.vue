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
            </div>
        </div>
    </section>
</template>

<script>
import LineChart from '@/components/LineChart'
import BubbleChart from '@/components/BubbleChart'
export default {
    name: 'VueChartJS',
    components: {
        LineChart, BubbleChart
    }
}
</script>