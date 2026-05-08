import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Scan, ShieldAlert, BookOpen, Smartphone, ChevronRight, CheckCircle2, AlertTriangle, Info } from "lucide-react";

const brandLogo = "/logo.png?v=2";
const heroPhoneMockup = "/phone-mockup-original.png?v=1";
const howItWorksPhoneMockup = "/phone-mockup.png?v=1";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Home() {
  return (
    <div id="top" className="min-h-screen bg-background text-foreground flex flex-col overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <a
              href="#top"
              aria-label="Retour en haut de page"
              className="inline-flex items-center"
            >
              <img src={brandLogo} alt="Horizon Impact Logo" className="h-16 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-secondary/80">
            <a href="#le-probleme" className="hover:text-primary transition-colors">Objectif neutre</a>
            <a href="#comment-ca-marche" className="hover:text-primary transition-colors">Modules de scan</a>
            <a href="#ce-qu-on-detecte" className="hover:text-primary transition-colors">Analyse & profil</a>
          </nav>
          <Button
            asChild
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-full px-6 shadow-sm hover:shadow-md transition-all"
          >
            <a
              href="https://scanni.horizon-impact.site"
              target="_blank"
              rel="noreferrer"
            >
              Essayer Scanni
            </a>
          </Button>
        </div>
      </header>

      <main className="flex-grow pt-20">
        {/* Hero Section */}
        <section className="relative pt-24 pb-32 overflow-hidden">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="max-w-xl"
              >
                <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-semibold text-sm mb-6">
                  <Scan className="w-4 h-4" />
                  <span>Analyse nutritionnelle anonyme et objective</span>
                </motion.div>
                <motion.h1 variants={fadeIn} className="text-5xl lg:text-6xl font-extrabold text-secondary leading-[1.1] mb-6">
                  Comprenez la composition <span className="text-primary">sans biais.</span>
                </motion.h1>
                <motion.p variants={fadeIn} className="text-lg lg:text-xl text-secondary/70 leading-relaxed mb-10">
                  L'application decode ingredients, valeurs nutritionnelles et plats prepares en ignorant les marques. Vous obtenez une lecture neutre, claire et personnalisee selon votre profil.
                </motion.p>
                <motion.div variants={fadeIn} className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white text-lg rounded-full px-8 h-14 shadow-lg shadow-primary/20"
                  >
                    <a
                      href="https://scanni.horizon-impact.site"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Essayer Scanni
                      <ChevronRight className="w-5 h-5 ml-2" />
                    </a>
                  </Button>
                </motion.div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative -rotate-6 origin-center"
              >
                <div className="aspect-[4/3] rounded-[2rem] overflow-visible relative flex items-center justify-center">
                  <img 
                    src={heroPhoneMockup}
                    alt="Mockup de l'application sur smartphone"
                    className="w-[145%] h-[145%] object-contain drop-shadow-2xl"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* The Problem Section */}
        <section id="le-probleme" className="py-24 bg-white relative">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Un decodeur nutritionnel neutre, <br/>sans identification de marque.
              </h2>
              <p className="text-lg text-secondary/70">
                Le systeme analyse uniquement les donnees brutes: ingredients, tableau nutritionnel et elements visuels d'un plat. Aucun logo ni nom commercial n'est utilise dans l'evaluation.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Info className="w-8 h-8 text-primary" />,
                  title: "OCR des etiquettes",
                  desc: "Reconnaissance optique des ingredients et des valeurs nutritionnelles des produits emballes."
                },
                {
                  icon: <BookOpen className="w-8 h-8 text-primary" />,
                  title: "Vision des produits bruts/plats",
                  desc: "Identification d'aliments simples ou de plats cuisines a partir d'une photo, sans dependre d'une marque."
                },
                {
                  icon: <ShieldAlert className="w-8 h-8 text-primary" />,
                  title: "Neutralite par conception",
                  desc: "L'analyse se concentre sur la composition nutritionnelle et les additifs, jamais sur le marketing produit."
                }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <Card className="bg-muted/30 border-none shadow-none h-full hover:bg-muted/50 transition-colors">
                    <CardContent className="p-8">
                      <div className="w-16 h-16 rounded-2xl bg-white flex items-center justify-center shadow-sm mb-6">
                        {item.icon}
                      </div>
                      <h3 className="text-xl font-bold text-secondary mb-3">{item.title}</h3>
                      <p className="text-secondary/70 leading-relaxed">
                        {item.desc}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works Section */}
        <section id="comment-ca-marche" className="py-24 bg-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="order-2 lg:order-1"
              >
                <div className="w-full flex items-center justify-center">
                  <img 
                    src={howItWorksPhoneMockup}
                    alt="Mockup de l'application Scanni sur smartphone"
                    className="w-full max-w-[420px] lg:max-w-[520px] h-auto object-contain scale-110 lg:scale-125 origin-center"
                  />
                </div>
              </motion.div>

              <motion.div 
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={staggerContainer}
                className="order-1 lg:order-2"
              >
                <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-10">
                  Module d'analyse et d'affichage,<br/>clair et objectif.
                </h2>

                <div className="space-y-8">
                  {[
                    {
                      step: "01",
                      title: "Visualisation neutre",
                      desc: "Jauges monochromes (bleu/gris) pour sucre, sel et lipides, sans code couleur alarmiste."
                    },
                    {
                      step: "02",
                      title: "Calcul des AJR",
                      desc: "Chaque valeur est convertie en pourcentage des apports journaliers recommandes (references OMS)."
                    },
                    {
                      step: "03",
                      title: "Decodeur d'additifs",
                      desc: "Lexique integre qui explique la fonction scientifique de chaque E-number detecte."
                    }
                  ].map((item, i) => (
                    <motion.div variants={fadeIn} key={i} className="flex gap-6">
                      <div className="shrink-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 text-primary font-bold text-lg flex items-center justify-center">
                          {item.step}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-secondary mb-2">{item.title}</h3>
                        <p className="text-secondary/70">{item.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* What we detect */}
        <section id="ce-qu-on-detecte" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold text-secondary mb-6">
                Module sante et profil utilisateur
              </h2>
              <p className="text-lg text-secondary/70">
                L'utilisateur configure ses restrictions pour obtenir un filtrage intelligent et un suivi personnel, sans message agressif.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <Card className="bg-gradient-to-br from-white to-muted/50 border-border overflow-hidden">
                <CardContent className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <ShieldAlert className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Profil et filtrage personnalise</h3>
                  <p className="text-secondary/70 mb-6 leading-relaxed">
                    Chaque utilisateur peut renseigner ses sensibilites (diabete, hypertension, allergies) pour adapter la lecture de la composition.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Diabete
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Hypertension
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Allergies
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-bl from-white to-muted/50 border-border overflow-hidden">
                <CardContent className="p-10">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                    <AlertTriangle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold text-secondary mb-4">Historique d'analyses</h3>
                  <p className="text-secondary/70 mb-6 leading-relaxed">
                    Les analyses sont sauvegardees pour permettre un suivi personnel des habitudes alimentaires dans le temps.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Journal des scans OCR
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Historique des plats analyses
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-secondary/80">
                      <CheckCircle2 className="w-5 h-5 text-primary" /> Suivi personnel confidentiel
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Ingredients visual / Lifestyle */}
        <section className="py-0 relative h-[60vh] min-h-[400px] flex items-center justify-center">
          <div className="absolute inset-0">
             <img 
              src="/ingredients.png" 
              alt="Fresh natural ingredients" 
              className="w-full h-full object-cover"
              onError={(e) => {
                (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=1920&q=80";
              }}
            />
            <div className="absolute inset-0 bg-secondary/80 backdrop-blur-sm"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Analysez vos produits avec neutralite.
            </h2>
            <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              Une approche scientifique, anonyme et personnalisable pour comprendre ce que vous mangez, sans jugement de valeur.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-white text-lg rounded-full px-10 h-14 shadow-xl"
            >
              <a
                href="https://scanni.horizon-impact.site"
                target="_blank"
                rel="noreferrer"
              >
                <Smartphone className="w-5 h-5 mr-2" />
                Lancer une analyse
              </a>
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-border pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src={brandLogo} alt="Horizon Impact Logo" className="h-20 w-auto" />
              </div>
              <p className="text-secondary/60 max-w-sm mb-8 leading-relaxed">
                Application mobile d'analyse nutritionnelle neutre: OCR, reconnaissance visuelle, jauges objectives, AJR OMS et decodeur d'additifs.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-secondary mb-6">Modules</h4>
              <ul className="space-y-4 text-secondary/70">
                <li><a href="#" className="hover:text-primary transition-colors">Scan OCR & Vision</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Analyse neutre</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">AJR & E-numbers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Profil optionnel</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-secondary mb-6">Principes</h4>
              <ul className="space-y-4 text-secondary/70">
                <li><a href="#" className="hover:text-primary transition-colors">Aucune marque analysee</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Aucun jugement de valeur</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Donnees personnelles minimales</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Suivi utilisateur confidentiel</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-secondary/50 text-sm">
              © {new Date().getFullYear()} Horizon Impact.
            </p>
            <div className="flex gap-6 text-sm text-secondary/50">
              <span>Transparence nutritionnelle, sans biais.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
