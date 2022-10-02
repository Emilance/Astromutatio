
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from "recharts";
import styles from '../styles/Curve.module.css'

export default function RenderLineChart({data, title, subtitle}) {
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>

     <ResponsiveContainer width="100%" height={400}>


    <LineChart
      
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 3,
        bottom: 5
      }}
    >
      <CartesianGrid strokeDasharray="3 3" horizontal="true" vertical="true" />
      <XAxis dataKey="name" />
      <YAxis dataKey="brightness" />
      <Tooltip />
      <Legend />
    
      <Line type="monotone" dataKey="brightness" stroke="#82ca9d" strokeWidth="3" activeDot={{r : 8}} />
    </LineChart>
     </ResponsiveContainer>
    </div>

  );
}
