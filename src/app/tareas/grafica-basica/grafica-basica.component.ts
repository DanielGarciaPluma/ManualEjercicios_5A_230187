import { Component, Inject, NgZone, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

// amCharts imports
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themes_Animated from '@amcharts/amcharts5/themes/Animated';

@Component({
  selector: 'app-grafica-basica',
  templateUrl: './grafica-basica.component.html',
  styleUrl: './grafica-basica.component.css'
})
export class GraficaBasicaComponent {
  private root!: am5.Root;
  constructor(@Inject(PLATFORM_ID) private platformId: Object, private zone: NgZone) {}

  // Ejecutar solo en el navegador
  browserOnly(f: () => void) {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        f();
      });
    }
  }

  ngAfterViewInit() {
    this.browserOnly(() => {
      let root = am5.Root.new("chartdiv1");
      root.setThemes([am5themes_Animated.new(root)]);

      let chart = root.container.children.push(
        am5xy.XYChart.new(root, {
          panY: false,
          layout: root.verticalLayout
        })
      );

      // **Datos actualizados sobre programación**
      let data = [
        { category: "JavaScript", value1: 80, value2: 95 },
        { category: "Python", value1: 90, value2: 85 },
        { category: "Java", value1: 70, value2: 75 },
        { category: "C#", value1: 65, value2: 70 },
        { category: "PHP", value1: 50, value2: 55 }
      ];

      // Crear eje Y
      let yAxis = chart.yAxes.push(
        am5xy.ValueAxis.new(root, {
          renderer: am5xy.AxisRendererY.new(root, {})
        })
      );

      // Crear eje X
      let xAxis = chart.xAxes.push(
        am5xy.CategoryAxis.new(root, {
          renderer: am5xy.AxisRendererX.new(root, {}),
          categoryField: "category"
        })
      );
      xAxis.data.setAll(data);

      // **Serie 1 - Popularidad en 2023**
      let series1 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Popularidad 2023",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value1",
          categoryXField: "category",
          fill: am5.color(0x4CAF50), // Verde oscuro
          stroke: am5.color(0x388E3C) // Borde verde más oscuro
        })
      );
      series1.data.setAll(data);

      // **Serie 2 - Popularidad en 2024**
      let series2 = chart.series.push(
        am5xy.ColumnSeries.new(root, {
          name: "Popularidad 2024",
          xAxis: xAxis,
          yAxis: yAxis,
          valueYField: "value2",
          categoryXField: "category",
          fill: am5.color(0x81C784), // Verde más claro
          stroke: am5.color(0x66BB6A) // Borde verde más oscuro
        })
      );
      series2.data.setAll(data);

      // Agregar leyenda
      let legend = chart.children.push(am5.Legend.new(root, {}));
      legend.data.setAll(chart.series.values);

      // Agregar cursor
      chart.set("cursor", am5xy.XYCursor.new(root, {}));

      this.root = root;
    });
  }

  ngOnDestroy() {
    // Limpiar gráfico al destruir el componente
    this.browserOnly(() => {
      if (this.root) {
        this.root.dispose();
      }
    });
  } 
}
