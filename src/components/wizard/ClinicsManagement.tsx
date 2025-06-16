
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Building, MapPin, Calendar, TrendingUp, ExternalLink, Heart } from 'lucide-react';

interface ClinicsManagementProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const ClinicsManagement: React.FC<ClinicsManagementProps> = ({ data, updateData }) => {
  const clinics = [
    {
      id: 1,
      name: 'Clínica Veterinaria Los Andes',
      city: 'Santiago, Chile',
      country: 'CL',
      activationDate: '2024-01-15',
      usageLevel: 'alto',
      interactions: 245,
      status: 'activo'
    },
    {
      id: 2,
      name: 'VetCare Premium',
      city: 'Lima, Perú',
      country: 'PE',
      activationDate: '2024-02-03',
      usageLevel: 'medio',
      interactions: 128,
      status: 'activo'
    },
    {
      id: 3,
      name: 'Hospital Veterinario San José',
      city: 'Bogotá, Colombia',
      country: 'CO',
      activationDate: '2024-01-28',
      usageLevel: 'bajo',
      interactions: 67,
      status: 'activo'
    },
    {
      id: 4,
      name: 'Clínica Animal Health',
      city: 'Buenos Aires, Argentina',
      country: 'AR',
      activationDate: '2024-03-10',
      usageLevel: 'alto',
      interactions: 198,
      status: 'activo'
    }
  ];

  const getUsageBadge = (level: string) => {
    const colors = {
      alto: 'bg-green-100 text-green-800',
      medio: 'bg-yellow-100 text-yellow-800',
      bajo: 'bg-red-100 text-red-800'
    };
    return colors[level as keyof typeof colors] || colors.bajo;
  };

  const getTrendIcon = (level: string) => {
    return level === 'alto' ? '📈' : level === 'medio' ? '📊' : '📉';
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Building className="w-16 h-16 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Clínicas que han seleccionado tu marca
        </h2>
        <p className="text-gray-600">
          Estas clínicas han activado agentes que incluyen información de tus productos
        </p>
      </div>

      {/* Resumen estadístico */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-1">{clinics.length}</div>
            <div className="text-sm text-gray-600">Clínicas Activas</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-green-600 mb-1">
              {clinics.reduce((sum, clinic) => sum + clinic.interactions, 0)}
            </div>
            <div className="text-sm text-gray-600">Interacciones Totales</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-1">3</div>
            <div className="text-sm text-gray-600">Países</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-4 text-center">
            <div className="text-3xl font-bold text-pink-600 mb-1">89%</div>
            <div className="text-sm text-gray-600">Satisfacción</div>
          </CardContent>
        </Card>
      </div>

      {/* Lista de clínicas */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Clínicas Vinculadas</h3>
        
        {clinics.map((clinic) => (
          <Card key={clinic.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{clinic.name}</h4>
                    <Badge className={getUsageBadge(clinic.usageLevel)}>
                      {clinic.usageLevel.charAt(0).toUpperCase() + clinic.usageLevel.slice(1)} uso
                    </Badge>
                  </div>
                  
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {clinic.city}
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      Activo desde {new Date(clinic.activationDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="w-4 h-4" />
                      {clinic.interactions} interacciones
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2">
                    <span className="text-2xl">{getTrendIcon(clinic.usageLevel)}</span>
                    <span className="text-sm text-gray-600">
                      {clinic.usageLevel === 'alto' ? 'Alto engagement con tus productos' :
                       clinic.usageLevel === 'medio' ? 'Uso moderado de tu contenido' :
                       'Potencial de crecimiento'}
                    </span>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-6">
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <ExternalLink className="w-4 h-4" />
                    Ver Interacciones
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                  >
                    <Heart className="w-4 h-4" />
                    Patrocinar
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to action */}
      <Card className="border-purple-200 bg-purple-50">
        <CardContent className="p-6 text-center">
          <h3 className="text-lg font-semibold text-purple-800 mb-2">
            ¿Quieres llegar a más clínicas?
          </h3>
          <p className="text-purple-700 mb-4">
            Patrocina nuevas clínicas para que incluyan tu marca en sus agentes
          </p>
          <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
            Configurar Patrocinio
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};
