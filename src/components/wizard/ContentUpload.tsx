
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Upload, FileText, Globe, BookOpen, MessageSquare, CheckCircle } from 'lucide-react';

interface ContentUploadProps {
  data: any;
  updateData: (field: string, value: any) => void;
}

export const ContentUpload: React.FC<ContentUploadProps> = ({ data, updateData }) => {
  const [activeTab, setActiveTab] = useState('documents');

  const uploadOptions = [
    {
      id: 'documents',
      title: 'Documentos PDF',
      icon: FileText,
      description: 'Fichas técnicas, manuales, catálogos'
    },
    {
      id: 'website',
      title: 'Página Web',
      icon: Globe,
      description: 'URL de tu sitio web corporativo'
    },
    {
      id: 'manuals',
      title: 'Manuales de Uso',
      icon: BookOpen,
      description: 'Guías de aplicación y dosificación'
    },
    {
      id: 'faq',
      title: 'Preguntas Frecuentes',
      icon: MessageSquare,
      description: 'FAQ sobre tus productos'
    }
  ];

  const activeOption = uploadOptions.find(opt => opt.id === activeTab);
  const ActiveIcon = activeOption?.icon;

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <Upload className="w-16 h-16 mx-auto mb-4 text-purple-600" />
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Sube la información de tus productos
        </h2>
        <p className="text-gray-600">
          Esta información se usará para entrenar los agentes de clínicas que trabajen con tu marca
        </p>
      </div>

      {/* Tabs de opciones de subida */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {uploadOptions.map((option) => (
          <button
            key={option.id}
            onClick={() => setActiveTab(option.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
              activeTab === option.id
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white'
                : 'bg-white border border-gray-200 hover:border-purple-300'
            }`}
          >
            <option.icon className="w-4 h-4" />
            {option.title}
          </button>
        ))}
      </div>

      {/* Contenido de cada tab */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            {ActiveIcon && <ActiveIcon className="w-5 h-5" />}
            {activeOption?.title}
          </CardTitle>
          <p className="text-gray-600">
            {activeOption?.description}
          </p>
        </CardHeader>
        
        <CardContent>
          {activeTab === 'documents' && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center hover:border-purple-500 transition-colors cursor-pointer">
                <FileText className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg font-semibold mb-2">Arrastra tus archivos PDF aquí</h3>
                <p className="text-gray-600 mb-4">
                  O haz clic para seleccionar archivos desde tu computadora
                </p>
                <Button variant="outline">
                  Seleccionar Archivos
                </Button>
              </div>
              
              {/* Lista de archivos subidos */}
              <div className="space-y-2">
                {['ficha-tecnica-producto-a.pdf', 'catalogo-productos-2024.pdf'].map((file, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 bg-green-50 rounded-lg border border-green-200">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-sm font-medium text-green-800">{file}</span>
                    <span className="text-xs text-green-600 ml-auto">Procesado</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'website' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="website">URL de tu sitio web</Label>
                <Input
                  id="website"
                  placeholder="https://www.tumarca.com"
                  className="mt-1"
                />
              </div>
              <Button className="w-full">
                Analizar Sitio Web
              </Button>
            </div>
          )}

          {activeTab === 'manuals' && (
            <div className="space-y-4">
              <div className="border-2 border-dashed border-purple-300 rounded-lg p-8 text-center">
                <BookOpen className="w-12 h-12 mx-auto mb-4 text-purple-500" />
                <h3 className="text-lg font-semibold mb-2">Manuales de uso y aplicación</h3>
                <p className="text-gray-600 mb-4">
                  Sube guías de dosificación, instrucciones de uso, protocolos
                </p>
                <Button variant="outline">
                  Subir Manuales
                </Button>
              </div>
            </div>
          )}

          {activeTab === 'faq' && (
            <div className="space-y-4">
              <div>
                <Label htmlFor="faq">Preguntas frecuentes sobre tus productos</Label>
                <Textarea
                  id="faq"
                  placeholder="Escribe las preguntas y respuestas más comunes sobre tus productos..."
                  rows={8}
                  className="mt-1"
                />
              </div>
              <Button className="w-full">
                Guardar FAQ
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Resumen de contenido */}
      <Card className="border-blue-200 bg-blue-50">
        <CardContent className="p-4">
          <div className="flex items-center gap-3 mb-3">
            <CheckCircle className="w-6 h-6 text-blue-600" />
            <h3 className="font-semibold text-blue-800">
              Tu contenido se usará para entrenar los agentes de clínicas
            </h3>
          </div>
          <p className="text-blue-700 text-sm">
            Cuando las clínicas veterinarias activen agentes con tu marca, podrán consultar 
            toda esta información para brindar mejores recomendaciones a sus pacientes.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
