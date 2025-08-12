import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  LinearScale,
  BarElement,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const arrContratosMensais = [
  { mes: 1, contrato: 15, nome: "Janeiro" },
  { mes: 2, contrato: 16, nome: "Feveiro" },
  { mes: 3, contrato: 17, nome: "Março" },
  { mes: 4, contrato: 18, nome: "Abril" },
  { mes: 5, contrato: 19, nome: "Maio" },
  { mes: 6, contrato: 20, nome: "Junho" },
];

const data = {
  labels: arrContratosMensais.map((item) => item.nome),
  datasets: [
    {
      label: "Contratos",
      data: arrContratosMensais,
      backgroundColor: "rgba(133, 204, 229, 0.6)",
      BorderColor: "rgba(0, 19, 23, 0.9)",
      hoverBackgroundColor: "rgba(50, 94, 128, 0.9)",
      hoverBorderColor: "rgba(0, 19, 23, 1.9)",
      parsing: {
        xAxisKey: "mes",
        yAxisKey: "contrato",
      },
    },
  ],
};

const chartOptions = {
  scales: {
    x: {
      type: "category",
      position: "bottom",
    },
    y: {
      beginAtZero: true,
    },
  },
  aspectRadio: 1,
};

console.log(data);

function BarChart() {
  return <Bar data={data} options={chartOptions} />;
}

export default BarChart;
