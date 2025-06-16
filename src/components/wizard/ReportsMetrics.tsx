
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { TrendingUp, MessageSquare, Clock, ThumbsUp, Users, Target } from 'lucide-react';

interface ReportsMetricsProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const ReportsMetrics: React.FC<ReportsMetricsProps> = ({ data, updateData }) => {
  const questionsData = [
    { name: 'Ene', preguntas: 145 },
    { name: 'Feb', preguntas: 189 },
    { name: 'Mar', preguntas: 234 },
    { name: 'Abr', preguntas: 278 },
    { name: 'May', preguntas: 312 },
    { name: 'Jun', preguntas: 298 }
  ];

  const topicsData = [
    { name: 'Dosis y Aplicación', value: 35, color: '#8B5CF6' },
    { name: 'Presentaciones', value: 28, color: '#EC4899' },
    { name: 'Contraindicaciones', value: 20, color: '#3B82F6' },
    { name: 'Efectos Secundarios', value: 12, color: '#10B981' },
    { name: 'Otros', value: 5, color: '#F59E0B' }
  ];

  const timeData = [
    { hora: '6:00', consultas: 12 },
    { hora: '8:00', consultas: 35 },
    { hora: '10:00', consultas: 58 },
    { hora: '12:00', consultas: 72 },
    { hora: '14:00', consultas: 89 },
    { hora: '16:00', consultas: 95 },
    { hora: '18:00', consultas: 76 },
    { hora: '20:00', consultas: 45 },
    { hora: '22:00', consultas: 23 }
  ];

  const topQuestions = [
    { question: '¿Cuál es la dosis recomendada para cachorros?', count: 45 },
    { question: '¿Se puede combinar con otros medicamentos?', count: 38 },
    { question: '¿Cuánto tiempo dura el tratamiento?', count: 32 },
    { question: '¿Hay efectos secundarios conocidos?', count: 28 },
    { question: '¿Se puede usar en gatos gestantes?', count: 24 }
  ];

  const metrics = [
    { icon: MessageSquare, label: 'Preguntas Respondidas', value: '2,847', trend: '+23%', color: 'text-blue-600' },
    { icon: Users, label: 'Clínicas Activas', value: '12', trend: '+4', color: 'text-green-600' },
    { icon: ThumbsUp, label: 'Satisfacción', value: '94%', trend: '+2%', color: 'text-purple-600' },
    { icon: Target, label: 'Conversión', value: '67%', trend: '+12%', color: 'text-pink-600' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <TrendingUp className="w-16 h-16 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Métricas de uso de tu marca
        </h2>
        <p className="text-gray-600">
          Ve cómo se está usando tu conocimiento en los agentes activos
        </p>
      </div>

      {/* Métricas principales */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {metrics.map((metric, index) => (
          <Card key={index}>
            <CardContent className="p-4">
              <div className="flex items-center justify-between mb-2">
                <metric.icon className={`w-5 h-5 ${metric.color}`} />
                <Badge variant="outline" className="text-green-600 border-green-300">
                  {metric.trend}
                </Badge>
              </div>
              <div className="text-2xl font-bold text-gray-800 mb-1">
                {metric.value}
              </div>
              <div className="text-sm text-gray-600">
                {metric.label}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Gráfico de preguntas por mes */}
        <Card>
          <CardHeader>
            <CardTitle>Preguntas sobre tu marca por mes</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={questionsData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="preguntas" fill="url(#gradient1)" />
                <defs>
                  <linearGradient id="gradient1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#EC4899" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Temas más consultados */}
        <Card>
          <CardHeader>
            <CardTitle>Temas más consultados</CardTitle>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={topicsData}
                  cx="50%"
                  cy="50%"
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                >
                  {topicsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Horarios de mayor tráfico */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            Horarios con más consultas
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={timeData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="hora" />
              <YAxis />
              <Tooltip />
              <Line 
                type="monotone" 
                dataKey="consultas" 
                stroke="url(#gradient2)" 
                strokeWidth={3}
                dot={{ fill: '#8B5CF6', strokeWidth: 2, r: 4 }}
              />
              <defs>
                <linearGradient id="gradient2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="100%" stopColor="#EC4899" />
                </linearGradient>
              </defs>
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Preguntas más frecuentes */}
      <Card>
        <CardHeader>
          <CardTitle>Preguntas más frecuentes sobre tus productos</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topQuestions.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <p className="font-medium text-gray-800">{item.question}</p>
                </div>
                <div className="flex items-center gap-3 ml-4">
                  <Badge variant="outline">{item.count} veces</Badge>
                  <div className="w-16">
                    <Progress value={(item.count / 45) * 100} className="h-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Resumen de satisfacción */}
      <Card className="border-green-200 bg-green-50">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <ThumbsUp className="w-8 h-8 text-green-600" />
            <div>
              <h3 className="text-lg font-semibold text-green-800">
                Excelente rendimiento de tu marca
              </h3>
              <p className="text-green-700">
                Los veterinarios están muy satisfechos con la información de tus productos. 
                94% de satisfacción promedio en las consultas.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
