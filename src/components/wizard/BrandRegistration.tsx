
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Upload, Building2 } from 'lucide-react';

interface BrandRegistrationProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const BrandRegistration: React.FC<BrandRegistrationProps> = ({ data, updateData }) => {
  const brandTypes = [
    { id: 'alimento', label: 'Alimento', icon: '🥘' },
    { id: 'medicamentos', label: 'Medicamentos', icon: '💊' },
    { id: 'suplementos', label: 'Suplementos', icon: '🧬' },
    { id: 'otros', label: 'Otros', icon: '📦' },
  ];

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Building2 className="w-16 h-16 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          ¿Cuál es el nombre comercial de tu marca?
        </h2>
        <p className="text-gray-600">
          Esta información nos ayudará a identificar tu marca en el ecosistema veterinario
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Información básica */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Información Básica</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="brandName" className="text-sm font-medium">
                Nombre de la Marca *
              </Label>
              <Input
                id="brandName"
                value={data.name}
                onChange={(e) => updateData('name', e.target.value)}
                placeholder="Ej: VetNutrition Pro"
                className="mt-1"
              />
            </div>

            <div>
              <Label className="text-sm font-medium">Logo (Opcional)</Label>
              <div className="mt-2 border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-purple-500 transition-colors cursor-pointer">
                <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600">
                  Arrastra tu logo aquí o haz clic para seleccionar
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  PNG, JPG hasta 2MB
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tipo de productos */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tipo de Productos</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              {brandTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => updateData('type', type.id)}
                  className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                    data.type === type.id
                      ? 'border-purple-500 bg-purple-50'
                      : 'border-gray-200 hover:border-purple-300'
                  }`}
                >
                  <div className="text-2xl mb-2">{type.icon}</div>
                  <div className="text-sm font-medium text-gray-800">
                    {type.label}
                  </div>
                </button>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Preview */}
      {data.name && (
        <Card className="border-green-200 bg-green-50">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center text-white font-bold">
                {data.name.charAt(0).toUpperCase()}
              </div>
              <div>
                <h3 className="font-semibold text-green-800">{data.name}</h3>
                <p className="text-sm text-green-600">
                  {brandTypes.find(t => t.id === data.type)?.label || 'Tipo no seleccionado'}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
