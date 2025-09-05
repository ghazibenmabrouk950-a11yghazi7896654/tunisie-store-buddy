import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Qu'est-ce qu'une Mystery Box ?",
      answer: "Une Mystery Box est une boîte surprise contenant des produits soigneusement sélectionnés dont la valeur totale dépasse le prix d'achat. C'est une expérience unique qui vous permet de découvrir des articles exclusifs et variés."
    },
    {
      question: "Comment puis-je payer ?",
      answer: "Nous acceptons plusieurs méthodes de paiement : paiement à la livraison (cash), virements bancaires, et cartes bancaires. Vous pouvez choisir la méthode qui vous convient le mieux lors de la commande."
    },
    {
      question: "Est-ce que la livraison est disponible partout en Tunisie ?",
      answer: "Oui, nous livrons dans tous les gouvernorats de Tunisie. Les frais de livraison varient selon votre région et seront calculés lors de votre commande."
    },
    {
      question: "Quelle est la valeur des produits dans la box ?",
      answer: "Nous garantissons que la valeur totale des produits dans chaque Mystery Box est toujours supérieure au prix d'achat. C'est notre engagement envers nos clients."
    },
    {
      question: "Puis-je retourner ma Mystery Box ?",
      answer: "Étant donné la nature surprise de nos produits, les retours ne sont généralement pas acceptés sauf en cas de produits défectueux ou de problème de livraison."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Questions fréquentes</h2>
          <p className="text-xl text-muted-foreground">
            Tout ce que vous devez savoir sur Boxu
          </p>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border border-border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <AccordionTrigger className="text-left text-lg font-semibold hover:text-black">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed pt-2">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;