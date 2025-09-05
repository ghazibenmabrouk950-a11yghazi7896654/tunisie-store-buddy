import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const HeroSection = () => {
  return (
    <section className="min-h-screen relative text-white flex items-center justify-center px-4" style={{backgroundImage: 'url(/lovable-uploads/ba213b92-aa78-4178-9ace-522a56e19edc.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
      <div className="container max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Content */}
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white">
              Mystery Box
              <span className="block text-white">Découvrez la surprise !</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-lg">
              Un seul produit. Une seule chance.
              <br />
              <span className="text-white font-semibold">Serez-vous prêt ?</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <div className="text-4xl font-bold text-white">99,000 TND</div>
            <Button 
              size="lg" 
              className="bg-white text-black hover:bg-gray-100 text-xl px-12 py-6 rounded-xl shadow-lg"
              onClick={() => document.getElementById('order-form')?.scrollIntoView({ behavior: 'smooth' })}
            >
              ACHETER MAINTENANT
            </Button>
          </div>

          <div className="flex items-center space-x-4 text-sm text-gray-200">
            <span>✓ Livraison dans toute la Tunisie</span>
            <span>✓ Valeur supérieure au prix d'achat</span>
          </div>
        </div>

        {/* Right Side - Mystery Box Visual */}
        <div className="flex justify-center">
          <Card className="bg-white/10 border-white/30 backdrop-blur-sm p-8 rounded-2xl shadow-lg">
            <div className="relative">
              <div className="w-64 h-64 bg-black rounded-xl border-2 border-white/50 flex items-center justify-center">
                <div className="text-8xl text-white animate-pulse">?</div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-white/10 to-black/20 rounded-2xl blur-xl -z-10"></div>
            </div>
            <div className="mt-6 text-center">
              <h3 className="text-xl font-semibold text-white mb-2">Mystery Box</h3>
              <p className="text-gray-200 text-sm">
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