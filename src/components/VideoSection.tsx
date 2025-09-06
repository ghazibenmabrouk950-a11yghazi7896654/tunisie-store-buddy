import { Card } from "@/components/ui/card";

const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              Mystery Box
              <span className="block text-muted-foreground">Découvrez la surprise !</span>
            </h2>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Un seul produit. Une seule chance.
              </p>
              <p className="text-xl font-semibold text-foreground">
                Serez-vous prêt ?
              </p>
            </div>

            <div className="space-y-4">
              <div className="text-3xl font-bold text-foreground">99,000 TND</div>
              <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                <span>✓ Livraison dans toute la Tunisie</span>
                <span>✓ Valeur supérieure au prix d'achat</span>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-muted-foreground">
                Une expérience unique vous attend.
                Chaque Mystery Box contient des surprises soigneusement sélectionnées 
                d'une valeur supérieure au prix d'achat.
              </p>
            </div>
          </div>

          {/* Right Side - YouTube Video */}
          <div className="flex justify-center">
            <Card className="w-full max-w-lg overflow-hidden shadow-lg">
              <div className="relative aspect-video">
                <iframe
                  src="https://www.youtube.com/embed/ajZAz1wCA04"
                  title="Mystery Box Unboxing Video"
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <div className="p-4 bg-card">
                <h3 className="font-semibold text-card-foreground text-center">
                  MYSTERY BOX
                </h3>
                <p className="text-sm text-muted-foreground text-center mt-1">
                  Découvrez ce qui vous attend !
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;