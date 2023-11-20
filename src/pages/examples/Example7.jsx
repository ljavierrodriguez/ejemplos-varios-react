// Importa las bibliotecas necesarias
import React, { useState } from 'react';
import { defaults } from 'chart.js/auto'
import { Pie, Chart as ChartJS, Doughnut, Line } from 'react-chartjs-2';

// Crea el componente de gráfico
const Example7 = (props) => {
    // Define los datos del gráfico
    const [data, setData] = useState({
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
        datasets: [
            {
                label: 'Ventas mensuales',
                data: [12, 19, 3, 5, 2],
                backgroundColor: [
                    'rgba(75,192,192,0.2)',
                    'rgba(75,192,120,0.2)',
                    'rgba(175,192,120,0.2)',
                    'rgba(175,22,120,0.2)',
                    'rgba(175,22,220,0.2)',
                ],
                borderColor: [
                    'rgba(75,192,192,1)',
                    'rgba(75,192,120,1)',
                    'rgba(175,192,120,1)',
                    'rgba(175,22,120,1)',
                    'rgba(175,22,220,1)',
                ],
                borderWidth: 1,
            },
        ],
    })

    // Define las opciones del gráfico
    const [options, setOptions] = useState({
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    })

    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <h2>Gráfico de Ventas Mensuales (Bar)</h2>
                    <ChartJS
                        type={'bar'}
                        options={options}
                        data={data}

                    />
                </div>
                <div className="col-md-6">
                    <h2>Gráfico de Ventas Mensuales (Doughnut)</h2>
                    <Doughnut data={data} options={options} height={800} width={800} />
                </div>
            </div>

            <div className="row">
                <div className="col-md-6">
                    <h2>Gráfico de Ventas Mensuales (Line)</h2>
                    <Line
                        type={'bar'}
                        options={options}
                        data={data}

                    />
                </div>
                <div className="col-md-6">
                    <h2>Gráfico de Ventas Mensuales (Pie)</h2>
                    <Pie data={data} options={options} height={800} width={800} />
                </div>
            </div>
        </div>
    );
};

export default Example7;
