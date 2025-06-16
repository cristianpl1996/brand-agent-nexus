
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { BrandRegistration } from './wizard/BrandRegistration';
import { ContentUpload } from './wizard/ContentUpload';
import { ClinicsManagement } from './wizard/ClinicsManagement';
import { SponsorshipModule } from './wizard/SponsorshipModule';
import { ReportsMetrics } from './wizard/ReportsMetrics';
import { FinalSummary } from './wizard/FinalSummary';

const steps = [
  { id: 1, title: 'Registro de Marca', description: 'Identifica tu marca veterinaria' },
  { id: 2, title: 'Contenido', description: 'Sube información de productos' },
  { id: 3, title: 'Clínicas', description: 'Gestiona clínicas vinculadas' },
  { id: 4, title: 'Patrocinio', description: 'Patrocina nuevos agentes' },
  { id: 5, title: 'Métricas', description: 'Ve el uso de tu marca' },
  { id: 6, title: 'Resumen', description: 'Configura tu presencia' },
];

export const BrandWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [brandData, setBrandData] = useState({
    name: '',
    logo: null,
    type: '',
    content: [],
    clinics: [],
    sponsorship: {},
    metrics: {},
  });

  const updateBrandData = (field: string, value: any) => {
    setBrandData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return <BrandRegistration data={brandData} updateData={updateBrandData} />;
      case 2:
        return <ContentUpload data={brandData} updateData={updateBrandData} />;
      case 3:
        return <ClinicsManagement data={brandData} updateData={updateBrandData} />;
      case 4:
        return <SponsorshipModule data={brandData} updateData={updateBrandData} />;
      case 5:
        return <ReportsMetrics data={brandData} updateData={updateBrandData} />;
      case 6:
        return <FinalSummary data={brandData} updateData={updateBrandData} />;
      default:
        return null;
    }
  };

  const progressPercentage = (currentStep / steps.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header con barra de progreso */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Panel de Marcas Veterinarias
            </h1>
            <div className="text-sm text-gray-500">
              Paso {currentStep} de {steps.length}
            </div>
          </div>
          
          {/* Barra de progreso */}
          <div className="mb-4">
            <Progress value={progressPercentage} className="h-2" />
          </div>
          
          {/* Steps indicator */}
          <div className="flex justify-between text-xs">
            {steps.map((step) => (
              <div 
                key={step.id} 
                className={`flex flex-col items-center ${
                  step.id <= currentStep ? 'text-purple-600' : 'text-gray-400'
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-1 ${
                    step.id <= currentStep 
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  {step.id}
                </div>
                <span className="font-medium">{step.title}</span>
                <span className="text-gray-500">{step.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="max-w-6xl mx-auto px-6 py-8">
        <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-gray-800">
              {steps[currentStep - 1].title}
            </CardTitle>
            <p className="text-gray-600 text-lg">
              {steps[currentStep - 1].description}
            </p>
          </CardHeader>
          
          <CardContent className="px-8 py-6">
            {renderStepContent()}
          </CardContent>
        </Card>

        {/* Navegación */}
        <div className="flex justify-between mt-8">
          <Button
            variant="outline"
            onClick={prevStep}
            disabled={currentStep === 1}
            className="flex items-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" />
            Anterior
          </Button>
          
          <Button
            onClick={nextStep}
            disabled={currentStep === steps.length}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
          >
            {currentStep === steps.length ? 'Finalizar' : 'Siguiente'}
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};
