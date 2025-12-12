import React from 'react';
import { 
  PieChart, Pie, Cell, ResponsiveContainer, Tooltip as ReTooltip, Legend,
  LineChart, Line, XAxis, YAxis, CartesianGrid,
  BarChart, Bar,
  RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar
} from 'recharts';
import { CHART_DATA } from '../../constants';
import { ThemeColors } from '../../types';

interface ChartProps {
  colors: ThemeColors;
  isDark: boolean;
}

const CustomTooltip = ({ active, payload, label, colors }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className={`${colors.cardBg} ${colors.border} border p-2 shadow-lg rounded`}>
        <p className={`${colors.text} font-bold`}>{`${label ? label + ':' : ''} ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

export const ModePieChart: React.FC<ChartProps> = ({ colors, isDark }) => {
  const COLORS = [isDark ? '#8884d8' : '#0088FE', isDark ? '#82ca9d' : '#00C49F'];

  return (
    <ResponsiveContainer width="100%" height={200}>
      <PieChart>
        <Pie
          data={CHART_DATA.submissionModes}
          cx="50%"
          cy="50%"
          innerRadius={50}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {CHART_DATA.submissionModes.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <ReTooltip content={<CustomTooltip colors={colors} />} />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export const TimelineChart: React.FC<ChartProps> = ({ colors }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <LineChart data={CHART_DATA.timeline}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.text} opacity={0.2} />
        <XAxis dataKey="year" stroke={colors.text} />
        <YAxis stroke={colors.text} />
        <ReTooltip content={<CustomTooltip colors={colors} />} />
        <Legend />
        <Line type="monotone" dataKey="class2" stroke="#8884d8" activeDot={{ r: 8 }} name="Class II" />
        <Line type="monotone" dataKey="class3" stroke="#82ca9d" name="Class III" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export const ProcessingBarChart: React.FC<ChartProps> = ({ colors }) => {
  return (
    <ResponsiveContainer width="100%" height={200}>
      <BarChart data={CHART_DATA.processingTime}>
        <CartesianGrid strokeDasharray="3 3" stroke={colors.text} opacity={0.2} />
        <XAxis dataKey="mode" stroke={colors.text} />
        <YAxis stroke={colors.text} />
        <ReTooltip content={<CustomTooltip colors={colors} />} />
        <Bar dataKey="days" fill="#8884d8" radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export const ErrorRadarChart: React.FC<ChartProps> = ({ colors }) => {
  return (
    <ResponsiveContainer width="100%" height={220}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={CHART_DATA.errors}>
        <PolarGrid stroke={colors.text} opacity={0.2} />
        <PolarAngleAxis dataKey="subject" tick={{ fill: colors.text, fontSize: 10 }} />
        <PolarRadiusAxis angle={30} domain={[0, 150]} tick={false} />
        <Radar
          name="Errors"
          dataKey="A"
          stroke="#8884d8"
          fill="#8884d8"
          fillOpacity={0.6}
        />
        <ReTooltip content={<CustomTooltip colors={colors} />} />
      </RadarChart>
    </ResponsiveContainer>
  );
};