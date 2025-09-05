import { ShoppingCart, Truck, Gift } from "lucide-react";
import { Card } from "@/components/ui/card";

const ProcessSteps = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Étape 1",
      subtitle: "Commandez votre Boxu",
      description: "Cliquez sur 'Acheter maintenant' et finalisez votre commande en quelques clics."
    },
    {
      icon: Truck,
      title: "Étape 2", 
      subtitle: "Attendez la livraison",
      description: "Votre Mystery Box sera livrée directement chez vous sous 3-5 jours ouvrables."
    },
    {
      icon: Gift,
      title: "Étape 3",
      subtitle: "Découvrez votre surprise",
      description: "Ouvrez votre box et découvrez les produits exclusifs qui vous attendent !"
    }
  ];

  return (
    <section className="py-20 bg-gradient-subtle">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Comment ça marche ?</h2>
          <p className="text-xl text-muted-foreground">
            Trois étapes simples pour vivre l'expérience Boxu
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={index} className="p-8 text-center hover:shadow-elegant transition-all duration-300 border-0 bg-white">
                <div className="mb-6">
                  <div className="w-20 h-20 bg-mystery rounded-full mx-auto flex items-center justify-center mb-4">
                    <Icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <h4 className="text-lg font-semibold text-mystery mb-4">{step.subtitle}</h4>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;