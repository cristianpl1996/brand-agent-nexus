
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Edit3, Building, FileText, Heart, TrendingUp, Users, Globe } from 'lucide-react';

interface FinalSummaryProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const FinalSummary: React.FC<FinalSummaryProps> = ({ data, updateData }) => {
  const summaryData = {
    brand: {
      name: data.name || 'VetNutrition Pro',
      type: 'Alimento',
      logo: '✅ Configurado'
    },
    content: {
      documents: 3,
      website: 1,
      manuals: 2,
      faq: 1
    },
    clinics: {
      active: 12,
      countries: 4,
      totalInteractions: 2847
    },
    sponsorship: {
      budget: 500,
      regions: 3,
      estimatedReach: 89
    },
    metrics: {
      satisfaction: 94,
      growth: 23,
      questions: 2847
    }
  };

  const quickActions = [
    {
      icon: Edit3,
      title: 'Editar Contenido',
      description: 'Actualizar información de productos',
      action: 'edit-content'
    },
    {
      icon: Users,
      title: 'Gestionar Clínicas',
      description: 'Ver y contactar clínicas activas',
      action: 'manage-clinics'
    },
    {
      icon: Heart,
      title: 'Ajustar Patrocinio',
      description: 'Modificar presupuesto y regiones',
      action: 'adjust-sponsorship'
    },
    {
      icon: TrendingUp,
      title: 'Ver Reportes',
      description: 'Analizar métricas detalladas',
      action: 'view-reports'
    }
  ];

  const achievements = [
    { icon: '🎯', title: 'Marca Configurada', description: 'Perfil completo y activo' },
    { icon: '📚', title: 'Contenido Subido', description: '7 fuentes de información' },
    { icon: '🏥', title: 'Clínicas Activas', description: '12 clínicas usando tu marca' },
    { icon: '🌎', title: 'Presencia Global', description: 'Activo en 4 países' },
    { icon: '💡', title: 'IA Entrenada', description: 'Agentes conocen tus productos' },
    { icon: '📈', title: 'Crecimiento', description: '+23% en interacciones' }
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <CheckCircle className="w-16 h-16 mx-auto mb-4 text-green-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          ¡Tu presencia está activa!
        </h2>
        <p className="text-gray-600">
          Tu marca ya está funcionando en agentes de clínicas veterinarias
        </p>
      </div>

      {/* Resumen principal */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card className="border-purple-200 bg-purple-50">
          <CardContent className="p-4 text-center">
            <Building className="w-8 h-8 mx-auto mb-2 text-purple-600" />
            <div className="text-2xl font-bold text-purple-800">{summaryData.clinics.active}</div>
            <div className="text-sm text-purple-600">Clínicas Activas</div>
          </CardContent>
        </Card>
        
        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4 text-center">
            <Globe className="w-8 h-8 mx-auto mb-2 text-blue-600" />
            <div className="text-2xl font-bold text-blue-800">{summaryData.clinics.countries}</div>
            <div className="text-sm text-blue-600">Países</div>
          </CardContent>
        </Card>
        
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4 text-center">
            <TrendingUp className="w-8 h-8 mx-auto mb-2 text-green-600" />
            <div className="text-2xl font-bold text-green-800">{summaryData.metrics.questions}</div>
            <div className="text-sm text-green-600">Consultas</div>
          </CardContent>
        </Card>
        
        <Card className="border-pink-200 bg-pink-50">
          <CardContent className="p-4 text-center">
            <Heart className="w-8 h-8 mx-auto mb-2 text-pink-600" />
            <div className="text-2xl font-bold text-pink-800">${summaryData.sponsorship.budget}</div>
            <div className="text-sm text-pink-600">Patrocinio Mensual</div>
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Estado actual */}
        <Card>
          <CardHeader>
            <CardTitle>Estado de tu Configuración</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Marca Registrada</span>
              </div>
              <Badge className="bg-green-600 text-white">{summaryData.brand.name}</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Contenido Cargado</span>
              </div>
              <Badge className="bg-green-600 text-white">7 fuentes</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Patrocinio Activo</span>
              </div>
              <Badge className="bg-green-600 text-white">${summaryData.sponsorship.budget}/mes</Badge>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span className="font-medium">Métricas Activas</span>
              </div>
              <Badge className="bg-green-600 text-white">{summaryData.metrics.satisfaction}% satisfacción</Badge>
            </div>
          </CardContent>
        </Card>

        {/* Acciones rápidas */}
        <Card>
          <CardHeader>
            <CardTitle>Acciones Rápidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {quickActions.map((action, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="w-full justify-start h-auto p-4 hover:bg-purple-50 hover:border-purple-300"
                >
                  <action.icon className="w-5 h-5 mr-3 text-purple-600" />
                  <div className="text-left">
                    <div className="font-medium">{action.title}</div>
                    <div className="text-sm text-gray-600">{action.description}</div>
                  </div>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Logros */}
      <Card className="border-yellow-200 bg-yellow-50">
        <CardHeader>
          <CardTitle className="text-yellow-800">🏆 Logros Desbloqueados</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3 p-3 bg-white rounded-lg">
                <span className="text-2xl">{achievement.icon}</span>
                <div>
                  <div className="font-medium text-yellow-800">{achievement.title}</div>
                  <div className="text-sm text-yellow-700">{achievement.description}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Próximos pasos */}
      <Card className="border-purple-200 bg-gradient-to-r from-purple-50 to-pink-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-purple-800 mb-4">
            ¡Tu marca ya está trabajando para ti!
          </h3>
          <p className="text-purple-700 mb-6">
            Los agentes de clínicas veterinarias ya pueden consultar información sobre tus productos 
            y hacer recomendaciones informadas a sus pacientes.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              Ver Dashboard Completo
            </Button>
            <Button variant="outline">
              Descargar Reporte
            </Button>
            <Button variant="outline">
              Invitar Clínicas
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
