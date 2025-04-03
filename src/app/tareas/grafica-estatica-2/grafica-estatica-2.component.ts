import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

// Definir la interfaz para los datos
interface CountryData {
  country: string;
  visits: number;
  pareto?: number; // propiedad opcional
}

@Component({
  selector: 'app-grafica-estatica-2',
  standalone: true,
  templateUrl: './grafica-estatica-2.component.html',
  styleUrls: ['./grafica-estatica-2.component.css']
})
export class GraficaEstatica2Component implements OnInit, AfterViewInit {

  constructor() { }

  ngOnInit(): void { }

  ngAfterViewInit(): void {
    // Inicialización de gráfico
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(am5xy.XYChart.new(root, {
      panX: false,
      panY: false,
      wheelX: "panX",
      wheelY: "zoomX",
      paddingLeft: 0,
      paddingRight: 0,
      layout: root.verticalLayout
    }));

    let colors = chart.get("colors");

    // Datos del gráfico
    let data: CountryData[] = [{
      country: "US",
      visits: 725
    }, {
      country: "UK",
      visits: 625
    }, {
      country: "China",
      visits: 602
    }, {
      country: "Japan",
      visits: 509
    }, {
      country: "Germany",
      visits: 322
    }, {
      country: "France",
      visits: 214
    }, {
      country: "India",
      visits: 204
    }, {
      country: "Spain",
      visits: 198
    }, {
      country: "Netherlands",
      visits: 165
    }, {
      country: "South Korea",
      visits: 93
    }, {
      country: "Canada",
      visits: 41
    }];

    // Preparar datos para Pareto
    prepareParetoData();

    // Función para calcular Pareto
    function prepareParetoData() {
      let total = 0;

      for (var i = 0; i < data.length; i++) {
        let value = data[i].visits;
        total += value;
      }

      let sum = 0;
      for (var i = 0; i < data.length; i++) {
        let value = data[i].visits;
        sum += value;
        data[i].pareto = (sum / total) * 100; // Asignar el valor a la propiedad 'pareto'
      }
    }

    // Crear ejes
    let xRenderer = am5xy.AxisRendererX.new(root, {
      minGridDistance: 85,
      minorGridEnabled: true
    });

    let xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
      categoryField: "country",
      renderer: xRenderer
    }));

    xRenderer.grid.template.setAll({
      location: 1
    });

    xRenderer.labels.template.setAll({
      paddingTop: 20
    });

    xAxis.data.setAll(data);

    let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: am5xy.AxisRendererY.new(root, {
        strokeOpacity: 0.1
      })
    }));

    let paretoAxisRenderer = am5xy.AxisRendererY.new(root, { opposite: true });
    let paretoAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
      renderer: paretoAxisRenderer,
      min: 0,
      max: 100,
      strictMinMax: true
    }));

    paretoAxisRenderer.grid.template.set("forceHidden", true);
    paretoAxis.set("numberFormat", "#'%");

    // Crear series
    let series = chart.series.push(am5xy.ColumnSeries.new(root, {
      xAxis: xAxis,
      yAxis: yAxis,
      valueYField: "visits",
      categoryXField: "country"
    }));

    series.columns.template.setAll({
      tooltipText: "{categoryX}: {valueY}",
      tooltipY: 0,
      strokeOpacity: 0,
      cornerRadiusTL: 6,
      cornerRadiusTR: 6
    });

    series.columns.template.adapters.add("fill", function (fill, target) {
      // Verificar que target y target.dataItem están definidos
      if (!target || !target.dataItem) {
        return fill;  // Retorna el color por defecto si no hay datos
      }
    
      // Obtener el índice del dataItem
      const index = series.dataItems.indexOf(target.dataItem);
    
      // Asegúrate de que el índice sea válido y devolver el color
      const colors = chart?.get("colors");
      return colors ? colors.getIndex(index) : fill;
    });
    
    

    // Serie Pareto
    let paretoSeries = chart.series.push(am5xy.LineSeries.new(root, {
      xAxis: xAxis,
      yAxis: paretoAxis,
      valueYField: "pareto",
      categoryXField: "country",
      stroke: root.interfaceColors.get("alternativeBackground"),
      maskBullets: false
    }));

    paretoSeries.bullets.push(function () {
      return am5.Bullet.new(root, {
        locationY: 1,
        sprite: am5.Circle.new(root, {
          radius: 5,
          fill: series.get("fill"),
          stroke: root.interfaceColors.get("alternativeBackground")
        })
      });
    });

    series.data.setAll(data);
    paretoSeries.data.setAll(data);

    series.appear();
    chart.appear(1000, 100);
  }
}