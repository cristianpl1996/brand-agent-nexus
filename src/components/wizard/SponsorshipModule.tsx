
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Badge } from '@/components/ui/badge';
import { Heart, MapPin, Users, DollarSign, Target, Share2, Gift } from 'lucide-react';

interface SponsorshipModuleProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const SponsorshipModule: React.FC<SponsorshipModuleProps> = ({ data, updateData }) => {
  const [sponsorshipBudget, setSponsorshipBudget] = useState([500]);
  const [selectedRegions, setSelectedRegions] = useState<string[]>(['latam']);
  const [targetClinics, setTargetClinics] = useState([12]);

  const regions = [
    { id: 'latam', name: 'Latinoamérica', flag: '🌎', clinics: 234 },
    { id: 'mexico', name: 'México', flag: '🇲🇽', clinics: 89 },
    { id: 'colombia', name: 'Colombia', flag: '🇨🇴', clinics: 67 },
    { id: 'chile', name: 'Chile', flag: '🇨🇱', clinics: 45 },
    { id: 'argentina', name: 'Argentina', flag: '🇦🇷', clinics: 78 },
    { id: 'peru', name: 'Perú', flag: '🇵🇪', clinics: 34 }
  ];

  const sponsorshipBenefits = [
    { icon: Target, title: 'Mayor Visibilidad', description: 'Tu marca aparecerá destacada en agentes' },
    { icon: Users, title: 'Más Clínicas', description: 'Llega a nuevas clínicas veterinarias' },
    { icon: Share2, title: 'Códigos de Invitación', description: 'Invita directamente a clínicas específicas' },
    { icon: Gift, title: 'Contenido Premium', description: 'Acceso prioritario a tus productos' }
  ];

  const toggleRegion = (regionId: string) => {
    setSelectedRegions(prev => 
      prev.includes(regionId) 
        ? prev.filter(id => id !== regionId)
        : [...prev, regionId]
    );
  };

  const calculateEstimatedReach = () => {
    const selectedRegionsClinics = regions
      .filter(region => selectedRegions.includes(region.id))
      .reduce((sum, region) => sum + region.clinics, 0);
    
    const reachPercentage = Math.min((sponsorshipBudget[0] / 1000) * 0.3, 0.8);
    return Math.floor(selectedRegionsClinics * reachPercentage);
  };

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Heart className="w-16 h-16 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Patrocina agentes para llegar a más clínicas
        </h2>
        <p className="text-gray-600">
          Ayuda a más clínicas a usar agentes con tu marca incluida
        </p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Configuración de patrocinio */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <DollarSign className="w-5 h-5" />
                Presupuesto de Patrocinio
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label className="text-sm font-medium">
                  Presupuesto mensual: ${sponsorshipBudget[0]} USD
                </Label>
                <Slider
                  value={sponsorshipBudget}
                  onValueChange={setSponsorshipBudget}
                  max={2000}
                  min={100}
                  step={50}
                  className="mt-2"
                />
                <div className="flex justify-between text-xs text-gray-500 mt-1">
                  <span>$100</span>
                  <span>$2,000</span>
                </div>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-purple-800 mb-2">Con este presupuesto podrás:</h4>
                <ul className="text-sm text-purple-700 space-y-1">
                  <li>• Patrocinar {Math.floor(sponsorshipBudget[0] / 40)} clínicas por mes</li>
                  <li>• Alcanzar ~{calculateEstimatedReach()} veterinarios</li>
                  <li>• Generar ~{Math.floor(sponsorshipBudget[0] * 2.5)} interacciones estimadas</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                Cobertura Geográfica
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {regions.map((region) => (
                  <button
                    key={region.id}
                    onClick={() => toggleRegion(region.id)}
                    className={`p-3 rounded-lg border-2 transition-all text-left ${
                      selectedRegions.includes(region.id)
                        ? 'border-purple-500 bg-purple-50'
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-lg">{region.flag}</span>
                      <span className="font-medium text-sm">{region.name}</span>
                    </div>
                    <span className="text-xs text-gray-600">{region.clinics} clínicas</span>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="w-5 h-5" />
                Códigos de Invitación
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="inviteCode">Código personalizado (opcional)</Label>
                <Input
                  id="inviteCode"
                  placeholder="VETPRO2024"
                  className="mt-1"
                />
              </div>
              <Button variant="outline" className="w-full">
                Generar Código Automático
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Preview y beneficios */}
        <div className="space-y-6">
          <Card className="border-green-200 bg-green-50">
            <CardHeader>
              <CardTitle className="text-green-800">Resumen de Patrocinio</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-green-700">Presupuesto mensual:</span>
                <Badge className="bg-green-600 text-white">${sponsorshipBudget[0]} USD</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700">Regiones seleccionadas:</span>
                <Badge className="bg-green-600 text-white">{selectedRegions.length}</Badge>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-green-700">Alcance estimado:</span>
                <Badge className="bg-green-600 text-white">{calculateEstimatedReach()} clínicas</Badge>
              </div>
              
              <div className="pt-4 border-t border-green-200">
                <h4 className="font-semibold text-green-800 mb-2">
                  Ya estás patrocinando 12 clínicas con tu marca activa
                </h4>
                <div className="text-sm text-green-700">
                  Invirtiendo $480 USD este mes
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Beneficios del Patrocinio</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {sponsorshipBenefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                      <benefit.icon className="w-5 h-5 text-purple-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{benefit.title}</h4>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Button 
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            size="lg"
          >
            Activar Patrocinio
          </Button>
        </div>
      </div>
    </div>
  );
};
