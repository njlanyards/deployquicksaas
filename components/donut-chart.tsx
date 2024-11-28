import { Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

interface DonutChartProps {
  value: number; 
  label: string;
}

const DonutChart: React.FC<DonutChartProps> = ({ value, label }) => {
  
  let color: string;

  if (value < 5) {
    color = 'red';
  } else if (value >= 5 && value < 8){
    color = 'yellow';
  } else {
    color = 'green';
  }

  const data = {
    datasets: [{
      data: [10-value, value],
      backgroundColor: ['black', color],
      borderColor: ['black', color],
    }]
  }

  const options = {
    responsive: true,
  }


  // const centerTextPlugin = {
  //   id: 'centerText',
  //   afterDraw: (chart: any) => {
  //     const { ctx, width, height } = chart;
  //     ctx.save();
  //     const text = `${value}/10`; // Text or number to display in the center
  //     ctx.font = 'bold 20px Arial';
  //     ctx.fillStyle = 'black';
  //     ctx.textAlign = 'center';
  //     ctx.textBaseline = 'middle';
  //     ctx.fillText(text, width / 2, height / 2);
  //     ctx.restore();
  //   }
  // };

  return (
    <div>
      <h3 className="text-center mt-3 font-bold">{label}</h3>
      <h2 className="text-center"><b>{value}</b>/10</h2>
      <Doughnut
        data = {data}
        options = {options}
        // plugins={[centerTextPlugin]}
      ></Doughnut>
    </div>
  )
}

export default DonutChart;