<template>
  <div style="padding:10px">
    <div id="main" class="left"></div>
    <div id="paneL" class="left"></div>
  </div>
</template>
<script>
import api from "@/api/api.js";
// import SplitPane from "vue-splitpane";
import * as echarts from "echarts";
export default {
  name: "index",
  components: {},
  data() {
    return {};
  },
  mounted() {
    this.getData();
    this.getData1();
    window.onresize = () => {
      // 基于准备好的dom，初始化echarts实例
      echarts.init(document.getElementById("paneL")).resize();
      echarts.init(document.getElementById("main")).resize();
    };
  },
  methods: {
    getData1() {
      let chartDom = document.getElementById("paneL");
      let myChart = echarts.init(chartDom);
      let option;
      option = {
        title: {
          text: "图表二",
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            type: "cross",
            label: {
              backgroundColor: "#6a7985",
            },
          },
        },
        legend: {
          data: ["Email", "Union Ads", "Video Ads", "Direct", "Search Engine"],
        },
        toolbox: {
          feature: {
            saveAsImage: {},
          },
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true,
        },
        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          },
        ],
        yAxis: [
          {
            type: "value",
          },
        ],
        series: [
          {
            name: "Email",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [120, 132, 101, 134, 90, 230, 210],
          },
          {
            name: "Union Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [220, 182, 191, 234, 290, 330, 310],
          },
          {
            name: "Video Ads",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [150, 232, 201, 154, 190, 330, 410],
          },
          {
            name: "Direct",
            type: "line",
            stack: "Total",
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [320, 332, 301, 334, 390, 330, 320],
          },
          {
            name: "Search Engine",
            type: "line",
            stack: "Total",
            label: {
              show: true,
              position: "top",
            },
            areaStyle: {},
            emphasis: {
              focus: "series",
            },
            data: [820, 932, 901, 934, 1290, 1330, 1320],
          },
        ],
      };
      option && myChart.setOption(option);
    },
    getData() {
      let chartDom = document.getElementById("main");
      let myChart = echarts.init(chartDom);
      let option;
      api.getline().then((res) => {
        const countries = [
          "Finland",
          "France",
          "Germany",
          "Iceland",
          "Norway",
          "Poland",
          "Russia",
          "United Kingdom",
        ];
        const datasetWithFilters = [];
        const seriesList = [];
        echarts.util.each(countries, function (country) {
          var datasetId = "dataset_" + country;
          datasetWithFilters.push({
            id: datasetId,
            fromDatasetId: "dataset_raw",
            transform: {
              type: "filter",
              config: {
                and: [
                  { dimension: "Year", gte: 1950 },
                  { dimension: "Country", "=": country },
                ],
              },
            },
          });
          seriesList.push({
            type: "line",
            datasetId: datasetId,
            showSymbol: false,
            name: country,
            endLabel: {
              show: true,
              formatter: function (params) {
                return params.value[3] + ": " + params.value[0];
              },
            },
            labelLayout: {
              moveOverlap: "shiftY",
            },
            emphasis: {
              focus: "series",
            },
            encode: {
              x: "Year",
              y: "Income",
              label: ["Country", "Income"],
              itemName: "Year",
              tooltip: ["Income"],
            },
          });
        });
        option = {
          animationDuration: 10000,
          dataset: [
            {
              id: "dataset_raw",
              source: res,
            },
            ...datasetWithFilters,
          ],
          title: {
            text: "图表1",
          },
          tooltip: {
            order: "valueDesc",
            trigger: "axis",
          },
          xAxis: {
            type: "category",
            nameLocation: "middle",
          },
          yAxis: {
            name: "Income",
          },
          grid: {
            right: 140,
          },
          series: seriesList,
        };
        myChart.setOption(option);

        option && myChart.setOption(option);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 使用scss
.index {
  @extend %flex-center-row;
  @extend %unable-select;
  color: $color-primary;
}
.left {
  // padding-left: 10px;
  width: 100%;
  height: 90%;
  background: #fff;
}
</style>