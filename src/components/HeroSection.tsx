import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-mystery via-primary to-black text-white flex items-center justify-center px-4">
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Mystery Box
              <span className="block text-gold">Découvrez la surprise !</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-lg">
              Un seul produit. Une seule chance.
              <br />
              <span className="text-gold font-semibold">Serez-vous prêt ?</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-bold text-gold">99,000 TND</div>
            <Button 
              size="lg" 
              className="bg-gold text-primary hover:bg-gold/90 text-xl px-12 py-6 rounded-xl shadow-gold"
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ACHETER MAINTENANT
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-400">
            <span>✓ Livraison dans toute la Tunisie</span>
            <span>✓ Valeur supérieure au prix d'achat</span>
          </div>
        </div>

        {/* Right Side - Mystery Box Visual */}
        <div className="flex justify-center">
          <Card className="bg-black/50 border-gold/30 backdrop-blur-sm p-8 rounded-2xl shadow-mystery">
            <div className="relative">
              <div className="w-64 h-64 bg-black rounded-xl border-2 border-gold/50 flex items-center justify-center">
                <div className="text-8xl text-gold animate-pulse">?</div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-mystery/20 rounded-2xl blur-xl -z-10"></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-gold mb-2">Mystery Box</h3>
              <p className="text-gray-300 text-sm">
                Une expérience unique vous attend.
                Chaque Mystery Box contient des surprises soigneusement sélectionnées 
                d'une valeur supérieure au prix d'achat.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;