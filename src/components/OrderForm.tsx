import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const OrderForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    address: "",
    governorate: ""
  });

  const governorates = [
    "Tunis", "Ariana", "Ben Arous", "Manouba", "Nabeul", "Zaghouan", "Bizerte",
    "Béja", "Jendouba", "Kef", "Siliana", "Sousse", "Monastir", "Mahdia",
    "Sfax", "Kairouan", "Kasserine", "Sidi Bouzid", "Gabès", "Médenine",
    "Tataouine", "Gafsa", "Tozeur", "Kebili"
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validation
    if (!formData.fullName || !formData.phone || !formData.address || !formData.governorate) {
      toast({
        title: "Erreur",
        description: "Veuillez remplir tous les champs obligatoires.",
        variant: "destructive"
      });
      return;
    }

    // Simulate order processing
    toast({
      title: "Commande reçue !",
      description: "Votre Mystery Box sera livrée sous 3-5 jours ouvrables. Merci pour votre confiance !",
    });

    // Reset form
    setFormData({
      fullName: "",
      phone: "",
      address: "",
      governorate: ""
    });
  };

  return (
    <section id="order-form" className="py-20 bg-gradient-subtle">
      <div className="container max-w-2xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Formulaire d'achat</h2>
          <p className="text-xl text-muted-foreground">
            Remplissez le formulaire ci-dessous pour commander votre Mystery Box
          </p>
        </div>

        <Card className="p-8 shadow-elegant border-0">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-base font-semibold">
                Nom complet <span className="text-destructive">*</span>
              </Label>
              <Input
                id="fullName"
                type="text"
                placeholder="Votre nom complet"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="text-base font-semibold">
                Téléphone <span className="text-destructive">*</span>
              </Label>
              <Input
                id="phone"
                type="tel"
                placeholder="Votre numéro de téléphone"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="governorate" className="text-base font-semibold">
                Gouvernorat <span className="text-destructive">*</span>
              </Label>
              <Select 
                value={formData.governorate} 
                onValueChange={(value) => setFormData({ ...formData, governorate: value })}
                required
              >
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="Sélectionnez un gouvernorat" />
                </SelectTrigger>
                <SelectContent>
                  {governorates.map((gov) => (
                    <SelectItem key={gov} value={gov}>
                      {gov}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="address" className="text-base font-semibold">
                Adresse complète <span className="text-destructive">*</span>
              </Label>
              <Input
                id="address"
                type="text"
                placeholder="Votre adresse complète"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="h-12 text-base"
                required
              />
            </div>

            <div className="border-t pt-6">
              <div className="flex justify-between items-center mb-6">
                <span className="text-lg font-semibold">Total:</span>
                <span className="text-2xl font-bold text-mystery">99,000 TND</span>
              </div>
              
              <Button 
                type="submit" 
                className="w-full h-14 text-lg bg-mystery hover:bg-mystery/90 text-white rounded-xl shadow-mystery"
              >
                ACHETER MAINTENANT
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};

export default OrderForm;