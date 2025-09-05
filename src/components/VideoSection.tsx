const VideoSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Découvrez l'expérience Mystery Box
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Regardez cette vidéo pour voir ce qui vous attend dans nos Mystery Box exclusives
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border">
            <iframe
              src="https://www.youtube.com/embed/ajZAz1wCA04"
              title="Mystery Box Unboxing Video"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="absolute -inset-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-3xl blur-xl -z-10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📦</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Contenu Mystère</h3>
            <p className="text-muted-foreground">
              Chaque box contient des produits surprises d'une valeur supérieure au prix d'achat
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎁</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Qualité Garantie</h3>
            <p className="text-muted-foreground">
              Tous nos produits sont soigneusement sélectionnés et authentiques
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🚀</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">Expérience Unique</h3>
            <p className="text-muted-foreground">
              Vivez l'excitation de découvrir vos surprises à chaque ouverture
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;