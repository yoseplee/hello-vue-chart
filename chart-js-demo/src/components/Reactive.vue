<script>
//Import Bar and mixins class from the vue-chartjs wrapper
import { Bubble, mixins } from 'vue-chartjs'

//Getting the reactiveProp mixin from the mixins module.
const { reactiveProp } = mixins
export default {
    extends: Bubble,
    mixins: [reactiveProp],
    data() {
        return {
            //Chart.js options that control the appearance of the chart
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        },
                        gridLines: {
                            display: true
                        }
                    }],
                    xAxes: [{
                        gridLines: {
                            display: true
                        }
                    }]
                },
                legend: {
                    display: true
                },
                responsive: true,
                maintainAsepectRatio: false
            }
        }
    },
    mounted() {
        //this.chartData is created in the mixin and contains all the data needed to build chart.
        this.renderChart(this.chartData, this.options)
    }
}
</script>